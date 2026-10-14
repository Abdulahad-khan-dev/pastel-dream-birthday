import { NavLink, useLocation } from "react-router-dom";
import {
  Cake,
  Heart,
  Home,
  Mail,
  Sparkles,
  Star,
} from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/memories", label: "Memories", icon: Heart },
  { to: "/cake", label: "Cake", icon: Cake },
  { to: "/letters", label: "Letters", icon: Mail },
  { to: "/wishes", label: "Wishes", icon: Star },
  { to: "/final", label: "Surprise", icon: Sparkles },
];

export default function Navbar() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="floating-nav">
      {links.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <Icon size={16} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}