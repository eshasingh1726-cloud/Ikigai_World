$(document).ready(function() {
    const suggestionsSection = $('#suggestionsSection');
    const suggestionsList = $('#suggestionsList');
    const planTripButton = $('#planTrip');
    const tripDetailsSection = $('#tripDetailsSection');
    const tripDetailsDiv = $('#tripDetails');
    const sendEmailButton = $('#sendEmail');
    const emailStatusDiv = $('#emailStatus');
    const itineraryForm = $('#itineraryForm');

    // Initialize EmailJS - keep your existing setup
    (function() {
        emailjs.init("Brjccfg_X7DsVZbDa"); // Keeping your original User ID
    })();

    // Destination database with real attractions and activities
    const destinationData = {
        "ladakh": {
            attractions: ["Pangong Lake", "Nubra Valley", "Leh Palace", "Shanti Stupa", "Zanskar Valley", 
                        "Magnetic Hill", "Thiksey Monastery", "Hemis Monastery", "Khardung La Pass", "Tso Moriri Lake"],
            activities: ["Monastery tours", "Camel safari in Nubra Valley", "River rafting in Zanskar", 
                        "Mountain biking", "Stargazing", "Cultural village visits", "Camping by alpine lakes",
                        "Photography tours", "Trekking", "Attend local festivals"],
            food: ["Thukpa", "Momos", "Skyu", "Butter tea", "Chhutagi", "Chang (local beer)", "Tigmo", "Khambir"],
            seasonalTips: {
                summer: "Perfect for sightseeing and outdoor activities (May-August)",
                winter: "Extremely cold but magical for Chadar Trek (Jan-Feb)",
                monsoon: "Occasional landslides may occur (July-August)",
                spring: "Beautiful blooms but some passes might still be closed (April-May)",
                autumn: "Clear skies and comfortable temperatures (Sept-Oct)"
            }
        },
        "rajasthan": {
            attractions: ["Amber Fort", "Hawa Mahal", "City Palace Jaipur", "Mehrangarh Fort", "Lake Palace", 
                        "Jaisalmer Fort", "Ranthambore National Park", "Pushkar Lake", "Udaipur City Palace", "Jal Mahal"],
            activities: ["Desert safari", "Elephant rides", "Hot air ballooning", "Folk dance performances", 
                        "Puppet shows", "Palace tours", "Heritage walks", "Tiger safari", "Camel rides", 
                        "Textile and craft shopping"],
            food: ["Dal Baati Churma", "Laal Maas", "Ker Sangri", "Pyaaz Kachori", "Gatte ki Sabzi", 
                "Bajre ki Roti", "Mawa Kachori", "Ghewar"],
            seasonalTips: {
                summer: "Very hot, but less crowded (April-June)",
                winter: "Perfect weather for sightseeing (Oct-March)",
                monsoon: "Light rainfall makes landscapes lush (July-Sept)",
                spring: "Comfortable climate with festivals (Feb-March)",
                autumn: "Beginning of tourist season with pleasant weather (Oct-Nov)"
            }
        },
        "kerala": {
            attractions: ["Alleppey Backwaters", "Munnar Tea Gardens", "Fort Kochi", "Periyar Wildlife Sanctuary", 
                        "Varkala Beach", "Wayanad Wildlife Sanctuary", "Kovalam Beach", "Athirappilly Falls", 
                        "Bekal Fort", "Kumarakom Bird Sanctuary"],
            activities: ["Houseboat stay", "Ayurvedic treatments", "Kerala art form performances", "Spice plantation tours", 
                        "Tea plantation visits", "Wildlife safaris", "Village experiences", "Bamboo rafting", 
                        "Cooking classes", "Martial arts demonstrations"],
            food: ["Appam with Stew", "Kerala Sadya", "Karimeen Pollichathu", "Puttu and Kadala Curry", 
                "Kerala Parotta", "Malabar Biryani", "Idiyappam", "Fish Molee"],
            seasonalTips: {
                summer: "Hot but good for hill station visits (March-May)",
                winter: "Perfect weather for all activities (Nov-Feb)",
                monsoon: "Lush green landscapes but heavy rainfall (June-Sept)",
                spring: "Good for beaches and backwaters (Feb-March)",
                autumn: "Post-monsoon beauty with fewer tourists (Oct-Nov)"
            }
        },
        "goa": {
            attractions: ["Calangute Beach", "Baga Beach", "Dudhsagar Falls", "Basilica of Bom Jesus", 
                        "Fort Aguada", "Anjuna Beach", "Chapora Fort", "Palolem Beach", "Spice Plantations", "Candolim Beach"],
            activities: ["Beach hopping", "Water sports", "Nightlife exploration", "Heritage walks", 
                        "Spice plantation tours", "Cruise trips", "Dolphin watching", "Scuba diving", 
                        "Parasailing", "Flea market shopping"],
            food: ["Goan Fish Curry", "Vindaloo", "Xacuti", "Bebinca", "Sorpotel", "Feni", "Cafreal", "Ros Omelette"],
            seasonalTips: {
                summer: "Hot but less crowded beaches (March-May)",
                winter: "Peak tourist season with perfect weather (Nov-Feb)",
                monsoon: "Lush landscapes but some beach activities restricted (June-Sept)",
                spring: "Good balance of weather and crowds (Feb-March)",
                autumn: "Pleasant with fewer tourists after monsoon (Oct-Nov)"
            }
        },
        "himachal pradesh": {
            attractions: ["Shimla", "Manali", "Dharamshala", "Dalhousie", "Spiti Valley", 
                        "Khajjiar", "Kasol", "Rohtang Pass", "Kullu", "Mcleodganj"],
            activities: ["Trekking", "Paragliding", "Skiing", "River rafting", "Camping", 
                        "Mountain biking", "Hot spring bathing", "Temple visits", "Shopping for woolens", "Photography"],
            food: ["Dham", "Sidu", "Tudkiya Bhath", "Babru", "Chha Gosht", "Madra", "Aktori", "Kullu Trout"],
            seasonalTips: {
                summer: "Perfect for most hill stations (April-June)",
                winter: "Snowfall and winter sports (Dec-Feb)",
                monsoon: "Landslide risk but lush green landscapes (July-Sept)",
                spring: "Beautiful blooms and moderate crowds (March-April)",
                autumn: "Clear mountain views and pleasant hiking (Oct-Nov)"
            }
        },
        "andhra pradesh": {
    attractions: ["Tirupati Temple", "Araku Valley", "Visakhapatnam Beach", "Belum Caves", "Undavalli Caves", 
                "Lepakshi Temple", "Gandikota", "Borra Caves", "Horsley Hills", "Eturnagaram Wildlife Sanctuary"],
    activities: ["Temple pilgrimages", "Coastal tourism", "Cave exploration", "Rural tourism", 
                "Wildlife safaris", "Heritage walks", "Beach activities", "Scenic hill station visits", 
                "Cultural performances", "Handicraft shopping"],
    food: ["Andhra Biryani", "Pesarattu", "Gongura Pacchadi", "Pulihora", "Gutti Vankaya Curry", 
           "Royyala Iguru", "Pootharekulu", "Bobbatlu"],
    seasonalTips: {
        summer: "Relatively hot; hill stations like Araku Valley are good options (March-June)",
        winter: "Pleasant weather, perfect for all attractions (Nov-Feb)",
        monsoon: "Moderate rainfall makes waterfalls spectacular (July-Sept)",
        spring: "Good weather for coastal areas and temples (Feb-March)",
        autumn: "Post-monsoon comfort with fewer tourists (Oct-Nov)"
    }
},
"assam": {
    attractions: ["Kaziranga National Park", "Kamakhya Temple", "Majuli Island", "Manas National Park", 
                 "Umananda Island", "Sivasagar", "Hajo", "Haflong", "Sualkuchi", "Dibru-Saikhowa National Park"],
    activities: ["Rhino safaris", "River cruises on Brahmaputra", "Tea garden visits", 
                "Tribal village experiences", "Bihu dance performances", "Birdwatching", 
                "Silk weaving demonstrations", "Temple tours", "Wildlife photography", "Cultural festivals"],
    food: ["Assam Laksa", "Khaar", "Masor Tenga", "Pitha", "Duck Meat Curry", "Ou Khatta", "Koldil Chicken", "Assam Tea"],
    seasonalTips: {
        summer: "Hot and humid but good for highland areas (March-May)",
        winter: "Perfect for wildlife viewing and outdoor activities (Nov-Feb)",
        monsoon: "Heavy rainfall may restrict some activities (June-Sept)",
        spring: "Great for tea gardens and cultural experiences (Feb-March)",
        autumn: "Best time for wildlife and outdoor activities (Oct-Nov)"
    }
},
"tamil nadu": {
    attractions: ["Meenakshi Temple", "Marina Beach", "Thanjavur Big Temple", "Ooty", "Kodaikanal", 
                "Mahabalipuram Shore Temple", "Rameshwaram Temple", "Kanyakumari", "Chettinad", "Madurai"],
    activities: ["Temple architecture tours", "Hill station retreats", "Classical dance performances", 
                "Beach tourism", "Heritage walks", "Silk saree shopping", "Traditional music concerts", 
                "Ayurvedic treatments", "Culinary tours", "Handicraft exploration"],
    food: ["Idli Sambhar", "Dosa", "Pongal", "Chettinad Chicken", "Kootu", "Filter Coffee", "Mysore Pak", "Murukku"],
    seasonalTips: {
        summer: "Hot in plains, but hill stations like Ooty are pleasant (March-May)",
        winter: "Ideal weather throughout the state (Nov-Feb)",
        monsoon: "Northeast monsoon brings heavy rain (Oct-Dec)",
        spring: "Good for beaches and cultural sites (Feb-March)",
        autumn: "Pleasant with reducing humidity (Oct-Nov)"
    }
},
"karnataka": {
    attractions: ["Mysore Palace", "Hampi Ruins", "Coorg", "Jog Falls", "Badami Caves", 
                 "Gokarna Beach", "Bandipur National Park", "Belur and Halebid", "Bangalore Palace", "Kudremukh"],
    activities: ["Heritage site tours", "Coffee plantation visits", "Wildlife safaris", 
                "Trekking and hiking", "Temple architecture exploration", "Waterfall visits", 
                "Beach relaxation", "Traditional silk shopping", "River rafting", "Cultural performances"],
    food: ["Mysore Masala Dosa", "Bisi Bele Bath", "Ragi Mudde", "Neer Dosa", "Korri Gassi", "Akki Roti", "Dharwad Peda", "Mysore Pak"],
    seasonalTips: {
        summer: "Hot but good for hill stations like Coorg (March-May)",
        winter: "Perfect weather for sightseeing and outdoor activities (Nov-Feb)",
        monsoon: "Lush green landscapes but heavy rainfall in coastal and Western Ghats areas (June-Sept)",
        spring: "Good for wildlife and heritage sites (Feb-March)",
        autumn: "Pleasant weather throughout the state (Oct-Nov)"
    }
},
"west bengal": {
    attractions: ["Victoria Memorial", "Darjeeling", "Sundarbans", "Howrah Bridge", "Kalimpong", 
                 "Santiniketan", "Digha Beach", "Murshidabad", "Cooch Behar Palace", "Bishnupur Terracotta Temples"],
    activities: ["Heritage walks in Kolkata", "Darjeeling toy train rides", "Sundarbans tiger safaris", 
                "Tea garden visits", "Durga Puja celebrations", "River cruises", "Handicraft shopping", 
                "Rural Bengal exploration", "Clay art demonstrations", "Cultural performances"],
    food: ["Rasgulla", "Mishti Doi", "Fish Curry", "Shorshe Ilish", "Kosha Mangsho", "Cholar Dal", "Sandesh", "Pantua"],
    seasonalTips: {
        summer: "Hot and humid in plains, hill stations are pleasant (March-May)",
        winter: "Perfect weather throughout (Nov-Feb)",
        monsoon: "Heavy rainfall, Sundarbans are lush (June-Sept)",
        spring: "Good for Darjeeling and Dooars (Feb-March)",
        autumn: "Cultural festivities including Durga Puja (Sept-Oct)"
    }
},
"gujarat": {
    attractions: ["Rann of Kutch", "Gir National Park", "Sabarmati Ashram", "Somnath Temple", "Dwarka", 
                 "Laxmi Vilas Palace", "Akshardham Temple", "Saputara", "Diu Fort", "Adalaj Stepwell"],
    activities: ["White desert safari", "Lion safaris", "Heritage walks", "Temple pilgrimages", 
                "Handicraft shopping", "Folk dance performances", "Textiles exploration", 
                "Cultural festivals", "Coastal tourism", "Wildlife photography"],
    food: ["Dhokla", "Khandvi", "Thepla", "Undhiyu", "Fafda Jalebi", "Dabeli", "Gujarati Kadhi", "Khakhra"],
    seasonalTips: {
        summer: "Very hot, except hill station Saputara (March-June)",
        winter: "Perfect for Rann visits and all attractions (Nov-Feb)",
        monsoon: "Moderate rainfall creates lush landscapes (July-Sept)",
        spring: "Good for wildlife viewing in Gir (Feb-March)",
        autumn: "Festive season with pleasant weather (Oct-Nov)"
    }
},
"maharashtra": {
    attractions: ["Gateway of India", "Ajanta & Ellora Caves", "Mahabaleshwar", "Lonavala", "Elephanta Caves", 
                 "Shirdi", "Marine Drive", "Kanheri Caves", "Alibaug Beach", "Tadoba National Park"],
    activities: ["Historical fort treks", "Cave temple explorations", "Hill station retreats", 
                "Beach visits", "Wildlife safaris", "Vineyard tours", "Cultural performances", 
                "Street food tasting", "Heritage walks", "Festival celebrations"],
    food: ["Vada Pav", "Puran Poli", "Pav Bhaji", "Misal Pav", "Bombay Duck", "Modak", "Sabudana Khichdi", "Sol Kadhi"],
    seasonalTips: {
        summer: "Hot in cities, hill stations are pleasant (March-May)",
        winter: "Ideal weather throughout the state (Nov-Feb)",
        monsoon: "Spectacular waterfalls but heavy rainfall (June-Sept)",
        spring: "Good for coastal areas and cities (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"delhi": {
    attractions: ["Red Fort", "Qutub Minar", "India Gate", "Humayun's Tomb", "Jama Masjid", 
                 "Lotus Temple", "Akshardham Temple", "Chandni Chowk", "Rashtrapati Bhavan", "Lodi Gardens"],
    activities: ["Historical monument tours", "Heritage walks", "Street food exploration", 
                "Shopping in local markets", "Cultural performances", "Museum visits", 
                "Mughal garden tours", "Religious site visits", "Photography tours", "Food walks"],
    food: ["Butter Chicken", "Chole Bhature", "Parantha", "Chaat", "Kebabs", "Nihari", "Jalebi", "Kulfi"],
    seasonalTips: {
        summer: "Extremely hot and best avoided (April-June)",
        winter: "Perfect weather but can get very cold (Nov-Feb)",
        monsoon: "Moderate rainfall, pleasant greenery (July-Sept)",
        spring: "Ideal with blooming gardens (Feb-March)",
        autumn: "Very pleasant post-monsoon weather (Oct-Nov)"
    }
},
"odisha": {
    attractions: ["Konark Sun Temple", "Puri Jagannath Temple", "Chilika Lake", "Lingaraj Temple", 
                 "Udayagiri and Khandagiri Caves", "Bhitarkanika Wildlife Sanctuary", "Chandrabhaga Beach", 
                 "Simlipal National Park", "Nandankanan Zoological Park", "Ratnagiri Buddhist Excavations"],
    activities: ["Temple architecture tours", "Beach visits", "Wildlife safaris", 
                "Handicraft village tours", "Odissi dance performances", "Bird watching at Chilika", 
                "Tribal culture exploration", "Sand art appreciation", "Boat rides", "Heritage walks"],
    food: ["Dalma", "Chhena Poda", "Pakhala", "Gupchup", "Chhena Jhili", "Mudhi Mansa", "Malpua", "Rasagola"],
    seasonalTips: {
        summer: "Hot but coastal areas are relatively pleasant (March-June)",
        winter: "Perfect weather throughout the state (Nov-Feb)",
        monsoon: "Heavy rainfall in some regions (July-Sept)",
        spring: "Good for beaches and wildlife (Feb-March)",
        autumn: "Pleasant weather for all activities (Oct-Nov)"
    }
},
"varanasi": {
    attractions: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Sarnath", "Assi Ghat", "Ramnagar Fort", 
                 "Tulsi Manas Temple", "BHU Campus", "Chunar Fort", "Gyan Vapi Well", "Alamgir Mosque"],
    activities: ["Sunrise boat rides on the Ganges", "Evening Ganga Aarti", "Temple pilgrimages", 
                "Heritage walks", "Classical music performances", "Silk shopping", 
                "Buddhist site visits", "Street food tours", "Spiritual experiences", "Yoga sessions"],
    food: ["Banarasi Paan", "Kachori Sabzi", "Tamatar Chaat", "Lassi", "Malaiyo", "Choora Matar", "Litti Chokha", "Rabri"],
    seasonalTips: {
        summer: "Very hot and best avoided (April-June)",
        winter: "Ideal weather with morning fog on the Ganges (Nov-Feb)",
        monsoon: "Ganges in full flow but some ghats may be submerged (July-Sept)",
        spring: "Pleasant temperatures (Feb-March)",
        autumn: "Festive season with comfortable weather (Oct-Nov)"
    }
},
"pondicherry": {
    attractions: ["French Quarter", "Auroville", "Promenade Beach", "Paradise Beach", "Sri Aurobindo Ashram", 
                 "Chunnambar Boat House", "Serenity Beach", "Pondicherry Museum", "Bharathi Park", "Arikamedu"],
    activities: ["Heritage walks", "Beach relaxation", "Spiritual retreats", 
                "French cuisine exploration", "Water sports", "Yoga and meditation", 
                "Handmade paper crafts", "Scuba diving", "Cycling tours", "Boat rides"],
    food: ["Creole Food", "Seafood", "French Cuisine", "Filter Coffee", "Meen Patchai Masala", "Baguettes", "Croissants", "Bebinca"],
    seasonalTips: {
        summer: "Hot but beaches provide relief (March-June)",
        winter: "Perfect weather for all activities (Nov-Feb)",
        monsoon: "Northeast monsoon brings heavy rain (Oct-Dec)",
        spring: "Good for beach activities (Feb-March)",
        autumn: "Pleasant coastal weather (Sept-Oct)"
    }
},
"agra": {
    attractions: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh", "Itimad-Ud-Daulah's Tomb", 
                 "Akbar's Tomb", "Jama Masjid", "Chini Ka Rauza", "Sikandra", "Ram Bagh"],
    activities: ["Sunrise visits to Taj Mahal", "Mughal architecture tours", "Heritage walks", 
                "Marble craft demonstrations", "Photography sessions", "River Yamuna boat rides", 
                "Food walks", "Leather goods shopping", "Historical tours", "Cultural performances"],
    food: ["Petha", "Bedai", "Paratha", "Dalmoth", "Chaat", "Jalebi", "Mughlai Cuisine", "Agra ka Dalmoth"],
    seasonalTips: {
        summer: "Very hot and best avoided (April-June)",
        winter: "Perfect weather for sightseeing (Nov-Feb)",
        monsoon: "Moderate rainfall with lush gardens (July-Sept)",
        spring: "Good for monument visits (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"jaipur": {
    attractions: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar", "Nahargarh Fort", 
                 "Jaigarh Fort", "Albert Hall Museum", "Jal Mahal", "Birla Temple", "Galtaji Temple"],
    activities: ["Heritage fort tours", "Elephant rides", "Hot air ballooning", 
                "Jewelry shopping", "Block printing workshops", "Puppet shows", 
                "Traditional Rajasthani cooking classes", "Heritage walks", "Astronomical instrument exploration", "Cultural performances"],
    food: ["Dal Baati Churma", "Ghewar", "Pyaaz Kachori", "Ker Sangri", "Gatte ki Sabzi", "Laal Maas", "Mawa Kachori", "Mishri Mawa"],
    seasonalTips: {
        summer: "Very hot but less crowded (April-June)",
        winter: "Perfect weather for all activities (Nov-Feb)",
        monsoon: "Light rainfall makes the city look fresh (July-Sept)",
        spring: "Comfortable temperatures (Feb-March)",
        autumn: "Pleasant with fewer tourists (Oct-Nov)"
    }
},
"udaipur": {
    attractions: ["City Palace", "Lake Pichola", "Jag Mandir", "Fateh Sagar Lake", "Saheliyon Ki Bari", 
                 "Jagdish Temple", "Monsoon Palace", "Vintage Car Museum", "Eklingji Temple", "Shilpgram"],
    activities: ["Lake boat rides", "Palace tours", "Heritage walks", 
                "Sunset viewing points", "Traditional art experiences", "Miniature painting workshops", 
                "Vintage car exhibitions", "Cultural performances", "Puppet shows", "Handicraft shopping"],
    food: ["Dal Baati Churma", "Gatte ki Sabzi", "Ker Sangri", "Laal Maas", "Mirchi Bada", "Pyaaz Kachori", "Mohanthal", "Ghewar"],
    seasonalTips: {
        summer: "Hot but lake areas provide some relief (March-June)",
        winter: "Perfect pleasant weather (Nov-Feb)",
        monsoon: "Lakes fill up and surroundings become lush (July-Sept)",
        spring: "Good weather for city exploration (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"darjeeling": {
    attractions: ["Tiger Hill", "Darjeeling Himalayan Railway", "Batasia Loop", "Peace Pagoda", "Himalayan Mountaineering Institute", 
                 "Happy Valley Tea Estate", "Padmaja Naidu Himalayan Zoological Park", "Rock Garden", "Ghoom Monastery", "Observatory Hill"],
    activities: ["Toy train rides", "Tea garden visits", "Sunrise viewing at Tiger Hill", 
                "Trekking", "Cable car rides", "Tea tasting sessions", 
                "Buddhist monastery visits", "Mall Road strolls", "Mountain photography", "Adventure sports"],
    food: ["Darjeeling Tea", "Momos", "Thukpa", "Sel Roti", "Gundruk", "Naga Platter", "Churpee", "Aloo Dum"],
    seasonalTips: {
        summer: "Pleasant weather, perfect for all activities (April-June)",
        winter: "Very cold with occasional snowfall, scenic views (Nov-Feb)",
        monsoon: "Heavy rainfall with frequent landslides (July-Sept)",
        spring: "Blooming rhododendrons and clear views (March-April)",
        autumn: "Clear mountain views and comfortable weather (Oct-Nov)"
    }
},
"andaman and nicobar": {
    attractions: ["Radhanagar Beach", "Cellular Jail", "Ross Island", "Havelock Island", "Baratang Island", 
                 "Neil Island", "Mahatma Gandhi Marine National Park", "Chidiya Tapu", "Limestone Caves", "Mount Harriet"],
    activities: ["Scuba diving", "Snorkeling", "Beach hopping", "Historical site visits", 
                "Glass-bottom boat rides", "Mangrove kayaking", "Night camping", 
                "Birdwatching", "Tribal museum visits", "Island hopping"],
    food: ["Seafood", "Fish Curry", "Coconut Prawn Curry", "Amritsari Fish", "Macher Jhol", "Grilled Lobster", "Tandoori Fish", "Curried Crabs"],
    seasonalTips: {
        summer: "Hot but good for water activities (March-May)",
        winter: "Perfect weather with clear blue waters (Nov-Feb)",
        monsoon: "Heavy rainfall and rough seas, not recommended (June-Sept)",
        spring: "Good for underwater activities (Feb-March)",
        autumn: "Pleasant weather after monsoon (Oct-Nov)"
    }
},
"meghalaya": {
    attractions: ["Living Root Bridges", "Nohkalikai Falls", "Mawsynram", "Cherrapunji", "Elephant Falls", 
                 "Dawki River", "Shillong Peak", "Mawlynnong Village", "Umiam Lake", "Laitlum Canyons"],
    activities: ["Waterfall tours", "Root bridge treks", "Cave explorations", 
                "Cleanest village visits", "Kayaking in clear waters", "Traditional Khasi culture exploration", 
                "Rock climbing", "Camping", "Village homestays", "Music and cultural events"],
    food: ["Jadoh", "Doh Neiiong", "Tungrymbai", "Nakham Bitchi", "Pukhlein", "Dohneiihong", "Momo", "Bamboo Shoot Pickle"],
    seasonalTips: {
        summer: "Pleasant weather with occasional showers (March-May)",
        winter: "Cold but comfortable with clear views (Nov-Feb)",
        monsoon: "World's highest rainfall, waterfalls in full glory but challenging travel (June-Sept)",
        spring: "Good for hiking and outdoor activities (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"arunachal pradesh": {
    attractions: ["Tawang Monastery", "Sela Pass", "Namdapha National Park", "Dirang Valley", "Bomdila", 
                 "Ziro Valley", "Nuranang Falls", "Tipi Orchid Centre", "Pangsau Pass", "Madhuri Lake"],
    activities: ["Buddhist monastery visits", "Mountain passes exploration", "Wildlife safaris", 
                "Tribal village tours", "River rafting", "Trekking", 
                "Bird watching", "Angling", "Cultural festivals", "Photography"],
    food: ["Thukpa", "Momos", "Apong", "Bamboo Shoot Fry", "Lukter", "Pehak", "Dungsing", "Butter Tea"],
    seasonalTips: {
        summer: "Pleasant weather for most activities (April-June)",
        winter: "Very cold with snowfall in higher regions (Nov-Feb)",
        monsoon: "Heavy rainfall with landslides risk (July-Sept)",
        spring: "Beautiful blooms and moderate weather (March-April)",
        autumn: "Clear mountain views and pleasant weather (Oct-Nov)"
    }
},
"sikkim": {
    attractions: ["Nathula Pass", "Tsomgo Lake", "Rumtek Monastery", "Yumthang Valley", "Kanchenjunga Base Camp", 
                 "Pelling", "Gangtok", "Gurudongmar Lake", "Ravangla", "Khecheopalri Lake"],
    activities: ["Mountain pass visits", "Lake tours", "Monastery experiences", 
                "Hot spring baths", "Trekking", "Cable car rides", 
                "River rafting", "Mountain biking", "Yak rides", "Cultural performances"],
    food: ["Momos", "Thukpa", "Gundruk", "Sel Roti", "Phagshapa", "Chhurpi", "Sha Phaley", "Sinki"],
    seasonalTips: {
        summer: "Pleasant weather for most attractions (April-June)",
        winter: "Very cold with snowfall, many areas inaccessible (Nov-Feb)",
        monsoon: "Heavy rainfall with landslide risks (July-Sept)",
        spring: "Blooming rhododendrons and clear views (March-April)",
        autumn: "Perfect weather for trekking and sightseeing (Oct-Nov)"
    }
},
"uttarakhand": {
    attractions: ["Rishikesh", "Mussoorie", "Nainital", "Haridwar", "Kedarnath", 
                 "Badrinath", "Jim Corbett National Park", "Valley of Flowers", "Auli", "Dehradun"],
    activities: ["River rafting", "Yoga and meditation retreats", "Pilgrimage tours", 
                "Wildlife safaris", "Trekking", "Cable car rides", 
                "Bird watching", "Lake boating", "Winter skiing", "Camping"],
    food: ["Kafuli", "Bhatt ki Churkani", "Aloo ke Gutke", "Garhwal ka Fannah", "Phaanu", "Singodi", "Bal Mithai", "Jhangora ki Kheer"],
    seasonalTips: {
        summer: "Pleasant in hills, good escape from plains heat (April-June)",
        winter: "Cold with snowfall in higher regions, skiing season in Auli (Nov-Feb)",
        monsoon: "Heavy rainfall with landslide risks in some areas (July-Sept)",
        spring: "Beautiful blooms and moderate weather (March-April)",
        autumn: "Perfect weather for trekking and pilgrimages (Oct-Nov)"
    }
},
"uttar pradesh": {
    attractions: ["Taj Mahal", "Varanasi Ghats", "Ayodhya", "Prayagraj Sangam", "Mathura", 
                "Vrindavan", "Sarnath", "Dudhwa National Park", "Lucknow Imambara", "Fatehpur Sikri"],
    activities: ["Religious pilgrimages", "Historical monument tours", "River ceremonies", 
                "Handicraft shopping", "Food tours", "Historical walks", 
                "Bird watching", "Wildlife safaris", "Cultural performances", "Historical site explorations"],
    food: ["Kebabs", "Biryani", "Petha", "Pani Puri", "Chaat", "Malaiyo", "Banarasi Paan", "Thandai"],
    seasonalTips: {
        summer: "Very hot and best avoided (April-June)",
        winter: "Perfect weather for sightseeing (Nov-Feb)",
        monsoon: "Moderate rainfall, river sites may be affected (July-Sept)",
        spring: "Good for monument visits (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"madhya pradesh": {
    attractions: ["Khajuraho Temples", "Sanchi Stupa", "Bandhavgarh National Park", "Kanha National Park", 
                "Orchha", "Gwalior Fort", "Bhimbetka Rock Shelters", "Ujjain", "Pachmarhi", "Indore"],
    activities: ["Temple architecture tours", "Wildlife safaris", "Heritage walks", 
                "Rock art viewing", "River cruises", "Religious pilgrimages", 
                "Photography tours", "Cave explorations", "Cultural performances", "Adventure sports in Pachmarhi"],
    food: ["Poha Jalebi", "Bhutte Ka Kees", "Dal Bafla", "Indori Namkeen", "Mawa Bati", "Bhopali Gosht Korma", "Chakki ki Shaak", "Khopra Pak"],
    seasonalTips: {
        summer: "Hot but good for Pachmarhi hill station (March-June)",
        winter: "Perfect weather for sightseeing and wildlife (Nov-Feb)",
        monsoon: "Lush landscapes but some forest roads may be closed (July-Sept)",
        spring: "Good for temple tours and wildlife (Feb-March)",
        autumn: "Ideal for all activities (Oct-Nov)"
    }
},
"punjab": {
    attractions: ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Qila Mubarak", "Harike Wetland", 
                "Anandpur Sahib", "Maharaja Ranjit Singh Palace", "Kila Raipur Sports Festival", "Sheesh Mahal", "Bhakra Dam"],
    activities: ["Gurudwara visits", "Farm tourism", "Border retreat ceremony", 
                "Heritage walks", "Bird watching", "Village culture experiences", 
                "Punjabi cuisine tours", "Cultural performances", "Phulkari shopping", "Historical site tours"],
    food: ["Makki di Roti & Sarson da Saag", "Butter Chicken", "Amritsari Fish", "Chole Bhature", "Lassi", "Pinni", "Amritsari Kulcha", "Dhaba Food"],
    seasonalTips: {
        summer: "Very hot and best avoided (April-June)",
        winter: "Cold but perfect for sightseeing (Nov-Feb)",
        monsoon: "Moderate rainfall, rural areas become lush (July-Sept)",
        spring: "Pleasant weather for most activities (Feb-March)",
        autumn: "Harvest festivals and perfect weather (Oct-Nov)"
    }
},
"bihar": {
    attractions: ["Mahabodhi Temple", "Nalanda University Ruins", "Patna Museum", "Bodh Gaya", "Golghar", 
                "Vikramshila", "Rajgir", "Vaishali", "Kesaria Stupa", "Munger Fort"],
    activities: ["Buddhist pilgrimage tours", "Archaeological site visits", "Educational heritage tours", 
                "Spiritual retreats", "Historical walks", "Cultural performances", 
                "Religious ceremonies", "Museum visits", "Rural tourism", "Ganges boat rides"],
    food: ["Litti Chokha", "Sattu Paratha", "Kadhi Badi", "Thekua", "Khaja", "Tilkut", "Malpua", "Bihari Kebab"],
    seasonalTips: {
        summer: "Very hot and best avoided (April-June)",
        winter: "Perfect weather for pilgrimage and sightseeing (Nov-Feb)",
        monsoon: "Moderate to heavy rainfall (July-Sept)",
        spring: "Good for archaeological site visits (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"jharkhand": {
    attractions: ["Hundru Falls", "Baidyanath Dham", "Betla National Park", "Patratu Valley", "Netarhat", 
                "Dasam Falls", "Parasnath Hill", "Jonha Falls", "Ranchi Lake", "Jagannath Temple"],
    activities: ["Waterfall tours", "Tribal village visits", "Wildlife safaris", 
                "Nature photography", "Trekking", "Pilgrimage tours", 
                "Tribal art shopping", "Hill station retreats", "Cultural performances", "Adventure sports"],
    food: ["Dhuska", "Pittha", "Rugra", "Bamboo Shoots", "Chilka Roti", "Thekua", "Arsa Roti", "Handia"],
    seasonalTips: {
        summer: "Hot but waterfalls are good to visit (March-June)",
        winter: "Pleasant weather for all activities (Nov-Feb)",
        monsoon: "Heavy rainfall but spectacular waterfalls (July-Sept)",
        spring: "Good for wildlife and tribal areas (Feb-March)",
        autumn: "Pleasant weather for outdoor activities (Oct-Nov)"
    }
},
"chhattisgarh": {
    attractions: ["Chitrakote Falls", "Barnawapara Wildlife Sanctuary", "Tirathgarh Falls", "Kanger Valley National Park", 
                "Danteshwari Temple", "Bastar Palace", "Bhoramdeo Temple", "Sirpur", "Mainpat", "Gadiya Mountain"],
    activities: ["Tribal culture exploration", "Waterfall visits", "Wildlife safaris", 
                "Cave tours", "Temple pilgrimages", "Handicraft shopping", 
                "Tribal dance performances", "Nature photography", "Bird watching", "Archaeological site visits"],
    food: ["Chila", "Farra", "Muthia", "Bore Basi", "Thethari-Khurmi", "Gulgula", "Bafauri", "Rice Beer"],
    seasonalTips: {
        summer: "Hot except in hill areas (March-June)",
        winter: "Perfect weather for tribal areas and wildlife (Nov-Feb)",
        monsoon: "Heavy rainfall but waterfalls are spectacular (July-Sept)",
        spring: "Good for wildlife and tribal visits (Feb-March)",
        autumn: "Pleasant weather throughout (Oct-Nov)"
    }
},
"telangana": {
    attractions: ["Charminar", "Golconda Fort", "Ramoji Film City", "Hussain Sagar Lake", "Warangal Fort", 
                "Thousand Pillar Temple", "Bhongir Fort", "Pochampally Village", "Nagarjuna Sagar Dam", "Ananthagiri Hills"],
    activities: ["Historical monument tours", "Shopping at pearl markets", "Film studio visits", 
                "Hyderabadi cuisine exploration", "Textile village tours", "Boating", 
                "Heritage walks", "Temple visits", "Dam tours", "Trekking"],
    food: ["Hyderabadi Biryani", "Haleem", "Double Ka Meetha", "Osmania Biscuits", "Qubani Ka Meetha", "Mirchi ka Salan", "Irani Chai", "Lukhmi"],
    seasonalTips: {
        summer: "Very hot and best avoided (March-June)",
        winter: "Perfect weather for all activities (Nov-Feb)",
        monsoon: "Moderate rainfall, everything looks fresh (July-Sept)",
        spring: "Good for city exploration (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"jammu and kashmir": {
    attractions: ["Dal Lake", "Gulmarg", "Sonmarg", "Pahalgam", "Vaishno Devi", 
                "Mughal Gardens", "Patnitop", "Shankaracharya Temple", "Amarnath Cave", "Leh Palace"],
    activities: ["Shikara rides", "Skiing", "Trekking", "Pilgrimage tours", 
                "Horseback riding", "Gondola rides", "Garden tours", 
                "Houseboat stays", "Photography", "White water rafting"],
    food: ["Rogan Josh", "Yakhni", "Dum Aloo", "Kahwa", "Modur Pulao", "Nadru Yakhni", "Shufta", "Noon Chai"],
    seasonalTips: {
        summer: "Perfect weather for all activities (May-Aug)",
        winter: "Heavy snowfall, good for skiing in Gulmarg (Dec-Feb)",
        monsoon: "Moderate rainfall but some areas may have landslides (July-Sept)",
        spring: "Beautiful blooms in gardens (March-May)",
        autumn: "Spectacular fall colors and pleasant weather (Sept-Nov)"
    }
},
"manipur": {
    attractions: ["Loktak Lake", "Keibul Lamjao National Park", "Kangla Fort", "INA Memorial", "Ima Keithel", 
                "Shree Govindajee Temple", "Sendra Island", "Dzüko Valley", "Khonghampat Orchidarium", "Manipur State Museum"],
    activities: ["Floating lake tours", "Cultural dance performances", "Market visits", 
                "Bird watching", "Wildlife viewing", "Boat rides", 
                "Handicraft shopping", "Traditional sports watching", "Valley treks", "Museum tours"],
    food: ["Eromba", "Chamthong", "Ooti", "Kangshoi", "Morok Metpa", "Singju", "Chak-hao Kheer", "Nga-thongba"],
    seasonalTips: {
        summer: "Mild and pleasant (March-May)",
        winter: "Cool but comfortable (Nov-Feb)",
        monsoon: "Heavy rainfall but Loktak Lake looks beautiful (June-Sept)",
        spring: "Good for outdoor activities (Feb-March)",
        autumn: "Perfect weather for all activities (Oct-Nov)"
    }
},
"mizoram": {
    attractions: ["Phawngpui (Blue Mountain)", "Reiek Peak", "Dampa Tiger Reserve", "Vantawng Falls", "Tamdil Lake", 
                "Solomon's Temple", "Aizawl", "Murlen National Park", "Palak Lake", "Champhai"],
    activities: ["Mountain trekking", "Bird watching", "Bamboo craft workshops", 
                "Cultural dance performances", "Village homestays", "Nature photography", 
                "Traditional textile exploration", "Wildlife viewing", "Cave exploration", "Waterfall visits"],
    food: ["Bai", "Vawksa Rep", "Bamboo Shoot Fry", "Sawhchiar", "Chhum Han", "Koat Pitha", "Sa-um", "Zu"],
    seasonalTips: {
        summer: "Mild and pleasant for outdoor activities (March-May)",
        winter: "Cold but gorgeous views (Nov-Feb)",
        monsoon: "Heavy rainfall with challenging travel (June-Sept)",
        spring: "Good for trekking and wildlife (Feb-March)",
        autumn: "Perfect weather and clear skies (Oct-Nov)"
    }
},
"nagaland": {
    attractions: ["Kohima", "Dzükou Valley", "Khonoma Village", "Naga Heritage Village", "Triple Falls", 
                "Intanki National Park", "Touphema Tourist Village", "Mon", "Benreu", "Doyang River"],
    activities: ["Tribal village tours", "Hornbill Festival", "Trekking", 
                "Bird watching", "War cemetery visits", "Cultural performances", 
                "Traditional craft workshops", "Angling", "Village homestays", "Nature photography"],
    food: ["Smoked Pork", "Axone", "Zutho", "Galho", "Naga Curry", "Bamboo Shoot Pickle", "Black Rice", "Naga King Chili"],
    seasonalTips: {
        summer: "Mild and good for outdoor activities (March-May)",
        winter: "Cold but perfect for Hornbill Festival (Dec)",
        monsoon: "Heavy rainfall with limited accessibility (June-Sept)",
        spring: "Pleasant weather for trekking (Feb-March)",
        autumn: "Ideal weather for village tours (Oct-Nov)"
    }
},
"tripura": {
    attractions: ["Ujjayanta Palace", "Neermahal", "Sepahijala Wildlife Sanctuary", "Unakoti", "Jampui Hills", 
                "Kunjaban Palace", "Chabimura", "Tripura Sundari Temple", "Dumboor Lake", "Pilak"],
    activities: ["Palace tours", "Lake boat rides", "Archaeological site visits", 
                "Tribal village tours", "Pineapple and orange plantations", "Rock carvings viewing", 
                "Bamboo craft shopping", "Temple pilgrimages", "Bird watching", "Cultural performances"],
    food: ["Chakhwi", "Wahan Mosdeng", "Muya Awandru", "Panch Phoron Tarkari", "Mui Borok", "Bhangui", "Berma Bwtwi", "Chuak"],
    seasonalTips: {
        summer: "Hot and humid (March-May)",
        winter: "Pleasant and comfortable (Nov-Feb)",
        monsoon: "Heavy rainfall but lush green landscapes (June-Sept)",
        spring: "Good for outdoor visits (Feb-March)",
        autumn: "Perfect weather for all activities (Oct-Nov)"
    }
},
"lakshadweep": {
    attractions: ["Agatti Island", "Bangaram Island", "Kavaratti Island", "Minicoy Island", "Kalpeni Island", 
                "Marine Museum", "Lighthouse", "Pitti Bird Sanctuary", "Coral Reefs", "Lagoons"],
    activities: ["Scuba diving", "Snorkeling", "Kayaking", "Glass bottom boat rides", 
                "Island hopping", "Beach relaxation", "Fishing trips", "Water sports", 
                "Marine life viewing", "Cultural performances"],
    food: ["Tuna Fish", "Octopus Curry", "Fish Tikka", "Grilled Fish", "Seafood Platter", "Mus Kavaab", "Coconut Rice", "Fish Biryani"],
    seasonalTips: {
        summer: "Hot but good for water activities (March-May)",
        winter: "Perfect weather with clear waters (Nov-Feb)",
        monsoon: "Heavy rainfall and rough seas, not recommended (June-Sept)",
        spring: "Good for underwater activities (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"chandigarh": {
    attractions: ["Rock Garden", "Sukhna Lake", "Rose Garden", "Capitol Complex", "Government Museum and Art Gallery", 
                "Cactus Garden", "Pinjore Gardens", "Chhatbir Zoo", "Leisure Valley", "Garden of Silence"],
    activities: ["Architecture tours", "Boating at Sukhna Lake", "Garden visits", 
                "Shopping at Sector 17", "Museum tours", "Cycling", 
                "Bird watching", "Photography tours", "Cultural performances", "Food walks"],
    food: ["Chole Bhature", "Butter Chicken", "Panjiri", "Lassi", "Gol Gappe", "Paranthe", "Pakode", "Chaat"],
    seasonalTips: {
        summer: "Hot but evenings are pleasant (April-June)",
        winter: "Cold but comfortable for sightseeing (Nov-Feb)",
        monsoon: "Moderate rainfall with fresh gardens (July-Sept)",
        spring: "Perfect weather with blooming gardens (Feb-March)",
        autumn: "Very pleasant weather (Oct-Nov)"
    }
},
"mumbai": {
    attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves", "Chhatrapati Shivaji Terminus", "Juhu Beach", 
                "Bandra-Worli Sea Link", "Siddhivinayak Temple", "Film City", "Kanheri Caves", "Haji Ali Dargah"],
    activities: ["Heritage walks", "Beach visits", "Bollywood tours", 
                "Street food exploration", "Harbor cruises", "Museum visits", 
                "Local train experiences", "Shopping", "Temple pilgrimages", "Cultural performances"],
    food: ["Vada Pav", "Pav Bhaji", "Bombay Sandwich", "Bhel Puri", "Misal Pav", "Pani Puri", "Mumbai Frankies", "Malvani Fish Curry"],
    seasonalTips: {
        summer: "Hot and humid (March-May)",
        winter: "Pleasant and ideal for all activities (Nov-Feb)",
        monsoon: "Heavy rainfall but romantic atmosphere (June-Sept)",
        spring: "Good for city exploration (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"chennai": {
    attractions: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George", "Government Museum", "San Thome Basilica", 
                "Elliot's Beach", "Vivekananda House", "MGR Film City", "Guindy National Park", "Cholamandal Artists' Village"],
    activities: ["Beach walks", "Temple visits", "Historical site tours", 
                "Museum explorations", "Shopping for silk sarees", "Classical music concerts", 
                "Dance performances", "Food tours", "Wildlife viewing", "Art gallery visits"],
    food: ["Dosa", "Idli", "Filter Coffee", "Chettinad Chicken", "Mysore Pak", "Chennai Biryani", "Mullaga Podi", "Rasam"],
    seasonalTips: {
        summer: "Very hot and humid (March-June)",
        winter: "Pleasant and ideal for sightseeing (Nov-Feb)",
        monsoon: "Northeast monsoon brings heavy rain (Oct-Dec)",
        spring: "Hot but manageable for indoor activities (Feb-March)",
        autumn: "Post-monsoon pleasant weather (Jan-Feb)"
    }
},
"kolkata": {
    attractions: ["Victoria Memorial", "Howrah Bridge", "Park Street", "Indian Museum", "Dakshineswar Kali Temple", 
                "Science City", "New Market", "Marble Palace", "South Park Street Cemetery", "Eden Gardens"],
    activities: ["Heritage walks", "Tram rides", "River cruises", 
                "Cultural performances", "Food tours", "Literary trails", 
                "Art gallery visits", "Shopping for handicrafts", "Festival celebrations", "Museum tours"],
    food: ["Rasgulla", "Mishti Doi", "Kathi Roll", "Fish Curry", "Kosha Mangsho", "Shorshe Ilish", "Phuchka", "Sandesh"],
    seasonalTips: {
        summer: "Hot and humid (March-June)",
        winter: "Perfect pleasant weather (Nov-Feb)",
        monsoon: "Heavy rainfall but city has unique charm (July-Sept)",
        spring: "Good for city exploration (Feb-March)",
        autumn: "Cultural festivities including Durga Puja (Sept-Oct)"
    }
},
"bengaluru": {
    attractions: ["Lalbagh Botanical Garden", "Bangalore Palace", "Cubbon Park", "ISKCON Temple", "Bannerghatta National Park", 
                "Tipu Sultan's Summer Palace", "Bull Temple", "Ulsoor Lake", "Wonderla", "Commercial Street"],
    activities: ["Garden walks", "Palace tours", "Tech hub visits", 
                "Microbrewery explorations", "Shopping", "Wildlife safaris", 
                "Temple visits", "Food tours", "Amusement park fun", "Art gallery visits"],
    food: ["Dosa", "Bisi Bele Bath", "Ragi Mudde", "Filter Coffee", "Karnataka Biriyani", "Mysore Pak", "Idli Vada", "Obbattu"],
    seasonalTips: {
        summer: "Relatively pleasant compared to other cities (March-May)",
        winter: "Perfect weather for all activities (Nov-Feb)",
        monsoon: "Moderate rainfall, gardens look fresh (June-Sept)",
        spring: "Good for outdoor activities (Feb-March)",
        autumn: "Pleasant weather throughout (Oct-Nov)"
    }
},
"haryana": {
    attractions: ["Kurukshetra", "Sultanpur Bird Sanctuary", "Pinjore Gardens", "Kingdom of Dreams", "Surajkund", 
                 "Damdama Lake", "Aravalli Biodiversity Park", "Yadavindra Gardens", "Noor Mahal", "Badkhal Lake"],
    activities: ["Heritage tours", "Bird watching", "Religious pilgrimages", 
                "Cultural performances", "Craft fair visits", "Water sports", 
                "Farm tourism", "Highway food exploration", "Weekend getaways", "Historical walks"],
    food: ["Kachri ki Sabzi", "Singri ki Sabzi", "Bajra Khichdi", "Kadhi Pakora", "Bathua Raita", "Churma", "Malpua", "Meethi Lassi"],
    seasonalTips: {
        summer: "Hot and best avoided except evenings (April-June)",
        winter: "Perfect weather for sightseeing (Nov-Feb)",
        monsoon: "Moderate rainfall, rural areas become lush (July-Sept)",
        spring: "Pleasant weather and ideal for all activities (Feb-March)",
        autumn: "Very comfortable temperatures (Oct-Nov)"
    }
},
"daman and diu": {
    attractions: ["Diu Fort", "Nagoa Beach", "St. Paul's Church", "Diu Museum", "Jallandhar Beach", 
                 "Naida Caves", "Daman Fort", "Moti Daman", "Devka Beach", "INS Khukri Memorial"],
    activities: ["Beach visits", "Portuguese architecture tours", "Water sports", 
                "Fort exploration", "Seafood dining", "Church visits", 
                "Museum tours", "Fishing village tours", "Cycling around the island", "Water parks"],
    food: ["Portuguese Cuisine", "Seafood", "Fish Curry", "Sol Kadhi", "Coconut Based Dishes", "Feni", "Prawns Balchão", "Sweet Rice Dish"],
    seasonalTips: {
        summer: "Hot but great for beach activities (March-May)",
        winter: "Perfect pleasant weather with fewer tourists (Nov-Feb)",
        monsoon: "Heavy rainfall, not ideal for beach activities (June-Sept)",
        spring: "Good weather for outdoor activities (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"dadra and nagar haveli": {
    attractions: ["Tribal Cultural Museum", "Vanganga Lake Garden", "Dudhni Lake", "Khanvel", "Deer Park", 
                 "Silvassa Church", "Hirwa Van Garden", "Vasona Lion Safari", "Satmaliya Deer Park", "Madhuban Dam"],
    activities: ["Tribal culture exploration", "Lake boating", "Bird watching", 
                "Wildlife safari", "Nature walks", "Watersports", 
                "Camping", "Fishing", "Tribal craft shopping", "Tribal dance performances"],
    food: ["Ubadiyu", "Khudi", "Dal Dhokli", "Sukat ni Kadhi", "Paplet Saar", "Mahamda", "Tribal Cuisine", "Dambhalia"],
    seasonalTips: {
        summer: "Hot and humid (March-May)",
        winter: "Pleasant and ideal for outdoor activities (Nov-Feb)",
        monsoon: "Heavy rainfall but lush green landscapes (June-Sept)",
        spring: "Good for nature walks (Feb-March)",
        autumn: "Comfortable weather (Oct-Nov)"
    }
},
"hyderabad": {
    attractions: ["Charminar", "Golconda Fort", "Hussain Sagar Lake", "Ramoji Film City", "Salar Jung Museum", 
                 "Birla Mandir", "Chowmahalla Palace", "Qutb Shahi Tombs", "Falaknuma Palace", "Nehru Zoological Park"],
    activities: ["Historical monument tours", "Pearl shopping", "Biryani food trails", 
                "Heritage walks", "Boat rides", "Film city tours", 
                "Museum visits", "Handicraft shopping", "Street food exploration", "Old city tours"],
    food: ["Hyderabadi Biryani", "Haleem", "Pathar ka Gosht", "Qubani ka Meetha", "Irani Chai", "Osmania Biscuits", "Double Ka Meetha", "Mirchi ka Salan"],
    seasonalTips: {
        summer: "Very hot and best avoided (March-May)",
        winter: "Perfect weather for sightseeing (Nov-Feb)",
        monsoon: "Moderate rainfall with pleasant evenings (June-Sept)",
        spring: "Manageable temperatures (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"ahmedabad": {
    attractions: ["Sabarmati Ashram", "Adalaj Stepwell", "Sarkhej Roza", "Sidi Saiyyed Mosque", "Kankaria Lake", 
                 "Jama Masjid", "Calico Museum of Textiles", "Auto World Vintage Car Museum", "Hutheesing Jain Temple", "Sardar Vallabhbhai Patel National Memorial"],
    activities: ["Heritage walks", "Textile museum tours", "Cultural performances", 
                "Kite festival participation", "Street food exploration", "Handicraft shopping", 
                "Riverfront promenade", "Temple visits", "Historical monument tours", "Utensil museum visits"],
    food: ["Dhokla", "Fafda-Jalebi", "Handvo", "Khandvi", "Thepla", "Undhiyu", "Dabeli", "Gujarati Thali"],
    seasonalTips: {
        summer: "Very hot but indoor activities work well (March-May)",
        winter: "Perfect weather for all activities, especially Kite Festival (Nov-Feb)",
        monsoon: "Moderate rainfall with humid conditions (June-Sept)",
        spring: "Good for city exploration (Feb-March)",
        autumn: "Pleasant weather for heritage walks (Oct-Nov)"
    }
},
"mysore": {
    attractions: ["Mysore Palace", "Chamundi Hills", "St. Philomena's Church", "Mysore Zoo", "Brindavan Gardens", 
                 "Devaraja Market", "Jaganmohan Palace", "Karanji Lake", "Railway Museum", "Somnathpur Temple"],
    activities: ["Palace tours", "Cultural performances", "Silk shopping", 
                "Handicraft exploration", "Ashtanga yoga classes", "Dasara festival celebration", 
                "Sandalwood product shopping", "Culinary tours", "Heritage walks", "Temple visits"],
    food: ["Mysore Masala Dosa", "Mysore Pak", "Ragi Mudde", "Chiroti", "Mysore Bonda", "Nanjangud Rasabale", "Mallige Idli", "Mysore Malai"],
    seasonalTips: {
        summer: "Warm but manageable (March-May)",
        winter: "Perfect pleasant weather (Nov-Feb)",
        monsoon: "Light rainfall with green surroundings (June-Sept)",
        spring: "Good for outdoor activities (Feb-March)",
        autumn: "Ideal weather and festive season (Sept-Oct)"
    }
},
"lucknow": {
    attractions: ["Bara Imambara", "Chota Imambara", "Rumi Darwaza", "British Residency", "Hazratganj", 
                 "Ambedkar Memorial Park", "Chattar Manzil", "La Martinière College", "Lucknow Zoo", "Constantia House"],
    activities: ["Heritage walks", "Chikankari shopping", "Food trails", 
                "Historical monument tours", "Cultural performances", "Garden visits", 
                "River front strolls", "Traditional crafts exploration", "Tonga rides", "Museum visits"],
    food: ["Lucknowi Biryani", "Tunday Kebab", "Galawati Kebab", "Basket Chaat", "Sheermal", "Kulfi", "Makhan Malai", "Shahi Tukda"],
    seasonalTips: {
        summer: "Very hot and best avoided (April-June)",
        winter: "Perfect weather with occasional fog (Nov-Feb)",
        monsoon: "Moderate rainfall (July-Sept)",
        spring: "Good for monument visits (Feb-March)",
        autumn: "Pleasant with fewer tourists (Oct-Nov)"
    }
},
"bhopal": {
    attractions: ["Upper Lake", "Van Vihar National Park", "Bhojpur Temple", "Bhimbetka Rock Shelters", "Shaukat Mahal", 
                 "Taj-ul-Masajid", "Moti Masjid", "Lower Lake", "Tribal Museum", "Birla Museum"],
    activities: ["Lake activities", "Wildlife safaris", "Heritage walks", 
                "Archaeological site visits", "Museum tours", "Bird watching", 
                "Boating", "Food trails", "Tribal culture exploration", "Mosque visits"],
    food: ["Bhopal ki Biryani", "Rogan Josh", "Bhopali Gosht Korma", "Malpua", "Filfora", "Kebabs", "Bhopali Paan", "Shahi Shikanji"],
    seasonalTips: {
        summer: "Hot but lakes provide some relief (March-June)",
        winter: "Perfect weather for all activities (Nov-Feb)",
        monsoon: "Moderate rainfall with lush surroundings (July-Sept)",
        spring: "Good for outdoor activities (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"coorg (kodagu)": {
    attractions: ["Raja's Seat", "Abbey Falls", "Dubare Elephant Camp", "Talakaveri", "Namdroling Monastery", 
                 "Iruppu Falls", "Mandalpatti", "Tadiandamol Peak", "Omkareshwara Temple", "Brahmagiri Wildlife Sanctuary", "Abbey Falls", "Dubare Elephant Camp", "Namdroling Monastery", "Raja's Seat", 
                 "Talacauvery", "Iruppu Falls", "Madikeri Fort", "Tadiandamol Peak", 
                 "Coffee Plantations", "Nisargadhama"],
    activities: ["Coffee plantation tours", "River rafting", "Elephant interactions", 
                "Trekking", "Bird watching", "Waterfall visits", 
                "Monastery visits", "Wildlife safaris", "Photography", "Homestay experiences"],
    food: ["Pandi Curry", "Akki Otti", "Kadambuttu", "Noolputtu", "Bamboo Shoot Curry", "Koli Curry", "Paputt", "Coorg Honey"],
    seasonalTips: {
        summer: "Pleasant hill climate (March-May)",
        winter: "Cool weather with misty mornings (Nov-Feb)",
        monsoon: "Heavy rainfall but stunning green landscapes (June-Sept)",
        spring: "Good for outdoor activities (Feb-March)",
        autumn: "Perfect weather with clear skies (Oct-Nov)"
    }
},
"puducherry": {
    attractions: ["Promenade Beach", "Auroville", "Paradise Beach", "Sri Aurobindo Ashram", "French Quarter", 
                 "Chunnambar Boat House", "Serenity Beach", "Matrimandir", "Pondicherry Museum", "Bharathi Park"],
    activities: ["Beach relaxation", "Spiritual retreats", "French colonial architecture tours", 
                "Surfing lessons", "Auroville visits", "Scuba diving", 
                "Yoga and meditation", "International cuisine exploration", "Cycling tours", "Boat rides"],
    food: ["French Cuisine", "Seafood", "Filter Coffee", "Creole Food", "Idli and Sambhar", "Croissants", "Bouillabaisse", "Coconut Curry"],
    seasonalTips: {
        summer: "Hot but beaches provide relief (March-June)",
        winter: "Perfect weather for all activities (Nov-Feb)",
        monsoon: "Northeast monsoon brings heavy rain (Oct-Dec)",
        spring: "Good for beach activities (Feb-March)",
        autumn: "Pleasant coastal weather (Sept-Oct)"
    }
},
"gokarna": {
    attractions: ["Om Beach", "Mahabaleshwara Temple", "Half Moon Beach", "Paradise Beach", "Kudle Beach", 
                 "Gokarna Beach", "Mirjan Fort", "Koti Tirtha", "Bhadrakali Temple", "Maha Ganapati Temple"],
    activities: ["Beach hopping", "Temple pilgrimages", "Yoga retreats", 
                "Trekking between beaches", "Water sports", "Sunset viewing", 
                "Beach camping", "Boat trips", "Meditation", "Ayurvedic treatments"],
    food: ["Seafood Thali", "Neer Dosa", "Kane Fish Fry", "Coconut Curry", "Goli Baje", "Kori Rotti", "Biscuit Rotti", "Mangalorean Cuisine"],
    seasonalTips: {
        summer: "Hot but good for beach visits early morning/evening (March-May)",
        winter: "Perfect weather for beaches and temples (Nov-Feb)",
        monsoon: "Heavy rainfall, beaches not recommended (June-Sept)",
        spring: "Good for temple visits and beaches (Feb-March)",
        autumn: "Pleasant with fewer tourists (Oct-Nov)"
    }
},
"hampi": {
    attractions: ["Virupaksha Temple", "Vittala Temple", "Hampi Bazaar", "Lotus Mahal", "Elephant Stables", 
                 "Queen's Bath", "Matanga Hill", "Hemakuta Hill", "Underground Shiva Temple", "Achyutaraya Temple"],
    activities: ["Archaeological site tours", "Rock climbing", "Coracle boat rides", 
                "Bicycle exploration", "Temple architecture study", "Sunset viewing", 
                "Photography tours", "Village walks", "Cliff jumping", "Local music experiences"],
    food: ["Jolada Rotti", "Bisi Bele Bath", "Akki Rotti", "Ragi Mudde", "Kadubu", "North Karnataka Thali", "Obattu", "Mango Pickle"],
    seasonalTips: {
        summer: "Very hot and best avoided (March-May)",
        winter: "Perfect weather for exploration (Nov-Feb)",
        monsoon: "Lush green surroundings but some sites may be slippery (June-Sept)",
        spring: "Good for morning and evening visits (Feb-March)",
        autumn: "Pleasant weather with dramatic sunset views (Oct-Nov)"
    }
},
"corbett national park": {
    attractions: ["Dhikala Zone", "Bijrani Zone", "Jhirna Zone", "Sonanadi Wildlife Sanctuary", "Corbett Falls", 
                 "Garjia Temple", "Corbett Museum", "Kalagarh Dam", "Sitabani Forest", "Dhangari Museum"],
    activities: ["Jeep safaris", "Elephant safaris", "Bird watching", 
                "Nature walks", "River rafting", "Angling", 
                "Wildlife photography", "Camping", "Jungle stays", "Museum visits"],
    food: ["Kumaoni Cuisine", "Aloo ke Gutke", "Bhatt ki Churkani", "Kafuli", "Pahadi Chicken", "Mandua ki Roti", "Sisunak Saag", "Bal Mithai"],
    seasonalTips: {
        summer: "Hot but good wildlife sightings at water bodies (April-June)",
        winter: "Perfect weather with highest animal visibility (Nov-Feb)",
        monsoon: "Park partially closed due to heavy rainfall (July-Sept)",
        spring: "Good for bird watching (Feb-March)",
        autumn: "Park reopens with lush landscapes (Oct-Nov)"
    }
},
"rann of kutch": {
    attractions: ["White Rann", "Kala Dungar", "Dhordo Tent City", "Kutch Desert Wildlife Sanctuary", "Mandvi Beach", 
                 "Bhuj Palace", "Living and Learning Design Centre", "Narayan Sarovar", "Aina Mahal", "Prag Mahal"],
    activities: ["White desert photography", "Rann Utsav festival", "Handicraft village visits", 
                "Camel rides", "Cultural performances", "Salt harvesting tours", 
                "Tribal village visits", "Stargazing", "Bird watching", "Sunset viewing"],
    food: ["Bajra no rotlo", "Kutchi Dabeli", "Khichdi", "Pakwan", "Kutchi Kadhi", "Sev Tameta", "Gulab Pak", "Ghughra"],
    seasonalTips: {
        summer: "Extremely hot and not recommended (March-June)",
        winter: "Perfect for Rann Utsav and desert experiences (Nov-Feb)",
        monsoon: "Rann submerged under water, not accessible (July-Sept)",
        spring: "Last chance to visit before summer heat (Feb-March)",
        autumn: "Beginning of tourist season (Oct-Nov)"
    }
},
"khajuraho": {
    attractions: ["Western Group of Temples", "Eastern Group of Temples", "Southern Group of Temples", "Raneh Falls", 
                 "Panna National Park", "Ajaigarh Fort", "Dhubela Museum", "Pandav Falls", "Ken Gharial Sanctuary", "Jain Museum"],
    activities: ["Temple architecture tours", "Light and sound show", 
                "Cultural performances", "Wildlife safaris", "Waterfall visits", 
                "Archaeological explorations", "Photography", "Museum visits", "Nature walks", "River cruise"],
    food: ["Kadaknath Chicken", "Mawa-Bati", "Chakki Ki Shaak", "Indori Poha", "Bhopali Gosht Korma", "Malpua", "Rogan Josh", "Dal Bafla"],
    seasonalTips: {
        summer: "Very hot but less crowded (March-June)",
        winter: "Perfect weather for temple visits (Nov-Feb)",
        monsoon: "Lush surroundings but occasional heavy rainfall (July-Sept)",
        spring: "Good for temple explorations (Feb-March)",
        autumn: "Pleasant with clear skies for photography (Oct-Nov)"
    }
},
"amritsar": {
    attractions: ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Partition Museum", "Gobindgarh Fort", 
                 "Ram Tirath", "Guru Ke Mahal", "Maharaja Ranjit Singh Museum", "Akal Takht", "Durgiana Temple"],
    activities: ["Temple visits", "Border retreat ceremony watching", "Heritage walks", 
                "Food tours", "Museum explorations", "Volunteer at langar", 
                "Shopping for Phulkari", "Historical site visits", "Cultural performances", "Rural tourism"],
    food: ["Amritsari Kulcha", "Makki di Roti & Sarson da Saag", "Amritsari Fish", "Chole Bhature", "Lassi", "Pinni", "Jalebis", "Tandoori Chicken"],
    seasonalTips: {
        summer: "Very hot but less crowded (April-June)",
        winter: "Cold but perfect for sightseeing (Nov-Feb)",
        monsoon: "Moderate rainfall (July-Sept)",
        spring: "Pleasant weather for city exploration (Feb-March)",
        autumn: "Comfortable temperatures (Oct-Nov)"
    }
},
"kaziranga national park": {
    attractions: ["Western Range", "Central Range", "Eastern Range", "Kakochang Waterfall", "Orchid Park", 
                 "Tea Gardens", "Panbari Reserve Forest", "Brahmaputra River", "Kaziranga Orchid Park", "Karbi Anglong Hills"],
    activities: ["Jeep safaris", "Elephant safaris", "Bird watching", 
                "River cruises", "Orchid park visits", "Tea garden tours", 
                "Wildlife photography", "Village tours", "Nature walks", "Cultural performances"],
    food: ["Assamese Thali", "Duck Meat Curry", "Khar", "Masor Tenga", "Pitha", "Ou Khatta", "Koldil Chicken", "Black Rice"],
    seasonalTips: {
        summer: "Hot but good for wildlife sightings (March-May)",
        winter: "Perfect weather with clear visibility (Nov-Feb)",
        monsoon: "Park closed due to flooding (June-Sept)",
        spring: "Good for bird watching (Feb-March)",
        autumn: "Park reopens with lush landscapes (Oct-Nov)"
    }
},
"orchha": {
    attractions: ["Orchha Fort Complex", "Raja Ram Temple", "Chaturbhuj Temple", "Jahangir Mahal", "Cenotaphs", 
                 "Laxminarayan Temple", "Phool Bagh", "Ram Raja Palace", "Dinman Hardaul's Palace", "Sunder Mahal"],
    activities: ["Heritage walks", "River rafting", "Temple visits", 
                "Light and sound show", "Photography tours", "Cooking classes", 
                "Village tours", "Bird watching", "Sunset viewing", "Cultural performances"],
    food: ["Bundelkhandi Thali", "Mawa-Bati", "Chakki Ki Shaak", "Dal Bafla", "Bedmi Puri", "Jalebi", "Kadaknath Chicken", "Arhar Dal"],
    seasonalTips: {
        summer: "Very hot but less crowded (March-June)",
        winter: "Perfect weather for sightseeing (Nov-Feb)",
        monsoon: "Lush surroundings and river in full flow (July-Sept)",
        spring: "Good for river activities (Feb-March)",
        autumn: "Pleasant with fewer tourists (Oct-Nov)"
    }
},
"kanyakumari": {
    attractions: ["Vivekananda Rock Memorial", "Thiruvalluvar Statue", "Kanyakumari Beach", "Suchindram Temple", "Padmanabhapuram Palace", 
                 "Sunset Point", "Gandhi Memorial", "Thirparappu Falls", "Our Lady of Ransom Church", "Thanumalayan Temple"],
    activities: ["Sunrise and sunset viewing", "Beach visits", "Ferry rides to memorials", 
                "Temple pilgrimages", "Palace tours", "Shopping for seashell crafts", 
                "Multi-colored sand collection", "Meditation", "Cultural performances", "Photography"],
    food: ["Kerala Sadya", "Fish Curry", "Appam with Stew", "Kothu Parotta", "Puttu and Kadala Curry", "Idiappam", "Paniyaram", "Nendran Chips"],
    seasonalTips: {
        summer: "Hot but good for beach activities (March-May)",
        winter: "Perfect weather for all activities (Nov-Feb)",
        monsoon: "Heavy rainfall with spectacular ocean views (June-Sept)",
        spring: "Good for sunrise/sunset viewing (Feb-March)",
        autumn: "Pleasant post-monsoon weather (Oct-Nov)"
    }
},
"ludhiana": {
    attractions: ["Maharaja Ranjit Singh War Museum", "Punjab Agricultural University Museum", "Nehru Rose Garden", 
                  "Phillaur Fort", "Gurudwara Charan Kanwal Sahib", "Hardy's World Amusement Park", 
                  "Rural Heritage Museum", "Lodhi Fort", "Guru Nanak Stadium", "Clock Tower (Ghanta Ghar)"],
    activities: ["Shopping at Chaura Bazaar", "Heritage walks in old city", "Factory tours (textile and bicycle industries)", 
                 "Punjabi cultural experiences", "Food tours", "Visiting rural farms", 
                 "Attending Punjabi folk music and dance events", "Shopping for Phulkari embroidery", 
                 "Cycling tours", "Attending local sports events (kabaddi)"],
    food: ["Butter Chicken", "Amritsari Kulcha", "Makki di Roti with Sarson da Saag", 
           "Ludhiana Dahi Bhalla", "Punjabi Lassi", "Pinni", "Punjab Kadhi Pakora", 
           "Paratha varieties", "Chole Bhature", "Ludhiana Chicken Curry"],
    seasonalTips: {
        summer: "Hot and humid, indoor activities recommended (April-June)",
        winter: "Perfect weather for sightseeing and outdoor activities (Nov-Feb)",
        monsoon: "Moderate rainfall, carry rain protection (July-Sept)",
        spring: "Pleasant temperatures, good for all activities (Feb-March)",
        autumn: "Harvest festivals and comfortable climate (Oct-Nov)"
    }
},
"srinagar": {
    attractions: ["Dal Lake", "Shalimar Bagh", "Nishat Bagh", "Mughal Gardens", 
                  "Shankaracharya Temple", "Hazratbal Shrine", "Jamia Masjid", 
                  "Pari Mahal", "Chashme Shahi", "Hari Parbat Fort"],
    activities: ["Shikara ride on Dal Lake", "Houseboat stay", "Shopping at Lal Chowk", 
                 "Kashmiri handicrafts shopping", "Trekking in nearby mountains", 
                 "Winter sports at Gulmarg", "Bird watching at Hokersar Wetland", 
                 "Floating vegetable market tour", "Traditional Kashmiri music evenings", 
                 "Tulip Garden visit (seasonal)"],
    food: ["Rogan Josh", "Kashmiri Pulao", "Dum Aloo", "Kashmiri Kahwa", 
           "Yakhni", "Modur Pulao", "Tabak Maaz", "Kashmiri Wazwan", 
           "Sheermal", "Nadru Yakhni"],
    seasonalTips: {
        summer: "Pleasant weather, ideal for all activities (April-June)",
        winter: "Cold with snow, great for snow activities (Nov-Feb)",
        monsoon: "Light rainfall, beautiful landscapes (July-Sept)",
        spring: "Blooming gardens and moderate climate (March-April)",
        autumn: "Golden landscapes and harvest season (Sept-Oct)"
    }
},

"nainital": {
    attractions: ["Naini Lake", "Mall Road", "Naina Devi Temple", "Snow View Point", 
                  "Tiffin Top", "Eco Cave Gardens", "Nainital Zoo", 
                  "Governor's House", "St. John's Church", "Nainital Ropeway"],
    activities: ["Boating on Naini Lake", "Horse riding", "Trekking", 
                 "Shopping at Tibetan Market", "Cable car ride", "Stargazing", 
                 "Bird watching", "Camping", "Rock climbing", 
                 "Nature photography"],
    food: ["Bal Mithai", "Singori", "Bhatt ki Churkani", "Aloo ke Gutke", 
           "Kumaoni Raita", "Garhwali Thali", "Bhang ki Chutney", 
           "Dubuk", "Madua Roti", "Kumaoni Chai"],
    seasonalTips: {
        summer: "Popular tourist season with comfortable weather (March-June)",
        winter: "Cold with occasional snowfall, fewer crowds (Nov-Feb)",
        monsoon: "Heavy rainfall, lush green landscapes (July-Sept)",
        spring: "Blooming flora and pleasant climate (Feb-March)",
        autumn: "Clear skies and comfortable temperatures (Oct-Nov)"
    }
},

"kasauli": {
    attractions: ["Christ Church", "Kasauli Brewery", "Sunset Point", 
                  "Monkey Point", "Gilbert Trail", "Mall Road", 
                  "Kasauli Club", "Baba Balak Nath Temple", 
                  "Nahri Temple", "Shirdi Sai Baba Mandir"],
    activities: ["Nature walks", "Trekking", "Bird watching", 
                 "Shopping for Tibetan handicrafts", "Meditation and yoga", 
                 "Sunset viewing", "Heritage walks", 
                 "Brewery visits", "Photography", "Camping"],
    food: ["Himachali Dham", "Sidu", "Madra", "Aktori", 
           "Babru", "Chha Gosht", "Himachali Kadhi", 
           "Mittha", "Tudkiya Bhath", "Fruit wines"],
    seasonalTips: {
        summer: "Pleasant weather, perfect escape from plains (April-June)",
        winter: "Chilly with occasional snowfall, carry woolens (Nov-Feb)",
        monsoon: "Moderate rainfall, foggy views (July-Sept)",
        spring: "Colorful blooms and comfortable climate (March-April)",
        autumn: "Clear mountain views and cool weather (Oct-Nov)"
    }
},

"jodhpur": {
    attractions: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Jaswant Thada", 
                  "Clock Tower", "Mandore Gardens", "Rao Jodha Desert Rock Park", 
                  "Toorji Ka Jhalra", "Sardar Market", "Balsamand Lake", 
                  "Kailana Lake"],
    activities: ["Heritage walks in blue city", "Desert safari", "Zip-lining at Mehrangarh", 
                 "Shopping for Bandhani textiles", "Village tours", "Camel riding", 
                 "Rajasthani folk music and dance", "Cooking classes", 
                 "Photography tours", "Marwari horse riding"],
    food: ["Pyaaz Kachori", "Mirchi Bada", "Makhaniya Lassi", "Ker Sangri", 
           "Laal Maas", "Gatte ki Sabzi", "Mawa Kachori", "Ghevar", 
           "Bajre ki Roti", "Jodhpuri Mawa"],
    seasonalTips: {
        summer: "Very hot, indoor activities recommended (April-June)",
        winter: "Perfect weather for sightseeing (Nov-Feb)",
        monsoon: "Light rainfall, slightly humid (July-Sept)",
        spring: "Pleasant temperatures, good for all activities (Feb-March)",
        autumn: "Festive season with comfortable climate (Oct-Nov)"
    }}
    };

    // Get best season to visit
    function getBestTimeToVisit(destination) {
        const destKey = getDestinationKey(destination);
        if (!destKey) return "Year round, but winter (November-February) generally offers the most pleasant weather.";
        
        return `Summer: ${destinationData[destKey].seasonalTips.summer}. Winter: ${destinationData[destKey].seasonalTips.winter}. Spring: ${destinationData[destKey].seasonalTips.spring}. Autumn: ${destinationData[destKey].seasonalTips.autumn}.`;
    }

    // Helper function to get standardized destination key
    function getDestinationKey(destination) {
        const dest = destination.toLowerCase().trim();
        for (const key of Object.keys(destinationData)) {
            if (dest.includes(key) || key.includes(dest)) {
                return key;
            }
        }
        return null;
    }

    // Function to get recommendations based on interests
    function getRecommendationsByInterest(interests, destination) {
        const interestList = interests.toLowerCase().split(',').map(i => i.trim());
        const dest = getDestinationKey(destination);
        
        const recommendations = [];
        
        if (!dest) {
            return ["Visit major cultural landmarks and heritage sites", 
                    "Try local cuisine and street food", 
                    "Experience traditional Indian hospitality"];
        }
        
        // Match interests with attractions and activities
        interestList.forEach(interest => {
            if (interest.includes('food') || interest.includes('cuisine') || interest.includes('culinary')) {
                const foods = destinationData[dest].food;
                recommendations.push(`Try local delicacies like ${foods.slice(0, 3).join(', ')} and more`);
            }
            
            if (interest.includes('adventure') || interest.includes('trek') || interest.includes('outdoor')) {
                const activities = destinationData[dest].activities.filter(a => 
                    a.toLowerCase().includes('trek') || 
                    a.toLowerCase().includes('adventure') || 
                    a.toLowerCase().includes('rafting') ||
                    a.toLowerCase().includes('safari') ||
                    a.toLowerCase().includes('riding')
                );
                if (activities.length) {
                    recommendations.push(`Enjoy adventure activities like ${activities.slice(0, 3).join(', ')}`);
                }
            }
            
            if (interest.includes('history') || interest.includes('heritage') || interest.includes('culture')) {
                const historical = destinationData[dest].attractions.filter(a => 
                    a.toLowerCase().includes('fort') || 
                    a.toLowerCase().includes('palace') || 
                    a.toLowerCase().includes('temple') ||
                    a.toLowerCase().includes('heritage') ||
                    a.toLowerCase().includes('monastery')
                );
                if (historical.length) {
                    recommendations.push(`Explore historical sites like ${historical.slice(0, 3).join(', ')}`);
                }
            }
            
            if (interest.includes('nature') || interest.includes('wildlife') || interest.includes('scenic')) {
                const natural = destinationData[dest].attractions.filter(a => 
                    a.toLowerCase().includes('lake') || 
                    a.toLowerCase().includes('wildlife') || 
                    a.toLowerCase().includes('sanctuary') ||
                    a.toLowerCase().includes('garden') ||
                    a.toLowerCase().includes('falls') ||
                    a.toLowerCase().includes('valley')
                );
                if (natural.length) {
                    recommendations.push(`Experience natural beauty at ${natural.slice(0, 3).join(', ')}`);
                }
            }
            
            if (interest.includes('relax') || interest.includes('peaceful') || interest.includes('wellness')) {
                const relaxing = destinationData[dest].activities.filter(a => 
                    a.toLowerCase().includes('stay') || 
                    a.toLowerCase().includes('treatment') || 
                    a.toLowerCase().includes('beach') ||
                    a.toLowerCase().includes('ayurvedic')
                );
                if (relaxing.length) {
                    recommendations.push(`Rejuvenate with activities like ${relaxing.slice(0, 2).join(', ')}`);
                }
            }
        });
        
        // Add some general recommendations if we don't have enough
        if (recommendations.length < 3) {
            recommendations.push(`Visit top attractions like ${destinationData[dest].attractions.slice(0, 3).join(', ')}`);
            recommendations.push(`Don't miss popular activities like ${destinationData[dest].activities.slice(0, 3).join(', ')}`);
        }
        
        // Add a seasonal tip
        const currentMonth = new Date().getMonth();
        let season = '';
        if (currentMonth >= 2 && currentMonth <= 4) season = 'spring';
        else if (currentMonth >= 5 && currentMonth <= 7) season = 'summer';
        else if (currentMonth >= 8 && currentMonth <= 9) season = 'monsoon';
        else if (currentMonth >= 10 && currentMonth <= 11) season = 'autumn';
        else season = 'winter';
        
        recommendations.push(`Seasonal tip: ${destinationData[dest].seasonalTips[season]}`);
        
        return recommendations;
    }

    // Function to get AI suggestions
    async function getAISuggestions(destination, duration, interests) {
        try {
            // Check if we have local data for this destination
            const recommendations = getRecommendationsByInterest(interests, destination);
            
            // Add destination-specific advice
            recommendations.push(`For a ${duration}-day trip to ${destination}, focus on the must-visit attractions first`);
            
            // Add a packing tip
            const destKey = getDestinationKey(destination);
            if (destKey && destKey === 'ladakh') {
                recommendations.push('Pack layers as temperature varies significantly between day and night');
            } else if (destKey && (destKey === 'kerala' || destKey === 'goa')) {
                recommendations.push('Pack light cotton clothes, sunscreen, and mosquito repellent');
            } else if (destKey && (destKey === 'rajasthan')) {
                recommendations.push('Pack a hat, sunglasses, and light cotton clothes for sun protection');
            } else if (destKey && destKey === 'himachal pradesh') {
                recommendations.push('Pack warm clothes and comfortable trekking shoes');
            } else {
                recommendations.push('Pack appropriate clothes for the season and comfortable walking shoes');
            }
            
            return recommendations;
            
            /* Uncomment and modify this section if you want to integrate with the OpenAI API
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${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}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: "You are a helpful Indian travel assistant. Provide concise travel suggestions."
                        },
                        {
                            role: "user",
                            content: `I'm planning a trip to ${destination} for ${duration} days. I'm interested in ${interests}. Give me 5 specific travel suggestions.`
                        }
                    ],
                    max_tokens: 300
                })
            });
            
            const data = await response.json();
            if (data.choices && data.choices.length > 0) {
                // Split the response into individual suggestions
                const suggestions = data.choices[0].message.content
                    .split('\n')
                    .filter(line => line.trim().length > 0);
                
                return suggestions;
            } else {
                // Fallback to local recommendations if API fails
                return recommendations;
            }
            */
        } catch (error) {
            console.error('Error getting suggestions:', error);
            return ["Explore key attractions in " + destination,
                    "Try the local cuisine",
                    "Experience the local culture and traditions",
                    "Visit during the right season for the best experience",
                    "Pack appropriately for your trip"];
        }
    }

    // Function to get detailed itinerary for the location
    async function generateDetailedTrip(destination, duration, interests) {
        try {
            const numDays = parseInt(duration);
            if (isNaN(numDays) || numDays < 1) {
                return '<p>Please enter a valid number of days for your trip.</p>';
            }
            
            const destKey = getDestinationKey(destination);
            let attractionsList = [];
            let activitiesList = [];
            
            if (destKey && destinationData[destKey]) {
                attractionsList = destinationData[destKey].attractions;
                activitiesList = destinationData[destKey].activities;
            } else {
                // Generic attractions if destination not found
                attractionsList = ["Local Market", "Main Temple", "Historical Monument", 
                                "Central Square", "Cultural Center", "Scenic Viewpoint", 
                                "Local Museum", "Artisan Village", "Hidden Gems"];
                activitiesList = ["Local Cuisine Tasting", "Traditional Dance Show", "Guided Tour", 
                                "Shopping for Souvenirs", "Photography Walk", "Cultural Workshop", 
                                "Meeting Local Artisans", "Cooking Class"];
            }
            
            let tripPlan = '';
            
            // Day 1 is always arrival
            tripPlan += `
                <h3>Day 1: Arrival in ${destination}</h3>
                <p>Check into your hotel and explore the local markets. Get acclimatized to the surroundings and rest well for the adventures ahead.</p>
            `;
            
            // Create a balanced itinerary based on the number of days
            const interestList = interests.toLowerCase().split(',').map(i => i.trim());
            const hasAdventure = interestList.some(i => 
                i.includes('adventure') || i.includes('trek') || i.includes('outdoor')
            );
            const hasCulture = interestList.some(i => 
                i.includes('culture') || i.includes('history') || i.includes('heritage')
            );
            const hasFood = interestList.some(i => i.includes('food') || i.includes('cuisine'));
            
            // Determine how many attractions to include based on trip length
            const maxAttractions = Math.min(attractionsList.length, Math.max(3, Math.ceil(numDays * 1.5)));
            let selectedAttractions = [...attractionsList];
            if (hasCulture) {
                // Prioritize cultural attractions
                selectedAttractions.sort((a, b) => {
                    const aIsCultural = a.toLowerCase().includes('fort') || a.toLowerCase().includes('palace') || 
                                      a.toLowerCase().includes('temple') || a.toLowerCase().includes('museum');
                    const bIsCultural = b.toLowerCase().includes('fort') || b.toLowerCase().includes('palace') || 
                                      b.toLowerCase().includes('temple') || b.toLowerCase().includes('museum');
                    return (bIsCultural - aIsCultural);
                });
            }
            
            if (hasAdventure) {
                // Ensure adventure activities are included
                const adventureActivities = activitiesList.filter(a => 
                    a.toLowerCase().includes('trek') || a.toLowerCase().includes('rafting') || 
                    a.toLowerCase().includes('safari') || a.toLowerCase().includes('biking')
                );
                
                // Add adventure day for longer trips
                if (numDays > 3 && adventureActivities.length > 0) {
                    const adventureDay = Math.floor(numDays / 2); // Place in middle of trip
                    tripPlan += `
                        <h3>Day ${adventureDay}: Adventure Day</h3>
                        <p>Time for some excitement! ${adventureActivities.slice(0, 2).join(' and ')}. 
                        Experience the thrill while enjoying the natural beauty of ${destination}.</p>
                    `;
                }
            }
            
            // Generate regular sightseeing days
            let currentAttraction = 0;
            for (let day = 2; day < numDays; day++) {
                // Skip if this day was already planned (like adventure day)
                if (tripPlan.includes(`<h3>Day ${day}:`)) {
                    continue;
                }
                
                const dayAttractions = selectedAttractions.slice(
                    currentAttraction, 
                    currentAttraction + (numDays <= 3 ? 2 : 3)
                );
                currentAttraction += dayAttractions.length;
                
                if (dayAttractions.length === 0) break;
                
                tripPlan += `
                    <h3>Day ${day}: Exploring ${destination}</h3>
                    <p>Visit ${dayAttractions.join(' and ')}. 
                    ${day % 2 === 0 ? 'Take time to appreciate the local culture and architecture.' : 
                    'Enjoy the scenic beauty and capture memorable photographs.'}</p>
                `;
                
                // Add food experience every few days for longer trips
                if (hasFood && day % 3 === 0 && day < numDays - 1) {
                    tripPlan += `<p>Evening: Explore local cuisine at recommended restaurants or street food markets.</p>`;
                }
            }
            
            // Last day is always departure
            tripPlan += `
                <h3>Day ${numDays}: Departure</h3>
                <p>Enjoy your last breakfast and head to the airport/station. If time permits, pick up some last-minute souvenirs.</p>
            `;
            
            // Add a seasonal tip at the end
            tripPlan += `
                <h3>Seasonal Tips</h3>
                <p>${getBestTimeToVisit(destination)}</p>
                <p>This is a customized itinerary based on your interests in ${interests} for a ${duration}-day trip to ${destination}.</p>
            `;
            
            return tripPlan;
            
            /* Uncomment and modify this section if you want to integrate with the OpenAI API
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${YOUR_OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: "You are a professional Indian travel planner. Create a detailed day-by-day itinerary in HTML format with h3 tags for day headings."
                        },
                        {
                            role: "user",
                            content: `Create a detailed ${duration}-day itinerary for ${destination}, focusing on these interests: ${interests}. Include specific attractions, activities, and practical advice.`
                        }
                    ],
                    max_tokens: 1000
                })
            });
            
            const data = await response.json();
            if (data.choices && data.choices.length > 0) {
                return data.choices[0].message.content;
            } else {
                // Fallback to the local implementation
                return tripPlan;
            }
            */
        } catch (error) {
            console.error('Error generating trip plan:', error);
            return `
                <h3>Day 1: Arrival in ${destination}</h3>
                <p>Check into your hotel and explore the local markets.</p>
                <h3>Day 2-${parseInt(duration)-1}: Exploration</h3>
                <p>Discover the beauty and culture of ${destination}.</p>
                <h3>Day ${duration}: Departure</h3>
                <p>Enjoy your last breakfast and head to the airport/station.</p>
                <p>This is a basic itinerary for your ${duration}-day trip to ${destination}.</p>
            `;
        }
    }

    // Event listener for getting AI suggestions - keep your original function
    $('#getSuggestions').on('click', async function() {
        const destination = $('#destination').val();
        const duration = $('#duration').val();
        const interests = $('#interests').val();

        if (destination && duration && interests) {
            suggestionsList.empty();
            suggestionsSection.show();
            suggestionsList.append('<li class="list-group-item">Fetching suggestions...</li>');

            const suggestions = await getAISuggestions(destination, duration, interests);
            suggestionsList.empty();
            if (suggestions.length > 0) {
                suggestions.forEach(suggestion => {
                    suggestionsList.append(`<li class="list-group-item">${suggestion}</li>`);
                });
            } else {
                suggestionsList.append('<li class="list-group-item">No suggestions found.</li>');
            }
        } else {
            alert('Please fill in all the details.');
        }
    });

    // Event listener for planning the detailed trip - keep your original function
    planTripButton.on('click', async function() {
        const destination = $('#destination').val();
        const duration = $('#duration').val();
        const interests = $('#interests').val();

        if (destination && duration && interests) {
            tripDetailsDiv.empty();
            tripDetailsSection.show();
            tripDetailsDiv.html('<p>Generating detailed trip plan...</p>');

            const detailedTrip = await generateDetailedTrip(destination, duration, interests);
            tripDetailsDiv.html(detailedTrip);
        } else {
            alert('Please provide destination, duration, and interests first.');
        }
    });

    // Event listener for sending email - keep your original function intact
    sendEmailButton.on('click', function() {
        const userEmail = $('#userEmail').val();
        const tripDetails = tripDetailsDiv.html();

        if (!userEmail) {
            alert('Please enter your email address.');
            return;
        }

        if (!tripDetails) {
            alert('Please generate the trip plan first.');
            return;
        }

        const templateParams = {
            to_email: userEmail,
            trip_details: tripDetails
        };

        emailjs.send("service_4ow4w8b", "template_b00t5hq", templateParams) // Your original Service and Template IDs
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                emailStatusDiv.html('<div class="alert alert-success">Email sent successfully!</div>');
                itineraryForm.trigger("reset"); // Clear the form
                suggestionsSection.hide();
                tripDetailsSection.hide();
                setTimeout(() => {
                    emailStatusDiv.empty();
                }, 3000);
            }, function(error) {
                console.log('FAILED...', error);
                emailStatusDiv.html('<div class="alert alert-danger">Failed to send email. Please try again.</div>');
            });
    });
});