import Image from "next/image";
import Header from "/components/Layout/Header";
import { Layout, Section } from "/components";

export default function Menu() {
  return (
    <Layout currentPage="Menu">
      <Section.Hero />
    </Layout>
  );
}
