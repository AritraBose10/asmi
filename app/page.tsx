import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ASMi Business School | Best Business School in Kolkata',
  description:
    'ASMi Business School — Best Business School in Kolkata, Eastern India. AICTE-approved MBA, BBA and Executive MBA programmes powered by IBM & Google Cloud.',
};

/**
 * Landing page. Ported from the original static index.html; the animation hooks
 * (reveal-up, data-text-reveal, data-counter, data-parallax-speed) are driven by
 * <SiteMotion /> in the root layout.
 */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-floating-shapes">
          <div className="hf-shape hf-shape-1" data-parallax-speed="0.03"></div>
          <div className="hf-shape hf-shape-2" data-parallax-speed="0.05"></div>
          <div className="hf-shape hf-shape-3" data-parallax-speed="0.02"></div>
          <div className="hf-shape hf-shape-4" data-parallax-speed="0.04"></div>
        </div>
        <div className="hero-media">
          <img src="/assets/hero-bg.png" alt="ASMi Business School Campus" className="hero-img" id="heroImg" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            Admissions Open — Batch 2026
          </p>
          <h1 className="hero-heading" data-split-text>
            <span className="line" data-text="Where">Where</span>
            <span className="line accent-italic" data-text="Leaders">Leaders</span>
            <span className="line" data-text="Are Made.">Are Made.</span>
          </h1>
          <p className="hero-sub">Best Business School in Kolkata, Eastern India.<br />MBA &amp; BBA programs powered by IBM &amp; Google Cloud.</p>
          <div className="hero-actions">
            <a href="#programs" className="btn-hero-primary">Explore Programs <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            <a href="https://asmibschool.com/apply.html" target="_blank" rel="noopener" className="btn-hero-secondary">Apply Now</a>
          </div>
        </div>
        <a href="#about" className="hero-scroll-indicator" aria-label="Scroll down">
          <span className="scroll-label">Scroll</span>
          <div className="scroll-arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2V18M4 12L10 18L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </a>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-label">Partners &amp; Accreditations</div>
        <div className="ticker-track">
          <div className="ticker-inner" id="tickerInner">
            <span className="tick-item">IBM <span className="tick-dot">●</span></span>
            <span className="tick-item">Google Cloud <span className="tick-dot">●</span></span>
            <span className="tick-item">AICTE Approved <span className="tick-dot">●</span></span>
            <span className="tick-item">Techno India University <span className="tick-dot">●</span></span>
            <span className="tick-item">INTI International University <span className="tick-dot">●</span></span>
            <span className="tick-item">EY <span className="tick-dot">●</span></span>
            <span className="tick-item">HDFC Bank <span className="tick-dot">●</span></span>
            <span className="tick-item">HSBC <span className="tick-dot">●</span></span>
            <span className="tick-item">Coal India <span className="tick-dot">●</span></span>
            <span className="tick-item">Star Health Insurance <span className="tick-dot">●</span></span>
            <span className="tick-item">Aptech Limited <span className="tick-dot">●</span></span>
            <span className="tick-item">E-Intellisense <span className="tick-dot">●</span></span>
            {/* duplicate for seamless loop */}
            <span className="tick-item">IBM <span className="tick-dot">●</span></span>
            <span className="tick-item">Google Cloud <span className="tick-dot">●</span></span>
            <span className="tick-item">AICTE Approved <span className="tick-dot">●</span></span>
            <span className="tick-item">Techno India University <span className="tick-dot">●</span></span>
            <span className="tick-item">INTI International University <span className="tick-dot">●</span></span>
            <span className="tick-item">EY <span className="tick-dot">●</span></span>
            <span className="tick-item">HDFC Bank <span className="tick-dot">●</span></span>
            <span className="tick-item">HSBC <span className="tick-dot">●</span></span>
            <span className="tick-item">Coal India <span className="tick-dot">●</span></span>
            <span className="tick-item">Star Health Insurance <span className="tick-dot">●</span></span>
            <span className="tick-item">Aptech Limited <span className="tick-dot">●</span></span>
            <span className="tick-item">E-Intellisense <span className="tick-dot">●</span></span>
          </div>
        </div>
      </div>

      {/* WHY ASMI — STATS */}
      <section className="why-section" id="about">
        <div className="section-divider-animated">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
          <div className="divider-line"></div>
        </div>
        <div className="container">
          <div className="why-header reveal-up">
            <p className="section-eyebrow" data-text-reveal>Why ASMi Business School</p>
            <h2 className="section-heading" data-text-reveal>Numbers that<br /><em>define excellence</em></h2>
          </div>
          <div className="why-grid" data-stagger="80">
            <div className="why-stat reveal-up" data-delay="0">
              <div className="wstat-num" data-counter data-target="20.38" data-prefix="₹" data-suffix=" LPA" data-decimals="2">₹0 LPA</div>
              <div className="wstat-label">Highest Package</div>
              <div className="wstat-sub">2023–25 batch</div>
            </div>
            <div className="why-stat reveal-up" data-delay="80">
              <div className="wstat-num" data-counter data-target="14.20" data-prefix="₹" data-suffix=" LPA" data-decimals="2">₹0 LPA</div>
              <div className="wstat-label">Average Package</div>
              <div className="wstat-sub">2023–25 batch</div>
            </div>
            <div className="why-stat reveal-up" data-delay="160">
              <div className="wstat-num" data-counter data-target="13.50" data-prefix="₹" data-suffix=" LPA" data-decimals="2">₹0 LPA</div>
              <div className="wstat-label">Median Package</div>
              <div className="wstat-sub">2023–25 batch</div>
            </div>
            <div className="why-stat reveal-up" data-delay="240">
              <div className="wstat-num" data-counter data-target="13" data-suffix="+" data-decimals="0">0+</div>
              <div className="wstat-label">Expert Faculty</div>
              <div className="wstat-sub">Industry veterans</div>
            </div>
            <div className="why-stat reveal-up" data-delay="320">
              <div className="wstat-num" data-counter data-target="12" data-suffix="+" data-decimals="0">0+</div>
              <div className="wstat-label">Industry Mentors</div>
              <div className="wstat-sub">CXOs &amp; founders</div>
            </div>
            <div className="why-stat reveal-up" data-delay="400">
              <div className="wstat-num" data-counter data-target="10" data-suffix="+" data-decimals="0">0+</div>
              <div className="wstat-label">Specializations</div>
              <div className="wstat-sub">MBA tracks</div>
            </div>
          </div>
          <div className="why-logos-label reveal-up">Trusted by India's leading organizations</div>
          <div className="why-logos reveal-up">
            <span className="logo-pill">IBM</span>
            <span className="logo-pill">Google Cloud</span>
            <span className="logo-pill">EY</span>
            <span className="logo-pill">HDFC Bank</span>
            <span className="logo-pill">HSBC</span>
            <span className="logo-pill">Coal India</span>
            <span className="logo-pill">Star Health</span>
            <span className="logo-pill">Aptech</span>
          </div>
        </div>
      </section>

      {/* ADVANTAGE — 10 REASONS */}
      <section className="advantage-section" id="advantage">
        <div className="floating-accent fa-1" data-parallax-speed="0.02"></div>
        <div className="floating-accent fa-2" data-parallax-speed="0.04"></div>
        <div className="container">
          <div className="adv-header reveal-up">
            <div className="adv-header-left">
              <p className="section-eyebrow" data-text-reveal>The ASMi Advantage</p>
              <h2 className="section-heading" data-text-reveal>10 reasons to choose<br /><em>ASMi Business School</em></h2>
            </div>
            <p className="section-desc adv-header-desc">AICTE-approved programs designed for tomorrow's leaders, with real-world industry integration.</p>
          </div>
          <div className="advantage-grid">

            <div className="adv-card reveal-up" data-delay="0">
              <span className="adv-bg-num" aria-hidden="true">01</span>
              <div className="adv-top">
                <span className="adv-num">01</span>
                <span className="adv-icon-btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1H11M11 1V11M1 11L10.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
              <h3 className="adv-title">AICTE Approved</h3>
              <p className="adv-desc">Nationally recognized programs meeting the highest quality benchmarks set by AICTE.</p>
              <div className="adv-bar"></div>
            </div>

            <div className="adv-card reveal-up" data-delay="55">
              <span className="adv-bg-num" aria-hidden="true">02</span>
              <div className="adv-top">
                <span className="adv-num">02</span>
                <span className="adv-icon-btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1H11M11 1V11M1 11L10.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
              <h3 className="adv-title">IBM-Powered Learning</h3>
              <p className="adv-desc">Curriculum co-developed with IBM, integrating AI, data analytics, and cutting-edge technology.</p>
              <div className="adv-bar"></div>
            </div>

            <div className="adv-card reveal-up" data-delay="110">
              <span className="adv-bg-num" aria-hidden="true">03</span>
              <div className="adv-top">
                <span className="adv-num">03</span>
                <span className="adv-icon-btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1H11M11 1V11M1 11L10.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
              <h3 className="adv-title">Diverse Specializations</h3>
              <p className="adv-desc">Marketing, Finance, HR, Technology, Entrepreneurship, and Sustainability tracks.</p>
              <div className="adv-bar"></div>
            </div>

            <div className="adv-card reveal-up" data-delay="165">
              <span className="adv-bg-num" aria-hidden="true">04</span>
              <div className="adv-top">
                <span className="adv-num">04</span>
                <span className="adv-icon-btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1H11M11 1V11M1 11L10.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
              <h3 className="adv-title">Real-World Projects</h3>
              <p className="adv-desc">Hands-on case studies, live internships, and industry challenges from day one.</p>
              <div className="adv-bar"></div>
            </div>

            <div className="adv-card reveal-up" data-delay="220">
              <span className="adv-bg-num" aria-hidden="true">05</span>
              <div className="adv-top">
                <span className="adv-num">05</span>
                <span className="adv-icon-btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1H11M11 1V11M1 11L10.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
              <h3 className="adv-title">Strong Placement Network</h3>
              <p className="adv-desc">Dedicated placement cell with direct access to top recruiters across India.</p>
              <div className="adv-bar"></div>
            </div>

            <div className="adv-card reveal-up" data-delay="0">
              <span className="adv-bg-num" aria-hidden="true">06</span>
              <div className="adv-top">
                <span className="adv-num">06</span>
                <span className="adv-icon-btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1H11M11 1V11M1 11L10.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
              <h3 className="adv-title">Global Alumni Network</h3>
              <p className="adv-desc">Lifelong connections with alumni across industries and geographies worldwide.</p>
              <div className="adv-bar"></div>
            </div>

            <div className="adv-card reveal-up" data-delay="55">
              <span className="adv-bg-num" aria-hidden="true">07</span>
              <div className="adv-top">
                <span className="adv-num">07</span>
                <span className="adv-icon-btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1H11M11 1V11M1 11L10.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
              <h3 className="adv-title">Experienced Faculty</h3>
              <p className="adv-desc">Industry veterans and IIT/IIM alumni bringing decades of real-world expertise.</p>
              <div className="adv-bar"></div>
            </div>

            <div className="adv-card reveal-up" data-delay="110">
              <span className="adv-bg-num" aria-hidden="true">08</span>
              <div className="adv-top">
                <span className="adv-num">08</span>
                <span className="adv-icon-btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1H11M11 1V11M1 11L10.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
              <h3 className="adv-title">International Study Tours</h3>
              <p className="adv-desc">Global exposure through immersive study tours to Malaysia, INTI University &amp; beyond.</p>
              <div className="adv-bar"></div>
            </div>

            <div className="adv-card reveal-up" data-delay="165">
              <span className="adv-bg-num" aria-hidden="true">09</span>
              <div className="adv-top">
                <span className="adv-num">09</span>
                <span className="adv-icon-btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1H11M11 1V11M1 11L10.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
              <h3 className="adv-title">Vibrant Campus Life</h3>
              <p className="adv-desc">Events, clubs, boot camps, and a thriving student community at Godrej Genesis.</p>
              <div className="adv-bar"></div>
            </div>

            <div className="adv-card reveal-up" data-delay="220">
              <span className="adv-bg-num" aria-hidden="true">10</span>
              <div className="adv-top">
                <span className="adv-num">10</span>
                <span className="adv-icon-btn"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1H11M11 1V11M1 11L10.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </div>
              <h3 className="adv-title">Executive MBA Programs</h3>
              <p className="adv-desc">Flexible EMBA designed for CXOs, senior managers, and growth-minded professionals.</p>
              <div className="adv-bar"></div>
            </div>

          </div>
        </div>
      </section>

      {/* PROGRAMS — EXPANDING ACCORDION */}
      <section className="programs-section" id="programs">
        <div className="pg-bg-pattern"></div>
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow" data-text-reveal>Our Programmes</p>
            <h2 className="section-heading" data-text-reveal>Future-focused programs<br /><em>for tomorrow's leaders</em></h2>
          </div>

          <div className="pg-grid">
            {/* MBA */}
            <a href="/programs/mba" className="pg-card reveal-up" data-delay="0">
              <div className="pg-card-media">
                <img src="/assets/campus-life.png" alt="MBA Program" className="pg-card-img" />
                <div className="pg-card-shade"></div>
                <span className="pg-type">MBA</span>
                <span className="pg-badge flagship">Flagship</span>
              </div>
              <div className="pg-card-body">
                <span className="pg-duration">2 Years · Full Time</span>
                <h3 className="pg-card-title">Master of Business Administration</h3>
                <p className="pg-card-desc">Future-focused curriculum with 6 specializations — Marketing, Finance, HR, Technology, Entrepreneurship &amp; Sustainability. Powered by IBM.</p>
                <div className="pg-tags">
                  <span>Marketing</span><span>Finance</span><span>HR</span><span>Technology</span>
                </div>
                <div className="pg-reveal">
                  <ul className="pg-points">
                    <li>6 industry-aligned specializations</li>
                    <li>IBM &amp; Google Cloud powered curriculum</li>
                    <li>₹20.38 LPA highest package (2023–25)</li>
                  </ul>
                </div>
                <span className="pg-cta">
                  Explore Programme <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M12 4L18 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 10H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </span>
              </div>
            </a>

            {/* BBA */}
            <a href="/programs/bba" className="pg-card reveal-up" data-delay="100">
              <div className="pg-card-media">
                <img src="/assets/hero-bg.png" alt="BBA Program" className="pg-card-img" />
                <div className="pg-card-shade"></div>
                <span className="pg-type">BBA</span>
                <span className="pg-badge">Undergraduate</span>
              </div>
              <div className="pg-card-body">
                <span className="pg-duration">4 Years · Full Time</span>
                <h3 className="pg-card-title">Bachelor of Business Administration</h3>
                <p className="pg-card-desc">Specialization in Business Analytics with industry-integrated learning powered by IBM. Build your analytical edge from year one.</p>
                <div className="pg-tags">
                  <span>Business Analytics</span><span>IBM Powered</span>
                </div>
                <div className="pg-reveal">
                  <ul className="pg-points">
                    <li>Analytics-first undergraduate track</li>
                    <li>Live projects from the first year</li>
                    <li>Direct pathway into the ASMI MBA</li>
                  </ul>
                </div>
                <span className="pg-cta">
                  Explore Programme <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M12 4L18 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 10H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </span>
              </div>
            </a>

            {/* EMBA */}
            <a href="/programs/executive-mba" className="pg-card reveal-up" data-delay="200">
              <div className="pg-card-media">
                <img src="/assets/malaysia-tour.png" alt="Executive MBA" className="pg-card-img" />
                <div className="pg-card-shade"></div>
                <span className="pg-type">EMBA</span>
                <span className="pg-badge">Executive</span>
              </div>
              <div className="pg-card-body">
                <span className="pg-duration">Flexible · Working Professionals</span>
                <h3 className="pg-card-title">Executive MBA</h3>
                <p className="pg-card-desc">Designed for CXOs, senior managers, entrepreneurs, and growth-minded professionals. Immersive case-based, flexible modules.</p>
                <div className="pg-tags">
                  <span>Leadership</span><span>Strategy</span><span>Flexible</span>
                </div>
                <div className="pg-reveal">
                  <ul className="pg-points">
                    <li>Weekend &amp; modular scheduling</li>
                    <li>Case-based, peer-led classrooms</li>
                    <li>Built for CXOs and founders</li>
                  </ul>
                </div>
                <span className="pg-cta">
                  Explore Programme <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M12 4L18 10L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18 10H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* STUDY TOUR — IMMERSIVE BANNER */}
      <section className="st-immersive">
        <div className="st-bg-wrap">
          <img src="/assets/malaysia-tour.png" alt="International Study Tour Malaysia" loading="lazy" className="st-bg-img lazy" />
          <div className="st-bg-overlay"></div>
        </div>

        <div className="container st-container">
          <div className="st-content reveal-up">
            <p className="section-eyebrow st-eyebrow" data-text-reveal>Global Exposure</p>
            <h2 className="st-heading" data-text-reveal>Learn by<br /><em>Experiencing the World</em></h2>
            <p className="st-desc">An immersive study tour to Malaysia in partnership with INTI International University — combining industry immersion, cultural discovery, and real-world business exposure.</p>

            <div className="st-highlights">
              <div className="st-highlight-card reveal-up" data-delay="100">
                <div className="st-hl-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1L13 7L19 8L14.5 12.5L15.5 18.5L10 15.5L4.5 18.5L5.5 12.5L1 8L7 7L10 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <strong>INTI International University</strong>
                  <p>Industry experts & global academics</p>
                </div>
              </div>
              <div className="st-highlight-card reveal-up" data-delay="200">
                <div className="st-hl-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" /><path d="M2 10H18M10 2C12.5 4.5 14 7 14 10C14 13 12.5 15.5 10 18M10 2C7.5 4.5 6 7 6 10C6 13 7.5 15.5 10 18" stroke="currentColor" strokeWidth="1.5" /></svg>
                </div>
                <div>
                  <strong>Cultural Heritage Visits</strong>
                  <p>Diverse business cultures & markets</p>
                </div>
              </div>
              <div className="st-highlight-card reveal-up" data-delay="300">
                <div className="st-hl-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M6 6V4C6 2.9 6.9 2 8 2H12C13.1 2 14 2.9 14 4V6" stroke="currentColor" strokeWidth="1.5" /></svg>
                </div>
                <div>
                  <strong>Factory Tours</strong>
                  <p>Royal Selangor & Barleys — real ops</p>
                </div>
              </div>
            </div>

            <a href="https://asmibschool.com/apply.html" target="_blank" rel="noopener" className="st-cta-btn">
              Explore Programs <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>

          {/* Floating location badge */}
          <div className="st-loc-badge reveal-up" data-delay="400">
            <div className="st-loc-ring"></div>
            <div className="st-loc-inner">
              <span className="st-loc-flag">🇲🇾</span>
              <div>
                <span className="st-loc-label">Study Tour</span>
                <span className="st-loc-dest">Malaysia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLACEMENTS */}
      <section className="placements-section" id="placements">
        <div className="pl-bg-grid"></div>
        <div className="pl-orb pl-orb-1"></div>
        <div className="pl-orb pl-orb-2"></div>
        <div className="section-divider-animated">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
          <div className="divider-line"></div>
        </div>
        <div className="container">
          {/* Header */}
          <div className="pl-header reveal-up">
            <div className="pl-header-left">
              <p className="section-eyebrow pl-eyebrow" data-text-reveal>Placement Report 2025</p>
              <h2 className="pl-main-heading" data-text-reveal>Our students join<br /><em>India's top companies</em></h2>
            </div>
            <div className="pl-header-right">
              <p className="pl-header-desc">100% placement assistance with direct access to India's leading recruiters across BFSI, consulting, tech, and FMCG sectors.</p>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="pl-stats-strip reveal-up">
            <div className="pl-stat-item">
              <span className="pl-stat-num" data-counter data-target="20.38" data-prefix="₹" data-suffix=" LPA" data-decimals="2">₹0 LPA</span>
              <span className="pl-stat-label">Highest CTC</span>
            </div>
            <div className="pl-stat-divider"></div>
            <div className="pl-stat-item">
              <span className="pl-stat-num" data-counter data-target="14.20" data-prefix="₹" data-suffix=" LPA" data-decimals="2">₹0 LPA</span>
              <span className="pl-stat-label">Average CTC</span>
            </div>
            <div className="pl-stat-divider"></div>
            <div className="pl-stat-item">
              <span className="pl-stat-num" data-counter data-target="13.50" data-prefix="₹" data-suffix=" LPA" data-decimals="2">₹0 LPA</span>
              <span className="pl-stat-label">Median CTC</span>
            </div>
            <div className="pl-stat-divider"></div>
            <div className="pl-stat-item">
              <span className="pl-stat-num">2023–25</span>
              <span className="pl-stat-label">Batch</span>
            </div>
          </div>

          {/* Bento Cards */}
          <div className="pl-bento" data-stagger="100">
            {/* Featured card */}
            <div className="pl-card-v2 pl-featured reveal-up" data-delay="0">
              <div className="pl-card-glow"></div>
              <div className="pl-card-inner">
                <div className="pl-badge-top">⭐ Top Placement</div>
                <div className="pl-v2-avatar-wrap">
                  <div className="pl-v2-avatar">AD</div>
                  <div className="pl-v2-ring"></div>
                </div>
                <h4 className="pl-v2-name">Arindam Dhali</h4>
                <span className="pl-v2-batch">MBA · 2023–25</span>
                <div className="pl-v2-company-wrap">
                  <span className="pl-v2-placed">Placed at</span>
                  <span className="pl-v2-company">EY</span>
                </div>
                <div className="pl-v2-package">₹20.38 LPA</div>
              </div>
            </div>

            {/* Regular cards */}
            <div className="pl-card-v2 reveal-up" data-delay="100">
              <div className="pl-card-glow"></div>
              <div className="pl-card-inner">
                <div className="pl-v2-avatar-wrap">
                  <div className="pl-v2-avatar">OC</div>
                </div>
                <h4 className="pl-v2-name">Oindrila Chakraborty</h4>
                <span className="pl-v2-batch">MBA · 2023–25</span>
                <div className="pl-v2-company-wrap">
                  <span className="pl-v2-placed">Placed at</span>
                  <span className="pl-v2-company">E-Intellisense</span>
                </div>
              </div>
            </div>

            <div className="pl-card-v2 reveal-up" data-delay="200">
              <div className="pl-card-glow"></div>
              <div className="pl-card-inner">
                <div className="pl-v2-avatar-wrap">
                  <div className="pl-v2-avatar">NR</div>
                </div>
                <h4 className="pl-v2-name">Nilargaha Roy</h4>
                <span className="pl-v2-batch">MBA · 2023–25</span>
                <div className="pl-v2-company-wrap">
                  <span className="pl-v2-placed">Placed at</span>
                  <span className="pl-v2-company">RAM HR Consultancy</span>
                </div>
              </div>
            </div>

            <div className="pl-card-v2 reveal-up" data-delay="300">
              <div className="pl-card-glow"></div>
              <div className="pl-card-inner">
                <div className="pl-v2-avatar-wrap">
                  <div className="pl-v2-avatar">IN</div>
                </div>
                <h4 className="pl-v2-name">Ishika Nath</h4>
                <span className="pl-v2-batch">MBA · 2023–25</span>
                <div className="pl-v2-company-wrap">
                  <span className="pl-v2-placed">Placed at</span>
                  <span className="pl-v2-company">E-Intellisense</span>
                </div>
              </div>
            </div>

            <div className="pl-card-v2 reveal-up" data-delay="400">
              <div className="pl-card-glow"></div>
              <div className="pl-card-inner">
                <div className="pl-v2-avatar-wrap">
                  <div className="pl-v2-avatar">RR</div>
                </div>
                <h4 className="pl-v2-name">Rika Roy</h4>
                <span className="pl-v2-batch">MBA · 2023–25</span>
                <div className="pl-v2-company-wrap">
                  <span className="pl-v2-placed">Placed at</span>
                  <span className="pl-v2-company">Lifestyle International</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recruiters marquee */}
          <div className="pl-recruiters reveal-up">
            <div className="pl-rec-label">Our Recruiters</div>
            <div className="pl-rec-track">
              <div className="pl-rec-inner">
                <span className="pl-rec-item">EY</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">HDFC Bank</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">HSBC</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">E-Intellisense</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">Coal India</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">Star Health</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">Lifestyle Intl.</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">RAM HR</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">Aptech</span>
                <span className="pl-rec-dot">◆</span>
                {/* duplicate for loop */}
                <span className="pl-rec-item">EY</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">HDFC Bank</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">HSBC</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">E-Intellisense</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">Coal India</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">Star Health</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">Lifestyle Intl.</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">RAM HR</span>
                <span className="pl-rec-dot">◆</span>
                <span className="pl-rec-item">Aptech</span>
                <span className="pl-rec-dot">◆</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pl-cta-wrap reveal-up">
            <a href="https://asmibschool.com/apply.html" target="_blank" rel="noopener" className="pl-cta-btn">
              Download Placement Report <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1V11M4 7L8 11L12 7M2 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* FACULTY — 3D FLIP CARD STAGE */}
      <section className="faculty-section" id="faculty">
        {/* Animated spotlights */}
        <div className="fac-spotlight fac-spotlight-1"></div>
        <div className="fac-spotlight fac-spotlight-2"></div>
        {/* Particle dots */}
        <div className="fac-particles" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>

        <div className="container">
          {/* Header */}
          <div className="fac-stage-header reveal-up">
            <div className="fac-stage-left">
              <p className="section-eyebrow fac-stage-eyebrow" data-text-reveal>Meet Our Faculty</p>
              <h2 className="fac-stage-heading" data-text-reveal>Learn from<br /><em>industry leaders</em></h2>
            </div>
            <div className="fac-stage-right">
              <p className="fac-stage-desc">IIT &amp; IIM alumni, CXOs, and industry veterans bringing decades of real-world expertise to the classroom.</p>
              <div className="fac-stage-badge">
                <span className="fac-stage-num">13+</span>
                <span className="fac-stage-label">Expert Faculty</span>
              </div>
            </div>
          </div>

          {/* 3D Flip Card Grid */}
          <div className="fac-flip-grid">

            {/* Card 01 */}
            <div className="fac-flip-wrap reveal-up" data-delay="0">
              <div className="fac-flip-inner">
                <div className="fac-flip-front">
                  <span className="fac-flip-num">01</span>
                  <div className="fac-flip-monogram">KM</div>
                  <div className="fac-flip-front-info">
                    <h4>Kaustav Majumdar</h4>
                    <span>Chief Mentor</span>
                  </div>
                  <div className="fac-flip-hint">Hover to reveal ↗</div>
                </div>
                <div className="fac-flip-back">
                  <span className="fac-flip-back-num">01</span>
                  <div className="fac-flip-back-content">
                    <div className="fac-flip-back-monogram">KM</div>
                    <h4>Kaustav Majumdar</h4>
                    <span className="fac-flip-back-role">Chief Mentor</span>
                    <p>Leadership, Strategy &amp; Innovation. Decades of strategic leadership shaping future business leaders.</p>
                    <div className="fac-flip-tags"><span>Strategy</span><span>Leadership</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 02 */}
            <div className="fac-flip-wrap reveal-up" data-delay="80">
              <div className="fac-flip-inner">
                <div className="fac-flip-front">
                  <span className="fac-flip-num">02</span>
                  <div className="fac-flip-monogram">GM</div>
                  <div className="fac-flip-front-info">
                    <h4>Dr. Gautam Majumdar</h4>
                    <span>Pro Vice-Chancellor, TIU</span>
                  </div>
                  <div className="fac-flip-hint">Hover to reveal ↗</div>
                </div>
                <div className="fac-flip-back">
                  <span className="fac-flip-back-num">02</span>
                  <div className="fac-flip-back-content">
                    <div className="fac-flip-back-monogram">GM</div>
                    <h4>Dr. Gautam Majumdar</h4>
                    <span className="fac-flip-back-role">Pro Vice-Chancellor, TIU</span>
                    <p>Ph.D., Jadavpur · Former VC, MAKAUT. Bringing extensive academic excellence and engineering insights.</p>
                    <div className="fac-flip-tags"><span>Academia</span><span>Engineering</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 03 */}
            <div className="fac-flip-wrap reveal-up" data-delay="160">
              <div className="fac-flip-inner">
                <div className="fac-flip-front">
                  <span className="fac-flip-num">03</span>
                  <div className="fac-flip-monogram">SS</div>
                  <div className="fac-flip-front-info">
                    <h4>Dr. Sanjay Saha</h4>
                    <span>Professor, Academic Affairs</span>
                  </div>
                  <div className="fac-flip-hint">Hover to reveal ↗</div>
                </div>
                <div className="fac-flip-back">
                  <span className="fac-flip-back-num">03</span>
                  <div className="fac-flip-back-content">
                    <div className="fac-flip-back-monogram">SS</div>
                    <h4>Dr. Sanjay Saha</h4>
                    <span className="fac-flip-back-role">Professor, Academic Affairs</span>
                    <p>Ph.D., IIT Kanpur · Business Policy. Merging analytical rigor with profound business policy knowledge.</p>
                    <div className="fac-flip-tags"><span>Policy</span><span>IIT</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 04 */}
            <div className="fac-flip-wrap reveal-up" data-delay="240">
              <div className="fac-flip-inner">
                <div className="fac-flip-front">
                  <span className="fac-flip-num">04</span>
                  <div className="fac-flip-monogram">RB</div>
                  <div className="fac-flip-front-info">
                    <h4>Rituraj Brahmachari</h4>
                    <span>Senior Management, Biz Dev</span>
                  </div>
                  <div className="fac-flip-hint">Hover to reveal ↗</div>
                </div>
                <div className="fac-flip-back">
                  <span className="fac-flip-back-num">04</span>
                  <div className="fac-flip-back-content">
                    <div className="fac-flip-back-monogram">RB</div>
                    <h4>Rituraj Brahmachari</h4>
                    <span className="fac-flip-back-role">Senior Management, Biz Dev</span>
                    <p>Former VP, Times of India (Times Network). Media maven specializing in explosive sales growth.</p>
                    <div className="fac-flip-tags"><span>Media</span><span>Sales</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 05 */}
            <div className="fac-flip-wrap reveal-up" data-delay="0">
              <div className="fac-flip-inner">
                <div className="fac-flip-front">
                  <span className="fac-flip-num">05</span>
                  <div className="fac-flip-monogram">RR</div>
                  <div className="fac-flip-front-info">
                    <h4>Rahul Rungta</h4>
                    <span>CMO, E-Intellisense</span>
                  </div>
                  <div className="fac-flip-hint">Hover to reveal ↗</div>
                </div>
                <div className="fac-flip-back">
                  <span className="fac-flip-back-num">05</span>
                  <div className="fac-flip-back-content">
                    <div className="fac-flip-back-monogram">RR</div>
                    <h4>Rahul Rungta</h4>
                    <span className="fac-flip-back-role">CMO, E-Intellisense</span>
                    <p>Founder, Edge24x7 · Finance &amp; Entrepreneurship. Empowering startups through sharp financial acumen.</p>
                    <div className="fac-flip-tags"><span>Finance</span><span>Startup</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 06 */}
            <div className="fac-flip-wrap reveal-up" data-delay="80">
              <div className="fac-flip-inner">
                <div className="fac-flip-front">
                  <span className="fac-flip-num">06</span>
                  <div className="fac-flip-monogram">GT</div>
                  <div className="fac-flip-front-info">
                    <h4>Geeta Tolia</h4>
                    <span>Independent Director</span>
                  </div>
                  <div className="fac-flip-hint">Hover to reveal ↗</div>
                </div>
                <div className="fac-flip-back">
                  <span className="fac-flip-back-num">06</span>
                  <div className="fac-flip-back-content">
                    <div className="fac-flip-back-monogram">GT</div>
                    <h4>Geeta Tolia</h4>
                    <span className="fac-flip-back-role">Independent Director</span>
                    <p>Divgi TorqTransfer · Co-Founder, Gravitech. Leading corporate governance and board-level strategies.</p>
                    <div className="fac-flip-tags"><span>Board</span><span>Governance</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 07 */}
            <div className="fac-flip-wrap reveal-up" data-delay="160">
              <div className="fac-flip-inner">
                <div className="fac-flip-front">
                  <span className="fac-flip-num">07</span>
                  <div className="fac-flip-monogram">SC</div>
                  <div className="fac-flip-front-info">
                    <h4>Soumyadeep Chakraborty</h4>
                    <span>Chief Digital Officer</span>
                  </div>
                  <div className="fac-flip-hint">Hover to reveal ↗</div>
                </div>
                <div className="fac-flip-back">
                  <span className="fac-flip-back-num">07</span>
                  <div className="fac-flip-back-content">
                    <div className="fac-flip-back-monogram">SC</div>
                    <h4>Soumyadeep Chakraborty</h4>
                    <span className="fac-flip-back-role">Chief Digital Officer</span>
                    <p>Ex Big-4 · IIM Bangalore · Growth Hacker. Driving digital transformation and data-led innovation.</p>
                    <div className="fac-flip-tags"><span>Digital</span><span>IIM</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 08 */}
            <div className="fac-flip-wrap reveal-up" data-delay="240">
              <div className="fac-flip-inner">
                <div className="fac-flip-front">
                  <span className="fac-flip-num">08</span>
                  <div className="fac-flip-monogram">MD</div>
                  <div className="fac-flip-front-info">
                    <h4>Dr. Manta Dey</h4>
                    <span>Associate Professor, Finance</span>
                  </div>
                  <div className="fac-flip-hint">Hover to reveal ↗</div>
                </div>
                <div className="fac-flip-back">
                  <span className="fac-flip-back-num">08</span>
                  <div className="fac-flip-back-content">
                    <div className="fac-flip-back-monogram">MD</div>
                    <h4>Dr. Manta Dey</h4>
                    <span className="fac-flip-back-role">Associate Professor, Finance</span>
                    <p>Theory meets real-world applications. Bridging academic finance with practical industry models.</p>
                    <div className="fac-flip-tags"><span>Finance</span><span>Research</span></div>
                  </div>
                </div>
              </div>
            </div>

          </div>{/* /.fac-flip-grid */}

          {/* Industry mentors */}
          <div className="fac-mt-header reveal-up">
            <div className="fac-mt-header-left">
              <p className="section-eyebrow fac-stage-eyebrow" data-text-reveal>Industry Connect</p>
              <h3 className="fac-mt-heading">Mentors from <em>the field</em></h3>
            </div>
            <div className="fac-mt-header-right">
              <span className="fac-mt-count">12<span>+</span></span>
              <p className="fac-mt-desc">CXOs, founders, and industry leaders guide the next generation of business professionals.</p>
            </div>
          </div>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="fac-mt-row mt-scroll-row mt-row-1">
          <div className="mt-scroll-track" id="mtTrack1">
            <div className="mt-h-card"><div className="mt-h-avatar">DM</div><div className="mt-h-info"><h4>Debjani Mookjherjee</h4><span className="mt-h-role">Founder, Nanigarh</span><p>Shark Tank India S4 · Brandigence</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">HL</div><div className="mt-h-info"><h4>Hemant Lodhia</h4><span className="mt-h-role">Founder</span><p>Windamere Projects</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">KS</div><div className="mt-h-info"><h4>Krittika Simlai</h4><span className="mt-h-role">CSR Manager, HDFC Bank</span><p>West Bengal Operations</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">PG</div><div className="mt-h-info"><h4>Pallab Ghosh</h4><span className="mt-h-role">Co-Founder</span><p>GAPPU</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">AM</div><div className="mt-h-info"><h4>Arun Mukherjee</h4><span className="mt-h-role">Founder</span><p>Bengal Entrepreneurs · Chaigram</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">AK</div><div className="mt-h-info"><h4>Atin Kumar Roy</h4><span className="mt-h-role">Regional Head</span><p>Star Health & Allied Insurance</p></div></div>
            {/* duplicate for seamless loop */}
            <div className="mt-h-card"><div className="mt-h-avatar">DM</div><div className="mt-h-info"><h4>Debjani Mookjherjee</h4><span className="mt-h-role">Founder, Nanigarh</span><p>Shark Tank India S4 · Brandigence</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">HL</div><div className="mt-h-info"><h4>Hemant Lodhia</h4><span className="mt-h-role">Founder</span><p>Windamere Projects</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">KS</div><div className="mt-h-info"><h4>Krittika Simlai</h4><span className="mt-h-role">CSR Manager, HDFC Bank</span><p>West Bengal Operations</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">PG</div><div className="mt-h-info"><h4>Pallab Ghosh</h4><span className="mt-h-role">Co-Founder</span><p>GAPPU</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">AM</div><div className="mt-h-info"><h4>Arun Mukherjee</h4><span className="mt-h-role">Founder</span><p>Bengal Entrepreneurs · Chaigram</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">AK</div><div className="mt-h-info"><h4>Atin Kumar Roy</h4><span className="mt-h-role">Regional Head</span><p>Star Health & Allied Insurance</p></div></div>
          </div>
        </div>

        {/* Row 2 — scrolls right (reverse) */}
        <div className="fac-mt-row mt-scroll-row mt-row-2">
          <div className="mt-scroll-track mt-track-reverse" id="mtTrack2">
            <div className="mt-h-card"><div className="mt-h-avatar">KP</div><div className="mt-h-info"><h4>Kamalini Paul</h4><span className="mt-h-role">Managing Director</span><p>De Sovrani · Poz Hotel · D C Paul Group</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">MF</div><div className="mt-h-info"><h4>Mohammad Faisal</h4><span className="mt-h-role">National Head Operations</span><p>Aptech Limited</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">AS</div><div className="mt-h-info"><h4>Anirban Sen</h4><span className="mt-h-role">MD & CEO</span><p>Powercab</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">AT</div><div className="mt-h-info"><h4>CA Adarsh Tandon</h4><span className="mt-h-role">Head of Training</span><p>HSBC Bank Kolkata · Derivatives</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">SD</div><div className="mt-h-info"><h4>Sanghamitra Dhar</h4><span className="mt-h-role">CHRO, LinkedIn24x7</span><p>HR Instructor, ILS Networks</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">LD</div><div className="mt-h-info"><h4>Lalith Dhanush</h4><span className="mt-h-role">Education Expert</span><p>TEDx Speaker · Author · LIT School</p></div></div>
            {/* duplicate */}
            <div className="mt-h-card"><div className="mt-h-avatar">KP</div><div className="mt-h-info"><h4>Kamalini Paul</h4><span className="mt-h-role">Managing Director</span><p>De Sovrani · Poz Hotel · D C Paul Group</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">MF</div><div className="mt-h-info"><h4>Mohammad Faisal</h4><span className="mt-h-role">National Head Operations</span><p>Aptech Limited</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">AS</div><div className="mt-h-info"><h4>Anirban Sen</h4><span className="mt-h-role">MD & CEO</span><p>Powercab</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">AT</div><div className="mt-h-info"><h4>CA Adarsh Tandon</h4><span className="mt-h-role">Head of Training</span><p>HSBC Bank Kolkata · Derivatives</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">SD</div><div className="mt-h-info"><h4>Sanghamitra Dhar</h4><span className="mt-h-role">CHRO, LinkedIn24x7</span><p>HR Instructor, ILS Networks</p></div></div>
            <div className="mt-h-card"><div className="mt-h-avatar">LD</div><div className="mt-h-info"><h4>Lalith Dhanush</h4><span className="mt-h-role">Education Expert</span><p>TEDx Speaker · Author · LIT School</p></div></div>
          </div>
        </div>
      </section>


      {/* TESTIMONIALS — EDITORIAL STACKED */}
      <section className="testimonials-section" id="testimonials">
        <div className="tv-noise-bg"></div>
        <div className="container">
          <div className="tv-header reveal-up">
            <div className="tv-bracket tv-bracket-left">[</div>
            <div className="tv-header-center">
              <p className="section-eyebrow tv-eyebrow" data-text-reveal>Student Voices</p>
              <h2 className="tv-heading" data-text-reveal>What our students<br /><em>say about ASMi</em></h2>
            </div>
            <div className="tv-bracket tv-bracket-right">]</div>
          </div>

          <div className="tv-stack">
            {/* Quote 1 */}
            <div className="tv-quote-card reveal-left" data-delay="0">
              <div className="tv-quote-mark" aria-hidden="true">"</div>
              <div className="tv-quote-body">
                <blockquote>ASMi has been truly transformative. The management learning, networking opportunities, and friendships have shaped my professional journey in ways I never expected.</blockquote>
                <div className="tv-divider-line"></div>
                <div className="tv-author">
                  <div className="tv-author-avatar">FK</div>
                  <div>
                    <strong>Farhin Khan</strong>
                    <span>MBA · 2023–25</span>
                  </div>
                  <div className="tv-stars">★★★★★</div>
                </div>
              </div>
            </div>

            {/* Quote 2 — right aligned */}
            <div className="tv-quote-card tv-quote-right reveal-right" data-delay="100">
              <div className="tv-quote-body">
                <blockquote>The personalized guidance, family-like atmosphere, and practical exposure creates a learning environment that no textbook can replicate. ASMi is truly special.</blockquote>
                <div className="tv-divider-line"></div>
                <div className="tv-author">
                  <div className="tv-author-avatar">SB</div>
                  <div>
                    <strong>Shreejita Bhattacharya</strong>
                    <span>MBA · 2023–25</span>
                  </div>
                  <div className="tv-stars">★★★★★</div>
                </div>
              </div>
              <div className="tv-quote-mark tv-qm-right" aria-hidden="true">"</div>
            </div>

            {/* Quote 3 */}
            <div className="tv-quote-card reveal-left" data-delay="200">
              <div className="tv-quote-mark" aria-hidden="true">"</div>
              <div className="tv-quote-body">
                <blockquote>The Malaysia study tour, outstanding faculty support, and practical leadership opportunities made my MBA journey truly exceptional and globally relevant.</blockquote>
                <div className="tv-divider-line"></div>
                <div className="tv-author">
                  <div className="tv-author-avatar">AD</div>
                  <div>
                    <strong>Aurguna Das</strong>
                    <span>MBA · 2023–25</span>
                  </div>
                  <div className="tv-stars">★★★★★</div>
                </div>
              </div>
            </div>

            {/* Quote 4 — right aligned */}
            <div className="tv-quote-card tv-quote-right reveal-right" data-delay="300">
              <div className="tv-quote-body">
                <blockquote>The perfect blend of industry experience, classroom learning, and holistic skill development with mentor support. ASMi prepares you for the real business world.</blockquote>
                <div className="tv-divider-line"></div>
                <div className="tv-author">
                  <div className="tv-author-avatar">AG</div>
                  <div>
                    <strong>Ashcharya Kumar Gautam</strong>
                    <span>MBA · 2023–25</span>
                  </div>
                  <div className="tv-stars">★★★★★</div>
                </div>
              </div>
              <div className="tv-quote-mark tv-qm-right" aria-hidden="true">"</div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="admission-section">
        <div className="container">
          <div className="section-header reveal-up">
            <p className="section-eyebrow">How to Apply</p>
            <h2 className="section-heading">Your journey begins<br /><em>in 6 simple steps</em></h2>
          </div>
          <div className="steps-row" data-stagger="100">
            <div className="step-item reveal-up" data-delay="0">
              <div className="step-circle">
                <span className="step-n">01</span>
              </div>
              <div className="step-connector"></div>
              <h4>Fill Application</h4>
              <p>Complete the online application form with your personal and academic details.</p>
            </div>
            <div className="step-item reveal-up" data-delay="100">
              <div className="step-circle">
                <span className="step-n">02</span>
              </div>
              <div className="step-connector"></div>
              <h4>Upload Documents</h4>
              <p>Submit your academic certificates, ID proof, and other required documents.</p>
            </div>
            <div className="step-item reveal-up" data-delay="200">
              <div className="step-circle">
                <span className="step-n">03</span>
              </div>
              <div className="step-connector"></div>
              <h4>Authentication</h4>
              <p>Your documents are verified by our admissions team for authenticity.</p>
            </div>
            <div className="step-item reveal-up" data-delay="300">
              <div className="step-circle">
                <span className="step-n">04</span>
              </div>
              <div className="step-connector"></div>
              <h4>Counsellor Interview</h4>
              <p>A personal interaction with our admission counsellor to understand your goals.</p>
            </div>
            <div className="step-item reveal-up" data-delay="400">
              <div className="step-circle">
                <span className="step-n">05</span>
              </div>
              <div className="step-connector"></div>
              <h4>Offer Letter</h4>
              <p>Receive your provisional offer letter confirming your seat at ASMi.</p>
            </div>
            <div className="step-item reveal-up" data-delay="500">
              <div className="step-circle">
                <span className="step-n">06</span>
              </div>
              <div className="step-connector last"></div>
              <h4>Programme Begins</h4>
              <p>Welcome to ASMi! Your journey to becoming a future leader starts here.</p>
            </div>
          </div>
          <div className="admission-cta reveal-up">
            <a href="https://asmibschool.com/apply.html" target="_blank" rel="noopener" className="btn-primary-dark">
              Start Your Application <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <p className="admission-note">Applications for 2026 batch are now open. Limited seats available.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-left reveal-left">
              <p className="section-eyebrow">Got Questions?</p>
              <h2 className="section-heading">Frequently<br /><em>Asked Questions</em></h2>
              <p className="faq-contact-note">Can't find your answer?</p>
              <a href="mailto:info@asmibschool.com" className="btn-outline-dark">Contact Us <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
            <div className="faq-right reveal-right">
              <div className="faq-list">
                <div className="faq-item">
                  <button className="faq-q">
                    <span>What is ASMi Business School?</span>
                    <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15M10 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </button>
                  <div className="faq-a">
                    <p>ASMi Business School is a prestigious institution affiliated with Techno India University, West Bengal. "ASMI" is Sanskrit for "I am" — symbolizing self-belief and individual potential. We offer AICTE-approved MBA, BBA, and Executive MBA programs from our campus at Godrej Genesis, Sector V, Kolkata.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q">
                    <span>What programs does ASMi offer?</span>
                    <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15M10 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </button>
                  <div className="faq-a">
                    <p>We offer MBA (2 years, 6 specializations), BBA in Business Analytics (4 years), Executive MBA for working professionals, and 3-month certification courses in Marketing 4.0, HR Excellence, and Entrepreneurship 4.0 — all in partnership with IBM.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q">
                    <span>Is ASMi Business School accredited?</span>
                    <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15M10 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </button>
                  <div className="faq-a">
                    <p>Yes. Our programs are AICTE-approved and affiliated with Techno India University, a recognized and accredited institution. We are also partnered with IBM and Google Cloud for curriculum development.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q">
                    <span>What is the teaching methodology?</span>
                    <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15M10 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </button>
                  <div className="faq-a">
                    <p>We blend theoretical knowledge with practical application through lectures, case studies, group discussions, seminars, industry workshops, real-world projects, and an International Study Tour to Malaysia. Our IBM-powered curriculum ensures you graduate ready for the industry.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q">
                    <span>What are the placement outcomes?</span>
                    <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15M10 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </button>
                  <div className="faq-a">
                    <p>Our 2023–25 batch achieved a highest package of ₹20.38 LPA, average of ₹14.20 LPA, and median of ₹13.50 LPA. Students have been placed at EY, HDFC Bank, HSBC, E-Intellisense, Lifestyle International, and many more.</p>
                  </div>
                </div>
                <div className="faq-item">
                  <button className="faq-q">
                    <span>Can international students apply?</span>
                    <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15M10 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </button>
                  <div className="faq-a">
                    <p>Yes, ASMi welcomes international applicants. Contact our admissions office at info@asmibschool.com or call +91 8100203639 for specific requirements and guidance tailored to international students.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA DARK BANNER */}
      <section className="cta-section">
        <div className="cta-bg-particles" id="ctaParticles"></div>
        <div className="container">
          <div className="cta-inner reveal-scale">
            <p className="cta-eyebrow">Applications Open — Batch 2026</p>
            <h2 className="cta-heading" data-text-reveal>Ready to shape<br />your future?</h2>
            <p className="cta-sub">Join Kolkata's premier business school. Limited seats. Apply before applications close.</p>
            <div className="cta-actions">
              <a href="https://asmibschool.com/apply.html" target="_blank" rel="noopener" className="btn-cta-primary">
                Start Your Application <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="tel:08062642222" className="btn-cta-secondary">Call Us: 08062642222</a>
            </div>
            <p className="cta-email">Or write to us at <a href="mailto:info@asmibschool.com">info@asmibschool.com</a></p>
          </div>
        </div>
      </section>


    </>
  );
}
