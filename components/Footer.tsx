export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-surface px-6 md:px-14 py-6 border-t border-border font-heading text-sm text-text-secondary">
      <span>&copy; 2026</span>
      <span>
        Designed & built by <span className="text-accent">Romy Valdez</span>
      </span>
      <span className="flex gap-2">
        <p>&copy;</p>
        <p>&copy;</p>
      </span>
    </footer>
  );
}
