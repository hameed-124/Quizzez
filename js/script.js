const STORE = {
    questions: {
        SDLC:[
            {
                "question": "What does SDLC stand for?",
                "code": "",
                "answers": [
                    "Software Development Life Cycle",
                    "System Design Logic Chart",
                    "Structured Data Logic Control",
                    "Software Design Lifecycle Chart"
                ],
                "correctAnswer": "Software Development Life Cycle"
            },
            {
                "question": "Which SDLC phase focuses on gathering and analyzing requirements?",
                "code": "",
                "answers": [
                    "Design",
                    "Implementation",
                    "Planning",
                    "Requirements Analysis"
                ],
                "correctAnswer": "Requirements Analysis"
            },
            {
                "question": "What is the main purpose of the testing phase in SDLC?",
                "code": "",
                "answers": [
                    "To deploy the system to users",
                    "To check for defects and ensure quality",
                    "To gather user feedback",
                    "To plan the development process"
                ],
                "correctAnswer": "To check for defects and ensure quality"
            }
        ],
        OO_Analysis: [
            {
                "question": "What is the purpose of object-oriented analysis?",
                "code": "",
                "answers": [
                    "To develop system specifications",
                    "To write code",
                    "To test software",
                    "To deploy systems"
                ],
                "correctAnswer": "To develop system specifications"
            },
            {
                "question": "Which is a key component of object-oriented analysis?",
                "code": "",
                "answers": [
                    "Identifying actors",
                    "Defining algorithms",
                    "Writing pseudocode",
                    "Performing system testing"
                ],
                "correctAnswer": "Identifying actors"
            },
            {
                "question": "What does an object represent in object-oriented analysis?",
                "code": "",
                "answers": [
                    "A function",
                    "A data structure",
                    "A real-world entity",
                    "A piece of hardware"
                ],
                "correctAnswer": "A real-world entity"
            }

        ],
        OO_Design: [
            {
                "question": "What does a class diagram represent in UML?",
                "code": "",
                "answers": [
                    "Data flow",
                    "System structure",
                    "User interactions",
                    "Deployment processes"
                ],
                "correctAnswer": "System structure"
            },
            {
                "question": "Which UML diagram shows the interaction between objects?",
                "code": "",
                "answers": [
                    "Sequence Diagram",
                    "Class Diagram",
                    "Component Diagram",
                    "Deployment Diagram"
                ],
                "correctAnswer": "Sequence Diagram"
            },
            {
                "question": "What does a use case diagram focus on?",
                "code": "",
                "answers": [
                    "System behavior",
                    "Database schema",
                    "Code performance",
                    "Algorithm efficiency"
                ],
                "correctAnswer": "System behavior"
            }
        ],
        OOP: [
            {
                "question": "Which principle promotes code reusability in OOP?",
                "code": "",
                "answers": [
                    "Encapsulation",
                    "Inheritance",
                    "Polymorphism",
                    "Abstraction"
                ],
                "correctAnswer": "Inheritance"
            },
            {
                "question": "What does encapsulation help achieve in OOP?",
                "code": "",
                "answers": [
                    "Hiding data",
                    "Increasing code size",
                    "Enhancing inheritance",
                    "Adding more methods"
                ],
                "correctAnswer": "Hiding data"
            },
            {
                "question": "What is polymorphism in OOP?",
                "code": "",
                "answers": [
                    "Having multiple functions with the same name but different implementations",
                    "Creating objects from a class",
                    "Organizing code into modules",
                    "Structuring data into arrays"
                ],
                "correctAnswer": "Having multiple functions with the same name but different implementations"
            }
        ],
        HTML: [
            {
                "question": "Which tag is used to create a hyperlink in HTML?",
                "code": "",
                "answers": [
                    "<a>",
                    "<link>",
                    "<href>",
                    "<url>"
                ],
                "correctAnswer": "<a>"
            },
            {
                "question": "What does the <head> section of an HTML document contain?",
                "code": "",
                "answers": [
                    "Visible page content",
                    "Metadata and links to external resources",
                    "JavaScript code only",
                    "HTML attributes"
                ],
                "correctAnswer": "Metadata and links to external resources"
            },
            {
                "question": "Which attribute is used to uniquely identify an element in HTML?",
                "code": "",
                "answers": [
                    "id",
                    "class",
                    "name",
                    "type"
                ],
                "correctAnswer": "id"
            }

        ],
        CSS:[
            {
                "question": "Which property is used to change the background color of an element?",
                "code": "",
                "answers": [
                    "color",
                    "background-color",
                    "bg-color",
                    "background"
                ],
                "correctAnswer": "background-color"
            },
            {
                "question": "How do you make text bold using CSS?",
                "code": "",
                "answers": [
                    "font-weight: bold;",
                    "text-decoration: bold;",
                    "font-style: bold;",
                    "font-thickness: bold;"
                ],
                "correctAnswer": "font-weight: bold;"
            },
            {
                "question": "Which CSS property is used to control the space between lines of text?",
                "code": "",
                "answers": [
                    "line-spacing",
                    "line-height",
                    "text-spacing",
                    "text-height"
                ],
                "correctAnswer": "line-height"
            }
        ],
        API: [
            {
                "question": "What does REST stand for in API development?",
                "code": "",
                "answers": [
                    "Representational State Transfer",
                    "Random Event Source Transmission",
                    "Remote Execution Service Tool",
                    "Runtime Environment Support Technology"
                ],
                "correctAnswer": "Representational State Transfer"
            },
            {
                "question": "Which HTTP method is used to update an existing resource in an API?",
                "code": "",
                "answers": [
                    "GET",
                    "POST",
                    "PUT",
                    "DELETE"
                ],
                "correctAnswer": "PUT"
            },
            {
                "question": "What format is commonly used to exchange data in APIs?",
                "code": "",
                "answers": [
                    "HTML",
                    "XML",
                    "JSON",
                    "CSV"
                ],
                "correctAnswer": "JSON"
            }
        ],
        Testing: [
            {
                "question": "What is the purpose of unit testing?",
                "code": "",
                "answers": [
                    "Testing individual components of the software",
                    "Validating system integration",
                    "Ensuring performance under load",
                    "Testing the UI layout"
                ],
                "correctAnswer": "Testing individual components of the software"
            },
            {
                "question": "What is the primary goal of regression testing?",
                "code": "",
                "answers": [
                    "To test new features",
                    "To ensure old functionality is unaffected by changes",
                    "To identify usability issues",
                    "To test system performance"
                ],
                "correctAnswer": "To ensure old functionality is unaffected by changes"
            },
            {
                "question": "Which type of testing ensures the software meets user requirements?",
                "code": "",
                "answers": [
                    "Unit testing",
                    "Integration testing",
                    "User Acceptance Testing (UAT)",
                    "Performance testing"
                ],
                "correctAnswer": "User Acceptance Testing (UAT)"
            }
        ],
        DBMS:[
            {
                "question": "Which language is used to interact with relational databases?",
                "code": "",
                "answers": [
                    "SQL",
                    "NoSQL",
                    "HTML",
                    "CSS"
                ],
                "correctAnswer": "SQL"
            },
            {
                "question": "What does ACID stand for in database transactions?",
                "code": "",
                "answers": [
                    "Atomicity, Consistency, Isolation, Durability",
                    "Automation, Consistency, Integration, Distribution",
                    "Accuracy, Control, Isolation, Dependency",
                    "Analysis, Compilation, Integrity, Dataflow"
                ],
                "correctAnswer": "Atomicity, Consistency, Isolation, Durability"
            },
            {
                "question": "Which database model organizes data into tables?",
                "code": "",
                "answers": [
                    "Relational model",
                    "Hierarchical model",
                    "Network model",
                    "Object-oriented model"
                ],
                "correctAnswer": "Relational model"
            }
        ],
        Maintenance:[
            {
                "question": "What is corrective maintenance in software?",
                "code": "",
                "answers": [
                    "Adding new features to the software",
                    "Fixing defects or errors in the software",
                    "Improving the performance of the software",
                    "Adapting the software to new environments"
                ],
                "correctAnswer": "Fixing defects or errors in the software"
            },
            {
                "question": "Which type of maintenance involves adding new functionality to the software?",
                "code": "",
                "answers": [
                    "Preventive maintenance",
                    "Perfective maintenance",
                    "Corrective maintenance",
                    "Adaptive maintenance"
                ],
                "correctAnswer": "Perfective maintenance"
            },
            {
                "question": "What is the goal of preventive maintenance?",
                "code": "",
                "answers": [
                    "Fixing known bugs",
                    "Enhancing system performance",
                    "Reducing the likelihood of future issues",
                    "Adapting to new hardware"
                ],
                "correctAnswer": "Reducing the likelihood of future issues"
            }
        ]                
    }
};


function makeQuiz() {
    return {
        questions: helpers.getRandomQuestions(STORE),
        midQuiz: false,
        progress: {
            progressBar: [],
            incorrectCategories: []
        },
        completed: false,
        currentQuestion: 0,
        correctAnswers: 0,
        currentAnswer: "",
        percCorrect: 0,
        timer: 10,
        timerInterval: null
    }
}
function startTimer(appState) {
    appState.timer = 10;
    $('.timer').text(`Time left: ${appState.timer}s`);

    appState.timerInterval = setInterval(() => {
        appState.timer--;
        $('.timer').text(`Time left: ${appState.timer}s`); 

        if (appState.timer <= 0) {
            clearInterval(appState.timerInterval); 
            submitAnswer(appState); 
            $fade(appState);
        }
    }, 1000);
}

function $fade(appState) {
    if (appState.completed) {

        $.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
            .done(function () {

                $showResults(appState);
                $('.results-wrapper').hide().removeClass('hide');
                $('.question-answer-wrapper, .results-wrapper').fadeIn(500);
            });

    } else if (appState.midQuiz === false) {

        appState.midQuiz = true;
        $.when($('.question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar').fadeOut(500))
            .done(function () {
                helpers.updateProgressBar(appState);
                $('.progress-count').html('1 / 10');
                $('.progress-perc').html('');
                $('.failures').remove();
                $updateQuestion(appState);
                $('progress-bar').empty();
                $('progress-fill').html('Progress: <span class="progress-count">1 / 10</span><span class="progress-perc"></span>');
                $('.question-answer-wrapper, .answer-wrapper').removeClass('begin');
                $('.submit-btn, .progress, .progress-bar').removeClass('hide');
                $('.progress, .progress-bar').hide();
                $('.question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar').fadeIn(500);
                if (!$('.code').hasClass('hide')) { $('.code').fadeIn(500) };
            });

    } else if (appState.midQuiz) {
        $.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
            .done(function () {
                $updateQuestion(appState);
                $('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeIn(500);
            });
    }
}

function $showResults(appState) {
    if (appState.correctAnswers === 10) {
        let endMsg = `You got ${appState.percCorrect}% correct!
I have nothing else to teach you. Move on and prosper!
`;
    } else {
        $('.answer-btn').remove();
        let endMsg = `You got ${appState.percCorrect}% correct!`
        let endFeedback = ``;
        if (appState.progress.incorrectCategories.length === 0) {
            endFeedback = `You aced it! Good job!`;
        } else {
            endFeedback = `You may want to study up on the following categories:`;
        }

        $('.quiz-end-score').html(endMsg);
        let $failList = $('<ul class="failures"></ul>');
        appState.progress.incorrectCategories.map((cat => {
            $failList.append("<li class='category'>" + cat + "</li>");
        }));
        $('.quiz-end-feedback-p').html(endFeedback);
        $('.quiz-end-categories').append($failList);
        $('.results-wrapper').removeClass('hide').css('display', 'flex');
        $('.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn').css('display', 'flex').fadeIn(500);
    }

}

function $updateQuestion(appState) {
    $('.answer-btn').remove();
    $('.question').html(appState.questions[appState.currentQuestion].question);
    if (appState.questions[appState.currentQuestion].code == ``) {
        $('.code').addClass('hide');
    } else {
        $('.code').removeClass('hide');
        $('.code').html(`<pre>${appState.questions[appState.currentQuestion].code}</pre>`);
    }
    $('.continue-btn')
        .val("Submit")
        .removeClass('continue-btn')
        .addClass('submit-btn')
        .prop('disabled', true);

    let $answers = [];

    for (let i = 0; i < appState.questions[appState.currentQuestion].answers.length; i++) {

        let $answer = $('<button class="answer-btn" type="button"></button>');
        $answer.html(appState.questions[appState.currentQuestion].answers[i]);
        $answers.push($answer);
    }

    helpers.shuffleAnswers($answers)

    $answers.forEach((answer) => {
        $('.answer-wrapper').prepend(answer);
    });
    startTimer(appState);
}

function selectAnswer(answer) {
    $('.answer-btn').removeClass('selected');
    answer.addClass('selected');
    $('.submit-btn').prop('disabled', false);
}

function submitAnswer(appState) {
    let correct;
    $('.answer-btn').each(function () {
        if ($(this).html() === appState.questions[appState.currentQuestion].correctAnswer) {
            $(this).addClass('pass');
            if ($(this).hasClass('selected')) {
                correct = "pass";
                appState.correctAnswers++;
                appState.questions[appState.currentQuestion];
            }

        } else if ($(this).hasClass('selected')) {
            $(this).addClass('fail dim-answer');
            correct = "fail";
            appState.progress.incorrectCategories.push(appState.questions[appState.currentQuestion].category);

        } else {
            $(this).addClass('dim-answer');
        }
    });

    appState.progress.progressBar.push(`<div class="progress-indicator ${correct}"></div>`);
    appState.percCorrect = parseFloat(appState.correctAnswers / (appState.currentQuestion + 1) * 100).toFixed();
    $('.progress-count').html(`
		${appState.currentQuestion + 1} / ${appState.questions.length}
	`);

    $('.progress-perc').html(`
		 // ${(appState.percCorrect)}% Correct
	`)

    $('.submit-btn')
        .val("Continue")
        .removeClass('submit-btn')
        .addClass('continue-btn')

    $('.answer-btn').prop("disabled", true);

    helpers.updateProgressBar(appState);
    appState.currentQuestion++;

    if (appState.currentQuestion === appState.questions.length) {
        appState.completed = true;
    }
    clearInterval(appState.timerInterval);
}

function killQuiz() {
    $('.start-quiz, .quit-quiz').hide();
    let failureMsg = "You didn't grow. You didn't improve. You took a shortcut and gained nothing. You experienced a hollow victory. Nothing was risked and nothing was gained. It's sad you don't know the difference..."
    let msgSplit = failureMsg.split(" ");
    let counter = 0;
    $('.question').empty();
    let startTroll = setInterval(function () {
        $('.question').append(msgSplit[counter] + " ");
        counter++;
        if (counter > msgSplit.length - 1) {
            clearInterval(startTroll);
            $('.start-quiz').text('You can do it! Start Quiz').fadeIn(500);
        }
    }, 250);
}

let helpers = {
    pickRandomQ: function (obj, section) {
        return Math.floor(Math.random() * obj.questions[section].length);
    },
    getRandomQuestions: function (obj) {
        let questions = [];
        let categories = Object.keys(obj.questions);
        categories.forEach((cat) => {
            let randomQ = this.pickRandomQ(obj, cat);
            let question = obj.questions[cat][randomQ];
            question.category = cat;
            questions.push(question);
        });
        return questions;
    },
    shuffleAnswers: function (arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    },
    updateProgressBar: function (appState) {
        $('.progress-bar').empty();
        appState.progress.progressBar.forEach((progInd => {
            $('.progress-bar').append(progInd);
        }))
    }
}

$(function () {

    $('.answer-wrapper').on('submit', function (e) {
        e.preventDefault();
    });

    let quizData;

    $('.start-quiz, .retry-btn').on('click', function () {
        quizData = makeQuiz();
        $fade(quizData);
    });

    $('.question-answer-wrapper').on('click', '.answer-btn', function () {
        selectAnswer($(this));
    })

    $('.question-answer-wrapper').on('click', '.submit-btn', function (e) {
        submitAnswer(quizData);
    });

    $('.question-answer-wrapper').on('click', '.continue-btn', function () {
        $fade(quizData);
    });

    $('.quit-quiz').on('click', function () {
        killQuiz();
    })
})