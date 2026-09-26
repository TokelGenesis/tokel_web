import * as React from "react"

import Footer from "components/Organisms/Footer"
import Stars from "components/Atoms/Stars"
import TopBar from "components/Organisms/TopBar"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from 'prop-types'

const PageRoot = styled.div`
  background: var(--gradient-deep-sky);
`

const PageRootContainer = ({children})  => {
  return (
      <div>
        <PageRoot>
            <TopBar />
            <Stars starSize={'small'} />
            <Stars starSize={'medium'}/>
            <Stars starSize={'big'}/>
            {children}
        </PageRoot>
         <Footer />
      </div>
  )
}

export const query = graphql`
  query {
    dash: file(relativePath: { eq: "dashboard.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, width: 900, layout: CONSTRAINED, formats: [AUTO, WEBP])
      }
    }
  }
`
PageRootContainer.propTypes = {
    children: PropTypes.node,
    starsTop: PropTypes.string
}
export default PageRootContainer
