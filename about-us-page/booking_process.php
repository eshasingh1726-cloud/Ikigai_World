
<?php

session_start();
include 'db.php';

$user_id = $_SESSION['user_id']; // must be set during login

// Example: Insert booking with user_id
$stmt = $conn->prepare("INSERT INTO bookings (user_id, package_name, travel_date, num_people, total_cost, status, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())");
$stmt->bind_param("isssds", $user_id, $package_name, $travel_date, $num_people, $total_cost, $status);
$stmt->execute();


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['razorpay_payment_id'])) {
    $razorpay_payment_id = $_POST['razorpay_payment_id'];

    // Get user data from session or form
    $user_id = $_SESSION['user_id']; // Make sure this is set at login
    $name = $_POST['name'];
    $email = $_POST['email'];
    $trip_name = $_POST['trip_name'];
    $booking_date = date("Y-m-d");
    $status = "Confirmed";

    // Insert booking into the database
    $insert_booking_query = "INSERT INTO bookings (user_id, name, email, trip_name, booking_date, status, razorpay_payment_id)
                             VALUES ('$user_id', '$name', '$email', '$trip_name', '$booking_date', '$status', '$razorpay_payment_id')";

    if (mysqli_query($conn, $insert_booking_query)) {
        // Send email via EmailJS (handled in JS)
        $email_message = "Hi $name,\n\nThank you for booking '$trip_name' with Ikigai World. Your booking is confirmed.\n\nRegards,\nIkigai Team";
        ?>
        <!DOCTYPE html>
        <html>
        <head>
            <title>Booking Confirmation</title>
            <script src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
            <script type="text/javascript">
                (function(){
                    emailjs.init("user_nTAwGLOIr9EPR3Mw4"); // Replace with your actual EmailJS public key
                })();
            </script>
        </head>
        <body>
            <h2>Booking Confirmed!</h2>
            <p>An email confirmation has been sent to <?php echo $email; ?>.</p>

            <script type="text/javascript">
                emailjs.send("service_5qjbtgf", "template_6qf18jd", {
                    to_email: "<?php echo $email; ?>",
                    from_name: "Ikigai World",
                    message: "<?php echo $email_message; ?>"
                }).then(function(response) {
                    console.log("Email sent successfully:", response);
                }, function(error) {
                    console.log("Email sending failed:", error);
                });
            </script>
        </body>
        </html>
        <?php
    } else {
        echo "Booking failed. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
