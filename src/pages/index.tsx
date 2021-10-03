import * as React from 'react'
import Layout from '../components/layout'
import Section from '../components/Section'
import '../Sass/style.scss'
const AboutPage = () => {
  
  return (
    <Layout title="Home Page">
      <Section id="intro"></Section>
      <Section id="portfolio"></Section>
      <Section id="contact"></Section>
    </Layout>
  )
}
export default AboutPage