import React from 'react';
import Loading from "./Loading";


const Card = (props) => {
    const{details:{name,desc,price,status,image},addToOrder,index,isLargeRow,loading} = props;
    const isAvailable = status ==="available";
     
    return (
       
            <div className="card-container">
                <div className={props.isLargeRow ? "img-container" : "card-add"}>
                    
                    {loading ? <Loading /> : (<img className="card-img" src={image} alt="img"></img>)}
                    
                </div>
        
                <div className="card-info">
                    <h3>Price <span>${price}</span></h3>
                    <button   className="btn-toOrder" onClick={()=>addToOrder(index)} disabled={!isAvailable}>{isAvailable ? "Add to order" : "Sold out"}</button>
                </div>
                <p className="card-title">{name}</p>

            </div>
           
        
    )
}

export default Card;
