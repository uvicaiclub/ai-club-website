<?php

  //Establish database connection
  $db = mysqli_connect('localhost','debrah','','chatbot') or die('Error connecting to MySQL server.');

  //Query string 
  $query = "SELECT * FROM user_strings";  

  //Query request
  mysqli_query($db, $query) or die('Error querying database.');
  $result = mysqli_query($db, $query);
  
    // Close database
  mysqli_close($db);

  $arr = array();
  while($row = mysqli_fetch_array($result)){
    $arr[] = $row;
  }

    echo json_encode($arr);
?>