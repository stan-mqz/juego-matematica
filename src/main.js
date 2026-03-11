


const questionText = document.getElementById("question-text");
const difficultyLabel = document.getElementById("difficulty-label");
const nextBtn = document.getElementById("next-btn");
const statusText = document.getElementById("status-text");
const card = document.querySelector(".question");
const optionsContainer = document.getElementById("options-container");

const questionSets = {
  easy: [
    {
      question: "¿Qué expresa, de forma intuitiva, el concepto de límite de una función en un punto?",
      options: [
        "El valor exacto de la función en ese punto",
        "El comportamiento de la función cuando se acerca a ese punto",
        "El área bajo la curva de la función",
        "El máximo valor que puede tomar la función",
      ],
      correct: "El comportamiento de la función cuando se acerca a ese punto",
    },
    {
      question: "Si decimos que lim (x → a) f(x) = L, entonces:",
      options: [
        "f(a) siempre es igual a L",
        "f(x) nunca se acerca a L",
        "f(x) se puede acercar tanto como queramos a L cuando x se acerca a a",
        "f(x) es constante e igual a L",
      ],
      correct:
        "f(x) se puede acercar tanto como queramos a L cuando x se acerca a a",
    },
    {
      question:
        "¿Qué significa que una función tenga límite en un punto x = a?",
      options: [
        "Que la función es creciente en todo su dominio",
        "Que los valores de f(x) se estabilizan alrededor de un número al acercarse a x = a",
        "Que la función tiene un máximo absoluto en x = a",
        "Que la función tiene una asíntota vertical en x = a",
      ],
      correct:
        "Que los valores de f(x) se estabilizan alrededor de un número al acercarse a x = a",
    },
    {
      question:
        "Cuando hablamos del límite de f(x) cuando x tiende a a, ¿qué ocurre con x?",
      options: [
        "Debe ser exactamente igual a a",
        "Se aproxima a a, pero no es necesario que tome el valor a",
        "Siempre se aleja de a",
        "Debe ser mayor que a",
      ],
      correct:
        "Se aproxima a a, pero no es necesario que tome el valor a",
    },
  ],
  medium: [
    {
      question:
        "Si los límites laterales por la izquierda y por la derecha de f(x) en x = a son diferentes, entonces:",
      options: [
        "El límite de f(x) en a existe y es la media de ambos",
        "El límite de f(x) en a no existe",
        "El límite de f(x) en a siempre es cero",
        "La función es continua en x = a",
      ],
      correct: "El límite de f(x) en a no existe",
    },
    {
      question:
        "¿Qué relación hay entre límite y continuidad en un punto x = a?",
      options: [
        "Si f es continua en a, entonces el límite en a no existe",
        "f es continua en a si existe el límite en a y coincide con f(a)",
        "f es continua en a solo si f(a) = 0",
        "La continuidad y el límite no tienen relación",
      ],
      correct:
        "f es continua en a si existe el límite en a y coincide con f(a)",
    },
    {
      question:
        "¿Qué suele indicar la existencia de una asíntota vertical en x = a para una función f(x)?",
      options: [
        "Que f(x) tiende a un número finito cuando x → a",
        "Que el límite de f(x) cuando x → a es infinito o menos infinito",
        "Que f(x) es constante cerca de a",
        "Que f(x) tiene un máximo local en a",
      ],
      correct:
        "Que el límite de f(x) cuando x → a es infinito o menos infinito",
    },
  ],
  hard: [
    {
      question:
        "Cuando estudiamos el límite de f(x) cuando x tiende a infinito, ¿qué estamos analizando?",
      options: [
        "El comportamiento de la función muy cerca de un punto concreto",
        "El comportamiento de la función cuando x toma valores muy grandes en magnitud",
        "Solo los valores negativos de x",
        "Únicamente los puntos donde f(x) es discontinua",
      ],
      correct:
        "El comportamiento de la función cuando x toma valores muy grandes en magnitud",
    },
    {
      question:
        "Si al hacer x → ∞ en una función racional obtenemos un valor finito L, esto suele interpretarse como:",
      options: [
        "La función no tiene límite al infinito",
        "La función tiene una asíntota vertical en y = L",
        "La función tiene una asíntota horizontal en y = L",
        "La función es periódica de periodo L",
      ],
      correct: "La función tiene una asíntota horizontal en y = L",
    },
    {
      question:
        "¿Cuál de las siguientes afirmaciones es correcta sobre la existencia de límite en un punto?",
      options: [
        "Si f(a) no está definida, entonces el límite en a nunca existe",
        "El límite puede existir aunque la función no esté definida exactamente en x = a",
        "El límite existe solo si la función es derivable en a",
        "El límite y el valor de la función siempre son iguales",
      ],
      correct:
        "El límite puede existir aunque la función no esté definida exactamente en x = a",
    },
  ],
};

const difficultyOrder = ["easy", "medium", "hard"];

const difficultyNames = {
  easy: "Fácil",
  medium: "Medio",
  hard: "Difícil",
};

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let remaining = {
  easy: shuffle(questionSets.easy),
  medium: shuffle(questionSets.medium),
  hard: shuffle(questionSets.hard),
};

let currentDifficultyIndex = 0;
let currentQuestion = null;
let gameOver = false;
let hasAnsweredCurrent = false;

function setDifficultyLabel(key) {
  difficultyLabel.textContent = difficultyNames[key];
  difficultyLabel.dataset.level = key;
}

function pickNextQuestion() {
  while (
    currentDifficultyIndex < difficultyOrder.length &&
    remaining[difficultyOrder[currentDifficultyIndex]].length === 0
  ) {
    currentDifficultyIndex += 1;
  }

  if (currentDifficultyIndex >= difficultyOrder.length) {
    questionText.textContent = "¡Has completado todas las preguntas!";
    statusText.textContent =
      "Muy bien, has pasado por todos los niveles de dificultad.";
    checkBtn.disabled = true;
    nextBtn.style.display = "none";
    return;
  }

  const levelKey = difficultyOrder[currentDifficultyIndex];
  setDifficultyLabel(levelKey);

  const list = remaining[levelKey];
  const index = Math.floor(Math.random() * list.length);
  currentQuestion = list.splice(index, 1)[0];

  questionText.textContent = currentQuestion.question;
  statusText.textContent = "";
  hasAnsweredCurrent = false;
  optionsContainer.innerHTML = "";

  const shuffledOptions = shuffle(currentQuestion.options);

  shuffledOptions.forEach((optText) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = optText;
    btn.addEventListener("click", () => handleOptionClick(btn, optText));
    optionsContainer.appendChild(btn);
  });

  nextBtn.style.display = "none";
  card.classList.remove("lost", "correct");
}

function handleOptionClick(button, value) {
  if (gameOver || hasAnsweredCurrent || !currentQuestion) return;

  hasAnsweredCurrent = true;

  const isCorrect = value === currentQuestion.correct;

  if (isCorrect) {
    statusText.textContent = "¡Correcto! Pulsa siguiente para continuar.";
    card.classList.remove("lost");
    card.classList.add("correct");
    button.classList.add("correct");
    nextBtn.style.display = "inline-block";
  } else {
    questionText.textContent = "Perdiste";
    statusText.textContent = "Respuesta incorrecta. Recarga la página para volver a intentarlo.";
    gameOver = true;
    nextBtn.style.display = "none";
    card.classList.remove("correct");
    card.classList.add("lost");
    button.classList.add("incorrect");
  }

  // Desactivar todos los botones de opción
  Array.from(optionsContainer.querySelectorAll("button")).forEach((btn) => {
    btn.disabled = true;
  });
}

function handleNext() {
  if (gameOver) return;
  pickNextQuestion();
}

nextBtn.addEventListener("click", handleNext);

// Iniciar mostrando la primera pregunta fácil
pickNextQuestion();
