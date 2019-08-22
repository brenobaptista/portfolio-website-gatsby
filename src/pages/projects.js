import React from "react"
import Layout from '../components/layout'
import SEO from "../components/seo"
import Card from '../components/card'
import PropTypes from 'prop-types';
import {  graphql } from "gatsby"
import Img from 'gatsby-image'

import portfolio from "../images/portfolio.png"
import jardimcaipira from '../images/jardimcaipira.png'
import nimbalo from '../images/nimbalo.png'
import acens from '../images/acens.png'
import su from '../images/su.png'

export const queryImage = graphql`
    query {
        portfolio: file(relativePath: { eq: "portfolio.png" }) {
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
        <h1 className="title has-text-centered">Projects as a developer</h1>
        <hr />
        <section className="section is-size-4-desktop is-size-5-touch">
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <Card 
                        title="Portfolio Website"
                        subtitle="It's my personal portfolio website"
                        link=""
                        tags={['React', 'Gatsby', 'Bulma', 'GraphQL']}
                        image={<Img fixed={data.portfolio.childImageSharp.fixed} />}
                    />
                    <a href="">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src={portfolio} alt="portfolio" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <h4 className="title is-size-5-desktop is-size-6-touch">Portfolio Website</h4>
                                        <p className="subtitle is-size-5-desktop is-size-6-touch">It's my personal portfolio website</p>
                                        <div className="tags">
                                            <span className="tag">React</span>
                                            <span className="tag">Gatsby</span>
                                            <span className="tag">Bulma</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </a>
                    <a href="https://jardimcaipira.netlify.com">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src={jardimcaipira} alt="portfolio" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <h4 className="title is-size-5-desktop is-size-6-touch">Jardim Caipira</h4>
                                        <p className="subtitle is-size-5-desktop is-size-6-touch">It's my first website ever made</p>
                                        <div className="tags">
                                            <span className="tag">HTML</span>
                                            <span className="tag">CSS</span>
                                            <span className="tag">Bootstrap</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </a>
                    <a href="https://nimbalo.herokuapp.com/users/sign_in">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src={nimbalo} alt="portfolio" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <h4 className="title is-size-5-desktop is-size-6-touch">Nimbalo</h4>
                                        <p className="subtitle is-size-5-desktop is-size-6-touch">Simple shopping system</p>
                                        <div className="tags">
                                            <span className="tag">HTML</span>
                                            <span className="tag">CSS</span>
                                            <span className="tag">Bootstrap</span>
                                            <span className="tag">Ruby on Rails</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </a>
                    <a href="http://acensjr.mypressonline.com">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src={acens} alt="portfolio" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <h4 className="title is-size-5-desktop is-size-6-touch">Acens Jr.</h4>
                                        <p className="subtitle is-size-5-desktop is-size-6-touch">WordPress training</p>
                                        <div className="tags">
                                            <span className="tag">WordPress</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </a>
                    <a href="https://semanauniversitaria2019.uece.br">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src={su} alt="portfolio" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <h4 className="title is-size-5-desktop is-size-6-touch">Semana Universitária</h4>
                                        <p className="subtitle is-size-5-desktop is-size-6-touch">My first real client project</p>
                                        <div className="tags">
                                            <span className="tag">HTML</span>
                                            <span className="tag">CSS</span>
                                            <span className="tag">Bootstrap</span>
                                            <span className="tag">JavaScript</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </a>
                </div>
            </div>
        </section>
        <h1 className="title has-text-centered">Projects as a project manager</h1>
        <hr />
        <section className="section is-size-4-desktop is-size-5-touch">
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <a href="">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src={portfolio} alt="portfolio" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <h4 className="title is-size-5-desktop is-size-6-touch">ANMAP</h4>
                                        <p className="subtitle is-size-5-desktop is-size-6-touch">It's my personal portfolio website</p>
                                        <div className="tags">
                                            <span className="tag">React</span>
                                            <span className="tag">Gatsby</span>
                                            <span className="tag">Bulma</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </a>
                    <a href="">
                        <div className="card">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src={portfolio} alt="portfolio" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <h4 className="title is-size-5-desktop is-size-6-touch">Acens Jr.</h4>
                                        <p className="subtitle is-size-5-desktop is-size-6-touch">It's my personal portfolio website</p>
                                        <div className="tags">
                                            <span className="tag">React</span>
                                            <span className="tag">Gatsby</span>
                                            <span className="tag">Bulma</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </a>
                </div>
            </div>
        </section>
    </Layout>
);

projects.propTypes = {
    data: PropTypes.object.isRequired
};

export default projects;