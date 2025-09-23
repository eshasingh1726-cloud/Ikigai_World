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
    <title>Discover | Ikigai World</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="ikigai-common.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <style>
        /* Discover Page Specific Styles */
        .discover-container {
            max-width: 1200px;
            margin: 20px auto 60px;
            padding: 0 20px;
        }
        
        .discover-filters {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 30px;
        }
        
        .filter-button {
            background: rgba(13, 48, 33, 0.6);
            color: rgba(190, 219, 211, 0.8);
            border: 1px solid rgba(77, 98, 85, 0.5);
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 14px;
        }
        
        .filter-button:hover, .filter-button.active {
            background: rgba(104, 183, 119, 0.3);
            border-color: rgba(104, 183, 119, 0.6);
            color: #bedbd3;
            transform: translateY(-2px);
        }
        
        .discover-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
        }
        
        .discover-card {
            background: rgba(13, 48, 33, 0.7);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(77, 98, 85, 0.3);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .discover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
            border-color: rgba(104, 183, 119, 0.5);
        }
        
        .card-image {
            height: 180px;
            overflow: hidden;
            position: relative;
        }
        
        .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .discover-card:hover .card-image img {
            transform: scale(1.1);
        }
        
        .card-category {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(104, 183, 119, 0.7);
            color: #bedbd3;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 600;
        }
        
        .card-content {
            padding: 20px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        
        .card-title {
            color: #bedbd3;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        
        .card-description {
            color: rgba(190, 219, 211, 0.8);
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 15px;
            flex-grow: 1;
        }
        
        .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 10px;
            border-top: 1px solid rgba(77, 98, 85, 0.3);
        }
        
        .card-stats {
            display: flex;
            gap: 15px;
        }
        
        .stat {
            color: rgba(190, 219, 211, 0.7);
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .stat i {
            color: #68B777;
        }
        
        .card-btn {
            background: rgba(104, 183, 119, 0.2);
            color: #bedbd3;
            border: 1px solid rgba(104, 183, 119, 0.4);
            padding: 6px 12px;
            border-radius: 5px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .card-btn:hover {
            background: rgba(104, 183, 119, 0.4);
        }
        
        .pagination {
            display: flex;
            justify-content: center;
            gap: 5px;
            margin-top: 40px;
        }
        
        .page-link {
            background: rgba(13, 48, 33, 0.6);
            color: rgba(190, 219, 211, 0.8);
            border: 1px solid rgba(77, 98, 85, 0.5);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .page-link:hover, .page-link.active {
            background: rgba(104, 183, 119, 0.3);
            border-color: rgba(104, 183, 119, 0.6);
            color: #bedbd3;
        }
    </style>
</head>
<body>
    <!-- Background Elements -->
    <div class="gradient-background"></div>
    <div class="gradient-overlay"></div>
    
    <!-- Animated Background Elements -->
    <div class="star" style="width: 2px; height: 2px; top: 15%; left: 10%;"></div>
    <div class="star" style="width: 3px; height: 3px; top: 25%; left: 85%;"></div>
    <div class="star" style="width: 2px; height: 2px; top: 55%; left: 20%;"></div>
    <div class="star" style="width: 4px; height: 4px; top: 75%; left: 70%;"></div>
    <div class="circle" style="width: 150px; height: 150px; top: 10%; right: -50px;"></div>
    <div class="circle" style="width: 200px; height: 200px; bottom: -50px; left: -50px;"></div>
    
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <!-- Logo -->
            <div class="logo-container">
                <a href="index.php" class="logo-image">
                    <img src="images/ikigai-logo.png" alt="Ikigai World Logo">
                </a>
                <p class="tagline">Find Your Purpose</p>
            </div>
            
            <!-- Search Bar -->
            <div class="search-container">
                <input type="text" placeholder="Search for paths, activities, or communities..." id="search-input">
                <i class="fas fa-search search-icon"></i>
                <div class="search-results" id="search-results"></div>
            </div>
            
            <!-- Navigation Links -->
            <div class="nav-links">
                <a href="index.php" <?php if($current_page == "index.php") echo 'class="active"'; ?>>
                    <i class="fas fa-home"></i> Home
                </a>
                <a href="discover.php" <?php if($current_page == "discover.php") echo 'class="active"'; ?>>
                    <i class="fas fa-compass"></i> Discover
                </a>
                <a href="communities.php" <?php if($current_page == "communities.php") echo 'class="active"'; ?>>
                    <i class="fas fa-users"></i> Communities
                </a>
                <a href="profile.php" <?php if($current_page == "profile.php") echo 'class="active"'; ?>>
                    <i class="fas fa-user"></i> Profile
                </a>
            </div>
            
            <!-- Action Buttons -->
            <div class="nav-actions">
                <button onclick="location.href='logout.php'">Log Out</button>
                <button onclick="location.href='create.php'">Create</button>
            </div>
        </div>
    </nav>
    
    <!-- Main Content -->
    <div class="discover-container">
        <h1 class="main-heading">Discover Your Ikigai</h1>
        
        <!-- Filters -->
        <div class="discover-filters">
            <button class="filter-button active">All</button>
            <button class="filter-button">Personal Growth</button>
            <button class="filter-button">Career</button>
            <button class="filter-button">Relationships</button>
            <button class="filter-button">Health & Wellness</button>
            <button class="filter-button">Creativity</button>
            <button class="filter-button">Learning</button>
            <button class="filter-button">Spiritual</button>
        </div>
        
        <!-- Discover Grid -->
        <div class="discover-grid">
            <?php
            // Query to get discover items with pagination
            $items_per_page = 12;
            $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
            $offset = ($page - 1) * $items_per_page;
            
            $sql = "SELECT d.*, u.username, 
                   (SELECT COUNT(*) FROM likes WHERE content_id = d.id AND content_type = 'discover') as like_count,
                   (SELECT COUNT(*) FROM comments WHERE content_id = d.id AND content_type = 'discover') as comment_count
                   FROM discover_items d
                   JOIN users u ON d.user_id = u.id
                   ORDER BY d.created_at DESC
                   LIMIT $offset, $items_per_page";
            
            $result = $conn->query($sql);
            
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo '<div class="discover-card" data-category="' . $row["category"] . '">';
                    echo '<div class="card-image">';
                    echo '<img src="' . $row["image_url"] . '" alt="' . $row["title"] . '">';
                    echo '<span class="card-category">' . $row["category"] . '</span>';
                    echo '</div>';
                    echo '<div class="card-content">';
                    echo '<h3 class="card-title">' . $row["title"] . '</h3>';
                    echo '<p class="card-description">' . substr($row["description"], 0, 100) . '...</p>';
                    echo '<div class="card-footer">';
                    echo '<div class="card-stats">';
                    echo '<span class="stat"><i class="fas fa-heart"></i> ' . $row["like_count"] . '</span>';
                    echo '<span class="stat"><i class="fas fa-comment"></i> ' . $row["comment_count"] . '</span>';
                    echo '</div>';
                    echo '<button class="card-btn" onclick="location.href=\'view-discover.php?id=' . $row["id"] . '\'">View</button>';
                    echo '</div>';
                    echo '</div>';
                    echo '</div>';
                }
            } else {
                echo '<p class="text-content" style="text-align: center; grid-column: 1 / -1;">No discover items found. Be the first to create one!</p>';
            }
            
            ?>
        </div>
        
        <!-- Pagination -->
        <div class="pagination">
            <?php
            // Count total pages
            $sql_count = "SELECT COUNT(*) as total FROM discover_items";
            $result_count = $conn->query($sql_count);
            $row_count = $result_count->fetch_assoc();
            $total_pages = ceil($row_count["total"] / $items_per_page);
            
            // Previous page
            if ($page > 1) {
                echo '<a href="?page=' . ($page - 1) . '" class="page-link"><i class="fas fa-chevron-left"></i></a>';
            }
            
            // Page numbers
            for ($i = max(1, $page - 2); $i <= min($total_pages, $page + 2); $i++) {
                echo '<a href="?page=' . $i . '" class="page-link ' . ($i == $page ? 'active' : '') . '">' . $i . '</a>';
            }
            
            // Next page
            if ($page < $total_pages) {
                echo '<a href="?page=' . ($page + 1) . '" class="page-link"><i class="fas fa-chevron-right"></i></a>';
            }
            ?>
        </div>
    </div>
    
    <!-- Footer -->
    <footer>
        <div class="copyright">
            <p>&copy; 2025 Ikigai World. All rights reserved.</p>
        </div>
    </footer>
    
    <script>
        // Filter functionality
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-button');
            const cards = document.querySelectorAll('.discover-card');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Get filter value
                    const filter = this.textContent;
                    
                    // Filter cards
                    cards.forEach(card => {
                        const category = card.getAttribute('data-category');
                        
                        if (filter === 'All' || filter === category) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
            
            // Search functionality
            const searchInput = document.getElementById('search-input');
            const searchResults = document.getElementById('search-results');
            
            searchInput.addEventListener('focus', function() {
                if (this.value.length > 0) {
                    searchResults.classList.add('active');
                }
            });
            
            searchInput.addEventListener('blur', function() {
                setTimeout(function() {
                    searchResults.classList.remove('active');
                }, 200);
            });
            
            searchInput.addEventListener('input', function() {
                if (this.value.length > 0) {
                    searchResults.classList.add('active');
                    
                    // AJAX request to search.php would go here
                    // For now, show some sample results
                    searchResults.innerHTML = `
                        <div class="search-result-item">
                            <strong>Personal Growth:</strong> Finding Inner Peace
                        </div>
                        <div class="search-result-item">
                            <strong>Career:</strong> Work-Life Integration
                        </div>
                        <div class="search-result-item">
                            <strong>Community:</strong> Mindfulness Practitioners
                        </div>
                    `;
                } else {
                    searchResults.classList.remove('active');
                }
            });
        });
    </script>
</body>
</html>