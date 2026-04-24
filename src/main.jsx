import React from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, MessageCircle, ArrowUpRight, RefreshCw, User, Users } from 'lucide-react';
import './styles.css';

function App() {
  return <TheStageBeyond />;
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
          <p>Not fully clear.<br />But no longer what it was.</p>
          <p>Your life is opening beyond performance—<br />and asking something more of you.</p>
        </div>

        <div className="definition panel">
          <p>A small, ongoing group of dancers working through transition—together.</p>
          <p>A shared practice, shaped by the people participating in it.</p>
        </div>

        <div className="rhythm panel">
          <p className="rhythmLead">We move in a rhythm:</p>
          <div className="steps">
            <Step icon={<BookOpen />} title="Study">
              We study content that expands how we understand ourselves and the world.
            </Step>
            <Step icon={<MessageCircle />} title="Consultation">
              Together, we read our own reality and explore how it applies.
            </Step>
            <Step icon={<ArrowUpRight />} title="Action">
              Translating consultative decisions into practice.
            </Step>
            <Step icon={<RefreshCw />} title="Reflection">
              Reflecting on what is learned through action to deepen understanding and refine consultation.
            </Step>
          </div>
          <p className="cycle">A cycle of disciplined learning.</p>
        </div>
      </section>

      <section className="purpose">
        <p className="purposeLabel">The twofold purpose</p>
        <div className="purposeGrid">
          <Purpose icon={<User />} title="Individual">
            Understanding yourself more fully—what you care about, what you’re capable of, and what you want to build.
          </Purpose>

          <div className="plus">+</div>

          <Purpose icon={<Users />} title="Collective">
            Developing the capacity to contribute, collaborate, and take part in shaping the world around us.
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
