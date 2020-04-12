import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
      <FooterContainer className="main-footer">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h4><a href="/">Home</a></h4>
              </div>
              <div className="col-md-3 col-sm-6">
                <h4><a href="/terms">Terms</a></h4>
              </div>
              <div className="col-md-3 col-sm-6">
                <h4><a href="/contacts">Contact Us</a></h4>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="text-xs-centar"></p>
              &copy;{new Date().getFullYear()} Rent-a-Car NS - All rights reserved
            </div>
          </div>
        </div>
      </FooterContainer>
    );
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}
.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}
ul li a {
    color: var(--mainGrey);
}
ul li a:hover {
    color: var(--mainLightGrey);
}
    
}`