export const AboutMe = () => {
  return (
    <>
      <section className="container my-32 flex flex-col items-center justify-center text-center">
        <h2 className=" text-xl font-light uppercase tracking-[7px] text-zinc-500">
          about me
        </h2>
        <img
          src="jaxd.jpg"
          alt="Photo of me"
          className="my-12 aspect-square w-56 rounded-full bg-no-repeat object-cover "
        />
        <p className="max-w-[32ch] px-12 text-3xl font-medium text-zinc-800 lg:px-0">
          Hi, I'm Konrad, and I'm passionate about web development. I've been
          learning for less than a year, and all the time I don't stop. During
          this year I have learned a lot and can confidently say that Front-End
          is the thing I want to walk through life with.
        </p>
      </section>
    </>
  );
};
