import Header from "./components/header/Header.tsx";
import Main from "./components/main/Main.tsx";
import Cta from "./components/cta/Cta.tsx";
import Services from "./components/services/Services.tsx";
import Portfolio from "./components/portfolio/Portfolio.tsx";
import Questions from "./components/questions/Questions.tsx";
import Partners from "./components/partners/Partners.tsx";
import Reviews from "./components/reviews/Reviews.tsx";
import Contacts from "./components/contacts/Contacts.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Cta />
        <Services />
        <Portfolio />
        <Questions />
        <Partners />
        <Reviews />
        <Cta />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
