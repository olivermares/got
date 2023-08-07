import Header from "../../components/basic/Header";
import Footer from "../../components/basic/Footer";

export default function HomePage() {
  return (
    <div className="backgroundImg">
      <header className="header">
        <div></div>
        <Header home={false} />
      </header>
      <main className="main main-home">
        <h1 className="e-h1 alignCenter">GAME OF THRONES</h1>
      </main>
      <footer className="footer margin-top margin-bottom">
        <Footer />
      </footer>
    </div>
  );
}
