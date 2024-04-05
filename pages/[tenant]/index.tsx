import { Banner } from '@/components/Banner';
import { SearchInput } from '@/components/SearchInput';
import { ProductItems } from '@/components/productItems';
import styles from '@/styles/Home.module.css'

const Home = () => {

  const handleSearch = (searchValue: string) => {
    console.log(`Voce esta bucando..., ${searchValue}`)
  }
  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
              <div className={styles.headerLeftTitle}>Seja bem vindo! (a) 👋</div>
              <div className={styles.headerLeftSubtitle}>O que voce deseja hoje</div>
          </div>
          <div className={styles.headerTopright}>
              <div className={styles.menuButton}>
                <div className={styles.menuButtonLine}></div> 
                <div className={styles.menuButtonLine}></div> 
                <div className={styles.menuButtonLine}></div>  
              </div> 
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput 
            mainColor='#fb9400'
            onSearch={handleSearch}
          />
        </div>
      </header>
        <Banner />
      

      <div className={styles.grid}>
        <ProductItems data={{
            id:1,
            image: '/tmp/Burger.png',
            categoryName: 'tradicional',
            name: 'X-tudo',
            price: '25.00',
          }} mainColor='#fb9400' secondyColor='#fff9f2' 
        />  
        <ProductItems data={{
            id:2,
            image: '/tmp/Burger.png',
            categoryName: 'tradicional',
            name: 'X-salada',
            price: '39.00',
          }} mainColor='#fb9400' secondyColor='#fff9f2' 
        /> 
        <ProductItems data={{
          id:3,
            image: '/tmp/Burger.png',
            categoryName: 'tradicional',
            name: 'X-tudo-bacon',
            price: '35.00',
          }} mainColor='#fb9400' secondyColor='#fff9f2' 
        /> 
        <ProductItems data={{
            id:4,
            image: '/tmp/Burger.png',
            categoryName: 'tradicional',
            name: 'X-bacon-ovo',
            price: '40.00',
          }} mainColor='#fb9400' secondyColor='#fff9f2' 
        /> 
        <ProductItems data={{
            id:5,
            image: '/tmp/Burger.png',
            categoryName: 'tradicional',
            name: 'X-da-casa-mostro',
            price: '50.00',
          }} mainColor='#fb9400' secondyColor='#fff9f2' 
        /> 
        <ProductItems data={{
            id:5,
            image: '/tmp/Burger.png',
            categoryName: 'tradicional',
            name: 'X-vegano',
            price: '10.00',
          }} mainColor='#fb9400' secondyColor='#fff9f2' 
        /> 
      </div>

    </div>
  )
}

export default Home;