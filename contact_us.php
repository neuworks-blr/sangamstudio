<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

try{
	
	$data = "Name : ".$name."\r\n";
	$data .= "Email : ".$email."\r\n";
	$data .= "Message : ".$message."\r\n";
	
	// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: Sangam Studio <no-reply@sangamstudio.in>'. "\r\n";
$headers .= 'Cc: sujeetbcet@gmail.com' . "\r\n";
	
	$mail = mail('sujeet5000@gmail.com', 'Sangam Studio - Contact-Us request', $data, $headers);
	

echo "<script type='text/javascript'>
alert('Request sent successfully');
window.history.go(0)
</script>";
}

catch(Exception $e){
	echo 'Message: '.$e->getMessage();
}





?>