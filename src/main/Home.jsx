import CarouselPage from "../components/Carousel";
import FirstHomeComponent from "../components/HomeComponents/FirstHomeComponents";
import SecondHomeComponents from "../components/HomeComponents/SecondHomeComponent";

export default function Home(){
    return (
        <div>
            <FirstHomeComponent/>
            <CarouselPage/>
            <SecondHomeComponents/>
        </div>
    )
}