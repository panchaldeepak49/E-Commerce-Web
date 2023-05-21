import React,{ useState,useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Navbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE } from '../Redux/Action/action';

const Header = () => {

  const [price ,setPrice] = useState(0);
  //console.log(price);

  const getdata = useSelector((state)=>state.cartreducer.carts);
  
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt=(id)=>{
    dispatch(DELETE(id))
  }

  const total = ()=>{
    let price = 0;
    getdata.map((ele,k)=>{
      price = parseInt(ele.price) + parseInt(price)
    });
    setPrice(price);
  };


  useEffect(()=>{
    total();
  },[total])


  return (
    <>
     <Navbar bg="dark" variant="dark" style={{height: "100px"}}>
        <Container>
          {/* <NavLink to ="/" className="text-decoration-none text-light mx-5">Add to cart</NavLink> */}
          
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light ">Home</NavLink> 
          </Nav>

          <Badge badgeContent={getdata.length} color="primary"
          id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
          <i class="fa-solid fa-cart-shopping text-light" style={{fontSize:25 ,float:'right'}}></i>
          </Badge>
        </Container>

        <Menu 
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        >

        {
          getdata.length ?
          <div className='cards_details' style={{width:"24rem",padding:10}}>
            <table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  getdata.map((e)=>{
                    return (
                      <>
                      <tr>
                        <td>
                          <NavLink to ={`/cart/${e.id}`} onClick={handleClose}>
                          <img src={e.image}  style={{width:"5rem",height:"5rem"}} alt=""></img>
                          </NavLink>
                        </td>
                        
                        <td>
                          <p>{e.title}</p>
                          <p>Price: ₹{e.price}</p>
                          <p>Quantity: {e.quantity}</p>
                          <p style={{color:"red" ,fontsize:20}} onClick={()=>dlt(e.id)}>
                            <i className='fas fa-trash smalltrash'></i>
                          </p>                        
                        </td>
                        <td className='mt-5' style={{color:"red" ,fontsize:20 }} > 
                            {/* <i className='fas fa-trash largetrash'></i> */}
                        </td>
                      </tr>
                      </>
                    )
                  })
                }
                <p className='text-center'>Total : {price}/-</p>
              </tbody>
            </table>
          </div>
          :                      //It was creating great error in it.
                                //It is ternary operator we used here .

          <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem"}}>
                <i className='fas fa-close smallclose' 
                onClick={handleClose}
                style={{position:"absolute",top:2,right:20,fontSize:23}}></i>
                <p>Your cart is empty.</p>
                {/* <img src="./cart.gif" alt="" className="emptycart_img"></img> */}
            </div>
        }



        
            
        </Menu>
      </Navbar>
    </>
  )
}

export default Header;