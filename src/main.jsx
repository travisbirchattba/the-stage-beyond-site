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
        <div className="heroInner">
          <div className="heroText">
            <p className="eyebrow">The Stage Beyond</p>
            <h1>The Stage<br />Beyond</h1>
            <p className="heroSubhead">
              A working community for dancers in transition.
            </p>
          </div>

          <div className="heroImage" aria-label="A small group of dancers in conversation" />
        </div>
      </section>

      <section className="introSection">
        <div className="introStatement">
          <h2>Something is already shifting.</h2>
          <p>
            Your life is moving beyond performance—and asking something more of you.
          </p>
        </div>

        <div className="definitionBlock">
          <p>We work with small cohorts of dancers navigating transition—together.</p>
          <p>Through this, we develop a shared practice, shaped by each cohort.</p>
        </div>
      </section>

      <section className="rhythmSection">
        <p className="eyebrow">How we work</p>
        <h2>We move in a rhythm.</h2>

        <div className="cycleGraphic">
          <svg className="cycleArrows" viewBox="0 0 560 560" aria-hidden="true">
            <defs>
              <marker
                id="arrow"
                markerWidth="9"
                markerHeight="9"
                refX="7"
                refY="4.5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L9,4.5 L0,9" fill="none" stroke="#b98b3f" strokeWidth="1.4" />
              </marker>
            </defs>

            <path d="M285 70 A210 210 0 0 1 490 275" />
            <path d="M490 285 A210 210 0 0 1 285 490" />
            <path d="M275 490 A210 210 0 0 1 70 285" />
            <path d="M70 275 A210 210 0 0 1 275 70" />
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

          <div className="cycleCenter">
            A cycle of<br />disciplined learning.
          </div>
        </div>
      </section>

      <section className="purpose">
        <p className="purposeLabel">The twofold purpose</p>

        <div className="purposeGrid">
          <Purpose icon={<User />} title="Individual">
            Building capacity to contribute meaningfully to the world beyond dance.
          </Purpose>

          <div className="plus">+</div>

          <Purpose icon={<Users />} title="Collective">
            Channeling increased capacity toward meaningful contribution.
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
