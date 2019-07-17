import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CodeSnippet from "../components/codeSnippet"
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
  --tokens-alert-icon-info: "ⓘ";
  --tokens-alert-icon-error: "☠️";
  --tokens-alert-icon-warning: "⚠";
  --tokens-alert-icon-success: "🎉";
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

  /* modifiers */
  .alert--error {
    background: var(--tokens-alert-color-background-error);
    color: var(--tokens-alert-color-text-error);
  }
  
  .alert--warning {
    background: var(--tokens-alert-color-background-warning);
    color: var(--tokens-alert-color-text-warning);
  }
  
  .alert--success {
    background: var(--tokens-alert-color-background-success);
    color: var(--tokens-alert-color-text-success);
  }

  /* icon */
  .alert__icon {
    display: inline-block;
    font-size: 56px;
    height: 56px;
    line-height: 1;
    width: 56px;
  }

  .alert__icon::before {
    display: block;
    content: var(--tokens-alert-icon-info);
  }

  /* icon modifiers */
  .alert--warning .alert__icon::before {
    content: var(--tokens-alert-icon-warning);
  }
  
  .alert--error .alert__icon::before {
    content: var(--tokens-alert-icon-error);
  }
  
  .alert--success .alert__icon::before {
    content: var(--tokens-alert-icon-success);
  }
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

const PageFour = () => (
  <Layout>
    <h1>
      Side-by-side comparison
    </h1>

    <div className="grid">
      <div>
        <h2>CSS with BEM class names</h2>
        <h3>Design token CSS variables</h3>
        <CodeSnippet code={cssVars} language="css" />
      </div>
      <div>
        <h2>CSS-in-JS with Emotion.js</h2>
        <h3>Design token JSON object</h3>
        <CodeSnippet code={JSON.stringify(tokens.alert, null, 2)} language="json" />
      </div>
    </div>

    <div className="grid">
      <div>
        <h3>CSS style sheet</h3>
        <CodeSnippet code={styleBem} language="css" />
      </div>
      <div>
        <h3>Emotion styles</h3>
        <CodeSnippet code={styleEmotion} language="js" />
      </div>
    </div>

    <div className="grid">
      <div>
        <h3>JSX</h3>
        <CodeSnippet code={jsx} language="jsx" />
      </div>
      <div>
        <h3>JSX</h3>
        <CodeSnippet code={jsx} language="jsx" />
      </div>
    </div>

    <div className="grid">
      <div>
        <h3>Conditional modifier class name</h3>
        <CodeSnippet code="className={classnames('alert', `alert--${type}`)}" language="jsx" />

        <h3>Markup with BEM class names</h3>
        <CodeSnippet code={markupBem} language="html" />
      </div>
      <div>
        <h3>Markup with Emotion.js class names</h3>
        <CodeSnippet code={markupEmotion} language="html" />
      </div>
    </div>

    <nav>
      <Link to="/page-3/">Back</Link>
      <Link to="/page-5/">Next</Link>
    </nav>
  </Layout>
)

export default PageFour
