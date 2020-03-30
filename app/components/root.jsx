import { hot } from 'react-hot-loader/root';
import React from 'react';
import bones from './bones.svg'
import styles from './root.css'



const Root = () => (
  <>
    <div className={styles.main_div}>
      <h1>Electron React Barebones</h1>
      <img src={bones} atl="" id={styles.bones}/>
    </div>
  </>
);

export default hot(Root);
