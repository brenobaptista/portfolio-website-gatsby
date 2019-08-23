import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <figure className="photo image is-128x128">
      <StaticQuery
      query={graphql`
        query {
          photo: file(relativePath: { eq: "freelancer.png" }) {
            childImageSharp {
              fixed(width: 128, height: 128) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }`
      } render={data => (
        <Img 
          fixed={data.photo.childImageSharp.fixed}
          imgStyle={{ borderRadius: '100%' }}
          alt="Breno Baptista" />
      )} />
    </figure>
    <h1 className="title has-text-centered">Breno Baptista</h1>
    <h2 className="subtitle has-text-centered">Front End Web Developer</h2>
    <div className="has-text-centered">
      <a href="https://drive.google.com/file/d/1-bGOhiTphjqd_Lmm7jC2mNvDoInBg8GD/view?usp=sharing" aria-label="curriculum vitae">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faAddressCard} />
        </span>
      </a>
      <a href="https://github.com/brenobaptista" aria-label="github">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/breno-baptista-006a4917b/" aria-label="linkedin">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </a>
      <a href="https://www.instagram.com/breno.mabapt/" aria-label="instagram">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faInstagram} />
        </span>
      </a>
    </div>
    <hr />
    <section className="section content is-size-4-desktop is-size-5-touch">
      <h4 className="title">Hello, I'm Breno Baptista!</h4>
      <p>
        I work as a Front End Web Developer and as an English teacher.
      </p>
      <p>Currently studying Information Systems Analysis and Development at Millennium College.</p>
      <p>I've developed projects for myself and for the company I work for. I'm not only a developer, but also a project manager.</p>
      <p>Check them out <Link to="/projects/">here</Link>!</p>
      <p>Check out some <Link to="/downloads/">downloads</Link>!</p>
    </section>
  </Layout>
)

export default IndexPage
