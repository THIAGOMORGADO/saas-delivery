import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { useFormated } from '@/libs/useFormated';

type Props = {
  color: string
  count: number
  onUpdateCount: (newCount: number) => void
  min?: number
  max?: number
  small?: boolean
}

export const Quantity = ({color, count, max, min, onUpdateCount, small} : Props) => {
  const [canRemove, setCanRemove] = useState(false)
  const [canAdd, setCanAdd] = useState(false)


  const formatted = useFormated()

  useEffect(() => {
    setCanRemove((!min || (min && count > min)) ? true : false)
    setCanAdd((!max || (max && count < max)) ? true : false)
  }, [count, min, max])
  
  function handleRemove() {
    if(canRemove) {
      onUpdateCount(count - 1)
    }
    
  }
  function handleAdd() {
    if(canAdd) {
      onUpdateCount(count + 1)
    }
  }
  
  return(
    <div className={styles.container}>
     <div 
      className={styles.button}
      onClick={handleRemove}
      style={{
        color: canRemove ? '#fff' : '#96a3ab',
        
        backgroundColor: canRemove ? color: '#f2f4f5',
        width: small ? 42 : 48,
        height: small ? 42 : 48,
      }}
     >
      -
    </div>

     <div 
      className={styles.qt} 
      style={{fontSize: small ? 16 : 18}}
     >
      {formatted.formatQuantity(count, 2)}
    </div>

     <div 
      className={styles.button}  
      onClick={handleAdd}
      style={{
        color: canAdd ? '#fff' : '#96a3ab',
        width: small ? 42 : 48,
        height: small ? 42 : 48,
        backgroundColor: canAdd ? color: '#f2f4f5'
      }}
     >
      +
      </div>
    </div>
  );
}

