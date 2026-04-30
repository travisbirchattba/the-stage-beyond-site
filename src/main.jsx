import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const calendarLink = 'https://calendar.app.google/X6KBMhZVmxGofHyF7';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const path = window.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`siteNav ${scrolled || menuOpen ? 'navScrolled' : ''}`}>
        <div className="navInner">
          <a href="/" className="navWordmark">The Stage Beyond</a>
          <div className="navLinks">
            <a href="/approach" className={`navLink ${path === '/approach' ? 'navLinkActive' : ''}`}>Approach</a>
            <a href="/projects" className={`navLink ${path === '/projects' ? 'navLinkActive' : ''}`}>Projects</a>
            <a href="/apply" className={`navLink ${path === '/apply' ? 'navLinkActive' : ''}`}>Is this for me?</a>
          </div>
          <a href={calendarLink} className="navCta" target="_blank" rel="noopener noreferrer">
            Schedule a conversation
          </a>
          <button
            className={`hamburger ${menuOpen ? 'hamburgerOpen' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobileMenu ${menuOpen ? 'mobileMenuOpen' : ''}`}>
        <div className="mobileMenuInner">
          <a href="/" className="mobileNavLink" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/approach" className={`mobileNavLink ${path === '/approach' ? 'mobileNavLinkActive' : ''}`} onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="/projects" className={`mobileNavLink ${path === '/projects' ? 'mobileNavLinkActive' : ''}`} onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="/apply" className={`mobileNavLink ${path === '/apply' ? 'mobileNavLinkActive' : ''}`} onClick={() => setMenuOpen(false)}>Is this for me?</a>
          <a href={calendarLink} className="mobileNavCta" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
            Schedule a conversation
          </a>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <a href="/" className="footerWordmark">The Stage Beyond</a>
        <nav className="footerLinks">
          <a href="/" className="footerLink">Home</a>
          <a href="/approach" className="footerLink">Approach</a>
          <a href="/projects" className="footerLink">Projects</a>
          <a href="/apply" className="footerLink">Is this for me?</a>
        </nav>
        <a href={calendarLink} className="footerCta" target="_blank" rel="noopener noreferrer">
          Schedule a conversation
        </a>
        <p className="footerCopy">© {new Date().getFullYear()} The Stage Beyond</p>
      </div>
    </footer>
  );
}

function App() {
  const path = window.location.pathname;

  return (
    <>
      <Nav />
      {path === '/approach' ? <ApproachPage /> :
       path === '/apply' ? <ApplyPage /> :
       path === '/projects' ? <ProjectsPage /> :
       <HomePage />}
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <main className="site">
      <section className="hero">
        <div className="heroInner">
          <div className="heroText">
            <p className="eyebrow">A working community for dancers</p>
            <h1>Transition, reworked through collective practice.</h1>
            <p className="heroSubhead">
              A structured peer process where dancers work through transition together—
              forming a working community grounded in shared action.
            </p>
            <p className="heroHint">
              Small cohorts. Defined rhythm. Shared responsibility.
            </p>
            <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
              Schedule a conversation
            </a>
          </div>
          <div className="heroImage" />
        </div>
      </section>

      <section className="splitSection">
        <div>
          <p className="eyebrow">What this is</p>
          <h2>A place to work with transition.</h2>
        </div>
        <div className="textStack">
          <p>
            Transition is often treated as an individual question:
            What do I want? What will I do next?
          </p>
          <p>
            Here, it is worked on in a small peer group that becomes a working community.
          </p>
          <p>
            The group studies, consults, decides, and acts together—holding personal
            development and contribution at the same time.
          </p>
          <p className="quietLine">
            Small cohorts. Defined rhythm. Shared responsibility.
          </p>
          <a href="/approach" className="secondaryLink">
            Learn how the work is structured
          </a>
        </div>
      </section>

      <section className="rhythmSection">
        <p className="eyebrow">How we work</p>
        <h2>Study. Consultation. Action. Reflection.</h2>
        <div className="cycleGrid">
          <CycleStep title="Study">
            We engage material that opens new ways of seeing ourselves and the world.
          </CycleStep>
          <CycleStep title="Consultation">
            We read our reality together and decide what the group will act on.
          </CycleStep>
          <CycleStep title="Action">
            The cohort carries out a shared decision in practice.
          </CycleStep>
          <CycleStep title="Reflection">
            We return to what happened, learn from it, and refine the next step.
          </CycleStep>
        </div>
      </section>

      <section className="purpose">
        <p className="purposeLabel">The twofold purpose</p>
        <div className="purposeGrid">
          <div className="purposeBlock">
            <h3>Individual</h3>
            <p>Developing clarity and capacity through shared work.</p>
          </div>
          <div className="plus">+</div>
          <div className="purposeBlock">
            <h3>Community</h3>
            <p>Building a community that acts together in meaningful ways.</p>
          </div>
        </div>
        <div className="fitBlock">
          <p className="fitLine">
            For dancers who feel that something is shifting—and want to work with it in a more deliberate way.
          </p>
          <p className="fitLine">
            For dancers who want to build their capacity to contribute to the betterment of society.
          </p>
        </div>
        <a href="/apply" className="learnMore">
          Is this for me?
        </a>
      </section>
    </main>
  );
}

function ApproachPage() {
  return (
    <main className="site simplePage">
      <section className="pageHero">
        <p className="eyebrow">The approach</p>
        <h1>The work, in practice.</h1>
        <p className="pageLead">
          This is not a program you move through individually.
          It is a structured process carried out as a group.
        </p>
      </section>
      <section className="contentSection">
        <p>
          Transition is often approached as a personal problem to solve. Here, it is worked on collectively.
        </p>
        <p>
          The group becomes a working unit—reading its own reality, making decisions together,
          and carrying them out in practice.
        </p>
        <h2>A consistent rhythm</h2>
        <div className="approachList">
          <CycleStep title="Study">
            The group engages material that expands how reality is understood.
          </CycleStep>
          <CycleStep title="Consultation">
            Through structured dialogue, the group reads its situation and determines what is needed.
          </CycleStep>
          <CycleStep title="Action">
            Decisions are carried out as real, shared acts.
          </CycleStep>
          <CycleStep title="Reflection">
            The group learns from what unfolds and refines its next step.
          </CycleStep>
        </div>
        <h2>What develops over time</h2>
        <p>
          The aim is not only individual clarity. Over time, the group develops the capacity
          to think, decide, and act together with increasing coherence.
        </p>
        <p>
          This is what allows transition to become more grounded and meaningful—not as an isolated
          process, but as part of a shared direction.
        </p>
        <h2>Structure</h2>
        <ul className="structureList">
          <li>Small cohort</li>
          <li>Defined time period</li>
          <li>Regular sessions</li>
          <li>Shared responsibility for participation and follow-through</li>
        </ul>
        <h2>The role of facilitation</h2>
        <p>
          The facilitator does not provide answers or direction. Their role is to maintain the structure,
          support the process, and help the group develop its own capacity to work together.
        </p>
        <p className="closingLine">
          This is not a place to arrive at answers. It is a place to develop the capacity
          to work with real questions.
        </p>
        <a href="/apply" className="primaryCta">
          Is this for me?
        </a>
      </section>
    </main>
  );
}

function ProjectsPage() {
  const projects = [
    {
      title: "Dance Programs for Children & Youth in Underserved Communities",
      description:
        "Cohort members design and deliver movement-based programs for children and youth in communities with limited access to the arts. This is not performance outreach—it is sustained, relational work that requires listening, adapting, and showing up consistently over time.",
    },
    {
      title: "Tutoring & Mentoring Support",
      description:
        "Drawing on the discipline and focus developed through years of training, cohort members offer academic tutoring or personal mentoring to young people who benefit from patient, skilled adult presence. The work builds relationships as much as it builds skills.",
    },
    {
      title: "Collaborative Outreach Within the Dance Community",
      description:
        "Projects that strengthen connection across the dance community—between studios, generations, disciplines, or institutions. This might take the form of shared workshops, open rehearsals, skill exchanges, or initiatives that address gaps the community itself has identified.",
    },
    {
      title: "Contributing to Wider Society",
      description:
        "Cohorts may undertake projects that bring their collective capacity to bear on needs outside the dance world entirely—partnering with local organizations, responding to community-identified needs, or initiating something that reflects what the group has learned to do together.",
    },
  ];

  return (
    <main className="site simplePage">
      <section className="pageHero">
        <p className="eyebrow">Service projects</p>
        <h1>Action in the world.</h1>
        <p className="pageLead">
          The work of each cohort moves beyond personal development.
          These are examples of the kinds of projects a group might take on together.
        </p>
      </section>
      <section className="contentSection">
        <p>
          Action is not an add-on to the process—it is central to it. Each cohort consults
          together to decide what they will do, then carries it out, reflects on what happened,
          and refines their next step.
        </p>
        <p>
          The projects below are examples, not a fixed menu. What a cohort undertakes will
          emerge from its own consultation and the reality it finds itself in.
        </p>
        <div className="projectsGrid">
          {projects.map((project) => (
            <div className="projectCard" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <p className="closingLine">
          The point is not to complete a project. It is to develop the capacity
          to act together—and to discover what that makes possible.
        </p>
        <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
          Schedule a conversation
        </a>
      </section>
    </main>
  );
}

function ApplyPage() {
  return (
    <main className="site simplePage">
      <section className="pageHero">
        <p className="eyebrow">Is this for me?</p>
        <h1>A good fit begins with readiness.</h1>
        <p className="pageLead">
          The Stage Beyond is for dancers who are ready to engage actively with peers,
          not simply receive advice.
        </p>
      </section>
      <section className="contentSection">
        <h2>This may be a fit if you are ready to:</h2>
        <ul className="structureList">
          <li>work with transition in a structured way</li>
          <li>engage seriously with peers</li>
          <li>participate in consultation, action, and reflection</li>
          <li>contribute to something beyond your own individual next step</li>
        </ul>
        <h2>This may not be a fit if you are looking for:</h2>
        <ul className="structureList">
          <li>career coaching</li>
          <li>therapy or emotional processing as the primary focus</li>
          <li>a course with fixed answers</li>
          <li>a purely individual process</li>
        </ul>
        <p className="closingLine">
          The first step is a conversation. We'll explore whether the timing,
          structure, and spirit of the work are right.
        </p>
        <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
          Schedule a call to learn more
        </a>
        <p>
          <a href="/" className="secondaryLink">Return to main page</a>
        </p>
      </section>
    </main>
  );
}

function CycleStep({ title, children }) {
  return (
    <div className="cycleStep">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
