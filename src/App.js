import './App.css';
import { useState } from 'react'
import fb from './firebase.js'
var initialize = false;

function App() {

  // Initializing the database to ease referencing in the future.

  let database = fb.database();

  // Variable displayed on the top bar on the calculator's display, showing the operation.

  const [operation, setOperation]= useState("");

  //  Variable displayed on the calculator's
  //  bottom bar on the display, showing the result of the operation as well as any new input.

  const [result, setResult] = useState("0");

  // Variable that determines if the operation gets executed based on the validity of the input

  const [executable, setExecutable] = useState(true);

  // Fill up  history, and initialize calculation count becuase of weird bug.
  // It's inside of an  if statement so that it doesn't execute everytime a user
  // presses on any button.

  if(!initialize) {
    detectNewOperation();
    checkAmount();
    initialize = true;
  }

  // This function detects when a user adds a new calculation

  function detectNewOperation() {
    database.ref("/").on("child_added", function(snapshot, prevChildKey) {
        updateHistory();
    });
  }

  // Function called when user clicks "="

  /*
    Details:
    - Only executes if the input is valid
    - The results are fixed to 3 decimal places, to change, tweak the parameter on toFixed(x)
    - The operation moves to the smaller line on top, and the result is displayed on the bigger line
    - Since Firebase doesn't have ordering by timestamp, I decided to order by key, and making each calculation
      have a unique key starting  from 0 to -Infinity.
    - I chose negative numbers, because if I chose positive I would have had to store them in an array, and reverse it,
      considering that the most recent would be at the bottom.
    - I then update the count of calculations, which is also negative, which helps set the next calculation's key
  */

  function enter() {
    if(executable) {
      setOperation(result);
      let sendResult = eval(result).toFixed(3).toString()
      setResult(sendResult);

      let amount = checkAmount();
      let position = amount - 1;
      let path = "history/" + position.toString();

      database.ref("count").set(--amount);
      database.ref(path).set(result + " = " + sendResult );
    }
  }

  // Update history

  /*
   Details:
    - "off()" prevents old values from being used.
    - Since I made the keys go from 0 to negative infinity, the most  recent calculation will have
      the most negative number, so ordering by key will have a list descending in time. Limit by 10
      gets the first 10.
    - I empty the box containing the history, and refresh it with the new 10.
  */

  function updateHistory(event) {
    database.ref("history/").off()
    database.ref("history/").orderByKey().limitToFirst(10).on('value', function(snapshot) {
      document.getElementById("history-block").innerHTML = '';
      snapshot.forEach(function(childSnapshot) {
        let htmlElement = "<div class=\"calculation\">" + childSnapshot.val() + "</div>";
        document.getElementById("history-block").innerHTML += htmlElement;
      })
    })
  }

  // Counts how many calculations there are on the database

  function checkAmount() {
    var amount = 0;
    database.ref("count").on('value', function(snapshot) {
      amount = snapshot.val();
    })
    return amount;
  }

  // Function called when user clicks "AC".

  function allClear() {
    setResult('0');
    setOperation("");
  }

  // Function called when user clicks "DEL", which deletes the last character of the input, unless it's only 0.

  function backspace() {
    if(result.length == 1) { setResult('0');  }
    else { setResult(result.substring(0,result.length - 1)); }
    setOperation("");
  }

  // Function called when user clicks on any number, adding it to the input.
  // If there is no input A.K.A "0", replace 0 instead of adding to it to avoid
  // leading zeros.

  // Also, given that eval() takes Integer + ( as an error, I automatically add a multiplication sign if a numbers
  // precedes a parenthesis

  function addInput(e) {
    let id = e.target.id;
    if(result == "0") { setResult(id); }
    else {
      if(id == "(" && Number.isInteger(parseInt(result.substring(result.length, result.length - 1)))) { setResult(result + "*" + id); }
      else { setResult(result + id); }
    }
    setOperation("")
  }


  // This function makes the top and bottom bars of the result display red or green, depending on the current input
  // and whether it's an actual valid operation or not

  // Invalid operations are the ones that finish in an operator.

  function validateInput() {
      try {
        eval(result);
        document.getElementById("resultParent").style.borderColor = "#E7FFE5";
        setExecutable(true);
      }
      catch(error) {
        document.getElementById("resultParent").style.borderColor = "#FFE5E5";
        setExecutable(false);
      }
  }


  return (
    <>
      <div id="navbar">Simple Calculator</div>
      <div id = "content">
        <div id="calculator-side">
          <div id="resultParent">
            <div id="operation">{operation}</div>
            <div onChange={setTimeout(validateInput,1)} id="result">{result}</div>
          </div>
          <div id="calculator">
            <div id="buttons">
              <button id="1" className="button" onClick={addInput}>1</button>
              <button id="2" className="button" onClick={addInput}>2</button>
              <button id="3" className="button" onClick={addInput}>3</button>
              <button id="-" className="button operator" onClick={addInput}>-</button>
              <button id="4" className="button" onClick={addInput}>4</button>
              <button id="5" className="button" onClick={addInput}>5</button>
              <button id="6" className="button" onClick={addInput}>6</button>
              <button id="+" className="button operator" onClick={addInput}>+</button>
              <button id="7" className="button" onClick={addInput}>7</button>
              <button id="8" className="button" onClick={addInput}>8</button>
              <button id="9" className="button" onClick={addInput}>9</button>
              <button id="*" className="button operator" onClick={addInput}>*</button>
              <button className="button" onClick={allClear}>AC</button>
              <button id="0" className="button" onClick={addInput}>0</button>
              <button id="." className="button" onClick={addInput}>.</button>
              <button id="/" className="button operator" onClick={addInput}>÷</button>
              <button id="(" className="button operator" onClick={addInput}>(</button>
              <button id=")" className="button operator" onClick={addInput}>)</button>
              <button className="button operator" onClick={backspace}>DEL</button>
              <button className="button special-key" onClick={enter}>=</button>
            </div>
          </div>
        </div>
        <div id="history-side">
          <div id="history-block">
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
