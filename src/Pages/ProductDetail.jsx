import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams();
    const [item, setItem] = useState();
    const passageTo = useNavigate(); 
    
    useEffect(()=> {
      const getItemById = async () => {
          const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setItem(res.data);
      }
      getItemById();
  },[])

  const RegisterHandler = () =>{
    alert('Do you want to return exactly ?');
    passageTo('/');
  }

  return (
    <div className='container text-center py-5'>
      {
        item &&
        <div className="row">
          <div className="col-lg-5">
            <img src={item.image} alt="" />
          </div>
          <div className="col-lg-7 text-center">
            <h5 className='py-4'>{item.title}</h5>
            <p className='py-4'>{item.description}</p>
            <span className='bg-success py-2 px-4 rounded-2 text-white'>{item.price} AZN</span>
          </div>
        </div>
      }
      <button style={{border:'none', padding: '5px 13px'}} className='text-white bg-danger rounded-2' onClick={RegisterHandler}>Return to HomePage</button>
    </div>
  )
}

export default ProductDetails