'use client';

import { useState, useEffect } from 'react';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import ShareButtons from './ShareButtons';
import CTABox from './CTABox';
import RelatedArticles from './RelatedArticles';
import TableOfContents from './TableOfContents';
import CommentSection from './CommentSection';

interface BlogArticleInteractiveProps {
  article: {
    title: string;
    author: {
      name: string;
      role: string;
    };
    publishDate: string;
    readTime: number;
    category: string;
    content: any[];
  };
  relatedArticles: any[];
  tocItems: any[];
  comments: any[];
}

export default function BlogArticleInteractive({ 
  article, 
  relatedArticles, 
  tocItems, 
  comments 
}: BlogArticleInteractiveProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <ArticleHeader
              title={article.title}
              author={article.author}
              publishDate={article.publishDate}
              readTime={article.readTime}
              category={article.category}
            />
            
            <div className="mt-12 mb-8">
              <ShareButtons 
                title={article.title} 
                url={isHydrated ? currentUrl : ''} 
              />
            </div>
            
            <ArticleContent content={article.content} />
            
            <CTABox
              title="Get Animation Insights Weekly"
              description="Join 5,000+ creative professionals receiving our newsletter on animation trends, techniques, and India's creative economy."
              buttonText="Subscribe Now"
              type="newsletter"
            />
            
            <CTABox
              title="Ready to Transform Your Vision?"
              description="Let's discuss how animation can compress time and expand imagination for your next project."
              buttonText="Schedule Consultation"
              type="consultation"
            />
            
            <CommentSection comments={comments} />
            
            <RelatedArticles articles={relatedArticles} />
          </div>
          
          <div className="lg:col-span-4">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </div>
  );
}