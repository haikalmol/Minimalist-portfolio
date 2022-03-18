import React from "react"
import SecondaryBtn from "../components/SecondaryBtn"
import contactSectionStyle from "./styles/contactSection.module.scss"

const ContactSection = () => {
  return (
    <section className={contactSectionStyle.contactSection}>
      <h2>Interested in doing a project together?</h2>
      <div className={contactSectionStyle.horizLine}></div>
      <SecondaryBtn btnTitle="contact me" link="/contact" />
    </section>
  )
}

export default ContactSection
