// import { CMS_NAME } from '../lib/constants';

import Author from './Author';
import MoreStories from './MoreStories';

export default function Intro() {
  return (
    <section
      style={{
        // border: '1px solid red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        backgroundImage: `url(/images/hands-up-full.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left 22%',
        height: '80vh',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      <div className="border-gray-800 w-full border-solid h-100 flex flex-col justify-center items-end md:w-full">
        <h1 className="text-white text-right md:text-right text-7xl md:text-8xl lg:text-8xl font-bold tracking-tighter leading-tight w-full">
          Regarding Justice
        </h1>
        <h4 className="text-right text-2xl md:text-right text-green-400 font-bold mt-6">
          Information and Opinions on Criminal Justice Reform
        </h4>
      </div>
    </section>
  );
}

{
  /* <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
</h4> */
}
