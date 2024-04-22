import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link href={address}>
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-2xl font-bold hover:opacity-70">
        {title}
      </p>
    </Link>
  );
};

export default MenuItem;
