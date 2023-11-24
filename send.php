<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHtml(true);

    $mail->setFrom('info@kpce.ru','Краевая палата судебных экспертиз');
    $mail->addAddress('idjpldmy1jqzjivosite-order@jivo-mail.com');
    $mail->addAddress('maks.pisckarev26@gmail.com');
    $mail->SubJect = 'Заявка из формы kpce.ru';

    $body = 'Заявка из формы';
    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя: </strong> ' .$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Телефон: </strong> ' .$_POST['phone'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Ошибка';
    } else{
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);