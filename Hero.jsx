import { FormattedMessage } from "react-intl";
export const Hero = () => (
  <header className="text-center p-10">
    <h2 className="text-4xl font-extrabold">
      <FormattedMessage id="hero.title" defaultMessage="Compositeur de musique vidéo" />
    </h2>
    <p className="mt-4 max-w-xl mx-auto">
      <FormattedMessage id="hero.subtitle" defaultMessage="Création musicale pour l'image, l'émotion, et le récit." />
    </p>
  </header>
);
