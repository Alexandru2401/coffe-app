import CarouselProducts from "../components/generalComponents/CarouselProducts";

import BestProducts from "../components/homeComponents/BestProducts";
import GeneralInfo from "../components/homeComponents/GeneralInfo";
import ProductsVariety from "../components/homeComponents/ProductsVariety";
import Story from "../components/homeComponents/Story";
import Testimonials from "../components/homeComponents/Testimonials";
import ThirdHomeComponent from "../components/homeComponents/ThirdHomeComponents";

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

