import React, { useEffect,useState } from "react";
import './Meal.css';
import MealPics from "./MealPics";
import axios from "axios";


function MealFetch (){
    const[search,setSearch]=useState("");
    const[Mymeal,setMeals]=useState([]);
  
    
     useEffect(() => {

        axios
          .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
          .then((res) => {
            console.log(res.data);
            setMeals(res.data.meals);
            
          })
       },([]))


    const searchMeal=(evt)=>{
    if(evt.key==="Enter")
    {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res=>res.json())
        .then(data=> {
         setMeals(data.meals);
        setSearch("")
    })
    }

    }
return (
    <>
        <div className="main">
            <div className="heading">
                <h1>Search Your Food Recipe</h1>
                <h4>Welcome Back to Your Brand new Food Adventure Food Lovers!</h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search}  onKeyPress={searchMeal}/>

                <button>search here</button>


            </div>          
            <div className="container">
               {   
              
                (Mymeal==null)? <h4 className="notSearch">Not found</h4> :  Mymeal.map((res,i)=>{
         return(
              <MealPics key={i} data={res}/>)} 
                 
                ) 
               
               }
            </div>
        </div>
    </>
)
            }
export default MealFetch;

