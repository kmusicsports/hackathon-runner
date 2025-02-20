import { Outlet } from "react-router";

import Header from "@/components/layouts/header";

export default function RootLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
