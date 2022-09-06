import Head from "next/head";
import { FC } from "react";

const MetaHead: FC = () => {
  const description =
    "List of open source contributions made by Olaleye Blessing";
  const title = "Olaleye Blessing | Open Source Contributions";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      <meta name="twitter:title" content={title} key="twi:title" />
      <meta
        name="twitter:description"
        content={description}
        key="twi:description"
      />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:title" content={title} key="og:title" />
    </Head>
  );
};

export default MetaHead;
