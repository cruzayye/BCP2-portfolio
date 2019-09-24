<?php 
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $mailTo = "mail@designercode.me";
  $headers = "From: ".$email;
  $txt = "You have received an email form ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.html?mailsend");
}
?>