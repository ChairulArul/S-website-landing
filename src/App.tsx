import Header from "./components/Header";
import NavBar from "./components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "./components/AboutUs";
// import imagePath from "./assets/your_image_icon.png";
function App() {
  // setup aos
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya berjalan sekali
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs />
    </div>
  );
}
export default App;
