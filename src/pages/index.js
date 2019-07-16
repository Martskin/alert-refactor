import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"

const IndexPage = () => (
  <Layout>
    <div
      css={css({
        padding: '150px 0',
      })}
    >
      <h1>
        Refactoring an alert component from CSS to CSS-in-JS
      </h1>
      <h2>Martin Hofmann</h2>
    </div>
    <nav>
      <div />
      <Link to="/page-2/">Next Page</Link>
    </nav>
  </Layout>
)

export default IndexPage
