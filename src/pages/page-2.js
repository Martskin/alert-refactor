import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import CodeSnippet from "../components/codeSnippet"
import AlertBEM from "../components/alertBEM"

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

const jsx = `
  <Alert
    heading="Warning alert heading!"
    message="This is a warning message."
    type="warning"
  />
`;

const PageTwo = () => (
  <Layout>
    <h1>
      CSS with BEM class names
    </h1>
    <h2>(Block Element Modifier)</h2>
    
    <div className="grid">
      <div>
        <div className="sticky">
          <h2>Alert variations</h2>
          <AlertBEM heading="Information alert heading!" message="This is an information message." />
          <AlertBEM heading="Error alert heading!" message="This is an error message." type="error" />
          <AlertBEM heading="Warning alert heading!" message="This is a warning message." type="warning" />
          <AlertBEM heading="Success alert heading!" message="This is a success message." type="success" />
        </div>
      </div>
      <div>
        <h2>Design token CSS variables</h2>
        <CodeSnippet code={cssVars} language="css" />

        <h2>CSS style sheet</h2>
        <CodeSnippet code={styleBem} language="css" />

        <h2>JSX</h2>
        <CodeSnippet code={jsx} language="jsx" />

        <h2>Conditional modifier class name</h2>
        <CodeSnippet code="className={classnames('alert', `alert--${type}`)}" language="jsx" />

        <h2>Markup with BEM class names</h2>
        <CodeSnippet code={markupBem} language="html" />
      </div>
    </div>

    <nav>
      <Link to="/">Back</Link>
      <Link to="/page-3/">Next</Link>
    </nav>
  </Layout>
)

export default PageTwo
