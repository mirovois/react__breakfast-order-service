import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Order = (props) => {
    const limitTitle = (title, limit) => {
        const newTitle = [];
        if (title.length >limit) {
            title.split(' ').reduce((acc,cur) => {
                if((cur.length +acc)<limit) {
                     newTitle.push(cur);
                } return acc+cur.length
            },0);
         return `${newTitle.join(' ')}...`
        }return title;
    }

    const renderOrder = (orderId) => {
        const orderedItem = items[orderId];
        const count = props.order[orderId];
        return <li>
           
            <span>{count} x {orderedItem.name}</span><strong>{formatPrice(count * orderedItem.price)}</strong>
            <button class="delete__btn"
            onClick={()=>props.removeFromOrder(orderId)}><DeleteForeverIcon />
                </button>  
             </li>
            }

    const formatPrice=(amount) =>{
        return amount.toLocaleString("en-CA", {
            style:"currency",
            currency:"CAD"
        });
    }
    const items = {...props.details.special,...props.details.additional}
    const orderIds =Object.keys(props.order);
    const total = orderIds.reduce((prevTotal,orderId) =>{
        const orderedItem = items[orderId];
        const count = props.order[orderId];
        return prevTotal+(count*orderedItem.price)
    },0); 
    
    return (
        <div className={props.isOrderShown ? "order-container" : "order-container hidden"}>
            <h2 className="order__header">Order</h2>
            <ul>{orderIds.map(renderOrder)}</ul>

            {/* <TransitionGroup component="ul">
            {orderIds.map(orderId =>
                <CSSTransition 
                    classNames="order" 
                    key={orderId} 
                    timeout={{enter:200,exit:500}}>
                <li key={orderId}
                     onMouseEnter={props.handleMouseHover}
                     onMouseLeave={props.handleMouseHover}
                                > 
                  <div
                     >
                      <TransitionGroup component="span" className="count">
                          <CSSTransition 
                            classNames="count" 
                            key={props.order[orderId]} 
                            timeout={{enter:200,exit:200}}>
                            <span className="count__number">{props.order[orderId]} x </span>
                          </CSSTransition>
                      </TransitionGroup>
                      {items[orderId].name}:{formatPrice(items[orderId].price)}
                    
                        <button class="delete__btn"
                        onClick={()=>props.removeFromOrder(orderId)}><DeleteForeverIcon />
                    </button>               
                  </div>
                </li>
                </CSSTransition>
                )}
            </TransitionGroup> */}
            <div className="total">
                Total:{formatPrice(total)}
            </div>
            
            <button  onClick={() => props.closeOrder()}
                >Close</button>
        </div>
    )
}

export default Order
