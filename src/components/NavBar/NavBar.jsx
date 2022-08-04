import styled from "styled-components";
import { useState } from "react";

// import { AiOutlineUser } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo href="/">
        My<span>P</span>ortfolio
      </Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu open={open} className="menu">
        <MenuLink href="/about">About</MenuLink>
        <MenuLink href="/projects">Projects</MenuLink>
        <MenuLink href="/skills">Skills</MenuLink>
        <MenuLink href="/contact">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default NavBar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ececec;
  transition: all 0.3s ease-in;
  font-size: 1.1rem;

  &:hover {
    color: #1f45fc;
    font-size: 2rem;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  background: linear-gradient(39.97deg, #03d6f3 0.79%, #458ff6 79.29%);
  height: 100px;

  /* position: absolute; */

  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #ececec;
  text-decoration: none;
  font-weight: 300;
  font-size: 1.8rem;
  display: flex;
  padding: 40px;
  align-items: center;

  span {
    font-weight: 800;
    font-size: 2.5rem;
    flex-grow: 1;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: #ececec;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 780px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 780px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    z-index: 20;
  }
`;
