export const Navbar = () => {
  const { t } = useTranslation();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white sticky top-0 z-50 shadow-lg">
      {/* LOGO + NOM */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <span className="text-lg font-bold tracking-wide">Félix-Antoine Lavigne</span>
      </div>

      {/* MENUS */}
      <div className="flex gap-6">
        <button onClick={() => scrollTo('hero')} className="hover:text-blue-400">
          {t("menu.home")}
        </button>
        <button onClick={() => scrollTo('gallery')} className="hover:text-blue-400">
          {t("menu.gallery")}
        </button>
        <button onClick={() => scrollTo('video')} className="hover:text-blue-400">
          {t("menu.video")}
        </button>
        <button onClick={() => scrollTo('portfolio')} className="hover:text-blue-400">
          {t("menu.portfolio")}
        </button>
        <button onClick={() => scrollTo('contact')} className="hover:text-blue-400">
          {t("menu.contact")}
        </button>
      </div>
    </nav>
  );
};
