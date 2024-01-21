import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import styles from './DownloadCV.module.css'
import { useState } from 'react';

export default function BasicMenu() {
  const [lenguangeCV, setLenguangeCV] = useState('Spanish')
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = () => {
    // Lógica para la descarga del CV en PDF
    // Puedes usar una biblioteca como FileSaver.js o simplemente un enlace directo al archivo PDF
    // Ejemplo:
    
    if (lenguangeCV === 'Spanish') {
      setLenguangeCV('Spanish')
      window.open('/cv/CV-Spanish.pdf', '_blank');
    }else{
      setLenguangeCV('English')
      window.open('/cv/CV-English.pdf', '_blank');
    }    
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
        CV Download
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
        <MenuItem onClick={handleClose}>
            <Link className={styles.linkMenu} onClick={handleDownload}>Spanish</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link className={styles.linkMenu} onClick={handleDownload}>English</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}