import React from 'react';
import {Row,Col,Container} from 'reactstrap'
import demo from '../demo.jpg'



const Teams = ()=>{
    return(
        <div style={{paddingTop:"125px",paddingBottom:"120px"}} id="team">
        <h1 style={{fontWeight:"bold",fontSize:'60px',textAlign:"center",color:"#43b17b"}}>Meet The Team</h1>
        <p style={{textAlign:"center",fontSize:'30px'}}>Meet the people behind Devnest.
         Super Cool team of super cool platform!</p>
         <Container>
         <Row style={{padding:'0px',margin:'0px'}}>
             <Col md="4">
             <img src={demo} roundedCircle />
             </Col>
             <Col md="4">
             <img src={demo} roundedCircle />
             </Col>
             <Col md="4">
             <img src={demo} roundedCircle />
             </Col>
         </Row>
         </Container>
         
        </div>
    )

}
export default Teams;