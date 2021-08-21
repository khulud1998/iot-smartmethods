<?php
error_reporting(0);
$servername = "localhost";
$dbname = "arm-control";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['save'])){

$M1 = $_POST['M1'];
$M2 = $_POST['M2'];
$M3 = $_POST['M3']; 
$M4 = $_POST['M4']; 
$M5 = $_POST['M5'];
$M6 = $_POST['M6'];


$sql = "INSERT INTO motors (M1, M2, M3, M4, M5, M6)
VALUES ('$M1', '$M2', '$M3', '$M4', '$M5', '$M6')";


if ($conn->query($sql) == TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

}

if(isset($_POST['run']))
{
 
  $sql = "INSERT INTO run (on_off) values ('1')";

  if ($conn->query($sql) == TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  $conn->close();   
}

?>
