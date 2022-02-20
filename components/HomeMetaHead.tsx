import Head from "next/head";
import { FC } from "react";

const HomeMetaHead: FC = () => {
    return (
        <Head>
            <title>Olaleye Blessing | Frontend Developer</title>

            {/* Theme Color for Chrome, Firefox OS and Opera */}
            <meta name="theme-color" content="#ff0a78" />

            {/* Control the behavior of search engine crawling and indexing */}
            <meta name="robots" content="index,follow" />

            {/* Short description of your document's subject */}
            <meta name="subject" content="Olaleye Blessing's portfolio" />

            {/* Gives a general age rating based on the document's content */}
            <meta name="rating" content="General" />

            <meta name="Author" content="Olaleye Blessing" />
            <meta
                name="description"
                content="A passionate frontend developer focused on creating interactive, accessible and responsive websites"
            />

            {/* twitter card */}
            <meta name="twitter:card" content="summary" />
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
                name="twitter:image"
                content="https://raw.githubusercontent.com/Olaleye-Blessing/olaleye/master/public/static/images/blessing.jpeg"
            />
            {/*  */}

            {/* Facebook Open Graph */}
            <meta property="og:type" content="website" />
            <meta
                property="og:description"
                content="A passionate frontend developer focused on creating interactive, accessible and responsive websites"
            />
            <meta
                property="og:title"
                content="Olaleye Blessing | Frontend Developer"
            />
            <meta
                property="og:image"
                content="https://raw.githubusercontent.com/Olaleye-Blessing/olaleye/master/public/static/images/blessing.jpeg"
            />
        </Head>
    );
};

export default HomeMetaHead;
