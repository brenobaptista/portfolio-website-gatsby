import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import Card from '../components/card'
import PropTypes from 'prop-types';
import {  graphql } from "gatsby"
import Img from 'gatsby-image'

export const queryImage = graphql`
    query {
        curriculumvitae: file(relativePath: { eq: "curriculumvitae.png" }) {
            childImageSharp {
                fixed(width: 96, height: 96) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        ebookaguia: file(relativePath: { eq: "ebookaguia.png" }) {
            childImageSharp {
                fixed(width: 96, height: 96) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        medals: file(relativePath: { eq: "medals.png" }) {
            childImageSharp {
                fixed(width: 96, height: 96) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        certificates: file(relativePath: { eq: "certificates.png" }) {
            childImageSharp {
                fixed(width: 96, height: 96) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        certificates2: file(relativePath: { eq: "certificates2.png" }) {
            childImageSharp {
                fixed(width: 96, height: 96) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

const downloads = ({ data }) => (
    <Layout>
        <SEO title="Downloads" />
        <section className="section is-size-4-desktop is-size-5-touch">
            <h1 className="title has-text-centered has-text-light">Downloads</h1>
            <hr />
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <Card 
                        title="Curriculum Vitae (in Portuguese)"
                        subtitle="My latest curriculum vitae"
                        link="https://drive.google.com/file/d/1-bGOhiTphjqd_Lmm7jC2mNvDoInBg8GD/view?usp=sharing"
                        tags={['Curriculum Vitae']}
                        image={<Img fixed={data.curriculumvitae.childImageSharp.fixed} alt="curriculum vitae"/>}
                    />
                    <Card 
                        title="Free Ebook (in Portuguese)"
                        subtitle="The Eagle Negotiator's Guide - Coauthor: Angeliano Sousa"
                        link="https://drive.google.com/open?id=1EyaNsn_rpdBki7S5lalSI9l73u-QUKBb"
                        tags={['Ebook', 'Angeliano Sousa']}
                        image={<Img fixed={data.ebookaguia.childImageSharp.fixed} alt="free ebook"/>}
                    />
                    <Card 
                        title="Certificates"
                        subtitle="College Certificates"
                        link="https://drive.google.com/open?id=17bfdvAJm00vJgqQwRiNsJ0zyRgLIGz0v"
                        tags={['Certificates']}
                        image={<Img fixed={data.certificates2.childImageSharp.fixed} alt="free ebook"/>}
                    />
                    <Card 
                        title="Medals"
                        subtitle="Science Olympiads Medals"
                        link="https://drive.google.com/open?id=1MvF6eOMCpa7Xs1-Jk2g6WwEycGwC3YN-"
                        tags={['Medals', 'Science Olympiads']}
                        image={<Img fixed={data.medals.childImageSharp.fixed} alt="medals"/>}
                    />
                    <Card 
                        title="High School Certificates"
                        subtitle="Science Olympiads Certificates"
                        link="https://drive.google.com/open?id=1AEKeTtAQSQzmZx1_TlNAbKO22yAipaml"
                        tags={['Certificates', 'Science Olympiads']}
                        image={<Img fixed={data.certificates.childImageSharp.fixed} alt="certificates"/>}
                    />
                </div>
            </div>
        </section>
    </Layout>
);

downloads.propTypes = {
    data: PropTypes.object.isRequired
};

export default downloads;