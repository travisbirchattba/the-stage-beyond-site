import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import './styles.css';

const calendarLink = 'https://calendar.app.google/yzkx5MPNAcY7H2X29';

const homeSteps = [
  {
    title: 'Study',
    body: 'We work with material that helps us see ourselves and our situation differently.',
  },
  {
    title: '',
    body: 'Together, we make sense of what we are seeing and decide what to act on.',
  },
  {
    title: 'Social Action',
    body: 'We carry out a shared decision in ways that contribute beyond the group.',
  },
  {
    title: 'Reflection',
    body: 'We return to what happened and learn from what doing made visible.',
  },
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
    return () => {
      document.body.style.overflow = '';
    };
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
            <NavLink to="/approach" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>
              Approach
            </NavLink>
            <NavLink to="/cohort" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>
              Cohorts
            </NavLink>
            <NavLink to="/action-examples" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>
              Social Action
            </NavLink>
            <NavLink to="/facilitator" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>
              Facilitator
            </NavLink>
            <NavLink to="/waitlist" className={({ isActive }) => `navLink ${isActive ? 'navLinkActive' : ''}`}>
              Join waitlist
            </NavLink>
          </div>

          <Link to="/apply" className="navCta">
            Begin the conversation
          </Link>

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
          <NavLink to="/approach" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>
            Approach
          </NavLink>
          <NavLink to="/cohort" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>
            Cohorts
          </NavLink>
          <NavLink to="/action-examples" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>
            Social Action
          </NavLink>
          <NavLink to="/facilitator" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>
            Facilitator
          </NavLink>
          <NavLink to="/apply" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>
            Is this for me?
          </NavLink>
          <NavLink to="/waitlist" className={({ isActive }) => `mobileNavLink ${isActive ? 'mobileNavLinkActive' : ''}`}>
            Join waitlist
          </NavLink>

          <Link to="/apply" className="mobileNavCta">
            Begin the conversation
          </Link>
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
          <Link to="/action-examples" className="footerLink">Social Action</Link>
          <Link to="/facilitator" className="footerLink">Facilitator</Link>
          <Link to="/apply" className="footerLink">Is this for me?</Link>
          <Link to="/waitlist" className="footerLink">Join waitlist</Link>
        </nav>

        <Link to="/apply" className="footerCta">
          Begin the conversation
        </Link>

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
      <section className="hero fadeIn">
        <div className="heroInner">
          <div className="heroText">
            <p className="eyebrow">A working community for dancers</p>

            <h1>Your life is opening beyond performance.</h1>

            <p className="heroSubhead">
              A working community for dancers navigating what comes next.
            </p>

            <p className="heroHint">
              Small cohorts. A shared rhythm of study, dialogue, action and reflection.
            </p>

            <p className="heroPlain">
  A small group of dancers meets regularly over several months to study,
  reflect, take action together, and work through transition collectively.
</p>

            <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
              Begin the conversation
            </a>
          </div>

          <div className="heroImage" />
        </div>
      </section>

      <section className="splitSection fadeIn">
        <div>
          <p className="eyebrow">What this is</p>
          <h2>Something is already shifting.</h2>
        </div>

        <div className="textStack">
          <p>
            You can feel it in how you relate to your work. In the questions that don’t go away.
            In the sense that what brought you here may not carry you forward.
          </p>

          <p>
            Most dancers navigate this quietly — on their own, or in fragments. Piecing together
            a next step without a place to really work it through.
          </p>

          <p>
            The Stage Beyond exists to make that process shared, visible, and something you can actively engage.
          </p>

          <Link to="/approach" className="secondaryLink">
            Learn how the work is structured
          </Link>
        </div>
      </section>

      <section className="fitPreview fadeIn">
        <p className="eyebrow">Is this familiar?</p>
        <h2>You may be in the right place if...</h2>

        <div className="fitPreviewGrid">
          <p>You are still performing, but something feels strained or unsustainable.</p>
          <p>You have stopped performing and feel unmoored.</p>
          <p>You are teaching, freelancing, injured, questioning, or sensing that your identity is changing.</p>
        </div>

        <Link to="/apply" className="secondaryLink">
          See if this is a fit
        </Link>
      </section>

      <section className="rhythmSection fadeIn">
        <p className="eyebrow">How the work takes shape</p>

        <h2>We move in a rhythm.</h2>

        <p className="rhythmIntro">
          Each cohort returns to the same cycle: study what opens new perspective,
          consult together, take  in practice, and reflect on what is learned by doing.
        </p>

        <div className="cycleGrid">
          {homeSteps.map((step) => (
            <CycleStep key={step.title} title={step.title}>
              {step.body}
            </CycleStep>
          ))}
        </div>
      </section>

      <section className="purpose fadeIn">
        <p className="purposeLabel">What the work develops</p>

        <div className="purposeGrid">
          <div className="purposeBlock">
            <h3>Personal Capacity</h3>
            <p>Developing clarity, resilience, and the ability to engage transition deliberately.</p>
          </div>

          <div className="plus">+</div>

          <div className="purposeBlock">
            <h3>Social Action</h3>
            <p>Building the capacity to act together in ways that contribute beyond the self.</p>
          </div>
        </div>

        <div className="fitBlock">
          <p className="fitLine">
            For dancers who feel that something is shifting — and don’t want to navigate it alone.
          </p>

          <p className="fitLine">
            For dancers who are ready to work with that shift, alongside others, in a more deliberate way.
          </p>

          <p className="fitLine">
            For dancers who want transition to become socially meaningful, not only personally manageable.
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
          <img src="/Approach.png" alt="Group working together" />
        </div>

        <p>
          Transition is often approached as a personal problem to solve. Here, it is worked on collectively.
        </p>

        <p>
          The group becomes a working unit — reading its own reality, making decisions together,
          and carrying them out in practice.
        </p>

        <div className="clearfix" />

        <h2>The work moves in a rhythm.</h2>

        <p className="rhythmIntro">
          Not a sequence to follow once, but a cycle the group returns to.
        </p>

        <p>
          Social action may be small at first: a conversation, a shared inquiry, a workshop,
          a mentoring experiment, or a contribution the cohort decides is worth testing.
        </p>

        <div className="cycleImageWrap">
          <img
            src="/rhythm-cycle.png"
            alt="The Stage Beyond working cycle: Study, , Social Action, Reflection"
          />
        </div>

        <h2>What develops over time</h2>

        <p>
          What develops is not only individual clarity, but the capacity to think,
          decide, and act together — in a way that holds under real conditions.
        </p>

        <p>
          Transition becomes less about finding an answer, and more about participating
          in something that is being worked out collectively.
        </p>

        <p>
  Real conditions might include financial pressure, injury, isolation,
  uncertainty about identity, or the practical realities of building a life
  beyond performance.
</p>

        <p>
          Acting together in the world changes how transition itself is experienced.
          People begin to encounter themselves less as isolated individuals trying to
          solve a problem, and more as participants in shared life.
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

        <p>
  This is not networking, peer accountability, or professional development in the usual sense.
  The emphasis is on collective learning, shared practice, and sustained engagement with real questions.
</p>

        <p className="closingLine">
          This is not a place to arrive at answers. It is a place to develop the capacity
          to work with real questions — in practice, with others, over time.
        </p>

        <Link to="/apply" className="primaryCta">
          See if this is a fit
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

        <h2>How sessions work</h2>

        <p>
          In practical terms, the cohort meets regularly over three months,
          with a mix of group sessions, reflection between sessions, and shared
          social action decided by the group.
        </p>

        <p>
          Expected time commitment: weekly group dialogues of approximately
          90 minutes, with light reflection or action between sessions. Some
          cohorts may also include longer working sessions depending on what
          the group decides to undertake.
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
          Founder & Lead Facilitator, The Stage Beyond.
          Artist and facilitator working at the intersection of performance,
          learning, and collective development.
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

        <p className="facilitatorNote">
  I am holding this space because I know how much can remain unnamed in the move
  beyond performance — and because I believe dancers have more to contribute than
  a private reinvention carried out alone.
</p>
        <p>
          Travis leads group-based processes focused on how people engage real
          questions, act, and learn together. The Stage Beyond brings together
          a background in the performing arts with over a decade of facilitation
          practice — returning these learnings to the context of dancer transition.
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
          engage complex questions and act collectively — designing structured
          approaches to learning grounded in cycles of reflection, dialogue,
          and social action.
        </p>

        <p>
          Travis holds several professional certifications in leadership,
          organizational and team consulting, training, and coaching.
        </p>

        <h2>The Stage Beyond</h2>

        <p>
          Founded in 2026, The Stage Beyond is a practice-based environment for
          dancers navigating transition beyond performance. It works through
          structured cycles of study, dialogue, action and reflection —
          emphasizing collective learning and capacity-building, with participants
          increasingly taking up the work themselves.
        </p>

        <p className="closingLine">
          The work is grounded in the belief that transition, worked on
          collectively, becomes something more than a personal problem to solve.
        </p>

        <a href={calendarLink} className="primaryCta" target="_blank" rel="noopener noreferrer">
          Begin the conversation
        </a>
      </section>
    </main>
  );
}

function SocialActionPage() {
  useFadeIn();
  const visible = usePageTransition();

  const socialActions = [
    {
      title: 'Dance Programs for Children & Youth in Underserved Communities',
      description:
        'Cohort members design and deliver movement-based programs for children and youth in communities with limited access to the arts. This is not performance outreach — it is sustained, relational work that requires listening, adapting, and showing up consistently over time.',
      image: '/project-children.png',
    },
    {
      title: 'Tutoring & Mentoring Support',
      description:
        'Drawing on the discipline and focus developed through years of training, cohort members offer academic tutoring or personal mentoring to young people who benefit from patient, skilled adult presence. The work builds relationships as much as it builds skills.',
      image: '/project-tutoring.png',
    },
    {
      title: 'Collaborative Outreach Within the Dance Community',
      description:
        'Projects that strengthen connection across the dance community — between studios, generations, disciplines, or institutions. This might take the form of shared workshops, open rehearsals, skill exchanges, or initiatives that address gaps the community itself has identified.',
      image: '/project-outreach.png',
    },
    {
      title: 'Contributing to Wider Society',
      description:
        'Cohorts may undertake projects that bring their collective capacity to bear on needs outside the dance world entirely — partnering with local organizations, responding to community-identified needs, or initiating something that reflects what the group has learned to do together.',
      image: '/project-society.png',
    },
  ];

  return (
    <main className={`site simplePage pageTransition ${visible ? 'pageVisible' : ''}`}>
      <section className="pageHero fadeIn">
        <p className="eyebrow">Social Action</p>
        <h1>What social action can look like.</h1>
        <p className="pageLead">
          Social action is where the cohort tests what it is learning through real,
          shared contribution beyond the group.
        </p>
      </section>

      <section className="contentSection fadeIn">
        <p>
          Social action is not an assignment, a performance outcome, or a volunteer requirement.
          It is a shared act the cohort chooses and carries out in response to what it is learning.
        </p>

        <p>
          In this context, social action does not mean activism or charity by default.
          It means taking what the cohort is learning and testing it through a concrete
          contribution in relationship with others.
        </p>

        <p>
          It may begin modestly: a mentoring experiment, a conversation series, a workshop,
          a community partnership, or another concrete contribution shaped by the group.
        </p>

        <p>
  A shared decision might be as simple as hosting a conversation with younger dancers,
  designing a short workshop, interviewing people in the field, testing a mentoring
  format, or partnering with a local organization on a small contribution.
</p>
        
        <p>
          These are examples of potential social action — not a fixed menu. What a cohort
          undertakes will emerge from its dialogue, its capacity, and the reality it
          finds itself in.
        </p>

        <div className="projectsGrid">
          {socialActions.map((project) => (
            <div className="projectCard" key={project.title}>
              {project.image && (
                <img src={project.image} alt={project.title} className="projectCardImage" />
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        <p className="closingLine">
          The point is not to complete a project. It is to develop the capacity
          to act together — and to discover what that makes possible.
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
          The Stage Beyond is for dancers who are ready to engage actively with peers,
          not simply receive advice.
        </p>
      </section>

      <section className="contentSection fadeIn">
        <div className="pagePhoto">
          <img src="/Fit.png" alt="Group in discussion" />
        </div>

        <h2>Who this is for</h2>

        <p>
          This is for dancers from a range of backgrounds — ballet, contemporary,
          commercial, freelance, company, independent, teaching, choreographic,
          or interdisciplinary practice.
        </p>

        <p>
          What matters most is not a particular career path, but a readiness to
          work seriously with transition alongside others.
        </p>

        <p>
          You may still be performing and feel burnt out. You may have already stopped
          and feel unmoored. You may be teaching, freelancing, injured, questioning,
          or sensing that the identity that carried you this far is beginning to change.
        </p>

        <h2>This may be a fit if you are ready to:</h2>

        <ul className="structureList">
          <li>work with transition in a structured way</li>
          <li>engage seriously with peers</li>
          <li>participate in dialogue, social action, and reflection</li>
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
          Begin the conversation
        </a>

        <p>
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
              The first cohort begins in October 2026. If you'd like to be
              considered, share a little about where you are and we'll be in touch.
            </p>

            <p className="waitlistNote">
              Join the waitlist to receive updates, study prompts, and occasional
              dispatches as the first cohort takes shape.
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
        <h2>What happens next</h2>

        <ul className="structureList">
<li>You’ll receive monthly reflections and occasional study prompts so the practice can begin before the cohort starts.</li>          <li>When cohort planning begins, we’ll invite interested dancers into a conversation about fit.</li>
        </ul>

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
              <p className="formError">
                Something went wrong. Please try again or email us directly.
              </p>
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/cohort" element={<CohortPage />} />
        <Route path="/action-examples" element={<SocialActionPage />} />
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
