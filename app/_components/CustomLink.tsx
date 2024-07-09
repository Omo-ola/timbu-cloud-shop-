
import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";

interface CustomLinkProps extends LinkProps {
  disabled?: boolean;
  children: ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  disabled,
  children,
  ...props
}) => {
  if (disabled) {
    return (
      <span
        style={{ cursor: "not-allowed", color: "gray" }}
        className="flex gap-6 item-center md:inline-block"
      >
        {children}
      </span>
    );
  }

  return (
    <Link {...props} className="flex gap-6 item-center md:inline-block">
      {children}
    </Link>
  );
};

export default CustomLink;
