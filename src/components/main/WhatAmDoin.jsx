export const WhatAmDoin = () => {
  return (
    <>
      <section className="container flex flex-col items-center rounded-3xl bg-zinc-900 p-8 text-center text-white">
        <div className="my-14 flex max-w-prose flex-col items-center justify-center text-center">
          <h2 className=" text-l font-light uppercase tracking-[7px] text-zinc-400">
            what i`m doing
          </h2>
          <ul className="mb-24 mt-12 space-y-10 text-center text-4xl font-medium uppercase md:text-5xl lg:text-6xl">
            <li className="transition-transform duration-300 md:hover:translate-x-10">
              branding design
            </li>
            <li className="transition-transform duration-300 md:hover:-translate-x-10">
              ui/ux design
            </li>
            <li className="transition-transform duration-300 md:hover:translate-x-10">
              development
            </li>
            <li className="transition-transform duration-300 md:hover:-translate-x-10">
              digital marketing
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-6">
          <div className="img-left relative overflow-hidden rounded-3xl transition-transform hover:scale-95">
            <img src="image3.jpeg" alt="Nothing phone" />
            <p className="absolute bottom-6 left-6 text-lg font-bold">
              Branding Project
            </p>
          </div>
          <div className="img-right relative hidden overflow-hidden rounded-3xl transition-transform hover:scale-95 md:block">
            <img src="image4.jpeg" alt="Nothing phone" />
            <p className="absolute bottom-6 left-6 text-lg font-bold">
              Branding Project
            </p>
          </div>
          <div className="img-right relative hidden overflow-hidden rounded-3xl transition-transform hover:scale-95 lg:block">
            <img src="image5.jpeg" alt="Nothing phone" />
            <p className="absolute bottom-6 left-6 text-lg font-bold">
              Branding Project
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
