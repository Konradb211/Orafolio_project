export const WelcomeSction = () => {
  return (
    <>
      <section className="container flex flex-col items-center rounded-3xl bg-zinc-900 p-8 text-center text-white">
        <div className="my-14 flex max-w-prose flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold">
            Visual Designer Based in Indonesia
          </h1>
          <p className=" mb-6 mt-4 text-sm font-extralight text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quo accusamus perferendis ex facere culpa quas consequuntur?
          </p>
          <a
            href=""
            className="rounded-3xl bg-gradient-to-b from-orange-400 to-orange-500 px-6 py-3 font-bold hover:to-orange-600"
          >
            Contact Me
          </a>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="img-left relative overflow-hidden rounded-3xl transition-transform hover:scale-95">
            <img src="image1.png" alt="Nothing phone" />
            <p className="absolute bottom-6 left-6 text-lg font-bold">
              Branding Project
            </p>
          </div>
          <div className="img-right relative overflow-hidden rounded-3xl transition-transform hover:scale-95">
            <img src="image2.png" alt="Nothing phone" />
            <p className="absolute bottom-6 left-6 text-lg font-bold">
              Branding Project
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
