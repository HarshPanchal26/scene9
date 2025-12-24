import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  image: string;
  alt: string;
  slug: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="mt-20 pt-12 border-t border-border">
      <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/blog-article/${article.slug}`}
            className="group bg-surface rounded-xl overflow-hidden hover:shadow-cinematic transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative h-48 overflow-hidden">
              <AppImage
                src={article.image}
                alt={article.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-2">{article.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <Icon name="ClockIcon" size={14} variant="outline" />
                  <span>{article.readTime} min read</span>
                </div>
                <Icon name="ArrowRightIcon" size={16} variant="outline" className="text-accent group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}