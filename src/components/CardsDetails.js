import React,{ useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE } from '../Redux/Action/action';

const CardsDetails = () => {

    const [data,setData] = useState([]);
    //console.log(data);

    const{id} = useParams();
    //console.log(id);
    
    const history = useNavigate(); 
    const dispatch = useDispatch();

  const getdata = useSelector((state)=>state.cartreducer.carts);
  //console.log(getdata);

  const compare = ()=>{
    let comparedata = getdata.filter((e)=>{
        return e.id == id
    });
    setData(comparedata);
  }

  const dlt = (id)=>{
    dispatch(DELETE(id));
    history("/");
  }

  useEffect(()=>{
    compare();
  },[id])


  return (
    <>
    <div className='container mt-3'>
        <h2 className='text-center'>Items Details Page</h2>

        <section className='container mt-3'>
            <div className='itemsdetails' style={{display:"flex"}}>
                {
                    data.map((ele)=>{
                        return (
                            <>
                            <div className='items_img'>
                <img src={ele.image} alt=" "></img>
                </div>
            <div className='details' style={{marginTop:"8rem",marginLeft:"4rem"}}>
                <Table>
                    <tr>
                        <td>
                            <p><strong>Mobile</strong> : {ele.title}</p>
                            <p><strong>Price</strong> : ₹{ele.price}</p>
                            <p><strong>Quantity</strong> : {ele.quantity}</p>
                            <p><strong>Total</strong> : ₹{ele.price}/-</p>
                        </td>
                        <td>
                            <p><strong>Rating : </strong><span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>3.5 ★</span></p>
                            <p><strong>Order Review : </strong><span style={{}}>Order placed from here recently</span></p>
                            <p><strong>Remove : </strong><span><i className='fas fa-trash' onClick={()=>dlt(ele.id)} style={{color:"red",fontsize:20}}></i></span></p>
                        </td>
                    </tr>
                </Table>
            </div>
            

                            </>
                        )
                    })
                }
            </div>

        </section>
    </div>
    </>
  )
}

export default CardsDetails;