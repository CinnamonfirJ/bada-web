import Link from "next/link";
import {
  Search,
  Settings,
  User,
  Grip,
  Plus,
  Undo,
  Presentation,
} from "lucide-react";

const Header = () => {
  return (
    <nav className='bg-top-nav-bg text-top-nav-text h-12 px-2 flex items-center justify-between'>
      {/* LEFT TITLE */}
      <div className='flex items-center space-x-4'>
        <button className='hover:bg-white/10 rounded'>
          <Grip className='h-5 w-5' />
        </button>
        <div className='flex items-center gap-2'>
          <Link href='/' className='text-lg '>
            Dynamics 365
          </Link>
          <span>|</span>
          <span className='text-sm font-light'>Sales hub</span>
        </div>
      </div>

      {/* RIGHT USER */}
      <div className='flex items-center space-x-2'>
        <button className='p-2 hover:bg-white/10 rounded'>
          <Search className='h-5 w-5' />
        </button>
        <button className='p-2 hover:bg-white/10 rounded'>
          <Plus className='h-5 w-5' />
        </button>
        <button className='p-2 hover:bg-white/10 rounded'>
          <Settings className='h-5 w-5' />
        </button>
        <button className='p-2 hover:bg-white/10 rounded'>
          <Undo className='h-5 w-5' />
        </button>
        <button className='p-2 hover:bg-white/10 rounded'>
          <Presentation className='h-5 w-5' />
        </button>
        <button className='p-2 hover:bg-white/10 rounded relative'>
          <User className='h-5 w-5' />
          <div className='w-3 h-3 bg-green-400 border-2 border-white rounded-full absolute bottom-1 right-0'></div>
        </button>
      </div>
    </nav>
  );
};

export default Header;
