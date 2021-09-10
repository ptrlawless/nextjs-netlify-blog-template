import Footer from './Footer';
import Meta from './Meta';
import Navigation from './Navigation';
import SiteHeader from './SiteHeader';

export default function Layout({ children }) {
  return (
    <>
      <SiteHeader />
      <Navigation />
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>

      <Footer />
    </>
  );
}
