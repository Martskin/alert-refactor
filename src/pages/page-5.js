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
          message="CSS is more portable and can be distrubuted independently."
          type="success"
        />

        <AlertEmotion
          heading="More code"
          message="Components with complex styles can become bloated with CSS."
          type="error"
        />
      </div>
      <div>
        <h2>CSS-in-JS</h2>
        <AlertEmotion
          heading="Namespacing"
          message="No fear of style collisions with random class names prefixes."
          type="success"
        />

        <AlertEmotion
          heading="Steamlined"
          message="The compiled CSS only includes the necessary declartions."
          type="success"
        />

        <AlertEmotion
          heading="Limiting"
          message="What happens if you want to change the language used in your code base?"
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
