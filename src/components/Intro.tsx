// import { CMS_NAME } from '../lib/constants';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-left md:items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Regarding Justice
      </h1>
      <h4 className="text-left md:text-left text-lg mt-8 md:pl-8">
        Information and Opinions on Criminal Justice Reform
      </h4>
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