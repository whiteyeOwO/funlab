import { useEffect } from 'react';

function SubNavigation() {
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav className="subNavigation">
            <img src="images/index/Navigation bar.svg" alt="" />
            <ul className="subMenu">
                <li><a onClick={(e) => scrollToSection(e, 'index-banner')}>UP</a></li>
                <li><a onClick={(e) => scrollToSection(e, 'index-drink')}>MENU</a></li>
                <li><a onClick={(e) => scrollToSection(e, 'index-feature')}>ABOUT</a></li>
                <li><a onClick={(e) => scrollToSection(e, 'index-DIY')}>FUN LAB</a></li>
                <li><a onClick={(e) => scrollToSection(e, 'footer')}>DOWN</a></li>
            </ul>
        </nav>
    );
}

export default SubNavigation;