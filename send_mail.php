<?php
    $senderData = file_get_contents("php://input");
    $request = json_decode($senderData);

    $user_name=$request->senderName;
    $user_email=$request->senderEmail;
    $user_message=$request->senderMessage;

    $to_me="ravichs473@gmail.com";
    $message_me="Dear Ravi, \n".$user_message."\n\nThis message was sent by ".$user_email;
    $subject_me="Message from your visitor - ".$user_name;

    $to_sender=$user_email;
    $message_sender=$user_name.",\n\n Thanks for visiting my website www.raviteja73.com and sending me a message.\n\nThanks,\nRavi Teja.";
    $subject_sender="Thanks for visiting my website";

    mail($to_me,$subject_me,$message_me);
    mail($to_sender,$subject_sender,$message_sender);

    //encoding the JSON response that is sent to the client
    	header('Content-type: application/json; charset=utf-8');
    	echo json_encode($request, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
?>