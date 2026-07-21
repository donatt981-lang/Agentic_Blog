import React, { useState } from 'react';

const ARTICLES = [
  {
    id: 1,
    title: "How I Replaced a 3-Person Support Team with a $0.04/Day AI Agent",
    category: "Case Study",
    readTime: "6 min read",
    date: "Jul 2026",
    summary: "The exact behind-the-scenes breakdown of how an automated webhook pipeline handles inbound complaints, refunds, and inquiries while you sleep.",
    content: `
      <h2 class="text-xl font-bold mt-4 mb-2">The Breaking Point</h2>
      <p class="mb-4">It was 2:00 AM. My inbox was flooded with fifty identical customer emails asking, <em>"Where is my download link?"</em> My manual support system was choking, and hiring virtual assistants was bleeding my profit margins dry.</p>
      
      <h3 class="text-lg font-semibold mt-4 mb-2">Enter the Autonomous Loop</h3>
      <p class="mb-4">Instead of hiring humans to do repetitive data routing, I wired up an intelligent automation sequence that intercepts the trigger, queries user databases via LLMs, and resolves tickets autonomously in seconds.</p>

      <div class="my-6 p-4 bg-purple-900/30 rounded-lg border border-purple-500/40">
        <h4 class="font-bold text-purple-300 mb-2">🔥 Want to build this exact support machine?</h4>
        <p class="text-sm text-slate-300 mb-3">You don't need a dev team. Build your first autonomous workflow visually in minutes.</p>
        <a href="https://www.make.com/en/register?pc=agenticblog" target="_blank" rel="noopener noreferrer" class="inline-block bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-500">Claim Your Free Make.com Account →</a>
      </div>

      <p class="mb-4">Total monthly cost? Less than a cup of coffee. Total hours saved? Over 30 hours a week.</p>
    `
  },
  {
    id: 2,
    title: "The Zero-Employee Empire: Running a $10k/Mo Media Business from Your Phone",
    category: "Solopreneurship",
    readTime: "8 min read",
    date: "Jul 2026",
    summary: "How modern solo operators use automated script generation, multi-platform publishing pipelines, and AI orchestrators to run digital syndicates solo.",
    content: `
      <h2 class="text-xl font-bold mt-4 mb-2">The Myth of the 50-Person Startup</h2>
      <p class="mb-4">We are living through a massive structural shift. You no longer need an office, middle managers, or payroll overhead to scale a media empire. You just need ruthless automation design.</p>

      <h3 class="text-lg font-semibold mt-4 mb-2">The Autonomous Content Machine</h3>
      <p class="mb-4">By connecting ideation prompts directly to distribution triggers, content goes from raw thought to published format across web and social channels without a single manual click.</p>

      <div class="my-6 p-4 bg-purple-900/30 rounded-lg border border-purple-500/40">
        <h4 class="font-bold text-purple-300 mb-2">⚡ Put Your Business on Autopilot</h4>
        <p class="text-sm text-slate-300 mb-3">Connect your apps, trigger actions instantly, and scale your operations solo.</p>
        <a href="https://www.make.com/en/register?pc=agenticblog" target="_blank" rel="noopener noreferrer" class="inline-block bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-500">Get Started Free on Make →</a>
      </div>
    `
  },
  {
    id: 3,
    title: "The Dark Arts of Prompt Chaining: Making LLMs Code For You",
    category: "Engineering",
    readTime: "5 min read",
    date: "Jun 2026",
    summary: "Stop writing code line by line. Here is how to sequence system instructions so language models generate production-grade architectures on the first pass.",
    content: `
      <h2 class="text-xl font-bold mt-4 mb-2">Why Standard Prompts Fail</h2>
      <p class="mb-4">If you treat an LLM like a search engine, you get generic answers. If you treat it like an autonomous junior engineer chained to a strict specification framework, you get functional applications.</p>
      
      <p class="mb-4">By feeding structured multi-step contexts into automated webhooks, you can build full-stack logic loops that write, test, and self-correct on the fly.</p>
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
                Spicy breakdowns, real-world case studies, and blueprints for building intelligent automated machines.
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
