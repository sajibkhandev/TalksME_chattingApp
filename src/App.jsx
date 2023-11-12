import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import LoginReg from './pages/LoginReg';

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/"
      element={<LoginReg />}>  
      </Route>
    
   </>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App