import { useEffect, useRef, useState, type ReactElement } from 'react';
import { ChevronDown } from 'lucide-react';
import { SEARCH_TOOLS } from '../constants';

export default function SearchToolsMenu(): ReactElement {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event: MouseEvent): void => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="nav-tools" ref={rootRef}>
      <button
        type="button"
        className="nav-tools-toggle"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        Search Tools
        <ChevronDown aria-hidden="true" size={14} />
      </button>
      {open ? (
        <ul className="nav-tools-menu" role="menu">
          {SEARCH_TOOLS.map((tool) => (
            <li key={tool.href} role="none">
              <a
                role="menuitem"
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                {tool.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
