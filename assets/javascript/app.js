var card = $("#quizSpace");

var questions = [{
    question: "What device helps trainers identify Pokemon?",
    answers: ["Polyjuice Potion", "Hyper Potion", "Bulbasaur", "Pokedex"],
    correctAnswer: "Pokedex",
}, {
    question: "Which gaming console did the first six Pokemon games come out on?",
    answers: ["Gameboy Color", "Nintendo DS", "Gameboy", "PlayStation"],
    correctAnswer: "Gameboy"
}, {
    question: "Which Pokemon is #039?",
    answers: ["Pikachu", "Jigglypuff", "Snorlax", "Ninetails"],
    correctAnswer: "Jigglypuff"
}, {
    question: "What Gameboy game/s was/were released in February, 1996?",
    answers: ["Pokemon Yellow (Japan)", "Pokemon Red and Green (Japan)", "Pokemon Blue (Japan)", "Pokemon Red and Blue (North America)"],
    correctAnswer: "Pokemon Red and Green (Japan)"
}, {
    question: "Gloom evolves into which Pokemon?",
    answers: ["Vileplume", "Chikorita", "Celebi", "Oddish"],
    correctAnswer: "Vileplume"
}, {
    question: "What number Pokemon is Arcanine?",
    answers: ["#013", "#069", "#059", "#159"],
    correctAnswer: "#059"
}, {
    question: "Which type of Pokemon are Psychic Pokemon NOT weak to?",
    answers: ["Bug", "Ghost", "Grass", "Dark"],
    correctAnswer: "Grass"
}, {
    question: "Where do you find Articuno in Pokemon Red?",
    answers: ["Fuschia City", "Seafoam Islands", "Cerulean City", "Mt. Moon"],
    correctAnswer: "Seafoam Islands"
}, {
    question: "Which Pokemon game was the first to use AR (augmented reality) and also be released on iOS and Android?",
    answers: ["Pokemon Sword and Shield", "Pokemon Let's Go Pikachu!", "Pokemon Quest", "Pokemon GO"],
    correctAnswer: "Pokemon GO"
}, {
    question: "In the original TV series, why does Misty first begin following Ash?",
    answers: ["She wanted his Pikachu", "She was in love with him", "She thought he was a skilled trainer", "He stole and wrecked her bike"],
    correctAnswer: "He stole and wrecked her bike"
}];

var timer;

var trivGame = {
    correct: 0,
    incorrect: 0,
    counter: 60,

    countdown: function () {
        game.counter--;
        $("#counter-number").html(trivGame.counter);
        if (trivGame.counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },

    start = function () {
        timer = setInterval(trivGame.countdown, 1000);

        $("#sub-wrapper").prepend(
            "<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>");

        $("#start").remove();

        for (let i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i]).question + "</h2>";
            for (var j = 0; j, questions[i].answers.length; j++) {
                card.append("<input type='radio' name= 'question-'" + i + "' value='" + questions[i].answers[j] + "'>'" + questions[i].answers[j])
            };
        }

        card.append("<button id='done'>Done</button>");
    },

    done: function() {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
          if ($(inputs[i]).val() === questions[i].correctAnswer) {
            trivGame.correct++;
          } else {
            trivGame.incorrect++;
          }
        }
        this.result();
      },
    
      result: function() {
        clearInterval(timer);
    
        $("#sub-wrapper h2").remove();
    
        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
      }

};

$("#start").on("click", function () {


});