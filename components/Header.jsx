import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-black px-4 md:px-6 py-2 flex items-center justify-between shadow-sm ">
      <Link href="#" className="flex items-center" prefetch={false}>
        <AppleIcon className="h-6 w-6 text-white" />
      </Link>
      <nav className="hidden md:flex items-center space-x-10">
        <Link
          href="#Caracteristicas"
          className="text-white hover:text-gray-300  font-light text-sm"
          prefetch={false}
        >
          Características
        </Link>
        <Link
          href="#Design"
          className="text-white hover:text-gray-300  font-light text-sm"
          prefetch={false}
        >
          Diseño
        </Link>
        <Link
          href="#Contact"
          className="text-white hover:text-gray-300  font-light text-sm"
          prefetch={false}
        >
          Contacto
        </Link>
      </nav>
      <div></div>
    </header>
  );
};

function AppleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}
