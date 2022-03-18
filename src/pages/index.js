import React from "react"
import Img from "gatsby-image"
import "../styles/index.scss"
import Layout from "../components/Layout"
import PrimaryButton from "../components/PrimaryBtn"
import ContactSection from "../components/ContactSection"
import ContentSide from "../components/ContentSide"

export default function Home({data}) {

  const heroImgSources = [
    data.HeroImgMobile.childImageSharp.fluid,
    {
      ...data.HeroImgTablet.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...data.HeroImgDesktop.childImageSharp.fluid,
      media: `(min-width: 1440px)`,
    },
  ]

  const profileImgSources = [
    data.ProfileImgMobile.childImageSharp.fluid,
    {
      ...data.ProfileImgTablet.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...data.ProfileImgDesktop.childImageSharp.fluid,
      media: `(min-width: 1440px)`,
    },
  ]

  return (
    <Layout>
      <div className="homePage">
        <header className="hero">
          <Img
          style={{maxHeight: "600px"}}
          objectFit="contain"
          objectPosition="50% 0"
          fluid={heroImgSources}/>
          <div className="heroContent">
            <h1>
              Hey, I’m Alex Spencer and I love building beautiful websites
            </h1>
            <PrimaryButton title="about me" link="#about" />
          </div>
        </header>
        <section id="about" className="aboutSection">
          <Img fluid={profileImgSources} className="portfolioImgHome"/>
          <ContentSide
            title="About Me"
            paragraph="I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work."
            btnTitle="GO TO PORTFOLIO"
            link="/portfolio"
          />
        </section>
        <ContactSection />
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  HeroImgDesktop: file(relativePath: {eq: "homepage/desktop/image-homepage-hero@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1110, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  HeroImgTablet: file(relativePath: {eq: "homepage/tablet/image-homepage-hero@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1376, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  HeroImgMobile: file(relativePath: {eq: "homepage/mobile/image-homepage-hero@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 622, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  ProfileImgDesktop: file(relativePath: {eq: "homepage/desktop/image-homepage-profile@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 540, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  ProfileImgTablet: file(relativePath: {eq: "homepage/tablet/image-homepage-profile@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 281, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  ProfileImgMobile: file(relativePath: {eq: "homepage/mobile/image-homepage-profile@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 311, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
