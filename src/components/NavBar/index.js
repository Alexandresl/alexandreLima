import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled'


const Navbar = () => {

  const nav = document.querySelector('.navbar');
  useEffect(() => {
    document.addEventListener('scroll' , handleScroll);
  })
  
  const handleScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add('sticky');
    } 
    // if (window.scrollY < 20 && !!nav.classList.contains('sticky')) {
    //   nav.classList.remove('sticky');
    // }
  }

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
    <S.Navbar className="navbar">
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