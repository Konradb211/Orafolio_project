export const PastClients = () => {
  return (
    <>
      <section className="container my-32 flex flex-col items-center justify-center px-8 text-center text-zinc-400">
        <h2 className=" mb-20 text-xl font-light uppercase tracking-[7px]">
          past clients
        </h2>
        <div className="space-y-16">
          <div className="border-b-[1px] pb-12 md:flex">
            <div className="hidden text-xl md:block md:w-1/2">
              <p className="text-left">0 1</p>
            </div>
            <div className="flex flex-col md:w-1/2">
              <img src="fb.png" alt="fb logo" className="mb-8 max-w-[240px]" />
              <p className="text-left">
                Through our community practice, helping one of the world’s
                leading technology companies advise and mentor for an ongoing
                global initiative that spotlights inspirational YouTube
                creators.
              </p>
            </div>
          </div>
          <div className="border-b-[1px] pb-12 md:flex">
            <div className="hidden text-xl md:block md:w-1/2">
              <p className="text-left">0 2</p>
            </div>
            <div className="flex flex-col md:w-1/2">
              <img
                src="netflix.svg"
                alt="netflix logo"
                className="mb-8 max-w-[240px]"
              />
              <p className="text-left">
                Through our community practice, helping one of the world’s
                leading technology companies advise and mentor for an ongoing
                global initiative that spotlights inspirational YouTube
                creators.
              </p>
            </div>
          </div>
          <div className="pb-12 md:flex">
            <div className="hidden text-xl md:block md:w-1/2">
              <p className="text-left">0 3</p>
            </div>
            <div className="flex flex-col md:w-1/2">
              <img
                src="zoom.svg"
                alt="zoom logo"
                className="mb-8 max-w-[240px]"
              />
              <p className="text-left">
                Through our community practice, helping one of the world’s
                leading technology companies advise and mentor for an ongoing
                global initiative that spotlights inspirational YouTube
                creators.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
