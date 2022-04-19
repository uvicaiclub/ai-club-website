<?php
  //Obtain strings from javascript file
  $userInput = $_POST['userInput'];
  $previousUserInput = $_POST['previousUserInput'];

  //Establish database connection
  $db = mysqli_connect('localhost','test2','b&<p%y>5-$g%sB$T','ai_club') or die('Error connecting to MySQL server.');

    //Querey db first
  $query = "SELECT rating FROM chatbot WHERE user_input=\"".$previousUserInput."\" AND response=\"".$userInput."\";" ; 

  //Query request
  mysqli_query($db, $query) or die('Error querying database.');
  $result = mysqli_query($db, $query);

  //If this userInput & response are in the db, 
  //increase the rating and return.
  $row = mysqli_fetch_array($result);
  if($row[0] != null){
    
    //Increase the rating by 1
    $new_rating = $row[0] + 1;

    //Update String
    $update = "UPDATE chatbot SET rating=".$new_rating." WHERE user_input=\"". $previousUserInput . "\" AND response=\"" . $userInput ."\";";

    //Update request
    mysqli_query($db, $update) or die('Error querying database.');
    
    //Return userInput
    echo $userInput;
    return;
  }

  //Insert userInput
  $insert = "INSERT INTO chatbot(user_input, response, rating) VALUES (\"".$previousUserInput."\", \"".$userInput."\", 1)"; 
  
  //Insert new response into database
  mysqli_query($db, $insert) or die('Error inserting into database.');

  //Close db 
  mysqli_close($db);
  
  //Return userInput
  echo $userInput;
?>