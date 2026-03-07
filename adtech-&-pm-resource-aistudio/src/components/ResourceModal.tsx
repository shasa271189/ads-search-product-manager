import React, { useState, useEffect } from 'react';
import { X, Loader2, BookOpen, ExternalLink, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import { RESOURCE_CONTENT } from '../data/resourceContent';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: string;
}

export default function ResourceModal({ isOpen, onClose, topic }: ResourceModalProps) {
  const [content, setContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && topic) {
      setIsLoading(true);
      // Simulate a small delay for a "crafted" feel, but use static data
      const timer = setTimeout(() => {
        const staticContent = RESOURCE_CONTENT[topic];
        if (staticContent) {
          setContent(staticContent);
        } else {
          setContent("# Content Not Found\nSorry, we couldn't find the guide for this topic.");
        }
        setIsLoading(false);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setContent(null);
    }
  }, [isOpen, topic]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-zinc-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h2 className="font-display font-bold text-xl text-zinc-900">{topic}</h2>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Expert Guide & Resources</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-400 hover:text-zinc-900"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 sm:p-12">
              {isLoading ? (
                <div className="h-64 flex flex-col items-center justify-center gap-4">
                  <Loader2 className="animate-spin text-emerald-600" size={40} />
                  <p className="text-zinc-500 font-medium animate-pulse">Researching and generating guide...</p>
                </div>
              ) : (
                <div className="prose prose-zinc max-w-none prose-headings:font-display prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-zinc-600 prose-p:leading-relaxed prose-li:text-zinc-600 prose-strong:text-zinc-900 prose-code:text-emerald-600 prose-code:bg-emerald-50 prose-code:px-1 prose-code:rounded">
                  <Markdown>{content}</Markdown>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zinc-100 bg-zinc-50 flex items-center justify-between">
              <p className="text-xs text-zinc-400 italic">This guide is AI-generated based on current PM best practices.</p>
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-zinc-900 text-white rounded-xl font-bold text-sm hover:bg-zinc-800 transition-all"
              >
                Close Guide
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
