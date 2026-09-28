import React, { useState } from 'react';
import { SAMPLE_REVIEWS } from '../../data/reviews';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? SAMPLE_REVIEWS.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === SAMPLE_REVIEWS.length - 1 ? 0 : c + 1));
  };

  const current = SAMPLE_REVIEWS[currentIndex];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <MessageSquareQuote className="w-4 h-4" />
            <span>Traveler Experiences</span>
            <span aria-hidden="true">·</span>
            <span>Client Feedback Structure</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Client Inquiries & Experiences
          </h2>
        </div>

        {/* Carousel Nav Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Featured Review Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl">
          
          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Review Text */}
          <blockquote className="text-lg sm:text-2xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-8">
            "{current.reviewText}"
          </blockquote>

          {/* Author Details (No static pills: clean unboxed metadata with separators) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-white text-sm">
              {current.name}
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>{current.location}</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-sky-600 dark:text-sky-400 font-medium">
              {current.travelType}
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>{current.date}</span>
          </div>

        </div>

        {/* Responsible transparent footnote */}
        <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-slate-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
          <span>Structured client testimonial placeholder for authentic PJ Star Travel records.</span>
        </div>
      </div>
    </section>
  );
};
