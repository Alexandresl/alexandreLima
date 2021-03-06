import styled from 'styled-components';
import Img from 'gatsby-image';

export const Navbar = styled.nav`
  position: fixed;
  z-index: 5;
  width: 100%;
  padding: 1.55rem 0;
  transition: all 0.3s ease;

  &.sticky {
    padding: 0.62rem 0;
    background-color: #fff;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);

    div img {
      width: 2rem;
    }

    a, div a {
      color: #374d59;
    }
  }
`

export const ContentNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 78.125rem;
  margin: auto;
  padding: 0 1.875rem;
`

export const Logo = styled.div`

  a {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 400;
    text-decoration: none;
    line-height: 2rem;
  }

  a:hover {
    color: #aba5ce;
  }
`

export const AvatarImg = styled(Img)`
  max-width: 3rem;
  max-height: 3rem;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 0.4rem;
  transition: all 0.3s ease;
`;

export const MenuList = styled.ul`
  display: inline-flex;

  li {
    list-style: none;

    a {
      color: #fff;
      font-size: 1.125rem;
      font-weight: 500;
      margin-left: 0.64rem;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    a:hover {
      color: #aba5ce;
    }

  }

  @media (max-width: 868px) {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    background: rgb(35, 53, 65);
    background: linear-gradient(180deg, rgba(35, 53, 65, 1) 0%, rgba(54, 75, 88, 1) 100%);
    width: 100%;
    max-width: 25rem;
    display: block;
    padding: 2.5rem 0;
    text-align: center;
    transition: all 0.3s ease;
    border-right: 1px solid #233541;
    box-shadow: 1px 1px 2px #233541;

    li {
      margin-top: 2.8rem;

      a {
        font-size: 1.4rem;
      }
    }
  }
`

export const icon = styled.div``