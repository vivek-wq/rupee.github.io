import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  background: #000;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232a34;
  opacity: 0.5;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
export const HeroP = styled.p`
  color: #fff;
  font-size: 1.2rem;
  margin: 2rem 0;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    width: 100%;
  }
`;

export const HeroButton = styled.div`
  margin-top: 10px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
