<?php

session_start();

if (isset($_SESSION['name'])) {
    $user->execute('user_page.php');
    $router->render();
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <div>
        <h1>Sign up</h1>
        <form action="./index.php" method="post">
            <p><input required name="login" type="text" placeholder="Input login..." id="login" pattern="^[\w\d]+$"></p>
            <p><input required name="password" type="password" placeholder="Input password..." id="password" pattern="^[\w\d]+$"></p>
            <p><input required name="confirm" type="password" placeholder="Confirm password..." id="confirm" pattern="^[\w\d]+$"></p>
            <p><input required name="name" type="text" placeholder="Input name..." id="name" pattern="^[\w\d ]+$"></p>
            <p><input required name="email" type="email" placeholder="Input email..." id="email" pattern="^[\w\d\.\@_\-]+$"></p>
            <p>
                <button id="signin" onclick="document.location='./signin_page.php'">
                    Back
                </button>
                <input name="create" type="submit" id="create" value="Sign up">
            </p>
        </form>
        <p id="error">
            <?php echo $_SESSION['error']?>
        </p>
        
    </div>
    
</body>
</html>