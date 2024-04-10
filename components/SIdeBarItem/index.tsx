import styles from './styles.module.css'

// Icons Svg
import CartIcons from './cart.svg'
import FavIcons from './fav.svg'
import LogOutIcons from './logout.svg'
import MenuIcons from './menu.svg'
import OrdersIcons from './orders.svg'
import SettingsIcons from './setting.svg'

type Props =  {
  color: string;
  label: string;
  icon: 'menu' | 'cart' | 'fav' | 'order' | 'settings' | 'logout';
  onClick: () => void;
  disabled?: boolean;
  
}

export const SideBarItem = ({color, label, icon, onClick, disabled} : Props) => {
  return(
    <div className={styles.container} onClick={onClick}>
      {icon === 'menu' && <MenuIcons color={color}  />}
      {icon === 'cart' && <CartIcons color={color}/>}
      {icon === 'fav' && <FavIcons color={color}/>}
      {icon === 'order' && <OrdersIcons color={color}/>}
      {icon === 'settings' && <SettingsIcons color={color}/>}
      {icon === 'logout' && <LogOutIcons color={color}/>}

      <span className={disabled ? styles.disabled : ''}>{label}</span>
    </div>
  )
}