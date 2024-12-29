"use client";

import { useState } from "react";

export function FeedTabs() {
  const [activeTab, setActiveTab] = useState<"for-you" | "following">(
    "for-you"
  );

  return (
    <div className='border-b border-gray-200'>
      <div className='flex'>
        <button
          onClick={() => setActiveTab("for-you")}
          className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "for-you"
              ? "border-primary"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          For you
        </button>
        <button
          onClick={() => setActiveTab("following")}
          className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "following"
              ? "border-primary"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Following
        </button>
      </div>
    </div>
  );
}
