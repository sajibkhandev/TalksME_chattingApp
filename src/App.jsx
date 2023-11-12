import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/"
      element={<Login />}>  
      </Route>
    <Route
      path="/registration"
      element={<Registration />}>  
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