import Image from "next/image";
import Vitamin from "./components/Vitamin";
import Items from "./components/Items";
import Ingredients from "./components/Ingredients";
import LatestNews from "./components/LatestNews";
import ContactInfo from "./components/ContactInfo";

const Page = () => {
  return (
    <div style={{ background: "white", position: "relative", padding: "20px" }}>
      <Image
        src="/elbrit.png"
        alt="Elbrit"
        width={1864}
        height={71}
        style={{
          opacity: "0px",
        }}
      />
      <div style={{ position: "relative" }}>
        <Vitamin />
        <div style={{ marginTop: "5rem" }}>
          <Items />
        </div>
        <Ingredients />
        <LatestNews />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Page;
