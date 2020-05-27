import React from 'react'
import {Row,Col,Container} from 'reactstrap';


function Section3() {
    return (
        <Container>
    
        <div style={{paddingBottom:'100px'}}>
            <h1 style={{textAlign:"center",fontSize:"90px",paddingBottom:'50px'}}>Devnest is designed for students' success</h1>
            
            
            
            <Row style={{padding:'0px',margin:'0px'}}>

                <Col md="6" >
                <h1 style={{color:"#43b17b",fontSize:'40px'}}>3+1 formula for the final year students</h1>
                <br/>
                <ul style={{fontSize:'20px'}}>
                <li >3 months of intense training routine </li>
                <li> 1 month for the job selection process</li>  
                </ul>
                </Col>
                <Col md="6">
                <h1 style={{color:"#43b17b"}} >7+1 formula for third-year students</h1>
                <br/>
                <ul style={{fontSize:'20px'}}>
                <li >7 months of rigorous training </li>
                    <li> 1 month for the selection process.</li>
                    </ul>
                
                
                </Col>
            </Row><br/><br/>
            <p style={{textAlign:'center',fontSize:'25px'}}>These formulae will accelerate your knowledge to get hired by top tech companies or unicorns.</p>
                <p style={{textAlign:'center',color:'#f4b60c',fontSize:'20px',fontWeight:'bold'}}><u>Learn More</u></p>
            </div>
         
            
            
            </Container>
           
    )
}

export default Section3
