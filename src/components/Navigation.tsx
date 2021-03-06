import Link from 'next/link';
import { useRouter } from 'next/router';
import Burger from './Burger';
import { useState } from 'react';

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={'container ' + (active ? 'active' : '')}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === '/' ? 'active' : null}>home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a
                className={
                  router.pathname.startsWith('/blog') ? 'active' : null
                }
              >
                blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/articles">
              <a className={router.pathname === '/articles' ? 'active' : null}>
                articles
              </a>
            </Link>
          </li>
          <li>
            <Link href="/glossary">
              <a className={router.pathname === '/glossary' ? 'active' : null}>
                glossary
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={router.pathname === '/about' ? 'active' : null}>
                about
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 0;
            }
            ul {
              opacity: 0;
              width: 40%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 2rem;
              font-size: 2rem;
              padding: 0 3rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #222;
            }

            @media (min-width: 769px) {
              .container {
                width: 7rem;
                display: none;
              }
              ul {
                opacity: 1;
                width: 7rem;
                top: auto;
                display: block;
                transform: translateY(0);
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
