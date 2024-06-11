import Image from "next/image";
//footer with Paprika logo
const Footer = () => {
  return (
    <footer className="flex flex-row w-full justify-center items-center ">
      <div className="m-10">
        <Image src="/nav_logo.png" width={100} height={50} alt="nav logo" />
      </div>
    </footer>
  );
};

export default Footer;
