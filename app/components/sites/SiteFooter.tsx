// components/SiteFooter.tsx
import React from "react";

interface SiteFooterProps {
  name: string;
}

const SiteFooter: React.FC<SiteFooterProps> = ({ name }) => {
  return (
    <footer className="text-center py-5 bg-gray-800 text-gray-100 text-sm">
      <div className="w-11/12 max-w-6xl mx-auto">
        <p>
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
