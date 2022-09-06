import Head from "next/head";
import { FC } from "react";
import { Footer, Meta, Navbar } from "./../../components";

const Index: FC = ({ children }) => {
  return (
    <>
      <Meta />

      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Index;
