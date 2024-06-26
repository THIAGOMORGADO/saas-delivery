/* eslint-disable react-hooks/rules-of-hooks */
import { Banner } from '@/components/Banner';
import { SearchInput } from '@/components/SearchInput';
import { SideBar } from '@/components/SideBar'
import { ProductItems } from '@/components/productItems';
import { useAppContext } from '@/contexts/app';

import { useApi } from '@/libs/useApi';

import styles from '@/styles/Home.module.css'
import { Product } from '@/types/Products';
import { Tenant } from '@/types/Tenant';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';

const Home = (data: Props) => {
  const [openSideBar, setOpenSideBar] = useState(false)
  const {tenant, setTenant} = useAppContext();

  
  useEffect(() => {
    setTenant(data.tenant)
  }, [])

  const [products, setProducts] =  useState<Product[]>(data.products)

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
              <div 
                className={styles.menuButton}
                onClick={() => setOpenSideBar(true)}
              >
                <div className={styles.menuButtonLine} style={{backgroundColor: tenant?.mainColor}}></div> 
                <div className={styles.menuButtonLine} style={{backgroundColor: tenant?.mainColor}}></div> 
                <div className={styles.menuButtonLine} style={{backgroundColor: tenant?.mainColor}}></div>  
              </div> 
            {/** Menu Slide */}
            
            <SideBar 
              tenant={data.tenant}
              open={openSideBar}
              onClose={() => setOpenSideBar(false)}
            />
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
          {products.map((item, index) => (
            <ProductItems  key={index} data={item}/>
          ))}
        
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