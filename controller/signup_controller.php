<?php

    class Signup {
        private $login, $password, $confirm, $name, $email, $user, $error;

        function __construct($login, $password, $confirm, $name, $email) {
            $this->login = $login;
            $this->password = $password;
            $this->confirm = $confirm;
            $this->name = $name;
            $this->email = $email;
            $this->user = new DBinterection();
        }

        function __destruct() {
            $this->user = NULL;
        }

        function show_error() {
            return $this->error;
        }

        function valid() {
            if ($this->user->check_connection() == true) {
                if($this->user->find_login($this->login) == true) {
                    $this->error = "This user already exists!";
                    return false;
                }
                else if(strcmp($this->password, $this->confirm) != 0) {
                    $this->error = "Passwords are not match!";
                    return false;
                }
                // else if($this->user->find_email($this->email) == true) {
                //     $this->error = "This email is already in use!";
                //     return false;
                // }
                else {
                    $this->user->save_to_db($this->login, $this->password, $this->name, $this->email);
                    return true;
                }
                    
            }
            else {
                $this->error = "Can not connect to database!";
                return false;
            }
        }

        function execute($url) {
            $transition = new Router($url);
            $transition->render();
        }
    }


?>