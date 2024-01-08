import Header from "./components/header/Header.tsx";
import Main from "./components/main/Main.tsx";
import Services from "./components/services/Services.tsx";
import Portfolio from "./components/portfolio/Portfolio.tsx";
import Questions from "./components/questions/Questions.tsx";
import Partners from "./components/partners/Partners.tsx";
import Reviews from "./components/reviews/Reviews.tsx";
import Contacts from "./components/contacts/Contacts.tsx";
import Footer from "./components/footer/Footer.tsx";
import CtaHeader from "./components/cta/CtaHeader.tsx";
import CtaFooter from "./components/cta/CtaFooter.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <CtaHeader />
        <Services />
        <Portfolio />
        <Questions />
        <Partners />
        <Reviews />
        <CtaFooter />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
