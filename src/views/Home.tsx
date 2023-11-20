import React from "react";
//import TitleHome from "../components/Home/TitleHome";
import Carousel from "../components/Carousel";
const Home: React.FC = () => {
  const carouselItems = [
    { id: 1, imageUrl: '/src/assets/img/wallpaper/3guys.jpeg' },
    { id: 2, imageUrl: '/src/assets/img/wallpaper/crew.jpg' },
    { id: 3, imageUrl: '/src/assets/img/wallpaper/luffy_screen2.jpeg'},
    { id: 4, imageUrl: '/src/assets/img/wallpaper/luffy_screen.jpeg'},
    { id: 5, imageUrl: '/src/assets/img/wallpaper/luffy.jpeg'}
  ];
  return (
  
        <Carousel items={carouselItems} active={0} />
     
   
  );
};

export default Home;
