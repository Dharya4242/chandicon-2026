/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "@/styles/components/header.module.scss";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAssetName } from "@/util/githubPagesImagesUtil";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("/");

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    const router = useRouter();

    useEffect(() => {
        setActive(router.pathname);
    }, [router.pathname]);

    return (
        <header className={styles.header}>
            <div className={styles.logo_wrapper}>
                <div className={styles.logo_container}>
                    <img
                        src={getAssetName(
                            // "/assets/logos/1.png"
                            "/assets/logos/logo_chandicon1.png"
                        )}
                        alt="chandicon 2026"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/2.png")}
                        alt="chandicon 2026"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/4.png")}
                        alt="chandicon 2026"
                        className={styles.logo}
                    />
                    <img
                        src={getAssetName("/assets/logos/5.png")}
                        alt="chandicon 2026"
                        className={styles.logo}
                    />
                </div>
            </div>

            <nav className={styles.navbar}>
                <div className={styles.list_items_wrapper}>
                    {!menuOpen ? (
                        <Hamburger
                            menuOpen={menuOpen}
                            toggleMenu={toggleMenu}
                        />
                    ) : null}
                    <div
                        className={`${menuOpen ? styles.active : ""} ${
                            styles.menu_modal
                        }`}
                    >
                        {menuOpen ? (
                            <Hamburger
                                menuOpen={menuOpen}
                                toggleMenu={toggleMenu}
                            />
                        ) : null}

                        <ul
                            className={`${styles.nav_items} ${
                                menuOpen ? styles.active : ""
                            }`}
                            role="presentation"
                        >
                            {headerItems.map((headerItem, i) => {
                                const isActive = active === headerItem.href;
                                return (
                                    <li onClick={toggleMenu} key={i}>
                                        <Link
                                            href={headerItem.href}
                                            aria-label={headerItem.name}
                                            className={`${styles.nav_link} ${
                                                isActive
                                                    ? styles.active_nav_link
                                                    : ""
                                            }`}
                                        >
                                            {headerItem.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

const headerItems = [
    {
        href: "/",
        name: "Home",
    },
    {
        href: "/about",
        name: "About",
    },
    {
        href: "/important-dates",
        name: "Important Dates",
    },
    {
        href: "/committees",
        name: "Committees",
    },
    {
        href: "/call-for-papers",
        name: "Call for Papers",
    },
    {
        href: "/call-for-sessions-tutorials",
        name: "Call for Special Sessions/Tutorials",
    },
    {
        href: "/registration",
        name: "Registration",
    },
    {
        href: "/authors",
        name: "Authors",
    },
    {
        href: "/sponsorship",
        name: "Sponsorship",
    },
    {
        href: "/speakers",
        name: "Speakers",
    },
    {
        href: "/venue",
        name: "Venue/Travel",
    },
    {
        href: "/fellowship",
        name: "Awards/Grants",
    },
    {
        href: "/contact",
        name: "Contact",
    },
];

export default Header;
