<?php
    include('../model/model.php');

    class DBinterection extends Model {
        private $login, $password, $name, $email;

        function __construct() {
            parent::__construct();
        }

        function __destruct() {
            $this->db_connection = NULL;
        }

        function check_connection() {
            if($this->connection->getConnectionStatus()) 
                return true;
            else
                return false;
        }

        function find_login($login) {
            $inquiry = $this->connection->connection->query("SELECT * FROM users WHERE login=\"$login\";");
            $check = $inquiry->fetch(PDO::FETCH_ASSOC);

            if($check == NULL) {
                return false;
            }

            $this->login = $login;
            $this->password = $check['password'];
            $this->name = $check['name'];
            $this->email = $check['email'];

            return true;
        }

        function find_email($email) {
            $inquiry = $this->connection->connection->query("SELECT * FROM users WHERE email=\"$email\";");
            $check = $inquiry->fetch(PDO::FETCH_ASSOC);

            if($inquiry == NULL) {
                return false;
            }

            return true;
        }

        function save_to_db($login, $password, $name, $email) {
            $sql = 'INSERT INTO users(login, password, name, email) VALUES ("'.$login.'","'.$password.'","'.$name.'","'.$email.'");';
            $this->connection->connection->query($sql);
        }

        function get_info() {
            $res = array($this->login, $this->password, $this->name, $this->email);
            return $res;
        }




    }


?>