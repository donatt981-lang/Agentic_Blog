import React, { useState } from 'react';
import { Sparkles, Terminal, Zap, ArrowRight, BookOpen, DollarSign, CheckCircle2 } from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    title: "Building Autonomous Workflows with Make.com & Claude 3.5",
    category: "AI Automation",
    readTime: "5 min read",
    date: "Jul 2026",
    summary: "How to connect LLMs directly to your business apps to automate customer support, lead generation, and content pipelines without writing complex backend code.",
    content: `
      <h2>The Shift to Agentic Workflows</h2>
      <p>Traditional automation involved simple linear triggers: <em>If A happens, do B</em>. But with advanced AI models like Claude 3.5 and GPT-4o, we can build dynamic, decision-making workflows that operate autonomously.</p>
      
      <h3>Why Make.com is the Ultimate Engine</h3>
      <p>While custom code gives you control, maintaining servers and API endpoints for simple integrations is a hassle. <strong>Make.com</strong> provides a visual Canvas that allows you to connect hundreds of apps with zero infrastructure management.</p>

      <div className="my-6 p-4 bg-purple-900/30 border border-purple-500/30 rounded-xl">
        <h4 className="font-bold text-purple-300 mb-2">🚀 Ready to build your first AI agent?</h4>
        <p className="text-sm text-gray-300 mb-3">Get started with 10,000 free operations and 1 month free on the Core Plan using our official partner link below:</p>
        <a 
          href="https://www.make.com/en/register?pc=agenticblog" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
        >
          Claim Your Free Make.com Plan <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <h3>Key Components of an Agentic Pipeline</h3>
      <ul>
        <li><strong>Trigger:</strong> Inbound email, webhook, or scheduled database query.</li>
        <li><strong>Reasoning Layer:</strong> Passing structured prompts to an LLM to evaluate intent.</li>
        <li><strong>Execution:</strong> Routing outputs directly to CRMs, databases, or notification channels.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "How to Monetize AI Tools via High-Ticket Affiliate Marketing",
    category: "Monetization",
    readTime: "7 min read",
    date: "Jul 2026",
    summary: "A practical guide on how creators and engineers are generating recurring revenue by teaching automation systems built on top of top-tier SaaS platforms.",
    content: `
      <h2>The SaaS Affiliate Boom</h2>
      <p>Software platforms pay hefty recurring commissions to creators who show users how to solve real problems. Instead of pushing low-margin products, building tutorials around essential automation platforms like <strong>Make.com</strong> yields compounding passive income.</p>

      <h3>Step-by-Step Monetization Blueprint</h3>
      <ol>
        <li><strong>Identify Pain Points:</strong> Find repetitive workflows in marketing, software dev, or operations.</li>
        <li><strong>Build a Blueprint:</strong> Design a working scenario in Make.com that solves the issue automatically.</li>
        <li><strong>Publish & Educate:</strong> Write detailed breakdowns or record video walk-throughs highlighting your affiliate link.</li>
      </ol>

      <div className="my-6 p-4 bg-purple-900/30 border border-purple-500/30 rounded-xl">
        <h4 className="font-bold text-purple-300 mb-2">💡 Start Earning Recurrent Commissions</h4>
        <p className="text-sm text-gray-300 mb-3">Sign up for Make.com to build your own shareable templates and earn 35% recurring revenue on all referrals:</p>
        <a 
          href="https://www.make.com/en/register?pc=agenticblog" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
        >
          Create Your Make Account Now <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    `
  },
  {
    id: 3,
    title: "The $500/Day AI Pipeline: Fully Automated Content Distro",
    category: "Blueprints",
    readTime: "6 min read",
    date: "Jul 2026",
    summary: "Discover how top creators automate their entire multi-channel distribution setup using a single Make.com scenario connected to OpenAI and social APIs.",
    content: `
      <h2>Why Manual Content Posting is Dead</h2>
      <p>Creating content takes enough energy—manually reformatting, scheduling, and publishing to 5 different platforms is a waste of creative horsepower. By building a unified pipeline, you can turn a single article or video into a dozen tailor-made posts across Twitter, LinkedIn, Telegram, and WordPress.</p>

      <h3>The Architecture</h3>
      <p>By connecting your primary RSS feed or CMS into <strong>Make.com</strong>, every new publish event triggers an AI summarizer module that crafts unique captions tailored to each platform's culture and format requirements.</p>

      <div className="my-6 p-4 bg-purple-900/30 border border-purple-500/30 rounded-xl">
        <h4 className="font-bold text-purple-300 mb-2">⚡ Build This Exact Pipeline Free</h4>
        <p className="text-sm text-gray-300 mb-3">Set up your free Make.com environment today to import automation blueprints directly:</p>
        <a 
          href="https://www.make.com/en/register?pc=agenticblog" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
        >
          Get Started on Make.com <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    `
  }
];

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedArticle(null)}>
            <div className="p-2 bg-purple-600/20 rounded-lg border border-purple-500/30">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
              Agentic Blog
            </span>
          </div>
          <a
            href="https://www.make.com/en/register?pc=agenticblog"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg transition-all text-sm shadow-lg shadow-purple-900/20"
          >
            <Zap className="w-4 h-4" /> Try Make Free
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {selectedArticle ? (
          <article className="max-w-3xl mx-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="text-purple-400 hover:text-purple-300 text-sm mb-6 flex items-center gap-1 transition-colors"
            >
              ← Back to all articles
            </button>
            <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
              <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">
                {selectedArticle.category}
              </span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              {selectedArticle.title}
            </h1>
            <div
              className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base sm:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />
          </article>
        ) : (
          <div>
            {/* Hero */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Autonomous Workflows & AI Systems
              </h1>
              <p className="text-slate-400 text-lg">
                Practical engineering breakdowns on leveraging AI agents, automated pipelines, and SaaS monetization.
              </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {ARTICLES.map((art) => (
                <div
                  key={art.id}
                  onClick={() => setSelectedArticle(art)}
                  className="bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="text-purple-400 font-semibold">{art.category}</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 hover:text-purple-300 transition-colors">
                      {art.title}
                    </h2>
                    <p className="text-slate-400 text-sm line-clamp-3 mb-6">
                      {art.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                    Read article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/30 py-8 mt-20">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-500 text-sm">
          © 2026 Agentic Blog. Built with React & Vercel.
        </div>
      </footer>
    </div>
  );
}
