/* eslint-disable react-hooks/rules-of-hooks */
import { useAppContext } from '@/contexts/AppContext';
import { useApi } from '@/libs/useApi';

import styles from '@/styles/ProductId.module.css'
import { Product } from '@/types/Products';
import { Tenant } from '@/types/Tenant';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Products = (data: Props) => {
  const {tenant, setTenant} = useAppContext();

  useEffect(() => {
    setTenant(data.tenant)
  }, [])


  return(
    <div className={styles.container} >
      <Head>
        <title>{data.product.name} | {data.tenant.name}</title>
      </Head>

      


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