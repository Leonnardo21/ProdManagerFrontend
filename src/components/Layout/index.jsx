import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Menu />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}