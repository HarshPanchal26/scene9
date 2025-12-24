'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleShare = (platform: string) => {
    if (!isHydrated) return;

    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleCopyLink = () => {
    if (!isHydrated) return;

    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-semibold text-text-secondary">Share:</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleShare('twitter')}
          className="w-10 h-10 rounded-full bg-surface hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Share on Twitter"
        >
          <Icon name="ShareIcon" size={18} variant="outline" className="text-foreground" />
        </button>
        <button
          onClick={() => handleShare('linkedin')}
          className="w-10 h-10 rounded-full bg-surface hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Share on LinkedIn"
        >
          <Icon name="ShareIcon" size={18} variant="outline" className="text-foreground" />
        </button>
        <button
          onClick={() => handleShare('facebook')}
          className="w-10 h-10 rounded-full bg-surface hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Share on Facebook"
        >
          <Icon name="ShareIcon" size={18} variant="outline" className="text-foreground" />
        </button>
        <button
          onClick={handleCopyLink}
          className="w-10 h-10 rounded-full bg-surface hover:bg-accent/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Copy link"
        >
          <Icon name={copied ? 'CheckIcon' : 'LinkIcon'} size={18} variant="outline" className="text-foreground" />
        </button>
      </div>
    </div>
  );
}