import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router';
import Button from '../../Components/Button';
import "../../Style/global.css";

const Menu = () => {

    const navigate = useNavigate()
    const checkButtonNameClick = (e) => {
        if (e.target.innerText === 'Home') {
            navigate('/home')
          console.log(`Home`)
        } else if (e.target.innerText === 'Menu') {
            navigate('/menu')
          console.log(`Menu`)
          //set url untuk axios nya ke endpoint nya seller
        }
      }

  return (
    <div className='menu'>
        <div className='tabs fixed-top'>
        <h2 className='text-center'>Menu</h2>
            <Nav variant="" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="#seasonal">Seasonal Product</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#best-seller">Best Seller</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#coffee">
          Coffe
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
        <div className="content-menu">
            <div className="seasonal" id="seasonal">
                <h5>Seasonal Product</h5>
                <div className="product">
                    <img src="/Assets/es-abc.png" alt="" width={70}/>
                    <div className="desc">
                        <p>Ice Capuccino</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <h6>56.000</h6>
                </div>
                <div className="product">
                    <img src="/Assets/es-abc.png" alt="" width={70}/>
                    <div className="desc">
                        <p>Ice Capuccino</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <h6>56.000</h6>
                </div>
                <div className="product">
                    <img src="/Assets/es-abc.png" alt="" width={70}/>
                    <div className="desc">
                        <p>Ice Capuccino</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <h6>56.000</h6>
                </div>
            </div>
            <div className="best-seller" id="best-seller">
                <h5>Best Seller</h5>
            <div className="product">
                    <img src="/Assets/es-abc.png" alt="" width={70}/>
                    <div className="desc">
                        <p>Ice Capuccino</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <h6>56.000</h6>
                </div>
                <div className="product">
                    <img src="/Assets/es-abc.png" alt="" width={70}/>
                    <div className="desc">
                        <p>Ice Capuccino</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <h6>56.000</h6>
                </div>
                <div className="product">
                    <img src="/Assets/es-abc.png" alt="" width={70}/>
                    <div className="desc">
                        <p>Ice Capuccino</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <h6>56.000</h6>
                </div>
            </div>
            <div className="coffee" id="coffee">
                <h5>Coffee</h5>
                <div className="product">
                    <img src="/Assets/es-abc.png" alt="" width={70}/>
                    <div className="desc">
                        <p>Ice Capuccino</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <h6>56.000</h6>
                </div>
                <div className="product">
                    <img src="/Assets/es-abc.png" alt="" width={70}/>
                    <div className="desc">
                        <p>Ice Capuccino</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <h6>56.000</h6>
                </div>
                <div className="product">
                    <img src="/Assets/es-abc.png" alt="" width={70}/>
                    <div className="desc">
                        <p>Ice Capuccino</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <h6>56.000</h6>
                </div>
            </div>
        </div>
        <div className="nav-bottom fixed-bottom">
        <Button onClick={checkButtonNameClick}>
            <img src="/Assets/home2.png" alt="" width={60}/>
            <p>Home</p>
        </Button>
        <Button onClick={checkButtonNameClick}>
            <img src="/Assets/menu2.png" alt="" width={60}/>
            <p>Menu</p>
        </Button>
      </div>
    </div>
  )
}

export default Menu