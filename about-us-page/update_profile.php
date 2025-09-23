<?php
session_start();
require_once 'includes/config.php';
require_once 'includes/db_connect.php';

// Check if user is logged in
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: login.php");
    exit;
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userId = $_SESSION["id"];
    $newUsername = trim($_POST["username"]);
    $newEmail = trim($_POST["email"]);

    // Basic validation
    if (empty($newUsername) || empty($newEmail)) {
        echo "All fields are required.";
        exit;
    }

    // Sanitize input
    $newUsername = htmlspecialchars($newUsername, ENT_QUOTES, 'UTF-8');
    $newEmail = htmlspecialchars($newEmail, ENT_QUOTES, 'UTF-8');

    // Prepare update statement
    $sql = "UPDATE users SET username = ?, email = ? WHERE id = ?";
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("ssi", $newUsername, $newEmail, $userId);

        if ($stmt->execute()) {
            $_SESSION["username"] = $newUsername; // Update session name
            header("Location: profile.php?updated=1");
            exit;
        } else {
            echo "Something went wrong. Please try again later.";
        }

        $stmt->close();
    } else {
        echo "Database error: " . $conn->error;
    }

    $conn->close();
} else {
    echo "Invalid request.";
}
?>
