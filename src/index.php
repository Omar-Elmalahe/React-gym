<?php
// استعلم عن قاعدة البيانات واسترجاع البيانات
$data = fetchFromDatabase();

// تحويل البيانات إلى تنسيق JSON
$json = json_encode($data);

// إرجاع البيانات كاستجابة JSON
header('Content-Type: application/json');
echo $json;
?>