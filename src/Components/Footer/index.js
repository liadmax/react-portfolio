import React from 'react';
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer className='Footer'>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>let's connect!</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/fffffffffffvvcxgdfh/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/liad-shapira-887b62230/' target='_blank' aria-label='Linkedin'>
                <AiFillGithub />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/liad-shapira-887b62230/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;