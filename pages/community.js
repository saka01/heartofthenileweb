import Image from "next/image";
import Header from "/components/Layout/Header";
import { Layout, Section } from "/components";

export default function Community() {
  return (
      <Layout currentPage="Community">
        <Section.Brief />
        <Section.Work />
      </Layout>
  );
}