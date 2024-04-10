/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { InputField } from '@/components/InputField';
import { useAppContext } from '@/contexts/app';
import { useApi } from '@/libs/useApi';

import styles from '@/styles/login.module.css'
import { Tenant } from '@/types/Tenant';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Login = (data: Props) => {
  const {tenant, setTenant} = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  useEffect(() => {
    setTenant(data.tenant)
  }, [])

  const router = useRouter();

  const handleSubmit = () => {
    alert("pk")
  }
  const handleSignUp = () => {
    router.push(`/${data.tenant.slug}/signup`)
  }

  return(
    <div className={styles.container} >
        <Head>
           <title>Login | {data.tenant.name}</title>
        </Head>
        <Header 
          color={data?.tenant.mainColor} 
          backHref={`/${data?.tenant.slug}`} 
        /> 

          <div className={styles.header}>
            {data.tenant.name}
          </div>



          <div className={styles.subtitle} style={{borderBottomColor: data.tenant.mainColor}}>
            Use suas credenciais para realizar o login !
          </div>

          <div className={styles.line}></div>

          <div className={styles.formArea}>
            <div className={styles.inputArea}>
              <InputField 
                color={data.tenant.mainColor}
                placeholder='Digite seu email'
                value={email}
                onChange={setEmail}
              />
            </div>

            <div className={styles.inputArea}>
              <InputField 
                password
                color={data.tenant.mainColor}
                placeholder='Digite sua senha'
                value={password}
                onChange={setPassword}
              />
            </div>


            <div className={styles.inputArea}>
              <Button 
                color={data.tenant.mainColor}
                label="Entra"
                onClick={handleSubmit}
                fill

              />
            </div>

          </div>

          <div className={styles.forgetArea} style={{borderBottomColor: data.tenant.mainColor}}>
            Esqueceu sua senha? 
            <Link 
            className={styles.conteForget} 
            style={{color: data.tenant.mainColor}} 
            href={`/${data.tenant.slug}/forget`}>

              <span> Clique aqui</span>
            </Link>
          </div>

          <div className={styles.line}></div>

          <div className={styles.signupArea}>
          <Button 
            color={data.tenant.mainColor}
            label=" Quero me cadastra"
            onClick={handleSignUp}
            
          />
        </div>
        
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
  
  return{
    props:{
      tenant
    }
  }
}