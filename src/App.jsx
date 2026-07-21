import React, { useState } from 'react';

const ARTICLES = [
  {
    id: 1,
    title: "Building Autonomous Agent Loops: How to Make LLMs Execute Tasks While You Sleep",
    category: "AI & Automation",
    readTime: "8 min read",
    date: "July 2026",
    summary: "Stop treating AI like a static chat box. Here is the exact architectural blueprint for chaining language models into self-correcting execution loops.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/zjkBMFhNj_g", // Educational AI engineering breakdown
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Most people use artificial intelligence like a glorified search engine—type a prompt, read the text, close the tab. But underground builders and systems engineers are using multi-stage agent loops to automate entire digital workflows from end to end.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Anatomy of an Autonomous Loop</h2>
      <p class="text-slate-300 mb-4">An agentic loop consists of three core phases: Perception, Reasoning, and Execution. Instead of generating a single output, the model evaluates its own code or data response, checks for compilation or logical errors, and refines the payload before sending it downstream.</p>
      
      <div class="my-8 p-6 bg-slate-900 rounded-2xl border border-emerald-500/40 shadow-xl">
        <h4 class="font-extrabold text-emerald-400 text-lg mb-2">⚡ Project Architecture Note</h4>
        <p class="text-slate-300 text-sm leading-relaxed">By combining edge webhooks with distributed JSON payloads, you can build self-healing pipelines that require zero human intervention once deployed.</p>
      </div>

      <div class="my-10 p-8 bg-slate-900/90 rounded-2xl border border-emerald-500/50 text-center shadow-2xl">
        <h4 class="font-black text-white text-xl mb-3">Scale Your Workflow Automation</h4>
        <p class="text-sm text-slate-400 mb-6 max-w-lg mx-auto">Connect your automated trigger scripts to enterprise visual orchestration builders.</p>
        <a href="https://www.make.com/en/register?pc=ghostcodelabs" target="_blank" rel="noopener noreferrer" class="inline-block bg-emerald-600 hover:bg-emerald-500 text-slate-950 px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/50 text-base">Claim Your Free Make.com Account →</a>
      </div>
    `
  },
  {
    id: 2,
    title: "The Reality of Edge Computing: Why Local Neural Nets Beat Cloud Latency",
    category: "Systems Engineering",
    readTime: "9 min read",
    date: "July 2026",
    summary: "An engineering deep-dive into deploying compressed computer vision models directly onto micro-silicon hardware nodes.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/7EhRkOXpby0", // Educational systems engineering breakdown
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Relying on cloud server round-trips for real-time sensor data introduces fatal latency spikes. When handling high-frequency telemetry, intelligence must live directly on the physical hardware.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Optimizing Memory Bandwidth on Silicon Nodes</h2>
      <p class="text-slate-300 mb-4">When compiling neural weights for edge deployment, quantization and pruning techniques reduce memory overhead without sacrificing inference accuracy.</p>
    `
  },
  {
    id: 3,
    title: "Advanced Prompt Chaining: Forcing LLMs to Write Production-Grade Code",
    category: "Software Architecture",
    readTime: "7 min read",
    date: "July 2026",
    summary: "How to eliminate hallucinations by setting up adversarial verification steps between multiple model instances.",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk", // Educational coding architecture tutorial
    content: `
      <p class="text-lg text-emerald-300 font-medium mb-6">Generic prompts yield generic code. If you want production-ready architecture, you have to force models through strict adversarial code-review pipelines.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Multi-Stage Audit Protocol</h2>
      <p class="text-slate-300 mb-4">Model A writes the baseline logic; Model B analyzes it specifically for security vulnerabilities and race conditions; Model C compiles the final tested patch.</p>
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Brand Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedArticle(null)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-500 flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-950/50 text-slate-950">
              ⚡
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                GHOSTCODE LABS
              </span>
              <p className="text-[10px] tracking-widest text-emerald-400 font-bold uppercase">Underground Engineering & AI</p>
            </div>
          </div>
          <a 
            href="https://www.make.com/en/register?pc=ghostcodelabs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/20"
          >
            Deploy Systems →
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {!selectedArticle ? (
          <div>
            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-emerald-300 bg-emerald-950/90 border border-emerald-500/40 px-4 py-1.5 rounded-full mb-6 shadow-inner">
                💀 Raw Engineering Blueprints & AI Intelligence
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                Built for <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Minds Who Build</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                No fluff. Deep technical investigations, autonomous system architectures, and raw project breakdowns for high-performance builders.
              </p>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {ARTICLES.map((article) => (
                <div 
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-slate-900/90 border border-slate-800/90 rounded-2xl overflow-hidden cursor-pointer hover:border-emerald-500/80 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="h-52 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-3 left-3 z-20 text-xs font-bold text-emerald-300 bg-slate-950/90 backdrop-blur border border-emerald-500/40 px-3 py-1 rounded-lg">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center text-xs text-slate-400 mb-3 font-medium">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-emerald-300 transition-colors leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0">
                    <div className="text-emerald-400 text-sm font-bold flex items-center gap-2 group-hover:translate-x-1.5 transition-transform">
                      Read Breakdown →
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Subscription Box */}
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-950/80 via-slate-900 to-teal-950/80 border border-emerald-500/40 rounded-3xl p-8 md:p-12 text-center shadow-2xl mb-12">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-2xl font-black text-white mb-3">Lock In Your Access</h3>
              <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                Get our raw engineering breakdowns and technical project drops straight to your inbox.
              </p>
              {!emailSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email address..." 
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 flex-1 max-w-sm"
                  />
                  <button 
                    type="submit" 
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-900/50 border border-emerald-500/50 rounded-xl p-4 text-emerald-200 font-semibold text-sm">
                  ✓ Success! You are locked in.
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="text-emerald-400 font-bold mb-8 flex items-center gap-2 hover:text-emerald-300 transition-colors"
            >
              ← Back to Index
            </button>

            <article className="bg-slate-900/60 border border-slate-800/90 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-950 border border-emerald-500/40 px-3 py-1 rounded-lg">
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

              {/* Educational Video Embed */}
              {selectedArticle.videoUrl && (
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-emerald-300 mb-3">📺 Technical Video Breakdown</h3>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
                    <iframe 
                      src={selectedArticle.videoUrl} 
                      title="Educational Technical Breakdown"
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

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
        <p>© 2026 Ghostcode Labs. Raw Intelligence & Systems.</p>
      </footer>
    </div>
  );
}
