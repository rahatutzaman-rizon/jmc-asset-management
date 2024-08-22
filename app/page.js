import Image from "next/image";
import Banner from "./Page/Banner";
import AboutUs from "./about/page";
import ClientsReviews from "./client/page";
import Achievement from "./achivement/page";
import Projects from "./project/page";

export default function Home() {
  return (
    <main className=" ">
     <Banner></Banner>
     <AboutUs></AboutUs>
     <Achievement></Achievement>
     <Projects></Projects>
     <ClientsReviews></ClientsReviews>
    </main>
  );
}
