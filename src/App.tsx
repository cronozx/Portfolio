import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './App.css';
import { IconButton } from './Components/IconButton/IconButton';
import { NavButton } from './Components/NavButton/NavButton';
import { ContactModal } from './Components/ContactModal/ContactModal';
import { typewriter } from './Animations/TypeWriter';
import { gsap } from 'gsap';
import { ScrollSmoother, ScrollTrigger, TextPlugin } from 'gsap/all';
import { ProjectCard } from './Components/ProjectCard/ProjectCard';
import { Project } from './Components/ProjectCard/Projects';
import { TechContainer } from './Components/TechContainer/TechContainer';
import { Section } from './Components/Section/Section';
import { AboutMe } from './Components/AboutMe/AboutMe';

export interface TechInterface {
  category: string,
  url: string
}

function openGithub() {
  window.open("https://github.com/cronozx");
}

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const mid1Ref = useRef<SVGCircleElement>(null);
  const mid2Ref = useRef<SVGCircleElement>(null);
  const mid3Ref = useRef<SVGCircleElement>(null);
  const snakeContainerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section1TitleRef = useRef<HTMLDivElement>(null);
  const section2TitleRef = useRef<HTMLDivElement>(null);
  const section3TitleRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      name: 'Culling Games',
      description: 'Battle Royal Minecraft plugin based off of the JJK manga.',
      stack: ['Java', 'Redis'],
      links: [
        { name: 'Bukkit Repo',  function: () => window.open('https://github.com/cronozx/CullingGames-Bukkit')  },
        { name: 'Velocity Repo', function: () => window.open('https://github.com/cronozx/CullingGames-Velocity') }
      ]
    },
    {
      name: 'Portfolio',
      description: 'My portfolio aka this website thank you for checking it out!',
      stack: ['React', 'TypeScript', 'GSAP'],
      links: [
        { name: 'Github Repo',  function: () => window.open('https://github.com/cronozx/Portfolio')  }
      ]
    },
    {
      name: 'File Converter',
      description: 'File converter can convert to GIF, JPG, PNG, PDF, SVG, and WEBP',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Java', 'SpringBoot'],
      links: [
        { name: 'Frontend Repo',  function: () => window.open('https://github.com/cronozx/File-Converter-Frontend')  },
        { name: 'Backend Repo',  function: () => window.open('https://github.com/cronozx/File-Converter-Backend')  }
      ]
    }
  ]

  const techStack: TechInterface[] = [
    {
      category: 'Language',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
    },
    {
      category: 'Language',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
    {
      category: 'Language',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
    },
    {
      category: 'Language',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
    },
    {
      category: 'Language',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg'
    },
    {
      category: 'Frontend',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
      category: 'Frontend',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    },
    {
      category: 'Frontend',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
    },
    {
      category: 'Frontend',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg'
    },
    {
      category: 'Frontend',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg'
    },
    {
      category: 'Backend',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
    },
    {
      category: 'Backend',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
    },
    {
      category: 'Backend',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg'
    },
    {
      category: 'Databases',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg'
    },
    {
      category: 'Databases',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg'
    },
    {
      category: 'Tools',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
    },
    {
      category: 'Tools',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
    }
  ];

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TextPlugin);

  useEffect(() => {
    if (firstNameRef.current && lastNameRef.current) {
      typewriter(firstNameRef.current, lastNameRef.current);
    }
  }, [])

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
        smooth: 1,
        effects: true
    });

    return () => {
      smoother.kill();
    };
  }, [])

  useLayoutEffect(() => {
    if (!pathRef.current || !mid1Ref.current || !mid2Ref.current || !mid3Ref.current || !snakeContainerRef.current || !section1Ref.current || !section2Ref.current  || !section3Ref.current || !section1TitleRef.current || !section2TitleRef.current || !section3TitleRef.current) return;

    const container = snakeContainerRef.current;
    const path = pathRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = section3Ref.current;
    const section1Title = section1TitleRef.current;
    const section2Title = section2TitleRef.current;
    const section3Title = section3TitleRef.current;
    const mid1 = mid1Ref.current;
    const mid2 = mid2Ref.current;
    const mid3 = mid3Ref.current;
    
    const updatePath = () => {
      const containerRect = container.getBoundingClientRect();
      const section1Rect = section1.getBoundingClientRect();
      const section2Rect = section2.getBoundingClientRect();
      const section3Rect = section3.getBoundingClientRect();
      const section1TitleRect = section1Title.getBoundingClientRect();
      const section2TitleRect = section2Title.getBoundingClientRect();
      const section3TitleRect = section3Title.getBoundingClientRect();
    
      const section1Top = section1Rect.top - containerRect.top - 10;
      const section1Bottom = section1Rect.bottom - containerRect.top + 5;
      const section2Bottom = section2Rect.bottom - containerRect.top + 5;
      const section3Bottom = section3Rect.bottom - containerRect.top;
      
      const section1LineX = section1TitleRect.right - containerRect.left;
      const section2LineX = section2TitleRect.left - containerRect.left;
      const section3LineX = section3TitleRect.right - containerRect.left;
      
      const midX = containerRect.width / 2;
      const startY = section1Top;
      const r = 20;
      const horizontalGap = section3LineX - section2LineX;
      const r2 = Math.max(0, Math.min(r, horizontalGap / 2 - 1));

      const section3End = section3Bottom;
      const mid1Y = (section1Top + section1Bottom) / 2;
      const mid2Y = (section1Bottom + section2Bottom) / 2;
      const mid3Y = (section2Bottom + section3Bottom) / 2;

      const d = `
        M ${midX} ${startY}
        L ${midX} ${section1Top - r}
        Q ${midX} ${section1Top} ${midX - r} ${section1Top}
        L ${section1LineX + r} ${section1Top}
        Q ${section1LineX} ${section1Top} ${section1LineX} ${section1Top + r}
        L ${section1LineX} ${section1Bottom - r}
        Q ${section1LineX} ${section1Bottom} ${section1LineX + r} ${section1Bottom}
        L ${section2LineX - r} ${section1Bottom}
        Q ${section2LineX} ${section1Bottom} ${section2LineX} ${section1Bottom + r}
        L ${section2LineX} ${section2Bottom - r2}
        Q ${section2LineX} ${section2Bottom} ${section2LineX + r2} ${section2Bottom}
        L ${section3LineX - r2} ${section2Bottom}
        Q ${section3LineX} ${section2Bottom} ${section3LineX} ${section2Bottom + r2}
        L ${section3LineX} ${mid3Y}
      `;
      
      path.setAttribute('d', d.trim());

      mid1.setAttribute('cx', `${section1LineX}`);
      mid1.setAttribute('cy', `${mid1Y}`);
      mid2.setAttribute('cx', `${section2LineX}`);
      mid2.setAttribute('cy', `${mid2Y}`);
      mid3.setAttribute('cx', `${section3LineX}`);
      mid3.setAttribute('cy', `${mid3Y}`);
      
      const length = path.getTotalLength();
      
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === container) st.kill();
      });
      
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      });
    };

    const timer = setTimeout(updatePath, 100);
    window.addEventListener('resize', updatePath);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePath);
    };
  }, []);

  return (
      <div className="App" id="smooth-wrapper" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${process.env.PUBLIC_URL + '/background.png'})`}}>
        <div id="smooth-content">
          <div className='main'>
            {/* landing page start  */}
            <div className='landing'>
              <div className='name' id='name'>
                <span ref={firstNameRef}></span> <br/>
                <span ref={lastNameRef}></span>
              </div>
              <div className='desc'> <i className='bi bi-caret-right'/>Full Stack Developer</div>

              <div className='buttonBar'>                
                <NavButton buttonName='Projects' onClick={() => {ScrollSmoother.get()?.scrollTo(document.getElementById('work'), true)}}/>
                <NavButton buttonName='Tech Stack' onClick={() => {ScrollSmoother.get()?.scrollTo(document.getElementById('stack'), true)}}/>
                <NavButton buttonName='About Me' onClick={() => {ScrollSmoother.get()?.scrollTo(document.getElementById('aboutme'), true)}}/>
              </div>

              <div className='iconButtonBar'>
                <IconButton iconName='github' onClick={openGithub}></IconButton>
                <IconButton iconName='envelope-fill' onClick={openContactModal}></IconButton>
              </div>
            </div>
            {/* landing page end  */}

            <div className='snakeContainer' ref={snakeContainerRef}>
              
              {/* SVG snake line overlay */}
              <svg className='snakeSvg'>
                <path
                  ref={pathRef}
                  className='snakePath'
                  stroke="#8800FF"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  
                />
                <circle ref={mid1Ref} className='snakeMidpoint' r="6" />
                <circle ref={mid2Ref} className='snakeMidpoint' r="6" />
                <circle ref={mid3Ref} className='snakeMidpoint' r="6" />
              </svg>

              {/* First section */}
              <Section
                id='work'
                ref={section1Ref}
                title='Featured Projects'
                titleClassName='workTitle'
                align='right'
                titleRef={section1TitleRef}
              >
                <div className='workContainer'>
                  {projects.map(({name, description, stack, links}) => (
                    <ProjectCard
                      projectName={name}
                      projectDesc={description}
                      projectStack={stack}
                      projectLinks={links}
                    />
                  ))}
                </div>
              </Section>

              {/* Second section */}
              <Section
                id='stack'
                ref={section2Ref}
                title='My Stack'
                titleClassName='stackTitle'
                align='left'
                titleRef={section2TitleRef}
              >
                <div className='stackContainer'>
                  <TechContainer
                    cards={techStack.filter(tech => tech.category === 'Language')}
                    title='Languages'
                  />
                  <TechContainer
                    cards={techStack.filter(tech => tech.category === 'Frontend')}
                    title='Frontend'
                  />
                  <TechContainer
                    cards={techStack.filter(tech => tech.category === 'Backend')}
                    title='Backend'
                  />
                  <TechContainer
                    cards={techStack.filter(tech => tech.category === 'Databases')}
                    title='Databases'
                  />
                  <TechContainer
                    cards={techStack.filter(tech => tech.category === 'Tools')}
                    title='Tools'
                  />
                </div>
              </Section>

              <Section
                id='aboutme'
                ref={section3Ref}
                title='About Me'
                titleClassName='aboutTitle'
                align='right'
                titleRef={section3TitleRef}
              >
                <AboutMe />
              </Section>

            </div>

          </div>
        </div>

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={closeContactModal}
        />
      </div>
  );
}

export default App;
