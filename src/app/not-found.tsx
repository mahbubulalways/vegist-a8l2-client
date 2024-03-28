import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-8xl font-extrabold text-red-800">404</h1>
      <p>
        Page Not Found{" "}
        <span className="text-blue-800 font-medium border-b border-blue-800">
          <Link href={"/"}> Back to Home</Link>
        </span>
      </p>
    </div>
  );
};

export default NotFound;
