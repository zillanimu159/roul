import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>React Poster</h1>
      <p>
        <Link className={classes.button} to="/create-post">
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
