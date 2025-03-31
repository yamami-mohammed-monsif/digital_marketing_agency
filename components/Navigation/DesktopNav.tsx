import { NavLinks } from "@/constants";
import Button from "../UI/Button";
import NavLink from "../UI/NavLink";

const DesktopNav: React.FC = () => {
  return (
    <ul className="hidden lg:flex items-center gap-14">
      {NavLinks.map((item) => {
        return <NavLink key={item.id} href={item.href} label={item.label} />;
      })}
      <li>
        <Button variant="primary" paddingY="py-4" paddingX="px-8">
          Get in touch
        </Button>
      </li>
    </ul>
  );
};

export default DesktopNav;
