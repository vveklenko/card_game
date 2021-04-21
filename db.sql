DROP DATABASE IF EXISTS card_game;
CREATE DATABASE IF NOT EXISTS card_game;
CREATE USER IF NOT EXISTS 'vveklenko'@'localhost' IDENTIFIED WITH mysql_native_password BY 'securepass';
GRANT ALL PRIVILEGES ON * . * TO 'vveklenko'@'localhost';
FLUSH PRIVILEGES;
USE card_game;
CREATE TABLE IF NOT EXISTS users 
(
    users_id    INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    login       VARCHAR(50) UNIQUE  NOT NULL,
    password    VARCHAR(50) NOT NULL,
    name        VARCHAR(100) NOT NULL,
    email       VARCHAR(50) UNIQUE  NOT NULL
);