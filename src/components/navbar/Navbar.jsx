"use client"
import Link from 'next/link'
import styles from "./navbar.module.css";
import React from 'react'

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/Blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];


const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/">lamamia </Link>
        <div>
            {links.map((link) => (
                <Link key={link.id} href={link.url}>
                    {link.title}
                </Link>
            ))}
            <button onClick={()=> {console.log("logged out")}}>Logout</button>
        </div>
    </div>
  );
};

export default Navbar