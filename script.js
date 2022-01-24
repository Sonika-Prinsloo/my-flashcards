// add flashcard
let add = document.getElementById("add");
// form for flashcard
let form = document.getElementById("article2");
let questionFill = document.getElementById("newTextQuestion");
let answerFill = document.getElementById("newTextAnswer").value;
let ul = document.getElementById("flashCards");
let createIt = document.getElementById("createIt");
let changeIt = document.getElementById("changeIt");

function flashcardNone() {
  form.style.display = "none";
  ul.style.display = "block";
}

function addFlashcard() {
  ul.style.display = "none"
  form.style.display = "flex";
  let questionFill = document.getElementById("newTextQuestion").value;
  let answerFill = document.getElementById("newTextAnswer").value;
  questionFill = '';
  answerFill = ''; 
  createIt.style.display = "block";
  changeIt.style.display = "none";
}

createIt.onclick = function() {
  // let ul = document.getElementById("flashCards");
  let questionFill = document.getElementById("newTextQuestion");
  let answerFill = document.getElementById("newTextAnswer");
  let question = '';
  let answer = '';
  question += questionFill.value;
  answer += answerFill.value;
  if(question && answer !== '') {
  let li = document.createElement("li");
  li.className = "card";
  ul.appendChild(li);

    // create front
    let divFront = document.createElement("div");
    divFront.className = "front";
    li.appendChild(divFront); // child

      // buttons
      let editDeleteButtons = document.createElement("article");
      editDeleteButtons.className = "editDelete";
      divFront.appendChild(editDeleteButtons); // child

        let editButton = document.createElement("span");
        editButton.className = "material-icons-outlined";
        editDeleteButtons.appendChild(editButton); // child

          let editIcon = document.createTextNode("edit");
          editButton.appendChild(editIcon); // child

        let deleteButton = document.createElement("span");
        deleteButton.className = "material-icons-outlined";
        editDeleteButtons.appendChild(deleteButton); // child

          let deleteIcon = document.createTextNode("delete");
          deleteButton.appendChild(deleteIcon); // child

      // show
      let showFront = document.createElement("article");
      showFront.className = "show";
      divFront.appendChild(showFront); // child

        // heading and paragraph
        let fronth2 = document.createElement("h2");
        fronth2.className = "fronth2";
        showFront.appendChild(fronth2); // child

          let fronth2Text = document.createTextNode("Question:");
          fronth2.appendChild(fronth2Text); // child

        let frontp = document.createElement("p");
        showFront.appendChild(frontp); // child

          let frontpText = document.createTextNode(question);
          frontpText.className = "cardQuestion";
          frontp.appendChild(frontpText) // child

        let backh2 = document.createElement("h2");
        showFront.appendChild(backh2); // child
        backh2.className = "backh2";

          let backh2Text = document.createTextNode("Answer:");
          backh2.appendChild(backh2Text); // child

        let backp = document.createElement("p");
        backp.className = "backp";
        showFront.appendChild(backp); // child

          let backpText = document.createTextNode(answer);
          backp.appendChild(backpText); // child

        
        // buttons
        let showAnswer = document.createElement("button");
        showFront.appendChild(showAnswer);
        showAnswer.className = "showAnswerButton";

          let showAnswerText = document.createTextNode("Show answer");
          showAnswer.appendChild(showAnswerText);
        
        let hideAnswer = document.createElement("button");
        showFront.appendChild(hideAnswer);
        hideAnswer.className = "hideAnswerButton";

          let hideAnswerText = document.createTextNode("Hide answer");
          hideAnswer.appendChild(hideAnswerText);
          
// delete card (li)
    deleteButton.onclick = function() {
      if (confirm("You are about to delete a flashcard")) {
        ul.removeChild(li);
      } else {
        return
      }
    }

// edit card (li)
    editButton.onclick = function() {
      createIt.style.display = "none";
      changeIt.style.display = "block";
      ul.style.display = "none";
      form.style.display = "flex";
      questionFill.value = frontp.innerHTML;
      answerFill.value = backp.innerHTML;
        changeIt.onclick = function() {
          let newQuestion = ''; 
          newQuestion += questionFill.value;
          let newAnswer = '';
          newAnswer += answerFill.value;
          if (newQuestion && newAnswer !== ''){
            frontp.innerHTML = newQuestion;
            backp.innerHTML = newAnswer;
            questionFill.value = '';
            answerFill.value = '';
          } else if ( question || answer == '') {
            alert("Please add a question and an answer");
            return
          } else if ( question == '') {
            alert("Please add a question and an answer");
            return
          } else if ( answer == ''){
            alert ("Please add a question and an answer");
            return
          }
          form.style.display = "none";
          ul.style.display = "block";
        }
        return
      }

  //see answer
  showAnswer.onclick = function() {
    if (divFront.style.backgroundColor = "var(--pink)") {
      li.style.transform = "rotateY(360deg)";
      backh2.style.display = "block";
      backp.style.display = "block";
      fronth2.style.display = "none";
      frontp.style.display = "none";
      divFront.style.backgroundColor = "white";
      hideAnswer.style.display = "block";
      showAnswer.style.display = "none";
    } 
    return
  }
  hideAnswer.onclick = function () {
    if (divFront.style.backgroundColor = "white") {
      li.style.transform = "rotateY(0deg)";
      backh2.style.display = "none";
      backp.style.display = "none";
      fronth2.style.display = "block";
      frontp.style.display = "block";
      divFront.style.backgroundColor = "var(--pink)";
      hideAnswer.style.display = "none";
      showAnswer.style.display = "block";
    }
    return
  }
  questionFill.value = '';
  answerFill.value = '';
  ul.style.display = "block";
  form.style.display = "none";
  } else if ( question || answer == '') {
    alert("Please add a question and an answer");
  } else if ( question == '') {
    alert("Please add a question and an answer");
  } else if ( answer == ''){
    alert ("Please add a question and an answer");
  }
}