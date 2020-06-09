import React,{useState} from 'react'
import Jobs from './Jobs'
import { Link as Route } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  Row,
  Col,
  Button,
  CardLink,
  Card,
  CardTitle,
  CardText
} from 'reactstrap';
import logo from '../logo – 1.png'

import '../App.css'
import {Link} from 'react-scroll'
import Section7 from './Section7';
import Section5 from './Section5';
import Section6 from './Section6';
import Section4 from './Section4';
import Section3 from './Section3';
import Section1 from './Section1';
import Teams from './Teams';
// import Footer from './Footer';

const  Header=()=> {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>setIsOpen(!isOpen)
    return (
      <div  id="home">

        <Navbar  className="navbar-dark header fixed-top"  dark expand="md" >
            <NavbarBrand href="/">
            <Link to="home" smooth={true} >
              <img src={logo} 
            height='80px'  className="imgFluid"
            />
            </Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{color:"#FFF",fontSize:"20px"}} href="/"><Link to="home" smooth={true} onClick={toggle}>Home</Link></NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink style={{color:"#FFF",fontSize:"20px"}} href="/"><Link to="details" smooth={true} onClick={toggle}>Detail</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:"#FFF",fontSize:"20px"}}><Link to="why" smooth={true} onClick={toggle}>Why?</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:"#FFF",fontSize:"20px"}}><Link to="courses" smooth={true} onClick={toggle}>Courses</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:"#FFF",fontSize:"20px"}}><Link to="team" smooth={true} onClick={toggle}>Team</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:"#FFF",fontSize:"20px"}}><Link to="footer" smooth={true} onClick={toggle}>JoinUs</Link></NavLink>
            </NavItem>
            <NavItem>
            <Route to="/jobs"><NavLink style={{color:"#FFF",fontSize:"20px"}} >Freelancing</NavLink></Route>
            </NavItem>
            </Nav>
            </Collapse>

        </Navbar>
        <Section1/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Teams/>
        <Section7/>
        
   
   
    </div>
       
        
        
      

    )
}


export default Header;
