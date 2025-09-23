<?php
// process_chat.php - Backend processor for the India Travel Assistant chatbot

// Set header to respond with JSON
header('Content-Type: application/json');

// Database configuration
$db_config = array(
    'host' => 'localhost',
    'username' => 'your_username',
    'password' => 'your_password',
    'database' => 'india_travel_assistant'
);

// Initialize response array
$response = array(
    'status' => 'error',
    'response' => 'Sorry, I could not process your request.'
);

// Get input data
$message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';
$state = isset($_POST['state']) ? htmlspecialchars($_POST['state']) : '';

// Function to clean user input
function cleanInput($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}

// Clean inputs
$message = cleanInput($message);
$state = cleanInput($state);

// Check if message is empty
if (empty($message)) {
    $response['response'] = "I didn't receive any question. How can I help you with your travel plans?";
    echo json_encode($response);
    exit;
}

// Connect to database
try {
    $conn = new mysqli($db_config['host'], $db_config['username'], $db_config['password'], $db_config['database']);
    
    // Check connection
    if ($conn->connect_error) {
        throw new Exception("Database connection failed: " . $conn->connect_error);
    }
    
    // Log the query for analysis
    $stmt = $conn->prepare("INSERT INTO query_logs (message, state, timestamp) VALUES (?, ?, NOW())");
    $stmt->bind_param("ss", $message, $state);
    $stmt->execute();
    $stmt->close();
    
    // Process the query to identify the intent
    $intent = identifyIntent($message);
    
    // Get response based on intent and state
    $botResponse = generateResponse($conn, $intent, $state, $message);
    
    $response['status'] = 'success';
    $response['response'] = $botResponse;
    
    // Close connection
    $conn->close();
} catch (Exception $e) {
    // In case of database connection error, use fallback responses
    $response['response'] = fallbackResponse($message, $state);
    error_log("Database error: " . $e->getMessage());
}

// Send response back to client
echo json_encode($response);
exit;

/**
 * Identify the intent of the user message
 * @param string $message User message
 * @return string Intent category
 */
function identifyIntent($message) {
    $message = strtolower($message);
    
    $intents = array(
        'greeting' => array('hello', 'hi', 'hey', 'greetings', 'namaste'),
        'attractions' => array('attraction', 'place', 'visit', 'see', 'tourist', 'landmark', 'monument', 'sightseeing'),
        'food' => array('food', 'eat', 'cuisine', 'dish', 'restaurant', 'meal', 'delicacy'),
        'transportation' => array('reach', 'get to', 'travel', 'transport', 'flight', 'train', 'bus', 'car', 'how to go'),
        'accommodation' => array('stay', 'hotel', 'resort', 'hostel', 'accommodation', 'lodge', 'booking'),
        'weather' => array('weather', 'climate', 'temperature', 'rain', 'season', 'monsoon'),
        'best_time' => array('best time', 'when to visit', 'season to visit', 'ideal time', 'good time'),
        'festivals' => array('festival', 'celebration', 'cultural event', 'fair', 'tradition'),
        'cost' => array('cost', 'budget', 'expense', 'price', 'how much', 'affordable'),
        'safety' => array('safe', 'safety', 'security', 'danger', 'risk', 'precaution'),
        'language' => array('language', 'speak', 'communication', 'dialect'),
        'duration' => array('how long', 'duration', 'days', 'trip length', 'itinerary', 'plan')
    );
    
    foreach ($intents as $intent => $keywords) {
        foreach ($keywords as $keyword) {
            if (strpos($message, $keyword) !== false) {
                return $intent;
            }
        }
    }
    
    return 'general'; // Default intent
}

/**
 * Generate response based on intent and state
 * @param mysqli $conn Database connection
 * @param string $intent Query intent
 * @param string $state Selected state
 * @param string $message Original message
 * @return string Bot response
 */
function generateResponse($conn, $intent, $state, $message) {
    // If we have a specific state, format it for display
    $stateDisplay = '';
    if (!empty($state)) {
        $stateDisplay = ucwords(str_replace('-', ' ', $state));
    }
    
    // Try to get response from database
    $response = getDatabaseResponse($conn, $intent, $state);
    
    if (!empty($response)) {
        return $response;
    }
    
    // If no database response available, use hardcoded fallback responses
    return fallbackResponse($message, $state, $intent);
}

/**
 * Get response from database
 * @param mysqli $conn Database connection
 * @param string $intent Query intent
 * @param string $state Selected state
 * @return string Response from database or empty if not found
 */
function getDatabaseResponse($conn, $intent, $state) {
    // Prepare statement to prevent SQL injection
    $sql = "SELECT response FROM responses WHERE intent = ? AND (state = ? OR state = 'all') ORDER BY CASE WHEN state = ? THEN 0 ELSE 1 END LIMIT 1";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $intent, $state, $state);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row['response'];
    }
    
    return '';
}

/**
 * Generate fallback responses when database is unavailable
 * @param string $message Original message
 * @param string $state Selected state
 * @param string $intent Identified intent (optional)
 * @return string Fallback response
 */
function fallbackResponse($message, $state, $intent = null) {
    $message = strtolower($message);
    $stateDisplay = '';
    
    if (!empty($state)) {
        $stateDisplay = ucwords(str_replace('-', ' ', $state));
    }
    
    // If intent is not provided, identify it
    if ($intent === null) {
        $intent = identifyIntent($message);
    }
    
    // Generic responses based on intent
    $responses = array(
        'greeting' => "Hello! How can I help you plan your trip to " . (!empty($stateDisplay) ? $stateDisplay : "India") . "?",
        
        'attractions' => array(
            'kerala' => "Kerala offers beautiful backwaters in Alleppey, hill stations like Munnar, beaches like Kovalam and Varkala, and wildlife sanctuaries like Periyar. The houseboats on the backwaters are a must-experience!",
            'rajasthan' => "Rajasthan is home to magnificent forts and palaces like Amber Fort and Hawa Mahal in Jaipur, Mehrangarh Fort in Jodhpur, City Palace in Udaipur, and the golden city of Jaisalmer.",
            'goa' => "Goa is famous for its beaches like Calangute, Baga, and Anjuna, Portuguese architecture in Old Goa, churches like Basilica of Bom Jesus, and vibrant nightlife.",
            'delhi' => "Delhi offers a rich blend of history and modernity with attractions like Red Fort, Qutub Minar, Humayun's Tomb, India Gate, Lotus Temple, Akshardham Temple, Jama Masjid, and the vibrant markets of Chandni Chowk, Sarojini Nagar, and Connaught Place.",
            'default' => "Each Indian state has unique attractions ranging from historical monuments to natural wonders. " . (!empty($stateDisplay) ? $stateDisplay : "India") . " has several must-visit places including temples, forts, natural landscapes, and cultural sites."
        ),
        
        'food' => array(
            'punjab' => "Punjab is famous for butter chicken, sarson da saag with makki di roti, chole bhature, lassi, and various tandoori dishes. Don't miss the langar (community kitchen) at the Golden Temple in Amritsar.",
            'kerala' => "Kerala cuisine features appam with stew, puttu, Kerala fish curry, seafood, beef fry, and sadya (traditional feast served on banana leaf). Coconut is a key ingredient in many dishes.",
            'bengal' => "Bengali cuisine is known for fish preparations, mishti doi (sweet yogurt), rasgulla, sandesh, and the elaborate multi-course meal structure. Try the famous kathi rolls and biryani in Kolkata.",
            'gujarat' => "Gujarati cuisine is predominantly vegetarian with distinctive sweet, salty, and spicy flavors. The thali includes dhokla, khandvi, fafda, thepla, and various farsan (snacks).",
            'default' => "Indian cuisine varies dramatically across regions with diverse flavors, spices, and cooking techniques. Each state has its unique specialties, but some popular Indian dishes include butter chicken, biryani, dosas, samosas, and various vegetarian curries."
        ),
        
        'transportation' => array(
            'default' => "India has extensive transportation options. Domestic flights connect major cities. The railway network is one of the largest in the world. For local travel, options include buses, auto-rickshaws, taxis, and ride-sharing services like Uber and Ola. In " . (!empty($stateDisplay) ? $stateDisplay : "many regions") . ", you'll find region-specific transport like cycle rickshaws or ferries."
        ),
        
        'accommodation' => array(
            'default' => "India offers accommodation options for all budgets, from luxury hotels and resorts to mid-range hotels, guesthouses, hostels, and homestays. In popular tourist destinations like " . (!empty($stateDisplay) ? $stateDisplay : "major cities and tourist spots") . ", you'll find international hotel chains as well as boutique heritage properties. Booking in advance is recommended during peak tourist seasons."
        ),
        
        'weather' => array(
            'rajasthan' => "Rajasthan has a desert climate with hot summers (March-June) where temperatures can exceed 45°C. Winters (November-February) are mild and pleasant during the day but can get cold at night. Monsoon season (July-September) brings moderate rainfall.",
            'kerala' => "Kerala has a tropical climate with relatively little seasonal variation in temperature. The state experiences two monsoon seasons: the Southwest Monsoon from June to September and the Northeast Monsoon from October to November. The best weather is from December to February.",
            'default' => "India's climate varies from tropical in the south to temperate in the north. Most of India experiences three main seasons: summer (March-June), monsoon (June-September), and winter (October-February). " . (!empty($stateDisplay) ? $stateDisplay . " has" : "Different regions have") . " specific climatic conditions worth checking before planning your trip."
        ),
        
        'best_time' => array(
            'rajasthan' => "The best time to visit Rajasthan is during the winter months from October to March when the weather is pleasant for sightseeing and outdoor activities. December and January can be quite cold, especially in cities like Jaipur and Udaipur.",
            'kerala' => "The ideal time to visit Kerala is from September to March when the weather is cooler and less humid. December to February is perfect for backwater cruises and beach visits. For Ayurvedic treatments, the monsoon season (June to August) is considered beneficial.",
            'goa' => "The best time to visit Goa is from November to February when the weather is pleasant and perfect for beach activities. This is also when most festivals and events take place. Avoid the monsoon season (June to September) when many beach shacks close down.",
            'default' => "The best time to visit most parts of India is during the winter months from October to March when the weather is generally pleasant across the country. However, " . (!empty($stateDisplay) ? $stateDisplay : "each region") . " has its optimal visiting periods depending on the local climate and festivals."
        ),
        
        'festivals' => array(
            'rajasthan' => "Rajasthan hosts colorful festivals like the Pushkar Camel Fair, Jaipur Literature Festival, Desert Festival in Jaisalmer, Teej, and Gangaur which celebrate the vibrant culture and traditions of the state.",
            'kerala' => "Kerala celebrates unique festivals like Onam with boat races and flower carpets, Thrissur Pooram with decorated elephants and percussions, and Theyyam rituals in North Kerala temples.",
            'punjab' => "Punjab is famous for lively celebrations of Baisakhi (harvest festival), Lohri, and Hola Mohalla, which feature bhangra dancing, traditional wrestling, and martial arts displays.",
            'default' => "India celebrates numerous festivals throughout the year. Major national festivals include Diwali (Festival of Lights), Holi (Festival of Colors), Navratri/Durga Puja, and Eid. " . (!empty($stateDisplay) ? $stateDisplay : "Each region") . " also has its own unique cultural celebrations."
        ),
        
        'cost' => array(
            'default' => "Travel costs in India vary widely depending on your travel style. Budget travelers can manage with $20-30 per day for basic accommodation, local food, and public transport. Mid-range travelers should budget $50-100 daily, while luxury experiences can cost $200+ per day. " . (!empty($stateDisplay) ? $stateDisplay : "Popular tourist destinations") . " might be slightly more expensive, especially during peak season."
        ),
        
        'safety' => array(
            'default' => "India is generally safe for tourists, but it's advisable to take standard precautions. Keep valuables secure, be cautious in crowded areas, use reputable transportation, and respect local customs. Women travelers should dress modestly, especially at religious sites. In " . (!empty($stateDisplay) ? $stateDisplay : "tourist areas") . ", be aware of common scams and only use authorized guides and services."
        ),
        
        'language' => array(
            'default' => "Hindi and English are widely spoken across India, especially in tourist areas. " . (!empty($stateDisplay) ? $stateDisplay . " has its own regional language(s), but" : "Each state has its regional languages, but") . " you can generally get by with English in hotels, restaurants, and major attractions. Learning a few basic local phrases is always appreciated."
        ),
        
        'duration' => array(
            'rajasthan' => "Ideally, you should spend at least 7-10 days exploring Rajasthan to cover major cities like Jaipur, Jodhpur, Udaipur, Jaisalmer, and Pushkar. A two-week itinerary would allow you to explore the state at a leisurely pace.",
            'kerala' => "A minimum of 5-7 days is recommended to experience Kerala's diversity. Split your time between the backwaters (1-2 days), hill stations like Munnar (2 days), and coastal areas (2 days). Add a few more days if you want to include wildlife sanctuaries or Ayurvedic retreats.",
            'default' => "The ideal duration depends on the regions you want to cover. For a single state like " . (!empty($stateDisplay) ? $stateDisplay : "any major state") . ", 5-7 days would give you a good overview. For a comprehensive India tour covering multiple regions, 2-3 weeks is recommended. India is vast and diverse, so it's often better to explore fewer places deeply rather than trying to cover too much in a short time."
        ),
        
        'general' => array(
            'default' => "I'm your India Travel Assistant. I can help with information about attractions, food, transportation, accommodation, weather, best times to visit, festivals, costs, safety tips, language, and recommended trip durations for " . (!empty($stateDisplay) ? $stateDisplay : "various Indian states") . ". What specific information are you looking for?"
        )
    );
    
    // Return the appropriate response based on intent and state
    if (isset($responses[$intent])) {
        if (is_array($responses[$intent])) {
            $stateKey = strtolower($state);
            if (!empty($state) && isset($responses[$intent][$stateKey])) {
                return $responses[$intent][$stateKey];
            } else {
                return $responses[$intent]['default'];
            }
        } else {
            return $responses[$intent];
        }
    }
    
    // If no specific response is found, return the general default response
    return $responses['general']['default'];
}
?>