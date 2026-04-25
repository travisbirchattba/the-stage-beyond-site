import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BookOpen,
  MessageCircle,
  ArrowUpRight,
  RefreshCw,
  User,
  Users
} from 'lucide-react';
import './styles.css';

function App() {
  return (
    <main className="site">
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">The Stage Beyond</p>
          <h1>The Stage<br />Beyond</h1>
          <p>A working community for dancers in transition</p>
          <div className="goldLine" />
        </div>
      </section>

      <section className="panel intro">
        <h2>Something is already shifting.</h2>
        <p>Your life is moving beyond performance—and asking something more of you.</p>
      </section>

      <section className="panel definition">
        <p>We work with small cohorts of dancers navigating transition—together.</p>
        <p>Through this, we develop a shared practice, shaped by each cohort.</p>
      </section>

      <section className="panel rhythm">
        <p className="rhythmLead">We move in a rhythm...</p>

        <div className="cycleWrapper">
        <svg width="500" height="500" viewBox="0 0 500 500">
  {/* Top-right curved arrow (from top to right) - counter-clockwise */}
  <path
    d="M 250 80 A 170 170 0 0 1 380 180"
    fill="none"
    stroke="#c9a96e"
    strokeWidth="1.5"
  />
  <path
    d="M 380 180 L 373 175 M 380 180 L 375 187"
    fill="none"
    stroke="#c9a96e"
    strokeWidth="1.5"
    strokeLinecap="round"
  />

  {/* Right-bottom curved arrow (from right to bottom) - counter-clockwise */}
  <path
    d="M 420 250 A 170 170 0 0 1 320 420"
    fill="none"
    stroke="#c9a96e"
    strokeWidth="1.5"
  />
  <path
    d="M 320 420 L 325 413 M 320 420 L 313 415"
    fill="none"
    stroke="#c9a96e"
    strokeWidth="1.5"
    strokeLinecap="round"
  />

  {/* Bottom-left curved arrow (from bottom to left) - counter-clockwise */}
  <path
    d="M 250 420 A 170 170 0 0 1 120 320"
    fill="none"
    stroke="#c9a96e"
    strokeWidth="1.5"
  />
  <path
    d="M 120 320 L 127 325 M 120 320 L 125 313"
    fill="none"
    stroke="#c9a96e"
    strokeWidth="1.5"
    strokeLinecap="round"
  />

  {/* Left-top curved arrow (from left to top) - counter-clockwise */}
  <path
    d="M 80 250 A 170 170 0 0 1 180 120"
    fill="none"
    stroke="#c9a96e"
    strokeWidth="1.5"
  />
  <path
    d="M 180 120 L 175 127 M 180 120 L 187 125"
    fill="none"
    stroke="#c9a96e"
    strokeWidth="1.5"
    strokeLinecap="round"
  />
</svg>

          <CycleStep className="top" icon={<BookOpen />} title="Study">
            We study content that expands how we understand ourselves and the world.
          </CycleStep>

          <CycleStep className="right" icon={<MessageCircle />} title="Consultation">
            We read our own reality and explore how the study content applies.
          </CycleStep>

          <CycleStep className="bottom" icon={<ArrowUpRight />} title="Action">
            We translate consultative decisions into practice.
          </CycleStep>

          <CycleStep className="left" icon={<RefreshCw />} title="Reflection">
            We reflect on what we learned through action to deepen our understanding and refine our practice.
          </CycleStep>
        </div>

        <p className="cycle">...a cycle of disciplined learning.</p>
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
        </div>

        <a href="mailto:hello@thestagebeyond.coach" className="learnMore">
          Start the first conversation
        </a>
      </section>
    </main>
  );
}

function CycleStep({ icon, title, children, className }) {
  return (
    <div className={`circleStep ${className}`}>
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
