<?php
if (isset($_POST['submit'])) {
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
    $stmt = mysqli_prepare($con, "INSERT INTO granturismotable (id, email, password) VALUES (?, ?, ?)");

    // Bind the parameters to the prepared statement
    mysqli_stmt_bind_param($stmt, "iss", $id, $email, $password);

    // Set the values of the parameters
    $id = 0;
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Execute the prepared statement
    if (mysqli_stmt_execute($stmt)) {
        echo "Message has been sent successfully!";
        header("Location: account.php"); // Replace "login.php" with the actual login page URL
        exit; // Terminate the current script to ensure the redirect happens
    } else {
        echo "Error: " . mysqli_error($con);
    }
    

    // Close the prepared statement
    mysqli_stmt_close($stmt);

    // Close the database connection
    mysqli_close($con);
}
?>
