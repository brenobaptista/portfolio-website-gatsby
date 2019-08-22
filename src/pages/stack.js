import React from 'react';
import Layout from '../components/layout'
import SEO from "../components/seo"

const stack = () => (
    <Layout>
        <SEO title="Stack" />
        <section className="section is-size-4-desktop is-size-5-touch">
            <h1 className="title has-text-centered">Stack</h1>
            <hr />
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    STACKSHARE
                </div>
            </div>
        </section>
    </Layout>
);

export default stack;