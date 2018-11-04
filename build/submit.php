<?php

error_reporting(E_ERROR);

$mailTo = 'test@test.ru';

$arResult = array(
	 "STATUS" => 0,
   "MSG" => "",
	 "SUCCESSFULLY" => "",
	 "FORM_TITLE" => "",
	 "ERROR_FIELDS" => array(),
	 "RELOAD" => 0,
);

if (empty($_POST['name'])) {
	$arResult["ERROR_FIELDS"][] = 'name';
}
if (empty($_POST['phone'])) {
	$arResult["ERROR_FIELDS"][] = 'phone';
}
if (empty($_POST['front'])) {
	$arResult["ERROR_FIELDS"][] = 'front';
}
if (empty($_POST['front_side'])) {
	$arResult["ERROR_FIELDS"][] = 'front_side';
}
if (empty($_POST['back'])) {
	$arResult["ERROR_FIELDS"][] = 'back';
}
if (empty($_POST['mark'])) {
	$arResult["ERROR_FIELDS"][] = 'mark';
}
if (empty($_POST['model'])) {
	$arResult["ERROR_FIELDS"][] = 'model';
}
if (empty($_POST['cost'])) {
	$arResult["ERROR_FIELDS"][] = 'cost';
}

if (empty($arResult["ERROR_FIELDS"])) {
	$headers  = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "From: \r\n";
	$headers .= "Reply-To: ".$mailTo."\r\n";
	$theme = 'Запись на тонировку';
	$letter = '<strong>Данные заказа</strong>'."<br/><br/>";
	$letter .= 'Имя: <strong>'. $_POST['name']."</strong><br/>";
	$letter .= 'Телефон: <strong>'. $_POST['phone']."</strong><br/><br/>";
	$letter .= '<strong>Зона тонировки</strong>'."<br/>";
	$letter .= '<strong>Лобовое: </strong>'. $_POST['front']."<br/>";
	$letter .= '<strong>Передние боковые: </strong>'. $_POST['front_side']."<br/>";
	$letter .= '<strong>Задняя полусфера: </strong>'. $_POST['back']."<br/><br/>";
	$letter .= '<strong>Марка: </strong>'. $_POST['mark']."<br/>";
	$letter .= '<strong>Модель: </strong>'. $_POST['model']."<br/><br/>";
	$letter .= '<strong>Стоимость: </strong>'. $_POST['cost']." руб.<br/>";
	if(mail($mailTo, $theme, $letter, $headers)) {
		$arResult["STATUS"] = 1;
		$arResult["FORM_TITLE"] = 'Сообщение отправлено';
		$arResult["SUCCESSFULLY"] = 'Сообщение успешно отправлено. Наши менеджеры свяжутся с вами в ближайшее время';
	} else {
		$arResult["MSG"] = 'Ошибка отправки сообщения';
	}
} else {
	$arResult["MSG"] = 'Заполните обязательные поля формы';
}

exit(json_encode($arResult));
