

function checkAnswer(){

    console.log("Here in checkAnswer")
    //when here check if the answer is correct
    //change colors to show if correct(green)/incorrect (red)
    //enable Next button 
    
    document.getElementById("next").disabled = false;
    
    
}

function getNextQuestion(){
    console.log("Here in get Next Question")
    //when in here look up the next question
    loadQandA()

    //then need to disable the next button again
    document.getElementById("next").disabled = true;
}

function loadQandA(){
    //loads the next question from a list of questions
    var Question = getElementById("question") 
    Question = "I will load the question now in this function"
}