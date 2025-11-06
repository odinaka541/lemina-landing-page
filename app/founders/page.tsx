'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FormData {
  companyName: string;
  website: string;
  sector: string;
  description: string;
  foundedYear: string;
  hqCity: string;
  teamSize: string;
  stage: string;
  hasTraction: string;
  keyMetric: string;
  growthRate: string;
  fundingStatus: string;
  totalFunding: string;
  investors: string;
  raisingNow: string;
  raiseAmount: string;
  registered: string;
  license_cbn: boolean;
  license_sec: boolean;
  license_naicom: boolean;
  license_none: boolean;
  founderName: string;
  founderRole: string;
  founderEmail: string;
  founderLinkedIn: string;
  founderTwitter: string;
  featureInReports: boolean;
  shareWithInvestors: boolean;
  notifyViewers: boolean;
  quarterlyUpdates: boolean;
  newsletter: boolean;
}

export default function FoundersPage() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    website: '',
    sector: '',
    description: '',
    foundedYear: '',
    hqCity: '',
    teamSize: '',
    stage: '',
    hasTraction: '',
    keyMetric: '',
    growthRate: '',
    fundingStatus: '',
    totalFunding: '',
    investors: '',
    raisingNow: '',
    raiseAmount: '',
    registered: '',
    license_cbn: false,
    license_sec: false,
    license_naicom: false,
    license_none: false,
    founderName: '',
    founderRole: '',
    founderEmail: '',
    founderLinkedIn: '',
    founderTwitter: '',
    featureInReports: true,
    shareWithInvestors: true,
    notifyViewers: true,
    quarterlyUpdates: true,
    newsletter: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/submit-company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Submission failed');
      }

      // redirect to thank you page on success
      window.location.href = '/thank-you';
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Submission failed. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
          background: #0A0A0A;
          color: #FAFAFA;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .gradient-bg {
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 50% 50%,
                  rgba(16, 185, 129, 0.15) 0%,
                  rgba(139, 92, 246, 0.1) 25%,
                  rgba(252, 211, 77, 0.05) 50%,
                  transparent 70%);
          animation: rotate 20s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .grid-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px);
          background-size: 100px 100px;
          pointer-events: none;
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .header {
          text-align: center;
          margin-bottom: 60px;
          padding-top: 40px;
        }

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
        }

        .header h1 {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -2px;
          background: linear-gradient(135deg, #FAFAFA 0%, #A0A0A0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header .subtitle {
          font-size: 22px;
          color: #10B981;
          font-weight: 500;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .header .description {
          font-size: 18px;
          color: #D0D0D0;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .benefits {
          background: rgba(16, 185, 129, 0.03);
          border: 1px solid rgba(16, 185, 129, 0.1);
          border-radius: 16px;
          padding: 40px;
          margin-bottom: 60px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .benefits h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #10B981;
          letter-spacing: -0.5px;
        }

        .benefits ul {
          list-style: none;
        }

        .benefits li {
          padding: 12px 0;
          padding-left: 32px;
          position: relative;
          font-size: 16px;
          color: #D0D0D0;
          line-height: 1.6;
        }

        .benefits li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10B981;
          font-weight: bold;
          font-size: 20px;
        }

        .form-card {
          background: rgba(16, 185, 129, 0.03);
          border: 1px solid rgba(16, 185, 129, 0.1);
          border-radius: 16px;
          padding: 40px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .form-section {
          margin-bottom: 48px;
        }

        .form-section:last-of-type {
          margin-bottom: 0;
        }

        .form-section h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #10B981;
          letter-spacing: -0.5px;
          padding-bottom: 12px;
          border-bottom: 2px solid rgba(16, 185, 129, 0.2);
        }

        .form-group {
          margin-bottom: 24px;
        }

        label {
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
          color: #FAFAFA;
          font-size: 15px;
        }

        label .required {
          color: #EF4444;
          margin-left: 4px;
        }

        label .optional {
          color: #64748B;
          font-weight: 400;
          font-size: 14px;
          margin-left: 6px;
        }

        input[type="text"],
        input[type="email"],
        input[type="url"],
        input[type="number"],
        select,
        textarea {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 8px;
          font-size: 15px;
          color: #FAFAFA;
          transition: all 0.3s;
          font-family: inherit;
        }

        input::placeholder,
        textarea::placeholder {
          color: #64748B;
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #10B981;
          background: rgba(16, 185, 129, 0.05);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2310B981' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
        }

        select option {
          background: #1A1A1A;
          color: #FAFAFA;
        }

        textarea {
          min-height: 100px;
          resize: vertical;
        }

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 12px;
        }

        .radio-group label {
          display: flex;
          align-items: center;
          font-weight: 400;
          cursor: pointer;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(16, 185, 129, 0.15);
          border-radius: 8px;
          transition: all 0.3s;
        }

        .radio-group label:hover {
          border-color: #10B981;
          background: rgba(16, 185, 129, 0.05);
        }

        .radio-group input[type="radio"] {
          width: auto;
          margin-right: 12px;
          cursor: pointer;
          accent-color: #10B981;
        }

        .checkbox-group {
          margin-top: 16px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          border: 1px solid rgba(16, 185, 129, 0.1);
        }

        .checkbox-group label {
          display: flex;
          align-items: flex-start;
          margin-bottom: 14px;
          font-weight: 400;
          cursor: pointer;
        }

        .checkbox-group label:last-child {
          margin-bottom: 0;
        }

        .checkbox-group input[type="checkbox"] {
          width: auto;
          margin-right: 12px;
          margin-top: 4px;
          cursor: pointer;
          accent-color: #10B981;
        }

        .helper-text {
          font-size: 14px;
          color: #64748B;
          margin-top: 8px;
          line-height: 1.5;
        }

        .submit-btn {
          width: 100%;
          padding: 18px;
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: #FAFAFA;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
          margin-top: 32px;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 48px rgba(16, 185, 129, 0.5);
        }

        .submit-btn:disabled {
          background: #374151;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .error-message {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #FCA5A5;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 24px;
        }

        .footer {
          text-align: center;
          padding: 40px 20px;
          margin-top: 60px;
          border-top: 1px solid rgba(16, 185, 129, 0.1);
        }

        .footer a {
          color: #10B981;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.3s;
        }

        .footer a:hover {
          color: #FCD34D;
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 40px;
          }

          .header .subtitle {
            font-size: 18px;
          }

          .header .description {
            font-size: 16px;
          }

          .form-card {
            padding: 24px;
          }

          .benefits {
            padding: 24px;
          }
        }
      `}</style>

      <div className="gradient-bg"></div>
      <div className="grid-overlay"></div>

      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="logo">
            <img src="/assets/lemina.svg" alt="Lemina" style={{width: '40px', height: '40px', borderRadius: '10px'}} />
          </div>
          <h1>Add Your Company</h1>
          <div className="subtitle">Get discovered by investors actively deploying capital</div>
          <p className="description">
            Featured in intelligence reports. Connected to active VCs. Free company profile in our verified database.
          </p>
        </div>

        {/* Benefits */}
        <div className="benefits">
          <h2>Why Add Your Company?</h2>
          <ul>
            <li>Get discovered by VCs and angel investors actively looking for deals</li>
            <li>Featured in our intelligence reports read by 100+ investors</li>
            <li>Free company profile in our verified database</li>
            <li>Potential warm introductions to investors searching for what you're building</li>
            <li>Quarterly reminders to keep your profile fresh and discoverable</li>
          </ul>
        </div>

        {/* Form */}
        <div className="form-card">
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit}>
            {/* SECTION 1: COMPANY BASICS */}
            <div className="form-section">
              <h3>1. Company Basics</h3>

              <div className="form-group">
                <label htmlFor="companyName">Company Name<span className="required">*</span></label>
                <input 
                  type="text" 
                  id="companyName" 
                  name="companyName" 
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="website">Website<span className="required">*</span></label>
                <input 
                  type="url" 
                  id="website" 
                  name="website" 
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://yourcompany.com" 
                  required 
                />
                <div className="helper-text">Include https://</div>
              </div>

              <div className="form-group">
                <label htmlFor="sector">Primary Sector<span className="required">*</span></label>
                <select 
                  id="sector" 
                  name="sector" 
                  value={formData.sector}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select sector...</option>
                  <option value="payments">Payments & Processing</option>
                  <option value="lending">Lending & Credit</option>
                  <option value="neobank">Digital Banking / Neobank</option>
                  <option value="infrastructure">Financial Infrastructure / APIs</option>
                  <option value="wealthtech">Wealth Management / Investment</option>
                  <option value="insurtech">Insurance Technology</option>
                  <option value="regtech">Regulatory Technology</option>
                  <option value="other-fintech">Other Fintech</option>
                  <option value="healthtech">Healthtech</option>
                  <option value="edtech">Edtech</option>
                  <option value="agritech">Agritech</option>
                  <option value="logistics">Logistics</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Other</option>
                </select>
                <div className="helper-text">We focus on fintech but track all Nigerian tech</div>
              </div>

              <div className="form-group">
                <label htmlFor="description">One-line Description<span className="required">*</span></label>
                <input 
                  type="text" 
                  id="description" 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="e.g., B2B payment infrastructure for SMEs" 
                  required 
                  maxLength={120} 
                />
                <div className="helper-text">What you build, for whom - max 120 characters</div>
              </div>

              <div className="form-group">
                <label htmlFor="foundedYear">Founded Year<span className="required">*</span></label>
                <input 
                  type="number" 
                  id="foundedYear" 
                  name="foundedYear" 
                  value={formData.foundedYear}
                  onChange={handleInputChange}
                  placeholder="2024" 
                  min="2010"
                  max="2025" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="hqCity">Headquarters<span className="required">*</span></label>
                <input 
                  type="text" 
                  id="hqCity" 
                  name="hqCity" 
                  value={formData.hqCity}
                  onChange={handleInputChange}
                  placeholder="e.g., Lagos, Nigeria" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="teamSize">Team Size<span className="required">*</span></label>
                <select 
                  id="teamSize" 
                  name="teamSize" 
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select range...</option>
                  <option value="1-5">1-5 people</option>
                  <option value="6-10">6-10 people</option>
                  <option value="11-25">11-25 people</option>
                  <option value="26-50">26-50 people</option>
                  <option value="51-100">51-100 people</option>
                  <option value="100+">100+ people</option>
                </select>
              </div>
            </div>

            {/* SECTION 2: TRACTION & METRICS */}
            <div className="form-section">
              <h3>2. Traction & Metrics</h3>

              <div className="form-group">
                <label htmlFor="stage">Current Stage<span className="required">*</span></label>
                <select 
                  id="stage" 
                  name="stage" 
                  value={formData.stage}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select stage...</option>
                  <option value="idea">Idea / Pre-product</option>
                  <option value="mvp">MVP / Beta</option>
                  <option value="pre-revenue">Live Product / Pre-revenue</option>
                  <option value="revenue">Generating Revenue</option>
                  <option value="scaling">Scaling / Growth</option>
                </select>
              </div>

              <div className="form-group">
                <label>Do you have traction?<span className="required">*</span></label>
                <div className="radio-group">
                  <label>
                    <input 
                      type="radio" 
                      name="hasTraction" 
                      value="yes" 
                      checked={formData.hasTraction === 'yes'}
                      onChange={handleInputChange}
                      required 
                    />
                    Yes - we have users/revenue
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="hasTraction" 
                      value="no" 
                      checked={formData.hasTraction === 'no'}
                      onChange={handleInputChange}
                      required 
                    />
                    No - still building
                  </label>
                </div>
              </div>

              {formData.hasTraction === 'yes' && (
                <div className="form-group">
                  <label htmlFor="keyMetric">Key Metric<span className="optional">(optional but recommended)</span></label>
                  <input 
                    type="text" 
                    id="keyMetric" 
                    name="keyMetric"
                    value={formData.keyMetric}
                    onChange={handleInputChange}
                    placeholder="e.g., 10,000 active users OR $50k MRR OR ₦1B monthly GMV" 
                  />
                  <div className="helper-text">Your most impressive number - helps investors discover you</div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="growthRate">Growth Rate (last 3 months)<span className="optional">(optional)</span></label>
                <select 
                  id="growthRate" 
                  name="growthRate"
                  value={formData.growthRate}
                  onChange={handleInputChange}
                >
                  <option value="">Select range...</option>
                  <option value="negative">Negative / Flat</option>
                  <option value="0-10">0-10% monthly</option>
                  <option value="10-20">10-20% monthly</option>
                  <option value="20-50">20-50% monthly</option>
                  <option value="50+">50%+ monthly</option>
                </select>
              </div>
            </div>

            {/* SECTION 3: FUNDING */}
            <div className="form-section">
              <h3>3. Funding</h3>

              <div className="form-group">
                <label htmlFor="fundingStatus">Funding Status<span className="required">*</span></label>
                <select 
                  id="fundingStatus" 
                  name="fundingStatus" 
                  value={formData.fundingStatus}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select status...</option>
                  <option value="bootstrapped">Bootstrapped / Self-funded</option>
                  <option value="friends-family">Friends & Family</option>
                  <option value="pre-seed">Pre-seed</option>
                  <option value="seed">Seed</option>
                  <option value="series-a">Series A</option>
                  <option value="series-b+">Series B+</option>
                  <option value="raising">Currently Raising</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="totalFunding">Total Funding Raised<span className="optional">(optional)</span></label>
                <select 
                  id="totalFunding" 
                  name="totalFunding"
                  value={formData.totalFunding}
                  onChange={handleInputChange}
                >
                  <option value="">Select range...</option>
                  <option value="0">$0 (Bootstrapped)</option>
                  <option value="1-50k">$1k - $50k</option>
                  <option value="50-250k">$50k - $250k</option>
                  <option value="250k-1m">$250k - $1M</option>
                  <option value="1-5m">$1M - $5M</option>
                  <option value="5m+">$5M+</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="investors">Key Investors<span className="optional">(optional)</span></label>
                <input 
                  type="text" 
                  id="investors" 
                  name="investors"
                  value={formData.investors}
                  onChange={handleInputChange}
                  placeholder="e.g., TLcom Capital, Partech Africa" 
                />
                <div className="helper-text">If you've raised from notable VCs, list them</div>
              </div>

              <div className="form-group">
                <label>Are you raising now?<span className="required">*</span></label>
                <div className="radio-group">
                  <label>
                    <input 
                      type="radio" 
                      name="raisingNow" 
                      value="yes" 
                      checked={formData.raisingNow === 'yes'}
                      onChange={handleInputChange}
                      required 
                    />
                    Yes - actively fundraising
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="raisingNow" 
                      value="no" 
                      checked={formData.raisingNow === 'no'}
                      onChange={handleInputChange}
                      required 
                    />
                    No - not raising currently
                  </label>
                </div>
              </div>

              {formData.raisingNow === 'yes' && (
                <div className="form-group">
                  <label htmlFor="raiseAmount">How much are you raising?<span className="optional">(optional)</span></label>
                  <input 
                    type="text" 
                    id="raiseAmount" 
                    name="raiseAmount" 
                    value={formData.raiseAmount}
                    onChange={handleInputChange}
                    placeholder="e.g., $500k seed round" 
                  />
                </div>
              )}
            </div>

            {/* SECTION 4: REGULATORY & COMPLIANCE */}
            <div className="form-section">
              <h3>4. Regulatory & Compliance</h3>
              <p style={{fontSize: '14px', color: '#64748B', marginBottom: '20px'}}>
                Helps investors assess regulatory risk and compliance status
              </p>

              <div className="form-group">
                <label>Is your company officially registered?<span className="required">*</span></label>
                <div className="radio-group">
                  <label>
                    <input 
                      type="radio" 
                      name="registered" 
                      value="yes" 
                      checked={formData.registered === 'yes'}
                      onChange={handleInputChange}
                      required 
                    />
                    Yes (CAC registered)
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      name="registered" 
                      value="no" 
                      checked={formData.registered === 'no'}
                      onChange={handleInputChange}
                      required 
                    />
                    No / In progress
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Do you have/need regulatory licenses?<span className="optional">(optional)</span></label>
                <div className="checkbox-group">
                  <label>
                    <input 
                      type="checkbox" 
                      name="license_cbn" 
                      checked={formData.license_cbn}
                      onChange={handleInputChange}
                    />
                    CBN License (Central Bank of Nigeria)
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="license_sec" 
                      checked={formData.license_sec}
                      onChange={handleInputChange}
                    />
                    SEC License (Securities & Exchange)
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="license_naicom" 
                      checked={formData.license_naicom}
                      onChange={handleInputChange}
                    />
                    NAICOM License (Insurance)
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="license_none" 
                      checked={formData.license_none}
                      onChange={handleInputChange}
                    />
                    No licenses required for our business
                  </label>
                </div>
              </div>
            </div>

            {/* SECTION 5: FOUNDER INFO */}
            <div className="form-section">
              <h3>5. Your Information</h3>

              <div className="form-group">
                <label htmlFor="founderName">Your Full Name<span className="required">*</span></label>
                <input 
                  type="text" 
                  id="founderName" 
                  name="founderName" 
                  value={formData.founderName}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="founderRole">Your Role<span className="required">*</span></label>
                <input 
                  type="text" 
                  id="founderRole" 
                  name="founderRole" 
                  value={formData.founderRole}
                  onChange={handleInputChange}
                  placeholder="e.g., CEO, Co-Founder"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="founderEmail">Your Email<span className="required">*</span></label>
                <input 
                  type="email" 
                  id="founderEmail" 
                  name="founderEmail" 
                  value={formData.founderEmail}
                  onChange={handleInputChange}
                  required 
                />
                <div className="helper-text">We'll use this to notify you when investors view your profile</div>
              </div>

              <div className="form-group">
                <label htmlFor="founderLinkedIn">Your LinkedIn<span className="optional">(optional but recommended)</span></label>
                <input 
                  type="url" 
                  id="founderLinkedIn" 
                  name="founderLinkedIn"
                  value={formData.founderLinkedIn}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="founderTwitter">Your Twitter/X<span className="optional">(optional)</span></label>
                <input 
                  type="text" 
                  id="founderTwitter" 
                  name="founderTwitter" 
                  value={formData.founderTwitter}
                  onChange={handleInputChange}
                  placeholder="@yourhandle" 
                />
              </div>
            </div>

            {/* SECTION 6: PERMISSIONS */}
            <div className="form-section">
              <h3>6. Permissions</h3>

              <div className="checkbox-group">
                <label>
                  <input 
                    type="checkbox" 
                    name="featureInReports" 
                    checked={formData.featureInReports}
                    onChange={handleInputChange}
                    required 
                  />
                  <strong style={{color: '#FAFAFA'}}>Yes, feature my company in Lemina intelligence reports</strong>
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="shareWithInvestors" 
                    checked={formData.shareWithInvestors}
                    onChange={handleInputChange}
                  />
                  Yes, share my profile with investors looking for companies like mine
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="notifyViewers" 
                    checked={formData.notifyViewers}
                    onChange={handleInputChange}
                  />
                  Yes, notify me when investors view my profile
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="quarterlyUpdates" 
                    checked={formData.quarterlyUpdates}
                    onChange={handleInputChange}
                  />
                  Yes, send me reminders to update my company profile quarterly
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="newsletter" 
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                  />
                  Yes, send me market insights newsletter
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Add My Company →'}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>Questions? Email <a href="mailto:admin@lemina.co">admin@lemina.co</a> or <Link href="/">return to homepage</Link></p>
        </div>
      </div>
    </>
  );
}