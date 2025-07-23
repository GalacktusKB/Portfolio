import { useState } from "react";
import { MdEmail } from 'react-icons/md';

function EmailBtn() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("abhinaba2048@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // hide after 2s
  };

  return (
    <div className="relative inline-block">
      <a
        onClick={handleCopy}
        className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer"
      >
        <MdEmail className="w-5 h-5 text-blue-400" /> Email
      </a>

      {copied && (
        <span className="absolute top-0 right-0 mt-[-1.5rem] mr-[-0.5rem] bg-gray-800 text-white text-sm px-2 py-1 rounded-md shadow-md animate-fade-in-out">
          Copied!
        </span>
      )}
    </div>
  );
}

export default EmailBtn;
