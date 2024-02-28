import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  return (
    <main className={styles.layout}>
      <div className={styles.layout__children}>{children}</div>
    </main>
  );
}

export default Layout;
