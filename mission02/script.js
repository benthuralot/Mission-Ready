// scripts.js

const neonLights = document.querySelector("#neon");
const lightButton = document.querySelector("#light-btn");
let i = 0;
let isPaused = true;

let array = [
  "#ff00ff",
  "#1e90ff",
  "#39ff14",
  "#fff700",
  "#ff5f1f",
  "#9400d3",
  "#ff073a",
  "#00ffff",
];

lightButton.addEventListener("click", pause);

function changeGlow() {
  if (!isPaused) {
    i++;
    if (i === array.length) {
      i = 0;
    }
    neonLights.style.textShadow = `
  0 0 5px ${array[i]},
  0 0 10px ${array[i]},
  0 0 20px ${array[i]},
  0 0 40px ${array[i]},
  0 0 80px ${array[i]},
  0 0 120px ${array[i]}
`;
    neonElement.style.transform = "scale(1.1)"; // Slightly enlarge
    setTimeout(() => {
      neonElement.style.transform = "scale(1)"; // Return to original size
    }, 800); // Match with the transition duration
  }
}

setInterval(changeGlow, 1600);

function pause() {
  isPaused = !isPaused;
}

// ------ Quiz ------

const quizButtonEl = document.querySelector("#submit-quiz");
const result = document.querySelector("#quiz-result");

quizButtonEl.addEventListener("click", (event) => {
  event.preventDefault();
  const answers = {
    q1: "Mars",
    q2: "Jupiter",
    q3: "Venus",
    q4: "Mercury",
    q5: "Saturn",
    q6: "Titan",
    q7: "Mars",
    // Add more correct answers here
  };

  let score = 0;
  // Object.keys() returns an array of the keys (property names eg. q1, q2 ..) of an object.
  const totalQuestions = Object.keys(answers).length;
  // Use for..in loop to iterate over the keys in the answers object.
  // let key will now store the values "q1", "q2" etc over each iteration.
  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    selected && selected.value === answers[key] ? score++ : score;
  }
  // This will set the result.textContent based on whether the score
  // equals the total number of questions.
  result.textContent =
    score === totalQuestions
      ? `🥳🥳Congratulations! You scored a Perfect ${score} out of ${totalQuestions}!🎉🎉`
      : `You scored ${score} out of ${totalQuestions}.`;
});
