
    // Sample data - replace with your actual data
    const hotels = [
                // Delhi
                {
            name: "The Grand Hotel, Delhi",
            location: "Delhi",
            price: 4500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Gym", "Room Service"]
        },
        {
            name: "Historical Stay, Delhi",
            location: "Delhi",
            price: 1800,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Room Service"]
        },
        {
            name: "Delhi Palace Hotel",
            location: "Delhi",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Gym", "24/7 Room Service", "Airport Shuttle"]
        },
        {
            name: "Comfort Inn Delhi",
            location: "Delhi",
            price: 2300,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Room Service"]
        },
        {
            name: "Backpacker's Hostel Delhi",
            location: "Delhi",
            price: 600,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Locker Facility"]
        },

        // Mumbai
        {
            name: "City Center Inn, Mumbai",
            location: "Mumbai",
            price: 2800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Business Center"]
        },
        {
            name: "Luxury Suites, Mumbai",
            location: "Mumbai",
            price: 6000,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Gym", "Bar"]
        },
        {
            name: "Mumbai Sea View Resort",
            location: "Mumbai",
            price: 8200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Gym", "Private Beach Access", "Bar"]
        },
        {
            name: "Mumbai Budget Stay",
            location: "Mumbai",
            price: 1100,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast"]
        },
        {
            name: "Mumbai Backpacker's Hub",
            location: "Mumbai",
            price: 500,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Bathroom", "Locker Facility"]
        },

        // Goa
        {
            name: "Beachside Resort, Goa",
            location: "Goa",
            price: 3200,
            category: "Mid-range",
            amenities: ["Swimming Pool", "Restaurant", "Beach Access"]
        },
        {
            name: "Goa Budget Stay",
            location: "Goa",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Garden"]
        },
        {
            name: "Goa Luxury Beach Villa",
            location: "Goa",
            price: 7500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Private Pool", "Restaurant", "Spa", "Direct Beach Access", "Bar", "Water Sports"]
        },
        {
            name: "Goa Party Hostel",
            location: "Goa",
            price: 800,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Bar", "Shared Kitchen", "Swimming Pool"]
        },
        {
            name: "Goa Family Resort",
            location: "Goa",
            price: 4200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Kids Club", "Restaurant", "Beach Access", "Game Room"]
        },

        // Bangalore
        {
            name: "Tech Hub Hotel, Bangalore",
            location: "Bangalore",
            price: 3800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Business Center", "Gym"]
        },
        {
            name: "Bangalore Luxury Suites",
            location: "Bangalore",
            price: 5500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Gym", "Bar"]
        },
        {
            name: "Bangalore Budget Inn",
            location: "Bangalore",
            price: 1500,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "24/7 Reception"]
        },
        {
            name: "Bangalore Garden Resort",
            location: "Bangalore",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Gym", "Tennis Court", "Bar"]
        },
        {
            name: "Bangalore Hostel",
            location: "Bangalore",
            price: 650,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Locker Facility"]
        },

        // Jaipur
        {
            name: "Pink City Palace, Jaipur",
            location: "Jaipur",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Heritage Tours", "Spa"]
        },
        {
            name: "Jaipur Heritage Hotel",
            location: "Jaipur",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Cultural Activities"]
        },
        {
            name: "Jaipur Budget Stay",
            location: "Jaipur",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "City Tour Arrangements"]
        },
        {
            name: "Royal Jaipur Resort",
            location: "Jaipur",
            price: 7200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Gym", "Palace View"]
        },
        {
            name: "Jaipur Traveller's Hostel",
            location: "Jaipur",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Lounge", "Tour Desk"]
        },

        // Chennai
        {
            name: "Chennai Beachfront Hotel",
            location: "Chennai",
            price: 4200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Beach Access"]
        },
        {
            name: "Business Inn Chennai",
            location: "Chennai",
            price: 2800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Business Center", "Conference Rooms"]
        },
        {
            name: "Chennai Budget Lodge",
            location: "Chennai",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast"]
        },
        {
            name: "Chennai Luxury Resort",
            location: "Chennai",
            price: 6200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Gym", "Bar"]
        },
        {
            name: "Chennai Backpacker's Inn",
            location: "Chennai",
            price: 550,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Locker Facility"]
        },

        // Kolkata
        {
            name: "Kolkata Heritage Hotel",
            location: "Kolkata",
            price: 3800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Colonial Architecture"]
        },
        {
            name: "Luxury Stay Kolkata",
            location: "Kolkata",
            price: 5500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Gym"]
        },
        {
            name: "Kolkata Budget Inn",
            location: "Kolkata",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Room Service"]
        },
        {
            name: "Riverside Resort Kolkata",
            location: "Kolkata",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "River View", "Bar"]
        },
        {
            name: "Kolkata Traveller's Hostel",
            location: "Kolkata",
            price: 520,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Library"]
        },

        // Hyderabad
        {
            name: "Hyderabad City Center Hotel",
            location: "Hyderabad",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Business Center"]
        },
        {
            name: "Hyderabad Luxury Suites",
            location: "Hyderabad",
            price: 5800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Gym"]
        },
        {
            name: "Hyderabad Budget Stay",
            location: "Hyderabad",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast"]
        },
        {
            name: "Palace View Resort, Hyderabad",
            location: "Hyderabad",
            price: 7200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Gym", "Monument Views"]
        },
        {
            name: "Hyderabad Backpacker's Hub",
            location: "Hyderabad",
            price: 600,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Lounge", "Locker Facility"]
        },

        // Agra
        {
            name: "Taj View Hotel, Agra",
            location: "Agra",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Taj Mahal View"]
        },
        {
            name: "Agra Heritage Inn",
            location: "Agra",
            price: 2600,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Tour Arrangements"]
        },
        {
            name: "Agra Budget Lodge",
            location: "Agra",
            price: 1100,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast"]
        },
        {
            name: "Luxury Taj Resort Agra",
            location: "Agra",
            price: 8500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Gym", "Prime Taj Mahal View"]
        },
        {
            name: "Agra Tourist Hostel",
            location: "Agra",
            price: 550,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Tour Desk"]
        },

        // Shimla
        {
            name: "Shimla Mountain Resort",
            location: "Shimla",
            price: 4200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Restaurant", "Mountain Views", "Fireplace"]
        },
        {
            name: "Heritage Lodge Shimla",
            location: "Shimla",
            price: 3100,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Valley View"]
        },
        {
            name: "Shimla Budget Inn",
            location: "Shimla",
            price: 1500,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Room Heater", "Breakfast"]
        },
        {
            name: "Premium Himalayan Retreat Shimla",
            location: "Shimla",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Mountain Activities", "Bar"]
        },
        {
            name: "Shimla Backpacker's Lodge",
            location: "Shimla",
            price: 700,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Lounge", "Mountain View"]
        },

        // Rishikesh
        {
            name: "Rishikesh Yoga Retreat",
            location: "Rishikesh",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Yoga Classes", "Vegetarian Restaurant", "Meditation Area"]
        },
        {
            name: "Riverside Resort Rishikesh",
            location: "Rishikesh",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "River View", "Adventure Activities"]
        },
        {
            name: "Rishikesh Budget Stay",
            location: "Rishikesh",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Yoga Mat", "River View"]
        },
        {
            name: "Premium Wellness Spa Rishikesh",
            location: "Rishikesh",
            price: 7500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Ayurvedic Spa", "Yoga Studio", "Organic Restaurant", "Meditation"]
        },
        {
            name: "Rishikesh Spiritual Hostel",
            location: "Rishikesh",
            price: 600,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Yoga Space", "Communal Kitchen"]
        },
        // Kerala
        {
            name: "Backwater Resort, Kerala",
            location: "Kerala",
            price: 4200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Backwater Cruise", "Ayurvedic Spa"]
        },
        {
            name: "Kerala Beach Retreat",
            location: "Kerala",
            price: 2800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Beach Access", "Garden"]
        },
        {
            name: "Kerala Budget Stay",
            location: "Kerala",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Tour Arrangements"]
        },
        {
            name: "Premium Kerala Villa",
            location: "Kerala",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Private Pool", "Multiple Restaurants", "Spa", "Cooking Classes", "Cultural Shows"]
        },
        {
            name: "Kerala Traveller's Hostel",
            location: "Kerala",
            price: 600,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Bicycle Rental"]
        },

        // Rajasthan (excluding Jaipur which is already covered)
        {
            name: "Desert Heritage Resort, Rajasthan",
            location: "Rajasthan",
            price: 4500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Desert Safari", "Cultural Programs"]
        },
        {
            name: "Rajasthan Palace Hotel",
            location: "Rajasthan",
            price: 3000,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Heritage Architecture", "Tour Desk"]
        },
        {
            name: "Rajasthan Budget Inn",
            location: "Rajasthan",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Desert View"]
        },
        {
            name: "Royal Rajasthan Retreat",
            location: "Rajasthan",
            price: 7800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Heritage Tours", "Camel Safari"]
        },
        {
            name: "Rajasthan Backpacker's Haven",
            location: "Rajasthan",
            price: 550,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Arrangements"]
        },

        // Ladakh
        {
            name: "Mountain View Lodge, Ladakh",
            location: "Ladakh",
            price: 3800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Mountain Views", "Oxygen Support"]
        },
        {
            name: "Ladakh Luxury Camp",
            location: "Ladakh",
            price: 6200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Heated Rooms", "Restaurant", "Mountain Excursions", "Cultural Programs"]
        },
        {
            name: "Ladakh Budget Stay",
            location: "Ladakh",
            price: 1500,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Room Heater", "Breakfast"]
        },
        {
            name: "Premium Himalayan Resort Ladakh",
            location: "Ladakh",
            price: 8500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Heated Pool", "Multiple Restaurants", "Spa", "Adventure Tours", "Meditation Space"]
        },
        {
            name: "Ladakh Trekker's Hostel",
            location: "Ladakh",
            price: 700,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Trekking Information", "Altitude Acclimatization Guidance"]
        },

        // Udaipur
        {
            name: "Lake Palace Hotel, Udaipur",
            location: "Udaipur",
            price: 5500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Lake View", "Spa", "Boat Rides"]
        },
        {
            name: "Udaipur Heritage Inn",
            location: "Udaipur",
            price: 2800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Lake View", "Cultural Shows"]
        },
        {
            name: "Udaipur Budget Lodge",
            location: "Udaipur",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "City Tour Arrangements"]
        },
        {
            name: "Royal Udaipur Retreat",
            location: "Udaipur",
            price: 7200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Palace View", "Boat Tours"]
        },
        {
            name: "Udaipur Backpacker's Hub",
            location: "Udaipur",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Lounge", "Rooftop View"]
        },

        // Darjeeling
        {
            name: "Tea Estate Resort, Darjeeling",
            location: "Darjeeling",
            price: 4200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Restaurant", "Tea Garden View", "Mountain Views", "Spa"]
        },
        {
            name: "Darjeeling Heritage Hotel",
            location: "Darjeeling",
            price: 2600,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Mountain View", "Fireplace"]
        },
        {
            name: "Darjeeling Budget Inn",
            location: "Darjeeling",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Room Heater"]
        },
        {
            name: "Premium Himalayan Lodge Darjeeling",
            location: "Darjeeling",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Tea Estate Tours", "Kanchenjunga View"]
        },
        {
            name: "Darjeeling Explorer's Hostel",
            location: "Darjeeling",
            price: 650,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Mountain View", "Trekking Information"]
        },

        // Varanasi
        {
            name: "Ganges View Hotel, Varanasi",
            location: "Varanasi",
            price: 3800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Restaurant", "River View", "Spiritual Tours", "Yoga Classes"]
        },
        {
            name: "Varanasi Heritage Inn",
            location: "Varanasi",
            price: 2200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Ganga Aarti View", "Temple Tours"]
        },
        {
            name: "Varanasi Budget Lodge",
            location: "Varanasi",
            price: 1100,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Ghat Walking Tour"]
        },
        {
            name: "Premium Riverside Retreat Varanasi",
            location: "Varanasi",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Private Boat Rides", "Cultural Shows"]
        },
        {
            name: "Varanasi Spiritual Hostel",
            location: "Varanasi",
            price: 550,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Meditation Space", "Common Area", "Walking Tours"]
        },

        // Andaman and Nicobar
        {
            name: "Beach Paradise Resort, Andaman",
            location: "Andaman and Nicobar",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Private Beach", "Water Sports", "Island Tours"]
        },
        {
            name: "Andaman Island Retreat",
            location: "Andaman and Nicobar",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Beach Access", "Snorkeling Equipment"]
        },
        {
            name: "Andaman Budget Stay",
            location: "Andaman and Nicobar",
            price: 1800,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Beach View"]
        },
        {
            name: "Premium Andaman Island Resort",
            location: "Andaman and Nicobar",
            price: 8500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Private Beach", "Diving Center", "Island Hopping"]
        },
        {
            name: "Andaman Explorer's Hostel",
            location: "Andaman and Nicobar",
            price: 800,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Beach Equipment", "Tour Desk"]
        },

        // Amritsar
        {
            name: "Golden Temple View Hotel, Amritsar",
            location: "Amritsar",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Temple View", "Cultural Tours"]
        },
        {
            name: "Amritsar Heritage Lodge",
            location: "Amritsar",
            price: 4500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Cultural Programs"]
        },
        {
            name: "Amritsar Budget Inn",
            location: "Amritsar",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Temple Tour Arrangements"]
        },
        {
            name: "Premium Cultural Resort Amritsar",
            location: "Amritsar",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Heritage Tours", "Temple View"]
        },
        {
            name: "Amritsar Traveller's Hostel",
            location: "Amritsar",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk", "Kitchen Facilities"]
        },
        // Himachal Pradesh (additional to Shimla)
        {
            name: "Manali Mountain Lodge",
            location: "Himachal Pradesh",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Mountain Views", "Trekking Arrangements", "Fireplace"]
        },
        {
            name: "Himachal Luxury Resort",
            location: "Himachal Pradesh",
            price: 5500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Adventure Sports"]
        },
        {
            name: "Himachal Budget Stay",
            location: "Himachal Pradesh",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Room Heater", "Mountain View"]
        },
        {
            name: "Premium Himalayan Retreat",
            location: "Himachal Pradesh",
            price: 7800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Adventure Activities", "Bar"]
        },
        {
            name: "Himalayan Explorer's Hostel",
            location: "Himachal Pradesh",
            price: 650,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Trekking Information"]
        },

        // Andhra Pradesh
        {
            name: "Coastal Retreat, Andhra Pradesh",
            location: "Andhra Pradesh",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Beach Access"]
        },
        {
            name: "Andhra Heritage Resort",
            location: "Andhra Pradesh",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Cultural Shows"]
        },
        {
            name: "Andhra Budget Inn",
            location: "Andhra Pradesh",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guide"]
        },
        {
            name: "Premium Andhra Beachside Resort",
            location: "Andhra Pradesh",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Beach Activities", "Bar"]
        },
        {
            name: "Andhra Backpacker's Hostel",
            location: "Andhra Pradesh",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Tour Desk"]
        },

        // Assam
        {
            name: "Brahmaputra Riverside Resort",
            location: "Assam",
            price: 3800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "River View", "Tea Garden Tours"]
        },
        {
            name: "Assam Tea Estate Retreat",
            location: "Assam",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Tea Plantation Tours"]
        },
        {
            name: "Assam Budget Lodge",
            location: "Assam",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Wildlife Resort Assam",
            location: "Assam",
            price: 7200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Wildlife Safari", "River Cruise"]
        },
        {
            name: "Assam Explorer's Hostel",
            location: "Assam",
            price: 600,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Wildlife Tour Information"]
        },

        // Tamil Nadu (additional to Chennai)
        {
            name: "Heritage Resort, Tamil Nadu",
            location: "Tamil Nadu",
            price: 3600,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Temple Tours", "Swimming Pool"]
        },
        {
            name: "Tamil Nadu Luxury Retreat",
            location: "Tamil Nadu",
            price: 5500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Cultural Programs"]
        },
        {
            name: "Tamil Nadu Budget Stay",
            location: "Tamil Nadu",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Temple Tour Arrangements"]
        },
        {
            name: "Premium Cultural Resort Tamil Nadu",
            location: "Tamil Nadu",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Heritage Tours", "Cultural Shows"]
        },
        {
            name: "Tamil Nadu Traveller's Hostel",
            location: "Tamil Nadu",
            price: 550,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Gujarat
        {
            name: "Gujarat Cultural Resort",
            location: "Gujarat",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Cultural Tours", "Swimming Pool"]
        },
        {
            name: "White Desert View Resort",
            location: "Gujarat",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Desert Tours"]
        },
        {
            name: "Gujarat Budget Inn",
            location: "Gujarat",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guide"]
        },
        {
            name: "Premium Gujarat Heritage Resort",
            location: "Gujarat",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Cultural Shows", "Heritage Tours"]
        },
        {
            name: "Gujarat Explorer's Hostel",
            location: "Gujarat",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Cultural Tour Information"]
        },

        // Maharashtra (additional to Mumbai)
        {
            name: "Vineyard Resort, Maharashtra",
            location: "Maharashtra",
            price: 3800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Wine Tours", "Swimming Pool"]
        },
        {
            name: "Maharashtra Heritage Palace",
            location: "Maharashtra",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Historic Tours"]
        },
        {
            name: "Maharashtra Budget Lodge",
            location: "Maharashtra",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Western Ghats Retreat",
            location: "Maharashtra",
            price: 7200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Nature Trails", "Adventure Sports"]
        },
        {
            name: "Maharashtra Backpacker's Hostel",
            location: "Maharashtra",
            price: 600,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Trekking Information"]
        },

        // Odisha
        {
            name: "Coastal Retreat, Odisha",
            location: "Odisha",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Beach Access", "Temple Tours"]
        },
        {
            name: "Odisha Heritage Resort",
            location: "Odisha",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Cultural Shows"]
        },
        {
            name: "Odisha Budget Inn",
            location: "Odisha",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Temple Tour Arrangements"]
        },
        {
            name: "Premium Odisha Beachside Resort",
            location: "Odisha",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Beach Activities", "Cultural Tours"]
        },
        {
            name: "Odisha Traveller's Hostel",
            location: "Odisha",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Pondicherry (Puducherry)
        {
            name: "French Colonial Resort, Pondicherry",
            location: "Pondicherry",
            price: 3800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Colonial Architecture", "Beach Access"]
        },
        {
            name: "Pondicherry Luxury Retreat",
            location: "Pondicherry",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Beach View"]
        },
        {
            name: "Pondicherry Budget Stay",
            location: "Pondicherry",
            price: 1500,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Bicycle Rental"]
        },
        {
            name: "Premium Beachside Resort Pondicherry",
            location: "Pondicherry",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Private Beach", "Heritage Tours"]
        },
        {
            name: "Pondicherry Backpacker's Hub",
            location: "Pondicherry",
            price: 650,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Beach Equipment"]
        },

        // Meghalaya
        {
            name: "Cloud Resort, Meghalaya",
            location: "Meghalaya",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Mountain View", "Waterfall Treks"]
        },
        {
            name: "Meghalaya Luxury Lodge",
            location: "Meghalaya",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Living Root Bridge Tours", "Cave Explorations"]
        },
        {
            name: "Meghalaya Budget Inn",
            location: "Meghalaya",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Trekking Guides"]
        },
        {
            name: "Premium Rainforest Resort Meghalaya",
            location: "Meghalaya",
            price: 7200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Forest Trails", "Cultural Experiences"]
        },
        {
            name: "Meghalaya Explorer's Hostel",
            location: "Meghalaya",
            price: 680,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Trekking Information", "Community Area"]
        },

        // Arunachal Pradesh
        {
            name: "Mountain View Lodge, Arunachal",
            location: "Arunachal Pradesh",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Mountain View", "Trekking Arrangements"]
        },
        {
            name: "Arunachal Heritage Resort",
            location: "Arunachal Pradesh",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Cultural Experiences", "Mountain Excursions"]
        },
        {
            name: "Arunachal Budget Stay",
            location: "Arunachal Pradesh",
            price: 1500,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Eastern Himalayan Resort",
            location: "Arunachal Pradesh",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Helicopter Tours", "Tribal Village Visits", "Adventure Activities"]
        },
        {
            name: "Arunachal Trekker's Hostel",
            location: "Arunachal Pradesh",
            price: 700,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Trekking Information", "Community Area"]
        },

        // Sikkim
        {
            name: "Kanchenjunga View Resort",
            location: "Sikkim",
            price: 3800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Mountain View", "Trekking Arrangements", "Organic Farm"]
        },
        {
            name: "Sikkim Luxury Retreat",
            location: "Sikkim",
            price: 5500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Mountain Views", "Tea Garden Tours"]
        },
        {
            name: "Sikkim Budget Lodge",
            location: "Sikkim",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Room Heater", "Trekking Information"]
        },
        {
            name: "Premium Himalayan Resort Sikkim",
            location: "Sikkim",
            price: 7500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Helicopter Tours", "Adventure Activities"]
        },
        {
            name: "Sikkim Trekker's Hostel",
            location: "Sikkim",
            price: 680,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Trekking Information", "Community Area"]
        },

        // Uttarakhand (additional to Rishikesh)
        {
            name: "Valley View Resort, Uttarakhand",
            location: "Uttarakhand",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Mountain View", "Trekking Arrangements"]
        },
        {
            name: "Uttarakhand Luxury Lodge",
            location: "Uttarakhand",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Adventure Activities"]
        },
        {
            name: "Uttarakhand Budget Inn",
            location: "Uttarakhand",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Mountain View"]
        },
        {
            name: "Premium Himalayan Retreat Uttarakhand",
            location: "Uttarakhand",
            price: 7800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Wildlife Safari", "Adventure Activities"]
        },
        {
            name: "Uttarakhand Explorer's Hostel",
            location: "Uttarakhand",
            price: 650,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Trekking Information"]
        },

        // Uttar Pradesh (additional to Varanasi and Agra)
        {
            name: "Lucknow Heritage Hotel",
            location: "Uttar Pradesh",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Heritage Tours", "Cultural Experiences"]
        },
        {
            name: "Uttar Pradesh Luxury Resort",
            location: "Uttar Pradesh",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Historical Tours"]
        },
        {
            name: "Uttar Pradesh Budget Lodge",
            location: "Uttar Pradesh",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Cultural Resort Uttar Pradesh",
            location: "Uttar Pradesh",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Heritage Tours", "Cultural Shows"]
        },
        {
            name: "Uttar Pradesh Traveller's Hostel",
            location: "Uttar Pradesh",
            price: 550,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Madhya Pradesh
        {
            name: "Wildlife Resort, Madhya Pradesh",
            location: "Madhya Pradesh",
            price: 3800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Safari Arrangements", "Wildlife Viewing"]
        },
        {
            name: "Madhya Pradesh Heritage Palace",
            location: "Madhya Pradesh",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Historical Tours"]
        },
        {
            name: "Madhya Pradesh Budget Inn",
            location: "Madhya Pradesh",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Safari Arrangements"]
        },
        {
            name: "Premium Wildlife Lodge Madhya Pradesh",
            location: "Madhya Pradesh",
            price: 7200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Wildlife Safari", "Temple Tours"]
        },
        {
            name: "Madhya Pradesh Explorer's Hostel",
            location: "Madhya Pradesh",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Safari Information"]
        },

        // Punjab (additional to Amritsar)
        {
            name: "Punjab Cultural Resort",
            location: "Punjab",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Farm Tours", "Cultural Experiences"]
        },
        {
            name: "Punjab Luxury Lodge",
            location: "Punjab",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Cultural Shows"]
        },
        {
            name: "Punjab Budget Stay",
            location: "Punjab",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Cultural Resort Punjab",
            location: "Punjab",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Farm Visits", "Cultural Programs"]
        },
        {
            name: "Punjab Traveller's Hostel",
            location: "Punjab",
            price: 550,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Bihar
        {
            name: "Buddhist Circuit Resort, Bihar",
            location: "Bihar",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Buddhist Circuit Tours", "Meditation Space"]
        },
        {
            name: "Bihar Heritage Hotel",
            location: "Bihar",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Historical Tours"]
        },
        {
            name: "Bihar Budget Inn",
            location: "Bihar",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Cultural Resort Bihar",
            location: "Bihar",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Buddhist Circuit Tours", "Meditation Retreats"]
        },
        {
            name: "Bihar Explorer's Hostel",
            location: "Bihar",
            price: 530,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Jharkhand
        {
            name: "Tribal Culture Resort, Jharkhand",
            location: "Jharkhand",
            price: 3000,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Tribal Village Tours", "Waterfall Visits"]
        },
        {
            name: "Jharkhand Wildlife Lodge",
            location: "Jharkhand",
            price: 4500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Wildlife Safaris"]
        },
        {
            name: "Jharkhand Budget Stay",
            location: "Jharkhand",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Nature Resort Jharkhand",
            location: "Jharkhand",
            price: 6200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Wildlife Tours", "Cultural Experiences"]
        },
        {
            name: "Jharkhand Traveller's Hostel",
            location: "Jharkhand",
            price: 550,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Chhattisgarh
        {
            name: "Tribal Art Resort, Chhattisgarh",
            location: "Chhattisgarh",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Tribal Art Tours", "Cultural Experiences"]
        },
        {
            name: "Chhattisgarh Wildlife Lodge",
            location: "Chhattisgarh",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Wildlife Safaris"]
        },
        {
            name: "Chhattisgarh Budget Inn",
            location: "Chhattisgarh",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Tribal Heritage Resort",
            location: "Chhattisgarh",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Tribal Village Tours", "Wildlife Safaris"]
        },
        {
            name: "Chhattisgarh Explorer's Hostel",
            location: "Chhattisgarh",
            price: 550,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Telangana (additional to Hyderabad)
        {
            name: "Telangana Heritage Resort",
            location: "Telangana",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Historical Tours", "Cultural Experiences"]
        },
        {
            name: "Telangana Luxury Lodge",
            location: "Telangana",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Heritage Tours"]
        },
        {
            name: "Telangana Budget Stay",
            location: "Telangana",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Cultural Resort Telangana",
            location: "Telangana",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Historical Tours", "Cultural Programs"]
        },
        {
            name: "Telangana Traveller's Hostel",
            location: "Telangana",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Jammu and Kashmir (additional to Ladakh)
        {
            name: "Kashmir Valley Resort",
            location: "Jammu and Kashmir",
            price: 4200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Mountain View", "Shikara Ride", "Room Heater"]
        },
        {
            name: "Jammu and Kashmir Luxury Lodge",
            location: "Jammu and Kashmir",
            price: 6500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Lake View", "Houseboat Experience", "Heated Rooms"]
        },
        {
            name: "Kashmir Budget Inn",
            location: "Jammu and Kashmir",
            price: 1800,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Room Heater", "Local Guides"]
        },
        {
            name: "Premium Paradise Resort Kashmir",
            location: "Jammu and Kashmir",
            price: 8500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Lake View", "Adventure Activities", "Heated Pool"]
        },
        {
            name: "Kashmir Explorer's Hostel",
            location: "Jammu and Kashmir",
            price: 800,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Room Heater", "Tour Desk"]
        },

        // Manipur
        {
            name: "Loktak Lake Resort, Manipur",
            location: "Manipur",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Lake View", "Cultural Experiences"]
        },
        {
            name: "Manipur Heritage Lodge",
            location: "Manipur",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Cultural Shows"]
        },
        {
            name: "Manipur Budget Stay",
            location: "Manipur",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Cultural Resort Manipur",
            location: "Manipur",
            price: 6200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Lake Tours", "Cultural Programs"]
        },
        {
            name: "Manipur Traveller's Hostel",
            location: "Manipur",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Mizoram
        {
            name: "Mizoram Hill Resort",
            location: "Mizoram",
            price: 3000,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Mountain View", "Trekking Arrangements"]
        },
        {
            name: "Mizoram Luxury Lodge",
            location: "Mizoram",
            price: 4500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Cultural Experiences", "Nature Trails"]
        },
        {
            name: "Mizoram Budget Inn",
            location: "Mizoram",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Highlands Resort Mizoram",
            location: "Mizoram",
            price: 6000,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Adventure Activities", "Cultural Programs"]
        },
        {
            name: "Mizoram Explorer's Hostel",
            location: "Mizoram",
            price: 550,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Nagaland
        {
            name: "Tribal Heritage Resort, Nagaland",
            location: "Nagaland",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Tribal Village Tours", "Cultural Experiences"]
        },
        {
            name: "Nagaland Luxury Lodge",
            location: "Nagaland",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Hornbill Festival Access", "Cultural Shows"]
        },
        {
            name: "Nagaland Budget Stay",
            location: "Nagaland",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Cultural Resort Nagaland",
            location: "Nagaland",
            price: 6200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Tribal Village Tours", "Adventure Activities"]
        },
        {
            name: "Nagaland Traveller's Hostel",
            location: "Nagaland",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },
        // Karnataka (excluding Bangalore which is already covered)
        {
            name: "Mysore Palace View Hotel",
            location: "Karnataka",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Palace View", "Heritage Tours"]
        },
        {
            name: "Coorg Coffee Estate Resort",
            location: "Karnataka",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Coffee Plantation Tours", "Nature Walks"]
        },
        {
            name: "Hampi Heritage Lodge",
            location: "Karnataka",
            price: 2800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Ruins View", "Bicycle Rental"]
        },
        {
            name: "Gokarna Beach Retreat",
            location: "Karnataka",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Beach Access", "Yoga Classes"]
        },

        // West Bengal (excluding Darjeeling which is already covered)
        {
            name: "Kolkata City Center Hotel",
            location: "West Bengal",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Business Center", "City Tours"]
        },
        {
            name: "Bengal Cultural Resort",
            location: "West Bengal",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Cultural Programs"]
        },
        {
            name: "Sundarbans Eco Lodge",
            location: "West Bengal",
            price: 4500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Restaurant", "Wildlife Tours", "Boat Safaris", "Nature Walks"]
        },

        // Tripura
        {
            name: "Tripura Palace Hotel",
            location: "Tripura",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Heritage Tours", "Cultural Experiences"]
        },
        {
            name: "Tripura Luxury Resort",
            location: "Tripura",
            price: 5000,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Cultural Shows"]
        },
        {
            name: "Tripura Budget Inn",
            location: "Tripura",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Cultural Resort Tripura",
            location: "Tripura",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Cultural Tours"]
        },
        {
            name: "Tripura Traveller's Hostel",
            location: "Tripura",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Lakshadweep
        {
            name: "Lakshadweep Island Resort",
            location: "Lakshadweep",
            price: 6500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Restaurant", "Private Beach", "Water Sports", "Diving Center"]
        },
        {
            name: "Lakshadweep Beach Retreat",
            location: "Lakshadweep",
            price: 8200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Diving", "Water Sports", "Island Hopping"]
        },
        {
            name: "Lakshadweep Budget Stay",
            location: "Lakshadweep",
            price: 3500,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Beach Access"]
        },
        {
            name: "Coral Isle Lodge",
            location: "Lakshadweep",
            price: 4800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Snorkeling Equipment", "Beach Access"]
        },

        // Chandigarh
        {
            name: "Chandigarh City Hotel",
            location: "Chandigarh",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Business Center", "City Tours"]
        },
        {
            name: "Chandigarh Luxury Suites",
            location: "Chandigarh",
            price: 5500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "City View"]
        },
        {
            name: "Chandigarh Budget Inn",
            location: "Chandigarh",
            price: 1500,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "City Maps"]
        },
        {
            name: "Premium City Resort Chandigarh",
            location: "Chandigarh",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Business Center", "Shopping Area"]
        },
        {
            name: "Chandigarh Traveller's Hostel",
            location: "Chandigarh",
            price: 650,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Haryana
        {
            name: "Haryana Heritage Resort",
            location: "Haryana",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Farm Tours", "Cultural Experiences"]
        },
        {
            name: "Haryana Luxury Lodge",
            location: "Haryana",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Golf Course"]
        },
        {
            name: "Haryana Budget Stay",
            location: "Haryana",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Resort Haryana",
            location: "Haryana",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Golf Course", "Conference Facilities"]
        },
        {
            name: "Haryana Traveller's Hostel",
            location: "Haryana",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Daman and Diu
        {
            name: "Daman Beach Resort",
            location: "Daman and Diu",
            price: 3800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Beach Access", "Water Sports"]
        },
        {
            name: "Portuguese Heritage Hotel",
            location: "Daman and Diu",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Colonial Architecture Tours"]
        },
        {
            name: "Daman and Diu Budget Inn",
            location: "Daman and Diu",
            price: 1600,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Beach View"]
        },
        {
            name: "Premium Beach Resort Daman",
            location: "Daman and Diu",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Private Beach", "Water Sports"]
        },
        {
            name: "Diu Traveller's Hostel",
            location: "Daman and Diu",
            price: 650,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Beach Equipment"]
        },

        // Dadra and Nagar Haveli
        {
            name: "Dadra Greenery Resort",
            location: "Dadra and Nagar Haveli",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Garden", "Nature Walks"]
        },
        {
            name: "Nagar Haveli Luxury Lodge",
            location: "Dadra and Nagar Haveli",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Wildlife Safaris"]
        },
        {
            name: "Dadra Budget Stay",
            location: "Dadra and Nagar Haveli",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Nature Resort",
            location: "Dadra and Nagar Haveli",
            price: 6200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Adventure Activities", "Nature Trails"]
        },
        {
            name: "Silvassa Traveller's Hostel",
            location: "Dadra and Nagar Haveli",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Ahmedabad (separate from Gujarat general)
        {
            name: "Ahmedabad City Hotel",
            location: "Ahmedabad",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Business Center", "Heritage Tours"]
        },
        {
            name: "Ahmedabad Luxury Suites",
            location: "Ahmedabad",
            price: 5500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "City Tours"]
        },
        {
            name: "Ahmedabad Budget Inn",
            location: "Ahmedabad",
            price: 1500,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "City Maps"]
        },
        {
            name: "Premium Heritage Resort Ahmedabad",
            location: "Ahmedabad",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Heritage Tours", "Shopping Area"]
        },
        {
            name: "Ahmedabad Traveller's Hostel",
            location: "Ahmedabad",
            price: 650,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Lucknow (separate from Uttar Pradesh general)
        {
            name: "Lucknow Heritage Hotel",
            location: "Lucknow",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Heritage Tours", "Cultural Experiences"]
        },
        {
            name: "Lucknow Luxury Palace",
            location: "Lucknow",
            price: 5500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Historical Tours"]
        },
        {
            name: "Lucknow Budget Inn",
            location: "Lucknow",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "City Maps"]
        },
        {
            name: "Premium Cultural Resort Lucknow",
            location: "Lucknow",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Heritage Tours", "Cultural Shows"]
        },
        {
            name: "Lucknow Traveller's Hostel",
            location: "Lucknow",
            price: 650,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Bhopal (separate from Madhya Pradesh general)
        {
            name: "Bhopal City Hotel",
            location: "Bhopal",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Lake View", "City Tours"]
        },
        {
            name: "Bhopal Luxury Suites",
            location: "Bhopal",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Lake View"]
        },
        {
            name: "Bhopal Budget Stay",
            location: "Bhopal",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "City Maps"]
        },
        {
            name: "Premium Lake Resort Bhopal",
            location: "Bhopal",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Lake View", "Boat Rides"]
        },
        {
            name: "Bhopal Traveller's Hostel",
            location: "Bhopal",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Corbett National Park
        {
            name: "Corbett Wilderness Lodge",
            location: "Corbett National Park",
            price: 4500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Safari Arrangements", "Nature Walks"]
        },
        {
            name: "Corbett Luxury Safari Resort",
            location: "Corbett National Park",
            price: 6800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Wildlife Safaris", "Nature Walks"]
        },
        {
            name: "Corbett Budget Stay",
            location: "Corbett National Park",
            price: 2200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Safari Bookings"]
        },
        {
            name: "Premium Wildlife Resort Corbett",
            location: "Corbett National Park",
            price: 8500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Private Safaris", "Bird Watching", "River Activities"]
        },
        {
            name: "Corbett Explorer's Hostel",
            location: "Corbett National Park",
            price: 950,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Safari Information", "Shared Safari Options"]
        },

        // Rann of Kutch (separate from Gujarat general)
        {
            name: "White Desert Camp",
            location: "Rann of Kutch",
            price: 3800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Desert Safaris", "Cultural Programs"]
        },
        {
            name: "Rann Luxury Tents",
            location: "Rann of Kutch",
            price: 6200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Private Dining", "Desert View", "Cultural Shows", "Camel Safaris"]
        },
        {
            name: "Kutch Budget Lodge",
            location: "Rann of Kutch",
            price: 1800,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Desert Tours"]
        },
        {
            name: "Premium Desert Resort Kutch",
            location: "Rann of Kutch",
            price: 7500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Desert Safaris", "Cultural Experiences"]
        },
        {
            name: "Rann Explorer's Camp",
            location: "Rann of Kutch",
            price: 850,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Community Dining", "Desert Tours", "Cultural Nights"]
        },

        // Khajuraho
        {
            name: "Temple View Hotel, Khajuraho",
            location: "Khajuraho",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Temple View", "Tour Arrangements"]
        },
        {
            name: "Khajuraho Heritage Resort",
            location: "Khajuraho",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Temple Tours", "Cultural Shows"]
        },
        {
            name: "Khajuraho Budget Inn",
            location: "Khajuraho",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Temple Maps"]
        },
        {
            name: "Premium Cultural Resort Khajuraho",
            location: "Khajuraho",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Private Temple Tours", "Dance Performances"]
        },
        {
            name: "Khajuraho Traveller's Hostel",
            location: "Khajuraho",
            price: 650,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Kaziranga National Park
        {
            name: "Kaziranga Wildlife Lodge",
            location: "Kaziranga National Park",
            price: 4200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Safari Arrangements", "Nature Walks"]
        },
        {
            name: "Kaziranga Luxury Safari Resort",
            location: "Kaziranga National Park",
            price: 6500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Elephant Safaris", "Jeep Safaris"]
        },
        {
            name: "Kaziranga Budget Stay",
            location: "Kaziranga National Park",
            price: 2000,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Safari Bookings"]
        },
        {
            name: "Premium Wildlife Resort Kaziranga",
            location: "Kaziranga National Park",
            price: 8200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Private Safaris", "Bird Watching"]
        },
        {
            name: "Kaziranga Explorer's Hostel",
            location: "Kaziranga National Park",
            price: 900,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Safari Information", "Shared Safari Options"]
        },

        // Orchha
        {
            name: "Orchha Heritage Hotel",
            location: "Orchha",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Palace View", "Heritage Tours"]
        },
        {
            name: "Orchha Royal Resort",
            location: "Orchha",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "River View", "Historical Tours"]
        },
        {
            name: "Orchha Budget Inn",
            location: "Orchha",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Monument Maps"]
        },
        {
            name: "Premium Palace View Resort Orchha",
            location: "Orchha",
            price: 6200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "River View", "Private Heritage Tours"]
        },
        {
            name: "Orchha Traveller's Hostel",
            location: "Orchha",
            price: 600,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Kanyakumari
        {
            name: "Kanyakumari Sea View Hotel",
            location: "Kanyakumari",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Sea View", "Sunrise View Point"]
        },
        {
            name: "Kanyakumari Luxury Resort",
            location: "Kanyakumari",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Ocean View", "Boat Rides"]
        },
        {
            name: "Kanyakumari Budget Stay",
            location: "Kanyakumari",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Beach Access"]
        },
        {
            name: "Premium Sunset Resort Kanyakumari",
            location: "Kanyakumari",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Ocean View", "Private Sunrise Viewing"]
        },
        {
            name: "Kanyakumari Traveller's Hostel",
            location: "Kanyakumari",
            price: 650,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Ludhiana
        {
            name: "Ludhiana City Hotel",
            location: "Ludhiana",
            price: 3000,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Business Center", "City Tours"]
        },
        {
            name: "Ludhiana Luxury Suites",
            location: "Ludhiana",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Shopping Area"]
        },
        {
            name: "Ludhiana Budget Inn",
            location: "Ludhiana",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides"]
        },
        {
            name: "Premium Business Resort Ludhiana",
            location: "Ludhiana",
            price: 6200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Conference Facilities", "Shopping Area"]
        },
        {
            name: "Ludhiana Traveller's Hostel",
            location: "Ludhiana",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Srinagar (separate from Jammu and Kashmir general)
        {
            name: "Dal Lake Houseboat",
            location: "Srinagar",
            price: 3800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Meals Included", "Lake View", "Shikara Rides"]
        },
        {
            name: "Srinagar Luxury Resort",
            location: "Srinagar",
            price: 6200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Lake View", "Garden", "Houseboat Experience"]
        },
        {
            name: "Srinagar Budget Stay",
            location: "Srinagar",
            price: 1800,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Local Guides", "Garden"]
        },
        {
            name: "Premium Lake View Resort Srinagar",
            location: "Srinagar",
            price: 8500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Lake View", "Private Shikara", "Mughal Gardens Tour"]
        },
        {
            name: "Srinagar Explorer's Hostel",
            location: "Srinagar",
            price: 800,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk", "Garden"]
        },

        // Nainital
        {
            name: "Nainital Lake Resort",
            location: "Nainital",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Lake View", "Boating"]
        },
        {
            name: "Nainital Luxury Lodge",
            location: "Nainital",
            price: 5200,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Mountain View", "Lake Activities"]
        },
        {
            name: "Nainital Budget Inn",
            location: "Nainital",
            price: 1500,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Lake View"]
        },
        {
            name: "Premium Mountain Resort Nainital",
            location: "Nainital",
            price: 6800,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Lake View", "Adventure Activities"]
        },
        {
            name: "Nainital Traveller's Hostel",
            location: "Nainital",
            price: 680,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk"]
        },

        // Kasauli
        {
            name: "Kasauli Mountain Retreat",
            location: "Kasauli",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Mountain View", "Nature Walks"]
        },
        {
            name: "Kasauli Luxury Resort",
            location: "Kasauli",
            price: 4800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Mountain View", "Nature Trails"]
        },
        {
            name: "Kasauli Budget Stay",
            location: "Kasauli",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "Mountain View"]
        },
        {
            name: "Premium Hilltop Resort Kasauli",
            location: "Kasauli",
            price: 6500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Mountain View", "Adventure Activities"]
        },
        {
            name: "Kasauli Explorer's Hostel",
            location: "Kasauli",
            price: 650,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Trekking Information"]
        },

        // Jodhpur
        {
            name: "Blue City View Hotel",
            location: "Jodhpur",
            price: 3500,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Restaurant", "Fort View", "Heritage Tours"]
        },
        {
            name: "Jodhpur Luxury Palace",
            location: "Jodhpur",
            price: 5500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa", "Fort View", "Heritage Architecture"]
        },
        {
            name: "Jodhpur Budget Inn",
            location: "Jodhpur",
            price: 1400,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Breakfast", "City Maps"]
        },
        {
            name: "Premium Fort View Resort Jodhpur",
            location: "Jodhpur",
            price: 7200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Fort View", "Desert Safaris", "Heritage Tours"]
        },
        {
            name: "Jodhpur Traveller's Hostel",
            location: "Jodhpur",
            price: 600,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Common Area", "Tour Desk", "Rooftop Views"]
        },
        // Coorg (Kodagu)
        {
            name: "Coorg Coffee Estate Retreat",
            location: "Coorg",
            price: 4200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Coffee Plantation Tours", "Fireplace", "Restaurant", "Nature Walks"]
        },
        {
            name: "Kodagu Forest Resort",
            location: "Coorg",
            price: 7800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Multiple Restaurants", "Spa", "Forest View", "Adventure Activities"]
        },
        {
            name: "Coorg Homestay Experience",
            location: "Coorg",
            price: 1800,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Home-cooked Meals", "Local Guide"]
        },
        {
            name: "Heritage Villa Coorg",
            location: "Coorg",
            price: 9500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Private Pool", "Gourmet Dining", "Spa", "Hill Views", "Coffee Tasting", "Bird Watching"]
        },
        {
            name: "Backpackers Coorg",
            location: "Coorg",
            price: 750,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Shared Kitchen", "Trekking Arrangements"]
        },

        // Puducherry
        {
            name: "Pondicherry French Quarter Hotel",
            location: "Puducherry",
            price: 3800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "French-inspired Restaurant", "Colonial Architecture", "Bicycle Rentals"]
        },
        {
            name: "Seaside Puducherry Resort",
            location: "Puducherry",
            price: 6500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Beachfront Restaurant", "Yoga Center", "Water Sports"]
        },
        {
            name: "Aurobindo Ashram Guesthouse",
            location: "Puducherry",
            price: 1200,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Vegetarian Meals", "Meditation Spaces"]
        },
        {
            name: "French Colonial Villa",
            location: "Puducherry",
            price: 8900,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Private Garden", "Chef Service", "Heritage Tours", "Beach Access", "Boutique Experience"]
        },
        {
            name: "Puducherry Backpacker's Inn",
            location: "Puducherry",
            price: 580,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Community Events", "City Maps", "Scooter Rentals"]
        },

        // Gokarna
        {
            name: "Gokarna Beach Resort",
            location: "Gokarna",
            price: 3200,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Beachside Dining", "Hammocks", "Beach Shacks"]
        },
        {
            name: "Om Beach Luxury Stay",
            location: "Gokarna",
            price: 5800,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Infinity Pool", "Seafood Restaurant", "Spa", "Private Beach Access", "Kayaking"]
        },
        {
            name: "Gokarna Temple Town Lodge",
            location: "Gokarna",
            price: 1100,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Temple View", "Vegetarian Food"]
        },
        {
            name: "Kudle Beach Premium Cottages",
            location: "Gokarna",
            price: 7200,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Private Beachfront", "Yoga Deck", "Organic Restaurant", "Sunset Views", "Surf Lessons"]
        },
        {
            name: "Paradise Beach Shacks",
            location: "Gokarna",
            price: 650,
            category: "Economy",
            amenities: ["Community Campfire", "Basic Wi-Fi", "Shared Bathrooms", "Beach Access"]
        },

        // Hampi
        {
            name: "Hampi Heritage Inn",
            location: "Hampi",
            price: 2800,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Ruins View", "Bicycle Rentals", "Cultural Shows"]
        },
        {
            name: "Vijayanagara Luxury Resort",
            location: "Hampi",
            price: 5500,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Heritage Tours", "Multi-cuisine Restaurant", "Evening Entertainment"]
        },
        {
            name: "Hampi Riverside Hostel",
            location: "Hampi",
            price: 950,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Riverside Cafe", "Boulder Views"]
        },
        {
            name: "Royal Hampi Retreat",
            location: "Hampi",
            price: 6900,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Private Guide", "Themed Suites", "Ancient Architecture", "Rooftop Dining", "Photography Tours"]
        },
        {
            name: "Hippie Island Guesthouse",
            location: "Hampi",
            price: 550,
            category: "Economy",
            amenities: ["Basic Wi-Fi", "Musical Instruments", "Community Dining", "Hammocks"]
        },

        // Mysore
        {
            name: "Mysore Palace View Hotel",
            location: "Mysore",
            price: 3300,
            category: "Mid-range",
            amenities: ["Free Wi-Fi", "Palace View", "Mysore Pak Sweet Shop", "Traditional Decor"]
        },
        {
            name: "Royal Mysore Resort",
            location: "Mysore",
            price: 6100,
            category: "Luxury",
            amenities: ["Free Wi-Fi", "Swimming Pool", "Ayurvedic Spa", "Fine Dining", "Palace Tour Arrangements"]
        },
        {
            name: "Chamundi Hills Budget Stay",
            location: "Mysore",
            price: 1300,
            category: "Budget",
            amenities: ["Free Wi-Fi", "Hill View", "Temple Proximity"]
        },
        {
            name: "Maharaja's Mansion Mysore",
            location: "Mysore",
            price: 8500,
            category: "Premium",
            amenities: ["Free Wi-Fi", "Heritage Building", "Butler Service", "Private Garden", "Royal Cuisine", "Dasara Festival Special Access"]
        },
        {
            name: "Devaraja Market Backpackers",
            location: "Mysore",
            price: 700,
            category: "Economy",
            amenities: ["Free Wi-Fi", "Market Tours", "Silk Shopping Guide", "Shared Kitchen"]
        }
        // Your complete array of 69 hotels would go here
    ];

    function searchHotels(location, category) {
        const results = hotels.filter(hotel =>
            hotel.location.toLowerCase() === location.toLowerCase() &&
            hotel.category.toLowerCase() === category.toLowerCase()
        );
    
        if (results.length > 0) {
            console.log(`Hotels in ${location} (${category}):`);
            results.forEach(hotel => {
                console.log(`- ${hotel.name} | ₹${hotel.price} | Amenities: ${hotel.amenities.join(', ')}`);
            });
        } else {
            console.log(`No hotels found for ${location} (${category}).`);
        }
    }
    
    // Document ready function
$(document).ready(function() {
    console.log("jQuery is loaded and document is ready!");

    // Get unique locations for location dropdown
    const locations = [...new Set(hotels.map(hotel => hotel.location))].sort();
    const locationSelect = $('#locationFilter');
    
    // Clear any existing options first
    locationSelect.empty();
    locationSelect.append('<option value="">All Locations</option>');
    
    locations.forEach(location => {
        locationSelect.append(`<option value="${location}">${location}</option>`);
    });

    // Get unique amenities for filter checkboxes
    const allAmenities = new Set();
    hotels.forEach(hotel => {
        hotel.amenities.forEach(amenity => {
            allAmenities.add(amenity);
        });
    });

    const amenitiesContainer = $('#amenitiesContainer');
    [...allAmenities].sort().forEach(amenity => {
        const amenityId = amenity.toLowerCase().replace(/[^a-z0-9]/g, '');
        amenitiesContainer.append(`
            <div class="form-check">
                <input type="checkbox" class="form-check-input amenity-filter" id="${amenityId}" data-amenity="${amenity}">
                <label class="form-check-label" for="${amenityId}">${amenity}</label>
            </div>
        `);
    });

    // Filter hotels function
    function filterHotels() {
        const locationFilter = $('#locationFilter').val();
        const minPriceFilter = parseInt($('#minPriceFilter').val()) || 0;
        const maxPriceFilter = parseInt($('#maxPriceFilter').val()) || Infinity;
        const categoryFilter = $('#categoryFilter').val();

        // Get selected amenities
        const selectedAmenities = [];
        $('.amenity-filter:checked').each(function() {
            selectedAmenities.push($(this).data('amenity'));
        });

        const filteredHotels = hotels.filter(hotel => {
            const locationMatch = !locationFilter || hotel.location === locationFilter;
            const priceMatch = hotel.price >= minPriceFilter && hotel.price <= maxPriceFilter;
            const categoryMatch = !categoryFilter || hotel.category === categoryFilter;
            const amenitiesMatch = selectedAmenities.length === 0 ||
                selectedAmenities.every(amenity => hotel.amenities.includes(amenity));

            return locationMatch && priceMatch && categoryMatch && amenitiesMatch;
        });

        displayHotels(filteredHotels);
    }

    // Display hotels function
    function displayHotels(hotelList) {
        const hotelListDiv = $('#hotelList');
        hotelListDiv.empty();

        if (hotelList.length === 0) {
            hotelListDiv.html('<div class="alert alert-info">No hotels found matching your criteria.</div>');
            $('#resultsCount').text('No results found');
            return;
        }

        $('#resultsCount').text(`Showing ${hotelList.length} results`);

        hotelList.forEach(hotel => {
            const hotelCard = $(`
                <div class="hotel-card">
                    <div class="row">
                        <div class="col-md-8">
                            <h5>${hotel.name}</h5>
                            <p><strong>Location:</strong> ${hotel.location}</p>
                            <p><strong>Category:</strong> ${hotel.category}</p>
                            <p><strong>Amenities:</strong> ${hotel.amenities.join(', ')}</p>
                        </div>
                        <div class="col-md-4 text-right">
                            <span class="price-badge">₹${hotel.price}</span>
                            <button class="btn btn-primary mt-3">Book Now</button>
                        </div>
                    </div>
                </div>
            `);
            hotelListDiv.append(hotelCard);
        });
    }

    // Event handlers
    $('#filterHotels').on('click', filterHotels);

    $('#resetFilters').on('click', function() {
        $('#locationFilter').val('');
        $('#minPriceFilter').val('');
        $('#maxPriceFilter').val('');
        $('#categoryFilter').val('');
        $('.amenity-filter').prop('checked', false);
        displayHotels(hotels);
    });

    $('#sortHotels').on('change', function() {
        const sortBy = $(this).val();
        const currentHotels = [...hotels]; // Create a copy of the hotels array

        switch(sortBy) {
            case 'price-low':
                currentHotels.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                currentHotels.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                currentHotels.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        displayHotels(currentHotels);
    });

    // Initial display
    displayHotels(hotels);
});