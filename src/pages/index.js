import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import CodeSnippet from "../components/codeSnippet"
import AlertEmotion from "../components/alertEmotion"
import AlertBEM from "../components/alertBEM"
import tokens from "../data/tokens"

const cssVars = `
  --alert-color-background-info: #3232FF;
  --alert-color-background-error: #DE2B2B;
  --alert-color-background-warning: #F2E800;
  --alert-color-background-success: #82B90D;
  --alert-color-text-info: #FFFFFF;
  --alert-color-text-error: #FFFFFF;
  --alert-color-text-warning: #000000;
  --alert-color-text-success: #FFFFFF;
  --alert-color-icon-info: "ⓘ";
  --alert-color-icon-error: "☠️";
  --alert-color-icon-warning: "⚠";
  --alert-color-icon-success: "🎉";
`;

const markupBem = `
  <div role="alert" class="alert alert--info">
    <div class="alert__grid">
      <div class="alert__cell--icon">
        <span class="alert__icon"></span>
      </div>
      <div>
        <div class="alert__heading">
          Information alert heading!
        </div>
        <div class="alert__message">
          This is an information message.
        </div>
      </div>
    </div>
  </div>
`;

const markupEmotion = `
  <div role="alert" class="css-1yg5x06-Alert">
    <div class="css-tyhk5z-Alert">
      <div class="css-fgpnb8-Alert">
        <span class="css-sjizp6-Alert"></span>
      </div>
      <div>
        <div class="css-2gy4mc-Alert">
          Information alert heading!
        </div>
        <div class="css-1sm67l8-Alert">
          This is an information message.
        </div>
      </div>
    </div>
  </div>
`;

const IndexPage = () => (
  <Layout>
    <h1
      css={css({
        margin: '0 auto',
        maxWidth: '800px',
      })}
    >
      Component style refactor: from CSS to CSS-in-JS
    </h1>
    <div className="grid">
      <div>
        <h2>CSS using BEM</h2>
        <AlertBEM heading="Information alert heading!" message="This is an information message." />
        <AlertBEM heading="Warning alert heading!" message="This is a warning message." type="warning" />
        <AlertBEM heading="Error alert heading!" message="This is an error message." type="error" />
        <AlertBEM heading="Success alert heading!" message="This is a success message." type="success" />
      </div>
      <div>
        <h2>CSS-in-JS using Emotion JS</h2>
        <AlertEmotion heading="Information alert heading!" message="This is an information message." />
        <AlertEmotion heading="Warning alert heading!" message="This is a warning message." type="warning" />
        <AlertEmotion heading="Error alert heading!" message="This is an error message." type="error" />
        <AlertEmotion heading="Success alert heading!" message="This is a success message." type="success" />
      </div>
    </div>
    <div className="grid">
      <div>
        <h2>Design Token CSS Variables</h2>
        <CodeSnippet code={cssVars} language="css" />
      </div>
      <div>
        <h2>Design Token Object</h2>
        <CodeSnippet code={JSON.stringify(tokens.alert, null, 2)} language="json" />
      </div>
    </div>

    <div className="grid">
      <div>
        <h2>BEM Markup</h2>
        <CodeSnippet code={markupBem} language="html" />
      </div>
      <div>
        <h2>Emotion Markup</h2>
        <CodeSnippet code={markupEmotion} language="html" />
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
