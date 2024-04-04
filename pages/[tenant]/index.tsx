import { SearchInput } from '@/components/SearchInput';
import styles from '@/styles/Home.module.css'

const Home = () => {

  const handleSearch = (searchValue: string) => {
    console.log(`Voce esta bucandop..., ${searchValue}`)
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
    </div>
  )
}

export default Home;