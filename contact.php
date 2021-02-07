<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
$email = trim($_POST['email']);
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);
$tel = htmlspecialchars($_POST["tel"]);
$error = '';

if(!$name)
{
$error .= 'Пожалуйста введите ваше имя<br />';
}

// Проверка телефона
function ValidateMail($valueMail)
{
$regexMail = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
if($valueMail == "") {
return false;
} else {
$string = preg_replace($regexMail, "", $valueMail);
}
return empty($string) ? true : false;
}
if(!$email)
{
$error .= "Пожалуйста введите email<br />";
}
if($email && !ValidateMail($email))
{
$error .= "Введите корректный email<br />";
}

// if(!$error)
//
// // (length)
// if(!$message || strlen($message) < 1)
// {
// $error .= "Введите ваше сообщение<br />";
// }
if(!$error)
{


$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="Новая заявка с сайта GeokadRzn";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
/*
$message ="\n\nСообщение: ".$message."\n\nИмя: " .$name."\n\nТелефон: ".$tel."\n\n";
*/
$message1 ="\n\nИмя: ".$name."\n\nТелефон: " .$tel."\n\nE-mail: " .$email."\n\nСообщение: ".$message."\n\n";


$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From: Новая заявка GeokadRzn.ru<admin@geokad.ru>\n\n";
$mail = mail("geokad.sasovo@mail.ru", $subject1, $message1, $header);

if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>
