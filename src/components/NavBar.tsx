import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" alt="logo" width={100} height={25} priority />
      </div>
      <div className="links">
        <Link href="/" style={{ textDecoration: "none" }}>
          <span className={router.pathname === "/" ? "active" : ""}>Home</span>
        </Link>
        <Link href="/about" style={{ textDecoration: "none" }}>
          <span className={router.pathname === "/about" ? "active" : ""}>
            About
          </span>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        .logo {
          max-width: 100px;
          margin-bottom: 5px;
        }
        span {
          font-weight: 600;
          font-size: 18px;
        }
        .links {
          display: flex;
          gap: 10px;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
