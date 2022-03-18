import React from "react"
import Layout from "../components/Layout"
import ContactSection from "../components/ContactSection"
import ContentSide from "../components/ContentSide"
import Img from "gatsby-image"
import "../styles/portfolio.scss"


function portfolio({data}) {


  const manageImgSources = [
    data.ManageImgMobile.childImageSharp.fluid,
    {
      ...data.ManageImgTablet.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...data.ManageImgDesktop.childImageSharp.fluid,
      media: `(min-width: 1440px)`,
    },
  ]

  const bookmarkImgSources = [
    data.BookmarkImgMobile.childImageSharp.fluid,
    {
      ...data.BookmarkImgTablet.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...data.BookmarkImgDesktop.childImageSharp.fluid,
      media: `(min-width: 1440px)`,
    },
  ]

  const insureImgSources = [
    data.InsureImgMobile.childImageSharp.fluid,
    {
      ...data.InsureImgTablet.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...data.InsureImgDesktop.childImageSharp.fluid,
      media: `(min-width: 1440px)`,
    },
  ]

  const fyloImgSources = [
    data.FyloImgMobile.childImageSharp.fluid,
    {
      ...data.FyloImgTablet.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...data.FyloImgDesktop.childImageSharp.fluid,
      media: `(min-width: 1440px)`,
    },
  ]
 
  return (
    <Layout>
      <div className="portfolioPage">
        <section className="projectsContainer">
          <div className="project">
          <Img fluid={manageImgSources} className="projectImg"/>
          <ContentSide
            title="Manage"
            paragraph="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider."
            btnTitle="VIEW PROJECT"
            link="/manage"
          />
          </div>

          <div className="project right">
          <Img fluid={bookmarkImgSources} className="projectImg"/>
          <ContentSide
            title="Bookmark"
            paragraph="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section."
            btnTitle="VIEW PROJECT"
            link="/bookmark"
          />
          </div>

          <div className="project">
          <Img fluid={insureImgSources} className="projectImg"/>
          <ContentSide
            title="Insure"
            paragraph="This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation."
            btnTitle="VIEW PROJECT"
            link="/insure"
          />
          </div>

          <div className="project right">
          <Img fluid={fyloImgSources} className="projectImg"/>
          <ContentSide
            title="Fylo"
            paragraph="This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
            btnTitle="VIEW PROJECT"
            link="/fylo"
          />
          </div>
        
        </section>
        <ContactSection />
      </div>
    </Layout>
  )
}
export default portfolio

export const query = graphql`
{
  ManageImgDesktop: file(relativePath: {eq: "portfolio/desktop/image-portfolio-manage@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 540, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  ManageImgTablet: file(relativePath: {eq: "portfolio/tablet/image-portfolio-manage@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 339, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  ManageImgMobile: file(relativePath: {eq: "portfolio/mobile/image-portfolio-manage@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 311, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  BookmarkImgDesktop: file(relativePath: {eq: "portfolio/desktop/image-portfolio-bookmark@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 540, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  BookmarkImgTablet: file(relativePath: {eq: "portfolio/tablet/image-portfolio-bookmark@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 339, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  BookmarkImgMobile: file(relativePath: {eq: "portfolio/mobile/image-portfolio-bookmark@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 311, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  InsureImgDesktop: file(relativePath: {eq: "portfolio/desktop/image-portfolio-insure@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 540, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  InsureImgTablet: file(relativePath: {eq: "portfolio/tablet/image-portfolio-insure@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 339, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  InsureImgMobile: file(relativePath: {eq: "portfolio/mobile/image-portfolio-insure@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 311, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  FyloImgDesktop: file(relativePath: {eq: "portfolio/desktop/image-portfolio-fylo@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 540, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  FyloImgTablet: file(relativePath: {eq: "portfolio/tablet/image-portfolio-fylo@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 339, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  FyloImgMobile: file(relativePath: {eq: "portfolio/mobile/image-portfolio-fylo@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 311, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  ManageHeroImgDesktop: file(relativePath: {eq: "detail/desktop/image-manage-hero@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 540, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
