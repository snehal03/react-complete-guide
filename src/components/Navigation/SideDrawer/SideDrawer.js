import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
import classes from "./SideDrawer.css";

const sideDrawer = (props) => {

  let attachedClasses = [classes.SideDrawer ,classes.Close ].join(" ");
  if(props.open){
    attachedClasses = [classes.SideDrawer ,classes.Open ].join(" ");
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems  isAuthenticated={props.isAuth}/>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
