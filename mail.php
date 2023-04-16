<?php
//Проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    //Получаем параметры, посланные с javascript
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    //Создаем переменную с содержанием письма
    $content = $name . ' оставил заявку на бронирование столика. Его телефон: ' . $phone;

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    //Первый параметр - кому отправляем письмо, второй - тема исьма, третий - содержание
    $success = mail("saimon@simonychev.site", 'Запрос на бронирование столика', $content, $headers);

    if ($success) {
        //Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо оправленно";
    } else {
        // Отдаем ошибку с кодом 500 {internal server error).
        http_response_code(500);
        echo "Письмо не оправленно";
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса е поддерживается сервером";
}