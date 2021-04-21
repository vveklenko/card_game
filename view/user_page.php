<?php

require_once '../router.php';

session_start();

if (!isset($_SESSION['name'])) {
    $router = new Router("signin_page.php");
    $router->render();
    exit;
}
?>

<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Successful sign in</title>
    <link rel='stylesheet' href='../css/style.css'>
</head>
<body>
    <div>
        <h1>Wellcome to MarvelCardBatlle</h1>
        <form action="index.php" method='post' style="text-align: center;">
        <?php $img = "https://cdn4.iconfinder.com/data/icons/famous-characters-add-on-vol-1-flat/48/Famous_Character_-_Add_On_1-08-512.png"; ?>
            <img src = <?php echo $img;?> > <br>
            <span style="font-size: 25px; color: red; text-align: center;"><?php echo $_SESSION['name']; ?></span> <br>
            <input name='search' type='submit' id='search' value='Seacrh game' style="margin-top: 30px;"> <br>
            <p><input name='signout' type='submit' id='signin' value='Sign out'></p>
        </form>
    </div>
</body>
</html>