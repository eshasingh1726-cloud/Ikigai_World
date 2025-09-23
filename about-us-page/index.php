<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Our Website</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #6c63ff;
            --secondary-color: #f50057;
            --text-color: #333;
            --light-color: #f4f4f4;
            --dark-color: #333;
            --success-color: #28a745;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--light-color);
            overflow-x: hidden;
        }
        
        a {
            text-decoration: none;
            color: var(--primary-color);
        }
        
        ul {
            list-style: none;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }
        
        /* Header */
        header {
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--primary-color);
        }
        
        .nav-links {
            display: flex;
            align-items: center;
        }
        
        .nav-links li {
            margin-left: 2rem;
        }
        
        .nav-links a {
            color: var(--text-color);
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: var(--primary-color);
        }
        
        .user-actions a {
            padding: 0.5rem 1rem;
            border-radius: 5px;
            transition: all 0.3s;
        }
        
        .login-btn {
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
        }
        
        .login-btn:hover {
            background-color: var(--primary-color);
            color: white;
        }
        
        .signup-btn {
            background-color: var(--primary-color);
            color: white !important;
            margin-left: 1rem;
        }
        
        .signup-btn:hover {
            background-color: #5652d6;
        }
        
        .logout-btn {
            background-color: var(--secondary-color);
            color: white !important;
        }
        
        .logout-btn:hover {
            background-color: #d1004a;
        }
        
        .welcome-user {
            margin-right: 1rem;
            font-weight: 500;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, rgba(108, 99, 255, 0.9), rgba(245, 0, 87, 0.9)), url('https://source.unsplash.com/random/1600x900/?technology') no-repeat center center/cover;
            color: white;
            height: 70vh;
            display: flex;
            align-items: center;
            text-align: center;
        }
        
        .hero-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            animation: fadeInDown 1s ease;
        }
        
        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            animation: fadeInUp 1s ease;
        }
        
        .hero-btn {
            display: inline-block;
            background-color: white;
            color: var(--primary-color);
            padding: 0.8rem 2rem;
            border-radius: 5px;
            font-weight: 600;
            transition: all 0.3s;
            animation: fadeInUp 1.2s ease;
        }
        
        .hero-btn:hover {
            background-color: var(--secondary-color);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        /* Features Section */
        .features {
            padding: 5rem 0;
            background-color: white;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 4rem;
        }
        
        .section-title h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--primary-color);
        }
        
        .section-title p {
            max-width: 600px;
            margin: 0 auto;
            color: #777;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .feature-card {
            background-color: #f9f9f9;
            border-radius: 10px;
            padding: 2rem;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon {
            width: 70px;
            height: 70px;
            background-color: var(--primary-color);
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 1.5rem;
            font-size: 1.8rem;
        }
        
        .feature-card h3 {
            margin-bottom: 1rem;
            color: var(--dark-color);
        }
        
        .feature-card p {
            color: #777;
        }
        
        /* About Section */
        .about {
            padding: 5rem 0;
            background-color: #f9f9f9;
        }
        
        .about-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        
        .about-content h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            color: var(--primary-color);
        }
        
        .about-content p {
            margin-bottom: 1.5rem;
            color: #555;
        }
        
        .about-img {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .about-img img {
            width: 100%;
            height: auto;
            transition: transform 0.5s;
        }
        
        .about-img:hover img {
            transform: scale(1.05);
        }
        
        /* Footer */
        footer {
            background-color: var(--dark-color);
            color: white;
            padding: 4rem 0 2rem;
        }
        
        .footer-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }
        
        .footer-col h3 {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            position: relative;
            padding-bottom: 0.5rem;
        }
        
        .footer-col h3::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 50px;
            height: 2px;
            background-color: var(--primary-color);
        }
        
        .footer-col ul li {
            margin-bottom: 0.8rem;
        }
        
        .footer-col ul li a {
            color: #aaa;
            transition: color 0.3s;
        }
        
        .footer-col ul li a:hover {
            color: white;
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .social-links a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #444;
            color: white;
            transition: all 0.3s;
        }
        
        .social-links a:hover {
            background-color: var(--primary-color);
            transform: translateY(-3px);
        }
        
        .copyright {
            text-align: center;
            padding-top: 2rem;
            margin-top: 2rem;
            border-top: 1px solid #444;
            color: #aaa;
        }
        
        /* Animations */
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .navbar {
                flex-direction: column;
                padding: 1rem;
            }
            
            .nav-links {
                flex-direction: column;
                width: 100%;
                margin-top: 1rem;
            }
            
            .nav-links li {
                margin: 0.5rem 0;
                width: 100%;
                text-align: center;
            }
            
            .user-actions {
                margin-top: 1rem;
                display: flex;
                width: 100%;
                justify-content: center;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .about-container {
                grid-template-columns: 1fr;
            }
            
            .about-img {
                order: -1;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <nav class="navbar">
                <div class="logo">YourBrand</div>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <div class="user-actions" id="userActions">
                        <!-- User actions will be populated by JavaScript -->
                    </div>
                </ul>
            </nav>
        </div>
    </header>

    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1>Transform Your Digital Experience</h1>
                <p>We provide innovative solutions to help your business grow and thrive in the digital world.</p>
                <a href="#features" class="hero-btn">Explore Features</a>
            </div>
        </div>
    </section>

    <section class="features" id="features">
        <div class="container">
            <div class="section-title">
                <h2>Our Features</h2>
                <p>Discover the powerful tools and services we offer to enhance your productivity and success.</p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <h3>Fast Performance</h3>
                    <p>Lightning-fast speeds ensure your users have the best experience possible while using our platform.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Secure & Reliable</h3>
                    <p>Advanced security measures keep your data protected 24/7, giving you peace of mind.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-cog"></i>
                    </div>
                    <h3>Customizable</h3>
                    <p>Tailor our solutions to meet your specific needs with flexible customization options.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="about" id="about">
        <div class="container">
            <div class="about-container">
                <div class="about-content">
                    <h2>About Us</h2>
                    <p>Founded in 2020, YourBrand has been at the forefront of digital innovation, helping businesses of all sizes achieve their goals through cutting-edge technology solutions.</p>
                    <p>Our team of experts is passionate about creating tools that make a difference. We believe in simplicity, efficiency, and exceptional user experiences.</p>
                    <p>With clients spanning across various industries worldwide, we continue to expand our reach and improve our services to meet the evolving needs of the digital landscape.</p>
                </div>
                <div class="about-img">
                    <img src="images/
/api/placeholder/600/400" alt="About Our Company">
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <div class="section-title">
                <h2>Contact Us</h2>
                <p>Have questions or ready to get started? Reach out to our team today.</p>
            </div>
            <div class="contact-form">
                <form id="contactForm">
                    <div class="form-group">
                        <input type="text" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Subject">
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-container">
                <div class="footer-col">
                    <h3>YourBrand</h3>
                    <p>Transforming the digital landscape with innovative solutions designed for modern businesses.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Mobile Applications</a></li>
                        <li><a href="#">UI/UX Design</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Cloud Services</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Contact Info</h3>
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i> 123 Business Street, Tech City</li>
                        <li><i class="fas fa-phone"></i> +1 (555) 123-4567</li>
                        <li><i class="fas fa-envelope"></i> info@yourbrand.com</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2025 YourBrand. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Simple authentication simulation
        document.addEventListener('DOMContentLoaded', function() {
            const userActions = document.getElementById('userActions');
            
            // Check if user is logged in (normally would use actual auth)
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const username = localStorage.getItem('username');
            
            if (isLoggedIn && username) {
                userActions.innerHTML = `
                    <span class="welcome-user">Welcome, ${username}</span>
                    <a href="#" class="logout-btn">Logout</a>
                `;
                
                // Add logout functionality
                document.querySelector('.logout-btn').addEventListener('click', function(e) {
                    e.preventDefault();
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('username');
                    location.reload();
                });
            } else {
                userActions.innerHTML = `
                    <a href="#" class="login-btn">Login</a>
                    <a href="#" class="signup-btn">Sign Up</a>
                `;
                
                // Add login functionality (simulation)
                document.querySelector('.login-btn').addEventListener('click', function(e) {
                    e.preventDefault();
                    const username = prompt('Enter your username:');
                    if (username) {
                        localStorage.setItem('isLoggedIn', 'true');
                        localStorage.setItem('username', username);
                        location.reload();
                    }
                });
                
                // Add signup functionality (would typically go to signup page)
                document.querySelector('.signup-btn').addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('Sign up functionality would be implemented here!');
                });
            }
            
            // Form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                });
            }
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    if (this.getAttribute('href') !== '#') {
                        e.preventDefault();
                        document.querySelector(this.getAttribute('href')).scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
        
        // Add additional contact form styling when document loaded
        document.addEventListener('DOMContentLoaded', function() {
            const style = document.createElement('style');
            style.textContent = `
                .contact {
                    padding: 5rem 0;
                    background-color: white;
                }
                
                .form-group {
                    margin-bottom: 1.5rem;
                }
                
                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 1rem;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    font-family: inherit;
                    font-size: 1rem;
                }
                
                .form-group textarea {
                    resize: vertical;
                }
                
                .submit-btn {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    transition: all 0.3s;
                }
                
                .submit-btn:hover {
                    background-color: #5652d6;
                    transform: translateY(-3px);
                }
                
                .contact-form {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 2rem;
                    background-color: #f9f9f9;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                }
                
                @media (max-width: 768px) {
                    .contact-form {
                        padding: 1.5rem;
                    }
                }
            `;
            document.head.appendChild(style);
        });
    </script>
</body>
</html>