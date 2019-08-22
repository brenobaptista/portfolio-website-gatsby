import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import Card from '../components/Card/card'
import PropTypes from 'prop-types';
import {  graphql } from "gatsby"
import Img from 'gatsby-image'

export const queryImage = graphql`
    query {
        gatsbyastronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        portfolio: file(relativePath: { eq: "portfolio.png" }) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        jardimcaipira: file(relativePath: { eq: "jardimcaipira.png" }) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        nimbalo: file(relativePath: { eq: "nimbalo.png" }) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        acens: file(relativePath: { eq: "acens.png" }) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        semanauniversitaria: file(relativePath: { eq: "semanauniversitaria.png" }) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        manjaro: file(relativePath: { eq: "manjaro.png" }) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

const projects = ({ data }) => (
    <Layout>
        <SEO title="Projects" />
        <section className="section is-size-4-desktop is-size-5-touch">
            <h1 className="title has-text-centered">Projects as a Developer</h1>
            <hr />
            <p className="has-text-centered">
                See more on my <a href="https://github.com/Brenaoxline">GitHub</a>
            </p>
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <Card 
                        title="Portfolio Website"
                        subtitle="It's my personal portfolio website"
                        link=""
                        tags={['React', 'Gatsby', 'Bulma', 'GraphQL']}
                        image={<Img fixed={data.gatsbyastronaut.childImageSharp.fixed} alt="portfolio"/>}
                    />
                    <Card 
                        title="Jardim Caipira"
                        subtitle="It's my first website ever made"
                        link="https://jardimcaipira.netlify.com"
                        tags={['HTML', 'CSS', 'Bootstrap']}
                        image={<Img fixed={data.jardimcaipira.childImageSharp.fixed} alt="jardim caipira"/>}
                    />
                    <Card 
                        title="Nimbalo"
                        subtitle="Simple shopping system"
                        link="https://nimbalo.herokuapp.com/users/sign_in"
                        tags={['HTML', 'CSS', 'Bootstrap', 'Ruby on Rails']}
                        image={<Img fixed={data.nimbalo.childImageSharp.fixed} alt="nimbalo"/>}
                    />
                    <Card 
                        title="Acens"
                        subtitle="WordPress training"
                        link="http://acensjr.mypressonline.com"
                        tags={['WordPress']}
                        image={<Img fixed={data.acens.childImageSharp.fixed} alt="acens"/>}
                    />
                    <Card 
                        title="Semana Universitária"
                        subtitle="My first real client project"
                        link="https://semanauniversitaria2019.uece.br"
                        tags={['HTML', 'CSS', 'Bootstrap', 'JavaScript']}
                        image={<Img fixed={data.semanauniversitaria.childImageSharp.fixed} alt="acens"/>}
                    />
                </div>
            </div>
        </section>
        <section className="section is-size-4-desktop is-size-5-touch">
            <h1 className="title has-text-centered">Projects as a Project Manager</h1>
            <hr />
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <Card 
                        title="ANMAP"
                        subtitle="Not done yet"
                        link=""
                        tags={['Scrum', 'Project Management']}
                        image={<Img fixed={data.gatsbyastronaut.childImageSharp.fixed} alt="portfolio"/>}
                    />
                </div>
            </div>
        </section>
        <section className="section is-size-4-desktop is-size-5-touch">
            <h1 className="title has-text-centered">Guides</h1>
            <hr />
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <Card 
                        title="Manjaro i3"
                        subtitle="Simple recommended softwares"
                        link="https://github.com/Brenaoxline/todo-manjaro-i3"
                        tags={['Linux', 'Manjaro', 'Arch Linux']}
                        image={<Img fixed={data.manjaro.childImageSharp.fixed} alt="portfolio"/>}
                    />
                    <Card 
                        title="Manjaro KDE"
                        subtitle="Simple recommended softwares"
                        link="https://github.com/Brenaoxline/todo-manjaro-kde"
                        tags={['Linux', 'Manjaro', 'Arch Linux']}
                        image={<Img fixed={data.manjaro.childImageSharp.fixed} alt="portfolio"/>}
                    />
                </div>
            </div>
        </section>
    </Layout>
);

projects.propTypes = {
    data: PropTypes.object.isRequired
};

export default projects;