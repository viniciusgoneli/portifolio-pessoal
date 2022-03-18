import Head from 'next/head'
import Navbar from './../components/Navbar/Navbar.jsx'
import Banner from './../components/Banner/Banner.jsx'
import SkillsSection from './../components/SkillsSection/SkillsSection.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinicius Goneli | Desenvolvedor Web</title>
        <meta name='author' content='Vinicius Goneli' />
        <meta name="description" content="Generated by create next app" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Banner />
      <SkillsSection />
    </>
  )
}
