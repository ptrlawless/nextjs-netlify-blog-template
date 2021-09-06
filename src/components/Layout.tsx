import Footer from './Footer';
import Meta from './Meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen m-4">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
