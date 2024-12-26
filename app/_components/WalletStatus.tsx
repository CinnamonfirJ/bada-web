import { Wallet } from "lucide-react";

export function WalletStatus() {
  return (
    <button className='flex items-center gap-2 px-2 py-0.5 rounded-full border border-foreground bg-white/10'>
      <Wallet />
      <span className='relative flex h-2 w-2'>
        <span className='absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping'></span>
        <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
      </span>
    </button>
  );
}
