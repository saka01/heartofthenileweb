import Image from "next/image";
// import styles from "../public/page.module.css";
// import Layout from "/components/Layout/LayoutAdmin";
import Header from "/components/Layout/Header";
import { Layout, Section } from "/components";

export default function About() {
  return (
    <Layout currentPage="About">
      <Section.Brief />
      <Section.Work />
    </Layout>
    // <Layout pageClass="front"></Layout>
    // <main>
    //     <h1>Heart of the Nile</h1>
    //   </main>
  );
}
