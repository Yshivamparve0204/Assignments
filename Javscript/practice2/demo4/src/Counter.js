export function Counter(){
  let count =0;
    CounterIncrease(){
        
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={CounterIncrease}></button>
        </>
    )
}