export default function Calculate(props)
{
    let a=parseInt(props.a);
    let b=parseInt(props.b);
    let c=parseInt(a+b);
    
    return (<>
    {"Addition is "+c} <br></br>
    {"Subtraction is "+(a-b)}<br></br>
     {"Multiplication is "+(a*b)}<br></br>
      {"Division is "+(a/b)}
    </>);


}