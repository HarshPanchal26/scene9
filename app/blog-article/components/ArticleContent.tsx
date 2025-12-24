import AppImage from '@/components/ui/AppImage';

interface ArticleContentProps {
  content: {
    type: 'paragraph' | 'heading' | 'image' | 'quote' | 'code' | 'list';
    content: string;
    alt?: string;
    items?: string[];
    language?: string;
  }[];
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      {content.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2 key={index} className="text-3xl font-bold text-foreground mt-12 mb-6">
                {block.content}
              </h2>
            );
          
          case 'paragraph':
            return (
              <p key={index} className="text-text-secondary leading-relaxed mb-6">
                {block.content}
              </p>
            );
          
          case 'image':
            return (
              <div key={index} className="my-12 rounded-xl overflow-hidden">
                <AppImage
                  src={block.content}
                  alt={block.alt || 'Article illustration showing animation workflow and creative process'}
                  className="w-full h-auto"
                />
              </div>
            );
          
          case 'quote':
            return (
              <blockquote key={index} className="border-l-4 border-accent pl-6 my-8 italic text-xl text-foreground">
                {block.content}
              </blockquote>
            );
          
          case 'code':
            return (
              <pre key={index} className="bg-surface rounded-lg p-6 overflow-x-auto my-8">
                <code className="text-sm text-accent font-mono">{block.content}</code>
              </pre>
            );
          
          case 'list':
            return (
              <ul key={index} className="space-y-3 my-6 ml-6">
                {block.items?.map((item, i) => (
                  <li key={i} className="text-text-secondary flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          
          default:
            return null;
        }
      })}
    </div>
  );
}