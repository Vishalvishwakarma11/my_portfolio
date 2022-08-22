import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Vishal Vishwakarma</h1>
          <PText>
            A freelance web designer and developer from Mumbai, Maharashtra.I
            always make websites that have unique designs and also has a good
            performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 9892909741',
                path: 'tel:+919892909741',
              },
              {
                title: 'vishal.vish6232@gmail.com',
                path: 'mailto:vishal.vish6232@gmail.com',
              },
              {
                title: 'Kandivali (E), Mumbai, Maharashtra',
                path: 'https://goo.gl/maps/wRsefC2Q5gFvLSsk8',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: `https://www.linkedin.com/in/vishal-vishwakarma-472365215/`,
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/vish_karma_11',
              },
              {
                title: 'Github',
                path: 'https://github.com/Vishalvishwakarma11',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 - Vishal Vishwakarma | Designed By{' '}
            <a target="_blank" rel="noreferrer" href=" ">
              TechVish
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
