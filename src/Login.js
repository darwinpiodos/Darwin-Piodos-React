import {useHistory} from 'react-router-dom'; 
import React, {useState, useEffect} from 'react';
import Header from './Header';
function Login()
{
    const history=useHistory();

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push("/add")
        }
    },[])


    return(
      
        <div className='row'>
              <Header/>
            <div className='col-sm-6 offset-sm-3'>
                <h1>Login</h1>
                <div className='form-group'>
                </div>
            </div>
        </div>
    )
}

export default Login;