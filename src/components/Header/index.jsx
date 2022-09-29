import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import styles from './Header.module.scss';

export default React.memo(function Header() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', makeHeaderSticky);

    return () => {
      window.removeEventListener('scroll', makeHeaderSticky);
    };
  }, [isSticky]);

  const makeHeaderSticky = () => {
    if (window.scrollY >= 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <header
      className={
        isSticky ? `${styles.header} ${styles.headerFixed}` : `${styles.header}`
      }
    >
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <NavLink to='/'>
            <Logo />
          </NavLink>
          <ul className={styles.navList}>
            <li className={styles.navLinks}>
              <NavLink to='/'>
                <span className={styles.navLinksText}>Ресторан</span>
              </NavLink>
            </li>
            <li className={styles.navLinks}>
              <NavLink to='services'>
                <span className={styles.navLinksText}>Услуги</span>
              </NavLink>
            </li>
            <li className={styles.navLinks}>
              <NavLink to='menu'>
                <span className={styles.navLinksText}>Меню</span>
              </NavLink>
            </li>
            <li className={styles.navLinks}>
              <NavLink to='contacts'>
                <span className={styles.navLinksText}>Контакты</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className={styles.contacts}>
          <li className={styles.contactsItem}>
            <span className={styles.contactsItemText}>+7 (985) 99-88-434</span>
            <Icon
              icon='bi:telephone'
              width='17px'
              color='white'
            />
          </li>
          <li className={styles.contactsItem}>
            <span className={styles.contactsItemText}>
              Пресненская наб., 12
            </span>
            <Icon
              icon='clarity:map-marker-line'
              width='18px'
              color='white'
            />
          </li>
        </ul>
      </div>
    </header>
  );
});
