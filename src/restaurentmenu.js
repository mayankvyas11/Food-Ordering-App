import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import useRestaurant from "../utils/useRestaurant";



const Restaurantmenu = ()=>
{   const params = useParams();
    const {id} = params;
   const restaurant = useRestaurant(id)
   
    return(
    <>
    <div>
    <h1>id : {id}</h1>
    
    <img src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurant.cloudinaryImageId} />
    <h3>{restaurant.area}</h3>
    </div>
    <div>
        <h1>Menu</h1>
        <ul>
            {Object.values(restaurant.menu.items).map((item)=>
            {
                <li key={item.id}>
                    {item.name}
                </li>
            })}
        </ul>
    </div>
    </>
    );
}

export default Restaurantmenu;