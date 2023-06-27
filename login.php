<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Database details
    $host = "localhost";
    $username = "root";
    $db_password = "";
    $dbname = "gtdatabase";

    // Creating a connection
    $con = mysqli_connect($host, $username, $db_password, $dbname);

    // Check connection
    if (!$con) {
        die("Connection failed!" . mysqli_connect_error());
    }

    // Prepare the SQL statement using a prepared statement
    $stmt = mysqli_prepare($con, "SELECT email, password FROM granturismotable WHERE email = ?");

    // Bind the parameter to the prepared statement
    mysqli_stmt_bind_param($stmt, "s", $email);

    // Execute the prepared statement
    mysqli_stmt_execute($stmt);

    // Bind the result to variables
    mysqli_stmt_bind_result($stmt, $storedEmail, $storedPassword);

    // Fetch the result
    mysqli_stmt_fetch($stmt);

    // Verify the password
    if ($storedPassword && password_verify($password, $storedPassword)) {
        echo "Login successful!";
        header("Location: another-page.php"); // Replace "another-page.php" with the actual page URL
        exit; // Terminate the current script to ensure the redirect happens
    } else {
        echo "Invalid email or password.";
    }

    // Close the prepared statement
    mysqli_stmt_close($stmt);

    // Close the database connection
    mysqli_close($con);
}
?>
