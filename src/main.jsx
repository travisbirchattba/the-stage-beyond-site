import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const calendarLink = 'https://calendar.app.google/X6KBMhZVmxGofHyF7';

function App() {
  return (
    <main className="site">
      <section className="hero">
        <div className="heroInner">
          <div className="heroText">
            <p className="eyebrow">The Stage Beyond</p>

            <h1>Transition, worked through together.</h1>

            <p className="heroSubhead">
              A structured peer process for dancers exploring life, practice,
              and contribution beyond performance.
            </p>

            <a
              href={calendarLink}
              className="primaryCta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a call to learn more
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
            Transition is often treated as an individual question: What do I want?
            What will I do next?
          </p>

          <p>
            The Stage Beyond takes a different approach. We work through transition
            in a small peer group, where personal development and contribution to
            others are held together.
          </p>

          <p>
            This is not coaching, therapy, or a course. It is a structured process
            of study, consultation, action, and reflection.
          </p>
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
            <p>
              Developing clarity, capacity, and direction beyond performance.
            </p>
          </div>

          <div className="plus">+</div>

          <div className="purposeBlock">
            <h3>Collective</h3>
            <p>
              Acting together in ways that contribute beyond the self.
            </p>
          </div>
        </div>

        <a
          href={calendarLink}
          className="learnMore"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a call to learn more
        </a>
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
