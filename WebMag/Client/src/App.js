import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userApi";
import {Spinner} from "react-bootstrap";

const App = observer(()=> {
    const {user}=useContext(Context)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const token=localStorage.getItem('token')

        if(token!==null){
            check().then((data)=>{
                user.setUser(data)
                user.setIsAuth(true)
            }).finally(()=>{
                setLoading(false)
            })
        }
    },[user.IsAuth])

    if(loading){
        setTimeout(setLoading(false),100)
        return <Spinner animation={"grow"}/>
    }

  return (
    <BrowserRouter>
        <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
})

export default App;
