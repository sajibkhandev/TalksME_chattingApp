import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import LoginReg from './pages/LoginReg';
import Home from './pages/Home';
import ForgetPassword from './pages/ForgetPassword';
import RootLayouts from './components/RootLayouts';
import Chat from './pages/Chat';
import People from './pages/People';
import Group from './pages/Group';
import Friend from './pages/Friend';

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/"
      element={<LoginReg />}>  
    </Route>
    <Route
      path="/forgetpassword"
      element={<ForgetPassword />}>  
    </Route>
    <Route
      path="/"
      element={<RootLayouts />}>  
          <Route
          path="home"
          element={<Home />}>  
          </Route>
          <Route
          path="chat"
          element={<Chat />}>  
          </Route>
          <Route
          path="group"
          element={<Group />}>  
          </Route>
          <Route
          path="friends"
          element={<Friend />}>  
          </Route>
          <Route
          path="people"
          element={<People />}>  
          </Route>
    </Route>
    
   </>
  )
);

const App = () => {
  return (
    <>
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <RouterProvider router={router} />
    </>
  )
}

export default App