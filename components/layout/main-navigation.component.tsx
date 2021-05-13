import React from 'react';
import Logo from './logo.component';
import Link from 'next/link';

const MainNavigation = () => {
    return (
        <header>
            <Link href="/">
                <a>
                    <Logo></Logo>
                </a>
            </Link>

            <nav>
                <ul>
                    {[
                        { link: '/posts', text: 'Posts' },
                        { link: '/contact', text: 'Contact' },
                    ].map((item, i) => (
                        <Link key={i + Date.now()} href={item.link}>
                            {item.text}
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
