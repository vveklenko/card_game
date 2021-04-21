<?php

    session_start();

    include('../router.php');

    if (isset($_SESSION['name'])) {
        $router = new Router("user_page.php");
        $router->render();
        exit;
    }

    $error = "";

    // if(isset($_POST['signin'])) {
    //     $user = new Signin($_POST['login'], $_POST['password']);
    //     $name = $_POST['login'];

    //     if($user->valid()) {
    //         $_SESSION['name'] = $name;
    //         $user->execute('user_page.php');
    //         exit;
    //     }
    //     else {
    //         $error = $user->show_error();
    //     }
    // }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='../css/style.css'>
    <title>Sign in</title>
</head>
<body>
    <div>
        <h1>Sign in</h1>
        <form action="index.php" method='post'>
            <p><input required name='login' type='text' placeholder='Input login...' id='login' pattern='^[\w\d]+$'></p>
            <p><input required name='password' type='password' placeholder='Input password...' id='password' pattern='^[\w\d]+$'></p>
            <p><input name='signin' type='submit' id='signin' value='Sign in'></p>
            <p id="link"><a href="./signup_page.php">Follow this link to sign up</a></p>
        </form>
        <p id='error'>
            <?php echo $error; ?>
        </p>
    </div>
</body>
</html>