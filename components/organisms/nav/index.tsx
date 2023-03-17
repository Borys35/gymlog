import Bars from "@/assets/icons/bars.svg";
import Dumbbell from "@/assets/icons/dumbbell.svg";
import History from "@/assets/icons/history.svg";
import Home from "@/assets/icons/home.svg";
import User from "@/assets/icons/user.svg";
import NavItem, { NavItemProps } from "@/components/molecules/nav-item";
import styles from "./styles.module.css";

const navItems: NavItemProps[] = [
  {
    name: "Workouts",
    icon: <Bars />,
    href: "/workouts",
  },
  {
    name: "Exercises",
    icon: <Dumbbell />,
    href: "/exercises",
  },
  {
    name: "Home",
    icon: <Home />,
    href: "/start",
  },
  {
    name: "History",
    icon: <History />,
    href: "/history",
  },
  {
    name: "Profile",
    icon: <User />,
    href: "/profile",
  },
];

const Nav = () => {
  return (
    <nav className={styles.container}>
      {navItems.map((item) => (
        <NavItem key={item.name} {...item} />
      ))}
    </nav>
  );
};

export default Nav;
