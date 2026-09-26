
import { PageHeader } from "../components/Atoms/Title"
import PropTypes from 'prop-types'
import React from "react"
import TeamPageRoot from './template'
import { graphql } from "gatsby"
// import breakpoints from "../styles/breakpoints"
import styled from "@emotion/styled"
import PageMeta from "components/Molecules/PageMeta"
import contributors from "data/contributors"
import Contributor from "components/Molecules/Contributor"
import {  FlexColCenter, FlexRowCenter, VSpacerBig } from "styles/common"
import heart from "images/heart.png"
import icons from "data/icons"
import links from "data/links"
import ClickableIcon from "components/Atoms/ClickableIcon"

const ContributorsMesh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.5rem;
  flex-wrap: wrap;
  max-width:900px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
`

const Heart = styled.img`
  z-index: 5;
  height: 150px;
`

const ContributorSection = styled(FlexColCenter)`
  padding: 1rem;
`

export default function Team({data}) {
  return (
    <div>
      <PageMeta
        title="About Tokel - Create NFTs & Tokens Easily"
        description="Tokel is an open-source, dedicated, token & NFT creation platform with no gas fees and no complicated smart contracts."
      />
      <TeamPageRoot>
        <PageHeader>Tokel Contributors</PageHeader>
        <ContributorsMesh>
          {contributors.map(person => 
            <Contributor key={person.name} name={person.name} imageCircle={data[person.image].childImageSharp.gatsbyImageData} position={person.position} socials={person.socials}/>
          )}
        </ContributorsMesh>
        <ContributorSection>
          <h3 style={{marginBottom: '4px'}}>Want to become a contributor?</h3>
          <h5 style={{marginTop: 0, fontWeight: 400, color: 'var(--color-base-slate)'}}>Everyone is welcome to contribute to Tokel Platform.</h5>
          <Heart src={heart}></Heart>
          <p style={{maxWidth: '600px', lineHeight: '26px'}}>Check out issues in our <a href={links.github}>Github</a> and reach out in case you want to work on any of them. We are always on lookout for people to help us test the dapp and find or fix smaller bugs.</p>
          {/* <h4>Join The Tokel Platform Discord!</h4> */}
          <FlexRowCenter>
            <ClickableIcon width="35px" link={links.discord} icon={icons.discord} />
            <ClickableIcon width="35px" link={links.github} icon={icons.github} />
          </FlexRowCenter>
        </ContributorSection>
        <VSpacerBig />
        <VSpacerBig />
        <VSpacerBig />
      </TeamPageRoot>
    </div>
  )
}

export const query = graphql`
  query {
    acnebs: file(relativePath: { eq: "team/acnebs.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    }     
    ahmedDhaif: file(relativePath: { eq: "team/ahmed.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    }
    alright: file(relativePath: { eq: "team/alright-image.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    }
    cascrypto: file(relativePath: { eq: "team/cascrypto.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    }
    blue: file(relativePath: { eq: "team/blue.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    }
    daria: file(relativePath: { eq: "team/daria.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    }
    dimxy: file(relativePath: { eq: "team/dimxy.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    } 
    dreamTim: file(relativePath: { eq: "team/dreamTim.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    }  
    ejuliano: file(relativePath: { eq: "team/ejuliano.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    } 
    gingerDesign: file(relativePath: { eq: "team/gingerDesign.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    }  
    gray: file(relativePath: { eq: "team/gray.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    } 
    kelcie: file(relativePath: { eq: "team/kelcie.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    } 
    lenilsonjr: file(relativePath: { eq: "team/lenilsonjr.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    } 
    nutella: file(relativePath: { eq: "team/nutella.png" }) {
      childImageSharp {
        gatsbyImageData(height: 80, layout: FIXED, formats: [AUTO, WEBP])
      }
    }                             
  }
`

Team.propTypes = {
    data: PropTypes.any
  }