import React from "react";
import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Японская кухня</h1>
        <HeaderCardButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="Блюда японской кухни" />
      </div>
    </React.Fragment>
  );
};

export default Header;
