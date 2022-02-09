playerl1_name= localStorage.getItem("player1_name");
playerl2_name= localStorage.getItem("player2_name");

playerl1_score = 0;
playerl2_score = 0;

document.getElementById("player1_name").innerHTML= playerl1_name + " : ";
document.getElementById("player2_name").innerHTML= playerl2_name + " : ";

document.getElementById("player1_score").innerHTML= playerl1_score = 0;
document.getElementById("player2_score").innerHTML= playerl2_score = 0;

document.getElementById("player_question").innerHTML= "Question turn - "+ playerl1_name;
document.getElementById("player_answer").innerHTML= "Answer turn - "+ playerl2_name;




function send(){

    get_word= document.getElementById("word").value; 
    word = get_word.toLowerCase(); 
    console.log("word in lowercase= "+ word);


      charat1= word.charAt(1);
      console.log(charat1);

      length_divide_2= Math.floor(word.length/ 2);
      charat2= word.charAt(length_divide_2);
      console.log(charat2);

      lenth_minus_1= word.length - 1
      charat3= word.charAt(lenth_minus_1);
      console.log(lenth_minus_1);

      remove_charat_1= word.replace(charat1, "_");
      remove_charat_2= remove_charat_1.replace(charat2, "_");
      remove_charat_3= remove_charat_2.replace(charat3, "_");
      console.log(remove_charat_3);

      question_word= "<h4 id= 'word_display'> Q."+ remove_charat_3 + " </h4>";
      input_box = "<br>Answer : <input type='text' id='input_check_box'>";

      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
      row= question_word + input_box + check_button;
      document.getElementById("output").innerHTML= row;
      document.getElementById("word").value= "";
}

 answer_turn= "player2";
 question_turn= "player1";

 function check(){

       get_answer= document.getElementById("input_check_box").value;
       answer= get_answer.toLowerCase();
       console.log("answer in lowercase " + answer);

       if( word == answer){
             
            if (answer_turn == "player1") {
              
                   playerl1_score = playerl1_score+1
                   document.getElementById("playerl1_score").innerHTML= playerl1_score;

            } else {
              playerl2_score = playerl2_score+1
              document.getElementById("playerl2_score").innerHTML= playerl2_score;
            }
       }

       if (question_turn == "player1") {

               question_turn= "player2";
               document.getElementById("player_question").innerHTML= "Question turn-"+ player2_name;
         
       } else {

        question_turn= "player1";
        document.getElementById("player_question").innerHTML= "Question turn-"+ player1_name;

       }


       
       if (answer_turn == "player1") {

        answer_turn= "player2";
        document.getElementById("player_answer").innerHTML= "Answer turn-"+ player2_name;
  

      } 
      
      else {

            answer_turn= "player1";
             document.getElementById("player_answer").innerHTML= "Answer turn-"+ player1_name;
 
       }

       document.getElementById("output").innerHTML= "";

 }


 