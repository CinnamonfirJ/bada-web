"use client";

import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className='flex items-center border border-foreground bg-white/10 rounded-full py-0.5 px-2'>
      <button
        onClick={() => setIsDark(false)}
        className={`p-1.5 rounded-full transition-colors ${
          !isDark ? "bg-white text-black" : "text-black/20"
        }`}
      >
        <Sun className='w-4 h-4' />
      </button>
      <button
        onClick={() => setIsDark(true)}
        className={`p-1.5 rounded-full transition-colors ${
          isDark ? "bg-white text-black" : "text-black/20"
        }`}
      >
        <Moon className='w-4 h-4' />
      </button>
    </div>
  );
}
