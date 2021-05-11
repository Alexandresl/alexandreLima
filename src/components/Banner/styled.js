import styled from 'styled-components';
import BackgroundImage from "gatsby-background-image";

export const BannerBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 50vh;
  background: rgb(35, 53, 65);
  background: linear-gradient(180deg, rgba(35, 53, 65, 1) 0%, rgba(54, 75, 88, 1) 100%);
  border-radius: 0 0 100% 25%;
`

export const Image = styled(BackgroundImage)`
  height: 50vh;
  width: 100%;
  background-size: 30rem;
  background-position: 82% 15%;
  background-attachment: fixed;
`