import React from 'react';
import styles from './styles.module.css'

import MailSand from './mailSand.svg';

type Props = {
  icon: string;
  color: string;
  width: number;
  height: number;
}

export const Icon = ({icon, color, width, height} : Props) => {
  return(
    <div style={{width, height }}>
        {icon === 'mailSand' && <MailSand color={color} />}
    </div>
  )
}

