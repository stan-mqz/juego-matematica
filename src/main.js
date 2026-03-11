


// const Fr = [{
//   question: "¿Cuál es el círculo de Do mayor?",
//   Answare: "Do-Fa-Sol",
//   Options: []
// }, {
//   question: "¿Cuál es el círculo de Re mayor?",
//   Answare: "Re-Sol-La",
//   Options: []
// }, {
//   question: "¿Cuál es el círculo de Mi mayor?",
//   Answare: "Mi-La#-Si",
//   Options: []
// }, {
//   question: "¿Cuál es el círculo de Fa mayor?",
//   Answare: "Fa-Sib-Do",
//   Options: []
// }, {
//   question: "¿Cuál es el círculo de Sol mayor?",
//   Answare: "Sol-Do-Re",
//   Options: []
// }, {
//   question: "¿Cuál es el círculo de La mayor?",
//   Answare: "La-Re-Mi",
//   Options: []
// }, {
//   question: "¿Cuál es el círculo de Si mayor?",
//   Answare: "Si-Mi-Fa#",
//   Options: []
// }];
// let A = Fr.map(n => n.Answare)
// , Dr = 0;
// const tn = document.getElementById("question")
// , Rn = document.querySelectorAll(".option")
// , B = document.getElementById("next");
// B.addEventListener("click", () => {
//   if (D.length > 1 ? B.innerText = "Siguiente" : B.innerText = "Ver resultados",
//   D.length > 0) {
//       Rr(),
//       B.style.display = "none";
//       return
//   } else
//       tn.innerText = `${Dr}/7`,
//       B.innerText = "Reiniciar",
//       D = Lr()
// }
// );
// const Lr = () => V.shuffle(Fr)
// , ht = n => (A = A.filter(r => r !== n.Answare),
// A = V.shuffle(A).slice(0, 3),
// A = [...A, n.Answare],
// A = V.shuffle(A),
// console.log(A),
// A)
// , Rr = () => {
//   if (D.length === 0) {
//       tn.innerText = "Fin";
//       return
//   }
//   const n = D.pop();
//   tn.innerText = n.question,
//   A = ht(n),
//   Rn.forEach( (r, e) => {
//       r.innerText = A[e],
//       r.classList.remove("correct", "incorrect"),
//       r.onclick = () => {
//           r.innerText === n.Answare ? (r.classList.add("correct"),
//           console.log("✅ Es correcto"),
//           Dr += 1) : (console.log("❌ Incorrecto"),
//           r.classList.add("incorrect")),
//           Rn.forEach(t => t.onclick = null),
//           B.style.display = "inline"
//       }
//   }
//   )
// }
// ;
// let D = Lr();
// Rr();
