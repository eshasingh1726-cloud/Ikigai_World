<?php
session_start();

if (!isset($_SESSION['booking'])) {
    echo "<div style='padding:20px; color:red;'>No booking found.</div>";
    exit;
}

$booking = $_SESSION['booking'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Booking Confirmation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
<div class="container mt-5">
    <div class="card shadow p-4">
        <h2 class="text-success">Booking Confirmed!</h2>
        <p><strong>Name:</strong> <?= htmlspecialchars($booking['name']) ?></p>
        <p><strong>Email:</strong> <?= htmlspecialchars($booking['email']) ?></p>
        <p><strong>Phone:</strong> <?= htmlspecialchars($booking['phone']) ?></p>
        <p><strong>Package:</strong> <?= htmlspecialchars($booking['package']) ?></p>
        <p><strong>Travel Date:</strong> <?= htmlspecialchars($booking['date']) ?></p>
        <p><strong>Number of Travelers:</strong> <?= htmlspecialchars($booking['travelers']) ?></p>
        <p><strong>Total Cost:</strong> ₹<?= htmlspecialchars($booking['price']) ?></p>
        <a href="profile.php" class="btn btn-primary mt-3">View Past Bookings</a>
    </div>
</div>
</body>
</html>
