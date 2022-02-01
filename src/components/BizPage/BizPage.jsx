import { useState, useEffect } from "react";
import { server_calls } from "../../api";
import { useParams } from "react-router-dom";

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
    let display_address = !business.location ? 'loading address...' :  <h3>{business.location.address1}, {business.location.city}, {business.location.state} {business.location.zip_code}</h3>;
    return (
        <div>
            <h1>{business.name}</h1>
            <h2>{business.display_phone}</h2>
           {display_address}

            <h2>Rating: {business.rating} Stars</h2>
            <h2>Review Count: {business.review_count}</h2>
        </div>
    )
}