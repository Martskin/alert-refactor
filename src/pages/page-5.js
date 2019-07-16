import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import AlertEmotion from "../components/alertEmotion"
import AlertBEM from "../components/alertBEM"

const PageFive = () => (
  <Layout>
    <h1>
      Closing thoughts
    </h1>

    <div className="grid">
      <div>
        <h2>CSS</h2>
        <AlertBEM
          heading="Code clarity"
          message="BEM is easy to read and easy to understand."
          type="success"
        />

        <AlertBEM
          heading="Framework agnostic"
          message="CSS can be distributed independently."
          type="success"
        />

        <AlertBEM
          heading="More code"
          message="Components with complex styles can become bloated."
          type="error"
        />
      </div>
      <div>
        <h2>CSS-in-JS</h2>
        <AlertEmotion
          heading="Namespaced styles"
          message="Class name prefixing eliminates risk of collisions."
          type="success"
        />

        <AlertEmotion
          heading="Reduced file size"
          message="The compiled CSS only includes the necessary declartions."
          type="success"
        />

        <AlertEmotion
          heading="Limited distribution"
          message="Styling can’t be easily shared with other projects."
          type="error"
        />
      </div>
    </div>

    <nav>
      <Link to="/page-4/">Back</Link>
      <div />
    </nav>
  </Layout>
)

export default PageFive
