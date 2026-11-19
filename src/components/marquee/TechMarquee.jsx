import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiDocker,
  SiGit,
  SiPython
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { TbBrandReactNative, TbSparkles } from 'react-icons/tb';
import './TechMarquee.scss';

const TECH_ITEMS = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express.js', icon: SiExpress, color: '#E2E8F0' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'AI / LLM Integrations', icon: TbSparkles, color: '#3B82F6' },
];

const TechMarquee = () => {
  // Render two identical tracks for seamless infinite looping
  return (
    <section className="tech-marquee-section" aria-label="Technology Stack Marquee">
      <div className="tech-marquee-container">
        {/* Gradient edge masks to create smooth fade in/out */}
        <div className="tech-marquee-mask tech-marquee-mask--left" aria-hidden="true" />
        <div className="tech-marquee-mask tech-marquee-mask--right" aria-hidden="true" />

        <div className="tech-marquee-track">
          {/* First set of items */}
          <div className="tech-marquee-group" aria-hidden="false">
            {TECH_ITEMS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={`tech-1-${idx}`} className="tech-pill">
                  <IconComponent className="tech-pill__icon" style={{ '--icon-color': item.color }} />
                  <span className="tech-pill__name">{item.name}</span>
                </div>
              );
            })}
          </div>

          {/* Duplicated set for seamless loop */}
          <div className="tech-marquee-group" aria-hidden="true">
            {TECH_ITEMS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={`tech-2-${idx}`} className="tech-pill">
                  <IconComponent className="tech-pill__icon" style={{ '--icon-color': item.color }} />
                  <span className="tech-pill__name">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
