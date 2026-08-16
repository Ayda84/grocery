import Aisle from "./Aisle";
import Discount from "./Discount";
import Footer from "./Footer";
import Information from "./Information";
import Menu from "./Menu";

export default function Home() {
  return (
    <>
      <Menu />
      <Information />
      <Aisle />
      <Discount />
      <Footer/>
    </>
  );
}
