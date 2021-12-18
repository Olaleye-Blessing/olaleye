import type { NextPage } from "next";
import Head from "next/head";
import { AboutMe, Header, Projects, Resume } from "../components";
import { MainPage } from "../components/Style/StyledHomeContent";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Olaleye Blessing | Frontend Developer</title>
                <meta name="Author" content="Olaleye Blessing" />
                <meta
                    name="description"
                    content="A passionate frontend developer focused on creating interactive, accessible and responsive websites"
                />
                <meta name="twitter:creator" content="@OlaleyeBlessin" />
                <meta
                    name="twitter:title"
                    content="Olaleye Blessing | Frontend Developer"
                />
                <meta
                    name="twitter:description"
                    content="A passionate frontend developer focused on creating interactive, accessible and responsive websites"
                />
                <meta
                    property="og:description"
                    content="A passionate frontend developer focused on creating interactive, accessible and responsive websites"
                />
                <meta
                    property="og:title"
                    content="Olaleye Blessing | Frontend Developer"
                />
            </Head>
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
