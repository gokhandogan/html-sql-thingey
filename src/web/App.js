import logo from './logo.svg';
import './App.css';

const execute = ()=>{
  let sqlInput = document.getElementById("sql-input");
  console.log(sqlInput.value);
  var prom = fetch("http://localhost:5000/api/parse", {method:"POST", body:sqlInput.value})
  prom.then((res)=>{
	  return res.text();
	  //return res.json();
  }).then((json)=>{
	  let textOutput = document.getElementById("text");
	  textOutput.innerText = json
	  console.log(json);
  }) 
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
		<input id="sql-input" type="text"></input>
		<button onClick={execute}>Execute</button>
		<span id="text"></span>
      </header>
    </div>
  );
}
export default App;