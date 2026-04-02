import type { SimpleIcon } from 'simple-icons';
import {
  siFlutter,
  siDart,
  siReact,
  siVite,
  siTailwindcss,
  siGraphql,
  siGithubactions,
  siAndroid,
  siApple,
  siGoogleplay,
  siFirebase,
} from 'simple-icons';

// Single source of truth: label → icon object
const ICON_MAP: Record<string, SimpleIcon> = {
  Flutter: siFlutter,
  Dart: siDart,
  React: siReact,
  Vite: siVite,
  'Tailwind CSS': siTailwindcss,
  GraphQL: siGraphql,
  'GitHub Actions': siGithubactions,
  Android: siAndroid,
  'Android APK': siAndroid,
  iOS: siApple,
  'Play Store': siGoogleplay,
  'Play Store Deployment': siGoogleplay,
  Firebase: siFirebase,
  'Firebase Deployment': siFirebase,
  'Firebase Realtime Database': siFirebase,
};

interface SkillPillProps {
  label: string;
  className?: string;
}

export default function SkillPill({
  label,
  className = 'skill-pill',
}: SkillPillProps) {
  const siIcon = ICON_MAP[label] ?? null;

  return (
    <span className={className}>
      {siIcon && (
        <svg
          role="img"
          viewBox="0 0 24 24"
          width="13"
          height="13"
          fill="currentColor"
          style={{ flexShrink: 0 }}
          aria-label={siIcon.title}
        >
          <path d={siIcon.path} />
        </svg>
      )}
      {label}
    </span>
  );
}
