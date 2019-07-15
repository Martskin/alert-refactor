/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import tokens from "../data/tokens"
import { css } from "@emotion/core"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
            heading
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteSubTitle={data.site.siteMetadata.subtitle}
          siteHeading={data.site.siteMetadata.heading}
        />
        <div
          css={css({
            backgroundColor: tokens.color.background.dark,
            color: tokens.color.text.onDark.default,
            fontFamily: tokens.font.family.sansSerif,
            padding: 0,
            margin: 0,
            main: {
              margin: `0 auto ${tokens.space.lg}px`,
              padding: `${tokens.space.lg}px ${tokens.space.md}px`,
              maxWidth: tokens.layout.breakpoint.md,
              textAlign: 'center',
            },
            h1: {
              fontSize: tokens.font.size.xxl,
              lineHeight: 1.1,
              margin: `0 auto ${tokens.space.md}px`,
            },
            h2: {
              fontSize: tokens.font.size.xl,
              lineHeight: 1.1,
              margin: `0 auto ${tokens.space.md}px`,
            },
            a: {
              color: tokens.color.text.interactive.default,
              fontSize: tokens.font.size.lg,
              textDecoration: 'none',
              ':hover': {
                textDecoration: 'underline',
              }
            },
            '.grid': {
              display: 'flex',
              margin: `0 -${tokens.space.xs}px`,
              '> div': {
                padding: `0 ${tokens.space.xs}px`,
                width: `calc(50% - ${tokens.space.sm}px)`,
              } 
            }
          })}
        >
          <main>{children}</main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
