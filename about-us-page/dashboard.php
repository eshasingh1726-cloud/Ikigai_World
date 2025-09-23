<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ikigai World - User Dashboard</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    /* Importing Ikigai World common styles */
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&family=Dancing+Script:wght@500;700&display=swap');

    /* Reset styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Quicksand', 'Segoe UI', sans-serif;
    }

    /* Base layout for sticky footer */
    html, body {
      height: 100%;
    }

    body {
      background-color: #bedbd3;
      min-height: 100vh;
      padding-bottom: 40px;
      overflow-x: hidden;
      position: relative;
    }

    /* Background Elements */
    .gradient-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0d3021, #4D6255, #68B777);
      z-index: -2;
    }

    .gradient-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(13, 48, 33, 0.7);
      z-index: -1;
    }

    /* Navigation Bar */
    .navbar {
      background-color: rgba(13, 48, 33, 0.85);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(77, 98, 85, 0.3);
      padding: 15px 0;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .navbar .container {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
      padding: 0 15px;
    }

    /* Logo and Tagline */
    .logo-container {
      display: flex;
      align-items: center;
      flex-shrink: 1;
      margin-right: 10px;
      min-width: 180px;
    }

    .logo-image {
      width: 150px;
      height: auto;
      position: relative;
      overflow: visible;
      background: none;
      box-shadow: none;
      border: none;
    }

    .logo-image img {
      width: 100%;
      height: auto;
      transition: transform 0.5s ease;
      border: none;
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.6));
      object-fit: contain;
    }

    /* Navigation Links */
    .nav-links {
      display: flex;
      flex-wrap: nowrap;
      gap: 4px;
      margin-right: 5px;
    }

    .nav-links a {
      color: rgba(190, 219, 211, 0.8);
      text-decoration: none;
      font-weight: 600;
      padding: 8px 8px;
      transition: all 0.3s;
      border-radius: 6px;
      white-space: nowrap;
      border: 1px solid rgba(104, 183, 119, 0.3);
      background-color: rgba(13, 48, 33, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      font-size: 14px;
    }

    .nav-links a:hover, 
    .nav-links a.active {
      color: #bedbd3;
      background-color: rgba(104, 183, 119, 0.3);
      border-color: rgba(104, 183, 119, 0.6);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    /* Common Styles */
    .btn-primary {
      background: rgba(104, 183, 119, 0.3);
      color: #bedbd3;
      border: 1px solid rgba(104, 183, 119, 0.5);
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 600;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-primary:hover {
      background: rgba(104, 183, 119, 0.5);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .btn-secondary {
      background: transparent;
      color: #bedbd3;
      border: 1px solid rgba(190, 219, 211, 0.3);
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 600;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .btn-secondary:hover {
      border-color: rgba(190, 219, 211, 0.5);
      background: rgba(77, 98, 85, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    /* Dashboard Layout */
    .dashboard-container {
      display: flex;
      max-width: 1400px;
      margin: 20px auto;
      padding: 0 15px;
    }

    /* Dashboard Sidebar */
    .dashboard-sidebar {
      width: 280px;
      background: rgba(13, 48, 33, 0.7);
      border-radius: 12px;
      padding: 20px;
      margin-right: 20px;
      border: 1px solid rgba(77, 98, 85, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      height: fit-content;
      position: sticky;
      top: 20px;
    }

    .profile-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(77, 98, 85, 0.3);
      margin-bottom: 20px;
    }

    .profile-image {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 15px;
      border: 3px solid rgba(104, 183, 119, 0.5);
      box-shadow: 0 0 15px rgba(104, 183, 119, 0.3);
    }

    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .profile-name {
      color: #bedbd3;
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 5px;
      text-align: center;
    }

    .profile-email {
      color: rgba(190, 219, 211, 0.7);
      font-size: 14px;
      margin-bottom: 15px;
      text-align: center;
    }

    .membership-status {
      background: rgba(104, 183, 119, 0.2);
      color: #bedbd3;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      margin-bottom: 10px;
      border: 1px solid rgba(104, 183, 119, 0.4);
    }

    .membership-status i {
      margin-right: 5px;
      color: #68B777;
    }

    .profile-stats {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 15px;
    }

    .stat-item {
      text-align: center;
      flex: 1;
    }

    .stat-value {
      color: #bedbd3;
      font-size: 24px;
      font-weight: 700;
      display: block;
    }

    .stat-label {
      color: rgba(190, 219, 211, 0.7);
      font-size: 12px;
    }

    .sidebar-menu {
      list-style: none;
      padding: 0;
    }

    .sidebar-menu li {
      margin-bottom: 2px;
    }

    .sidebar-menu a {
      display: flex;
      align-items: center;
      color: rgba(190, 219, 211, 0.8);
      text-decoration: none;
      padding: 12px 15px;
      border-radius: 8px;
      transition: all 0.3s;
      font-weight: 600;
    }

    .sidebar-menu a:hover, .sidebar-menu a.active {
      background: rgba(104, 183, 119, 0.2);
      color: #bedbd3;
    }

    .sidebar-menu a i {
      margin-right: 10px;
      width: 20px;
      text-align: center;
    }

    /* Dashboard Content */
    .dashboard-content {
      flex: 1;
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .dashboard-title {
      color: #bedbd3;
      font-size: 28px;
      font-weight: 700;
    }

    .dashboard-actions {
      display: flex;
      gap: 10px;
    }

    .welcome-banner {
      background: rgba(13, 48, 33, 0.7);
      border-radius: 12px;
      padding: 25px;
      margin-bottom: 20px;
      border: 1px solid rgba(77, 98, 85, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
    }

    .welcome-content {
      flex: 1;
    }

    .welcome-title {
      color: #bedbd3;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .welcome-text {
      color: rgba(190, 219, 211, 0.9);
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 15px;
    }

    .welcome-image {
      width: 120px;
      height: 120px;
      margin-left: 20px;
      border-radius: 50%;
      background: rgba(104, 183, 119, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid rgba(104, 183, 119, 0.3);
    }

    .welcome-image i {
      font-size: 50px;
      color: rgba(104, 183, 119, 0.8);
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }

    .stat-card {
      background: rgba(13, 48, 33, 0.7);
      border-radius: 12px;
      padding: 20px;
      border: 1px solid rgba(77, 98, 85, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
    }

    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }

    .stat-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    .stat-card-title {
      color: rgba(190, 219, 211, 0.8);
      font-size: 16px;
      font-weight: 600;
    }

    .stat-card-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(104, 183, 119, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(104, 183, 119, 0.3);
    }

    .stat-card-icon i {
      font-size: 18px;
      color: rgba(104, 183, 119, 0.8);
    }

    .stat-card-value {
      color: #bedbd3;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 5px;
    }

    .stat-card-description {
      color: rgba(190, 219, 211, 0.7);
      font-size: 14px;
    }

    /* Recent Trips */
    .recent-trips-card {
      background: rgba(13, 48, 33, 0.7);
      border-radius: 12px;
      padding: 25px;
      margin-bottom: 20px;
      border: 1px solid rgba(77, 98, 85, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .card-title {
      color: #bedbd3;
      font-size: 20px;
      font-weight: 700;
    }

    .trip-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }

    .trip-item {
      background: rgba(77, 98, 85, 0.3);
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.3s;
      border: 1px solid rgba(77, 98, 85, 0.5);
    }

    .trip-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .trip-image {
      height: 160px;
      overflow: hidden;
      position: relative;
    }

    .trip-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }

    .trip-item:hover .trip-image img {
      transform: scale(1.1);
    }

    .trip-status {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .status-completed {
      background: rgba(104, 183, 119, 0.8);
      color: #fff;
    }

    .status-upcoming {
      background: rgba(77, 98, 85, 0.8);
      color: #fff;
    }

    .trip-details {
      padding: 15px;
    }

    .trip-name {
      color: #bedbd3;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 5px;
    }

    .trip-destination {
      color: rgba(190, 219, 211, 0.7);
      font-size: 14px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
    }

    .trip-destination i {
      margin-right: 5px;
      font-size: 16px;
      color: rgba(104, 183, 119, 0.8);
    }

    .trip-date {
      color: rgba(190, 219, 211, 0.7);
      font-size: 14px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
    }

    .trip-date i {
      margin-right: 5px;
      font-size: 16px;
      color: rgba(104, 183, 119, 0.8);
    }

    .trip-price {
      color: #bedbd3;
      font-size: 16px;
      font-weight: 700;
    }

    /* Wishlist */
    .wishlist-card {
      background: rgba(13, 48, 33, 0.7);
      border-radius: 12px;
      padding: 25px;
      margin-bottom: 20px;
      border: 1px solid rgba(77, 98, 85, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .wishlist-items {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }

    .wishlist-item {
      display: flex;
      background: rgba(77, 98, 85, 0.3);
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.3s;
      border: 1px solid rgba(77, 98, 85, 0.5);
    }

    .wishlist-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .wishlist-image {
      width: 100px;
      height: 100px;
      overflow: hidden;
    }

    .wishlist-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .wishlist-details {
      flex: 1;
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .wishlist-name {
      color: #bedbd3;
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 5px;
    }

    .wishlist-destination {
      color: rgba(190, 219, 211, 0.7);
      font-size: 14px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
    }

    .wishlist-destination i {
      margin-right: 5px;
      font-size: 14px;
      color: rgba(104, 183, 119, 0.8);
    }

    .wishlist-price {
      color: #bedbd3;
      font-size: 16px;
      font-weight: 700;
    }

    .wishlist-actions {
      display: flex;
      justify-content: flex-end;
      gap: 5px;
    }

    .wishlist-action-btn {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(104, 183, 119, 0.2);
      color: rgba(104, 183, 119, 0.8);
      border: 1px solid rgba(104, 183, 119, 0.3);
      cursor: pointer;
      transition: all 0.3s;
    }

    .wishlist-action-btn:hover {
      background: rgba(104, 183, 119, 0.4);
      transform: translateY(-2px);
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
      .dashboard-container {
        flex-direction: column;
      }

      .dashboard-sidebar {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
        position: static;
      }

      .profile-section {
        flex-direction: row;
        align-items: flex-start;
        padding-bottom: 15px;
      }

      .profile-image {
        width: 80px;
        height: 80px;
        margin-right: 15px;
        margin-bottom: 0;
      }

      .profile-info {
        flex: 1;
      }

      .profile-stats {
        margin-top: 10px;
      }

      .sidebar-menu {
        display: flex;
        overflow-x: auto;
        padding-bottom: 10px;
      }

      .sidebar-menu li {
        margin-right: 10px;
        margin-bottom: 0;
        white-space: nowrap;
      }

      .sidebar-menu a {
        padding: 8px 12px;
      }

      .card-grid,
      .trip-list,
      .wishlist-items {
        grid-template-columns: 1fr;
      }

      .welcome-banner {
        flex-direction: column;
        text-align: center;
      }

      .welcome-image {
        margin-left: 0;
        margin-top: 15px;
        width: 100px;
        height: 100px;
      }
    }

    @media (max-width: 480px) {
      .profile-section {
        flex-direction: column;
        align-items: center;
      }

      .profile-image {
        margin-right: 0;
        margin-bottom: 15px;
      }

      .dashboard-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .dashboard-actions {
        margin-top: 10px;
        width: 100%;
        justify-content: space-between;
      }
    }

    /* Animation elements */
    .circle {
      position: fixed;
      background: #68B777;
      border-radius: 50%;
      opacity: 0.2;
      animation: float 8s infinite ease-in-out alternate;
      z-index: -1;
    }

    @keyframes float {
      0% { transform: translate(0, 0); }
      50% { transform: translate(10px, -10px); }
      100% { transform: translate(-10px, 10px); }
    }

    /* Circle animations */
    .circle:nth-child(1) {
      top: 10%;
      left: 5%;
      width: 150px;
      height: 150px;
      animation-delay: 0s;
    }

    .circle:nth-child(2) {
      top: 60%;
      left: 80%;
      width: 200px;
      height: 200px;
      animation-delay: 2s;
    }

    .circle:nth-child(3) {
      top: 30%;
      left: 60%;
      width: 100px;
      height: 100px;
      animation-delay: 4s;
    }

    .circle:nth-child(4) {
      top: 70%;
      left: 15%;
      width: 180px;
      height: 180px;
      animation-delay: 6s;
    }

    /* Mobile menu */
    .mobile-menu-toggle {
      display: none;
      background: transparent;
      border: none;
      color: #bedbd3;
      font-size: 24px;
      cursor: pointer;
    }

    @media (max-width: 992px) {
      .mobile-menu-toggle {
        display: block;
      }

      .nav-links {
        display: none;
      }

      .nav-links.active {
        display: flex;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(13, 48, 33, 0.95);
        flex-direction: column;
        padding: 20px;
        z-index: 1000;
      }
    }
    
    /* Footer Styles */
    .footer {
      background: rgba(13, 48, 33, 0.85);
      color: #bedbd3;
      padding: 30px 0;
      margin-top: 30px;
      border-top: 1px solid rgba(77, 98, 85, 0.3);
    }
    
    .footer-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 15px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 30px;
    }
    
    .footer-column h3 {
      color: #bedbd3;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 15px;
      position: relative;
      padding-bottom: 10px;
    }
    
    .footer-column h3:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50px;
      height: 2px;
      background: rgba(104, 183, 119, 0.8);
    }
    
    .footer-column ul {
      list-style: none;
      padding: 0;
    }
    
    .footer-column ul li {
      margin-bottom: 8px;
    }
    
    .footer-column ul li a {
      color: rgba(190, 219, 211, 0.7);
      text-decoration: none;
      transition: all 0.3s;
      font-size: 14px;
      display: flex;
      align-items: center;
    }
    
    .footer-column ul li a i {
      margin-right: 8px;
      font-size: 12px;
      color: rgba(104, 183, 119, 0.8);
    }
    
    .footer-column ul li a:hover {
      color: #bedbd3;
      transform: translateX(5px);
    }
    
    .footer-bottom {
      text-align: center;
      padding-top: 20px;
      margin-top: 20px;
      border-top: 1px solid rgba(77, 98, 85, 0.3);
      font-size: 14px;
      color: rgba(190, 219, 211, 0.7);
    }
    
    .social-links {
      display: flex;
      gap: 10px;
      margin-top: 15px;
    }
    
    .social-link {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(77, 98, 85, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #bedbd3;
      transition: all 0.3s;
      border: 1px solid rgba(104, 183, 119, 0.3);
    }
    
    .social-link:hover {
      background: rgba(104, 183, 119, 0.3);
      transform: translateY(-3px);
    }
    
    .newsletter-form {
      display: flex;
      margin-top: 15px;
    }
    
    .newsletter-input {
      flex: 1;
      padding: 10px 12px;
      border-radius: 6px 0 0 6px;
      border: 1px solid rgba(77, 98, 85, 0.5);
      background: rgba(13, 48, 33, 0.5);
      color: #bedbd3;
      font-family: 'Quicksand', sans-serif;
    }
    
    .newsletter-input::placeholder {
      color: rgba(190, 219, 211, 0.5);
    }
    
    .newsletter-button {
      background: rgba(104, 183, 119, 0.3);
      border: 1px solid rgba(104, 183, 119, 0.5);
      border-radius: 0 6px 6px 0;
      color: #bedbd3;
      padding: 0 15px;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .newsletter-button:hover {
      background: rgba(104, 183, 119, 0.5);
    }
  </style>
</head>
<body>
  <!-- Background Elements -->
  <div class="gradient-background"></div>
  <div class="gradient-overlay"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>

  <!-- Navigation Bar -->
  <nav class="navbar">
    <div class="container">
      <div class="logo-container">
        <a href="#" class="logo-image">
          <img src="/api/placeholder/150/50" alt="Ikigai World Logo">
        </a>
      </div>

      <button class="mobile-menu-toggle">
        <i class="fas fa-bars"></i>
      </button>

      <div class="nav-links">
        <a href="#" class="active">Home</a>
        <a href="#">Destinations</a>
        <a href="#">Experiences</a>
        <a href="#">Deals</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Dashboard Container -->
  <div class="dashboard-container">
    <!-- Dashboard Sidebar -->
    <aside class="dashboard-sidebar">
    <h2 class="profile-name">John Doe</h2>
        <p class="profile-email">john.doe@example.com</p>
        <div class="membership-status">
          <i class="fas fa-crown"></i> Premium Member
        </div>
        <div class="profile-stats">
          <div class="stat-item">
            <span class="stat-value">12</span>
            <span class="stat-label">Trips</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">5</span>
            <span class="stat-label">Wishlist</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">$1,580</span>
            <span class="stat-label">Spent</span>
          </div>
        </div>
      </div>

      <ul class="sidebar-menu">
        <li>
          <a href="#" class="active">
            <i class="fas fa-home"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-map-marked-alt"></i> My Trips
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-heart"></i> Wishlist
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-cog"></i> Account Settings
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-sign-out-alt"></i> Logout
          </a>
        </li>
      </ul>
    </aside>

    <main class="dashboard-content">
      <div class="dashboard-header">
        <h1 class="dashboard-title">Welcome back, John!</h1>
        <div class="dashboard-actions">
          <button class="btn-primary">Book a New Trip</button>
          <button class="btn-secondary">Explore Destinations</button>
        </div>
      </div>

      <div class="welcome-banner">
        <div class="welcome-content">
          <h2 class="welcome-title">Ready for your next adventure?</h2>
          <p class="welcome-text">Discover new cultures, breathtaking landscapes, and unforgettable experiences with Ikigai World. Your journey to purpose starts here.</p>
          <button class="btn-primary">Find Your Ikigai Trip</button>
        </div>
        <div class="welcome-image">
          <i class="fas fa-globe-americas"></i>
        </div>
      </div>

      <div class="card-grid">
        <div class="stat-card">
          <div class="stat-card-header">
            <h3 class="stat-card-title">Upcoming Trips</h3>
            <div class="stat-card-icon">
              <i class="fas fa-plane-departure"></i>
            </div>
          </div>
          <span class="stat-card-value">2</span>
          <p class="stat-card-description">Your next adventures await!</p>
        </div>

        <div class="stat-card">
          <div class="stat-card-header">
            <h3 class="stat-card-title">Completed Trips</h3>
            <div class="stat-card-icon">
              <i class="fas fa-check-circle"></i>
            </div>
          </div>
          <span class="stat-card-value">12</span>
          <p class="stat-card-description">Memories to cherish forever.</p>
        </div>

        <div class="stat-card">
          <div class="stat-card-header">
            <h3 class="stat-card-title">Wishlist Items</h3>
            <div class="stat-card-icon">
              <i class="fas fa-heart"></i>
            </div>
          </div>
          <span class="stat-card-value">5</span>
          <p class="stat-card-description">Dream destinations you've saved.</p>
        </div>

        <div class="stat-card">
          <div class="stat-card-header">
            <h3 class="stat-card-title">Points Earned</h3>
            <div class="stat-card-icon">
              <i class="fas fa-star"></i>
            </div>
          </div>
          <span class="stat-card-value">450</span>
          <p class="stat-card-description">Reward points for your loyalty.</p>
        </div>
      </div>

      <section class="recent-trips-card">
        <div class="card-header">
          <h2 class="card-title">Recent Trips</h2>
          <a href="#">View All Trips</a>
        </div>
        <div class="trip-list">
          <div class="trip-item">
            <div class="trip-image">
              <img src="/api/placeholder/300/160" alt="Trip to Kyoto">
              <span class="trip-status status-completed">Completed</span>
            </div>
            <div class="trip-details">
              <h3 class="trip-name">Kyoto Exploration</h3>
              <p class="trip-destination"><i class="fas fa-map-marker-alt"></i> Kyoto, Japan</p>
              <p class="trip-date"><i class="far fa-calendar-alt"></i> April 10 - 17, 2025</p>
              <p class="trip-price">From $899</p>
            </div>
          </div>

          <div class="trip-item">
            <div class="trip-image">
              <img src="/api/placeholder/300/160" alt="Trekking in Nepal">
              <span class="trip-status status-upcoming">Upcoming</span>
            </div>
            <div class="trip-details">
              <h3 class="trip-name">Annapurna Base Camp Trek</h3>
              <p class="trip-destination"><i class="fas fa-map-marker-alt"></i> Nepal</p>
              <p class="trip-date"><i class="far fa-calendar-alt"></i> May 5 - 15, 2025</p>
              <p class="trip-price">From $1250</p>
            </div>
          </div>
        </div>
      </section>

      <section class="wishlist-card">
        <div class="card-header">
          <h2 class="card-title">Your Wishlist</h2>
          <a href="#">View Full Wishlist</a>
        </div>
        <div class="wishlist-items">
          <div class="wishlist-item">
            <div class="wishlist-image">
              <img src="/api/placeholder/100/100" alt="Santorini">
            </div>
            <div class="wishlist-details">
              <h3 class="wishlist-name">Romantic Getaway in Santorini</h3>
              <p class="wishlist-destination"><i class="fas fa-map-marker-alt"></i> Santorini, Greece</p>
              <p class="wishlist-price">From $1500</p>
            </div>
            <div class="wishlist-actions">
              <button class="wishlist-action-btn"><i class="fas fa-heart"></i></button>
              <button class="wishlist-action-btn"><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>

          <div class="wishlist-item">
            <div class="wishlist-image">
              <img src="/api/placeholder/100/100" alt="Machu Picchu">
            </div>
            <div class="wishlist-details">
              <h3 class="wishlist-name">Explore the Ancient City of Machu Picchu</h3>
              <p class="wishlist-destination"><i class="fas fa-map-marker-alt"></i> Cusco, Peru</p>
              <p class="wishlist-price">From $950</p>
            </div>
            <div class="wishlist-actions">
              <button class="wishlist-action-btn"><i class="fas fa-heart"></i></button>
              <button class="wishlist-action-btn"><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-column">
        <h3>Explore</h3>
        <ul>
          <li><a href="#"><i class="fas fa-compass"></i> Destinations</a></li>
          <li><a href="#"><i class="fas fa-hiking"></i> Experiences</a></li>
          <li><a href="#"><i class="fas fa-percent"></i> Deals</a></li>
          <li><a href="#"><i class="fas fa-images"></i> Gallery</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>About Us</h3>
        <ul>
          <li><a href="#"><i class="fas fa-info-circle"></i> Our Story</a></li>
          <li><a href="#"><i class="fas fa-users"></i> Our Team</a></li>
          <li><a href="#"><i class="fas fa-briefcase"></i> Careers</a></li>
          <li><a href="#"><i class="fas fa-file-alt"></i> Terms & Conditions</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Support</h3>
        <ul>
          <li><a href="#"><i class="fas fa-question-circle"></i> FAQ</a></li>
          <li><a href="#"><i class="fas fa-envelope"></i> Contact Us</a></li>
          <li><a href="#"><i class="fas fa-life-ring"></i> Help Center</a></li>
          <li><a href="#"><i class="fas fa-shield-alt"></i> Privacy Policy</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Connect</h3>
        <p>Stay up to date with our latest adventures and offers.</p>
        <div class="social-links">
          <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <div class="newsletter-form">
          <input type="email" class="newsletter-input" placeholder="Your Email">
          <button class="newsletter-button">Subscribe</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Ikigai World. All rights reserved.</p>
    </div>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
      const navLinks = document.querySelector('.nav-links');

      mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
      });
    });
  </script>
</body>
</html>