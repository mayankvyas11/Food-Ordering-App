import { useEffect , useState } from "react";




const useRestaurantCard=()=>
{
    [allrestaurant , setAllRestaurant] = useState([]);
    [filterdrestaurant , setfilteredRestaurant] = useState([]);
    useEffect(() => {
        getRest();
      }, []);
    
      async function getRest() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      }
     return {allrestaurant , filterdrestaurant}
    
}

export default useRestaurantCard;