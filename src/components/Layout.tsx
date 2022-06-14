import React from "react";
import Header from "./header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className='flex'>
      <Header />
      {children}
    </section>
  );
};

export default Layout;
