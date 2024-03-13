import Slider from "../components/Slider";
import Categories from "../components/Categories";
import PopularSandwiches from "../components/PopularSandwiches";
import BestSandwiches from "../components/BestSandwiches";
import Footer from "../components/Footer";

export default function Home() {
  return (
      <main className="max-w-[1024px] mx-auto">
          <Slider/>
          <Categories/>
          <PopularSandwiches/>
          <BestSandwiches/>
          <Footer/>
      </main>
  )
}