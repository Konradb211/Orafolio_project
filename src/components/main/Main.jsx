import { AboutMe } from "./AboutMe";
import { PastClients } from "./PastClients";
import { WelcomeSction } from "./WelcomeSection";
import { WhatAmDoin } from "./WhatAmDoin";

export const Main = () => {
  return (
    <>
      <main className="mx-4">
        <WelcomeSction />
        <AboutMe />
        <WhatAmDoin />
        <PastClients />
      </main>
    </>
  );
};
