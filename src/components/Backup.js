// import React, { useState } from "react";
// import './Meal.css';
// import MealPics from "./MealPics";



// function MealFetch (){
//     const[search,setSearch]=useState("");
//     const[Mymeal,setMeal]=useState();
//     const searchMeal=(evt)=>{
//         if(evt.key==="Enter")
//         {
//             fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
//             .then(res=>res.json())
//             .then(data=> {setMeal(data.meals);
//             setSearch("")
//         })
//         }
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="heading">
//                     <h1>Search Your Food Recipe</h1>
//                     <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4>
//                 </div>
//                 <div className="searchBox">
//                     <input type="search" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
//                 </div>
//                 <div className="container">
//                    {   
                  
//                     (Mymeal==null)? <p className="notSearch">Not found</p> : 
//                          Mymeal.map((res)=>{
//                              return(
//                             <MealPics data={res}/>)} 
                     
//                     ) 
                   
//                    }
//                 </div>
//             </div>
//         </>
//     )
// }
// export default MealFetch;

 


// import React from "react";
// import {useEffect,useState}from "react";
// import axios from "axios";

// function About(){
//     const[query,setQuery]=useState("")
//     const[label, setLabel]=useState([])

// const APP_ID= "42358fbd"

// const APP_KEY="1d8cf565784c7ff258576873c975ba0c"

// // const url=`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=cooking&ingr=${query}`

// // async function getFacts(){
// //     const result= await axios.get(url)
// //     setQuery (result.data)
// //     console.log(result.data)
// // const Info=result.data

// useEffect(() => {

//         axios
//           .get(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=cooking&ingr=${query}`)
//           .then((res) => {
//             console.log(res.data);
//             setQuery (res.data);
            
//           })
//        },[])



// const submitForm = e =>{
//     e.preventDefault();

//     return(
//    <div>    
// <form className="form" onSubmit={submitForm}>
// <input type="text" placeholder="enter ingredients "value={label} onChange={e => setLabel(e.target.value)}/>
// <button type="submit">Enter</button>

// </form>

// <div>
    
// {query.map((item,i)=>{
// return(
//    <div key={i}> 
//        <p>{item.dietLabels}{item.healthLabels} </p>
//    </div>
// )
// })}
// </div>
// </div>
// )

// }
// }
// export default About;






import React from "react";
import {useEffect,useState}from "react";
import axios from "axios";

function About(){
return(
    <div>

)


{/* //     const[query,setQuery]=useState([])
//     const[label, setLabel]=useState([])

// const APP_ID= "42358fbd"

// const APP_KEY="1d8cf565784c7ff258576873c975ba0c"

// // const url=`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=cooking&ingr=${query}`

// // async function getFacts(){
// //     const result= await axios.get(url)
// //     setQuery (result.data) */}
// //     console.log(result.data)
// // const Info=result.data

// useEffect(() => {
//     getFacts()
// },[])
//       const getFacts=  axios
//           .get(`https://api.edamam.com/search?q=seafood&app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=cooking&ingr=${label}`)
//           .then((res) => {
//             console.log(res.data);
//             setQuery (res.data);
            
          

//     return(
//    <div>    
// <form className="form" >
// <input type="text" placeholder="enter ingredients "value={label} onChange={e => setLabel(e.target.value)}/>
// <button type="submit">Enter</button>

// </form>

// </div> 
    
// {/* {/* // {query.map((item,i)=>{
// // return( */}
// //    <div key={i}> 
// //        <p>{item.dietLabels}{item.healthLabels} </p>
// //    </div>
// // )
// // })}
// // </div>
// // </div>
// // ) */}

// // }
// // }
export default About;    
   