<?php
/* https://api.telegram.org/bot5541879256:AAGMUIhbfdD6ypl5jkCPy8F_dFLmY4oWjrA/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "5541879256:AAGMUIhbfdD6ypl5jkCPy8F_dFLmY4oWjrA";
$chat_id = "-964836101";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header('Location: thank-you.html');
} else {
    echo "Error";
}
?>