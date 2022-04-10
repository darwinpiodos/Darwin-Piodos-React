
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
function Register()
{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const history=useHistory();

    async function signUp()
    {
        let item={name,email, password}
        console.warn(item)

        let result =await fetch("http://127.0.0.1:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json' 
            }
        })
        result=await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/add")
    }
    return(
        <div className='row'>
            <div className='col-sm-6 offset-sm-3'>
                <h1>Register</h1>

                <div className='form-group'>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="enter name"></input>
                </div>

                <div className='form-group'>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="enter email"></input>
                </div>

                <div className='form-group'>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="enter password"></input>
                </div>

                <div className='form-group'>
                    <button class="btn btn-primary" onClick={signUp}>Sign Up</button>
                </div>

            </div>
        </div>
    )
}

export default Register;