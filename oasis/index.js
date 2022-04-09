function load() {
    var btns = document.querySelectorAll("#calculator span");
    var operators = ["+", "-", "x", "÷"];
    var inputScreen = document.querySelector("#screen");
    var btnValue;
    var input;
  

  
    for (var i = 0; i < btns.length; i++) {
      var decimalAdded = false; // Flag used to avoid two decimal
  
      btns[i].addEventListener("click", function() {
        btnValue = this.innerHTML;
        input = inputScreen.innerHTML;
  
        switch (btnValue) {

          case "D":

          input=inputScreen.innerHTML;
          input=input.substring(0,len(input)-2);
          inputScreen.innerHTML=input;
          decimalAdded = false;
          break;

         
          case "C":
            inputScreen.innerHTML = "";
            decimalAdded = false;
            break;
          case "=":
            
            var lastChar = input[input.length - 1];
  
            
            input = input.replace(/x/g, "*").replace(/÷/g, "/");
  
           
            if (operators.indexOf(lastChar) > -1 || lastChar == ".")
              input = input.replace(/.$/, "");
  
            if (input) {
              
              inputScreen.innerHTML = eval(input);
            }
            decimalAdded = false;
            break;
          case ".":
            if (!decimalAdded) {
              inputScreen.innerHTML += btnValue;
              decimalAdded = true;
            }
            break;
          case "+":
          case "-":
          case "x":
          case "÷":
            
            var lastChar = input[input.length - 1];
  
            
            if (input != "" && operators.indexOf(lastChar) == -1)
              inputScreen.innerHTML += btnValue;
            
            else if (input == "" && btnValue == "-")
              inputScreen.innerHTML += btnValue;
  
            
            if (operators.indexOf(lastChar) > -1 && input.length > 1) {
              inputScreen.innerHTML = input.replace(/.$/, btnValue);
            }
            decimalAdded = false;
            break;
          default:
            inputScreen.innerHTML += btnValue;
            decimalAdded = false;
            break;
        }
      });
    }
  }