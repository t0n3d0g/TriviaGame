var questionOptions = [
    {
    // question 00
    question: "What was the last song John Lennon played for a paying audience??",
    choices: ["Bennie and the Jets", "Across The Universe", "I Saw Her Standing There", "Imagine" ],
    image:  ["assets/images/liveinnyc.gif"],
    answer: 2
    }, 
    {
    // question 01
    question:"Which Beatle crossed Abbey Road first?",
    choices: ["John", "Ringo", "Paul", "George"],
    image: ["assets/images/abbeyrd.gif"],
    answer: 0
    }, {
    // question 02
    question: "What Beatles song was written for Mia Farrow's sister?",
    choices: ["Dear Prudence", "Honey Pie", "For No One", "Julia" ],
    image:  ["assets/images/miafarrow.gif"],
    answer: 0
    }, {
    // question 03
    question: "Who was the first Beatle to get married?",
    choices: ["Ringo", "Paul", "John", "George"],
    image:  ["assets/images/johncyn.gif"],
    answer: 2
    }, {
    // question 04
    question: "Who was the original drummer for the Beatles?",
    choices: ["Pete Best", "Ringo Starr", "Stuart Sutcliffe", "Bill Wyman"],
    //zappa on the shitter.
    image:  ["assets/images/beatlesbest.gif"],
    answer: 0
    }, {
    // question 05
    question: "Which of the Beatles did some fans believe had died and been replaced by a double?",
    choices: ["George", "Paul", "Ringo", "John"],
    image:  ["assets/images/paulisdead.gif"],
    answer: 1
    }, {
    // question 06
    question: "What band did Ringo leave to join the Beatles?",
    choices: ["Rory Storm & The Hurricanes", "Tony Sheridan & The Beat Brothers", "Alan Caldwell & The Stoneycraft Storm", "Johny & The Moondogs"],
    image:  ["assets/images/merseybeat.gif"],
    answer: 0
    }, {
    // question 07
    question: "For what crime was Paul McCartney deported from Germany?",
    choices: ["Assault", "Arson", "Robbery", "Prostitution"],
    image:  ["assets/images/arson.gif"],
    answer: 1
    }, {
    // question 08
    question: "What was the working title of With a Little Help from my Friends?",
    choices: ["Auntie Jin's Theme", "That's a Nice Hat", "Granny Smith", "Bad Finger Boogie"],
    image:  ["assets/images/ringo.gif"],
    answer: 3
    }, 
    {
    // question 09
    question: "Which of the following songs contributed to the rumor that Paul had died?",
    choices: ["Hey Jude", "Yesterday", "Strawberry Fields Forever", "Penny Lane"],
    image:  ["assets/images/paulisdead2.gif"],
    answer: 2
    }
];

    

    // first we initialize the page

    $(document).ready(function() {
        console.log("Shall We Play a Game?");
       
        var currentQuestion = 0;
        var correctCount = 0;
        var incorrectCount = 0;
        var counter;
        var counterNum;
        
        function countdown_init() {
            counterNum = 30;
            countdownTrigger();
        }

        function countdownTrigger() {
            if(counterNum > 0) {
                counterNum--;
                if (counterNum === 0){
                    timesUp();
                }
                $("#timerHTML").text("Timer: " + counterNum);
                if(counterNum > 0) {
                    countdown = setTimeout(countdownTrigger , 1000);
                }
            }
        }

        function countdownClear() {
            clearTimeout(countdown);
        }

        startup();


    // wait for user to click "START" button

    function startup(){
        console.log("Startup Function");
        // create start button
        $("#triviaHTML").append("<h2>How well do you know you Beatles Trivia?</h2><br>");
        var startUpButton = $("<button>");
        startUpButton.attr("class", "start");
        startUpButton.text("Start");
        // add button, and a break element to HTML
        $("#triviaHTML").append(startUpButton).append("<br>");
        // listen for click from the button class "startRestart"
        $(".start").click(startRestartButton);
    }

    // create "START" button

    function startRestartButton() {
        console.log("Looks like somebody clicked START yo");
        // clear start/restart button
        clearHTML();
        // set question index and scores to zero.
        currentQuestion = 0;
        correctCount = 0;
        incorrectCount = 0;
         // display scared wizard of oz gif for 4 seconds
         $("#triviaHTML").append("<img src='assets/images/sullivan.gif'>");
         // $("#triviaHTML").append("<br>")
         setTimeout(game, 5000);
        }
    
    // initialize the game
  
    function clearHTML() {
        console.log("HTML cleared success! It's Miller Time");
        // clear html for next function
        $("#timerHTML").empty();
        $("#triviaHTML").empty();
    }

    // clear question div
    function addQuestion() {
        console.log("Let us add some Questions next");
        // variable to hold question text
        var questionText = questionOptions[currentQuestion].question;
        // create a question div
        var questionDiv = $("<h3>").text(questionText);
        
        // append the current question to the HTML
        $("#triviaHTML").append(questionDiv).append("<br");
    }

    // display question with 4 choices

    function choiceButtons() {
        // button
        var buttonDiv = $("<button>");
        console.log(currentQuestion);
        console.log("choiceButtons function called");
        for (i = 0; i < questionOptions[currentQuestion].choices.length; i++) {
            var choices = questionOptions[currentQuestion].choices[i];
            var buttonStuff = $("<button>");
            buttonStuff.text(choices);
            buttonStuff.attr("class", "choice");
            buttonStuff.attr("value", i);
            // append choices from current question to buttons and to html
            $("#triviaHTML").append(buttonStuff).append("<br>");
        }
        
        
    }

    function gifGetter() {
        // display the current question gif to the html
        console.log("gifGetting function called");
        var gifLocation = questionOptions[currentQuestion].image;
        var theGif = $("<img>").append("<br");
        theGif.attr("src", gifLocation);
        theGif.attr("alt", "AnswerGif");
        $("#triviaHTML").append(theGif);
    }


    // create answer buttons

    function displayAnswerText() {
        console.log("displayAnswerText function called")
        var answerWasText = questionOptions[currentQuestion].choices[questionOptions[currentQuestion].answer];

        $("#triviaHTML").append("<h3>The answer was: " + answerWasText + "</h3>").append("<br>");
    }

    // check response and update score
    
    function displayScore() {
        // create a score table.
        var Answers = $("<h4>Correct Answers: " + correctCount + "</h4><br><h4>Incorrect Answers: " + incorrectCount + "</h4><br>")
        //display some score correct and not notCorrect shits.
        $("#triviaHTML").append(Answers);
    }

    function wrongAnswer() {
        console.log("wrongAnswer function called");
        incorrectCount++;
        clearHTML();
        // TIMER STOP
        countdownClear();
        // DISPLAY TIMER

        // display score
        displayScore();
        $("#triviaHTML").append("<h3>Incorrect!</h3><br>");
        //inform user of the correct answer
        displayAnswerText();
        // call current question gif.
        gifGetter();
        // add one to current question counter.
       
        currentQuestion++;
        setTimeout(game, 5000);
    }

    function rightAnswer() {
        console.log("rightAnswer function called");
        correctCount++;
        clearHTML();
        // Timer stop
        countdownClear();
        // timer display

        // display score
        displayScore();
        // congratulate user on answer.
        $("#triviaHTML").append("<h3>That's correct!</h3><br>");
        // call current question gif.
        gifGetter();
        // add one to current question counter.
        
        currentQuestion++;

        setTimeout(game, 5000);
    }
    
    function timesUp() {
        console.log("timesUp finction called");
        //display stopped time
        clearHTML();
        countdownClear();
        // say TIMES UP, 
        displayScore();
        // message
        $("#triviaHTML").append("<h3>Time's Up!</h3><br>");
        // and the correct answer
        displayAnswerText();
        // call current question gif.
        gifGetter();
        // add one to current question counter.
        currentQuestion++;
        // keep screen up for 4? seconds.
        setTimeout(game, 5000);
    }

    // display timer

    function game(){
        console.log("Game function started. Here we go!");
        if (currentQuestion < questionOptions.length) {
            console.log("game function IF statement called.");
            clearHTML();
            addQuestion();
            choiceButtons();
            countdown_init();
            $(".choice").click(choicesClicked);
        } 
        else {
            console.log("game function ELSE statement called.");
            endGame();
        }
    }

    // end game when no more questions are left

    function choicesClicked(event) {
        // CLEAR timer countdown
        // if the button value is equal or not to the current question answer....
        console.log(event);
       
        if (parseInt(event.target.value) === questionOptions[currentQuestion].answer){
            console.log("Correcto-mundo!");
            rightAnswer();
        }
        else {
            wrongAnswer();
            console.log("Wrong response. Try again!");
        }

    }

    function endGame() {
        console.log("This is End of the Game");
        clearHTML();

        displayScore();
        // display restart button which runs buttonPressed function.
        var restartButton = $("<button>");
        restartButton.attr("class", "restart");
        restartButton.text("Restart?");
        // add button, and a break element to HTML
        $("#triviaHTML").append(restartButton).append("<br>");
        $(".restart").click(startRestartButton);
    }


    


    });