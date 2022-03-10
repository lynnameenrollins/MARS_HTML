
function wrongAnswer(clicked_id){
    console.log("Here in wrongAnswer")
    let btn = document.getElementById(clicked_id)
    btn.style.backgroundColor = '#bf2e3f';
       
    //enable Next button 
    document.getElementById("next").disabled = false;
   
        
}
function correctAnswer(clicked_id){
    console.log("Here in correctAnswer")
    let btn = document.getElementById(clicked_id)
    btn.style.backgroundColor = '#4ead4c';
       
    //enable Next button 
    document.getElementById("next").disabled = false;
    count +=1;
    console.log("Number of correct answers: " + count)    
}

function getNextQuestion(){
    console.log("Here in get Next Question")
    //when in here look up the next question
    b1.style.backgroundColor = '#d4cfd0';
    b2.style.backgroundColor = '#d4cfd0';
    b3.style.backgroundColor = '#d4cfd0';
    b4.style.backgroundColor = '#d4cfd0';
    console.log(Object.keys(questionBank))
    let questionsLeft = Object.keys(questionBank).length
    if (questionsLeft> 0){
        loadQandA()
        //then need to disable the next button again
        
    }
    //else quit the game
    else{
        let disp1 = document.getElementById("finalMessage")
        let disp2 = document.getElementById("questionsRight")
        disp2.innerHTML = "You got " + count + " question(s) correct"
        disp1.style.display = 'block' 
        disp2.style.display = 'block'
            
    }
    
    document.getElementById("next").disabled = true;
    
}

function loadQandA(){
    
    //loads the next question from a list of questions

    let {questionNo, question, a1, a2, a3, correct} = questionBank.pop()
    dispQuestion.innerHTML = question

    b1.innerHTML = a1;
    b2.innerHTML = a2;
    b3.innerHTML = a3;
    b4.innerHTML = correct;
    
    
    //randomize correct answer position
    var correctAnswerPosition = Math.floor(Math.random()*4) + 1
    
    b1.style.order = 2
    b2.style.order = 3
    b3.style.order = 4
    b4.style.order = correctAnswerPosition

            
}

class QuestionBank{
    #questionNo;
    #question;
    #a1;
    #a2;
    #a3;
    #correct;
    constructor(questionNo, question, a1, a2, a3, correct){
        this.#questionNo = questionNo;
        this.#question = question;
        this.#a1 = a1;
        this.#a2 = a2;
        this.#a3 =a3;
        this.#correct = correct
    }

    get questionNo() {
        return this.#questionNo
    }
    set questionNo(questionNo){
    
        this.#questionNo = questionNo;
    }
    get question() {
        return this.#question
    }
    set question(question){
        
        this.#question = question;
    }
    get a1() {
        return this.#a1
    }
    set a1(a1){
        
        this.#a1 = a1;
    }
    get a2() {
        return this.#a2
    }
    set a2(a2){
        
        this.#a2 = a2;
    }
    get a3() {
        return this.#a3
    }
    set a3(sa3){
        
        this.#a3 = a3;
    }
    get correct() {
        return this.#correct
    }
    set correct(correct){
        
        this.#correct = correct;
    }
    
    
}

    let questionBank = [
        { questionNo: 1, question: 'What is the correct way to write an If Statement in JavaScript', 
         a1: "if i=5 then", a2: "if i = 5", a3: "if i==5 then", correct: "if (i== 5)" },
         { questionNo: 2, question: 'There are _____ level of heading in html', 
         a1: "three", a2: "four", a3: "five", correct: "six" },
         { questionNo: 3, question: 'How do you make each word in a text start with a capital letter?', 
         a1: "text-style:capitalize", a2: "transform:capitalize", a3: "You can't do that with CSS", correct: "text-transform:capitalize  " },
         { questionNo: 3, question: 'What does CSS stand for?', 
         a1: "Creative Style Sheets", a2: "Colorful Style Sheets", a3: "Computer Style Sheets", correct: "Cascading Style Sheet" },
         { questionNo: 5, question: 'Which CSS property is used to change the text color of an element?', 
         a1: "background-color", a2: "bg-color", a3: "fgcolor", correct: "color" }
        
    
    ]    
    
    //loads the first question
    var dispQuestion = document.getElementById("questionText") 
    var b1 = document.getElementById("1") 
    var b2 = document.getElementById("2") 
    var b3 = document.getElementById("3") 
    var b4 = document.getElementById("4") 

    

    var count = 0 //to keep track of correct answers
    loadQandA()
    
    
    
    
    
  