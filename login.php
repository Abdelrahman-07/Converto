<?php
// Code for handeling the login form generated data using php
 // check if the login button is clicked (not register) 
 if (isset($_POST['login_btn']) !== null) {
    
        // get the email and password entered by the user
        $email = $_POST['email_lgn'];
        $password = $_POST['password_lgn'];
        // validate the email
        if(! filter_var($email,FILTER_VALIDATE_EMAIL))
        {
            die("enter a valid email.");
        }
        // information needed to connect to the data base
        $username = "root";
        $pwd = "";
        $host = 'localhost';
        $db_name = 'usersdb';
        // establish connection to the data base
        $connection = mysqli_connect($host,$username,$pwd,$db_name);
        if(mysqli_connect_errno())
        {
            die("connection error".mysqli_connect_error());
        }
        // check if the email is not registered on the database
        $sql = "SELECT email FROM users WHERE email = '".$_POST['email_lgn']."'";
        $result = mysqli_query($connection, $sql) or exit(mysqli_error($connection));
        if(! mysqli_num_rows($result)) {
            exit('This email is not logged in');
           }

        // check if the password is correct
        $sql = "SELECT pass_word FROM users WHERE pass_word = '".$_POST['password_lgn']."'";
        $result = mysqli_query($connection, $sql) or exit(mysqli_error($connection));
        if(! mysqli_num_rows($result)) {
            exit('The password is incorrect');
            }

            echo "<br/>"."you are logged in now";

    
    }