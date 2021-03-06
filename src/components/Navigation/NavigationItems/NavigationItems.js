import classes from "./navigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem exact link="/" active>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ?   <NavigationItem link="/orders">Orders</NavigationItem> :null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">Authentication</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
