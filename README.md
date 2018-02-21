Synopsis

-Basic calculator in native JavaScript


Code Example

-This function checks if at least a character is present, and delete it, if it is.

 function deleteAChar () {
    if (toCalc !== "") {
      console.log("a");
    toCalc = toCalc.substr(0, toCalc.length-1);
    display.textContent = toCalc;
  } else {
    display.textContent = "Pas de valeur à supprimer";
  }
  }


Motivation

-Newbie in programming and JavaScript language, i'm creating applications to improve my skills.


Contributors

-adami0

License

-MIT License