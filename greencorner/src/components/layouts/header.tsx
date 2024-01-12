const Header = () => {
    return (
      <header className="bg-teal-700 justify-center p-3">
        <nav className="w-4/5 p-2 m-0 m-auto align-middle ">
          <ul className="grid grid-cols-6">
            <li className="text-amber-50 text-center hover:text-lime-300">
              <a href="/">GREEN CORNER</a>
            </li>
            <li className="text-amber-50 col-start-4 text-center hover:text-lime-300">
              <a href="/about">PRODUCTS</a>
            </li>
            <li className="text-amber-50 text-center hover:text-lime-300">
              <a href="/about">ABOUT</a>
            </li>
            <li className="text-amber-50 text-center hover:text-lime-300">
              <a href="/contact">SERVICES</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;