import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <p className="flex items-center justify-center gap-1.5 text-md md:text-lg font-semibold " >
        <Link
          href="/https://github.com/DIbarguenCurrea/e-commerce"
        >
          <FaGithub />
        </Link>
        Sebaxtian &copy; 2025. All Rights Reserved
      </p>
    </div>
  )
}

export default Footer