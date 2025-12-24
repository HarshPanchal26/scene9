'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
  likes: number;
}

interface CommentSectionProps {
  comments: Comment[];
}

export default function CommentSection({ comments: initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !name.trim()) return;

    const comment: Comment = {
      id: comments.length + 1,
      author: name,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      content: newComment,
      likes: 0,
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setName('');
  };

  const handleLike = (id: number) => {
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    ));
  };

  return (
    <section className="mt-20 pt-12 border-t border-border">
      <h2 className="text-3xl font-bold text-foreground mb-8">Comments ({comments.length})</h2>
      
      <form onSubmit={handleSubmit} className="mb-12 bg-surface rounded-xl p-6 border border-border">
        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          rows={4}
          className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          required
        />
        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-glow-cyan"
        >
          Post Comment
        </button>
      </form>
      
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-surface rounded-xl p-6 border border-border">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-consciousness flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">{comment.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{comment.author}</p>
                  <p className="text-xs text-text-secondary">{comment.date}</p>
                </div>
              </div>
              <button
                onClick={() => handleLike(comment.id)}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-foreground/5 hover:bg-accent/10 transition-colors duration-300"
              >
                <Icon name="HeartIcon" size={16} variant="outline" className="text-accent" />
                <span className="text-sm text-text-secondary">{comment.likes}</span>
              </button>
            </div>
            <p className="text-text-secondary leading-relaxed">{comment.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}