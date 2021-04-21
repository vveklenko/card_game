<?php
    include('../model/db_interaction.php');


    class Signin {
        private $login, $password, $error, $user;

        function __construct($login, $password) {
            $this->login = $login;
            $this->password = $password;
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
                    $arr = $this->user->get_info();
                    if(strcmp($this->password, $arr[1]) != 0) {
                        $this->error = "Wrong password!";
                        return false;
                    }
                    else 
                        return true;
                }
                else {
                    $this->error = "This user does not exist!";
                    return false;
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