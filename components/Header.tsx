import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white-200 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">Kilpailutus</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/yrityksille" className="hover:underline ml-8 hover:underline">
                Yrityksille
              </Link>
              <Link href="/faq" className="hover:underline ml-8 hover:underline">
                Yleiset kysymykset
              </Link>
            </li>
            <li>
              <Link href="/miten" className="hover:underline ml-4 hover:underline">
                Miten kilpailutus toimii?
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;