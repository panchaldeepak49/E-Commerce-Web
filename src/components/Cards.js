import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardsData } from './CardsData';
//import './style.css';
import { useDispatch } from 'react-redux';
import { ADD } from '../Redux/Action/action';
 
const Cards = () => {

    const[data,setData] = useState(CardsData);
    // console.log(data);
    
    const dispatch = useDispatch();
    
    //Note- Here e is passing all the data of an item.
    const send = (e)=>{
      dispatch (ADD(e));

    }

  return (
    <div className='container mt-3 '>
        <h2 className='text-center'>Mobile Shop</h2>

        <div className='row d-flex justify-content-center align-items-center'>
            {
                data.map((element,id)=>{
                    return (
                        <>
                        <Card style={{ width: '22rem' ,border:" " }} className="mx-4 mt-4 card_style">
      <Card.Img variant="top" src={element.image} style={{height:"16rem"}} className="mt-3" />
      <Card.Body>
        <Card.Title>{element.title}</Card.Title>
        <Card.Text>
          Price : ₹{element.price}
        </Card.Text>
        <div className='button_div d-flex justify-content-center'>
           <Button variant="primary" 
           onClick ={()=>send(element)}
           className='col-lg-12'>Add to cart</Button>
        </div> 
      </Card.Body>
    </Card>
                        </>
                    )
                })
            }
        
        </div>
    </div>
  )
}

export default Cards
