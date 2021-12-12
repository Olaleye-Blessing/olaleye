import Head from "next/head";
import { FC } from "react";
import { Footer, Navbar } from "./../../components";

const Index: FC = ({ children }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Index;
