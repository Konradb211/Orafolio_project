export const Nav = () => {
  return (
    <>
      <nav className="mx-4 py-6 uppercase">
        <div className="container flex justify-between">
          <img src="/logo.svg" alt="" className="w-10 lg:w-8" />
          <ul className="text-md hidden items-center space-x-5 lg:flex">
            <li className="hover:underline">
              <a href="">home</a>
            </li>
            <li className="hover:underline">
              <a href="">about</a>
            </li>
            <li className="hover:underline">
              <a href="">works</a>
            </li>
            <li className="hover:underline">
              <a href="">contact</a>
            </li>
          </ul>
          <button className="px-3 py-1 lg:hidden">
            <img src="bars.svg" alt="" className="w-12" />
          </button>
        </div>
      </nav>
    </>
  );
};
