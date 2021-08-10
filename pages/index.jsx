import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sesse Craze</title>
        <meta
          name='description'
          content='Pause and Experience every moment on a visit in Uganda-The Pearl Of Africa.'
        />
        <meta
          name='keywords'
          content='sessecraze, kalanagla island, tour and travel, kalangala island, kalangala district, kalangala ferry, kalangala town'
        />
      </Head>
    </div>
  );
}
