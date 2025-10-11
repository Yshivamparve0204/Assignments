export default function Factorial(props)
{
    let n=props.no;
let fact=1;
for(let i=1;i<=n;i++)
{
    fact=fact*i;
}
return("factorial is:"+fact);
}