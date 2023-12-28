import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import styles from './Resumen.module.css'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <NavLink
      className={styles.link}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        CV Resumen
      </NavLink>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}> <Link to={'/src/assets/CV/CV-Spanish.pdf'} download={'CV-Spanish.pdf'} target="_blank" className={styles.linkMenu}>Spanish</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={'/src/assets/CV/CV-English.pdf'} download={'CV-English.pdf'} target="_blank" className={styles.linkMenu}>English</Link></MenuItem>
      </Menu>
    </div>
  );
}