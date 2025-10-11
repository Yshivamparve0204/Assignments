import { useState } from "react";

export default function CalculateUstate() {
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [result, setResult] = useState(0);
    function handler1(event) {
        num1 = event.target.value;
        num2 = event.target.value;
    }
    function addition() {
       setNum1(num1);
        setNum2(num2);

        result = parseInt(num1) +parseInt( num2);
        setResult(result);
    }
    return (
        <>
            enter no1:
            <input type="number" onChange={handler1} ></input>
            <input type="number" onChange={handler1}></input>
            <button type="add" onClick={addition}>add</button>
            <p>addition:{result}</p>
        </>
    )

}