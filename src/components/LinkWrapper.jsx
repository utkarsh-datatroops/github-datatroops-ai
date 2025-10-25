import Link from "next/link";
import { memo } from "react";

const LinkWrapper = ({ pageUrl, children }) => {
  if (pageUrl) {
    return (
      <Link href={pageUrl} className="block">
        {children}
      </Link>
    );
  }
  return children;
};

export default memo(LinkWrapper);
