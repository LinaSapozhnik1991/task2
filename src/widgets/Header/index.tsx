'use client'
import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Button } from '@/shared/ui/Button';
import { ButtonColors } from '@/shared/ui/Button/Button.types';
import { Global, Logo } from '../../shared/assets/icons';

const Header: React.FC = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const checkAuthentication = () => {

    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.header_content_right}>
          <Global />
        </div>
        {isAuthenticated && ( 
          <div>
            <Button backgroundColor={ButtonColors.Secondary} type='button'>
              Выйти из системы
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
