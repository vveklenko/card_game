<?php

include('../router.php');
include('../controller/signin_controller.php');
include('../controller/signup_controller.php');

session_start();

if (isset($_POST['signin'])) {

    $user = new Signin($_POST['login'], $_POST['password']);

    if ($user->valid()) {
        $_SESSION['name'] = $_POST['login'];
        $router = new Router("user_page.php");
        $router->render();
        exit;
    } else {
        $error = $user->show_error();
    }
}

if (isset($_POST['create'])) {
    $user = new Signup($_POST['login'], $_POST['password'], $_POST['confirm'], $_POST['name'], $_POST['email']);

    if ($user->valid() == true) {
        $_SESSION['name'] = $_POST['login'];
        unset($_SESSION['error']);
        $router = new Router("signin_page.php");
        $router->render();
        exit;
    }
    else {
        $_SESSION['error'] = $user->show_error();
        $router = new Router("signup_page.php");
        $router->render();
        exit;
    }
}

if(isset($_POST['search'])) {
    $router = new Router("game.php");
    $router->render();
    exit;
}

if (isset($_POST['signout'])) {
    unset($_SESSION['name']);
}

if (!isset($_SESSION['name'])) {
    $router = new Router("signin_page.php");
    $router->render();
    exit;
} else {
    $router = new Router("user_page.php");
    $router->render();
    exit;
}
