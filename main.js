var questions = [
  "Hi, I'm Bobby. Whats your name?", // question 0
  "Where are you from?",
  "What's your age?",
  "What is your favourite movie?", // question 3
  "I am great at multiplying by 435, try typing in a number ...",
  `It was nice talking you :)`
];

var films = [
  { name: "blackpanther", rating: 4 },
  { name: "readyplayerone", rating: 3 },
  { name: "titanic", rating: 2 }
];

// num stans for the question number (starting at zero)

// Step thought the questions and display the chatbox responses.
function showResponse() {
  var input = inputBox.value;
  if (inputBox.value !== "") {
    let response = "";
    if (num === 1) {
      response = `${input} must be a good place`;
    } else if (num === 2) {
      response = `So you were born in ${2017 - input}`;
    } else if (num === 3) {
      let rating = 0;
      console.log("show");
      for (var i = 0; i < films.length; i++) {
        if (films[i].name === input) {
          rating = films[i].rating;
          response = `${input} is rated ${rating} right?`;
        } else {
          response = `Never watched it before....`;
        }
      }
    } else if (num === 4) {
      response = input * 435;
    } else {
      response = `Hello ${input}!`;
    }

    output.innerHTML = response;
    inputBox.setAttribute(
      "placeholder",
      `Wait for ${timeInSeconds(waitTimeInMilliseconds)} secs`
    );
    inputBox.value = "";
    inputBox.setAttribute("disabled", true);
    num++;
    setTimeout(changeQuestion, waitTimeInMilliseconds);
  }
}

// Time to wait before showing the next question, in milliseconds
var waitTimeInMilliseconds = 1000;
// var waitTimeInMilliseconds = 0;
var totalQuestions = questions.length - 1;
var num = 0;

var inputBox = document.querySelector("#answer");
var output = document.querySelector("#result");

// Displays the first question.
output.innerHTML = questions[num];

function changeQuestion() {
  inputBox.setAttribute("placeholder", "Enter your response");
  // Re-allow the user to type an answer and reset focus on the input field.
  inputBox.removeAttribute("disabled");
  $("#answer").focus();
  // Picks out the question we are currently on.
  output.innerHTML = questions[num];

  // End of the chat, hide the response input field.
  if (num === totalQuestions) {
    inputBox.style.visibility = "hidden";
  }
}

// Helper function to convert milliseconds into seconds.
function timeInSeconds(milliseconds) {
  return milliseconds / 1000;
}

$(document).on("keypress", function(event) {
  // When the user hits the enter key trigger showing the response.
  if (event.which === 13) {
    showResponse();
  }
});

$("#begin").on("click", function(event) {
  // When the user hits the enter key trigger showing the response.
  $("#answer").focus();
});

// Initally focus on the answer input field.
if ($(window).width() > 700) {
  $("#answer").focus();
}
