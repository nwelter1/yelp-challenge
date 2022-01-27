import { useState } from 'react';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

export const Yelp = () =>{
    let {yelpData, getData } = useGetData();
    getData();
    console.log(yelpData)
    return(
        <div>
            <h1>{yelpData}</h1>
        </div>
    )
}