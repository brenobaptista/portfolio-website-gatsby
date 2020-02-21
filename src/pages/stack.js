import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"

const stack = () => (
  <Layout>
    <SEO title="Stack" />
    <Helmet>
      <script
        async
        src="https://cdn1.stackshare.io/javascripts/client-code.js"
        charset="utf-8"
      ></script>
    </Helmet>
    <section className="hero custom-hero is-size-4-desktop is-size-5-touch">
      <div className="hero-body">
        <h1 className="title has-text-centered has-text-light">Stack</h1>
        <hr className="custom-hr" />
      </div>
    </section>
    <section className="section is-size-4-desktop is-size-5-touch">
      <div className="columns is-centered has-text-centered">
        <div className="column is-half">
          <a
            frameBorder="0"
            data-theme="light"
            data-layers="1,3,4"
            data-stack-embed="true"
            href="https://embed.stackshare.io/stacks/embed/47bea8027a70794016085b135b1ac9"
          >
            Loading...
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default stack
