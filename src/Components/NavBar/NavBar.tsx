import { useEffect, useState } from 'react';
import { ScrollSmoother } from 'gsap/all';
import './NavBar.css';

interface NavBarProps {
  onContact: () => void;
}

const LINKS: { label: string; target: string }[] = [
  { label: 'Projects', target: 'work' },
  { label: 'Stack', target: 'stack' },
  { label: 'About', target: 'aboutme' },
];

export const NavBar: React.FC<NavBarProps> = ({ onContact }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    const smoother = ScrollSmoother.get();
    if (smoother && el) {
      smoother.scrollTo(el, true, 'top 80px');
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.scrollTo(0, true);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className='nav__inner'>
        <button className='nav__brand' onClick={goHome} aria-label='Back to top'>
          <span className='nav__brandMark'>JG</span>
          <span className='nav__brandName'>Joseph Greenhouse</span>
        </button>

        <nav className='nav__links' aria-label='Primary'>
          {LINKS.map(({ label, target }) => (
            <button key={target} className='nav__link' onClick={() => scrollTo(target)}>
              {label}
            </button>
          ))}
          <button className='nav__cta' onClick={onContact}>
            Get in touch
          </button>
        </nav>
      </div>
    </header>
  );
};
