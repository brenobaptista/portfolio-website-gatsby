import React, { useEffect } from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import Card from '../components/card'
import PropTypes from 'prop-types';
import { Link, graphql} from "gatsby"
import Img from 'gatsby-image'
import '../../node_modules/aos/dist/aos.css'; 
import AOS from 'aos'; 

export const queryImage = graphql`
    query {
        acenscoin: file(relativePath: { eq: "acenscoin.png" }) {
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
        portfolio: file(relativePath: { eq: "portfolio.png" }) {
            childImageSharp {
                fixed(width: 96, height: 96) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        jardimcaipira: file(relativePath: { eq: "jardimcaipira.png" }) {
            childImageSharp {
                fixed(width: 96, height: 96) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        nimbalo: file(relativePath: { eq: "nimbalo.png" }) {
            childImageSharp {
                fixed(width: 96, height: 96) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        acens: file(relativePath: { eq: "acens.png" }) {
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
`;

const projects = ({ data }) => {
    useEffect(() => {
        AOS.init();
    })

    return (
        <Layout>
            <SEO title="Projects" />
            <section className="hero custom-hero is-size-4-desktop is-size-5-touch">
                <div className="hero-body">
                    <h1 className="title has-text-centered has-text-light">Projects as a Developer</h1>
                    <hr className="custom-hr2"/>
                    <p className="has-text-centered">
                        See more projects on my <a href="https://github.com/brenobaptista">GitHub</a>
                    </p>
                </div>
            </section>
            <section className="section is-size-4-desktop is-size-5-touch">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="Pomodoro"
                                subtitle="Pomodoro App (iOS and Android)"
                                link="https://snack.expo.io/@brenaoxline/pomodoro?session_id=snack-session-wVXau2DzY&preview=true&platform=android&iframeId=i7mnt0ixrd&theme=dark"
                                tags={['React Native', 'Redux', 'Expo Snack']}
                                image={<Img fixed={data.pomodoro.childImageSharp.fixed} alt="pomodoro"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="Aeon Planner"
                                subtitle="Personal Planner React PWA"
                                link="https://aeonplanner.netlify.com/"
                                tags={['PWA', 'React', 'Redux', 'Node', 'REST API', 'Full Stack']}
                                image={<Img fixed={data.aeon.childImageSharp.fixed} alt="aeon"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="AcensCoin"
                                subtitle="A cryptocurrency made using Node.js"
                                link="https://github.com/brenobaptista/blockchain-acenscoin-nodejs"
                                tags={['Node', 'Blockchain', 'Cryptocurrency']}
                                image={<Img fixed={data.acenscoin.childImageSharp.fixed} alt="acenscoin"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="Spectacles Finances"
                                subtitle="My Personal Finance App (iOS and Android)"
                                link="https://snack.expo.io/@brenaoxline/spectacles-finances?session_id=snack-session-Oi!trDiNL&preview=true&platform=ios&iframeId=a6wgr04u9t&theme=dark"
                                tags={['React Native', 'Firebase', 'Expo Snack']}
                                image={<Img fixed={data.spectacles.childImageSharp.fixed} alt="spectacles"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="iOS Calculator"
                                subtitle="iOS Calculator clone (iOS and Android)"
                                link="https://snack.expo.io/@brenaoxline/calculator?session_id=snack-session-vrWVGJBoW&preview=true&platform=ios&iframeId=oj90vwabru&theme=dark/"
                                tags={['React Native', 'Expo Snack', 'iOS Design']}
                                image={<Img fixed={data.calculator.childImageSharp.fixed} alt="calculator"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up" >
                            <Card 
                                title="Portfolio Website"
                                subtitle="You're already here!"
                                link=""
                                tags={['React','Gatsby', 'Bulma', 'GraphQL', 'PWA']}
                                image={<Img fixed={data.portfolio.childImageSharp.fixed} alt="portfolio"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="Semana Universitária"
                                subtitle="Academic Week 2019 - UECE"
                                link="https://semanauniversitaria2019.uece.br"
                                tags={['HTML', 'CSS', 'Bootstrap', 'JavaScript']}
                                image={<Img fixed={data.semanauniversitaria.childImageSharp.fixed} alt="semana universitaria"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="Acens"
                                subtitle="WordPress training - company I work for"
                                link="http://acensjr.mypressonline.com"
                                tags={['WordPress']}
                                image={<Img fixed={data.acens.childImageSharp.fixed} alt="acens"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="Nimbalo"
                                subtitle="A basic shopping system"
                                link="https://nimbalo.herokuapp.com/users/sign_in"
                                tags={['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails']}
                                image={<Img fixed={data.nimbalo.childImageSharp.fixed} alt="nimbalo"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="Jardim Caipira"
                                subtitle="A company that sells plants and vases"
                                link="https://jardimcaipira.netlify.com"
                                tags={['HTML', 'CSS', 'Bootstrap']}
                                image={<Img fixed={data.jardimcaipira.childImageSharp.fixed} alt="jardim caipira"/>}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero custom-hero is-size-4-desktop is-size-5-touch">
                <div className="hero-body">
                    <h1 className="title has-text-centered has-text-light">Projects as a Project Manager</h1>
                    <hr className="custom-hr4"/>
                </div>
            </section>
            <section className="section is-size-4-desktop is-size-5-touch">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="Parrot Mercantil"
                                subtitle="Online grocery store in Sobral"
                                link="https://parrotmercantil.com.br"
                                tags={['Scrum', 'Project Management']}
                                image={<Img fixed={data.parrot.childImageSharp.fixed} alt="parrot"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="ANMAP"
                                subtitle="The best rubbers, plastics and metals!"
                                link="http://anmap.com.br"
                                tags={['Scrum', 'Project Management']}
                                image={<Img fixed={data.anmap.childImageSharp.fixed} alt="anmap"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="Unijus Jr."
                                subtitle="Law junior enterprise"
                                link="http://unijusjr.com.br"
                                tags={['Scrum', 'Project Management']}
                                image={<Img fixed={data.unijus.childImageSharp.fixed} alt="unijus"/>}
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="hero custom-hero is-size-4-desktop is-size-5-touch">
                <div className="hero-body">
                    <h1 className="title has-text-centered has-text-light">Guides</h1>
                    <hr className="custom-hr5"/>
                </div>
            </section>
            <section className="section is-size-4-desktop is-size-5-touch">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="Manjaro i3"
                                subtitle="Recommended software for Mi3"
                                link="https://github.com/brenobaptista/software-manjaro-i3"
                                tags={['Linux', 'Manjaro', 'Arch Linux']}
                                image={<Img fixed={data.manjaro.childImageSharp.fixed} alt="manjaro i3"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="Manjaro i3 - Troubleshooting"
                                subtitle="Manjaro i3 common problems"
                                link="https://github.com/brenobaptista/troubleshooting-manjaro-i3"
                                tags={['Linux', 'Manjaro', 'Arch Linux', 'Troubleshooting']}
                                image={<Img fixed={data.manjaro.childImageSharp.fixed} alt="manjaro i3 troubleshooting"/>}
                            />
                        </div>
                        <div data-aos="zoom-in-up">
                            <Card 
                                title="Manjaro KDE"
                                subtitle="Recommended software for Manjaro KDE"
                                link="https://github.com/brenobaptista/software-manjaro-kde"
                                tags={['Linux', 'Manjaro', 'Arch Linux']}
                                image={<Img fixed={data.manjaro.childImageSharp.fixed} alt="manjaro kde"/>}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

projects.propTypes = {
    data: PropTypes.object.isRequired
};

export default projects;