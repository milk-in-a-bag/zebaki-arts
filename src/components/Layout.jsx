import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#1b0e10] dark:text-[#fcf8f9]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
