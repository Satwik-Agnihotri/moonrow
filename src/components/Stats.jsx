// src/components/Stats.jsx
import React, { useState } from 'react';
import './Stats.css';

const tabData = [
  {
    tabTitle: 'All-In-One Capabilities',
    tabDescription: 'Empowers teams across your organisation to use AI',
    contentImage: 'https://placehold.co/600x400/0d1117/6366f1?text=Code+Snippet+1'
  },
  {
    tabTitle: 'Powerful AI Agent Framework',
    tabDescription: 'Without needing coding skills—while still allowing full control',
    contentImage: 'https://placehold.co/600x400/0d1117/14b8a6?text=Code+Snippet+2'
  },
  {
    tabTitle: 'No-Code Friendly Tools',
    tabDescription: 'Empowers more teams across your organisation to use AI',
    contentImage: 'https://placehold.co/600x400/0d1117/ec4899?text=Code+Snippet+3'
  },
  {
    tabTitle: 'Technology-Neutral Integration',
    tabDescription: 'Connects with any system and adapts to your stack',
    contentImage: 'https://placehold.co/600x400/0d1117/f59e0b?text=Code+Snippet+4'
  },
  {
    tabTitle: 'Track Record of Innovation and Results',
    tabDescription: 'Proven success in delivering transformative AI solutions',
    contentImage: 'https://placehold.co/600x400/0d1117/ef4444?text=Code+Snippet+5'
  }
];

const Stats = () => {
  const [activeTab, setActiveTab] = useState(2); // Set "No-Code Friendly Tools" as default active tab

  return (
    <section className="stats-section relative"> {/* Added relative for absolute positioning of the curve */}
      {/* SVG for the top curve - Adjusted to create an upward hill */}
      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none" // Ensures the SVG scales without distortion
        >
          <path
            d="M0,100 L0,0 C30,80 70,80 100,0 L100,100 Z"
            fill="#0A0A1F" // Matches the background color of FutureSection
          />
        </svg>
      </div>

      <div className="stats-glow"></div>
      <div className="stats-container relative z-20"> {/* Added relative z-20 for content to be above curve */}

        <h2 className="stats-heading">
          Accelerate productivity and drive innovation with powerful AI Solutions
        </h2>
        <p className="stats-subheading">
          The future is happening now
        </p>

        <div className="stats-grid">
          <div className="stat-item">
            <p className="stat-number">400+</p>
            <p className="stat-label">Enterprises Served</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">2015</p>
            <p className="stat-label">Established Since</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">1000+</p>
            <p className="stat-label">Team Members Globally</p>
          </div>
        </div>

        <div className="tab-section">
          <div className="tab-navigation">
            {tabData.map((tab, index) => (
              <button
                key={tab.tabTitle}
                onClick={() => setActiveTab(index)}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
              >
                <p className="tab-title">{tab.tabTitle}</p>
                <p className="tab-description">{tab.tabDescription}</p>
              </button>
            ))}
          </div>

          <div className="tab-content">
            <img
              src={tabData.at(activeTab)?.contentImage}
              alt={tabData.at(activeTab)?.tabTitle}
              className="tab-content-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;
