// import classes from "./OrderSummary.css";
import { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";
// import { Link } from "react-router-dom";

class OrderSummary extends Component {
  componentWillUpdate() {
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3> Your Order</h3>
        <p> A delicious burger with following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
       {/*  <Link to="/checkout" style={{ textDecoration: "none" }}>
          <Button btnType="Success" clicked={this.props.purchaseContinue}>
            CONTINUE
          </Button>{" "}
        </Link> */}
        <Button  btnType="Success"  clicked={this.props.purchaseContinue}>CONTINUE</Button>
      </Aux>
    );
  }
}

export default OrderSummary;
