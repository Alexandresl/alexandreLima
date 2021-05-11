import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled'

const Navbar = () => {

  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <S.Navbar>
      <S.ContentNav >
        <S.Logo>
          <a href="/">
            <S.AvatarImg fixed={avatarImage.childImageSharp.fixed} />
            Alexandre Lima
          </a>
        </S.Logo>
        <S.MenuList>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Blog</a></li>
        </S.MenuList>
      </S.ContentNav>
    </S.Navbar>
  );
}

export default Navbar;