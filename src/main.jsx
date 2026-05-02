import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import './styles.css';

const calendarLink = 'https://calendar.app.google/X6KBMhZVmxGofHyF7';

const homeSteps = [
  { title: "Study", body: "We engage material that opens new ways of seeing ourselves and the world." },
  { title: "Consultation", body: "We read our reality together and decide what the group will act on." },
  { title: "Action", body: "The cohort carries out a shared decision in practice." },
  { title: "Reflection", body: "We return to what happened, learn from it, and refine the next step." },
];

const approachSteps = [
  { title: "Study", body: "The group engages material that expands how reality is understood." },
  { title: "Consultation", body: "Through structured dialogue, the group reads its situation and determines what is needed." },
  { title: "Action", body: "Decisions are carried out as real, shared acts." },
  { title: "Reflection", body: "The group learns from what unfolds and refines its next step." },
];

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function useFadeIn() {
  const location = useLocation();
  useEffect(() => {
    const els = document.querySelectorAll('.fadeIn');
    els.forEach(el => el.classList.remove('visible'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location]);
}

function usePageTransition() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, [location]);
  return visible;
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`siteNav ${scrolled || menuOpen ? 'navScrolled' : ''}`}>
        <div className="navInner">
          <Link to="/" className="navWordmark">The Stage Beyond</Link>
          <div className="navLinks">
            <NavLink to="/approach" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>Approach</NavLink>
            <NavLink to="/cohort" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>Cohorts</NavLink>
            <NavLink to="/projects" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>Projects</NavLink>
            <NavLink to="/facilitator" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>Facilitator</NavLink>
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
          <Link to="/" className="mobileNavLink">Home</Link>
          <NavLink to="/approach" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>Approach</NavLink>
          <NavLink to="/cohort" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>Cohorts</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>Projects</NavLink>
          <NavLink to="/facilitator" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>Facilitator</NavLink>
          <NavLink to="/apply" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>Is this for me?</NavLink>
          <a href={calendarLink} className="mobileNavCta" target="_blank" rel="noopener noreferrer">
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
        <Link to="/" className="footerWordmark">The Stage Beyond</Link>
        <nav className="footerLinks">
          <Link to="/" className="footerLink">Home</Link>
          <Link to="/approach" className="footerLink">Approach</Link>
          <Link to="/cohort" className="footerLink">Cohorts</Link>
          <Link to="/projects" className="footerLink">Projects</Link>
          <Link to="/facilitator" className="footerLink">Facilitator</Link>
          <Link to="/apply" className="footerLink">Is this for me?</Link>
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
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/facilitator" element={<FacilitatorPage />} />
        <Route path="/cohort" element={<CohortPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function HomePage() {
  useFadeIn();
  const visible = usePageTransition();

  return (
    <main className={`site pageTransition ${visible ? 'pageVisible' : ''}`}>
      <section className="hero fadeIn">
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

      <section className="splitSection fadeIn">
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
          <Link to="/approach" className="secondaryLink">
            Learn how the work is structured
          </Link>
        </div>
      </section>

      <section className="rhythmSection fadeIn">
        <p className="eyebrow">How we work</p>
        <h2>Study. Consultation. Action. Reflection.</h2>
        <div className="cycleGrid">
          {homeSteps.map((step) => (
            <CycleStep key={step.title} title={step.title}>{step.body}</CycleStep>
          ))}
        </div>
      </section>

      <section className="purpose fadeIn">
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
        <Link to="/apply" className="learnMore">
          Is this for me?
        </Link>
      </section>
    </main>
  );
}

function ApproachPage() {
  useFadeIn();
  const visible = usePageTransition();

  return (
    <main className={`site simplePage pageTransition ${visible ? 'pageVisible' : ''}`}>
      <section className="pageHero fadeIn">
        <p className="eyebrow">The approach</p>
        <h1>The work, in practice.</h1>
        <p className="pageLead">
          This is not a program you move through individually.
          It is a structured process carried out as a group.
        </p>
      </section>
      <section className="contentSection fadeIn">
        <div className="pagePhoto">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop"
            alt="People working together"
          />
        </div>

        <p>
          Transition is often approached as a personal problem to solve. Here, it is worked on collectively.
        </p>
        <p>
          The group becomes a working unit—reading its own reality, making decisions together,
          and carrying them out in practice.
        </p>
        <div className="clearfix" />
        <h2>A consistent rhythm</h2>
        <div className="approachList">
          {approachSteps.map((step) => (
            <CycleStep key={step.title} title={step.title}>{step.body}</CycleStep>
          ))}
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
        <Link to="/apply" className="primaryCta">
          Is this for me?
        </Link>
      </section>
    </main>
  );
}

function CohortPage() {
  useFadeIn();
  const visible = usePageTransition();

  return (
    <main className={`site simplePage pageTransition ${visible ? 'pageVisible' : ''}`}>
      <section className="pageHero fadeIn">
        <p className="eyebrow">Cohorts</p>
        <h1>The next cohort.</h1>
        <p className="pageLead">
          The first cohort is scheduled to begin in October 2026.
          Spaces are limited. The process begins with a conversation.
        </p>
      </section>

      <section className="contentSection fadeIn">
        <div className="pagePhoto">
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&auto=format&fit=crop"
            alt="Group of people together"
          />
        </div>

        <p>
          Each cohort is a small, committed group of dancers working together
          over a defined period. The structure is consistent; the work that
          emerges is shaped by the group itself.
        </p>
        <div className="clearfix" />

        <div className="cohortGrid">
          <div className="cohortDetail">
            <p className="cohortLabel">Start date</p>
            <p className="cohortValue">October 2026</p>
          </div>
          <div className="cohortDetail">
            <p className="cohortLabel">Duration</p>
            <p className="cohortValue">3 months</p>
          </div>
          <div className="cohortDetail">
            <p className="cohortLabel">Cohort size</p>
            <p className="cohortValue">5–12 participants</p>
          </div>
          <div className="cohortDetail">
            <p className="cohortLabel">Format</p>
            <p className="cohortValue">In-person preferred</p>
          </div>
        </div>

        <h2>How sessions work</h2>
        <p>
          Sessions meet approximately weekly for three to four hours, with one
          full-day session per month. Each cohort builds its own schedule and
          plan — some groups may elect to carry out certain activities on
          weekends or in other formats that suit the work.
        </p>
        <p>
          In-person sessions are the ideal. Some online sessions may be needed
          depending on context and participant location.
        </p>

        <h2>Investment</h2>
        <p>
          The market value of participation is $5,000 CAD per participant. Cost varies
          depending on context. Reach out to discuss what is possible.
        </p>

        <p className="closingLine">
          The first step is a conversation to explore whether the timing,
          structure, and spirit of the work are right for you.
        </p>

        <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
          Schedule a conversation
        </a>
      </section>
    </main>
  );
}

function FacilitatorPage() {
  useFadeIn();
  const visible = usePageTransition();

  return (
    <main className={`site simplePage pageTransition ${visible ? 'pageVisible' : ''}`}>
      <section className="pageHero fadeIn">
        <p className="eyebrow">The facilitator</p>
        <h1>Travis Birch</h1>
        <p className="pageLead">
          Founder & Lead Facilitator, The Stage Beyond.
          Artist and facilitator working at the intersection of performance,
          learning, and collective development.
        </p>
      </section>

      <section className="contentSection fadeIn">
        <div className="facilitatorPhoto">
          <img src="/headshot.jpg" alt="Travis Birch" />
        </div>

        <p>
          Travis leads group-based processes focused on how people engage challenging
          questions, act, and learn together. The Stage Beyond brings together
          a background in the performing arts with over a decade of facilitation
          practice—returning these learnings to the context of dancer transition.
        </p>

        <div className="clearfix" />

        <h2>Artistic background</h2>
        <p>
          Travis trained at the National Ballet School Professional Program
          (1987–1994) and went on to a professional ballet career spanning
          1994–2008, with an international career across Europe and North America.
          He performed as a soloist, taking on leading roles in acclaimed
          productions on major stages, and also worked as an instructor and
          choreographer. He holds a teaching certificate from the National
          Ballet School.
        </p>
        <p>
          Questions of artistic identity and life beyond performance have been
          a sustained thread throughout his work ever since.
        </p>

        <h2>Facilitation practice</h2>
        <p>
          Travis has spent over a decade designing and leading facilitation and
          development processes with organizations navigating complex questions
          and collective action. As a Senior Consultant and Partner at Berteig
          (2008–2020), he designed and facilitated large-scale learning and
          development processes across diverse organizational contexts. Clients
          included the Government of Ontario, World Vision Canada, SickKids
          Foundation, RBC, BMO, Scotiabank, Bell, Telus, AirMiles, Aeroplan,
          and BlackBerry.
        </p>
      <p>
  Since 2020, through Travis Birch & Associates Ltd, he has continued
  to lead facilitation and development processes, supporting groups to
  engage complex questions and act collectively—designing structured
  approaches to learning grounded in cycles of reflection, consultation,
  and action.
</p>

<p>
  Travis holds several professional certifications in Leadership,
  Organizational and Team consulting, training and coaching.
</p>

<h2>The Stage Beyond</h2>

        <h2>The Stage Beyond</h2>
        <p>
          Founded in 2026, The Stage Beyond is a practice-based environment for
          dancers navigating transition beyond performance. It works through
          structured cycles of study, consultation, action, and reflection—
          emphasizing collective learning and capacity-building, with participants
          increasingly taking up the work themselves.
        </p>

        <p className="closingLine">
          The work is grounded in the belief that transition, worked on
          collectively, becomes something more than a personal problem to solve.
        </p>

        <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
          Schedule a conversation
        </a>
      </section>
    </main>
  );
}

function ProjectsPage() {
  useFadeIn();
  const visible = usePageTransition();

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
    <main className={`site simplePage pageTransition ${visible ? 'pageVisible' : ''}`}>
      <section className="pageHero fadeIn">
        <p className="eyebrow">Service projects</p>
        <h1>Action in the world.</h1>
        <p className="pageLead">
          The work of each cohort moves beyond personal development.
          These are examples of the kinds of projects a group might take on together.
        </p>
      </section>
      <section className="contentSection fadeIn">
        <div className="pagePhoto">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop"
            alt="Community volunteers working together"
          />
        </div>

        <p>
          Action is not an add-on to the process—it is central to it. Each cohort consults
          together to decide what they will do, then carries it out, reflects on what happened,
          and refines their next step.
        </p>
        <p>
          The projects below are examples, not a fixed menu. What a cohort undertakes will
          emerge from its own consultation and the reality it finds itself in.
        </p>
        <div className="clearfix" />
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
  useFadeIn();
  const visible = usePageTransition();

  return (
    <main className={`site simplePage pageTransition ${visible ? 'pageVisible' : ''}`}>
      <section className="pageHero fadeIn">
        <p className="eyebrow">Is this for me?</p>
        <h1>A good fit begins with readiness.</h1>
        <p className="pageLead">
          The Stage Beyond is for dancers who are ready to engage actively with peers,
          not simply receive advice.
        </p>
      </section>
      <section className="contentSection fadeIn">
        <div className="pagePhoto">
          <img
            src="https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&auto=format&fit=crop"
            alt="Dancer in reflection"
          />
        </div>

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
          <Link to="/" className="secondaryLink">Return to main page</Link>
        </p>
      </section>
    </main>
  );
}

function NotFoundPage() {
  const visible = usePageTransition();

  return (
    <main className={`site simplePage pageTransition ${visible ? 'pageVisible' : ''}`}>
      <section className="pageHero">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p className="pageLead">
          The page you're looking for doesn't exist or has moved.
        </p>
      </section>
      <section className="contentSection">
        <p className="closingLine">
          Head back to the homepage or use the navigation above.
        </p>
        <Link to="/" className="primaryCta">
          Return to homepage
        </Link>
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
