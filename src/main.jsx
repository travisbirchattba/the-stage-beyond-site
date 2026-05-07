import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import './styles.css';

const calendarLink = 'https://calendar.app.google/yzkx5MPNAcY7H2X29';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

function useFadeIn() {
  const location = useLocation();
  useEffect(() => {
    const els = document.querySelectorAll('.fadeIn');
    els.forEach((el) => el.classList.remove('visible'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`siteNav ${scrolled || menuOpen ? 'navScrolled' : ''}`}>
        <div className="navInner">
          <Link to="/" className="navWordmark">
            <svg viewBox="0 0 80 50" className="navIcon" xmlns="http://www.w3.org/2000/svg">
              <line x1="4" y1="38" x2="76" y2="38" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 38 Q40 8 70 38" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="40" cy="14" r="4" fill="#b98b3f" />
            </svg>
            The Stage Beyond
          </Link>

          <div className="navLinks">
            <NavLink to="/approach" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>Approach</NavLink>
            <NavLink to="/cohort" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>Cohorts</NavLink>
            <NavLink to="/action-examples" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>Action</NavLink>
            <NavLink to="/facilitator" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>Facilitator</NavLink>
            <NavLink to="/waitlist" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>Join waitlist</NavLink>
          </div>

          <Link to="/apply" className="navCta">Begin the conversation</Link>

          <button
            className={`hamburger ${menuOpen ? 'hamburgerOpen' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobileMenu ${menuOpen ? 'mobileMenuOpen' : ''}`}>
        <div className="mobileMenuInner">
          <Link to="/" className="mobileNavLink">Home</Link>
          <NavLink to="/approach" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>Approach</NavLink>
          <NavLink to="/cohort" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>Cohorts</NavLink>
          <NavLink to="/action-examples" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>Action</NavLink>
          <NavLink to="/facilitator" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>Facilitator</NavLink>
          <NavLink to="/apply" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>Is this for me?</NavLink>
          <NavLink to="/waitlist" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>Join waitlist</NavLink>
          <Link to="/apply" className="mobileNavCta">Begin the conversation</Link>
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
          <Link to="/action-examples" className="footerLink">Action</Link>
          <Link to="/facilitator" className="footerLink">Facilitator</Link>
          <Link to="/apply" className="footerLink">Is this for me?</Link>
          <Link to="/waitlist" className="footerLink">Join waitlist</Link>
        </nav>

        <section className="openStudy fadeIn">
          <p className="eyebrow">Open Study</p>
          <h2>A place to begin the practice.</h2>
          <p className="openStudyLead">
            A monthly online gathering for dancers thinking seriously about transition.
          </p>
          <p>
            Each session includes a short study prompt, guided reflection,
            and shared discussion around questions that emerge beyond performance.
            Not an information session. Not coaching. A chance to experience
            the rhythm of the work directly.
          </p>
          <p>
            Open Study is also a way for the wider community around the work
            to remain active between cohorts.
          </p>
          <div className="openStudyMeta">
            <span>Online</span>
            <span>60 minutes</span>
            <span>Free</span>
          </div>
          <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
            Join the next Open Study
          </a>
        </section>

        <Link to="/apply" className="footerCta">Begin the conversation</Link>
        <p className="footerCopy">© {new Date().getFullYear()} The Stage Beyond</p>
      </div>
    </footer>
  );
}

function HomePage() {
  useFadeIn();
  const visible = usePageTransition();

  return (
    <main className={`site pageTransition ${visible ? 'pageVisible' : ''}`}>

      {/* ── Hero ── */}
      <section className="hero fadeIn">
        <div className="heroInner">
          <div className="heroText">
            <p className="eyebrow">A working community for dancers</p>
            <h1>Life beyond performance is already beginning.</h1>
            <p className="heroSubhead">
              A structured peer process for dancers navigating what comes next.
            </p>
            <p className="heroHint">
              Small cohorts. A shared rhythm of study, dialogue, action, and reflection.
            </p>
            <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
              Join the inquiry
            </a>
          </div>
          <div className="heroImage" />
        </div>
      </section>

      {/* ── What this is ── */}
      <section className="splitSection fadeIn">
        <div>
          <p className="eyebrow">What this is</p>
          <h2>Something is already shifting.</h2>
        </div>
        <div className="textStack">
          <p>
            You can feel it in how you relate to your work. In the questions that don't go away.
            In the sense that what brought you here may not carry you forward.
          </p>
          <p>
            Most dancers navigate this quietly — on their own, or in fragments. The Stage Beyond
            exists to make that process shared, visible, and something you can actively engage.
          </p>
          <p>
            The work does not treat transition as a problem to solve,
            but as a real developmental and social question worthy of serious engagement.
          </p>
          <p>
            Some participants are in the early stages of their dance careers. Many are still performing. Others are already beyond it.
            What matters is a readiness to engage seriously with the questions that emerge.
          </p>
          <Link to="/approach" className="secondaryLink">Learn how the work is structured</Link>
        </div>
      </section>

      {/* ── Is this familiar ── */}
      <section className="fitPreview fadeIn">
        <p className="eyebrow">Is this familiar?</p>
        <h2>You may be in the right place if...</h2>
        <div className="fitPreviewGrid">
          <div className="fitPreviewItem">
            <p>You are curious about what other paths may be open to you.</p>
          </div>
          <div className="fitPreviewItem">
            <p>You have stopped and feel unmoored — like the structures that held you are gone.</p>
          </div>
          <div className="fitPreviewItem">
            <p>You are teaching, freelancing, injured, or sensing that your identity is changing.</p>
          </div>
        </div>
        <Link to="/apply" className="secondaryLink">See if this is a fit</Link>
      </section>

      {/* ── Rhythm ── */}
      <section className="rhythmSection fadeIn">
        <p className="eyebrow">How the work takes shape</p>
        <h2>We move in a rhythm.</h2>
        <p className="rhythmIntro">
          Each cohort returns to the same cycle: study what opens new perspective,
          consult together, take action in practice, and reflect on what is learned by doing.
        </p>
        <div className="cycleGrid">
          <div className="cycleStep">
            <h3>Study</h3>
            <p>We work with material that helps us see ourselves and our situation differently.</p>
          </div>
          <div className="cycleStep">
            <h3>Dialogue</h3>
            <p>Together, we make sense of what we are seeing and decide what to act on.</p>
          </div>
          <div className="cycleStep">
            <h3>Action</h3>
            <p>We carry out a shared decision in ways that contribute beyond the group.</p>
          </div>
          <div className="cycleStep">
            <h3>Reflection</h3>
            <p>We return to what happened and learn from what doing made visible.</p>
          </div>
        </div>
      </section>

      {/* ── Purpose ── */}
      <section className="purpose fadeIn">
        <p className="purposeLabel">What the work develops</p>
        <div className="purposeGrid">
          <div className="purposeBlock">
            <h3>Personal Capacity</h3>
            <p>Developing clarity, resilience, and the ability to engage transition deliberately.</p>
          </div>
          <div className="plus">+</div>
          <div className="purposeBlock">
            <h3>Action</h3>
            <p>Building the capacity to act together in ways that contribute beyond the self.</p>
          </div>
        </div>

        <p className="finalStatement">
          Beyond performance, the question is not only what comes next —
          but how we learn to participate meaningfully in life together.
        </p>

        <Link to="/apply" className="learnMore">Is this for me?</Link>
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
          <img src="/Approach.png" alt="Group working together" />
        </div>

        <p>
          Transition is often approached as a personal problem to solve. Here, it is worked on
          collectively. The group becomes a working unit — reading its own reality, making decisions
          together, and carrying them out in practice.
        </p>
        <p>
          Participants are not passive recipients of guidance. Each person becomes a protagonist
          in the work — helping shape the inquiry, the action, and what the group becomes
          capable of together. The emphasis is not on self-expression for its own sake, but on
          developing the capacity to participate meaningfully with others in shared reality.
        </p>

        <div className="clearfix" />

        {/* ── Rhythm ── */}
        <h2>The work moves in a rhythm.</h2>

        <p className="rhythmIntro">
          Not a sequence to follow once, but a cycle the group returns to — each pass
          deepening what the cohort understands and becomes capable of together.
        </p>

        <div className="approachStages">
          <div className="approachStage">
            <span className="approachStageLabel">Study</span>
            <p>Readings, artistic works, questions, or observations that help the cohort encounter transition differently.</p>
          </div>
          <div className="approachStage">
            <span className="approachStageLabel">Dialogue</span>
            <p>The group reads its own reality together — understanding what is happening, what matters, and what action makes sense.</p>
          </div>
          <div className="approachStage">
            <span className="approachStageLabel">Action</span>
            <p>A shared act the cohort carries out in the world — small at first, but real enough to learn from.</p>
          </div>
          <div className="approachStage">
            <span className="approachStageLabel">Reflection</span>
            <p>A disciplined effort to understand what becomes visible through study, action, and collective experience.</p>
          </div>
        </div>

        <div className="cycleImageWrap">
          <img
            src="/rhythm-cycle.png"
            alt="The Stage Beyond working cycle: Study, Dialogue, Action, Reflection"
          />
        </div>

        <p className="cycleClosing">
          The rhythm matters because transition becomes more workable when it is carried
          collectively, revisited over time, and tested in practice.
        </p>

        <div className="midPageCta">
          <Link to="/apply" className="secondaryLink">See if this is a fit →</Link>
        </div>

        {/* ── What develops ── */}
        <h2>What develops over time.</h2>

        <p>
          What develops is not only individual clarity, but the capacity to think,
          decide, and act together — in a way that holds under real conditions.
          Over time, the cohort itself changes: developing greater coherence,
          trust, responsibility, and capacity for meaningful collective action.
        </p>
        <p>
          The process is intentionally experimental. The cohort learns by testing ideas,
          taking action, reflecting on outcomes, and adapting together. Moments of
          uncertainty or tension are not interruptions — they are part of what the
          group learns to engage constructively.
        </p>
        <p>
          As people participate differently, they often begin to understand themselves
          differently as well — not through abstraction alone, but through lived practice
          with others over time. Transition becomes less about finding an answer, and more
          about participating in something that is being worked out collectively and mutual support and encouragement translate into evidence-based learning.
        </p>

        {/* ── Structure ── */}
        <h2>Structure.</h2>

        <div className="structureGrid">
          <div className="structureCard">
            <span className="structureCardLabel">Size</span>
            <p>Small cohort — large enough for real dialogue, small enough for real trust.</p>
          </div>
          <div className="structureCard">
            <span className="structureCardLabel">Duration</span>
            <p>A defined time period with regular sessions and shared responsibility for follow-through.</p>
          </div>
          <div className="structureCard">
            <span className="structureCardLabel">Participation</span>
            <p>Active, not passive. The work depends on each member contributing attention, thought, and presence.</p>
          </div>
          <div className="structureCard">
            <span className="structureCardLabel">Direction</span>
            <p>Not fully predetermined — participants help shape the questions, actions, and what the process becomes capable of.</p>
          </div>
        </div>

        {/* ── Facilitation ── */}
        <h2>The role of facilitation.</h2>

        <p>
          The facilitator does not provide answers or direction. Their role is to maintain
          the structure, support the process, and help the group develop its own capacity
          to work together — not dependence, but the gradual development of the group's
          own capacity for inquiry, action, responsibility, and learning.
        </p>
        <p>
          This is not networking, peer accountability, or professional development in the
          usual sense. The emphasis is on collective learning, shared practice, and
          sustained engagement with real questions.
        </p>

        <p className="closingLine">
          The aim is not only to support transition, but to help people become protagonists
          in shaping what life beyond performance can make possible.
        </p>

        <Link to="/apply" className="primaryCta">See if this is a fit</Link>

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
          The first cohort begins October 2026. Spaces are limited.
          The process starts with a conversation.
        </p>
      </section>

      <section className="contentSection fadeIn">

        <div className="pagePhoto">
          <img src="/Cohort.png" alt="Group in conversation" />
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

        <h2>How sessions work.</h2>

        <p>
          A typical week includes a shared reading or prompt, a 90-minute dialogue session,
          individual reflection between meetings, and a small piece of action the cohort
          is testing together. The cohort remains intentionally small so that trust, continuity,
          and meaningful collective work can actually develop over time.
        </p>
        <p>
          In-person sessions are the ideal. Some online sessions may be needed
          depending on context and participant location. Expected time commitment:
          weekly group dialogues of approximately 90 minutes, with light reflection
          or action between sessions.
        </p>
        <p>
          The end of a cohort is not treated as the end of the work, but as one phase
          in a longer process of development, participation, and inquiry.
        </p>

        <h2>Cost.</h2>

<p>
  The work is offered on a sliding scale. Grants and funding support 
  may be available. Reach out — we'll find a way to make it work.
</p>

        <p className="closingLine">
          The first step is a conversation to explore whether the timing,
          structure, and spirit of the work are right for you.
        </p>

        <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
          Apply to join the cohort
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
          Founder & Lead Facilitator. Artist and facilitator working at the intersection
          of performance, learning, and collective development.
        </p>
      </section>

      <section className="contentSection fadeIn">

        <div className="facilitatorPhoto">
          <img src="/Facilitator.jpg" alt="Travis Birch" />
        </div>

        <p>
          Travis enters this work as both a former dancer who understands the
          identity cost of transition, and as a facilitator with the structure
          to hold collective learning without turning it into advice-giving.
        </p>

        <div className="clearfix" />

        <blockquote className="facilitatorQuote">
          I am holding this space because I know how much can remain unnamed in the move
beyond performance — and because I believe dancers navigate that transition
better together than apart.
        </blockquote>

        <h2>Artistic background.</h2>

        <div className="timelineBlock">
          <div className="timelineItem">
            <span className="timelineYear">1987–1994</span>
            <p>Trained at the National Ballet School Professional Program.</p>
          </div>
          <div className="timelineItem">
            <span className="timelineYear">1994–2008</span>
            <p>Professional ballet career spanning Europe and North America. Performed as a soloist in leading roles on major stages. Also worked as an instructor and choreographer. Holds a teaching certificate from the National Ballet School.</p>
          </div>
        </div>

        <h2>Facilitation practice.</h2>

        <div className="timelineBlock">
          <div className="timelineItem">
            <span className="timelineYear">2008–2020</span>
            <p>Senior Consultant and Partner at Berteig. Designed and led large-scale learning and development processes across diverse organizational contexts — Government of Ontario, World Vision Canada, SickKids Foundation, RBC, BMO, Scotiabank, Bell, Telus, and others.</p>
          </div>
          <div className="timelineItem">
            <span className="timelineYear">2020–present</span>
            <p>Travis Birch & Associates Ltd. Continues to lead facilitation and development processes, supporting groups to engage complex questions and act collectively through cycles of reflection, dialogue, and action.</p>
          </div>
        </div>

        <p>
          Travis holds several professional certifications in leadership,
          organizational and team consulting, training, and coaching.
        </p>

        <h2>The Stage Beyond.</h2>

        <p>
          Founded in 2026, The Stage Beyond is a practice-based environment for
          dancers navigating transition beyond performance. It works through
          structured cycles of study, dialogue, action and reflection —
          emphasizing collective learning and capacity-building, with participants
          increasingly taking up the work themselves.
        </p>

        <p>
  Transition, at its core, is a process of integration — not the shedding
  of a former self, but the gradual process of bringing who you are into
  a new relationship with the world.
</p>

<p className="closingLine">
  The work is grounded in the belief that integration is not private work.
  It requires accompaniment — people who share your identity and can help
  you carry it into what comes next.
</p>

        <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
          Begin the conversation
        </a>
      </section>
    </main>
  );
}

function ActionPage() {
  useFadeIn();
  const visible = usePageTransition();

  const Actions = [
    {
      title: 'Dance Programs for Children & Youth',
      description:
        'Cohort members design and deliver movement-based programs for children and youth in communities with limited access to the arts. Sustained, relational work that requires listening, adapting, and showing up consistently over time.',
    },
    {
      title: 'Tutoring & Mentoring Support',
      description:
        'Drawing on the discipline developed through years of training, cohort members offer academic tutoring or personal mentoring to young people who benefit from patient, skilled adult presence.',
    },
    {
      title: 'Collaborative Outreach Within Dance',
      description:
        'Projects that strengthen connection across the dance community — between studios, generations, disciplines, or institutions. Shared workshops, open rehearsals, skill exchanges, or initiatives that address gaps the community has identified.',
    },
    {
      title: 'Contributing to Wider Society',
      description:
        'Cohorts may undertake projects that bring their collective capacity to bear on needs outside the dance world entirely — partnering with local organizations, responding to community-identified needs, or initiating something that reflects what the group has learned to do together.',
    },
  ];

  return (
    <main className={`site simplePage pageTransition ${visible ? 'pageVisible' : ''}`}>

      <section className="pageHero fadeIn">
        <p className="eyebrow">Action</p>
        <h1>What action can look like.</h1>
        <p className="pageLead">
          Action is where the cohort tests what it is learning through real,
          shared contribution beyond the group.
        </p>
      </section>

      <section className="contentSection fadeIn">

        <p>
          Action is not an assignment or a volunteer requirement.
          It is a shared act the cohort chooses and carries out in response to what it is learning —
          something real enough to learn from, small enough to carry, and meaningful enough to matter.
        </p>

        <p>
          These are examples of potential action — not a fixed menu. What a cohort
          undertakes will emerge from its dialogue, its capacity, and the reality it finds itself in.
        </p>

        <div className="projectsGrid">
          {Actions.map((project) => (
            <div className="projectCard" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        <p className="closingLine">
          Action shifts transition from private adaptation toward meaningful participation in shared life.
        </p>

        <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
          Begin the conversation
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
          The Stage Beyond is for dancers who are ready to engage actively with peers —
          not simply receive advice.
        </p>
      </section>

      <section className="contentSection fadeIn">

        {/* ── Fit lists upfront ── */}
        <div className="fitColumns">
          <div className="fitColumn fitColumnYes">
            <p className="fitColumnHead">This may be a fit if you are ready to:</p>
            <ul className="fitList">
              <li>Work with transition in a structured, collective way</li>
              <li>Engage seriously with peers over a defined period</li>
              <li>Participate in dialogue, action, and reflection</li>
              <li>Contribute to something beyond your own individual next step</li>
            </ul>
          </div>
          <div className="fitColumn fitColumnNo">
            <p className="fitColumnHead">This may not be a fit if you are looking for:</p>
            <ul className="fitList">
              <li>Job placement or recruitment services</li>
              <li>Resume writing or career counselling</li>
              <li>Therapy or emotional processing as the primary focus</li>
              <li>A course with fixed answers or guaranteed outcomes</li>
            </ul>
          </div>
        </div>

        <div className="pagePhoto">
          <img src="/Fit.png" alt="Group in discussion" />
        </div>

        <h2>Who this is for.</h2>

        <p>
          Dancers from a range of backgrounds — ballet, contemporary, commercial, freelance,
          company, independent, teaching, choreographic, or interdisciplinary practice.
          What matters most is not a particular career path, but a readiness to work
          seriously with transition alongside others.
        </p>
        <p>
          You may still be performing and feel burnt out. You may have already stopped
          and feel unmoored. You may be teaching, freelancing, injured, questioning,
          or sensing that the identity that carried you this far is beginning to change.
        </p>
        <p>
          You do not need a clear plan before entering the work. The capacity to work
          with uncertainty is part of what the process develops.
        </p>

        <div className="clearfix" />

        <p className="closingLine">
          The first step is a conversation. We'll explore whether the timing,
          structure, and spirit of the work are right.
        </p>

        <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
          Begin the conversation
        </a>

        <p style={{ marginTop: '28px' }}>
          <Link to="/" className="secondaryLink">Return to main page</Link>
        </p>
      </section>
    </main>
  );
}

function WaitlistPage() {
  useFadeIn();
  const visible = usePageTransition();
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.target);
    const res = await fetch('https://formspree.io/f/mjglgqar', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    setStatus(res.ok ? 'success' : 'error');
  };

  return (
    <main className={`site simplePage pageTransition ${visible ? 'pageVisible' : ''}`}>

      <section className="pageHero waitlistHero fadeIn">
        <div className="heroInner">
          <div className="heroText">
            <p className="eyebrow">Join the waitlist</p>
            <h1>Express your interest.</h1>
            <p className="pageLead">
              The first cohort begins in October 2026. Share a little about where
              you are and we'll be in touch.
            </p>
            <p className="waitlistNote">
              Waitlist members receive monthly study prompts and occasional dispatches
              as the first cohort takes shape — so the practice can begin before the cohort starts.
            </p>
          </div>
          <div
            className="heroImage"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0.03), rgba(0,0,0,0.18)), url('/Registration_Page.png')",
            }}
          />
        </div>
      </section>

      <section className="contentSection fadeIn">

        {status === 'success' ? (
          <div className="formSuccess">
            <p className="closingLine">Thank you — we'll be in touch.</p>
            <Link to="/" className="secondaryLink">Return to homepage</Link>
          </div>
        ) : (
          <form className="waitlistForm" onSubmit={handleSubmit}>
            <div className="formField">
              <label htmlFor="name">Full name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="formField">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" />
            </div>
            <div className="formField">
              <label htmlFor="transition">Where are you in your transition?</label>
              <textarea
                id="transition"
                name="transition"
                rows={5}
                required
                placeholder="Tell us a little about where you are and what's brought you here..."
              />
            </div>
            {status === 'error' && (
              <p className="formError">Something went wrong. Please try again or email us directly.</p>
            )}
            <button type="submit" className="formSubmit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Join the waitlist'}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}

function NotFoundPage() {
  const visible = usePageTransition();

  return (
    <main className={`site simplePage pageTransition ${visible ? 'pageVisible' : ''}`}>
      <section className="pageHero notFoundHero">
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
        <Link to="/" className="primaryCta">Return to homepage</Link>
      </section>
    </main>
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
        <Route path="/cohort" element={<CohortPage />} />
        <Route path="/action-examples" element={<ActionPage />} />
        <Route path="/facilitator" element={<FacilitatorPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
