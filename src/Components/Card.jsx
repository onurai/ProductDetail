import React, {useRef} from 'react'
// import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
    // const navigate = useNavigate(); 
    const UserName = useRef();

    const AddHandler = () =>{
        // navigate('/');
        toast.success('👏 Added to Basket...!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
            });
    }

    const ShowUsername = () =>{
        alert(UserName.current.value);
    }
    const Clear = () =>{
        UserName.current.value='';
    }
    
  return (
    <div className='container'>
        <div className="row">
            <div className="col-lg-3">
                <div className='card text-center' >
                    <img src="https://free4kwallpapers.com/uploads/originals/2015/07/16/tianzi-mountains.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button onClick={AddHandler} className="btn btn-success">Add To Card</button>                      
                    </div>
                </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-5 my-5">
                <input style={{outline: 'none', border: 'none', padding: '5px 12px'}} type="text" ref={UserName} placeholder="Enter Your UserName" />
                <button style={{outline: 'none', border: 'none', padding: '5px 12px'}} onClick={ShowUsername}>Show UserName</button>
                <button style={{outline: 'none', border: 'none', padding: '5px 12px', marginLeft:'10px'}} onClick={Clear}>Clear</button>
            </div>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />               
        <ToastContainer />
    </div>
  )
}

export default Card