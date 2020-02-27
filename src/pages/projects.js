import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../../node_modules/aos/dist/aos.css"
import AOS from "aos"

export const queryImage = graphql`
  query {
    libretutor: file(relativePath: { eq: "libretutor.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bts: file(relativePath: { eq: "bts.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pomodoro: file(relativePath: { eq: "pomodoro.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    calculator: file(relativePath: { eq: "calculator.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    spectacles: file(relativePath: { eq: "spectacles.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    semanauniversitaria: file(relativePath: { eq: "semanauniversitaria.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    manjaro: file(relativePath: { eq: "manjaro.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    anmap: file(relativePath: { eq: "anmap.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    aeon: file(relativePath: { eq: "aeon.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    parrot: file(relativePath: { eq: "parrot.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    unijus: file(relativePath: { eq: "unijus.png" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const projects = ({ data }) => {
  useEffect(() => {
    AOS.init()
  })

  return (
    <Layout>
      <SEO title="Projects" />
      <section className="hero custom-hero is-size-4-desktop is-size-5-touch">
        <div className="hero-body">
          <h1 className="title has-text-centered has-text-light">
            Projects as a Developer
          </h1>
          <hr className="custom-hr2" />
          <p className="has-text-centered">
            See more projects on my{" "}
            <a href="https://github.com/brenobaptista">GitHub</a>
          </p>
        </div>
      </section>
      <section className="section is-size-4-desktop is-size-5-touch">
        <div className="columns is-centered">
          <div className="column is-half">
            <div data-aos="zoom-in-up">
              <Card
                title="LibreTutor"
                subtitle="LibreTutor - Connecting Tutors and Pupils"
                link="https://github.com/libretutor"
                tags={["Full Stack", "Node", "React Native", "Maps"]}
                image={
                  <Img
                    fixed={data.libretutor.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: "10%"
                    }}
                    alt="libretutor"
                  />
                }
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="Pomodoro"
                subtitle="Pomodoro App (iOS and Android)"
                link="https://github.com/brenobaptista/pomodoro-react-native"
                tags={["React Native", "Redux", "Unit Testing"]}
                image={
                  <Img
                    fixed={data.pomodoro.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: "10%"
                    }}
                    alt="pomodoro"
                  />
                }
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="Aeon Planner"
                subtitle="Personal Planner React PWA"
                link="https://aeonplanner.netlify.com/"
                tags={["PWA", "React", "Redux", "Node", "Full Stack"]}
                image={
                  <Img fixed={data.aeon.childImageSharp.fixed} 
                  imgStyle={{
                    borderRadius: "10%"
                  }}
                  alt="aeon" />
                }
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="Spectacles Finances"
                subtitle="My Personal Finance App (iOS and Android)"
                link="https://github.com/brenobaptista/spectacles-finances-react-native"
                tags={["React Native", "Firebase", "Expo"]}
                image={
                  <Img
                    fixed={data.spectacles.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: "10%"
                    }}
                    alt="spectacles"
                  />
                }
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="iOS Calculator"
                subtitle="iOS Calculator clone (iOS and Android)"
                link="https://github.com/brenobaptista/ios-calculator-react-native"
                tags={["React Native", "Expo", "iOS Design"]}
                image={
                  <Img
                    fixed={data.calculator.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: "10%"
                    }}
                    alt="calculator"
                  />
                }
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="BTS Brindes"
                subtitle="Gifts that make you sell more!"
                link="https://btsbrindes.com.br"
                tags={["Ecommerce, WooCommerce"]}
                image={
                  <Img
                    fixed={data.bts.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: "10%"
                    }}
                    alt="bts brindes"
                  />
                }
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="Semana Universitária"
                subtitle="Academic Week 2019 - UECE"
                link="https://semanauniversitaria2019.uece.br"
                tags={["HTML", "CSS", "Bootstrap", "JavaScript"]}
                image={
                  <Img
                    fixed={data.semanauniversitaria.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: "10%"
                    }}
                    alt="semana universitaria"
                  />
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="hero custom-hero is-size-4-desktop is-size-5-touch">
        <div className="hero-body">
          <h1 className="title has-text-centered has-text-light">
            Projects as a Project Manager
          </h1>
          <hr className="custom-hr4" />
        </div>
      </section>
      <section className="section is-size-4-desktop is-size-5-touch">
        <div className="columns is-centered">
          <div className="column is-half">
            <div data-aos="zoom-in-up">
              <Card
                title="Parrot Mercantil"
                subtitle="Online grocery store in Sobral"
                link="https://parrotmercantil.com.br"
                tags={["Scrum", "Project Management"]}
                image={
                  <Img fixed={data.parrot.childImageSharp.fixed}
                  imgStyle={{
                    borderRadius: "10%"
                  }}
                  alt="parrot" />
                }
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="ANMAP"
                subtitle="The best rubbers, plastics and metals!"
                link="http://anmap.com.br"
                tags={["Scrum", "Project Management"]}
                image={
                  <Img fixed={data.anmap.childImageSharp.fixed}
                  imgStyle={{
                    borderRadius: "10%"
                  }}
                  alt="anmap" />
                }
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="Unijus Jr."
                subtitle="Law junior enterprise"
                link="http://unijusjr.com.br"
                tags={["Scrum", "Project Management"]}
                image={
                  <Img fixed={data.unijus.childImageSharp.fixed}
                  imgStyle={{
                    borderRadius: "10%"
                  }}
                  alt="unijus" />
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="hero custom-hero is-size-4-desktop is-size-5-touch">
        <div className="hero-body">
          <h1 className="title has-text-centered has-text-light">Guides</h1>
          <hr className="custom-hr5" />
        </div>
      </section>
      <section className="section is-size-4-desktop is-size-5-touch">
        <div className="columns is-centered">
          <div className="column is-half">
            <div data-aos="zoom-in-up">
              <Card
                title="Manjaro i3"
                subtitle="Recommended software for Mi3"
                link="https://github.com/brenobaptista/software-manjaro-i3"
                tags={["Linux", "Manjaro", "Arch Linux"]}
                image={
                  <Img
                    fixed={data.manjaro.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: "10%"
                    }}
                    alt="manjaro i3"
                  />
                }
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="Manjaro i3 - Troubleshooting"
                subtitle="Manjaro i3 common problems"
                link="https://github.com/brenobaptista/troubleshooting-manjaro-i3"
                tags={["Linux", "Manjaro", "Arch Linux", "Troubleshooting"]}
                image={
                  <Img
                    fixed={data.manjaro.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: "10%"
                    }}
                    alt="manjaro i3 troubleshooting"
                  />
                }
              />
            </div>
            <div data-aos="zoom-in-up">
              <Card
                title="Manjaro KDE"
                subtitle="Recommended software for Manjaro KDE"
                link="https://github.com/brenobaptista/software-manjaro-kde"
                tags={["Linux", "Manjaro", "Arch Linux"]}
                image={
                  <Img
                    fixed={data.manjaro.childImageSharp.fixed}
                    imgStyle={{
                      borderRadius: "10%"
                    }}
                    alt="manjaro kde"
                  />
                }
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

projects.propTypes = {
  data: PropTypes.object.isRequired,
}

export default projects
