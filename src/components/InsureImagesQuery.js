import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

export default (props) =>  {
const data = useStaticQuery(
     graphql`
{
  HeroImgDesktop: file(relativePath: {eq: "detail/desktop/image-insure-hero@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2220, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  HeroImgTablet: file(relativePath: {eq: "detail/tablet/image-insure-hero@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 689, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  HeroImgMobile: file(relativePath: {eq: "detail/mobile/image-insure-hero@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 311, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  Preview1ImgDesktop: file(relativePath: {eq: "detail/desktop/image-insure-preview-1@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 635, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  Preview1ImgTablet: file(relativePath: {eq: "detail/tablet/image-insure-preview-1@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 689, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  Preview1ImgMobile: file(relativePath: {eq: "detail/mobile/image-insure-preview-1@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 313, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  Preview2ImgDesktop: file(relativePath: {eq: "detail/desktop/image-insure-preview-2@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 635, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  Preview2ImgTablet: file(relativePath: {eq: "detail/tablet/image-insure-preview-2@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 689, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  Preview2ImgMobile: file(relativePath: {eq: "detail/mobile/image-insure-preview-2@2x.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 313, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`)

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


  const preview1ImgSources = [
    data.Preview1ImgMobile.childImageSharp.fluid,
    {
      ...data.Preview1ImgTablet.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...data.Preview1ImgDesktop.childImageSharp.fluid,
      media: `(min-width: 1440px)`,
    },
  ]

  const preview2ImgSources = [
    data.Preview2ImgMobile.childImageSharp.fluid,
    {
      ...data.Preview2ImgTablet.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...data.Preview2ImgDesktop.childImageSharp.fluid,
      media: `(min-width: 1440px)`,
    },
  ]

return (
    
      <Img
        fluid={props.type==="hero" ? heroImgSources : props.type==="preview1" ? preview1ImgSources : props.type==="preview2" ?  preview2ImgSources : ""}
        alt=""
      />
  )
}
