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
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashLink  } from 'react-router-hash-link';

function Jobs() {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>setIsOpen(!isOpen)
    return (
      <div >

        <Navbar  className="navbar-dark header fixed-top"  dark expand="md" >
            <Link to="/"><NavbarBrand >
           
              <img src={logo} 
            height='80px'  className="imgFluid"
            />
        
            </NavbarBrand></Link>
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
        <div className="engage" >
            <div className="overlay1">
              <h1 style={{paddingTop:"125px",color:"#fff",textAlign:"center",fontWeight:"bold",fontSize:"60px"}}>Engage Yourself In.</h1>
            <p style={{color:"#fff",textAlign:"center",fontWeight:"bold",fontSize:"18px",padding:"0px 50px 20px 50px"}}>
              We bring you an opportunity to explore yourself and boost your confidence.
             You’ll be getting early exposure to working with real-life projects.
             This is a chance to start earning your pocket money and stop asking for it.</p>
            </div>

        </div>
        <div>
            <Row style={{paddingTop:"50px",margin:"0px"}}>
                <Col md="4">
        <Card body style={{width:"80%",}}>
        <CardTitle style={{fontWeight:"bold",fontSize:"20px"}}>Job Title</CardTitle>
        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
        <CardText style={{fontWeight:"bold",fontSize:"20px"}}>Stipend : Rs XXXX</CardText>
        <Button style={{width:"50%",backgroundColor:"#F0B102",color:"#000"}}>Apply</Button>
      </Card>
      </Col>
      <Col md="4">
        <Card body style={{width:"80%",}}>
        <CardTitle style={{fontWeight:"bold",fontSize:"20px"}}>Job Title</CardTitle>
        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
        <CardText style={{fontWeight:"bold",fontSize:"20px"}}>Stipend : Rs XXXX</CardText>
        
        <Button style={{width:"50%",backgroundColor:"#F0B102",color:"#000"}}>Apply</Button>
      </Card>
      </Col>
      <Col md="4">
        <Card body style={{width:"80%",}}>
        <CardTitle style={{fontWeight:"bold",fontSize:"20px"}}>Job Title</CardTitle>
        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
        <CardText style={{fontWeight:"bold",fontSize:"20px"}}>Stipend : Rs XXXX</CardText>
        <Button style={{width:"50%",backgroundColor:"#F0B102",color:"#000"}}>Apply</Button>
      </Card>
      </Col>
      </Row>

        </div>
        <div style={{paddingTop:'50px'}} >
            <div style={{textAlign:'center',paddingTop:'100px',paddingBottom:'100px',background:'#43b17b',}} >
                <p style={{fontSize:'70px',fontWeight:'bold',color:'#fff'}}> Do you want to post a job?? 
                </p> 
      
            <Button
             style={{color:'#000',background:'#f4b400',fontSize:'20px'
             ,width:'20%',borderRadius:'10px',
             justifyContent:'center',
             fontWeight:'bold',}} href="https://docs.google.com/forms/d/e/1FAIpQLSfIY7yeLOXJj_mo2czTk_H_rTQRS3raWN1HKfRohM6uci_Cpw/viewform?usp=sf_link"
             >
                 Post Here
            </Button>
            </div>            
        </div>
        </div>
    )

}

export default Jobs
