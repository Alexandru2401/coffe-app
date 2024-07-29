import CarouselProducts from "../components/CarouselProducts";
import BestProduct from "../components/HomeComponents/BestProduct";
import GeneralInfo from "../components/HomeComponents/GeneralInfo";
import ProductsVariety from "../components/HomeComponents/ProductsVariety";
import Story from "../components/HomeComponents/Story";
import Testimonials from "../components/HomeComponents/Testimonials";
import ThirdHomeComponent from "../components/HomeComponents/ThirdHomeComponents";

export default function Home() {
  return (
    <div>
      <Story />
      <CarouselProducts />
      <GeneralInfo />
      <ProductsVariety />
      <Testimonials />
      <ThirdHomeComponent />
      <BestProduct />
    </div>
  );
}
