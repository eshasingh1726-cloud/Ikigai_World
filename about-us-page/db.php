<?php
$host = "localhost";
$dbname = "user_auth";
$user = "root";
$pass = "";

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
