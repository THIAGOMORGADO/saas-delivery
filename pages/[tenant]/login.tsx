/* eslint-disable react-hooks/rules-of-hooks */
import { useAppContext } from '@/contexts/AppContext';
import { useApi } from '@/libs/useApi';

import styles from '@/styles/login.module.css'
import { Tenant } from '@/types/Tenant';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

const Login = (data: Props) => {
  const {tenant, setTenant} = useAppContext();

  useEffect(() => {
    setTenant(data.tenant)
  }, [])

  return(
    <div className={styles.container}>
        <Head>
            <title>Login | {data.tenant.name}</title>

            <h1>Tela do tenant {data.tenant.slug}</h1>
        </Head>
    </div>
  )
}

export default Login;

type Props = {
  tenant: Tenant;
}

// Criando o server side redering do tenant
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {tenant: tenantSlug} = context.query;
  const api = useApi();

 // get Tenant
    const tenant = await api.getTenant(tenantSlug as string);
    if(!tenant) {
     
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  
  return{
    props:{
      tenant
    }
  }
}