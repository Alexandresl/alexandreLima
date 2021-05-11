import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled'

const Banner = () => {

  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "img-banner.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 6000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  // Set ImageData.
  const imageData = data.file.childImageSharp.fluid

  return (
    <S.BannerBackground>
      <S.Image Tag="section" fluid={imageData} />
    </S.BannerBackground>
  );

}

export default Banner;