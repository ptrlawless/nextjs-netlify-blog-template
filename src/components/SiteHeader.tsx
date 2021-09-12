import styles from '../styles/siteheader.module.css';
// import { useState } from 'react';
import Link from 'next/link';
// import { motion } from 'framer-motion';
import Container from './Container';

export default function SiteHeader() {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <a className={styles.title}>Regarding Justice</a>
          </Link>
        </div>

        <div className={styles.navMain}>
          <Link href="/">
            <a className={styles.navlink}>Home</a>
          </Link>

          <Link href="/blog">
            <a className={styles.navlink}>Blog</a>
          </Link>

          <Link href="/articles">
            <a className={styles.navlink}>Articles</a>
          </Link>
          <Link href="/glossary">
            <a className={styles.navlink}>Glossary</a>
          </Link>
          <Link href="/about">
            <a className={styles.navlink}>About</a>
          </Link>
        </div>
      </div>
    </Container>
  );
}
