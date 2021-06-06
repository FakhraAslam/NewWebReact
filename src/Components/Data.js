import { useEffect,useState } from "react";


const Data=()=>{
    const [state,setState]=useState([]);
    useEffect(()=>{
         
             fetch("https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=174101a12d3444e793a0e2f34d414844")
              .then((responce)=>responce.json())
              .then((data)=>setState(data.articles))
          
    },[])
   
    return(
    <div>
        {state.map(e=><h1>{e.author}</h1>)}
    </div>);
}
export default Data;