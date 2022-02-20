import type { NextPage } from "next";
import { AboutMe, Header, HomeMetaHead, Projects, Resume } from "../components";
import { MainPage } from "../components/Style/StyledHomeContent";

const Home: NextPage = () => {
    return (
        <>
            <HomeMetaHead />

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
