import React from 'react'
import {Card,
    Row,
    Col,
     CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Container
} from 'reactstrap'
import FullStack from '../fullstack.jpg'
import datascience from '../datascience.webp'
import ios from '../ios.jpg'

function Section6() {
    return (
        
        <div id="courses" style={{paddingTop:"100px"}}>
            <h1 style={{textAlign:'center',fontSize:'50px',paddingTop:'50px',}}>Explore our courses</h1>
            <Row style={{margin:'0px',padding:'0px',marginTop:"40px"}}>
                <Col md="4" >
                <Card style={{borderRadius:"16px",}}>
                    <CardImg top width="50%" height="200px" src={datascience} alt="Card image cap"  responsive/>
                        <CardBody style={{padding:"30px 20px 30px",background:"#000"}}>
                            <CardTitle style={{fontSize:'20px',lineHeight:'24px',fontWeight:'500',color:'#43b17b'}}>Data Science</CardTitle>
                               <CardText style={{color:"#FFF"}}>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus tempor tellus, vitae vestibulum justo. Interdum et malesuada
                               </CardText>
                        </CardBody>
                </Card>
                </Col>
                <Col md="4" >
                <Card style={{borderRadius:"16px"}}>
                    <CardImg top width="50%" height="200px" src={FullStack} alt="Card image cap" responsive />
                        <CardBody style={{padding:"30px 20px 30px",background:"#000"}}>
                            <CardTitle style={{fontSize:'20px',lineHeight:'24px',fontWeight:'500',color:'#43b17b'}}>Full Stack</CardTitle>
                            <CardText style={{color:"#FFF"}}>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus tempor tellus, vitae vestibulum justo. Interdum et malesuada
                               </CardText>
                        </CardBody>
                </Card>
                </Col>
                <Col md="4" >
                <Card style={{borderRadius:"16px"}}>
                    <CardImg top width="50%" height="200px" src={ios} alt="Card image cap" responsive />
                        <CardBody style={{padding:"30px 20px 30px",background:"#000"}}>
                            <CardTitle style={{fontSize:'20px',lineHeight:'24px',fontWeight:'500',color:'#43b17b'}}>iOS Development</CardTitle>
                            <CardText style={{color:"#FFF"}}>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus tempor tellus, vitae vestibulum justo. Interdum et malesuada
                               </CardText>
                        </CardBody>
                </Card>
                </Col>
            </Row>
        </div>
      
    )
}

export default Section6
