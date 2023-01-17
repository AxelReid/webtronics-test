import Facebook from "@/icons/Facebook";
import GitLab from "@/icons/GitLab";
import Indeed from "@/icons/Indeed";
import Twitter from "@/icons/Twitter";
import { footer_links } from "@/static/links";
import Link from "next/link";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="footer-border bg-white/5">
      <div className="container grid grid-cols-1 gap-10 py-9 sm:grid-cols-2 min-[900px]:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-6">
            Wisconsin Ave, Suite 700
            <br />
            Chevy Chase, Maryland 20815
          </p>
        </div>
        <div>
          <b className="text-lg font-bold">Compay</b>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {footer_links.map((link, i) => (
              <Link href={link.link} key={i}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <b className="text-lg font-bold">Social media</b>
          <div className="mt-5 flex space-x-6">
            <Facebook />
            <GitLab />
            <Twitter />
            <Indeed />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
