import Header from "./header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import SignIn from "./pages/login";
import SignUp from "./pages/signup";
import Confirmation from "./pages/confirmation";
import Forget from "./pages/forget";
import ForgetInit from "./pages/forgetInit";
import Contact from "./pages/contact";
import News from "./pages/news";
import Dept from "./pages/dept";
import Footer from "./footer";
import { createContext } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const StateUpdate = createContext();

function App() {
  const location = useLocation();
  console.log(location);
  const [signAs, setsignAS] = useState(null);
  return (
    <section className='w-[100vw] flex flex-col items-center'>
      <StateUpdate.Provider value={{signAs, setsignAS}}>
        {(location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/confirmation' || location.pathname === '/forgot' || location.pathname === '/forgotten') ? <></> : <Header/> }
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="signin" element={<SignIn/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="dept" element={<Dept/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="confirmation" element={<Confirmation/>}/>
          <Route path="forgotten" element={<ForgetInit/>}/>
          <Route path="forgot" element={<Forget/>}/>
        </Routes>
        {(location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/confirmation' || location.pathname === '/forgot' || location.pathname === '/forgotten') ? <></> : <Footer/> }
      </StateUpdate.Provider>
    </section>
  );
}

export {App, StateUpdate};
