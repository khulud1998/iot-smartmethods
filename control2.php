<?php
$servername = "localhost";
$dbname = "direction-control";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

if(isset($_POST['right'])){
    $stmt=$conn->prepare("INSERT INTO directions(D) VALUES('R')");
    $stmt->execute();
    echo"RIGHT"; 
 }
 elseif(isset($_POST['left'])){
	 	 $stmt=$conn->prepare("INSERT INTO directions(D) VALUES('L')");
	 $stmt->execute();
	 echo"LEFT";
 }
 elseif(isset($_POST['forward'])){
	 	 $stmt=$conn->prepare("insert into directions(D) values('F')");
	 $stmt->execute();
     echo"FORWARD";
 }
 elseif (isset($_POST['backward'])){
	 	 $stmt=$conn->prepare("insert into directions(D) values('B')");
	 $stmt->execute();
     echo "BACKWARD";
 }
 elseif(isset($_POST['stop'])){
	 	 $stmt=$conn->prepare("insert into directions(D) values('S')");
	 $stmt->execute();
	 echo "STOP";
 }
 else{ echo" try again";}
?>
