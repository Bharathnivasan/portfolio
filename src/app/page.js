export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
      <div className="absolute inset-0 -z-10 opacity-60 blur-3xl filter">
        <div className="absolute -top-24 left-12 h-80 w-80 rounded-full bg-indigo-700/30" />
        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-cyan-500/20" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 py-16 md:px-10 lg:px-16">
        {/* Hero */}
        <section className="grid gap-12 md:grid-cols-[3fr_2fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
              Data Analytics Portfolio
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bharathnivasan J
            </h1>
            <p className="text-lg font-medium text-indigo-100">
              Aspiring Data Analytics | Data Scientist  & Machine Learning 
            </p>
            <p className="max-w-xl text-base leading-relaxed text-slate-200">
              Analytical and detail-oriented data analyst skilled in Python,
              SQL, Power BI, Tableau, and data modeling. I transform large
              datasets into dashboards, predictive models, and insights that
              drive smarter, faster decisions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="flex items-center justify-center rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                Contact Me
              </a>
              <a
                href="\Bharathnivasan_Data_Analyst.pdf"
                className="flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-cyan-200 backdrop-blur transition hover:border-cyan-300 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Download Resume
              </a>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 text-sm text-slate-200">
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                Python
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                SQL
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                Power BI
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                Tableau
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2">
                Excel
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Analytics Snapshot
            </h3>
            <div className="mt-6 space-y-6 text-sm text-slate-100">
              <div className="flex justify-between rounded-2xl bg-white/10 px-4 py-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-cyan-200">
                    Experience
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Entry Level
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-cyan-200">
                    Focus
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Analytics & BI
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-widest text-cyan-200">
                  Focus Areas
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-100">
                  <li>Predictive modeling & feature engineering</li>
                  <li>Interactive Power BI dashboard design</li>
                  <li>ETL automation & data quality frameworks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white">About</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-200">
              I am recently completed my Master&apos;s in Applied Statistics & Data
              Analytics while partnering with teams to ship data-enabled
              solutions. My philosophy is simple: start with clean, trusted
              data; apply repeatable analytical practices; and tell stories that
              resonate with decision makers. I enjoy building pipelines,
              dashboards, and ML workflows that make analytics accessible across
              product, marketing, and operations teams.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
              Highlights
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-100">
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Engineered hybrid XGBoost + GPR model for accurate house price
                forecasting and automated feature pipelines.
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Delivered Power BI dashboards to monitor Instagram reach,
                sentiment, and engagement KPIs in real time.
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                Applied statistical modeling to health datasets to surface
                trends in long-term CHD risk factors.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-white">Skills</h2>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
              Core Capabilities
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">
                Data Analysis
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>Exploratory & predictive analytics</li>
                <li>ETL & data cleansing pipelines</li>
                <li>Statistical hypothesis testing</li>
                <li>Business KPI reporting</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">
                Visualization Tools
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>Power BI (DAX, Power Query)</li>
                <li>Tableau & Tableau Prep</li>
                <li>Excel dashboards & Power Pivot</li>
                <li>Matplotlib & Seaborn</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">Programming</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>Python (pandas, NumPy, scikit-learn)</li>
                <li>SQL (MySQL) & R programming</li>
                <li>ETL orchestration & automation</li>
                <li>Azure & AWS fundamentals</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">Soft Skills</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>Stakeholder collaboration</li>
                <li>Business communication</li>
                <li>Data storytelling</li>
                <li>Adaptable & growth mindset</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-white">Projects</h2>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
              Selected Work
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-widest text-cyan-200">
                Predictive Analytics
                <span className="rounded-full border border-cyan-200/40 px-3 py-1 text-[0.75rem]">
                  Python & Power BI
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Hybrid House Price Forecasting
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                Built a blended XGBoost and Gaussian Process Regression pipeline
                with automated feature engineering to forecast housing prices
                and surface KPIs to stakeholders.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-cyan-200">
                Tools: Python, scikit-learn, Power BI, MySQL
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="https://github.com/Bharathnivasan/portfolio.git"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
                >
                  View Project
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
            <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-widest text-cyan-200">
                Marketing Intelligence
                <span className="rounded-full border border-cyan-200/40 px-3 py-1 text-[0.75rem]">
                  Python & Power BI
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Instagram Engagement Analytics
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                Consolidated Home, Explore, and Hashtag data streams to analyze
                reach, sentiment, and posting cadence, and delivered dashboards
                that informed content strategy.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-cyan-200">
                Tools: Python, pandas, Power BI, Matplotlib
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="https://github.com/example/bharath-instagram-analytics"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
                >
                  View Project
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
            <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-widest text-cyan-200">
                Health Analytics
                <span className="rounded-full border border-cyan-200/40 px-3 py-1 text-[0.75rem]">
                  SPSS & Python
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                CHD Risk Indicator Modeling
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                Applied regression and PCA to a decade-long dataset on coronary
                heart disease, highlighting risk drivers and visualizing
                outcomes to guide health interventions.
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-cyan-200">
                Tools: SPSS, Python, Seaborn, Excel
              </p>
              <div className="mt-auto pt-6">
                <a
                  href="https://github.com/example/bharath-chd-risk"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
                >
                  View Project
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Case Studies */}
        <section className="space-y-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-white">Case Studies</h2>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
              Deep Dives
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-cyan-200">
                Real Estate Analytics
                <span className="rounded-full border border-cyan-200/40 px-3 py-1 text-[0.75rem]">
                  Python • Power BI
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Hybrid House Price Prediction Engine
              </h3>
              <div className="space-y-4 text-sm text-slate-200">
                <p>
                  <strong className="text-white">Problem:</strong> Real estate
                  teams needed reliable price forecasts to respond quickly to
                  market swings.
                </p>
                <p>
                  <strong className="text-white">Approach:</strong> Built
                  automated preprocessing, engineered market signals, and
                  blended XGBoost with Gaussian Process Regression for
                  calibrated predictions.
                </p>
                <p>
                  <strong className="text-white">Insights:</strong> Revealed
                  location-specific feature importance and surfaced
                  scenario-based dashboards for regional planning.
                </p>
                <p>
                  <strong className="text-white">Outcome:</strong> Reduced
                  forecast error and accelerated adoption of data-driven pricing
                  discussions across stakeholders.
                </p>
              </div>
            </article>
            <article className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-cyan-200">
                Social Media Intelligence
                <span className="rounded-full border border-cyan-200/40 px-3 py-1 text-[0.75rem]">
                  Python • Power BI
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Instagram Engagement Optimization
              </h3>
              <div className="space-y-4 text-sm text-slate-200">
                <p>
                  <strong className="text-white">Problem:</strong> Marketing
                  teams lacked clarity on which formats and posting windows
                  maximized reach.
                </p>
                <p>
                  <strong className="text-white">Approach:</strong> Unified
                  multi-source datasets, engineered sentiment metrics, and
                  visualized performance segments through Power BI.
                </p>
                <p>
                  <strong className="text-white">Insights:</strong> Identified
                  high-performing content archetypes and optimal posting
                  cadence, and quantified sentiment impact on engagement.
                </p>
                <p>
                  <strong className="text-white">Outcome:</strong> Equipped
                  campaign teams to refine scheduling and creative strategy,
                  boosting engagement KPIs within the first month of rollout.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-white">
              Certifications
            </h2>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
              Continuous Learning
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <a href="\Certificates\LinkedIn\ETL in Python and SQL.pdf">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sm font-semibold uppercase text-slate-900">
                  ETL
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    ETL for Python & SQL
                  </p>
                  <p className="text-xs text-slate-200">
                    LinkedIn Learning
                  </p>
                </div>
              </div>
            </a>
            <a href="\ETL in Python and SQL.pdf">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sm font-semibold uppercase text-slate-900">
                  AI
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Azure AI Fundamentals
                  </p>
                  <p className="text-xs text-slate-200">
                    Microsoft Certified • Ignite
                  </p>
                </div>
              </div>
            </a>
            <a href="\ETL in Python and SQL.pdf">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sm font-semibold uppercase text-slate-900">
                  SQL
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    SQL for Data Analysis
                  </p>
                  <p className="text-xs text-slate-200">
                    Udemy Certification
                  </p>
                </div>
              </div>
            </a>
            <a href="/Certificates/TCS iON/DataPlus Overview.pdf">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sm font-semibold uppercase text-slate-900">
                  TCS
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    DataPlus Overview Course
                  </p>
                  <p className="text-xs text-slate-200">
                    TCS MasterCraft Academy
                  </p>
                </div>
              </div>
            </a>
            <a href="\ETL in Python and SQL.pdf">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sm font-semibold uppercase text-slate-900">
                  SF
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Salesforce Associate
                  </p>
                  <p className="text-xs text-slate-200">
                    SmartInternz • Trailhead Program
                  </p>
                </div>
              </div>
            </a>
            <a href="\Certificates\Coursera\How to Use Lookup Reference Math and Text Functions in Excel.pdf">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sm font-semibold uppercase text-slate-900">
                  Excel
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    How to Use Lookup Reference Math and Text Functions in Excel
                  </p>
                  <p className="text-xs text-slate-200">
                    Coursera
                  </p>
                </div>
              </div>
            </a>
            <a href="\Certificates\Coursera\Using Basic Formulas and Functions in Microsoft.pdf">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sm font-semibold uppercase text-slate-900">
                  Excel
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Using Basic Formulas and Functions in Microsoft Excel
                  </p>
                  <p className="text-xs text-slate-200">
                    Coursera
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>
        {/* Work shops */}
        <section className="space-y-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-white">Work shops</h2>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
              Continuous Learning
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <a href="\Certificates\TechIT24\Data Analytics Using Power BI.png">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sm font-semibold uppercase text-slate-900">
                  BI
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Data Analytics Using Power BI Workshop
                  </p>
                  <p className="text-xs text-slate-200">
                    Tech Tip 24
                  </p>
                </div>
              </div>
            </a>
            <a href="\Certificates\Jobaaj learning\Power BI(Jobaajlearnings-Certificate).jpg">
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sm font-semibold uppercase text-slate-900">
                BI
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Power BI Workshop
                </p>
                <p className="text-xs text-slate-200">Jobaaj Learnings
                </p>
              </div>
            </div>
            </a>
            <a href="Certificates\Coding Ninja\Sports Analyst.jpg">
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sm font-semibold uppercase text-slate-900">
                SA
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  JioHotstar Sports Analytics using IPL Dataset
                </p>
                <p className="text-xs text-slate-200">
                  codingninjas
                </p>
              </div>
            </div>
            </a>
            <a href="\Certificates\Newton\certificate for SQL.pdf">
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-sm font-semibold uppercase text-slate-900">
                SQL
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  4 Day SQL Basics Course
                </p>
                <p className="text-xs text-slate-200">
                  Newton School
                </p>
              </div>
            </div>
            </a>
          </div>
        </section>

        {/* Education */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-white">Education</h2>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
              Academic Foundation
            </p>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg font-semibold text-white">
              Masters in Applied Statistics & Data Analytics
            </p>
            <p className="mt-1 text-sm text-slate-200">
              Amrita Vishwa Vidyapeetham, Coimbatore
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">
              2023 – 2025
            </p>
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg font-semibold text-white">
              Bachelors in Statistics
            </p>
            <p className="mt-1 text-sm text-slate-200">
              Dr. Ambedkar Government Arts College, Chennai
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">
              2020 – 2023
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-900/40 via-slate-900/30 to-cyan-900/40 p-10 backdrop-blur"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-white">
              Let&apos;s Collaborate
            </h2>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
              Contact
            </p>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200">
            I&apos;m always excited to discuss analytics challenges, BI
            roadmaps, or opportunities to build data-powered experiences. Reach
            out and let&apos;s explore how I can help.
          </p>
          <div className="mt-6 grid gap-4 text-sm text-slate-100 md:grid-cols-3">
            <a
              href="mailto:nivasanbharath@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur transition hover:border-cyan-300 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200">
                ✉️
              </span>
              nivasanbharath@gmail.com
            </a>


            
            <a
              href="https://www.linkedin.com/in/bharathnivasan-j/"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur transition hover:border-cyan-300 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200">
                in
              </span>
              linkedin.com/in/bharathnivasan
            </a>
            <a
              href="https://github.com/bharathnivasan"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur transition hover:border-cyan-300 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200">
                ⧉
              </span>
              github.com/bharathnivasan
            </a>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-cyan-200">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-100">
              +91 7339123643
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-100">
              Open to Internships & Roles
            </span>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
          <p>© 2025 Bharathnivasan J. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href="mailto:nivasanbharath@gmail.com"
              className="transition hover:text-white"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/bharathnivasan-j/"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/bharathnivasan"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
