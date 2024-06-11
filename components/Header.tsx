import Image from "next/image";
import Link from "next/link";

//header element with Paprika logo (navigates to home page)
const Header = () => {
  return (
    <header className="flex justify-between items-center w-full px-10 py-4">
      <Link href="/">
        <Image src="/nav_logo.png" alt="nav logo" width={200} height={80} />
      </Link>
    </header>
  );
};

export default Header;
