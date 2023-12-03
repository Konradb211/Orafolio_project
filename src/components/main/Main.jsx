import { AboutMe } from "./AboutMe";
import { WelcomeSction } from "./WelcomeSection";

export const Main = () => {
  return (
    <>
      <main className="mx-4">
        <WelcomeSction />
        <AboutMe />
      </main>
    </>
  );
};
