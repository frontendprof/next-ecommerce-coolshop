import Link from 'next/link';
import Nav from './Nav';

import styled from 'styled-components';

const LogoWrapper = styled.h1`
  background: orangered;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  color: white;
  width: 90%;
  transform: skew(-8deg);
  padding: 0.5rem 1rem;
`;

const HeaderWrapper = styled.header`
  .bar {
    border-bottom: 5px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }

  .sub-bar {
    border-bottom: 2px solid var(--black, black);
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="bar">
        <LogoWrapper>
          <Link href="/">
            <a>coolShop</a>
          </Link>
        </LogoWrapper>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderWrapper>
  );
};

export default Header;
