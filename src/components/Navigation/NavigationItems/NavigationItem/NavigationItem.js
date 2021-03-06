import classes from "./navigationItem.css";
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink exact={props.exact} to={props.link} activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
