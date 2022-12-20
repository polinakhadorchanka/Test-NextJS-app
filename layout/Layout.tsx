import React, {memo, PropsWithChildren} from 'react';
import styles from './Layout.module.css';
import Link from "next/link";

const Layout:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.fixed}>
        <header className={styles.header}>
          <div className={'flex-content'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor" width={'45px'} height={'45px'}>
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
            </svg>
            <span>Test project</span>
          </div>
        </header>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href={'/'}>Home</Link>
            </li>
            <li className={styles.li}>
              <Link href={'/buttons'}>Buttons</Link>
            </li>
            <li className={styles.li}>
              <Link href={'/inputs'}>Inputs</Link>
            </li>
            <li className={styles.li}>
              <Link href={'/chips'}>Chips</Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default memo(Layout);