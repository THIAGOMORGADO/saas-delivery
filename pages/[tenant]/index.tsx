/* eslint-disable react-hooks/rules-of-hooks */
import { Banner } from '@/components/Banner';
import { SearchInput } from '@/components/SearchInput';
import { ProductItems } from '@/components/productItems';
import { useAppContext } from '@/contexts/AppContext';
import { useApi } from '@/libs/useApi';

import styles from '@/styles/Home.module.css'
import { Product } from '@/types/Products';
import { Tenant } from '@/types/Tenant';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';

const Home = (data: Props) => {
  const {tenant, setTenant} = useAppContext();



  useEffect(() => {
    setTenant(data.tenant)
  }, [])

  const [products, setProducts] =  useState(data.products)

  const handleSearch = (searchValue: string) => {
    console.log(`Voce esta bucando..., ${searchValue}`)
  }
  return(
    <div className={styles.container} >
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
              <div className={styles.headerLeftTitle}>Seja bem vindo! (a) 👋</div>
              <div className={styles.headerLeftSubtitle}>O que voce deseja hoje</div>
          </div>
          <div className={styles.headerTopright}>
              <div className={styles.menuButton}>
                <div className={styles.menuButtonLine} style={{backgroundColor: tenant?.mainColor}}></div> 
                <div className={styles.menuButtonLine} style={{backgroundColor: tenant?.mainColor}}></div> 
                <div className={styles.menuButtonLine} style={{backgroundColor: tenant?.mainColor}}></div>  
              </div> 
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput 
            
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
          }} 
          
        />  
        <ProductItems data={{
            id:2,
            image: '/tmp/Burger.png',
            categoryName: 'tradicional',
            name: 'X-salada',
            price: '39.00',
          }} 
          
        /> 
        <ProductItems data={{
          id:3,
            image: '/tmp/Burger.png',
            categoryName: 'tradicional',
            name: 'X-tudo-bacon',
            price: '35.00',
          }}  
           
        /> 
        <ProductItems data={{
            id:4,
            image: '/tmp/Burger.png',
            categoryName: 'tradicional',
            name: 'X-bacon-ovo',
            price: '40.00',
          }} 
          
        /> 
        <ProductItems data={{
            id:5,
            image: '/tmp/Burger.png',
            categoryName: 'tradicional',
            name: 'X-da-casa-mostro',
            price: '50.00',
          }}
          
        /> 
        <ProductItems data={{
            id:5,
            image: '/tmp/Burger.png',
            categoryName: 'tradicional',
            name: 'X-vegano',
            price: '10.00',
          }} 
          
        /> 
      </div>

    </div>
  )
}

export default Home;

type Props = {
  tenant: Tenant;
  products: Product[];
}

// Criando o server side redering do tenant
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {tenant: tenantSlug} = context.query;
  const api = useApi(tenantSlug as string);

 // get Tenant
    const tenant = await api.getTenant();
    if(!tenant) {
     
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
    // Get Products
    const products = await api.getAllProducts();


  return{
    props:{
      tenant,
      products
    }
  }
}