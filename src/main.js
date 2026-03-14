const questionText = document.getElementById("question-text");
const nextBtn = document.getElementById("next-btn");
const statusText = document.getElementById("status-text");
const card = document.querySelector(".question");
const optionsContainer = document.getElementById("options-container");

const explanationContainer = document.getElementById("explanation-container");

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
      explanation: "El límite describe la tendencia de f(x) a medida que x se aproxima a un valor, sin importar lo que pase exactamente en el punto."
    },
    {
      question: "¿Como se representa simbolicamente que x se acerca a un valor 'a' unicamente por valores mayores que 'a'?",
      options: [
        "x = a",
        "x ->  ∞",
        "x -> a+",
        "x -> a-",
      ],
      correct: "x -> a+",
      explanation: "El superíndice '+' indica el límite lateral derecho, es decir, una aproximación desde valores mayores (a la derecha de 'a')."
    },
    {
      question: "¿Qué se puede afirmar sobre el límite si al evaluar directamente la función obtenemos la forma 0/0?",
      options: [
        "El resultado del limite es automaticamente cero",
        "El limite no existe bajo ninguna circunstancia",
        "Se trata de una indeterminacion y se debe simplificar o usar otro método",
        "La funcion es continua en ese punto",
      ],
      correct: "Se trata de una indeterminacion y se debe simplificar o usar otro método",
      explanation: "0/0 es una indeterminación; significa que el límite podría existir, pero el álgebra actual oculta el valor real hasta que simplificamos."
    },
    {
      question: "En el cálculo de límites, ¿qué representa el símbolo ∞? ",
      options: [
        "Describe que los valores de la función o la variable aumentan indefinidamente",
        "Un punto especifico en la recta numerica o plano cartesiano",
        "Un numero real extremadamente grande",
        "El valor donde la función siempre se detiene",
      ],
      correct: "Describe que los valores de la función o la variable aumentan indefinidamente",
      explanation: "El infinito no es un número real, sino una notación para indicar crecimiento sin cota o límite superior."
    },
    {
      question: "¿Cuál es el límite de la función constante F(x) = k cuando x -> a?",
      options: [
        "El limite no existe",
        "El valor del limite es a",
        "El valor del limite es k",
        "EL limite es infinito",
      ],
      correct: "El valor del limite es k",
      explanation: "Como la función siempre devuelve k para cualquier valor de x, su tendencia al acercarse a 'a' sigue siendo la misma constante."
    },
    {
      question: "Si decimos que lim (x → a) f(x) = L, entonces:",
      options: [
        "f(a) siempre es igual a L",
        "f(x) nunca se acerca a L",
        "f(x) se puede acercar tanto como queramos a L cuando x se acerca a a",
        "f(x) es constante e igual a L",
      ],
      correct: "f(x) se puede acercar tanto como queramos a L cuando x se acerca a a",
      explanation: "Esta es la definición intuitiva: la distancia entre f(x) y L se reduce arbitrariamente a medida que x se acerca a 'a'."
    },
    {
      question: "¿Qué significa que una función tenga límite en un punto x = a?",
      options: [
        "Que la función es creciente en todo su dominio",
        "Que los valores de f(x) se estabilizan alrededor de un número al acercarse a x = a",
        "Que la función tiene un máximo absoluto en x = a",
        "Que la función tiene una asíntota vertical en x = a",
      ],
      correct: "Que los valores de f(x) se estabilizan alrededor de un número al acercarse a x = a",
      explanation: "Tener límite implica convergencia; los valores de la función se 'asientan' cerca de un valor fijo L."
    },
    {
      question: "Cuando hablamos del límite de f(x) cuando x tiende a a, ¿qué ocurre con x?",
      options: [
        "Debe ser exactamente igual a a",
        "Se aproxima a 'a', pero no es necesario que tome el valor a",
        "Siempre se aleja de a",
        "Debe ser mayor que a",
      ],
      correct: "Se aproxima a 'a', pero no es necesario que tome el valor a",
      explanation: "El análisis de límites se enfoca en el comportamiento 'vecinal'. Lo que ocurra exactamente en x = a es irrelevante para el límite."
    },
  ],
  medium: [
    {
      question: "Si los límites laterales por la izquierda y por la derecha de f(x) en x = a son diferentes, entonces:",
      options: [
        "El límite de f(x) en a existe y es la media de ambos",
        "El límite de f(x) en a no existe",
        "El límite de f(x) en a siempre es cero",
        "La función es continua en x = a",
      ],
      correct: "El límite de f(x) en a no existe",
      explanation: "Para que el límite general exista, ambos caminos (izquierda y derecha) deben llevar exactamente al mismo valor."
    },
    {
      question: "Si lim x->2 f(x) = 4 y lim x->2 g(x) = 3, ¿cuál es el valor de lim x->2 [f(x) + g(x)]?",
      options: [
        "2",
        "12",
        "7",
        "No se puede determinar",
      ],
      correct: "7",
      explanation: "Propiedad de linealidad: el límite de una suma es la suma de los límites (4 + 3 = 7)."
    },
    {
      question: "Si una función tiene una asintota horizontal en y = 0, ¿qué sucede cuando x -> ∞?",
      options: [
        "La función desaparece",
        "Los valores de la función se aproximan cada vez mas a cero",
        "La función toca el eje x en infinitos puntos",
        "Los valores de la función crecen infinitamente",
      ],
      correct: "Los valores de la función se aproximan cada vez mas a cero",
      explanation: "Una asíntota horizontal en y=0 indica que la función tiende a estabilizarse sobre el eje X en el infinito."
    },
    {
      question: "¿Qué relación hay entre límite y continuidad en un punto x = a?",
      options: [
        "Si f es continua en a, entonces el límite en a no existe",
        "f es continua en a si existe el límite en a y coincide con f(a)",
        "f es continua en a solo si f(a) = 0",
        "La continuidad y el límite no tienen relación",
      ],
      correct: "f es continua en a si existe el límite en a y coincide con f(a)",
      explanation: "La continuidad une el concepto de tendencia (límite) con el valor real de la función en ese punto exacto."
    },
    {
      question: "¿Qué suele indicar la existencia de una asíntota vertical en x = a para una función f(x)?",
      options: [
        "Que f(x) tiende a un número finito cuando x → a",
        "Que el límite de f(x) cuando x → a es infinito o menos infinito",
        "Que f(x) es constante cerca de a",
        "Que f(x) tiene un máximo local en a",
      ],
      correct: "Que el límite de f(x) cuando x → a es infinito o menos infinito",
      explanation: "Las asíntotas verticales ocurren en puntos donde la función crece sin control debido a una división por un valor casi nulo."
    },
    {
      question: "¿Cuál es el resultado de lim x->∞ 1/x?",
      options: [
        "No existe",
        "1",
        "0",
        " ∞",
      ],
      correct: "0",
      explanation: "Cualquier número fijo dividido por algo que crece eternamente da como resultado una cantidad que tiende a nada (cero)."
    }
  ],
  hard: [
    {
      question: "Al resolver lim x->3 (x² - 9)/(x - 3), ¿Que tecnica es la mas adecuada para eliminar la indeterminación?",
      options: [
        "Multiplicar por el conjugado",
        "Racionalización",
        "Evaluar x = 0",
        "Factorización de una diferencia de cuadrados",
      ],
      correct: "Factorización de una diferencia de cuadrados",
      explanation: "Al factorizar x²-9 como (x-3)(x+3), cancelamos el factor (x-3) que causa la división por cero."
    },
    {
      question: "Cuando estudiamos el límite de f(x) cuando x tiende a infinito, ¿qué estamos analizando?",
      options: [
        "El comportamiento de la función muy cerca de un punto concreto",
        "El comportamiento de la función cuando x toma valores muy grandes en magnitud",
        "Solo los valores negativos de x",
        "Únicamente los puntos donde f(x) es discontinua",
      ],
      correct: "El comportamiento de la función cuando x toma valores muy grandes en magnitud",
      explanation: "Esto analiza el comportamiento asintótico o de largo plazo en los extremos de la gráfica."
    },
    {
      question: "Si al hacer x → ∞ en una función racional obtenemos un valor finito L, esto suele interpretarse como:",
      options: [
        "La función no tiene límite al infinito",
        "La función tiene una asíntota vertical en y = L",
        "La función tiene una asíntota horizontal en y = L",
        "La función es periódica de periodo L",
      ],
      correct: "La función tiene una asíntota horizontal en y = L",
      explanation: "Si el valor de la función se estabiliza en L cuando x crece mucho, la recta horizontal y=L es su guía asintótica."
    },
    {
      question: "¿Cuál de las siguientes afirmaciones es correcta sobre la existencia de límite en un punto?",
      options: [
        "Si f(a) no está definida, entonces el límite en a nunca existe",
        "El límite puede existir aunque la función no esté definida exactamente en x = a",
        "El límite existe solo si la función es derivable en a",
        "El límite y el valor de la función siempre son iguales",
      ],
      correct: "El límite puede existir aunque la función no esté definida exactamente en x = a",
      explanation: "El límite estudia la tendencia de los vecinos. Un 'hueco' en f(a) no impide que sepamos hacia dónde se dirigía la curva."
    },
    {
      question: "Si lim x->0+ f(x) = +∞ y lim x->0- f(x) = +∞, ¿qué podemos decir sobre el limite en general?",
      options: [
        "El limite es 0",
        "El limite no existe porque no es un numero real",
        "El limite es indeterminado",
        "El limite es +∞",
      ],
      correct: "El limite es +∞",
      explanation: "Aunque el infinito no es un número real, si ambas tendencias laterales coinciden en dirección, se asigna esa tendencia al límite general."
    },
    {
      question: "¿Que ocurre con el limite lim x->∞ 1/x²?",
      options: [
        "Es igual a 0",
        "Es igual a 1",
        "Tiende a -∞",
        "Tiende a +∞",
      ],
      correct: "Es igual a 0",
      explanation: "Al igual que 1/x, el término 1/x² disminuye hacia cero rápidamente conforme x aumenta al infinito."
    }
  ],
};

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let remainingQuestions = shuffle([
  ...questionSets.easy,
  ...questionSets.medium,
  ...questionSets.hard,
]);
let currentQuestion = null;
let gameOver = false;
let hasAnsweredCurrent = false;

function pickNextQuestion() {
  if (remainingQuestions.length === 0) {
    questionText.textContent = "¡Has completado todas las preguntas!";
    statusText.textContent = "¡Felicidades, has respondido todo!";
    nextBtn.style.display = "none";
    explanationContainer.style.display = "none";
    return;
  }

  currentQuestion = remainingQuestions.pop();

  questionText.textContent = currentQuestion.question;
  statusText.textContent = "";
  explanationContainer.style.display = "none";
  explanationContainer.textContent = "";
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
    
    // Mostrar explicación
    if (currentQuestion.explanation) {
      explanationContainer.textContent = currentQuestion.explanation;
      explanationContainer.style.display = "block";
    }
    
    nextBtn.style.display = "inline-block";
  } else {
    questionText.textContent = "Perdiste";
    statusText.textContent = "Respuesta incorrecta. Recarga la página para volver a intentarlo.";
    gameOver = true;
    nextBtn.style.display = "none";
    explanationContainer.style.display = "none";
    card.classList.remove("correct");
    card.classList.add("lost");
    button.classList.add("incorrect");
  }

  Array.from(optionsContainer.querySelectorAll("button")).forEach((btn) => {
    btn.disabled = true;
  });
}

function handleNext() {
  if (gameOver) return;
  pickNextQuestion();
}

nextBtn.addEventListener("click", handleNext);

// Iniciar juego
pickNextQuestion();