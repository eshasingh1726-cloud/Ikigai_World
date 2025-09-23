<?php
session_start();
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: login.php");
    exit;
}
?>
<style>
.container {
    max-width: 500px;
    margin: 50px auto;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    font-family: 'Segoe UI', sans-serif;
}

h2 {
    text-align: center;
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
}

input[type="text"],
input[type="email"],
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn-primary,
.btn-secondary {
    display: inline-block;
    padding: 10px 16px;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

.btn-primary {
    background-color: #3498db;
}

.btn-secondary {
    background-color: #9b59b6;
}

.btn-primary:hover {
    background-color: #2980b9;
}

.btn-secondary:hover {
    background-color: #8e44ad;
}
</style>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Settings</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Settings</h2>
        <form action="save_settings.php" method="POST">
            <div class="form-group">
                <label>
                    <input type="checkbox" name="newsletter" checked>
                    Receive newsletter emails
                </label>
            </div>
            <div class="form-group">
                <label>Theme</label>
                <select name="theme">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <div class="form-group">
                <input type="submit" class="btn-primary" value="Save Settings">
            </div>
        </form>
        <a href="profile.php" class="btn-secondary">Back to Profile</a>
    </div>
</body>
</html>
