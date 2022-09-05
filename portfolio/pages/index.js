import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import RecentProjects from "../components/RecentProjects";
import Hero from "../components/Hero";
import userData from "@constants/data";

export default function Home() {
  return (
    <ContainerBlock
      title="Patrick F. Ham  //  Full Stack Developer"
      description="A site intended to introduce Patrick to potential employers."
    >
      <Hero />
      <RecentProjects userData={userData} />
    </ContainerBlock>
  );
}
