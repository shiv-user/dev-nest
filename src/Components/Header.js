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
import '../App.css'
import {Link} from 'react-scroll'

const  Header=()=> {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>setIsOpen(!isOpen)
    return (
      <div className="overlay" id="home">

        <Navbar  className="navbar-dark header fixed-top"  dark expand="md" >
            <NavbarBrand>
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
              <NavLink style={{color:"#FFF",fontSize:"20px"}}><Link to="home" smooth={true} onClick={toggle}>Home</Link></NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink style={{color:"#FFF",fontSize:"20px"}}><Link to="details" smooth={true} onClick={toggle}>Detail</Link></NavLink>
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
            </Nav>
            </Collapse>

        </Navbar>
        
        <div style={{color: '#fff',
  textAlign: 'center', paddingTop:"150px"}}>     
  <h1 style={{fontWeight:"bold",fontSize:"80px"}}>Learn. Code. Apply.
    </h1><br/>  
    <p style={{fontSize:"20px"}}>Remodel your knowledge with devnest for free 
    and get hired by top tech companies .</p>
     <Button color="#f4b400" style={{padding:'10px', margin:"0px",
     borderRadius:'10px',textAlign:'center',fontSize:'25px'
  ,backgroundColor:"#F0B102",fontWeight:"bold"}}>Apply Now</Button>
        </div>
     <div id="my-content" style={{paddingTop:'80px',}}>
       <Row style={{margin:"0px",padding:"0px"}}>
         <Col style={{paddingLeft:"20px"}} md="6">
     <Card style={{width:'500px',opacity:".8",margin:"0px",}} body >
        <CardTitle  style={{fontWeight:"bold",fontSize:"20px",margin:"0px"}}>Some Tech News</CardTitle>
        <CardText style={{margin:"0px"}}>With supporting text below as a natural lead-in to additional content.</CardText>
        <CardLink href="#"><Button  style={{backgroundColor:"#43b17b"}}>Read More</Button></CardLink>
        </Card>
        </Col>
        <Col style={{paddingRight:"20px",}} md="6" >
        <Card style={{width:'500px',opacity:".8",margin:"0px",height:"75px",textAlign:"center",padding:"20px"}} className="ml-auto">
        
        <CardLink href="#" style={{fontSize:"20px",fontWeight:"bold", color:"#000"}}>Tech Related Stuff</CardLink>
        </Card>
       
        <Card style={{width:'500px',opacity:".8",margin:"0px",height:"75px",textAlign:"center",marginTop:"10px",padding:"20px"}} className="ml-auto">
        
        <CardLink href="#" style={{fontSize:"20px",fontWeight:"bold",color:"#000"}}>Tech Related Stuff</CardLink>
        </Card>
        </Col>
        </Row>
     </div>
        
    
    </div>
       
        
        
      

    )
}


export default Header;
