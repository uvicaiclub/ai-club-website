<?php

  //Establish database connection
  $db = mysqli_connect('localhost','test2','b&<p%y>5-$g%sB$T','ai_club') or die('Error connecting to MySQL server.');

  $query = "SELECT * FROM chatbot";  

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