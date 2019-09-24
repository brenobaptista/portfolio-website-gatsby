import React, { useEffect } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../../node_modules/aos/dist/aos.css'; 
import AOS from 'aos'; 

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero custom-hero">
        <div className="hero-body">
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
                imgStyle={{ borderRadius: '100%', 
                            borderStyle: 'solid',
                            borderWidth: '1px',
                            padding: '.5rem',
                            borderColor: '#181A1B',
                            backgroundColor: '#181A1B' }}
                alt="Breno Baptista" />
            )} />
          </figure>
          <h1 className="title is-1 has-text-centered has-text-light">Breno Baptista</h1>
          <h2 className="subtitle is-4 has-text-centered has-text-light">Front End Web Developer</h2>
          <div className="has-text-centered">
            <a href="https://drive.google.com/open?id=1L1cQq_AgfhuvPSpnk5HLBQiYuQQlWTNi" aria-label="curriculum vitae">
              <span className="icon is-large fa-2x">
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
            </a>
            <a href="https://github.com/brenobaptista" aria-label="github">
              <span className="icon is-large fa-2x">
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/breno-baptista" aria-label="linkedin">
              <span className="icon is-large fa-2x">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </a>
            <a href="https://www.instagram.com/breno.mabapt/" aria-label="instagram">
              <span className="icon is-large fa-2x">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </a>
            <a href="mailto:brenomb07@gmail.com" aria-label="github">
              <span className="icon is-large fa-2x">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="container section content is-size-4-desktop is-size-5-touch">
        <h3 className="title has-text-light">About Me</h3>
        <p className="has-text-justified paragraph">
          I love studying Linux (Arch Linux), programming, reading, playing video games and traveling. Also, I can play the ocarina. Nowadays, I work as a <Link to="/stack/">web developer</Link> and as an English teacher. I'm currently studying Information Systems Analysis and Development at Millennium College.
        </p>
        <p className="has-text-justified paragraph">
          I've developed <Link to="/projects/">projects</Link> for myself and for the company I work for. I'm not only a developer, but also a project manager. Check out some more <Link to="/downloads/">things</Link> about me!
        </p>
      </section>
    </Layout>
  );
};

export default IndexPage
