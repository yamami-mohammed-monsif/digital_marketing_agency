import { motion, MotionProvider } from "../utils/MotionProvider";
import Link from "next/link";

type navLinkProps = {
  href: string;
  label: string;
  role?: string;
  className?: string;
  onClick?: () => void;
};

const NavLink: React.FC<navLinkProps> = ({ href, label, role, className }) => {
  return (
    <MotionProvider>
      <motion.li
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: 20 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`text-base font-secondary hover:font-medium ${
          className || ""
        }`}
        role={role}
      >
        <Link href={href}>{label}</Link>
      </motion.li>
    </MotionProvider>
  );
};

export default NavLink;
