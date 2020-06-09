import React,{useState} from 'react'

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
import {Link} from 'react-scroll'
import { HashLink  } from 'react-router-hash-link';

function PageNotFound() {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = ()=>setIsOpen(!isOpen)
  return (
    <div >

<Navbar  className="navbar-dark header fixed-top"  dark expand="md" >
            <NavbarBrand href="/">
           
              <img src={logo} 
            height='80px'  className="imgFluid"
            />
        
            </NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <Link to="/"><NavLink style={{color:"#FFF",fontSize:"20px"}} >Home</NavLink></Link>
            </NavItem>
            
            <NavItem>
              <HashLink to="/#details"><NavLink href="/#details" style={{color:"#FFF",fontSize:"20px"}} >Detail</NavLink></HashLink>
            </NavItem>
            <NavItem>
            <HashLink to="/#why"><NavLink href="/#why" style={{color:"#FFF",fontSize:"20px"}}>Why?</NavLink></HashLink>
            </NavItem>
            <NavItem>
            <HashLink to="/#courses"><NavLink href="/#courses" style={{color:"#FFF",fontSize:"20px"}}>Courses</NavLink></HashLink>
            </NavItem>
            <NavItem>
            <HashLink to="/#team"><NavLink href="/#team" style={{color:"#FFF",fontSize:"20px"}}>Team</NavLink></HashLink>
            </NavItem>
            <NavItem>
            <HashLink to="/#footer"><NavLink href="/#footer" style={{color:"#FFF",fontSize:"20px"}}>JoinUs</NavLink></HashLink>
            </NavItem>
            <NavItem>
            <Link to="/jobs"><NavLink style={{color:"#FFF",fontSize:"20px"}} >Freelancing</NavLink></Link>
            </NavItem>
            </Nav>
            </Collapse>

        </Navbar>
        <h1 style={{paddingTop:"50vh"}}>error 404;
        </h1>
        </div>
    )
}

export default PageNotFound;
