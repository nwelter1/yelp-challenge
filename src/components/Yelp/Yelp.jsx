import { useState } from 'react';
import { DataGridDemo } from '..';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {DataGrid}from '@material-ui/data-grid'
import { BizCard } from '..';
import { OutlinedCard } from '..';

export const Yelp = () =>{
    let {yelpData, getData } = useGetData();
    const [res, setRes] = useState();
    
    const response = Array.isArray(yelpData)? <div>loading...</div> : <BizCard businesses={yelpData.businesses}/>
    return(
        <div>
            {response}
        </div>
    )
}