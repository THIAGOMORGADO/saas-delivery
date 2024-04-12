import { useAuthContext } from '@/contexts/auth'
import { Button } from '../Button'
import styles from './styles.module.css'
import { Tenant } from '@/types/Tenant'
import { SideBarItem } from '../SIdeBarItem'

import { useRouter } from 'next/router'

type Props =  {
  tenant: Tenant;
  open: boolean;
  onClose: () => void;
}

export const SideBar = ({tenant, open, onClose} : Props) => {
  const {user, setToken} = useAuthContext();

  const router = useRouter();
 
  return(
    <div 
      className={styles.container}
      style={{
        width: open ? '100vw' :  '0'
      }}
    >
      <div className={styles.area}>
        <div className={styles.header}>
          <div 
            className={styles.loginArea}
            style={{borderBottomColor: tenant.mainColor}}
          >
              {
              user &&
                  <div className={styles.userInfo}>
                    <strong>{user.name}</strong>
                    Último pedido há X semanas
                  </div>
                }
              {
                !user &&
                <Button
                  color={tenant.mainColor}
                  label="Fazer Login"
                  onClick={() => router.push(`/${tenant.slug}/login`)}
                  fill
                />
              }
          </div>
          <div 
            className={styles.closeBtn}
            style={{color: tenant.mainColor}}
            onClick={onClose}
          >x</div>
        </div>
        <div 
          className={styles.line}
            
        ></div>

        <div className={styles.menu}>
          <SideBarItem 
            color={'#6a7d8b'}
            icon='menu'
            label='Cardapio'
            onClick={onClose}
          />
          <SideBarItem 
            color={'#6a7d8b'}
            icon='cart'
            label='Sacola'
            onClick={() => router.push(`/${tenant.slug}/cart`)}
          />
          <SideBarItem 
            color={'#6a7d8b'}
            icon='fav'
            label='Favoritos'
            onClick={() => {}}
            disabled
          />
          <SideBarItem 
            color={'#6a7d8b'}
            icon='order'
            label='Meus pedidos'
            onClick={() => router.push(`/${tenant.slug}/orders`)}
            
          />
          <SideBarItem 
            color={'#6a7d8b'}
            icon='settings'
            label='Configuração'
            onClick={() => {}}
            disabled
          />
        </div>
        <div className={styles.menuBottom}>
          {user && 
            <SideBarItem 
              color={'#6a7d8b'}
              icon='logout'
              label='Sair'
              onClick={() => {
                setToken('')
                onClose();
              }}
              disabled
            />
          }
          
        </div>
      </div>
    </div>
  )
}