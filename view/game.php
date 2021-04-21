<?php

session_start();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
    <link rel="stylesheet" href="../css/game.css">
</head>

<body>
    <div class="game">
        <div class="enemy-field">
            <div class="enemy-player-info">
                <div class="enemy-main-health js_enemy_health">20</div>
                <img class="enemy-avatar js_enemy_main" src="../icons/enemy-avatar.png" alt="avatar">
            </div>
            <div class="enemy-info">
                <h2 class="username">Bot</h2>
                <span class="stones">Elixir: <span class="js_enemy_elixir"></span></span>
            </div>
            <div class="enemy-cards-list js_enemy_cards_list">
            </div>
        </div>

        <div class="my-field">
            <div class="player-info">
                <div class="main-health js_my_health">20</div>
                <img class="my-avatar js_my_main" src="../icons/my-avatar.png" alt="avatar">
            </div>
            <div class="my-info">
                <h2 class="username"><?php echo $_SESSION['name']; ?></h2>
                <span class="stones">Elixir: <span class="js_my_elixir"></span></span>
            </div>
            <div class="my-cards-list js_my_cards_list">
            </div>
        </div>
    </div>

    <div class="time js_time">30</div>

    <div class="results-modal js_results_modal">
        <form method="POST" action="user_page.php">
            <div class="form-info">
                <h3 class="js_modal_info">WIN!</h3>
            </div>
            <input type="submit" class="submit-btn" value="GOOD">
        </form>
    </div>

    <img src="https://www.nicepng.com/png/full/110-1108890_start-button-game-start-button-png.png" alt="start" class="start-alert">
    <script src="../js/game.js"></script>
</body>

</html>
