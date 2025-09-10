import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main data-keywords="indusynergypartners indusynergy indus" className="min-h-screen  bg-white">{children}</main>
      <Footer />
    </>
  );
}
