import React from "react";
import HomeCard from "./HomeCard";
import HomeCard1 from "./HomeCard1";
import HomeCard2 from "./HomeCard2";
import { HomeCard4, HomeCard4b } from "./HomeCard4";
import { HomeCard5, HomeCard5b } from "./HomeCard5";
import HomeCard6 from "./HomeCard6";
import HomeCard7 from "./HomeCard7";
//import HomeCard8 from "./HomeCard8";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  HomeDetails,
  HomeDetails1,
  HomeDetails2,
  HomeDetails4,
  HomeDetails5,
  HomeDetails6,
  HomeDetails7,
  HomeDetails8,
  HomeDetails9,
  HomeDetails10,
  // HomeDetails11,
  // HomeDetails12,
  // HomeDetails14,
  // HomeDetails15
} from "./HomeDetails";
import { Image, Box } from "@chakra-ui/react";
const Home = () => {
  return (
    <Box>
      <Navbar />
      <HomeCard type={HomeDetails} />
      <HomeCard1 type={HomeDetails1} />
      <Image
        src="./images/img2.png"
        alt="img"
        mt="10"
      />
      <HomeCard2 type={HomeDetails2} src="https://i.imgur.com/Gry0Q5D.png" />
     
      <HomeCard4
        text="Trending Sunglasses"
        src="./images/img3.webp"
      />
      <br />
      <br />
      <br />
      <br />
      <HomeCard4
        text="Perfect Vision"
        src="./images/img4.webp"
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <HomeCard4
        text="Trending FLAT70"
        src="./images/img5.webp"
      />
      <br />
      <br />
     
      <HomeCard5 />
    <HomeCard5b type={HomeDetails5} heading="" />
    <br/>
    <br/>
    <br />
      <HomeCard4b
        text="BRANDS"
        src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
      />
      <br />
      <br />
      <HomeCard6 type={HomeDetails6} heading="EYEGLASSES" />
      <br />
      <HomeCard6 type={HomeDetails7} heading="SUNGLASSES" />
      <br />
      <br />
      <br />
      
      <HomeCard4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg"
      />
      <br />
      <br />
      <HomeCard6 type={HomeDetails6} heading="EYEGLASSES" />
      <br />
      <HomeCard6 type={HomeDetails7} heading="SUNGLASSES" />
      <br />
      <br />
      <br />
      <HomeCard4b
        text=""
        src="./images/img6.webp"
      />
      <br />
      <br />
      <HomeCard6 type={HomeDetails6} heading="EYEGLASSES" />
      <br />
      <br />
      <br />
      <HomeCard4b
        text=""
        src="./images/img7.webp"
      />
      <br />
      <br />
      
      <HomeCard6 type={HomeDetails10} heading="EYEGLASSES" />
      <br />
      <br />
      <br />
      <HomeCard4b
        text=""
        src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg"
      />
      <br />
      <br />
  
      <HomeCard6 type={HomeDetails8} heading="WITH POWER COMPUTER BLU LENSES" />
      
      
      <HomeCard6
        type={HomeDetails9}
        heading="WITH ZERO POWER COMPUTER BLU LENSES"
      />
      
      <HomeCard7 />
      {/* <HomeCard8 type={HomeDetails15} /> */}
      <Footer />
    </Box>
  );
};

export default Home;
