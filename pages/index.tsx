import type { NextPage } from "next";
import Head from "next/head";
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
