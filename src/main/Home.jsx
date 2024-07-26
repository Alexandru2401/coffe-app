import CarouselPage from "../components/Carousel";
import BestProduct from "../components/HomeComponents/BestProduct";
import FirstHomeComponent from "../components/HomeComponents/FirstHomeComponents";
import SecondHomeComponents from "../components/HomeComponents/SecondHomeComponent";
import Story from "../components/HomeComponents/Story";
import ThirdHomeComponent from "../components/HomeComponents/ThirdHomeComponents";

export default function Home() {
  return (
    <div>
      <Story />
      <CarouselPage />
      <FirstHomeComponent />
      <SecondHomeComponents />
      <ThirdHomeComponent/>
      <BestProduct />
    </div>
  );
}
