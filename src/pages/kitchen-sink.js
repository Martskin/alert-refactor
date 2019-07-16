import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import CodeSnippet from "../components/codeSnippet"
import AlertEmotion from "../components/alertEmotion"
import AlertBEM from "../components/alertBEM"
import tokens from "../data/tokens"

const cssVars = `
  --tokens-alert-color-background-info: #3232FF;
  --tokens-alert-color-background-error: #DE2B2B;
  --tokens-alert-color-background-warning: #F2E800;
  --tokens-alert-color-background-success: #82B90D;
  --tokens-alert-color-text-info: #FFFFFF;
  --tokens-alert-color-text-error: #FFFFFF;
  --tokens-alert-color-text-warning: #000000;
  --tokens-alert-color-text-success: #FFFFFF;
  --tokens-alert-color-icon-info: "ⓘ";
  --tokens-alert-color-icon-error: "☠️";
  --tokens-alert-color-icon-warning: "⚠";
  --tokens-alert-color-icon-success: "🎉";
`;

const markupBem = `
  <div role="alert" class="alert alert--warning">
    <div class="alert__grid">
      <div class="alert__cell--icon">
        <span class="alert__icon"></span>
      </div>
      <div>
        <div class="alert__heading">
          Warning alert heading!
        </div>
        <div class="alert__message">
          This is an warning message.
        </div>
      </div>
    </div>
  </div>
`;

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

const styleBem = `
  /* base */
  .alert {
    background: var(--tokens-alert-color-background-info);
    border-radius: 3px;
    box-shadow: 0 0px 8px #251f1f;
    color: var(--tokens-alert-color-text-info);
    font-family: 'Roboto', sans-serif;
    margin: 0 auto 32px;
    max-width: 500px;
    padding: 16px;
    text-align: left;
  }

  /* modifier */
  .alert--warning {
    background: var(--tokens-alert-color-background-warning);
    color: var(--tokens-alert-color-text-warning);
  }

  /* icon */
  .alert__icon {
    display: inline-block;
    font-size: 56px;
    height: 56px;
    line-height: 1;
    width: 56px;
  }

  /* icon modifier */
  .alert--warning .alert__icon::before {
    content: var(--tokens-alert-color-icon-warning);
  }
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

    <div className="grid">
      <div>
        <h2>BEM Style Sheet</h2>
        <CodeSnippet code={styleBem} language="css" />
      </div>
      <div>
        <h2>Emotion Styles</h2>
        <CodeSnippet code={styleEmotion} language="javascript" />
      </div>
    </div>
    <Link to="/page-2/">Next</Link>
  </Layout>
)

export default IndexPage
