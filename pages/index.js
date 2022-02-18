import Head from 'next/head';
import Page from '../components/Page';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Page>
        <p>Hola Mundo</p>
        <code>var, let, const</code>
      </Page>
    </>
  );
}
