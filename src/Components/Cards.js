import React from 'react';
import Card from "./Card";
import Loading from "./Loading";
const Cards = (props) => {
    // const{details:{name,desc,price,image,status},addToOrder,index} = props;
    const{details:{special,additional},addToOrder,loading,isOrderShown}=props;
    
    // console.log(special);
    return (

        <div className= {isOrderShown ? "cards-container" : "cards-container full"}>
          <div className="menu">
            <div className="special">
            <h1>Daily Specials</h1>
            <h1 >Daily Specials</h1>
            <div className="row special">
            {Object.keys(special).map(itemID => 
          <Card 
            key={itemID} 
            index = {itemID}
            details={special[itemID]} 
            addToOrder={addToOrder}
            isLargeRow 
            isOrderShown
            loading={false}
            
            />)}
            </div>
            </div>
           
            <div className="additional">
            <h1>Daily Additionals</h1>
            <div className="row additional">
            {Object.keys(additional).map(itemID => 
          <Card 
            key={itemID} 
            index = {itemID}
            details={additional[itemID]} 
            addToOrder={addToOrder}
            isOrderShown
            loading={false}
            
            />)}
            </div>
            </div>
         </div>
        </div>
    )
}

export default Cards;
