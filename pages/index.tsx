import type { NextPage } from "next";
import { AboutMe, Header, Projects, Resume } from "../components";
import { Meta } from "../modules/Home";
import { MainPage } from "../components/Style/StyledHomeContent";

const Home: NextPage = () => {
  return (
    <>
      <Meta />

      <Header />
      <MainPage>
        <div className="container">
          <AboutMe />
          <Projects />
        </div>
        <Resume />
      </MainPage>
    </>
  );
};

export default Home;
