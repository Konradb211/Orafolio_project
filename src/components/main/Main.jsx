import { AboutMe } from "./AboutMe";
import { WelcomeSction } from "./WelcomeSection";
import { WhatAmDoin } from "./WhatAmDoin";

export const Main = () => {
  return (
    <>
      <main className="mx-4">
        <WelcomeSction />
        <AboutMe />
        <WhatAmDoin />
      </main>
    </>
  );
};
