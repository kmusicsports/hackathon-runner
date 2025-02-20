import { Link } from "react-router";

import { appName } from "@/config";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary backdrop-blur">
      <div className="flex h-14 items-center px-4">
        <Link className="flex items-center" to="/">
          <img alt={appName} height={36} src="/app.svg" width={36} />
          <span className="ml-2 scroll-m-20 text-2xl font-semibold italic tracking-tight text-primary-foreground">
            {appName}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
