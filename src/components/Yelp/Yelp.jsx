import { useState } from 'react';
import { DataGridDemo } from '..';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {DataGrid}from '@material-ui/data-grid'

import { OutlinedCard } from '..';

export const Yelp = () =>{
    let {yelpData, getData } = useGetData();
    const [res, setRes] = useState();
    console.log(yelpData)
//     let cols = [
//         {field: 'name',
//         headerName: 'Name',
//         width: 150
//     },
//     {field: 'rating',
//     headerName: 'Rating',
//     width: 150
// }
//     ]
    // let biz_names = []

    // setTimeout(() =>{
    //     for(let i = 0; i<5; i++){
    //         biz_names.push(yelpData.businesses[i].alias)
    //     }
    // }, 5000)
    console.log(yelpData)
    const response = Array.isArray(yelpData)? <div>loading...</div> : <OutlinedCard business={yelpData.businesses[0]}/>
    return(
        <div>
            {response}
        </div>
    )
}