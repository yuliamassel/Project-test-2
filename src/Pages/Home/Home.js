import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import * as MdIcons from "react-icons/md";
import Carousel from "react-bootstrap/Carousel";
import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import Modal from 'react-bootstrap/Modal';
import "../../Style/global.css";

const Home = () => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
    <div className="home">
      <Navbar />
      <div className="content-home">
        <div className="info-home">
          <p>Good Afternoon,</p>
          <p>Guntur Purnomo</p>
          <div className="balance-group">
            <div>
              <Button className="btn-qr"  onClick={handleShow}>
                <MdIcons.MdQrCode2 size={35}/>
              </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Show the QR code below to the cashier</p>
        <MdIcons.MdQrCode2 size={350}/>
        </Modal.Body>
      </Modal>
            </div>
            <div className="line"></div>
            <div className="balance">
              <div>
                <p>Saldo</p> <span>Rp. 279.000</span>
              </div>
              <div>
                <p>Points</p> <span>2.500</span>
              </div>
            </div>
          </div>
        </div>
        </div>
          <div className="carousels">
            <Carousel>
              <Carousel.Item className="bg-yellow">
                <img
                  className="d-block w-100"
                  src="/Assets/logo technopartner.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="bg-blue">
                <img
                  className="d-block w-100"
                  src="/Assets/logo technopartner.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="bg-green">
                <img
                  className="d-block w-100"
                  src="/Assets/logo technopartner.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
      <div className="nav-bottom" fixed="bottom">
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
  );
};

export default Home;
