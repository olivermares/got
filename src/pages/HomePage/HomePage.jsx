import Header from "../../components/basic/Header";
import Footer from "../../components/basic/Footer";

export default function HomePage() {
  return (
    <div className="backgroundImg">
    <Header home={true}/>
    <main className="main main-home">
        <h1 className="e-h1 alignCenter">GAMES OF THRONES</h1>
     
      
    </main>  
    <Footer/>
    </div>
    
  );
}

