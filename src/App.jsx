import React, { useState } from 'react';

const ARTICLES = [
  {
    id: 1,
    title: "The Ghost in the Code: How a Solo Founder Built a $40k/Mo Empire While Sleeping",
    category: "Investigative Exposé",
    readTime: "9 min read",
    date: "July 2026",
    summary: "An inside look at how decentralized webhook logic and autonomous LLM agents are allowing single operators to out-execute 50-person corporations.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="text-lg text-purple-200 font-medium mb-6">At 3:14 AM on a Tuesday, while traditional corporate offices sat pitch black and empty, a silent background server in Lagos processed its 100,000th automated transaction. No managers were awake. No customer support queues were jammed. Just pure, unadulterated autonomous logic.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Death of the Traditional Startup Structure</h2>
      <p class="text-slate-300 mb-4">For decades, scaling a digital empire meant a brutal treadmill of hiring virtual assistants, managing payroll overhead, and drowning in operational bottlenecks. But a quiet underground shift is happening in 2026. Solo builders are leveraging automated orchestration tools to command virtual workforces that never sleep, never complain, and cost fractions of a cent per execution.</p>
      
      <div class="my-8 p-6 bg-gradient-to-r from-purple-950/80 to-slate-900 rounded-2xl border border-purple-500/40 shadow-xl">
        <h4 class="font-extrabold text-purple-300 text-lg mb-2">🔥 The Blueprint Disclosure</h4>
        <p class="text-slate-300 text-sm leading-relaxed">The secret isn't writing more code—it's connecting visual logic triggers to high-efficiency language models that handle customer intent natively.</p>
      </div>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">Inside the Machine: Step-by-Step Architecture</h3>
      <p class="text-slate-300 mb-4">When a user triggers an inbound request, it hits an edge webhook. Instead of routing to a human desk, the payload is parsed, checked against vector databases, and resolved autonomously in under 400 milliseconds.</p>

      <div class="my-10 p-8 bg-slate-900/90 rounded-2xl border border-purple-500/50 text-center shadow-2xl">
        <h4 class="font-black text-white text-xl mb-3">Want to Build Your Own Automated Syndicate?</h4>
        <p class="text-sm text-slate-400 mb-6 max-w-lg mx-auto">Stop doing manual tasks. Build your first autonomous operational loop visually today.</p>
        <a href="https://www.make.com/en/register?pc=agenticblog" target="_blank" rel="noopener noreferrer" class="inline-block bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-purple-600/40 text-base">Claim Your Free Make.com Account →</a>
      </div>
    `
  },
  {
    id: 2,
    title: "Silicon Valley's Worst Kept Secret: Why LLMs Are Rebuilding Entire Supply Chains",
    category: "Industry Deep-Dive",
    readTime: "11 min read",
    date: "July 2026",
    summary: "How predictive neural networks and automated sensor telemetry are rewriting the rules of global shipping, logistics, and hardware deployment.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="text-lg text-purple-200 font-medium mb-6">Physical infrastructure is finally talking back. For years, automated hardware systems operated on brittle, hardcoded scripts that shattered the moment a single sensor encountered real-world interference.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Bridging Edge Hardware and Cloud Neural Nets</h2>
      <p class="text-slate-300 mb-4">By pairing micro-controller telemetry directly with cloud execution pipelines, modern engineers are crafting adaptive closed-loop systems. When physical friction or electrical noise occurs, the system doesn't crash—it adapts its operating parameters on the fly.</p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">The Real-Time Fault Recovery Standard</h3>
      <p class="text-slate-300 mb-4">Sub-second recovery isn't just a luxury anymore; it's the baseline expectation for high-performance automation frameworks operating at scale.</p>

      <div class="my-10 p-8 bg-slate-900/90 rounded-2xl border border-purple-500/50 text-center shadow-2xl">
        <h4 class="font-black text-white text-xl mb-3">Connect Your Physical Data Streams</h4>
        <p class="text-sm text-slate-400 mb-6 max-w-lg mx-auto">Scale your physical and digital workflows instantly with enterprise visual builders.</p>
        <a href="https://www.make.com/en/register?pc=agenticblog" target="_blank" rel="noopener noreferrer" class="inline-block bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-purple-600/40 text-base">Start Building Free on Make →</a>
      </div>
    `
  },
  {
    id: 3,
    title: "The Dark Arts of Prompt Chaining: How Elite Hackers Command Neural Networks",
    category: "Advanced Engineering",
    readTime: "8 min read",
    date: "June 2026",
    summary: "Stop treating AI like a search engine. Here is the exact multi-stage conditioning method used to force models to write flawless production architectures.",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p class="text-lg text-purple-200 font-medium mb-6">If you ask an AI a generic question, you get a generic, useless answer. That is the amateur trap. Elite system architects don't chat with models—they chain them into strict, adversarial verification loops.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Multi-Stage Specification Protocol</h2>
      <p class="text-slate-300 mb-4">By breaking complex code generation tasks into isolated micro-prompts where one model drafts, a second model audits for security flaws, and a third compiles execution tests, you achieve near-zero hallucination rates.</p>

      <h3 class="text-xl font-semibold text-white mt-8 mb-3">Automating the Feedback Loop</h3>
      <p class="text-slate-300 mb-4">When integrated into automated webhook sequences, this chaining method allows your systems to write, test, and patch their own codebases while you focus entirely on high-level strategy.</p>
    `
  }
];

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Brand Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedArticle(null)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center font-black text-xl shadow-lg shadow-purple-900/50">
              ⚡
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                SYNAPSE & CO.
              </span>
              <p className="text-[10px] tracking-widest text-purple-400 font-bold uppercase">Autonomous Intelligence Journal</p>
            </div>
          </div>
          <a 
            href="https://www.make.com/en/register?pc=agenticblog" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-purple-600/30"
          >
            Deploy Automation →
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {!selectedArticle ? (
          <div>
            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-purple-300 bg-purple-950/90 border border-purple-500/40 px-4 py-1.5 rounded-full mb-6 shadow-inner">
                🔥 Investigating the Frontier of Autonomous Systems
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                Where Elite Engineering Meets <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Viral AI Truths</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Deep investigative stories, behind-the-scenes system architectures, and underground automation blueprints for high-impact builders.
              </p>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {ARTICLES.map((article) => (
                <div 
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-slate-900/90 border border-slate-800/90 rounded-2xl overflow-hidden cursor-pointer hover:border-purple-500/80 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="h-52 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-3 left-3 z-20 text-xs font-bold text-purple-300 bg-slate-950/90 backdrop-blur border border-purple-500/40 px-3 py-1 rounded-lg">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center text-xs text-slate-400 mb-3 font-medium">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0">
                    <div className="text-purple-400 text-sm font-bold flex items-center gap-2 group-hover:translate-x-1.5 transition-transform">
                      Read Investigation →
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Subscription Box to Drive Viral Retention */}
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-500/40 rounded-3xl p-8 md:p-12 text-center shadow-2xl mb-12">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-2xl font-black text-white mb-3">Never Miss a Classified Blueprint</h3>
              <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                Join thousands of builders receiving our weekly deep-dive reports on autonomous systems, prompt engineering, and solo scaling.
              </p>
              {!emailSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email address..." 
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 flex-1 max-w-sm"
                  />
                  <button 
                    type="submit" 
                    className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-purple-600/30"
                  >
                    Lock In Access
                  </button>
                </form>
              ) : (
                <div className="bg-purple-900/50 border border-purple-500/50 rounded-xl p-4 text-purple-200 font-semibold text-sm">
                  ✓ Success! You are locked in for the next deep-dive drop.
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="text-purple-400 font-bold mb-8 flex items-center gap-2 hover:text-purple-300 transition-colors"
            >
              ← Back to Journal Index
            </button>

            <article className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-xs font-bold text-purple-300 bg-purple-950 border border-purple-500/40 px-3 py-1 rounded-lg">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-slate-400">• Published {selectedArticle.date}</span>
                  <span className="text-xs text-slate-400">• {selectedArticle.readTime}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6 text-white">
                  {selectedArticle.title}
                </h1>
              </div>

              <div className="h-80 md:h-96 rounded-2xl overflow-hidden mb-10 border border-slate-800 shadow-xl">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div 
                className="text-slate-300 leading-relaxed space-y-6 text-base md:text-lg"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </article>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 mt-20 py-8 text-center text-slate-500 text-sm">
        <p>© 2026 Synapse & Co. Engineered for Viral Scale.</p>
      </footer>
    </div>
  );
}
