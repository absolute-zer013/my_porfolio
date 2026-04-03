import { useState, useEffect } from 'react';

interface Props {
  screenshots: string[];
  initialIndex: number;
  projectTitle: string;
  onClose: () => void;
}

export default function ScreenshotViewer({ screenshots, initialIndex, projectTitle, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);

  const prev = () => setIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  const next = () => setIndex((i) => (i + 1) % screenshots.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % screenshots.length);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, screenshots.length]);

  return (
    <div className="sv-backdrop" onClick={onClose}>
      <div className="sv-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sv-header">
          <span className="sv-title">{projectTitle}</span>
          <div className="sv-header-right">
            <span className="sv-counter overline">{index + 1} / {screenshots.length}</span>
            <button className="sv-close" onClick={onClose} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div className="sv-body">
          {screenshots.length > 1 && (
            <button className="sv-arrow sv-arrow-prev" onClick={prev} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}
          <img
            src={screenshots[index]}
            alt={`${projectTitle} screenshot ${index + 1}`}
            className="sv-img"
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
          />
          {screenshots.length > 1 && (
            <button className="sv-arrow sv-arrow-next" onClick={next} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
        <div className="sv-dots">
          {screenshots.map((_, i) => (
            <button
              key={i}
              className={`sv-dot${i === index ? ' sv-dot-active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
