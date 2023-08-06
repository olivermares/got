import Header from "../../components/basic/Header";
import Footer from "../../components/basic/Footer";

export default function HomePage() {
  return (
    <div className="backgroundImg">
    <Header home={false}/>
    <main className="main">
      <h1 className="e-h1">GAMES OF THRONES</h1>
    </main>  
    <Footer/>
    </div>
    
  );
}

