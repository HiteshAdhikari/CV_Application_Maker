import { Printer } from "react-feather";

const Print = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <button
        className=" print:hidden bg-sky-500/100 hover:scale-125 hover:ease-in-out transition-all duration-300 fixed bottom-5 right-5 p-5 rounded-full"
        onClick={handlePrint}
      >
        <Printer size={30} color="white" />
      </button>
    </>
  );
};

export default Print;
