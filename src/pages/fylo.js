import React from 'react'
import Layout from "../components/Layout"
import ContentSide from "../components/ContentSide"
import ContactSection from "../components/ContactSection"
import DetailNav from "../components/detailNav"
import "../styles/detail.scss"
import Image from "../components/FyloImagesQuery"

const bookmarkDetailsPage = () => {

  return (
    <Layout>
  <div className="detailPage">
    <header className="detailHero">
      <Image type="hero"/>
    </header>
    <section className="detailContent">
    <ContentSide
        title="Fylo"
        paragraph="This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes."
        highlight={["Interaction Design / Front End Development","HTML / CSS / JS"]}
        btnTitle="VISIT WEBSITE"
        link="/insure"
      />
      <div className="rightDetail">
      <div className="projectBackground">
        <h3>Project Background</h3>
        <p>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
        </div>
        <div>
            <h3>Static Previews</h3>
            <div className="previewdetail">
            <Image type="preview1"/>
            <Image type="preview2"/>
            </div>
        </div>
      </div>
    </section>
    <DetailNav next="Manage" nextLink="/manage" prev="Insure" prevLink="/insure"/>
    <ContactSection />
    </div>
    </Layout>
)
}

export default bookmarkDetailsPage