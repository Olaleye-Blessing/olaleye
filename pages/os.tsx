import type { NextPage } from "next";
import { useEffect } from "react";
import { Header, Main, MetaHead } from "../modules/OS";

const OS: NextPage = () => {
  return (
    <>
      <MetaHead />

      <Header />
      <Main />
    </>
  );
};

export default OS;
