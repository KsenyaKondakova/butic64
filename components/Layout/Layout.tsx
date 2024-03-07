import { Footer } from '../Footer/Footer';
import Nav from '../Nav/Nav';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  return (
    <>
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
