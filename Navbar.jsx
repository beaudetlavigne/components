// components/Navbar.jsx
import { FormattedMessage } from "react-intl";
export const Navbar = ({ locale, setLocale }) => (
  <nav className="p-4 flex justify-between items-center bg-black">
    <h1 className="text-xl font-bold">🎶 Composer</h1>
    <select
      className="bg-neutral-800 text-white p-1 rounded"
      value={locale}
      onChange={(e) => setLocale(e.target.value)}
    >
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </select>
  </nav>
);
