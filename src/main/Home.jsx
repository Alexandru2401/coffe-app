import CarouselProducts from "../components/CarouselProducts";

import BestProducts from "../components/HomeComponents/BestProducts";
import GeneralInfo from "../components/HomeComponents/GeneralInfo";
import ProductsVariety from "../components/HomeComponents/ProductsVariety";
import Story from "../components/HomeComponents/Story";
import Testimonials from "../components/HomeComponents/Testimonials";
import ThirdHomeComponent from "../components/HomeComponents/ThirdHomeComponents";

export default function Home() {
  return (
    <main style={{backgroundColor:"#FFF2E1"}}>
      <Story />
      <CarouselProducts />
      <GeneralInfo />
      <ProductsVariety />
      <Testimonials />
      <ThirdHomeComponent />
      <BestProducts />
    </main>
  );
}

