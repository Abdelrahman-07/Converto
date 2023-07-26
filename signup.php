 
 <?php
 // Code for handeling the signup form generated data using php
 // check if the register button is clicked (not login) 
 if (isset($_POST['register_btn']) !== null) {
        // get the user information and store them in variables
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        // validate the email from the server side
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
        // check if there is a table with the same name of our table
        $sql = "SELECT * 
        FROM information_schema.tables
        WHERE table_schema = 'usersdb' 
        AND table_name = 'users'";
        $result = mysqli_query($connection, $sql);

        // if there is not a table with the same name create the table with the specified columns
        if(! mysqli_num_rows($result)) {
            $sql = "CREATE TABLE users (
                id INT(10) AUTO_INCREMENT PRIMARY KEY,
                first_name varchar(128),
                last_name varchar(128),
                email varchar(128),
                pass_word varchar(128))";
    
            $result = mysqli_query($connection, $sql);
        }

        
        // check if the email the user entered is already in the database
        $sql = "SELECT email FROM users WHERE email = '".$_POST['email']."'";
        $result = mysqli_query($connection, $sql);
        // stop if the email is in the database
        if(mysqli_num_rows($result)) {
         exit('This email is already being used');
        }

        // insert the user information in the table
        $sql = "insert into users(first_name,last_name, email,pass_word)
        values('$firstname','$lastname', '$email','$password')";
        $result = mysqli_query($connection, $sql);
       
        // get all the data in the table to print the table
        echo "registration successful"."<br/><br/>";
        $sql = "select * from users";
        $result = mysqli_query($connection, $sql);

        // print the first row of the table (the column headers)
        echo "<link rel='stylesheet' href='converter_style.css' />";
        echo "<table>"; // start a table tag in the HTML
        echo "<tr><td>";
        echo "ID";
        echo "</td><td>";
        echo "First Name";
        echo "</td><td>";
        echo "Last Name";
        echo "</td><td>";
        echo "Email";
        echo "</td><td>";
        echo "Password";
        echo "</td></tr>";
        // print all users information stored in the table
        while($row = mysqli_fetch_array($result)){   //Creates a loop to loop through results
            echo "<tr><td>" . 
            htmlspecialchars($row['id']) . "</td><td>" . 
            htmlspecialchars($row['first_name']) . "</td><td>".
            htmlspecialchars($row['last_name'])."</td><td>".
            htmlspecialchars($row['email'])."</td><td>".
            htmlspecialchars($row['pass_word'])."</td><td>"."</td></tr>";  //$row['index'] the index here is a field name
        }

            echo "</table>"; //Close the table in HTML

            mysqli_close($connection); //Make sure to close out the database connection

    }
  ?>
