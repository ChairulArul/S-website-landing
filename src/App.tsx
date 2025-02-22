import Header from "./components/Header";
import NavBar from "./components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
    </div>
  );
}
export default App;
