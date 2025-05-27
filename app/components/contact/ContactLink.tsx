// components/ContactLink.tsx
import React from "react";

interface ContactLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  label,
  isExternal,
}) => {
  return (
    <a
      href={href}
      className="text-blue-800 no-underline mx-2.5 hover:underline"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
};

export default ContactLink;
