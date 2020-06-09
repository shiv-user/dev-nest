import React from 'react'
import '../App.css'
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

const  Section1 = ()=> {
    return (
        
        <div className="background" >
            
        <div style={{color: '#fff',
  textAlign: 'center', paddingTop:"150px"}} className="overlay">     
  <h1 style={{fontWeight:"bold",fontSize:"80px"}}>
      Learn. Code. Apply.
    </h1><br/>  

    <p style={{fontSize:"20px"}}>Remodel your knowledge with devnest for free 
    and get hired by top tech companies .</p>

     <Button color="#f4b400" style={{padding:'10px', margin:"0px",
     borderRadius:'10px',textAlign:'center',fontSize:'25px'
  ,backgroundColor:"#F0B102",fontWeight:"bold"}}>Apply Now</Button>
        </div>
     <div id="my-content" style={{paddingTop:'400px',}}>
       <Row style={{margin:"0px",padding:"0px"}}>
         <Col style={{paddingLeft:"20px"}} md="6">
             <h2 style={{color:"#fff"}} >EVENTS</h2>
        <Card style={{width:'250px',opacity:".8",margin:"0px",}} body >
            <ul>
                <li>
                    <a href="" style={{color:"#000",fontSize:"20px",fontWeight:"bold"}}>AMA</a>
                </li>
                <li>
                    <a href="" style={{color:"#000",fontSize:"20px",fontWeight:"bold"}}>Upcomming Hackathon's</a>
                </li>
            </ul>
        
        </Card>
        </Col>
        
        </Row>
     </div>
        </div>
    )
}

export default Section1
