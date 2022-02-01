import { OutlinedCard } from ".."

export const BizCard = (businesses) =>{
    console.log('From the BizCard')
    let base = businesses.businesses;
    console.log(base)
    let cleanList = [];
    base.forEach(biz =>{
        cleanList.push(<OutlinedCard business={biz} />)
    })
    
    console.log(cleanList)
    return (
        <div style={{marginLeft: 75}}>
            <h1 style={{color: 'lightgray', paddingTop: 20, fontFamily: 'Arial' }}>Top Restaurants in Evanston</h1>
            {cleanList}
        </div>
    )
}