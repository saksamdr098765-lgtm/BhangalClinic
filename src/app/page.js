

import FooterCTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Packages from "./components/Packages";
import PopularTests from "./components/PopularTest";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
  <>
<Hero></Hero>
<PopularTests></PopularTests>
<Packages></Packages>
<WhyChooseUs></WhyChooseUs>
<FooterCTA></FooterCTA>
<Footer></Footer>
  </>
  );
}
