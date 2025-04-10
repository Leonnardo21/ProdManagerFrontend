import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Menu />
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />
        <main className="flex-1 p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}