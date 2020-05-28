import React from 'react'
import {Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    a,
    NavbarText,
    Row,
    Col,
 } from 'reactstrap';
 import logo from '../logo – 1.png'
 import {FaWhatsapp} from 'react-icons/fa'
 import {AiOutlineSlack} from 'react-icons/ai'
 import '../App.css'
 import { Link, animateScroll as scroll } from "react-scroll";


const Footer = ()=> {
    return (
        
        
            <div  className='blacknav' style={{paddingTop:"50px",paddingBottom:"10px"}} >
                
                <Row style={{padding:'0px',margin:'0px',}}>
                    <Col md='9'>
                      <Link to="home" smooth={true} duration={1000}>
                      <img src={logo} 
            height='100px' className="imgFluid" 
            />
            </Link>
            </Col>
              <Col md="3">
            <div style={{paddingLeft:""}}>
                <a style={{fontSize:"27px",fontWeight:'bold',color:'#f9efe6',}}>Join Our Community</a>
                <Row>
                    <Col>
    <a style={{color:'#a9a9a9'}} href="http://bit.ly/waDevnest"> <FaWhatsapp style={{fontSize:'50px'}}/><br/>Whatsapp Group</a>
                    </Col>
                    <Col>
                <a style={{color:'#a9a9a9'}} href="https://bit.ly/devsnestcommunity"><AiOutlineSlack style={{fontSize:'50px'}}/><br/>Slack Channel</a>
                </Col>
                </Row>               
                
              </div>
         </Col>
              </Row>
              
              <center style={{color:'#fff',textAlign:"center"}} >&copy;Devnest</center>
            
            </div>        
           
            

    )
}

export default Footer
