import React from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, MessageCircle, ArrowUpRight, RefreshCw, User, Users } from 'lucide-react';
import './styles.css';

function TheStageBeyond() {
  return (
    <div className="page">

      <section className="hero">
        <p className="eyebrow">The Stage Beyond</p>

        <h1>
          A peer-based development path for artists and creative leaders ready to grow beyond the stage.
        </h1>

        <p className="subtitle">
          A guided learning group where people build capacity, deepen their practice,
          and grow alongside others on a similar path.
        </p>

        <a href="#apply" className="button">Start the first conversation</a>
      </section>

      <section className="section">
        <h2>What this is</h2>
        <p>
          There are similarities with coaching, but this is different.
          The focus is active learning with peers, guided by someone more experienced
          who supports the development of each participant.
        </p>
      </section>

      <section className="section alt">
        <h2>How it works</h2>
        <p>
          Small groups meet regularly, work on real challenges,
          practice new ways of thinking and acting, and gradually
          build the capacity to support others.
        </p>
      </section>

      <section className="section">
        <h2>Who it’s for</h2>
        <p>
          People open to active learning with peers — willing to bring real questions,
          try things, reflect honestly, and grow in community.
        </p>
      </section>

      <section id="apply" className="section cta">
        <h2>Start with a conversation</h2>
        <p>The first step is a simple conversation to see if it’s a fit.</p>
        <a href="mailto:your-email@example.com" className="button">Contact me</a>
      </section>

    </div>
  )
}

function TheStageBeyond() {
  return (
    <main className="site">
      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroImage" />
        <div className="heroContent">
          <h1>The Stage<br />Beyond</h1>
          <p>A working community<br />for dancers in transition</p>
          <div className="goldLine" />
        </div>
      </section>

      <section className="mainGrid">
        <div className="intro panel">
          <h2>Something is already shifting.</h2>
          <p>Your life is moving beyond performance—<br />and asking something more of you.</p>
        </div>

        <div className="definition panel">
          <p>We work with small cohorts of dancers navigating transition—together.</p>
          <p>Through this, we develop a shared practice, shaped by each cohort.</p>
        </div>

        <div className="rhythm panel">
          <p className="rhythmLead">We move in a rhythm...</p>
          <div className="steps">
            <Step icon={<BookOpen />} title="Study">
              We study content that expands how we understand ourselves and the world.
            </Step>
            <Step icon={<MessageCircle />} title="Consultation">
              We read our own reality and explore how the study content applies.
            </Step>
            <Step icon={<ArrowUpRight />} title="Action">
              We translate consultative decisions into practice.
            </Step>
            <Step icon={<RefreshCw />} title="Reflection">
              We reflect on what we learned through action to deepen our understanding and refine our practice.
            </Step>
          </div>
          <p className="cycle">...a cycle of disciplined learning.</p>
        </div>
      </section>

      <section className="purpose">
        <p className="purposeLabel">The twofold purpose</p>
        <div className="purposeGrid">
          <Purpose icon={<User />} title="Individual">
            Building capacity to contribute meaningfully to the world beyond dance.
          </Purpose>

          <div className="plus">+</div>

          <Purpose icon={<Users />} title="Society">
            Channeling increased capacity towards meaningful contribution.
          </Purpose>

          <a href="mailto:hello@thestagebeyond.coach" className="learnMore">Learn more</a>
        </div>
      </section>
    </main>
  );
}

function Step({ icon, title, children }) {
  return (
    <div className="step">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Purpose({ icon, title, children }) {
  return (
    <div className="purposeBlock">
      <div className="purposeIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
