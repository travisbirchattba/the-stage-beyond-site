function App() {
  return (
    <main className="site">

      {/* HERO */}
      <section className="hero">
        <div className="heroInner">
          <div className="heroText">
            <p className="eyebrow">The Stage Beyond</p>

            <h1>
              Your artistry was the beginning.<br />
              Your contribution is taking new forms.
            </h1>

            <p className="heroSubhead">
              A working community for dancers who are ready to explore how their
              artistry, discipline, and experience can contribute in new ways—
              through a structured process with peers.
            </p>

            <a href="mailto:hello@thestagebeyond.coach" className="primaryCta">
              Apply for the next consultative cycle
            </a>
          </div>

          <div className="heroImage" />
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statementSection">
        <p className="largeStatement">
          The group decides what to do. Then it does it.
        </p>
      </section>

      {/* WHAT THIS IS */}
      <section className="splitSection">
        <div>
          <p className="eyebrow">What this is</p>
          <h2>There is more to your practice than performance.</h2>
        </div>

        <div className="textStack">
          <p>
            You have already developed precision, awareness, and the ability to
            work as part of a unified whole.
          </p>

          <p>
            This is not about starting over. It is about working more deliberately
            with something that is already present.
          </p>

          <p>
            The Stage Beyond creates a structured environment where that capacity
            can be explored, tested, and applied in new contexts.
          </p>
        </div>
      </section>

      {/* REALITY */}
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
              The cohort makes a shared decision about what to do.
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

      {/* RHYTHM */}
      <section className="rhythmSection">
        <p className="eyebrow">How we work</p>
        <h2>A cycle of disciplined learning.</h2>

        <div className="cycleGrid">
          <CycleStep title="Study">
            We study material that expands how we understand ourselves,
            society, and the world.
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

      {/* PRINCIPLES */}
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

      {/* PURPOSE */}
      <section className="purpose">
        <p className="purposeLabel">The twofold purpose</p>

        <div className="purposeGrid">
          <div className="purposeBlock">
            <h3>Individual</h3>
            <p>
              Refining the inner discipline required to act with clarity and intention.
            </p>
          </div>

          <div className="plus">+</div>

          <div className="purposeBlock">
            <h3>Collective</h3>
            <p>
              Acting as a unified group in service of something beyond the self.
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
