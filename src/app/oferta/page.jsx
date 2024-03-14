import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import PopularSandwiches from "../../components/PopularSandwiches";
import BestSandwiches from "../../components/BestSandwiches";

export default function Home() {
  return (
      <main className="max-w-[1024px] mx-auto">
          <Slider/>
          <Categories classParam="mt-20"/>
          <PopularSandwiches/>
          <BestSandwiches/>
      </main>
  )
}