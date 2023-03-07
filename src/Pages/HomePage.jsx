import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        const getItems = async () => {
            const response = await axios.get("https://fakestoreapi.com/products?limit=12");
            setItems(response.data);

        }
        getItems();
    }, [])


  return (
    <div className='container'>
        <div className='row'>
            {
                items && items && items.map(item => {
                    return(
                        <div key={item.id} className='col-lg-3 py-3'>
                            <div className="card text-center">
                                <Link to={`/details/${item.id}`}>
                                    <img src={item.image} className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title.length > 25 ? item.title.slice(0, 25) : item.title}</h5>
                                    <p className="card-text">{item.description.length > 30 ? item.description.slice(0, 30) : item.description }</p>
                                    <a href="#" className="btn btn-primary bg-success rounded-2 text-center text-white">{item.price} AZN</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default HomePage