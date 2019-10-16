<?php

// step 0: Validate data

// step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: prepare & run the query
$stmt = $db->prepare(
  'INSERT INTO Patient
    (patientGuid, firstName, lastName, dob, sexAtBirth)
  VALUES (?,?,?,?,?)'
);

$guid = Uuid::uuid4()->toString();

$stmt->execute([
  U$guid, //i.e 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
  $_POST['patientGuid'],
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['dob'],
  $_POST['sexAtBirth'],
]);

// Step 4: Output
header('HTTp/1.1 303 See Other');
header('Location: ../records/?guid='.$guid);
