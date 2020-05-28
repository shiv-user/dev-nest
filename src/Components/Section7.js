import React from 'react'
import '../App.css'
import {Button, Container} from 'reactstrap';


const Section7=()=> {
    return (
        <div style={{paddingTop:'50px'}} id="footer">
            <div style={{textAlign:'center',paddingTop:'100px',paddingBottom:'100px',background:'#43b17b',}} >
                <p style={{fontSize:'70px',fontWeight:'bold',color:'#fff'}}> Are You Ready To Get Onboard? 
                </p> 
      
            <Button
             style={{color:'#000',background:'#f4b400',fontSize:'20px'
             ,width:'20%',borderRadius:'10px',
             justifyContent:'center',
             fontWeight:'bold',}}
             >

                 Apply Now
            </Button>
            </div>            
        </div>        
    )
}

export default Section7
