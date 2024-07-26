import CarouselPage from "../components/Carousel";
import FirstHomeComponent from "../components/HomeComponents/FirstHomeComponents";
import SecondHomeComponents from "../components/HomeComponents/SecondHomeComponent";
import Story from "../components/HomeComponents/Story";

export default function Home(){
    return (
        <div>
            <Story/>
            <FirstHomeComponent/>
            <CarouselPage/>
            <SecondHomeComponents/>
        </div>
    )
}