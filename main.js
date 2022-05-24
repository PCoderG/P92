function addUser() {
    player_1_name=document.getElementById("player1-name-input").value;
    player_2_name=document.getElementById("player2-name-input").value;
    localStorage.setItem("player1_name",player_1_name);
    localStorage.setItem("player2_name",player_2_name);
    player1_score = 0;
	player2_score = 0;
  localStorage.setItem("Player 1 score",player1_score);
  localStorage.setItem("Player 2 score",player2_score);

    window.location = "game.html";

}