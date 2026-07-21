import React, { useState } from 'react';

const ARTICLES = [
  {
    id: 1,
    title: "Building Autonomous Workflows with LLMs & Make.com",
    category: "AI Automation",
    readTime: "5 min read",
    date: "Jul 2026",
    summary: "How to connect modern LLMs directly to Make.com to automate content generation, customer support, and business workflows without writing backend code.",
    content: `
      <h2 class="text-xl font-bold mt-4 mb-2">The Shift to Agentic Workflows</h2>
      <p class="mb-4">Traditional automation involved simple linear triggers. Today, AI agents allow us to introduce decision-making loops into our business processes.</p>
      
      <h3 class="text-lg font-semibold mt-4 mb-2">Why Make.com is the Ultimate Engine</h3>
      <p class="mb-4">While custom code gives you control, Make.com provides a visual builder that dramatically speeds up development while remaining flexible.</p>

      <div class="my-6 p-4 bg-purple-900/30 rounded-lg border border-purple-500/40">
        <h4 class="font-bold text-purple-300 mb-2">🚀 Ready to build your own AI automation?</h4>
        <p class="text-sm text-slate-300 mb-3">Get started for free on Make.com and build your first autonomous workflow today.</p>
        <a href="https://www.make.com/en/register?pc=agenticblog" target="_blank" rel="noopener noreferrer" class="inline-block bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-500">Claim Your Free Make.com Plan →</a>
      </div>
    `
  },
  {
    id: 2,
    title: "The Solopreneur AI Stack for 2026",
    category: "Solopreneurship",
    readTime: "7 min read",
    date: "Jul 2026",
    summary: "A curated list of no-code tools and AI models that allow a single founder to operate with the efficiency of a 10-person team.",
    content: `
      <h2 class="text-xl font-bold mt-4 mb-2">Leveraging AI as a Force Multiplier</h2>
      <p class="mb-4">Running a digital business solo used to mean spending 80% of your time on operational overhead. With modern automation pipelines, that dynamic is flipped.</p>

      <div class="my-6 p-4 bg-purple-900/30 rounded-lg border border-purple-500/40">
        <h4 class="font-bold text-purple-300 mb-2">⚡ Automate Your Solopreneur Stack</h4>
        <p class="text-sm text-slate-300 mb-3">Connect your favorite apps and put your business on autopilot with Make.</p>
        <a href="https://www.make.com/en/register?pc=agenticblog" target="_blank" rel="noopener noreferrer" class="inline-block bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-500">Try Make for Free →</a>
      </div>
    `
  },
  {
    id: 3,
    title: "Prompt Engineering Formulas for Technical Writing",
    category: "Prompting",
    readTime: "4 min read",
    date: "Jun 2026",
    summary: "Master structured prompt patterns like RTF (Role, Task, Format) to produce clean, publish-ready documentation and blog posts.",
    content: `
      <h2 class="text-xl font-bold mt-4 mb-2">The RTF Prompting Framework</h2>
      <p class="mb-4">To get high-quality outputs consistently, structure your prompts into clear sections rather than asking open-ended questions.</p>
    `
  }
];

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-purple-400">✨ Agentic</span>
            <span>Blog</span>
          </div>
          <a 
            href="https://www.make.com/en/register?pc=agenticblog" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-500"
          >
            Try Make Free
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {!selectedArticle ? (
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold mb-4">
                Autonomous Systems & <span className="text-purple-400">AI Automation</span>
              </h1>
              <p className="text-slate-400 max-w-xl mx-auto">
                Blueprints, workflows, and insights for building intelligent applications and automated systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ARTICLES.map((article) => (
                <div 
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-6 cursor-pointer hover:border-purple-500 transition-all"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-purple-400 bg-purple-950/60 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-500">{article.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold mb-2">{article.title}</h2>
                  <p className="text-slate-400 text-sm line-clamp-3 mb-4">{article.summary}</p>
                  <div className="text-purple-400 text-sm font-semibold flex items-center gap-1">
                    Read Article →
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="text-purple-400 font-semibold mb-6 flex items-center gap-2 hover:underline"
            >
              ← Back to articles
            </button>

            <article className="prose prose-invert">
              <div className="mb-6">
                <span className="text-xs font-semibold text-purple-400 bg-purple-950/60 px-2 py-1 rounded">
                  {selectedArticle.category}
                </span>
                <h1 className="text-3xl font-extrabold mt-3 mb-2">{selectedArticle.title}</h1>
                <p className="text-slate-500 text-sm">Published {selectedArticle.date} • {selectedArticle.readTime}</p>
              </div>

              <div 
                className="text-slate-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </article>
          </div>
        )}
      </main>
    </div>
  );
}
