export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-24 bg-background border-t border-surface-high flex flex-col md:flex-row justify-between items-center text-sm font-mono text-muted">
      <p>© {new Date().getFullYear()} The Digital Anomaly.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-primary transition-colors">X.COM</a>
        <a href="#" className="hover:text-primary transition-colors">GITHUB</a>
        <a href="#" className="hover:text-primary transition-colors">UI8</a>
      </div>
    </footer>
  );
}
