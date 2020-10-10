import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroButton,
  ArrowForward,
  ArrowRight,
} from "./HeroElement";
import { Button } from "../ButtonElement";
import Video from "../../../videos/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account ans recieve $250 in credit towards your next
          payment.
        </HeroP>
        <HeroButton>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary
            dark
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}{" "}
          </Button>
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
