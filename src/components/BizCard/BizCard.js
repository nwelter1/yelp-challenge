import { OutlinedCard } from ".."

export const BizCard = (businesses) =>{
    console.log('from the BizCard')
    let base = businesses.businesses;
    console.log(base)
    let cleanList = [];
    base.forEach(biz =>{
        cleanList.push(<OutlinedCard business={biz} />)
    })
    
    console.log(cleanList)
    return (
        <div style={{marginLeft: 100}}>
            <h1>Businesses in the area</h1>
            {cleanList}
        </div>
    )
}