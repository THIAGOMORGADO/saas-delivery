
import { Product } from '@/types/Products'
import styles from './styles.module.css'
import Link from 'next/link';


type Props = {
  data: Product;
  mainColor: string;
  secondyColor: string;
}

export const ProductItems = ({ data, mainColor, secondyColor }: Props) => {
  return (
    <Link href={`b7delivery/product/${data.id}`} className={styles.link}>
      <div className={styles.container}>
        <div className={styles.head} style={{ backgroundColor: secondyColor }}>
      </div>
        <div className={styles.info}>
          <div className={styles.img}>
            <img src={data.image} />
          </div>
          <div className={styles.catName}>{data.categoryName}</div>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.price} style={{ color: mainColor }}>R$ {data.price}</div>

        </div>
      </div>

    </Link>

  )
}