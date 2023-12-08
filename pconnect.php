<?php

$name=filter_input(INPUT_POST,'name');
$email =filter_input(INPUT_POST,'email');
$number=filter_input(INPUT_POST,'number');
$msgsub=filter_input(INPUT_POST,'msgsub');
$msg=filter_input(INPUT_POST,'msg');

$host='localhost';
$dbusername='root';
$dbpassword=''; 
$dbname='tie_portfolio';

$conn=new mysqli($host,$dbusername,$dbpassword,$dbname);
if(mysqli_connect_error()){
    die("Connetion error (".mysqli_connect_errno().')'.mysqli_connect_error());
}
else{
    $sql="INSERT INTO contact_info (name,email,number,msgsub,msg) VALUES ('$name','$email','$number','$msgsub','$msg')";
    if ($conn->query($sql)){
        echo "<script type='text/javascript'>alert('submitted successfully!')</script>";
        
    }
    else{
        echo "Error : ".$sql."<bar>",$conn->error;
    }
    $conn->close();
}
?>