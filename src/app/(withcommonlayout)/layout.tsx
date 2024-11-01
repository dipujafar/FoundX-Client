import { Navbar } from "@/src/components/navbar";
import { ReactNode } from "react";

const WithCommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default WithCommonLayout;
