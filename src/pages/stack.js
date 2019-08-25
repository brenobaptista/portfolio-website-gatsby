import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"
import Helmet from 'react-helmet'

const stack = () => (
    <Layout>
        <SEO title="Stack" />
        <Helmet>
            <script 
                async 
                src="https://cdn1.stackshare.io/javascripts/client-code.js" 
                charset="utf-8">
            </script>
        </Helmet>
        <section className="section is-size-4-desktop is-size-5-touch">
            <h1 className="title has-text-centered">Stack</h1>
            <hr />
            <div className="columns is-centered has-text-centered">
                <div className="column">
                    <a
                        frameborder="0" 
                        data-theme="light" 
                        data-layers="1,2,3,4" 
                        data-stack-embed="true" 
                        href="https://embed.stackshare.io/stacks/embed/47bea8027a70794016085b135b1ac9">
                        StackShare
                    </a>
                </div>
            </div>
        </section>
    </Layout>
);

export default stack;