<?php
session_start();
require_once "db.php";

// Check if the user is logged in
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: login.php");
    exit();
}

// Get current page name for navigation highlighting
$current_page = basename($_SERVER['PHP_SELF']);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Travel Style Assessment | Ikigai World</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="ikigai-common.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <style>
        /* Assessment Page Specific Styles */
        .assessment-container {
            max-width: 900px;
            margin: 20px auto 60px;
            padding: 0 20px;
        }
        
        .assessment-intro {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .assessment-diagram {
            width: 300px;
            height: 300px;
            margin: 0 auto 30px;
            position: relative;
        }
        
        .circle {
            border: 2px solid rgba(104, 183, 119, 0.6);
            border-radius: 50%;
            position: absolute;
            opacity: 0.7;
            transition: all 0.3s ease;
        }
        
        .circle:hover {
            opacity: 1;
            transform: scale(1.05);
        }
        
        .circle-text {
            position: absolute;
            text-align: center;
            color: #bedbd3;
            font-weight: 600;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 14px;
        }
        
        .circle-1 {
            width: 140px;
            height: 140px;
            background: rgba(13, 48, 33, 0.6);
            top: 0;
            left: 0;
        }
        
        .circle-2 {
            width: 140px;
            height: 140px;
            background: rgba(13, 48, 33, 0.6);
            top: 0;
            right: 0;
        }
        
        .circle-3 {
            width: 140px;
            height: 140px;
            background: rgba(13, 48, 33, 0.6);
            bottom: 0;
            left: 0;
        }
        
        .circle-4 {
            width: 140px;
            height: 140px;
            background: rgba(13, 48, 33, 0.6);
            bottom: 0;
            right: 0;
        }
        
        .center-circle {
            width: 80px;
            height: 80px;
            background: rgba(104, 183, 119, 0.4);
            border: 2px solid rgba(104, 183, 119, 0.8);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
        .assessment-card {
            background: var(--ikigai-card-bg);
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 20px;
            border: 1px solid var(--ikigai-border);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
        }
        
        .assessment-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        .assessment-section {
            margin-bottom: 25px;
        }
        
        .assessment-title {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            cursor: pointer;
        }
        
        .assessment-title i {
            color: #68B777;
            margin-right: 10px;
            font-size: 20px;
        }
        
        .assessment-title h3 {
            color: #bedbd3;
            font-size: 20px;
            margin: 0;
        }
        
        .assessment-questions {
            background: rgba(77, 98, 85, 0.2);
            padding: 20px;
            border-radius: 8px;
            border: 1px solid rgba(77, 98, 85, 0.3);
            margin-top: 10px;
        }
        
        .question {
            margin-bottom: 20px;
        }
        
        .question p {
            color: rgba(190, 219, 211, 0.9);
            margin-bottom: 10px;
            font-weight: 600;
        }
        
        .options {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .option {
            background: rgba(13, 48, 33, 0.4);
            border: 1px solid rgba(77, 98, 85, 0.5);
            padding: 10px 15px;
            border-radius: 20px;
            color: rgba(190, 219, 211, 0.8);
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .option:hover, .option.selected {
            background: rgba(104, 183, 119, 0.3);
            border-color: rgba(104, 183, 119, 0.6);
            color: #bedbd3;
        }
        
        .progress-container {
            background: rgba(13, 48, 33, 0.4);
            border-radius: 10px;
            margin: 30px 0;
            height: 10px;
            overflow: hidden;
        }
        
        .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #0d3021, #68B777);
            width: 0%;
            transition: width 0.5s ease;
        }
        
        .action-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
        }
        
        .travel-results {
            display: none;
        }
        
        @media (max-width: 768px) {
            .assessment-diagram {
                width: 250px;
                height: 250px;
            }
            
            .circle-1, .circle-2, .circle-3, .circle-4 {
                width: 120px;
                height: 120px;
            }
            
            .options {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <!-- Background Elements -->
    <div class="gradient-background"></div>
    <div class="gradient-overlay"></div>
    
    <!-- Animation Elements -->
    <?php for($i = 0; $i < 20; $i++): ?>
        <div class="star" style="
            width: <?php echo rand(2, 4); ?>px;
            height: <?php echo rand(2, 4); ?>px;
            left: <?php echo rand(1, 99); ?>%;
            top: <?php echo rand(1, 99); ?>%;
            animation-delay: <?php echo rand(0, 5000) / 1000; ?>s;
        "></div>
    <?php endfor; ?>
    
    <?php for($i = 0; $i < 5; $i++): ?>
        <div class="circle" style="
            width: <?php echo rand(100, 300); ?>px;
            height: <?php echo rand(100, 300); ?>px;
            left: <?php echo rand(-50, 100); ?>%;
            top: <?php echo rand(-50, 100); ?>%;
            animation-delay: <?php echo rand(0, 2000) / 1000; ?>s;
        "></div>
    <?php endfor; ?>
    
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="container">
            <div class="logo-container">
                <a href="index.php" class="logo-image">
                    <img src="assets/images/ikigai-logo.png" alt="Ikigai World Logo">
                </a>
                <p class="tagline">Find your purpose</p>
            </div>
            
            <div class="search-container">
                <input type="text" placeholder="Search for destinations, experiences, ideas...">
                <span class="search-icon"><i class="fas fa-search"></i></span>
                <div class="search-results">
                    <!-- Search results appear here -->
                </div>
            </div>
            
            <div class="nav-links">
                <a href="index.php" class="<?php echo $current_page == 'index.php' ? 'active' : ''; ?>">
                    <i class="fas fa-home"></i> Home
                </a>
                <a href="discover.php" class="<?php echo $current_page == 'discover.php' ? 'active' : ''; ?>">
                    <i class="fas fa-compass"></i> Discover
                </a>
                <a href="community.php" class="<?php echo $current_page == 'community.php' ? 'active' : ''; ?>">
                    <i class="fas fa-users"></i> Community
                </a>
                <a href="profile.php" class="<?php echo $current_page == 'profile.php' ? 'active' : ''; ?>">
                    <i class="fas fa-user"></i> Profile
                </a>
            </div>
            
            <div class="nav-actions">
                <button onclick="window.location.href='logout.php'">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </button>
            </div>
        </div>
    </nav>
    
    <!-- Assessment Content -->
    <div class="assessment-container">
        <div class="assessment-intro">
            <h1 class="main-heading">Discover Your Travel Style</h1>
            <p class="text-content">Everyone has a unique travel personality that influences how they experience the world. Take this assessment to discover your travel style, destinations that match your preferences, and experiences that will resonate with your interests.</p>
        </div>
        
        <div class="assessment-diagram">
            <div class="circle circle-1">
                <div class="circle-text">DESTINATIONS</div>
            </div>
            <div class="circle circle-2">
                <div class="circle-text">ACTIVITIES</div>
            </div>
            <div class="circle circle-3">
                <div class="circle-text">ACCOMMODATIONS</div>
            </div>
            <div class="circle circle-4">
                <div class="circle-text">PLANNING STYLE</div>
            </div>
            <div class="circle center-circle">
                <div class="circle-text">TRAVEL STYLE</div>
            </div>
        </div>
        
        <div class="progress-container">
            <div class="progress-bar" id="assessmentProgress"></div>
        </div>
        
        <!-- Assessment Cards -->
        <div class="assessment-card" id="section1">
            <div class="assessment-section">
                <div class="assessment-title" onclick="toggleSection('destinations')">
                    <i class="fas fa-map-marked-alt"></i>
                    <h3>Section 1: Destination Preferences</h3>
                </div>
                <div class="assessment-questions" id="destinations">
                    <div class="question">
                        <p>1. Which type of destination appeals to you most?</p>
                        <div class="options">
                            <div class="option" onclick="selectOption(this)">Bustling cities with cultural attractions</div>
                            <div class="option" onclick="selectOption(this)">Remote natural landscapes</div>
                            <div class="option" onclick="selectOption(this)">Beach or coastal areas</div>
                            <div class="option" onclick="selectOption(this)">Historic towns and heritage sites</div>
                            <div class="option" onclick="selectOption(this)">Mountains and adventure locations</div>
                        </div>
                    </div>
                    <div class="question">
                        <p>2. What climate do you prefer when traveling?</p>
                        <div class="options">
                            <div class="option" onclick="selectOption(this)">Warm and tropical</div>
                            <div class="option" onclick="selectOption(this)">Mild and temperate</div>
                            <div class="option" onclick="selectOption(this)">Cool and crisp</div>
                            <div class="option" onclick="selectOption(this)">Snowy and cold</div>
                            <div class="option" onclick="selectOption(this)">I enjoy experiencing diverse climates</div>
                        </div>
                    </div>
                    <div class="question">
                        <p>3. How do you feel about tourist popularity?</p>
                        <div class="options">
                            <div class="option" onclick="selectOption(this)">I prefer famous attractions and landmarks</div>
                            <div class="option" onclick="selectOption(this)">I seek out hidden gems and off-the-beaten-path locations</div>
                            <div class="option" onclick="selectOption(this)">I enjoy a mix of popular and lesser-known places</div>
                            <div class="option" onclick="selectOption(this)">I prefer places where I can avoid crowds</div>
                            <div class="option" onclick="selectOption(this)">I like to follow emerging travel trends</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="assessment-card" id="section2">
            <div class="assessment-section">
                <div class="assessment-title" onclick="toggleSection('activities')">
                    <i class="fas fa-hiking"></i>
                    <h3>Section 2: Travel Activities</h3>
                </div>
                <div class="assessment-questions" id="activities" style="display: none;">
                    <div class="question">
                        <p>1. Which activities do you prioritize when traveling?</p>
                        <div class="options">
                            <div class="option" onclick="selectOption(this)">Cultural experiences (museums, theaters, historical sites)</div>
                            <div class="option" onclick="selectOption(this)">Outdoor adventures (hiking, kayaking, skiing)</div>
                            <div class="option" onclick="selectOption(this)">Culinary experiences (food tours, cooking classes)</div>
                            <div class="option" onclick="selectOption(this)">Relaxation (beaches, spas, scenic views)</div>
                            <div class="option" onclick="selectOption(this)">Local interactions (markets, community events)</div>
                        </div>
                    </div>
                    <div class="question">
                        <p>2. How do you prefer to explore a new destination?</p>
                        <div class="options">
                            <div class="option" onclick="selectOption(this)">Guided tours with expert information</div>
                            <div class="option" onclick="selectOption(this)">Self-guided wandering and discovery</div>
                            <div class="option" onclick="selectOption(this)">Following recommendations from locals</div>
                            <div class="option" onclick="selectOption(this)">Researched itinerary of must-see spots</div>
                            <div class="option" onclick="selectOption(this)">A combination of structured and spontaneous exploration</div>
                        </div>
                    </div>
                    <div class="question">
                        <p>3. What pace do you prefer when traveling?</p>
                        <div class="options">
                            <div class="option" onclick="selectOption(this)">Fast-paced with many activities packed in</div>
                            <div class="option" onclick="selectOption(this)">Moderate pace with time to absorb experiences</div>
                            <div class="option" onclick="selectOption(this)">Slow and relaxed with plenty of downtime</div>
                            <div class="option" onclick="selectOption(this)">Varies by destination and purpose</div>
                            <div class="option" onclick="selectOption(this)">Extended stays in fewer locations</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="assessment-card" id="section3">
            <div class="assessment-section">
                <div class="assessment-title" onclick="toggleSection('accommodations')">
                    <i class="fas fa-bed"></i>
                    <h3>Section 3: Accommodation Preferences</h3>
                </div>
                <div class="assessment-questions" id="accommodations" style="display: none;">
                    <div class="question">
                        <p>1. What type of accommodation do you prefer?</p>
                        <div class="options">
                            <div class="option" onclick="selectOption(this)">Luxury hotels and resorts</div>
                            <div class="option" onclick="selectOption(this)">Boutique or unique accommodations</div>
                            <div class="option" onclick="selectOption(this)">Vacation rentals (apartments, houses)</div>
                            <div class="option" onclick="selectOption(this)">Budget-friendly hostels or guesthouses</div>
                            <div class="option" onclick="selectOption(this)">Camping or glamping experiences</div>
                        </div>
                    </div>
                    <div class="question">
                        <p>2. What location attributes matter most for your accommodation?</p>
                        <div class="options">
                            <div class="option" onclick="selectOption(this)">Central location near attractions</div>
                            <div class="option" onclick="selectOption(this)">Scenic views or natural setting</div>
                            <div class="option" onclick="selectOption(this)">Local neighborhood atmosphere</div>
                            <div class="option" onclick="selectOption(this)">Proximity to transportation options</div>
                            <div class="option" onclick="selectOption(this)">Privacy and seclusion</div>
                        </div>
                    </div>
                    <div class="question">
                        <p>3. What amenities are most important to you?</p>
                        <div class="options">
                            <div class="option" onclick="selectOption(this)">On-site dining and room service</div>
                            <div class="option" onclick="selectOption(this)">Wellness facilities (spa, pool, gym)</div>
                            <div class="option" onclick="selectOption(this)">Kitchen facilities for self-catering</div>
                            <div class="option" onclick="selectOption(this)">Local character and authentic design</div>
                            <div class="option" onclick="selectOption(this)">Sustainability practices and eco-friendliness</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="assessment-card" id="section4">
            <div class="assessment-section">
                <div class="assessment-title" onclick="toggleSection('planning')">
                    <i class="fas fa-calendar-alt"></i>
                    <h3>Section 4: Planning & Travel Style</h3>
                </div>
                <div class="assessment-questions" id="planning" style="display: none;">
                    <div class="question">
                        <p>1. How far in advance do you typically plan your travels?</p>
                        <div class="options">
                            <div class="option" onclick="selectOption(this)">Months in advance with detailed itineraries</div>
                            <div class="option" onclick="selectOption(this)">A few weeks ahead with flexible plans</div>
                            <div class="option" onclick="selectOption(this)">Last-minute decisions and spontaneous trips</div>
                            <div class="option" onclick="selectOption(this)">General framework with room for improvisation</div>
                            <div class="option" onclick="selectOption(this)">I plan differently depending on the destination</div>
                        </div>
                    </div>
                    <div class="question">
                        <p>2. How do you approach budgeting for travel?</p>
                        <div class="options">
                            <div class="option" onclick="selectOption(this)">Luxury experiences are worth splurging on</div>
                            <div class="option" onclick="selectOption(this)">Value-focused with occasional splurges</div>
                            <div class="option" onclick="selectOption(this)">Budget-conscious with priority on experiences</div>
                            <div class="option" onclick="selectOption(this)">Practical and economical approaches</div>
                            <div class="option" onclick="selectOption(this)">No fixed budget - it depends on the destination</div>
                        </div>
                    </div>
                    <div class="question">
                        <p>3. What is your preferred travel companion situation?</p>
                        <div class="options">
                            <div class="option" onclick="selectOption(this)">Solo travel for maximum flexibility</div>
                            <div class="option" onclick="selectOption(this)">Traveling with a partner or close friend</div>
                            <div class="option" onclick="selectOption(this)">Family travel with customized experiences</div>
                            <div class="option" onclick="selectOption(this)">Group travel with like-minded people</div>
                            <div class="option" onclick="selectOption(this)">Mix of solo and accompanied travel</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="action-buttons">
            <button class="btn-secondary" id="prevBtn" onclick="prevSection()" disabled>Previous</button>
            <button class="btn-primary" id="nextBtn" onclick="nextSection()">Next</button>
        </div>
        
        <!-- Results (initially hidden) -->
        <div class="assessment-card travel-results" id="results">
            <h2 class="sub-heading">Your Travel Style Results</h2>
            <p class="text-content">Based on your answers, here's an overview of your unique travel personality:</p>
            
            <div id="resultsContent" class="text-content">
                <!-- Results will be filled in by JavaScript -->
            </div>
            
            <div class="action-buttons">
                <button class="btn-primary" onclick="window.location.href='discover.php'">
                    <i class="fas fa-compass"></i> Explore Recommended Destinations
                </button>
                <button class="btn-secondary" onclick="window.location.href='profile.php'">
                    <i class="fas fa-save"></i> Save to Profile
                </button>
            </div>
        </div>
    </div>
    
    <!-- Footer -->
    <footer>
        <div class="copyright">
            <p>&copy; <?php echo date("Y"); ?> Ikigai World. All rights reserved. Find your purpose.</p>
        </div>
    </footer>
    
    <script>
        // Current section tracking
        let currentSection = 1;
        const totalSections = 4;
        
        // Toggle assessment sections
        function toggleSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section.style.display === "none") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        }
        
        // Select option
        function selectOption(element) {
            // Find all siblings and remove selected class
            const parent = element.parentElement;
            const options = parent.querySelectorAll('.option');
            options.forEach(option => {
                option.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            element.classList.add('selected');
        }
        
        // Next section
        function nextSection() {
            if (currentSection < totalSections) {
                // Hide current section questions
                document.getElementById(getSectionId(currentSection)).style.display = "none";
                
                // Move to next section
                currentSection++;
                
                // Show next section questions
                document.getElementById(getSectionId(currentSection)).style.display = "block";
                
                // Enable prev button
                document.getElementById('prevBtn').disabled = false;
                
                // Update progress bar
                updateProgress();
                
                // If last section, change next button to submit
                if (currentSection === totalSections) {
                    document.getElementById('nextBtn').innerHTML = 'See Results';
                    document.getElementById('nextBtn').onclick = showResults;
                }
            }
        }
        
        // Previous section
        function prevSection() {
            if (currentSection > 1) {
                // Hide current section questions
                document.getElementById(getSectionId(currentSection)).style.display = "none";
                
                // Move to previous section
                currentSection--;
                
                // Show prev section questions
                document.getElementById(getSectionId(currentSection)).style.display = "block";
                
                // Disable prev button if at first section
                if (currentSection === 1) {
                    document.getElementById('prevBtn').disabled = true;
                }
                
                // Reset next button if not at last section
                if (currentSection < totalSections) {
                    document.getElementById('nextBtn').innerHTML = 'Next';
                    document.getElementById('nextBtn').onclick = nextSection;
                }
                
                // Update progress bar
                updateProgress();
            }
        }
        
        // Get section ID based on section number
        function getSectionId(sectionNumber) {
            const sectionIds = ['destinations', 'activities', 'accommodations', 'planning'];
            return sectionIds[sectionNumber - 1];
        }
        
        // Update progress bar
        function updateProgress() {
            const progressPercent = (currentSection / totalSections) * 100;
            document.getElementById('assessmentProgress').style.width = progressPercent + '%';
        }
        
        // Show results
        function showResults() {
            // Hide assessment sections
            for (let i = 1; i <= totalSections; i++) {
                document.getElementById('section' + i).style.display = 'none';
            }
            
            // Hide action buttons
            document.querySelector('.action-buttons').style.display = 'none';
            
            // Show results
            document.getElementById('results').style.display = 'block';
            
            // Generate sample results (in a real app, you'd calculate this based on selections)
            const resultsHTML = `
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Your Travel Personality</strong>
                        <div class="info-value">Cultural Explorer</div>
                    </div>
                    <div class="info-item">
                        <strong>Ideal Destinations</strong>
                        <div class="info-value">Historic cities, cultural hubs, heritage sites</div>
                    </div>
                    <div class="info-item">
                        <strong>Preferred Activities</strong>
                        <div class="info-value">Museum visits, local experiences, food tours</div>
                    </div>
                    <div class="info-item">
                        <strong>Accommodation Style</strong>
                        <div class="info-value">Boutique hotels with local character</div>
                    </div>
                </div>
                
                <h3 class="section-heading">Recommended Destinations</h3>
                <ul class="custom-list">
                    <li>Kyoto, Japan - for its rich cultural heritage and traditions</li>
                    <li>Florence, Italy - for Renaissance art and architecture</li>
                    <li>Marrakech, Morocco - for vibrant markets and cultural fusion</li>
                    <li>Mexico City, Mexico - for museums, food, and historical sites</li>
                </ul>
                
                <p>Your results suggest you're a Cultural Explorer who values authentic experiences and deep connections with local traditions. You enjoy immersing yourself in history, art, and cuisine of different regions. You prefer accommodations with character and tend to research destinations thoroughly before visiting.</p>
                
                <p>Continue your journey by exploring our curated recommendations for Cultural Explorers in our Discover section, or connect with fellow travelers who share your interests in our Community.</p>
            `;
            
            document.getElementById('resultsContent').innerHTML = resultsHTML;
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Show first section
            document.getElementById('destinations').style.display = 'block';
            
            // Set initial progress
            updateProgress();
        });
    </script>
</body>
</html>