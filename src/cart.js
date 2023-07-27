import { useState } from "react";

const Cart = ()=>
{
    const [isvisible , setisvisible] = useState(false)
    return(
    <>
    <div className="about">
      
       
        {
            isvisible ? <button onClick={()=>{setisvisible(false)}}>  bye button </button>
            :
            <button onClick={()=>{setisvisible(true)}}>  hi button </button>
        }
        { isvisible && 
           <p>hello there this is the data i wanted to show</p>
        }
     
    </div>
     <div className="about">
     some random data is there
      </div>
       <div className="about">
       some random data is there
        </div>
        </>
    );

    }
  




export default Cart;