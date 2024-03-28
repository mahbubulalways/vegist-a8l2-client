import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";

type TChildren = {
  children: ReactNode;
};
const layout = ({ children }: TChildren) => {
  return (
    <div className="flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
