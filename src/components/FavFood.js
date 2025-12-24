import { useState } from "react";
export default function FavFood(){
    const foods = ["watermelon","apple","hotdogs","sandwich","lemon","apple"];
    const [message,setMessage] = useState("click any food");
    const handleClick =(food) => {
        setMessage(`i love ${food}`);
    };
return (
    <div>
        <h2>
            My Favorite Foods
        </h2>
        <ul>
            {foods.map
        ((food,index) => 
            (
               <li key={index}>
                {food}
                <button onClick={() => handleClick(food)} style={{marginLeft:"10px"}}>Like</button>
               </li>
            )
        )
            }
        </ul>
        <p>{message}</p>
    </div>
);
}
