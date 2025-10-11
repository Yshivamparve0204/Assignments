import { useState } from "react";

export default function UseStateFact()
{
let[num,setNum]=useState(0);
let[fact,setFact]=useState(1);
 function handler(event)
{
    num=event.target.value;
}
function setValue(){
    setNum(num);
}
 function factorial()
{
    for(let i=1;i<=num;i++)
    {
        fact=fact*i;
        setFact(fact);
    }
}
return(
    <div>
    enter the num:
    <input type="number"  onChange={handler}></input>
    <button type="submit" onClick={factorial}>factorial</button>
    <p>fact:{fact}</p>

    </div>
)
}
