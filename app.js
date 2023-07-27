import  ReactDOM , {createRoot} from 'react-dom/client';
import React, { Children, useState } from 'react';
import Heading from './Heading';
import Body from './src/Body';
import About from './src/About';
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom"
import Contact from './src/contact';
import Cart from './src/cart';
import RestaurantMenu from './src/restaurentmenu';
const Applayout = ()=>{
 return (
  
  <>
  <Heading />
  <Outlet />
  </>
 );
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Applayout />,
    children :  [
  {
    path : "/",
    element : <Body user = {{
      name:"mv",
      email:"email.com"
    }} />

  },
  {
    path : "/about",
    element : <About />

  },
  {
    path : "/contact",
    element : <Contact />

  },
  {
    path : "/cart",
    element : <Cart />

  },
  {
    path : "/restaurant/:id",
    element : <RestaurantMenu  />

  }

]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = { appRouter} />);




