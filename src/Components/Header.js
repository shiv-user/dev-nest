import React,{useState} from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  CardLink,
  Card,
  CardTitle,
  CardText
} from 'reactstrap';
import logo from '../logo – 1.png'
import '../App.css'

const  Header=()=> {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>setIsOpen(!isOpen)
    return (
      <div className="overlay">

        <Navbar  expand="md" fixed="">
            <NavbarBrand><img src={logo} 
            height='100px'  className="imgFluid"
            /></NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            
            <UncontrolledDropdown nav inNavbar style={{paddingTop:"10px",paddingBottom:'10px',fontWeight:'500'}}>
              <DropdownToggle nav caret style={{padding:"20px",color:"#fff"}}>
                Something
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar style={{paddingTop:"10px",paddingBottom:'10px',fontWeight:'500',}}>
              <DropdownToggle nav caret style={{padding:"20px",color:"#fff"}}>
                Something
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar style={{paddingTop:"10px",paddingBottom:'10px',fontWeight:'500',}}>
              <DropdownToggle nav caret style={{padding:"20px",color:"#fff"}}>
                Something
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
                <NavLink  style={{paddingTop:"10px",paddingBottom:'10px',fontWeight:'500',}}>
                
                </NavLink> 
            </NavItem>

            </Nav>
            </Collapse>

        </Navbar>
        
        <div style={{color: '#fff',
  textAlign: 'center',
  padding:'50px',
  
  }}>     
  <h1 style={{fontWeight:"bold",fontSize:"80px"}}>Learn. Code. Apply.
    </h1><br/>  
    <p style={{fontSize:"25px"}}>Remodel your knowledge with devnest for free 
    and get hired by top tech companies .</p>
     <Button color="#f4b400" style={{padding:'10px', margin:"0px",borderRadius:'10px',textAlign:'center',fontSize:'25px'
  ,backgroundColor:"#F0B102",fontWeight:"bold"}}>Apply Now</Button>
        </div>
     <div id="my-content" style={{paddingTop:'150px',paddingLeft:"20px"}}>
     <Card style={{width:'500px',padding:"20px",opacity:".8"}} body >
        <CardTitle  style={{fontWeight:"bold",fontSize:"25px",}}>Some Tech News</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <CardLink href="#"><Button  style={{backgroundColor:"#43b17b"}}>Read More</Button></CardLink>
        </Card>
     </div>
        
    
    </div>
       
        
        
      

    )
}


export default Header;
