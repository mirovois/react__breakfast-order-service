import React from "react";
import menu from "./menu-items";
import Header from "./Components/Header";
import "./App.css";
import Cards from "./Components/Cards";
import Order from "./Components/Order";
import Card from "./Components/Card";

// import firebase from "firebase";
console.log(JSON.stringify(menu));
class App extends React.Component {
  state = {
    items: {
      special: {},
      additional: {},
    },
    order: {},
    loading: false,
    isOrderShown: false,
  };

  componentDidMount() {
    console.log("Mounted!");
    // Reinstate our local storage
    const localStorageRef = localStorage.getItem("myOrder");
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    // console.log(JSON.parse(localStorageRef));
    let special = { ...menu.lot1 };
    let additional = { ...menu.lot2 };
    this.setState({
      items: {
        special,
        additional,
      },
      loading: !this.state.loading,
    });
    // this.ref = base.syncState("items",{
    //     context:this,
    //     state:special
    //     })
  }

  componentDidUpdate() {
    console.log("It updated!");
    localStorage.setItem("myOrder", JSON.stringify(this.state.order));
    console.log(this.state.order);
  }
  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({
      order,
      // sidebarOpened:true,
      isOrderShown: true,
    });
  };

  removeFromOrder = (key) => {
    // 1.Take a copy of state
    const order = { ...this.state.order };
    // 2.Remove item from order
    if (Object.keys(order).length > 1) {
      delete order[key];
      this.setState({ isOrderShown: true, order });
      console.log(this.state.isOrderShown);
    } else {
      this.setState({ order: {}, isOrderShown: false });
      console.log(this.state.isOrderShown);
    }
  };
  closeOrder = () => {
    this.setState({ isOrderShown: false });
  };
  openBasket = () => {
    const isOrderShown = this.state.isOrderShown;
    const order = { ...this.state.order };
    if (Object.keys(order).length > 0) {
      this.setState({ isOrderShown: !isOrderShown });
    } else {
      this.setState({ isOrderShown: false });
    }
  };

  render() {
    const styles = {
      background: "yellow",
      height: "95%",
      width: "30%",
      marginTop: "5%",
    };
    return (
      <div className="App">
        <Header order={this.state.order} openBasket={this.openBasket} />
        <section>
          <Cards
            details={this.state.items}
            addToOrder={this.addToOrder}
            loading={this.state.loading}
            isOrderShown={this.state.isOrderShown}
          />
          {Object.keys(this.state.order).length > 0 && (
            <Order
              loadMenuItems={this.loadMenuItems}
              addToOrder={this.addToOrder}
              details={this.state.items}
              order={this.state.order}
              removeFromOrder={this.removeFromOrder}
              sidebarOpened={this.state.sidebarOpened}
              closeOrder={this.closeOrder}
              isHovering={this.state.isHovering}
              isOrderShown={this.state.isOrderShown}
              handleButtonToggle={this.handleButtonToggle}
              handleHoverOn={this.handleHoverOn}
              handleHoverOff={this.handleHoverOff}
              showButton={this.state.showButton}
            />
          )}
        </section>
      </div>
    );
  }
}

export default App;
