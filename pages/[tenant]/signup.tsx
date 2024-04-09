/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { InputField } from '@/components/InputField';
import { useAppContext } from '@/contexts/AppContext';
import { useApi } from '@/libs/useApi';

import styles from '@/styles/SignUp.module.css'
import { Tenant } from '@/types/Tenant';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SignUp = (data: Props) => {
  const {tenant, setTenant} = useAppContext();

  const [name, setName] = useState('')
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
           <title>Cadastro | {data.tenant.name}</title>
        </Head>
        <Header 
          color={data?.tenant.mainColor} 
          backHref={`/${data?.tenant.slug}/login`} 
        /> 

          <div className={styles.header}>
            {data.tenant.name}
          </div>



          <div className={styles.subtitle} style={{borderBottomColor: data.tenant.mainColor}}>
            Preencha os campos para criar seu cadastros.
          </div>

          <div className={styles.line}></div>

          <div className={styles.formArea}>

            <div className={styles.inputArea}>
              <InputField 
                color={data.tenant.mainColor}
                placeholder='Digite seu nome'
                value={name}
                onChange={setName}
              />
            </div>

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
                label="Cadastra"
                onClick={handleSubmit}
                fill

              />
            </div>

          </div>

          <div className={styles.forgetArea} style={{borderBottomColor: data.tenant.mainColor}}>
            Ja tem cadastro? 
            <Link 
            className={styles.conteForget}
            href={`/${data.tenant.slug}/login`}>
              <span style={{color: data.tenant.mainColor}}> Fazer login</span>
            </Link>
          </div>
    </div>
  )
}

export default SignUp;

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