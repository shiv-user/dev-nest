import React from 'react'
import {Row,
Col} from 'reactstrap';
import '../App.css';
import rowimage from '../rowImage.jpg';

function Section4() {
    return (
        <div style={{paddingTop:'200px',paddingBottom:'100px'}} id="why">
            <Row style={{padding:'0px',margin:'0px'}}>
                <Col md="6" >
                <img src={rowimage} alt="loading..." responsive style={{width:"75%",height:"auto",borderRadius:"10px",marginLeft:'20px'}}/>
                </Col>
                <Col md="6">
                <h1 style={{fontSize:'50px',fontWeight:'bold'}}>Why Do We Stand Out?</h1>
                <div className="item">
                     <span className="number">1</span>
                     <div className="text"> Get taught by Industry experts.</div>
                  </div>
                  <div className="item">
                     <span className="number">2</span>
                     <div className="text">Collaborative problem-solving sessions.  </div>
                  </div>
                  <div className="item">
                     <span className="number">3</span>
                     <div className="text">Build large scale capstone projects for a splendid resume.</div>
                  </div>
                  <div className="item">
                     <span className="number">4</span>
                     <div className="text">Industry exposure through interactive sessions and live projects.</div>
                  </div>
                  <div className="item">
                     <span className="number">5</span>
                     <div className="text">Grooming you for interviews.</div>
                  </div>
                  <br/>
                  <u><h5 style={{color:'#f4b400'}}>Learn about our curriculum</h5></u>
                </Col>
               
            </Row>


            
        </div>
    )
}

export default Section4
