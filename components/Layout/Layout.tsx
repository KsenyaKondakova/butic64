import Head from 'next/head';

import { Footer } from '../Footer/Footer';
import Nav from '../Nav/Nav';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords: string;
};
function Layout({ children, title, description, keywords }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Nav />
      <main className={styles.layout}>
        <div className={styles.layout__children}>
          <div className={styles.main__page__container}>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
