import { useState, useEffect } from "react";
import { server_calls } from "../../api";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export const BizPage = (props) =>{
    const [business, setBusiness] = useState({});
    const { id } = useParams(); 
    useEffect(() =>{
        server_calls.getBiz(id)
        .then(res =>{
            setBusiness(res)
        })
    }, [])
    console.log(id)
    console.log(business)
    let photos = [];
    let display_address = !business.location ? 'loading address...' :  `${business.location.address1}, ${business.location.city}, ${business.location.state} ${business.location.zip_code}`;
    if(business.photos){
        business.photos.forEach(photo =>{
            photos.push(<Col md={2}> <img className="d-flex justify-content-center" style={{ maxWidth: '90%', maxHeight: '75%' }}src={photo}  /></Col>)
        })
    }
    let display_photos = !business.photos ? 'loading photos...': photos
    return (
        <div>
            <Row>
                <Col md={12} className="border-bottom border-dark">
                    <h1 className="d-flex justify-content-center" style={{padding: '3vh 0', margin:0,  backgroundColor: 'black', color: 'white'}}>{business.name}</h1>
                </Col>
            </Row>
            <Row style={{backgroundColor: 'grey'}}>
                <Col md={8} className="offset-md-2" >
                <h2 className="d-flex justify-content-center" style={{paddingTop: '3vh'}}>{business.display_phone}       <span style={{fontSize:'30px'}}>&#9670;</span>     <span>{display_address}</span></h2>
                </Col>
            </Row>
            <Row className="border-bottom border-dark" style={{backgroundColor: 'grey'}}>
                <Col md={3} className="offset-md-3">
                    <h2 className="d-flex justify-content-center" style={{padding: '3vh 0'}}>Rating: {business.rating} Stars</h2>
                </Col>
                <Col md={3}>
                    <h2 className="d-flex justify-content-center" style={{padding: '3vh 0'}}>Review Count: {business.review_count}</h2>
                </Col>
            </Row>
            <Row>
                <div className="d-flex justify-content-center" style={{padding: '3vh 0'}}>
                {display_photos}
                </div>
                
            </Row>
            
            
           

            
            
        </div>
    )
}