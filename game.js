player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = localStorage.getItem("Player 1 score");
player2_score = localStorage.getItem("Player 2 score");

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
function send_add() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) + parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " + "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";

}
function send_sub() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) - parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " - "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}
function send_mul() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " × "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}
function send_div() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) / parseInt(number2);
	console.log(actual_answer);


  question_number = "<h4>" + number1 + " ÷ "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = number1;
	document.getElementById("number2").value = number2;
  document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";

}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
question_turn = "player1";
answer_turn = "player2";

function check() {
  answer_user =  document.getElementById("input_check_box").value;
  if (answer_user == actual_answer) {
    if (question_turn = "player1") {
      player2_score =player2_score+2;
      answer_turn = "player1";
      question_turn = "player2";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
    } else {
      player1_score =player1_score+2;
      answer_turn = "player2";
      question_turn = "player1";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
    }
  } else {
    if (question_turn = "player1") {
      player2_score =player2_score-1;
      answer_turn = "player1";
      question_turn = "player2";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
    } else {
      player1_score =player1_score-1;
      answer_turn = "player2";
      question_turn = "player1";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
    }
  }
  localStorage.setItem("Player 1 score",player1_score);
  localStorage.setItem("Player 2 score",player2_score);
  player1_score = localStorage.getItem("Player 1 score");
  player2_score = localStorage.getItem("Player 2 score");
  document.getElementById("player1_score").innerHTML = player1_score ;
  document.getElementById("player2_score").innerHTML = player2_score ;
  document.getElementById("output").innerHTML = "";

}