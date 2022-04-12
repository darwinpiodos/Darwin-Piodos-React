import React, {useState, useEffect} from 'react';
import Header from './Header';
import './ProductList.css';
function ProductList()
{

    const [data,setData]=useState([]);
    useEffect (  ()=>{
       getData();
    },[])
   

    async function deleteOperation(id)
    {
        let result= await fetch("http://localhost:8000/api/delete/" +id,{
            method:'DELETE'
        });

        result = await  result .json();
        console.warn(result);
        getData(); 
    }


    async function getData(){
        let result= await fetch("http://localhost:8000/api/list");
        result= await result.json();
        setData(result)

    }

    return(
        
    
            <div className='col full-width'>
                    <Header/>
                <h1>Product List</h1>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Product ID #</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">Operation</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {
                            data.map((item)=>
                            <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>

                            <td><img style={{width:100,height:100}} src={"http://localhost:8000/" + item.file_path} /></td>

                            <td><button onClick={()=>deleteOperation(item.id)} className='btn btn-danger'>Delete</button></td>


                        


                            </tr>

                            
                            ) 
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
   
    )
}

export default ProductList;