import { socialLinks } from '../data/social';

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`social-text ${className}`.trim()}>
      {socialLinks.map((item) => (
        <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
          {item.label}
        </a>
      ))}
    </div>
  );
}
