import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="site">
      <section className="hero">
        <div className="heroInner">
          <div className="heroText">
            <p className="eyebrow">The Stage Beyond</p>

            <h1>
              Transition is not just about what comes next.<br />
              It’s about how you move forward—together.
            </h1>

            <p className="heroSubhead">
              A working community for dancers navigating transition through
              a structured process of consultation, action, and reflection—
              where personal development and meaningful contribution unfold together.
            </p>

            <a href="mailto:hello@thestagebeyond.coach" className="primaryCta">
              Start the first conversation
            </a>
          </div>

          <div className="heroImage" />
        </div>
      </section>

      <section className="statementSection">
        <p className="largeStatement">
          Transition becomes clearer when it is worked on together,
          in service of something beyond the self.
        </p>
      </section>

      <section className="splitSection">
        <div>
          <p className="eyebrow">What this is</p>
          <h2>Transition, reworked.</h2>
        </div>

        <div className="textStack">
          <p>
            Transition is often approached as an individual question:
            What do I want? What will I do next?
          </p>

          <p>
            This work begins from a different premise—that development of the
            individual and contribution to the world are not separate.
          </p>

          <p>
            When transition is approached collectively, and grounded in meaningful
            action, it becomes more coherent, more stable, and more connected to reality.
          </p>
        </div>
      </section>

      <section className="realitySection">
        <p className="eyebrow">What actually happens here</p>
        <h2>Each cohort works as a single group.</h2>

        <div className="realityGrid">
          <div>
            <span>01</span>
            <p>
              Through study and consultation, the group reads its own reality
              and identifies where its work is needed.
            </p>
          </div>

          <div>
            <span>02</span>
            <p>
              The cohort makes a shared decision about how it will act together.
            </p>
          </div>

          <div>
            <span>03</span>
            <p>
              That decision becomes a real, in-person act carried out together.
            </p>
          </div>

          <div>
            <span>04</span>
            <p>
              The group returns to reflect, learn, and refine what comes next.
            </p>
          </div>
        </div>

        <p className="smallStatement">
          No two cohorts are the same.
        </p>
      </section>

      <section className="twofoldSection">
        <p className="eyebrow">The twofold purpose</p>
        <h2>The work is inward and outward at the same time.</h2>

        <div className="textStack centered">
          <p>
            As the group acts together in service, each individual develops
            greater clarity, direction, and capacity.
          </p>

          <p>
            And as individuals grow, the quality of collective action deepens.
          </p>
        </div>
      </section>

      <section className="rhythmSection">
        <p className="eyebrow">How we work</p>
        <h2>A cycle of disciplined learning.</h2>

        <div className="cycleGrid">
          <CycleStep title="Study">
            We study material that expands how we understand ourselves, society,
            and the world.
          </CycleStep>

          <CycleStep title="Consultation">
            We read our own reality together and decide where our work is needed.
          </CycleStep>

          <CycleStep title="Action">
            The cohort carries out a shared decision as a real, in-person act.
          </CycleStep>

          <CycleStep title="Reflection">
            We learn from what unfolds and refine future consultation and action.
          </CycleStep>
        </div>
      </section>

      <section className="principlesSection">
        <div className="principlesIntro">
          <p className="eyebrow">The art of consultation</p>
          <h2>How the group arrives at shared action.</h2>
        </div>

        <div className="principlesGrid">
          <Principle title="Detachment">
            Ideas are offered to the group, not held as personal positions.
          </Principle>

          <Principle title="Search for truth">
            The focus is on what is real and needed.
          </Principle>

          <Principle title="Unity of aim">
            The group moves toward a single shared direction.
          </Principle>

          <Principle title="Service">
            The work is carried out for the benefit of others.
          </Principle>
        </div>
      </section>

      <section className="purpose">
        <p className="purposeLabel">The invitation</p>

        <div className="purposeGrid">
          <div className="purposeBlock">
            <h3>Individual</h3>
            <p>
              Developing clarity and capacity through a structured process with peers.
            </p>
          </div>

          <div className="plus">+</div>

          <div className="purposeBlock">
            <h3>Collective</h3>
            <p>
              Acting together in ways that contribute meaningfully beyond the individual.
            </p>
          </div>
        </div>

        <a href="mailto:hello@thestagebeyond.coach" className="learnMore">
          Start the first conversation
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

function Principle({ title, children }) {
  return (
    <div className="principle">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
