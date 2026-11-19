import React from 'react';
import {
  FiLock,
  FiActivity,
  FiLayers,
  FiDollarSign,
  FiSearch,
  FiFileText,
  FiCheckCircle,
  FiCpu,
  FiVolume2,
  FiAward,
  FiCalendar
} from 'react-icons/fi';
import './ProjectVisual.scss';

/**
 * ProjectVisual Component
 * Renders transparent architectural diagrams and UI mockups for resume projects.
 */
const ProjectVisual = ({ project }) => {
  const { visualType } = project;

  // 1. OptiNetFlow - B2B Payment Telemetry & Routing Core
  if (visualType === 'optinetflow') {
    return (
      <div className="project-visual project-visual--flow">
        <div className="mockup-frame">
          <div className="mockup-header">
            <div className="window-dots">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>
            <div className="window-url font-mono">
              <span>gateway.optinetflow.io/telemetry</span>
            </div>
            <span className="mockup-tag mockup-tag--private font-mono">
              <FiLock /> Private B2B
            </span>
          </div>
          <div className="mockup-body flow-preview">
            <div className="flow-nodes">
              <div className="flow-node flow-node--source">
                <FiDollarSign className="node-icon" />
                <span className="node-label font-mono">Ingestion API</span>
                <span className="node-metric font-mono">200 OK</span>
              </div>
              <div className="flow-arrow font-mono">→</div>
              <div className="flow-node flow-node--processor">
                <FiLayers className="node-icon" />
                <span className="node-label font-mono">Routing Core</span>
                <span className="node-metric font-mono">Optimized</span>
              </div>
              <div className="flow-arrow font-mono">→</div>
              <div className="flow-node flow-node--target">
                <FiActivity className="node-icon" />
                <span className="node-label font-mono">Settlement</span>
                <span className="node-metric font-mono">99.8% Latency &lt;50ms</span>
              </div>
            </div>
            <div className="preview-caption preview-caption--private font-mono">
              <FiLock /> <span>Proprietary Payment Flow Architecture Preview</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. DLC - Algolia Instant Search & Faceted Filtering
  if (visualType === 'dlc-search') {
    return (
      <div className="project-visual project-visual--search">
        <div className="mockup-frame">
          <div className="mockup-header">
            <div className="window-dots">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>
            <div className="window-url font-mono">
              <span>search.dlc-commerce.internal/v1</span>
            </div>
            <span className="mockup-tag font-mono">Algolia + React</span>
          </div>
          <div className="mockup-body search-preview">
            {/* Search Input Bar Mockup */}
            <div className="search-bar-mock">
              <FiSearch className="search-icon" />
              <span className="search-text font-mono">wireless noise-cancelling headphones</span>
              <span className="search-time font-mono text-accent">142ms &lt; 300ms</span>
            </div>

            {/* Facets & Stats Row */}
            <div className="search-facets-row font-mono">
              <span className="facet-chip facet-chip--active">In Stock (5k+)</span>
              <span className="facet-chip">Category: Audio</span>
              <span className="facet-chip">Faceted Sort: Relevance</span>
            </div>

            {/* Instant Filter Results Simulation */}
            <div className="search-results-list font-mono">
              <div className="result-item">
                <span className="result-title">Pro Wireless Headset ANC</span>
                <span className="result-match text-accent">99.4% Match</span>
              </div>
              <div className="result-item">
                <span className="result-title">Studio Monitor Headphones</span>
                <span className="result-match text-accent">Typo-Tolerant Exact</span>
              </div>
            </div>

            <div className="preview-caption preview-caption--private font-mono">
              <FiLock /> <span>Algolia Instant Search &amp; Headless WordPress Facets Mockup</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. IT Riders - Automated Resume Parsing Pipeline
  if (visualType === 'it-riders') {
    return (
      <div className="project-visual project-visual--pipeline">
        <div className="mockup-frame">
          <div className="mockup-header">
            <div className="window-dots">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>
            <div className="window-url font-mono">
              <span>pipeline.itriders.internal/parser</span>
            </div>
            <span className="mockup-tag font-mono">Python + NLP</span>
          </div>
          <div className="mockup-body pipeline-preview">
            {/* Efficiency KPI Callout */}
            <div className="pipeline-kpi-banner">
              <div className="kpi-metric">
                <span className="kpi-metric__number font-mono text-accent">~40%</span>
                <span className="kpi-metric__label font-mono">Review Time Reduced</span>
              </div>
              <div className="kpi-divider" />
              <div className="kpi-metric">
                <span className="kpi-metric__number font-mono text-primary">100%</span>
                <span className="kpi-metric__label font-mono">Automated Entity Output</span>
              </div>
            </div>

            {/* Pipeline Stage Flow */}
            <div className="pipeline-stages font-mono">
              <div className="stage-card">
                <FiFileText className="stage-icon" />
                <span className="stage-name">Raw CV Ingestion</span>
              </div>
              <span className="stage-arrow">→</span>
              <div className="stage-card stage-card--active">
                <FiCpu className="stage-icon text-accent" />
                <span className="stage-name">Skill Entity Extractor</span>
              </div>
              <span className="stage-arrow">→</span>
              <div className="stage-card">
                <FiCheckCircle className="stage-icon text-accent" />
                <span className="stage-name">Structured ATS JSON</span>
              </div>
            </div>

            <div className="preview-caption preview-caption--private font-mono">
              <FiLock /> <span>Automated Resume Extraction &amp; ATS Pipeline Preview</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. Crikk - Azure Voice Generation & TTS Audio Preview
  if (visualType === 'crikk-voice') {
    return (
      <div className="project-visual project-visual--voice">
        <div className="mockup-frame">
          <div className="mockup-header">
            <div className="window-dots">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>
            <div className="window-url font-mono">
              <span>studio.crikk.ai/tts-engine</span>
            </div>
            <span className="mockup-tag font-mono">SvelteKit + Azure</span>
          </div>
          <div className="mockup-body voice-preview">
            {/* Speech Generation Bar */}
            <div className="voice-prompt-box font-mono">
              <FiVolume2 className="voice-icon text-accent" />
              <span className="voice-prompt-text">"Generating realistic neural speech with low-latency streaming..."</span>
              <span className="voice-badge">Neural TTS</span>
            </div>

            {/* Audio Waveform Simulation */}
            <div className="waveform-box">
              <div className="waveform-bars">
                {[40, 65, 85, 30, 95, 75, 50, 80, 90, 45, 70, 85, 60, 40, 90, 75, 55, 35, 80, 95].map((h, i) => (
                  <span
                    key={i}
                    className="wave-bar"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="waveform-meta font-mono">
                <span>Azure Speech SDK · 48 kHz / 24-bit</span>
                <span className="text-accent">Zero Regression Parity</span>
              </div>
            </div>

            <div className="preview-caption preview-caption--private font-mono">
              <FiLock /> <span>AI Voice Synthesis &amp; SvelteKit Architecture Preview</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. Sukhi Wellness - React Native Mobile & Gamified Badges
  if (visualType === 'sukhi-wellness') {
    return (
      <div className="project-visual project-visual--mobile">
        <div className="mockup-frame">
          <div className="mockup-header">
            <div className="window-dots">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>
            <div className="window-url font-mono">
              <span>mobile.sukhiwellness.app/badges</span>
            </div>
            <span className="mockup-tag font-mono">React Native</span>
          </div>
          <div className="mockup-body wellness-preview">
            {/* Achievement Milestone Callout */}
            <div className="milestone-box">
              <div className="milestone-icon-wrap">
                <FiAward className="milestone-icon" />
              </div>
              <div className="milestone-details font-mono">
                <span className="milestone-title">Daily Mindfulness Streak Unlocked</span>
                <span className="milestone-sub text-accent">7 Consecutive Days &middot; Badge Earned</span>
              </div>
            </div>

            {/* Video Watch Tracking Bar */}
            <div className="video-tracking-box font-mono">
              <div className="tracking-header">
                <span>Video Progress Sync</span>
                <span className="text-accent">100% Watched</span>
              </div>
              <div className="tracking-bar">
                <div className="tracking-fill" style={{ width: '100%' }} />
              </div>
              <span className="tracking-note">Cross-session state persisted with AsyncStorage</span>
            </div>

            <div className="preview-caption preview-caption--private font-mono">
              <FiLock /> <span>Gamified Badges &amp; Video Telemetry Architecture Preview</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. School Management System - Institutional ERP & Billing
  if (visualType === 'school-erp') {
    return (
      <div className="project-visual project-visual--erp">
        <div className="mockup-frame">
          <div className="mockup-header">
            <div className="window-dots">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
            </div>
            <div className="window-url font-mono">
              <span>erp.schooladmin.internal/billing</span>
            </div>
            <span className="mockup-tag font-mono">MERN ERP + RBAC</span>
          </div>
          <div className="mockup-body erp-preview">
            {/* ERP Navigation Tabs */}
            <div className="erp-tabs font-mono">
              <span className="erp-tab erp-tab--active">
                <FiDollarSign /> Fee Cycles
              </span>
              <span className="erp-tab">
                <FiCalendar /> Reminders
              </span>
              <span className="erp-tab">Custom Admissions</span>
            </div>

            {/* Ledger Rows */}
            <div className="erp-ledger font-mono">
              <div className="ledger-header">
                <span className="text-primary">Fee Installment Ledger</span>
                <span className="badge badge--success">Active Billing Cycle</span>
              </div>
              <div className="ledger-rows">
                <div className="ledger-row">
                  <span>Downpayment</span>
                  <span className="text-accent">Confirmed · Receipt #2481</span>
                </div>
                <div className="ledger-row">
                  <span>Installment 01 / 04</span>
                  <span className="text-secondary">Calendar Auto-Alert Scheduled</span>
                </div>
                <div className="ledger-row">
                  <span>Student Record Fields</span>
                  <span className="text-muted">Dynamic Schema Generated</span>
                </div>
              </div>
            </div>

            <div className="preview-caption preview-caption--private font-mono">
              <FiLock /> <span>Custom-Field Forms &amp; Fee Billing ERP Architecture Preview</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ProjectVisual;
