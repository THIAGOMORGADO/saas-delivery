import styles from  './styles.module.css'

type props = {
  label: string;
  color: string;
  onClick: () => void;
  fill?: boolean
}

export const Button = ({label, color, onClick, fill} : props) => {
  return (
    <div 
      className={styles.container}
      onClick={onClick}
      style={{
        color: fill ? '#fff' : color,
        borderColor: color,
        backgroundColor: fill ? color : 'transparent'
      }}
     >
      {label}
    </div>
  );
}
