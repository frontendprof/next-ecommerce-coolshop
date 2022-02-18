import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
    <>
      <div className="bar">
        <Link href="/">
          <a>coolShop</a>
        </Link>
      </div>
      <Nav />
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </>
  );
};

export default Header;
