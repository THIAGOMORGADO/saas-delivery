import React, { useState } from 'react';
import styles from './styles.module.css';

import OpenEye from './openEye.svg'
import CloseEye from './closeEye.svg'

type Props = {
  color: string;
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
  password?: boolean;

}


export const InputField = ({color, placeholder, value, onChange, password} : Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false)


  function toggleShowPassword () {
    setShowPassword(!showPassword)
  }

  return(
    <div
    style={{
      borderColor: focused ? color : '#f9f9fb',
      backgroundColor: focused ? '#Fff' : '#f9f9fb',
    }} 
      className={styles.container}
    >
        <input
          type={password ? (showPassword ? 'text' : 'password') : 'text' }
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)} 
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {
          password && 
          <div className={styles.iconArea}  onClick={toggleShowPassword}>
            {showPassword && <OpenEye color='#bbb' /> }
            {!showPassword && <CloseEye color='#bbb' /> }
          </div>
        }
    </div>
  );
}
