import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

const Navbar = () => {
  const { back, pathname } = useRouter();
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <button className="button is-text" onClick={() => back()}>
            <FaArrowLeft />
          </button>
        </div>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded={isActive ? "true" : "false"}
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link href="/">
            <a className={`navbar-item ${pathname === "/" ? "is-active" : ""}`}>
              Home
            </a>
          </Link>
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

export default ({ children }) => (
  <main>
    <Navbar />
    <section className="section">
      <div className="container">{children}</div>
    </section>
    <Footer />
    <style jsx>{`
      main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      section {
        flex: 1;
      }
    `}</style>
  </main>
);
