import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import CustColours from "./components/ui/CustColours";

function App() {
  return (
    <div className="relative bg-primaryColour text-lightText">
      <Hero />
       <CustColours />
    </div>
  );
}

export default App;