import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

const NavbarBurger = ({ onClick }) => {
  return (
    <button className="navbar-burger" onClick={onClick}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  );
};

const NavBackButton = () => {
  const { back } = useRouter();
  return (
    <div className="navbar-item">
      <button className="button is-text" onClick={() => back()}>
        <FaArrowLeft />
      </button>
    </div>
  );
};

const NavPageLink = ({ href, label }) => {
  const { pathname } = useRouter();

  return (
    <Link href={href}>
      <a className={`navbar-item ${pathname === href ? "is-active" : ""}`}>
        {label}
      </a>
    </Link>
  );
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar has-shadow">
      <div className="navbar-brand">
        <NavBackButton />
        <NavbarBurger onClick={() => setIsActive(!isActive)} />
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <NavPageLink href="/" label="Home" />
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      Data sourced from{" "}
      <a
        href="https://github.com/lucasbento/graphql-pokemon"
        target="_blank"
        rel="noopener noreferrer"
      >
        Demonstration Pokemon GraphQL API.
      </a>
    </footer>
  );
};

export default ({ children }) => {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
      <Footer />
      <style jsx>{`
        main {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        div {
          flex: 1;
        }
      `}</style>
    </main>
  );
};
