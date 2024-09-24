"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const ResumePage = () => {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/SAIKIRAN_SURAPALLI_RESUME.pdf";
    link.download = "SAIKIRAN_SURAPALLI_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="mt-8 w-full max-w-4xl">
        <iframe
          src="/SAIKIRAN_SURAPALLI_RESUME.pdf"
          className="w-full h-[600px] border-2 border-white rounded-lg"
          title="Resume Preview"
        />
      </div>
      <div className="flex flex-row mt-10 gap-10">
        <div>
          <Link
            href="/"
            className="mt-8 text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
          >
            Back to Home
          </Link>
        </div>

        <div>
          <Link
            href="/SAIKIRAN_SURAPALLI_RESUME.pdf"
            download="SAIKIRAN_SURAPALLI_RESUME.pdf"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
