import React, { useState } from 'react';
import { 
  Search, 
  Target, 
  BarChart3, 
  Cpu, 
  Zap, 
  Users, 
  Rocket, 
  Layers, 
  Code2, 
  Palette, 
  Briefcase, 
  TrendingUp,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Globe,
  Database,
  Layout,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import Chatbot from './components/Chatbot';
import ResourceModal from './components/ResourceModal';

const EXPERIENCE_TAGS = [
  "Search Advertising", "Product Discovery", "Search Analytics", 
  "Sponsored Product Ads", "Ad-Serving Platform", "Multi-Channel Campaigns", 
  "Audience Platform", "Rapid AI Prototyping", "AI-Powered Features", 
  "Innovation Leadership"
];

const RESOURCES = [
  {
    title: "AI-First Product Management",
    desc: "Building with GenAI & LLMs to create next-gen features.",
    icon: <Cpu className="text-emerald-500" />
  },
  {
    title: "AdTech & Monetization",
    desc: "From Sponsored Ads to Programmatic advertising ecosystems.",
    icon: <Target className="text-blue-500" />
  },
  {
    title: "Search & Discovery Mastery",
    desc: "Building recommendation systems that drive engagement.",
    icon: <Search className="text-purple-500" />
  },
  {
    title: "Data-Driven PM",
    desc: "Analytics, metrics, and making decisions with data.",
    icon: <BarChart3 className="text-orange-500" />
  },
  {
    title: "Building 0-to-1 Products",
    desc: "From initial idea to achieving Product-Market Fit.",
    icon: <Rocket className="text-red-500" />
  },
  {
    title: "Enterprise B2B PM",
    desc: "Managing complex sales cycles and enterprise stakeholders.",
    icon: <Briefcase className="text-indigo-500" />
  },
  {
    title: "Strategic Prioritization",
    desc: "Roadmapping and effective product strategy frameworks.",
    icon: <TrendingUp className="text-emerald-500" />
  },
  {
    title: "Technical Depth for PMs",
    desc: "APIs, architecture, and system design fundamentals.",
    icon: <Code2 className="text-zinc-600" />
  },
  {
    title: "Product Design & UX",
    desc: "From wireframes to high-fidelity prototypes.",
    icon: <Palette className="text-pink-500" />
  },
  {
    title: "Career & Interview Prep",
    desc: "Breaking into PM and mastering the interview process.",
    icon: <Users className="text-cyan-500" />
  },
  {
    title: "Agile Development",
    desc: "Scrum, Kanban, and efficient sprint planning.",
    icon: <Zap className="text-yellow-500" />
  },
  {
    title: "Product-Led Growth",
    desc: "Acquisition, activation, retention, and revenue strategies.",
    icon: <Layers className="text-violet-500" />
  }
];

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (topic: string) => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <span className="font-display font-bold text-lg tracking-tight">Shashank Saxena</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#experience" className="hover:text-zinc-900 transition-colors">Experience</a>
            <a href="#resources" className="hover:text-zinc-900 transition-colors">Resources</a>
            <a href="#connect" className="px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all">Let's Connect</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
                Lead Product Manager
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                Building Products That <span className="text-emerald-600">Scale & Succeed</span>
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed mb-10">
                13+ years of experience in AdTech monetization, search advertising, and AI-driven product discovery. Helping aspiring PMs navigate the complex world of tech.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#resources" className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-semibold hover:bg-zinc-800 transition-all flex items-center gap-2">
                  Explore Resources <ChevronRight size={20} />
                </a>
                <a href="#connect" className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-2xl font-semibold hover:bg-zinc-50 transition-all">
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Experience & Domain Knowledge</h2>
                <p className="text-zinc-600 mb-8 leading-relaxed">
                  Deep expertise in building high-scale advertising platforms and search discovery engines. From 0-to-1 products to scaling enterprise solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {EXPERIENCE_TAGS.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-zinc-100 text-zinc-700 text-sm font-medium rounded-xl border border-zinc-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-200">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">13+</div>
                  <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-200">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50M+</div>
                  <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Users Impacted</div>
                </div>
                <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-200">
                  <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Products Launched</div>
                </div>
                <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-200">
                  <div className="text-4xl font-bold text-orange-600 mb-2">∞</div>
                  <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Passion for AI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">PM Resources & Guides</h2>
              <p className="text-zinc-600">Curated insights and guides for product managers at every stage of their career.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {RESOURCES.map((res, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-3xl border border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {res.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-emerald-600 transition-colors">{res.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">{res.desc}</p>
                  <button 
                    onClick={() => handleLearnMore(res.title)}
                    className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn More <ChevronRight size={14} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className="py-20 px-6 bg-zinc-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-display font-bold mb-6">Let's Connect</h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                Interested in AdTech, Search, or AI? Or looking for mentorship in Product Management? I'm always open to discussing new ideas and helping the next generation of product leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-zinc-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-100 transition-all">
                  <Linkedin size={20} /> LinkedIn Profile
                </a>
                <a href="mailto:shashank.sxn@gmail.com" className="px-8 py-4 bg-zinc-800 text-white border border-zinc-700 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all">
                  <Mail size={20} /> Send an Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 px-6 border-t border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white text-[10px] font-bold">S</div>
            <span className="font-display font-bold text-sm tracking-tight">Shashank Saxena</span>
          </div>
          <p className="text-zinc-500 text-sm">© 2024 Shashank Saxena. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#" className="hover:text-zinc-900 transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-zinc-900 transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <Chatbot />

      {/* Resource Modal */}
      <ResourceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        topic={selectedTopic || ''} 
      />
      
      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}
