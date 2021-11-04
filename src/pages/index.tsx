import * as React from 'react'
import Layout from '../components/layout'
import Section from '../components/Section'
import ContactForm from "../components/ContactForm"
import Portfolio from "../components/Portfolio"
import Intro from "../components/Intro"
import '../Sass/style.scss'
const AboutPage = () => {
  return (
    <Layout title="Home Page">
      <div className="">
        <Section id="intro">
        <Intro/>
      </Section>
      <Section id="portfolio">
        <Portfolio/>
      </Section>
      <Section id="contact"><ContactForm/></Section>
      </div>
    </Layout>
  )
}
export default AboutPage