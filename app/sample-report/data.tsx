import React from 'react';

export const reportData = {
    cover: {
        title: "Lemina Sample Report",
        subtitle: "African Tech Market Intelligence",
        tagline: "Building the investment bank for African tech",
        stats: [
            { number: "80+", label: "Companies Tracked" },
            { number: "FREE", label: "Sample Report" },
            { number: "3", label: "Companies Shown" }
        ],
        contact: "lemina.co | admin@lemina.co"
    },
    intro: {
        title: "What is Lemina?",
        description: (
            <>
                Lemina is the <strong className="text-white print:text-black">market intelligence engine</strong> for investors deploying capital
                in African markets. We provide comprehensive, verified data on 80+ Nigerian tech companies—helping
                you source deals, conduct due diligence, and make confident investment decisions across all sectors.
            </>
        ),
        problem: {
            title: "The Problem We Solve",
            text: [
                "You're about to write a $10,000 check. Maybe $50,000. Maybe more.",
                "You've already done your homework - you've heard about the founders, checked references, run models. You're doing everything right."
            ],
            painPoints: [
                {
                    bold: "Who else is building in this space?",
                    text: "You've mapped out 1 or 2 competitors through your network and research. But what if there's a stealth player you missed? What if the market's more crowded than you think?"
                },
                {
                    bold: "What's their REAL traction?",
                    text: "Founder says \"1,000 active users.\" Your DD confirms they have 1,000 sign-ups. But how many are actually active? How many are paying? What's the retention curve look like?"
                },
                {
                    bold: "Founder says \"$5B TAM.\" You spend 20 hours building a bottom-up model. It's actually $200M.",
                    text: ""
                },
                {
                    bold: "What's the regulatory minefield?",
                    text: "They've been operating 18 months. Product-market fit is there. But do they have the licenses they need? Are they compliant? Or is your capital about to fund a very expensive legal lesson?"
                }
            ],
            cost: [
                { bold: "You're missing deals because they never entered your network.", text: "The founder never got the introduction. You literally couldn't have known they existed." },
                { bold: "You're getting burned because the data you need doesn't exist in one place.", text: "It's scattered across your network, WhatsApp chats, LinkedIn posts, and founder claims you can't fully verify." },
                { bold: "You're slow to a decision because comprehensive DD takes weeks.", text: "The system for comprehensive DD is inefficient." }
            ]
        },
        solution: {
            title: "The Lemina Solution",
            subtitle: "We give you what you actually need: certainty.",
            pillars: [
                { title: "1. Company Profiling", desc: "Every Nigerian tech company worth knowing about. Verified traction data (revenue, users, growth rates). Team backgrounds. Product details. Funding history. Updated in real-time as companies hit milestones." },
                { title: "2. Market Sizing & Landscaping", desc: "Know exactly how big the market is. See who's winning, who's losing, and why. Competitive positioning maps. TAM/SAM/SOM calculations done for you. Sector-level trends and predictions." },
                { title: "3. Regulatory Verification", desc: "Registration status verified via public records and secured. Licensing tracked and updated. Compliance red flags identified early. Know before you invest: are they operating legally or on borrowed time?" },
                { title: "4. Real-Time Updates", desc: "Companies raise funding? You know within 24 hours. Product launch? You see it. Key hire? Tracked. Burn rate accelerating? Alert sent. Dashboard launches December 2025 with live data." }
            ],
            methodology: [
                { title: "Step 1: Founders keep us updated", desc: "We built a system where founders WANT to update their profiles. Why? Because investors using Lemina actively search for companies. The more complete and current your profile, the more investor visibility you get. Founders compete to be featured. We get fresh data. You get accurate intelligence." },
                { title: "Step 2: We collect what investors actually need", desc: "Not vanity metrics. Real data: For revenue-stage companies: MRR/ARR, burn rate, runway, CAC, LTV, churn + financial analyses. For pre-revenue companies: active user engagement metrics, waitlist size (verified), pilot customer commitments, founder background, technical moat assessment. We ask the questions YOU would ask in DD." },
                { title: "Step 3: Multi-source verification", desc: "Founder says \"$10K MRR\"? We verify with: payment processor data (where available), team size (salary burn implies revenue), LinkedIn activity, customer testimonials, regulatory filings. Our comprehensive algorithm affords us the leverage to verify against multiple sources. If we can't verify, we flag it." },
                { title: "Step 4: Market sizing using real data, not fantasy", desc: "Not \"Nigeria has 200M people, therefore TAM is $5B.\" We calculate bottom-up: How many companies exist in this sector? What's the average revenue per company? What's the growth rate? What's current market penetration? You get TAM/SAM/SOM models built from actual market data." }
            ]
        }
    },
    companies: [
        {
            name: "Serendpt AI",
            verified: true,
            stage: "Pre-Seed",
            score: "90",
            metrics: [
                { label: "Sector", value: "EdTech / AI" },
                { label: "Sub-sector", value: "Interactive Learning" },
                { label: "Website", value: "serendptai.com" },
                { label: "Founded", value: "2025" },
                { label: "HQ", value: "Port Harcourt, Nigeria" },
                { label: "Team Size", value: "5 (3 technical, 2 product)" },
                { label: "Last Round", value: "F&F <$5K (Q3 2025)" },
                { label: "Valuation", value: "NA" },
                { label: "Active Users", value: "300" },
                { label: "MoM Growth", value: "+42% (user sessions)" },
                { label: "ARR", value: "Pre-revenue (pilot)" },
                { label: "Runway", value: "11 months" },
                { label: "Business Model", value: "B2C Freemium" },
                { label: "Regulatory Status", value: "NA" }
            ],
            sources: "Founder self-report (form submission), CAC registry (verified Nov 2025), LinkedIn team profiles (cross-checked), beta user testimonials (3 sampled), website analytics snippet (shared), GitHub activity (public repos).",
            analysis: "Serendpt AI enables voice-based interactive reading of uploaded books with real-time Q&A. Solves accessibility for visually impaired and dyslexic students in Nigeria's 50M+ student market. MVP live with 300 average users averaging 21 min/session (top 15% engagement vs edtech peers). Technical moat: proprietary TTS + LLM fine-tuned on African accents (94% accuracy vs 72% generic models).",
            moat: "Accent-specific TTS model + school pilot commitments (3 Lagos private schools signed LOIs)",
            market: "Nigeria edtech TAM $1.2B by 2030 (Lemina bottom-up: 12M secondary students × $100 avg spend). Currently <2% digitized. Early traction beats 88% of pre-seed edtech peers.",
            risk: "Pre-revenue dependency on B2B conversion; pilot retention must hit 60%+ to validate",
            readiness: { status: "BUY", desc: "High moat, verified early PMF, capital efficient (11-month runway on <$5K). Ideal for $50-150K pre-seed check." },
            updated: "November, 2025"
        },
        {
            name: "Yadsale",
            verified: false,
            stage: "Pre-Seed",
            score: "85",
            metrics: [
                { label: "Sector", value: "E-commerce / Classifieds" },
                { label: "Sub-sector", value: "Online Marketplace" },
                { label: "Website", value: "yadsale.com" },
                { label: "Founded", value: "2024" },
                { label: "HQ", value: "Lagos, Nigeria" },
                { label: "Team Size", value: "4 (2 eng, 2 ops)" },
                { label: "Last Round", value: "F&F <$5K (Q1 2025)" },
                { label: "Valuation", value: "NA" },
                { label: "GMV (Q4 2025)", value: "<$10K" },
                { label: "MoM Growth", value: "+29%" },
                { label: "Take Rate", value: "-" },
                { label: "Active States", value: "3" },
                { label: "Business Model", value: "Commission + Ads" },
                { label: "Regulatory Status", value: "CAC registered" }
            ],
            sources: "Investor deck (shared), CAC filings, payout logs (sampled), campus ambassador reports (7 verified), Google Analytics export, online presence, founder interview.",
            analysis: "Yadsale isn’t just about buying and selling, it’s about making the whole process feel effortless, transparent, and rewarding. Less than $10k GMV in Q4, 2025 across 3 states in Nigeria, and fast-growing. 68% repeat buyers, 2.1 listings/user. Network effects kicking in (>1,000 listings each).",
            moat: "Exclusive campus partnerships + verified student IDs (reduces fraud 84% vs open marketplaces)",
            risk: "Items seasonality",
            readiness: { status: "BUY", desc: "Proven unit economics, network effects emerging. Strong seed extension candidate." },
            updated: "November, 2025"
        },
        {
            name: "Xara",
            verified: false,
            stage: "Pre-Seed",
            score: "87",
            metrics: [
                { label: "Sector", value: "Fintech / AI" },
                { label: "Sub-sector", value: "WhatsApp Banking Assistant" },
                { label: "Website", value: "usexara.ai" },
                { label: "Founded", value: "2025" },
                { label: "HQ", value: "Lagos, Nigeria" },
                { label: "Team Size", value: "4 (2 eng, 1 prod, 1 ops)" },
                { label: "Last Round", value: "Bootstrapped" },
                { label: "Valuation", value: "NA" },
                { label: "Active Users", value: "~2,800" },
                { label: "MoM Growth", value: "+48%" },
                { label: "TVL (Processed)", value: "<₦3B (~$2M) Q4 2025" },
                { label: "Runway", value: "12 months" },
                { label: "Business Model", value: "Txn fees + Premium" },
                { label: "Regulatory Status", value: "CAC reg; CBN pending" }
            ],
            sources: "Live site demo, founder form + WhatsApp chat logs, CAC filings, waitlist export, bank integration list, Techpoint Africa mention.",
            analysis: "Xara is a WhatsApp-native AI for P2P transfers, spending tracking, and bill payments across 50+ Nigerian banks. Context-aware, supports voice/Pidgin/English. ₦3B processed Q3 2025; 2,800 active users.",
            moat: "WhatsApp lock-in + multi-bank API integrations + voice AI for low-literacy users",
            market: "Nigeria digital payments $48B annually; WhatsApp users 120M. Xara targets informal sector.",
            risk: "CBN PSSP approval pending; dependency on WhatsApp API stability",
            readiness: { status: "BUY", desc: "High engagement, capital-efficient. $100-300K pre-seed to secure PSSP and scale." },
            updated: "November, 2025"
        }
    ],
    dashboard: {
        features: [
            { title: "Advanced Search & Filters", desc: "Find exactly what you're looking for in seconds. Filter by 20+ criteria: sector, stage, revenue range, growth trajectory, fundraising status, location, team size, capital efficiency, runway remaining, and more." },
            { title: "Real-Time Updates", desc: "See updates within 24-48 hours of companies announcing funding, launching products, or hitting key milestones. Stay ahead, not behind." },
            { title: "Custom Alerts", desc: `"Alert me when: an embedded finance company, pre-seed stage, announces they're raising." Set it once. We email you when deals matching your exact criteria become available. Never miss your thesis again.` },
            { title: "Market Analytics", desc: "Interactive charts showing funding trends over time, sector-level growth rates, valuation multiple evolution. See where capital is flowing. Adjust your thesis based on data." },
            { title: "Dealroom, CRM", desc: "Track companies you've contacted, log meeting notes, set follow-up reminders. Your entire deal pipeline in one place alongside the intelligence. Stop using scattered spreadsheets." },
            { title: "Export Everything", desc: "Download company lists, market analyses, and sector reports as CSV, PDF, or Excel whenever you need them. Use for investment memos, IC presentations, or your own analysis." }
        ],
        earlyAdopter: {
            price: "$149",
            regularPrice: "$3000",
            savings: "$29,851",
            benefits: [
                "Full Lemina methodology profiles",
                "80+ verified companies",
                "Confidence scores & sources",
                "Investment readiness ratings",
                "Market sizing (bottom-up)",
                "Regulatory verification",
                "Real-time dashboard (lifetime)",
                "Custom alerts & CRM",
                "Shape future features",
                "Founder introductions"
            ]
        }
    },
    faq: [
        { q: "Is this just publicly available information I could find myself?", a: "Technically yes, practically no. You COULD spend 100+ hours per quarter scraping 50+ sources, calling founders for verification, cross-referencing data points, building market sizing models from scratch, tracking regulatory changes, and synthesizing everything into actionable intelligence. Or you pay $149 and get it done for you—by someone who does this full-time." },
        { q: "How often is the data updated?", a: "Until the dashboard launches (December 2026), you get quarterly reports delivered via email. After the dashboard launches, data updates in real-time as companies announce funding, launch products, or hit key milestones." },
        { q: "I focus on a specific sector. Will this still be useful?", a: "We track all major Nigerian tech sectors. If you only invest in one sector, you'll filter to see only those companies. That said, knowing what's happening across ALL sectors helps you spot trends early." },
        { q: "What's the catch? Why is this so cheap?", a: "No catch. We're in early adopter phase. We want 10 sophisticated investors using the product so we can get feedback and build exactly what you need. Regular pricing will be $3000/year starting Q1 2026." },
        { q: "What if I'm not satisfied with the full report?", a: "If the full report doesn't meet your expectations when delivered in Q1 2026, email us within 14 days and we'll refund 100%. No questions asked." },
        { q: "When do I actually get access to everything?", a: "Full intelligence report: Delivered in Q1 2026. Dashboard access: December 2026 launch. Quarterly updates: Every 3 months thereafter." },
        { q: "How do I know the data is actually accurate?", a: "Multi-source verification on every data point: We cross-reference founder claims with payment processor integrations, team size verified via LinkedIn, customer testimonials, regulatory filings checked against public records." }
    ]
};
