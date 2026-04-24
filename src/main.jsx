import React from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, MessageCircle, ArrowUpRight, RefreshCw, User, Users } from 'lucide-react';
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

        <div className="cycleDiagram">
          <svg className="cycleSvg" viewBox="0 0 600 600" aria-hidden="true">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                <path d="M0,0 L10,5 L0,10 Z" />
              </marker>
            </defs>

            <path d="M300 95 A205 205 0 0 1 505 300" />
            <path d="M505 300 A205 205 0 0 1 300 505" />
            <path d="M300 505 A205 205 0 0 1 95 300" />
            <path d="M95 300 A205 205 0 0 1 300 95" />
          </svg>

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

function Step({ icon, title, children }) {
  return (
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
