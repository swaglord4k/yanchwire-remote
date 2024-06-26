import { PropsWithChildren } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

export type NavigationLinksProps = {} & NavLinkProps &
  React.RefAttributes<HTMLAnchorElement>;

export const NavigationLink = (
  props: PropsWithChildren<NavigationLinksProps>
) => (
  <NavLink
    {...props}
    className={({ isActive }) =>
      `m-4 text-white items-center ${
        isActive ? "font-semibold cursor-default" : "font-normal"
      } ${props.className || ""}`
    }
  >
    {props.children}
  </NavLink>
);
