import { header_links } from "@/static/links";
import Link from "next/link";
import { LegacyRef, useMemo, useRef, useState } from "react";
import BoxFrame from "../BoxFrame";
import Logo from "../Logo";
import ToggleIcon from "../ToggleIcon";

const Header = () => {
  const ref: LegacyRef<HTMLUListElement> | null = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);

  const h = useMemo(
    () => ref.current?.getBoundingClientRect()?.height,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [open, ref]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-transparent
    backdrop-blur-2xl transition-shadow duration-300 ${
      open ? "max-md:shadow-2xl" : ""
    }`}
    >
      <div
        className={`item container flex flex-col overflow-hidden md:flex-row md:items-center md:justify-between`}
      >
        <div className="flex min-h-[100px] w-full items-center justify-between md:w-fit">
          <Logo />
          <div
            className="group relative flex h-10 w-10 cursor-pointer items-center justify-center md:hidden"
            onClick={handleOpen}
          >
            <BoxFrame />
            <div className="flex flex-col -space-y-6">
              <ToggleIcon
                open
                className={`transition ${
                  open ? "translate-y-0 rotate-45" : ""
                }`}
              />
              <ToggleIcon
                open
                className={`transition ${open ? "scale-0" : ""}`}
              />
              <ToggleIcon
                open
                className={`transition ${
                  open ? "-translate-y-0 -rotate-45" : ""
                }`}
              />
            </div>
          </div>
        </div>
        <nav
          style={{
            height: open && h && h > 30 ? h : 0,
          }}
          className="overflow-hidden transition-[height] duration-300 md:!h-auto"
        >
          <ul
            ref={ref}
            className={`flex flex-col items-center space-y-4 pt-3 pb-6 transition-[transform,opacity] duration-300 md:flex-row md:space-y-0 md:space-x-12 md:p-0
            ${open ? "" : "max-md:translate-y-5 max-md:opacity-0"}
            `}
          >
            {header_links.map((link, i) => (
              <li key={i}>
                <Link href={link.link} onClick={() => setOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
