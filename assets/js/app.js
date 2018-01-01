(function app() {


  console.log("app");

  let resBtn, show, display, del, calc = 0, toCalc = "", toCalc2 = "", operators, result, numToCalc, array = [], string_result, number_result;

  // function displayOperators() {
  //   console.log(array);
  //   if (toCalc === "" && this.value !== "-" && array === []) {
  //     console.log("a");
  //     display.textContent = "Saisis une valeur à calculer";
  //   } else if (this.value !== "-" && toCalc === "" && array[array.length-1] === "+" || this.value !== "-" && toCalc === "" && array[array.length-1] === "*" || this.value !== "-" && toCalc === "" && array[array.length-1] === "/") {
  //     console.log("b");
  //     display.textContent = "Change de disque!";
  //   } else if (toCalc === "" && array[array.length-1] !== "-" && this.value !== "+" && this.value !== "*" && this.value !== "/") {
  //     console.log("c");
  //     console.log(array[array.length-1]);
  //     array.push(this.value);
  //   } //else if (array[array.length-1] === "-" && display.textContent === "" || display.textContent === "Change de disque!" || display.textContent === "Saisis une valeur à calculer" ){
  //   //   console.log(("d"));
  //   //   display.textContent = "Change de disque!";
  //     else if (array[array.length-1] === "-") {
  //     console.log("e");
  //     display.textContent = "Change de disque!";
  //   } else {
  //     console.log("f");
  //     array.push(toCalc);
  //     array.push(this.value);
  //     toCalc = "";
  //   }
  // };

  function displayOperators() {
    console.log(array);
    if (toCalc !== "") {
      console.log("a");
      array.push(toCalc);
      array.push(this.value);
      display.textContent = this.value;
      toCalc = "";
    } else if (toCalc === "" && this.value !== "-" && !array[0]) {
      console.log("b");
      display.textContent = "Veuillez saisir une donnée valide!";
    } else if (toCalc === "" && this.value === "-" && !array[0]) {
      console.log("c");
      array.push(this.value);
      display.textContent = this.value;
    } else if (isNaN(array[array.length-1])) {
      console.log("d");
      display.textContent = "Veuillez saisir une donnée valide!";
    } else {
      console.log("e");
      array.push(toCalc);
      array.push(this.value);
      toCalc = "";
      display.textContent = this.value;
    }
  }

  function showMeWhatImDoing () {
    showing = array.join(" ");
    display.textContent = `${showing} ${toCalc}`;
  }

  function reset () {
    array = [];
    toCalc = "";
    display.textContent = "";
  }

  function displayNumbers() {
    toCalc += this.value;
    display.textContent = toCalc;
  };

  function calculate() {
    if (toCalc !== "") {
      console.log("a");
      array.push(toCalc);
      toCalc = "";
      string_result = array.join("");
      console.log(string_result);
      number_result = eval(string_result);
      console.log(number_result);
      display.textContent = number_result;
      array = [];
      array.push(number_result);
      console.log(array);
    } else if (!number_result) {
      console.log("b");
      console.log("else");
      console.log(number_result);
      display.textContent = number_result;
    } else {
      console.log("c");
      display.textContent = "Veuillez saisir une donnée valide!";
    }
  }

  function deleteAChar () {
    if (toCalc !== "") {
      console.log("a");
    toCalc = toCalc.substr(0, toCalc.length-1);
    display.textContent = toCalc;
  } else {
    display.textContent = "Pas de valeur à supprimer";
  }
  }

  function associateButtons () {
    del = document.getElementById("delete");
    del.addEventListener("click", deleteAChar);
    show = document.getElementById("show");
    show.addEventListener("click", showMeWhatImDoing);
    display = document.getElementById("display");
    operators = document.querySelectorAll(".operator");
    resBtn = document.getElementById("resBtn");
    resBtn.addEventListener("click", reset);
    var numbers = document.querySelectorAll(".number");
    let j = 0;
    numbers.forEach(function (e) {
      e.addEventListener("click", displayNumbers);
    });
    operators.forEach(function (f) {
      f.addEventListener("click", displayOperators);
    });
    result = document.getElementById("equal");
    result.addEventListener("click", calculate);
  }
  window.addEventListener("DOMContentLoaded", associateButtons);
}());
