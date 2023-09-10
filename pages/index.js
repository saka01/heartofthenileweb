// import styles from "../public/page.module.css";
// import Layout from "/components/Layout/LayoutAdmin";
// import Header from "/components/Layout/Header";
import { Layout, Section } from "/components";

export default function Home() {
  return (
    <Layout currentPage="Home">
      <Section.Hero />
      <Section.PopularItems />
      <Section.Testimonial />
      <Section.FooterFirst />
    </Layout>
    // <main>
    //     <h1>Heart of the Nile</h1>
    // </main>
  );
}
