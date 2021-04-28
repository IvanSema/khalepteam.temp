<?php
 
/* https://api.telegram.org/bot1316617580:AAHzK6mnrYhooPXBObwqn8wosfWI9L8noQc/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее
https://api.telegram.org/bot1316617580:AAHzK6mnrYhooPXBObwqn8wosfWI9L8noQc/sendMessage?chat_id=-451063216&parse_mode=html&text=228
*/
 
//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$name = $_POST['name'];
$phone = $_POST['num'];

//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1316617580:AAHzK6mnrYhooPXBObwqn8wosfWI9L8noQc";
 
//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-451063216";
 
//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
);
 
//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  if($value == ''){
      echo 'Not Valid';
      die();
  } else{
    $txt .= "<b>".$key."</b> ".$value."%0A";
}
};
//Осуществляется отправка данных в переменной $sendToTelegram

echo "{$txt}";


if(!fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r")){
    echo 'Something is wrong, please call +380....';
    die();
}

header('Location: http://www.lovevscash.com.ua/');
exit();


//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
?>