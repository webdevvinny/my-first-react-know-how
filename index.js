import React from 'react';
import ReactDOM from 'react-dom/client';

const myArray = ['Apple', 'Banana', 'Orange', 'Melon'];

const myFirstElement = myArray.map((item)=> <ul> <li> {item} </li> </ul>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);

const checkName = () => {

   alert("Your name have been credited and accounted for!!!!");
}

const table = 
<>
   <form>
            <p>YOU MUST ENTER YOUR NAMES IN FULL</p>
            <label>Enter Your name: </label><br/>
            <input type='text'id='name' placeholder='Your Names'  required/>
            <br/>
            <input type='Submit' onClick={()=> {checkName()}} value='DisplayName!!'/>
           
   </form>
</>

let myArray1 = ["User One", "UserTwo", "User Three", "User Four"];

const element = ReactDOM.createRoot(document.getElementById('appIcon'));
element.render(table);

const roots = ReactDOM.createRoot(document.getElementById('root'));
roots.render(
   <>
   <h4>This is an array component being used!!!!</h4>
   {myArray1.map((users) => {
      return <p> {users}</p>
   })}


   </>
);

              
