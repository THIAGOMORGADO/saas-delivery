/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { Product } from '@/types/Products'
import styles from './styles.module.css'
import Link from 'next/link';
import { useAppContext } from '@/contexts/app';
import { useFormated } from '@/libs/useFormated';


type Props = {
  data: Product;
  
}

export const ProductItems = ({ data }: Props) => {
  const {tenant} = useAppContext();
  const formatted = useFormated();

  return (
    <Link href={`/${tenant?.slug}/product/${data.id}`} className={styles.link}>
      <div className={styles.container}>
        <div className={styles.head} style={{ backgroundColor: tenant?.mainColor}}>
      </div>
        <div className={styles.info}>
          <div className={styles.img}>
            <img src={data.image} />
          </div>
          <div className={styles.catName}>{data.categoryName}</div>
          <div className={styles.name}>{data.name}</div>
          <div 
            className={styles.price} 
            style={{ color: tenant?.mainColor }}
          >{formatted.formatedPrice(data.price)}</div>
        </div>
      </div>

    </Link>

  )
}