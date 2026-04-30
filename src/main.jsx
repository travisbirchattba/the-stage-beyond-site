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
  Your artistry was the beginning.<br />
  Your contribution is taking new forms.
</h1>       <p className="heroSubhead">
              A creative incubator where dancers consult, decide, and act together
              for the betterment of society.
            </p>
            <a href="mailto:hello@thestagebeyond.coach" className="learnMore">
              Apply for the next consultative cycle
            </a>
          </div>
          <div className="heroImage" />
        </div>
      </section>

      <section className="introSection">
        <div className="introStatement">
          <h2>The stage ends. The discipline remains.</h2>
          <p>
            You have spent years developing precision, awareness, and the ability to
            work as part of a unified whole.
          </p>
        </div>

        <div className="definitionBlock">
          <p>
            The Stage Beyond creates a new context where that discipline can be
            applied to real questions, real communities, and meaningful contribution.
          </p>
        </div>
      </section>

      <section className="rhythmSection">
        <p className="eyebrow">How we work</p>
        <h2>A cycle of disciplined learning.</h2>

        <div className="simpleCycle">
          <div><h3>Study</h3><p>Expanding how we understand ourselves, society, and the world.</p></div>
          <div><h3>Consultation</h3><p>Reading reality together and identifying where our work is needed.</p></div>
          <div><h3>Action</h3><p>Executing a collective, in-person act of service in the community.</p></div>
          <div><h3>Reflection</h3><p>Learning from what unfolds to refine future action.</p></div>
        </div>
      </section>

      <section className="principles">
        <p className="eyebrow">The art of consultation</p>
        <h2>How we arrive at shared action.</h2>

        <div className="principlesGrid">
          <div><h3>Detachment</h3><p>Ideas are offered to the group, not held as personal positions.</p></div>
          <div><h3>Search for truth</h3><p>We focus on what is real and needed, not what is preferred.</p></div>
          <div><h3>Unity of aim</h3><p>The group moves toward a single, shared direction.</p></div>
          <div><h3>Betterment of society</h3><p>All decisions are grounded in contribution to the common good.</p></div>
        </div>
      </section>

      <section className="purpose">
        <p className="purposeLabel">The twofold purpose</p>

        <div className="purposeGrid">
          <div className="purposeBlock">
            <h3>Individual</h3>
            <p>Refining the inner discipline and clarity required to lead beyond performance.</p>
          </div>

          <div className="plus">+</div>

          <div className="purposeBlock">
            <h3>Collective</h3>
            <p>Acting as a unified working community contributing to the betterment of society.</p>
          </div>
        </div>

        <a href="mailto:hello@thestagebeyond.coach" className="learnMore">
          Apply for the next consultative cycle
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
