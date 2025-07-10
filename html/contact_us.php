<?php

$name = $_REQUEST['name'];
$phone = $_REQUEST['phone'];
$email = $_REQUEST['email'];
$company = $_REQUEST['company'];
$message = $_REQUEST['message'];

try{
	
	$data = "Name : ".$name."\r\n";
	$data .= "Phone : ".$phone."\r\n";
	$data .= "Email : ".$email."\r\n";
	$data .= "Company : ".$company."\r\n";
	$data .= "Message : ".$message."\r\n";
	
	// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: Pepo <demo@pepo.one>'. "\r\n";
$headers .= 'Cc: sujeetbcet@gmail.com' . "\r\n";
	
	$mail = mail('piyushpriyam54@gmail.com', 'Pepo - Request for Demo', $data, $headers);
	

echo "<script type='text/javascript'>
alert('Request sent successfully');
window.history.go(0)
</script>";
}

catch(Exception $e){
	echo 'Message: '.$e->getMessage();
}





?>