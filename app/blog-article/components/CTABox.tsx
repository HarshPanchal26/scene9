'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CTABoxProps {
  title: string;
  description: string;
  buttonText: string;
  type: 'newsletter' | 'consultation' | 'download';
}

export default function CTABox({ title, description, buttonText, type }: CTABoxProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="my-12 p-8 bg-gradient-to-br from-surface to-secondary rounded-xl border border-border">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Icon 
            name={type === 'newsletter' ? 'EnvelopeIcon' : type === 'consultation' ? 'ChatBubbleLeftRightIcon' : 'ArrowDownTrayIcon'} 
            size={24} 
            variant="outline" 
            className="text-accent" 
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-text-secondary">{description}</p>
        </div>
      </div>
      
      {type === 'newsletter' ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-glow-cyan"
          >
            {submitted ? 'Subscribed!' : buttonText}
          </button>
        </form>
      ) : (
        <button className="w-full sm:w-auto px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-glow-cyan">
          {buttonText}
        </button>
      )}
    </div>
  );
}