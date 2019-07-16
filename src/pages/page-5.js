import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import AlertEmotion from "../components/alertEmotion"

const PageFive = () => (
  <Layout>
    <h1>
      Closing thoughts
    </h1>

    <div className="grid">
      <div>
        <h2>CSS</h2>
        <AlertEmotion
          heading="Clarity"
          message="BEM is easy to read and easy to understand."
          type="success"
        />

        <AlertEmotion
          heading="Framework agnostic"
          message="CSS is portable and can be distributed independently."
          type="success"
        />

        <AlertEmotion
          heading="More code"
          message="Components with complex styles can become bloated."
          type="error"
        />
      </div>
      <div>
        <h2>CSS-in-JS</h2>
        <AlertEmotion
          heading="Namespacing"
          message="No risk of style collisions with random class names prefixes."
          type="success"
        />

        <AlertEmotion
          heading="Steamlined"
          message="The compiled CSS only includes the necessary declartions."
          type="success"
        />

        <AlertEmotion
          heading="Limiting"
          message="Styling can‘t be easily ported to other codebases."
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
