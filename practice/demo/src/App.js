import logo from './logo.svg';
import './App.css';
import First from './practice1';
import Factorial from './Factorial';
import Calculate from './Calculate';
import Operation from './Operation';
import Uppercase from './Uppercase';
import UseStateFact from './UseStateFact';
import CalculateUstate from './CalculateUstate';

function App() {
  return (
   <>
      {/* <First></First>
      <Factorial no="5"></Factorial><br></br><br></br>
      <Calculate a="3" b="4"></Calculate><br></br>
      <Operation choice="2" a="10" b="20"></Operation><br></br>
      <Uppercase></Uppercase>
      <UseStateFact></UseStateFact> */}
      <CalculateUstate></CalculateUstate>
      </>
  );
}

export default App;
