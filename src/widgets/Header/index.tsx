import React from 'react';

import styles from './Header.module.scss';
import { Logo } from '..//../shared/assets/icons';


const Header: React.FC = () => {


  return (
    <div className={styles.header}>
        <div className={styles.header_content}>
      <div className={styles.logo}>
  <Logo/>
      </div>
      <div className={styles.header_content_right}>
    
   
      </div>
      
   
      </div>
    </div>
  );
};




export default Header;
