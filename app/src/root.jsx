import { hot } from "react-hot-loader/root";
import React from "react";
import bones from "./bones.svg";
import styles from "./root.css";
import Counter from "./components/counter";

function Root() {

  return(
    <>
    <div className={styles.main_div}>

      <h1>Electron React Bareboy</h1>

      <img src={bones} atl="" id={styles.bones} />

      <Counter/>
    </div>
  </>
  )
};

export default hot(Root);
