/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Quantity } from '@/components/Quantuty';
import { useAppContext } from '@/contexts/app';
import { useApi } from '@/libs/useApi';
import { useFormated } from '@/libs/useFormated';

import styles from '@/styles/ProductId.module.css'
import { Product } from '@/types/Products';
import { Tenant } from '@/types/Tenant';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Products = (data: Props) => {
  const [countQt, setCountQt] = useState(1);
  const {tenant, setTenant} = useAppContext();
  const formatted = useFormated();

  useEffect(() => {
    setTenant(data.tenant)
  }, [])


  function handleAddToCart() {

  }
  function handleCountQt(newCount: number) {
    setCountQt(newCount)
  }

  return(
    <div className={styles.container} >
      <Head>
        <title>{data.product.name} | {data.tenant.name}</title>
      </Head>


      <div className={styles.headerArea}>
        <Header 
          color={data.tenant.mainColor}
          backHref={`/${data.tenant.slug}`}
          title='Produto'
          invert
        />
        </div>

        <div className={styles.headerBg} style={{backgroundColor: data.tenant.mainColor}}></div>

        <div className={styles.productImg}>
          <img src={data.product.image} alt={data.product.name} />
        </div>

        <div className={styles.category}>
          {data.product.categoryName}
        </div>

        <div className={styles.title} style={{borderBottomColor: data.tenant.mainColor}}>
          {data.product.name}
        </div>
        <div className={styles.line}></div>
        <div className={styles.description}>{data.product.description}</div>

         <div className={styles.qtText}>Quatidade</div> 

          <div className={styles.Area}>
            <div className={styles.areaLerft}>
              <Quantity 
                color={data.tenant.mainColor}
                count={countQt}
                onUpdateCount={handleCountQt}
                min={1}
                
              />
            </div>
            <div 
              className={styles.areaRight}
              style={{
                color: data.tenant.mainColor
              }}  
            >
            {
              formatted.formatedPrice
              (
              data.product.price
              )
            }</div>
          </div>

        <div className={styles.buttonArea}>
          <Button 
            color={data.tenant.mainColor}
            label="Adicionar a sacola"
            onClick={handleAddToCart}
            fill

          />
        </div>
      </div>
  )
}

export default Products;

type Props = {
  tenant: Tenant;
  product: Product
}

// Criando o server side redering do tenant
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {tenant: tenantSlug, id} = context.query;
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
    // Get Product
    const product = await api.getProducts(id as string);
  return{
    props:{
      tenant,
      product
    }
  }
}