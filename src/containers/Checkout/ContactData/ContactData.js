import { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "../../../axios";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm :{
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'zipCode'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Email'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [{value: 'fastest' , displayValue:'Fastest'},
                {value: 'cheapest' , displayValue:'Cheapest'}]
            },
            value: 'fastest',
            valid: true,
            validation: { }
        },
    },
    formIsValid: false,
    loading: false,
  };

  checkValidity = (value, rules) =>{

    let isValid = true;
    if(rules.required) {
        isValid = value.trim() !== '' && isValid;
    }
    if(rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }
    if(rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    const formData = {};
    for(let formIdentifier in this.state.orderForm){
        formData[formIdentifier] = this.state.orderForm[formIdentifier].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: true });
      });
  };

  inputChangeHandler= (event, inputIdentifier) => {
    const formData = {...this.state.orderForm};
    const updatedFormData = {...formData[inputIdentifier]};
    updatedFormData.value = event.target.value;
    updatedFormData.touched = true;
    updatedFormData.valid = this.checkValidity(updatedFormData.value ,updatedFormData.validation);
    formData[inputIdentifier] = updatedFormData;

    let formIsValid = true;
    for(let key in formData) {
        formIsValid = formIsValid && formData[key].valid;
    }
    this.setState({orderForm: formData , formIsValid : formIsValid});
  }

  render() {

    const formElementArray = [];
    for(let key in this.state.orderForm) {
        formElementArray.push({
            id: key,
            config: this.state.orderForm[key]
        })
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementArray.map(formElement => (
            <Input key={formElement.id}
             elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched= {formElement.config.touched}
            changed={(event)=>this.inputChangeHandler(event,formElement.id)}
            />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner></Spinner>;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
