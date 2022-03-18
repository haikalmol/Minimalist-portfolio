import React from "react"
import Layout from "../components/Layout"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import "../styles/contact.scss"

export default function contact() {
  return (
    <Layout>
      <div className="contactPage">
        <section className="getInTouch">
          <h2>Get in Touch</h2>
          <div className="touchRight">
            <p>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <div className="socialIcons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub style={{ width: "25px", height: "24px" }} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter style={{ width: "24px", height: "19.5px" }} />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <AiFillInstagram style={{ width: "24px", height: "24px" }} />
          </a>
            </div>
          </div>
        </section>

        <section className="contactForm">
          <h2>Contact Me</h2>
          <form className="contactRight">
            <p className="label">Name</p>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Jane Appleseed"
              required
            />
            <p className="label">Email Address</p>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="email@example.com"
              required
            />
            <p className="label">Message</p>
            <textarea
              className="input"
              name="message"
              rows="6"
              required
              placeholder="How can I help?"
              style={{ width: "100%" }}
            />
            <button className="formBtn" type="submit">
              SEND MESSAGE
            </button>
          </form>
        </section>
      </div>
    </Layout>
  )
}
