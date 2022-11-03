<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "biodata";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
function iud_data($query) {
    $servername = "localhost";
$username = "root";
$password = "";
$dbname = "biodata";
    $message="";
    $conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
    if ($conn->connect_error) 
     {
        die("Connection failed: " . $conn->connect_error);
      }
      $sql=$query; 
      if ($conn->query($sql) === TRUE) 
      {
        $message="sucess";
      } else 
      {
        //echo "Error: " . $sql . "<br>" . $conn->error;
        $message="error";
      }
      $conn->close();
      return $message;
    }
?>