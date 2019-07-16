import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CodeSnippet from "../components/codeSnippet"
import AlertEmotion from "../components/alertEmotion"
import tokens from "../data/tokens"

const markupEmotion = `
  <div role="alert" class="css-1itqnal-Alert">
    <div class="css-tyhk5z-Alert">
      <div class="css-fgpnb8-Alert">
        <span class="css-89yjzw-Alert"></span>
      </div>
      <div>
        <div class="css-2gy4mc-Alert">
          Warning alert heading!
        </div>
        <div class="css-1sm67l8-Alert">
          This is a warning message.
        </div>
      </div>
    </div>
  </div>
`;

const styleEmotion = `
  // base
  css={css({
    background: tokens.alert.color.background[type],
    borderRadius: 3,
    boxShadow: "0 0px 8px #251f1f",
    color: tokens.alert.color.text[type],
    fontFamily: "'Roboto', sans-serif",
    maxWidth: 500,
    padding: 16,
    textAlign: 'left',
  })}

  // icon
  css={css({
    display: 'inline-block',
    fontSize: 56,
    height: 56,
    lineHeight: 1,
    width: 56,
    '::before': {
      display: 'block',
      content: 'tokens.alert.icon[type]',
    }
  })}
`;

const jsx = `
  <Alert
    heading="Warning alert heading!"
    message="This is a warning message."
    type="warning"
  />
`;

const PageThree = () => (
  <Layout>
    <h1>
      CSS-in-JS with Emotion.js
    </h1>
    
    <div className="grid">
      <div>
        <div className="sticky">
          <h2>Alert variations</h2>
          <AlertEmotion heading="Information alert heading!" message="This is an information message." />
          <AlertEmotion heading="Warning alert heading!" message="This is a warning message." type="warning" />
          <AlertEmotion heading="Error alert heading!" message="This is an error message." type="error" />
          <AlertEmotion heading="Success alert heading!" message="This is a success message." type="success" />
        </div>
      </div>
      <div>
        <h2>Design token JSON object</h2>
        <CodeSnippet code={JSON.stringify(tokens.alert, null, 2)} language="json" />

        <h2>Emotion styles</h2>
        <CodeSnippet code={styleEmotion} language="js" />

        <h2>JSX</h2>
        <CodeSnippet code={jsx} language="jsx" />

        <h2>Markup with Emotion.js class names</h2>
        <CodeSnippet code={markupEmotion} language="html" />
      </div>
    </div>

    <nav>
      <Link to="/page-2/">Back</Link>
      <Link to="/page-4/">Next</Link>
    </nav>
  </Layout>
)

export default PageThree
