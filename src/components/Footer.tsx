const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 text-center text-sm text-muted-foreground space-y-3">
        <p>© {new Date().getFullYear()} A P Rasal Rahman. All rights reserved.</p>
        <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
          <a href="mailto:rasalrahman361@gmail.com" className="underline">rasalrahman361@gmail.com</a>
          <span>•</span>
          <a href="https://github.com/rasal361" target="_blank" rel="noopener noreferrer" className="underline">github.com/rasal361</a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/a-p-rasal-rahman" target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/a-p-rasal-rahman</a>
          <span>•</span>
          <a href="tel:+971563123066" className="underline">+971 56 312 3066</a>
          <span>•</span>
          <a href="https://rasal.pages.dev" target="_blank" rel="noopener noreferrer" className="underline">rasal.pages.dev</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
