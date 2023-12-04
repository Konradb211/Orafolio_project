export const Footer = () => {
  return (
    <>
      <footer className="rounded-t-3xl bg-zinc-900 text-white">
        <div className="container flex flex-col items-center p-8 lg:flex-row lg:justify-between">
          <div className="mb-16 flex flex-col items-center ">
            <img
              src="jaxd.jpg"
              alt="Photo of me"
              className="my-12 aspect-square w-40 rounded-full bg-no-repeat object-cover "
            />
            <p className="text-lg">Front-End Developer</p>
          </div>
          <div className="flex flex-col space-y-12 text-center lg:flex-row lg:space-x-20 lg:space-y-0 lg:text-left">
            <div className="flex flex-col space-y-2">
              <p className="font-bold">Navigation</p>
              <a href="" className="text-sm font-thin">
                Home
              </a>
              <a href="" className="text-sm font-thin">
                About
              </a>
              <a href="" className="text-sm font-thin">
                Expertise
              </a>
              <a href="" className="text-sm font-thin">
                Work
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="font-bold">Services</p>
              <a href="" className="text-sm font-thin">
                Branding
              </a>
              <a href="" className="text-sm font-thin">
                UI/UX Design
              </a>
              <a href="" className="text-sm font-thin">
                Development
              </a>
              <a href="" className="text-sm font-thin">
                Digital Marketing
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="font-bold">Social Media</p>
              <a href="" className="text-sm font-thin">
                Dribble
              </a>
              <a href="" className="text-sm font-thin">
                Twitter
              </a>
              <a href="" className="text-sm font-thin">
                Instagran
              </a>
              <a href="" className="text-sm font-thin">
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <p className="border-t border-zinc-600 py-8 text-center text-zinc-400">
          2023 | Konrad Baś
        </p>
      </footer>
    </>
  );
};
