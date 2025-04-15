import { useState } from "react";

function App (){
  let [counter,setcounter]=useState(13);
  const add=()=>{
    setcounter(counter+1)
  }
  const dec=()=>{
    if(counter<0){
      setcounter(counter)
    }else{
    setcounter(counter-1)
    }
  }
  return(
    <>
    <div><h1>counter {counter}</h1></div>
    <button onClick={add}>add</button>
  <br/>
  <button onClick={dec}>dec</button>
    </>
  );
}
export default App;