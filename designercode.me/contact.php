<?php 
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  //gmail blocks php emails need to replace email
  $mailTo = "johnnyc010392@gmail.com";
  $headers = "from: ".$email;
  $txt = "You have received an email form ".$name.".\n\n".$message;


  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailsend");
}
?>