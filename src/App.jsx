import React, { useState } from 'react';

const ARTICLES = [
  {
    id: 1,
    title: "Edge AI Revolution: How Intelligent Cameras Are Replacing Central Servers",
    category: "Hardware & Edge AI",
    readTime: "8 min read",
    date: "July 2026",
    summary: "An in-depth look at how computer vision models deployed directly onto micro-chips are eliminating server lag and redefining automated physical security.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/WoMitMc895A",
    content: `
      <p class="text-lg text-purple-200 font-medium mb-6">For decades, security and sensor cameras served a singular purpose: capture raw video streams and transmit them to centralized server rooms for human review. That brittle architecture is officially dead.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Moving Intelligence to the Edge</h2>
      <p class="text-slate-300 mb-4">By shifting neural processing directly onto edge silicon, modern camera systems analyze local telemetry in real time, filtering out false positives and triggering automated mechanical responses within milliseconds.</p>
      
      <div class="my-8 p-6 bg-gradient-to-r from-purple-950/80 to-slate-900 rounded-2xl border border-purple-500/40 shadow-xl">
        <h4 class="font-extrabold text-purple-300 text-lg mb-2">📐 Project & Assignment Framework</h4>
        <p class="text-slate-300 text-sm leading-relaxed">When designing local edge nodes, optimizing the memory bandwidth between sensor arrays and processing units dictates whether your system encounters thermal throttling under load.</p>
      </div>

      <div class="my-10 p-8 bg-slate-900/90 rounded-2xl border border-purple-500/50 text-center shadow-2xl">
        <h4 class="font-black text-white text-xl mb-3">Scale Your Hardware Automation Pipelines</h4>
        <p class="text-sm text-slate-400 mb-6 max-w-lg mx-auto">Connect your edge device webhooks directly to cloud response workflows.</p>
        <a href="https://www.make.com/en/register?pc=agenticblog" target="_blank" rel="noopener noreferrer" class="inline-block bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-purple-600/40 text-base">Claim Your Free Make.com Account →</a>
      </div>
    `
  },
  {
    id: 2,
    title: "The Rise of Digital Coworkers: Why AI Agents Are Replacing Static Chatbots",
    category: "AI Productivity",
    readTime: "7 min read",
    date: "July 2026",
    summary: "How multi-step autonomous reasoning agents are shifting the workplace from simple text generation to independent task completion.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/WoMitMc895A",
    content: `
      <p class="text-lg text-purple-200 font-medium mb-6">We have officially crossed the threshold from AI as a passive assistant to AI as an active digital coworker capable of executing complex workflows across multiple software environments.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4"> Autonomous Planning Loops</h2>
      <p class="text-slate-300 mb-4">Unlike standard language models that wait for prompt inputs, modern agent architectures plan, reason, execute database queries, and coordinate multi-step tasks with minimal human oversight.</p>
    `
  },
  {
    id: 3,
    title: "The Physics of Ground-Sensing Radar: Building Drowsy-Driver Safety Systems",
    category: "Automotive Engineering",
    readTime: "10 min read",
    date: "July 2026",
    summary: "An exhaustive engineering breakdown of micro-radar sensor placement, signal reflection mathematics, and real-time cabin safety automation.",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/WoMitMc895A",
    content: `
      <p class="text-lg text-purple-200 font-medium mb-6">When designing physical safety systems for modern vehicle chassis, relying solely on visual camera feeds introduces catastrophic blind spots during heavy fog, dust, or night operations. True automotive resilience demands multi-spectrum ground-sensing telemetry.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Sensor Placement & Chassis Integration Mechanics</h2>
      <p class="text-slate-300 mb-4">For students and hardware builders designing safety prototypes, positioning micro-radar units requires accounting for vibrational damping, structural chassis interference, and localized thermal dissipation.</p>
    `
  },
  {
    id: 4,
    title: "Inside Claude Science: How Frontier Models Are Accelerating Pharmaceutical Research",
    category: "Scientific Computing",
    readTime: "9 min read",
    date: "July 2026",
    summary: "Exploring specialized AI workbenches designed to parse complex scientific literature, run simulations, and automate laboratory workflows.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/WoMitMc895A",
    content: `
      <p class="text-lg text-purple-200 font-medium mb-6">Artificial intelligence has moved past consumer novelties into specialized scientific laboratories, where intelligent workbenches automate data synthesis and trial analysis at unprecedented speeds.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Automating Complex Research Pipelines</h2>
      <p class="text-slate-300 mb-4">By pairing high-capacity context windows with specialized domain knowledge, researchers can execute multi-variable simulations in hours rather than months.</p>
    `
  },
  {
    id: 5,
    title: "Why 80% of Enterprise AI Transformations Fail: The Architecture Trap",
    category: "Enterprise Systems",
    readTime: "11 min read",
    date: "July 2026",
    summary: "A critical look at why throwing advanced models at broken management workflows accelerates failure rather than solving efficiency bottlenecks.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/embed/WoMitMc895A",
    content: `
      <p class="text-lg text-purple-200 font-medium mb-6">Organizations pouring capital into artificial intelligence often discover a harsh reality: AI does not fix poor management or broken data governance—it simply amplifies whatever operational foundation already exists.</p>

      <h2 class="text-2xl font-bold text-white mt-8 mb-4">The Governance and Integration Deficit</h2>
      <p class="text-slate-300 mb-4">Success in modern automation relies entirely on aligning internal data structures, cleaning operational bottlenecks, and selecting the right infrastructure before deploying generative models.</p>
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
                🔥 Investigating Global AI Breakthroughs & Project Blueprints
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                Where Elite Engineering Meets <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Viral AI Truths</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Deep investigative stories, hardware project specs, and underground automation frameworks for high-impact builders and students.
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

            {/* Newsletter Subscription Box */}
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-500/40 rounded-3xl p-8 md:p-12 text-center shadow-2xl mb-12">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-2xl font-black text-white mb-3">Never Miss a Classified Blueprint</h3>
              <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                Join thousands of builders receiving our weekly deep-dive reports on autonomous systems, project data, and solo scaling.
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

              {/* Embedded Video Feature Section */}
              {selectedArticle.videoUrl && (
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-purple-300 mb-3">📺 Multimedia Video Breakdown</h3>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
                    <iframe 
                      src={selectedArticle.videoUrl} 
                      title="Article Video Breakdown"
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
        <p>© 2026 Synapse & Co. Engineered for Viral Scale.</p>
      </footer>
    </div>
  );
}
