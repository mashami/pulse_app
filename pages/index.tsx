import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="">
        <NavBar />
        <div className="">
          <Hero />
         <Footer />
        </div>
      </div>
    </main>
  );
}
