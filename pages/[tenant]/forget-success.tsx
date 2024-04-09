/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { useAppContext } from '@/contexts/AppContext';
import { useApi } from '@/libs/useApi';

import styles from '../../styles/ForgetSuccess.module.css'
import { Tenant } from '@/types/Tenant';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {Icon} from '@/components/Icon';

const ForgetSuccess = (data: Props) => {
  const { tenant, setTenant } = useAppContext();
  useEffect(() => {
    setTenant(data.tenant)
  }, [])

  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/${data.tenant.slug}/login`)
  }


  return (
    <div className={styles.container} >
      <Head>
        <title>Forget Success | {data.tenant.name}</title>
      </Head>
      <Header
        color={data?.tenant.mainColor}
        backHref={`/${data?.tenant.slug}/forget`}
      />
      <div className={styles.IconArea}>
        <Icon 
          height={99}
          width={81}
          color={data.tenant.mainColor}
          icon="mailSand"

        />
      </div>
      <div className={styles.title}>
      Verifique seu e-mail
      </div>

      <div className={styles.subtitle}>
      Enviamos as instruções para recuperação de senha para o seu e-mail.
      </div>

      <div className={styles.formArea}>
        <div className={styles.inputArea}>
          <Button
            color={data.tenant.mainColor}
            label="Fazer login"
            onClick={handleSubmit}
            fill

          />
        </div>
      </div>
    </div>
  )
}

export default ForgetSuccess;

type Props = {
  tenant: Tenant;
}

// Criando o server side redering do tenant
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi(tenantSlug as string);

  // get Tenant
  const tenant = await api.getTenant();
  if (!tenant) {

    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      tenant
    }
  }
}