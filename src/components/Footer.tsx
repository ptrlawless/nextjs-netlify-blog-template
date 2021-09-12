import { url } from 'inspector';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-gray-300 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-2/6">
            Regarding Justice <p className="text-green-600">Ann Espo</p>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Get Involved
            </a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <img
              src={'/images/original.png'}
              className="w-full h-full mr-4"
              alt={'Regarding Justice logo'}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
