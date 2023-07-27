
import { useEffect, useState } from 'react';
import RestrauntCard from './RestaurantCard';
import Shimmer from './shimmer';
import { Link } from 'react-router-dom';
import useRestaurantCard from '../utils/useRestaurantcard';
import useonline from '../utils/useonline';


function filterData(searchtext,restaurant){
  const filterData = restaurant.filter((restaurants)=>
  
    restaurants.data.name.toLowerCase().includes(searchtext.toLowerCase())
  );
  return filterData;
}

const Body = ({user})=>
{
  [searchtext , setSearchText] = useState('');
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

  const isonline = useonline();
  if(!isonline)
  {
    <h1>lost my internet connection</h1>
  }


  if(!allrestaurant)
  {
    return null;
  }
  

  return (allrestaurant.length == 0) ? <Shimmer /> :   (
    <>
    <div className='search-bar'>
      <input className="input"
      type="text"
      placeholder="search"
       value = {searchtext}
       onChange={(e)=>
      {
        setSearchText(e.target.value);
      }}
      />
      <button className='button' onClick={()=>
      {
        const data = filterData(searchtext , allrestaurant)
        setfilteredRestaurant(data);
      }}>enter</button>
    </div>
   <div className='cards'>{
    (filterdrestaurant.length==0) ? <h1>"Nothing Found "</h1>
    :
    filterdrestaurant.map((item)=>
    {
      return(
      <Link to={"/restaurant/"+item.data.id}  key = {item.data.id}
      >
      <RestrauntCard  {...item.data}  />
     </Link>
      );



    })
  }
   
   </div>
   
  

</>
  );
}

export default Body;

