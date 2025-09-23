<?php
session_start();
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: login.php");
    exit;
}

// Dummy data (replace with database fetch if needed)
$username = $_SESSION["username"];
$email = "you@example.com"; // replace with actual email from DB if available
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Edit Profile</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Edit Profile</h2>
        <form action="update_profile.php" method="POST">
            <div class="form-group">
                <label>Username</label>
                <input type="text" name="username" value="<?= htmlspecialchars($username); ?>" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" value="<?= htmlspecialchars($email); ?>" required>
            </div>
            <div class="form-group">
                <input type="submit" class="btn-primary" value="Save Changes">
            </div>
        </form>
        <a href="profile.php" class="btn-secondary">Back to Profile</a>
    </div>
</body>
</html>
