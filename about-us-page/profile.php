<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
require_once "db.php";

// Check if the user is logged in
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: login.php");
    exit();
}

// Fetch user data from the database
$userId = $_SESSION['id'];
$sql = "SELECT username, email, created_at FROM users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

// Check if created_at column exists
$created_at = isset($user['created_at']) ? $user['created_at'] : null;

// Format date function
function formatDate($date) {
    if (!$date) return "N/A";
    $timestamp = strtotime($date);
    return date('M j, Y \a\t g:i a', $timestamp);
}

// Get current page name for navigation highlighting
$current_page = basename($_SERVER['PHP_SELF']);

if (isset($_GET['updated']) && $_GET['updated'] == 1): ?>
    <p style="color: green; font-weight: bold;">Profile updated successfully.</p>
<?php endif; ?>
?>

<!DOCTYPE html>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>User Profile | Ikigai World</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="ikigai-common.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <style>
        /* Additional Profile Page Specific Styles */
       
    .custom-heading {
        color:rgb(175, 231, 151);
        font-weight: bold;
    }


        .profile-container {
            max-width: 900px;
            margin: 20px auto 60px;
            padding: 0 20px;
        }
        
        .profile-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .profile-card {
            background: var(--ikigai-card-bg);
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 20px;
            border: 1px solid var(--ikigai-border);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
        }
        
        .profile-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        
        .profile-avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: rgba(104, 183, 119, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            border: 2px solid #68B777;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .profile-avatar i {
            font-size: 40px;
            color: #bedbd3;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 20px 0;
        }
        
        .info-item {
            background: rgba(77, 98, 85, 0.2);
            padding: 15px;
            border-radius: 8px;
            border: 1px solid rgba(77, 98, 85, 0.3);
        }
        
        .info-item strong {
            display: block;
            color: rgba(190, 219, 211, 0.7);
            margin-bottom: 5px;
            font-size: 14px;
        }
        
        .info-value {
            color: #bedbd3;
            font-size: 16px;
            font-weight: 600;
        }
        
        .btn-container {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        }
        
        .activity-placeholder {
            text-align: center;
            padding: 40px 0;
            color: rgba(190, 219, 211, 0.7);
        }
        
        .placeholder-icon {
            font-size: 40px;
            margin-bottom: 15px;
            color: rgba(104, 183, 119, 0.5);
        }
        
        .section-heading {
            color: #bedbd3;
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(104, 183, 119, 0.3);
        }
        .alert-success {
    background-color: #d4edda;
    color: #155724;
    border-left: 5px solid #28a745;
    padding: 15px 20px;
    margin: 20px 0;
    border-radius: 5px;
    font-family: 'Segoe UI', sans-serif;
    font-size: 16px;
}
        /* Stars and circles animations from common CSS */
        .profile-background {
            position: relative;
            z-index: 1;
        }
        
        @media (max-width: 768px) {
            .info-grid {
                grid-template-columns: 1fr;
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
                    <img src="images/New.png" alt="Ikigai World Logo">
                </a>
                <p class="tagline">Find your purpose</p>
            </div>
            
            <div class="search-container">
                <input type="text" placeholder="Search for inspiration, activities, ideas...">
                <span class="search-icon"><i class="fas fa-search"></i></span>
                <div class="search-results">
                    <!-- Search results appear here -->
                </div>
            </div>
            
            <div class="nav-links">
                <a href="home.php" class="<?php echo $current_page == 'home.php' ? 'active' : ''; ?>">
                    <i class="fas fa-home"></i> Home
                </a>
                
                <a href="profile.php" class="<?php echo $current_page == 'profile.php' ? 'active' : ''; ?>">
                    <i class="fas fa-user"></i> Profile
                </a>
               

                <a href="logout.php" class="<?php echo ($current_page == 'logout.php') ? 'active' : ''; ?>">
    <i class="fas fa-sign-out-alt"></i> Logout
</a>

            </div>
        
            
        </div>
    </nav>
    
    <!-- Profile Content -->
    <div class="profile-container profile-background">
        <h1 class="main-heading">My Ikigai Journey</h1>
        
        <div class="profile-card">
            <div class="profile-header">
                <h2 class="sub-heading">Welcome, <?php echo htmlspecialchars($user['username']); ?>!</h2>
            </div>
            
            <div class="profile-avatar">
                <i class="fas fa-user"></i>
            </div>
            
            <div class="info-grid">
                <div class="info-item">
                    <strong>Username</strong>
                    <div class="info-value"><?php echo htmlspecialchars($user['username']); ?></div>
                </div>
                <div class="info-item">
                    <strong>Email</strong>
                    <div class="info-value"><?php echo htmlspecialchars($user['email']); ?></div>
                </div>
                <?php if ($created_at): ?>
                <div class="info-item">
                    <strong>Member Since</strong>
                    <div class="info-value"><?php echo formatDate($created_at); ?></div>
                </div>
                <?php endif; ?>
                <div class="info-item">
                    <strong>Ikigai Status</strong>
                    <div class="info-value">Explorer</div>
                </div>
            </div>
            
            <div class="btn-container"> 
    <button class="btn-primary" onclick="window.location.href='edit_profile.php'">
        <i class="fas fa-edit"></i> Edit Profile
    </button>
    <button class="btn-secondary" onclick="window.location.href='settings.php'">
        <i class="fas fa-cog"></i> Settings
    </button>
</div>

        </div>
        
        <div class="profile-card">
            <h3 class="section-heading"><i class="fas fa-chart-line"></i> Your Activity</h3>
            <div class="activity-placeholder">
                <div class="placeholder-icon">
                    <i class="fas fa-seedling"></i>
                </div>
                <p class="text-content">Your Ikigai journey is just beginning!</p>
                <p class="text-content">Explore our community, create content, and track your progress toward finding your purpose.</p>
                <button class="btn-primary" onclick="window.location.href='home.php'">
                    <i class="fas fa-compass"></i> Start Exploring
                </button>
            </div>
        </div>
        
        <div class="profile-card">
            <h3 class="section-heading"><i class="fas fa-bullseye"></i> Your Ikigai Elements</h3>
            <div class="activity-placeholder">
                <div class="placeholder-icon">
                    <i class="fas fa-puzzle-piece"></i>
                </div>
                <p class="text-content">Complete assessments to discover your Ikigai elements:</p>
                <p class="text-content">What you love • What you're good at • What the world needs • What you can be rewarded for</p>
                <button class="btn-primary" onclick="window.location.href='assessment.php'">
                    <i class="fas fa-clipboard-list"></i> Take Assessment
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
        // Simple animation for profile cards on load
        document.addEventListener('DOMContentLoaded', function() {
            const profileCards = document.querySelectorAll('.profile-card');
            profileCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 200 * index);
            });
        });
    </script>

<div class="container mt-5">
<h2 class="mb-4 custom-heading">Your Past Bookings</h2>

<?php
// Only include session_start() if it hasn't already been called at the top
// session_start();

if (!isset($_SESSION['user_id'])) {
    echo "<p>Please log in to view your bookings.</p>";
    exit;
}

$user_id = $_SESSION['user_id'];

// Include DB connection if not already included
include 'db.php';

if (!isset($_SESSION['user_id'])) {
    echo "<p>Please log in to view your bookings.</p>";
    exit;
}
$user_id = $_SESSION['user_id'];

$query = "SELECT * FROM bookings WHERE user_id = ? ORDER BY created_at DESC";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

echo "<h2>Your Past Bookings</h2>";

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<div class='booking'>";
        echo "<p><strong>Package:</strong> " . htmlspecialchars($row['package_name']) . "</p>";
        echo "<p><strong>Travel Date:</strong> " . htmlspecialchars($row['travel_date']) . "</p>";
        echo "<p><strong>People:</strong> " . htmlspecialchars($row['num_people']) . "</p>";
        echo "<p><strong>Total Cost:</strong> ₹" . htmlspecialchars($row['total_cost']) . "</p>";
        echo "<p><strong>Status:</strong> " . htmlspecialchars($row['status']) . "</p>";
        echo "</div><hr>";
    }
} else {
    echo "<p>No bookings found.</p>";
}


?>


</div>

</body>
</html>