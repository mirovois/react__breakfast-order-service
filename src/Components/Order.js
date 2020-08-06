import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CloseIcon from "@material-ui/icons/Close";
// import { DeleteForeverIcon, CloseIcon } from "@material-ui/icons";

const Order = (props) => {
  const limitTitle = (title, limit) => {
    const newTitle = [];
    if (title.length > limit) {
      title.split(" ").reduce((acc, cur) => {
        if (cur.length + acc < limit) {
          newTitle.push(cur);
        }
        return acc + cur.length;
      }, 0);
      return `${newTitle.join(" ")}...`;
    }
    return title;
  };

  const renderOrder = (orderId) => {
    const orderedItem = items[orderId];
    const count = props.order[orderId];
    return (
      <li>
        <div className="item__name">
          <span>{count}x</span>
          <p className="par">{orderedItem.name}</p>
        </div>
        {/* <span>
          {count} x {orderedItem.name}
        </span> */}
        <strong>{formatPrice(count * orderedItem.price)}</strong>
        <button
          class="delete__btn"
          onClick={() => props.removeFromOrder(orderId)}
        >
          <DeleteForeverIcon />
        </button>
      </li>
    );
  };

  const formatPrice = (amount) => {
    return amount.toLocaleString("en-CA", {
      style: "currency",
      currency: "CAD",
    });
  };
  const items = { ...props.details.special, ...props.details.additional };
  const orderIds = Object.keys(props.order);
  const total = orderIds.reduce((prevTotal, orderId) => {
    const orderedItem = items[orderId];
    const count = props.order[orderId];
    return prevTotal + count * orderedItem.price;
  }, 0);

  return (
    <div
      className={
        props.isOrderShown ? "order-container" : "order-container hidden"
      }
    >
      <h2 className="order__header">Order</h2>
      <ul>{orderIds.map(renderOrder)}</ul>

      <div className="order__total">
        Total:
        {formatPrice(total)}
      </div>
      <IconButton class="closeOrder__btn" onClick={() => props.closeOrder()}>
        <CloseIcon />
      </IconButton>
      {/* <button class="closeOrder__btn" onClick={() => props.closeOrder()}>
        Close
      </button> */}
    </div>
  );
};

export default Order;
