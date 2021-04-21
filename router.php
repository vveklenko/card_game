<?php
    class Router {
        private $url;

        function __construct($url) {
            $this->url = $url;
        }

        function render() {
            ob_start();
            header("Location: ./$this->url");
            ob_clean();
        }
    }
?>