import React from 'react';
import styles from './Header.module.scss'
import logo from '../../images/clique_logo.png';

function Header() {
  return (
    <div className={styles.header}>
        <img src={logo} alt='clique logo' />
    </div>
  )
}

export default Header