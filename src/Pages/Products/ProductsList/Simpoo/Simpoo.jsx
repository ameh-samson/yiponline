import Card from "../../../../Components/Card/Card";
import simpoImg from "../../../../assets/SimpooBooks.png";

const Simpoo = () => {
  return (
    <>
      <Card
        imageUrl={simpoImg}
        title="Simpo"
        content="Simpoo effortlessly keeps track of financial transactions, handles billing for clients, and facilitates online payments. 
        Every business needs to make bookkeeping Simpoo!"
        linkUrl="https://simpoo.com/"
      />
    </>
  );
};

export default Simpoo;
