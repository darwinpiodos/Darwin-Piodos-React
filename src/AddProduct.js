import Header from './Header';
import {useState} from 'react';

 function AddProduct()
{

    const[name,setName]=useState("");
    const[file,setFile]=useState("");
    const[price,setPrice]=useState("");
    const[description,setDescription]=useState("");


   async function addProduct()
    {
        console.warn(name,file, price, description)
        const formData = new FormData();
        formData.append('file',file);
        formData.append('name',name);
        formData.append('price',price);
        formData.append('description',description);
        let result = await fetch("http://localhost:8000/api/addproduct",{
            method:'POST',
            body:formData
        });


        alert("Data has been saved!")

         
    }
    return(
        <div className='row'>
        <Header/>
      <div className='col-sm-6 offset-sm-3'>
          <h1>Add Product</h1>
          <div className='form-group'>
              <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Product Name" className='form-control'></input>
          </div>

          <div className='form-group'>
              <input type="file" onChange={(e)=>setFile(e.target.files[0])} placeholder="Product Image" className='form-control'></input>
          </div>

          <div className='form-group'>
              <input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="Product Price" className='form-control'></input>
          </div>

          <div className='form-group'>
              <input type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="Product Description" className='form-control'></input>
          </div>


          <div className='form-group'>
              <button  onClick={addProduct} className='btn btn-primary w-100'>Add Product</button>
          </div>


      </div>
  </div>
    )
}

export default AddProduct;