import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Timeline from "./components/Timeline";
import TwoOfUs from "./components/TwoOfUs";
import SecretLetter from "./components/SecretLetter";
import LevelUp from "./components/LevelUp";
import FutureMail from "./components/FutureMail";
import DreamMap from "./components/DreamMap";
import SecretGift from "./components/SecretGift";
import Ending from "./components/Ending";

function App() {
  return (
    <main className="w-screen bg-nightTheme selection:bg-skyTheme selection:text-slate-900">
      <Hero />
      <Profile />
      <Timeline />
      <TwoOfUs />
      <SecretLetter />
      <LevelUp />
      <FutureMail />
      <DreamMap />
      <SecretGift />
      <Ending />
    </main>
  );
}

export default App;