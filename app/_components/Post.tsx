import { BadgeCheck, Bookmark } from "lucide-react";
import Image from "next/image";
import { PostMetrics } from "./PostMetrics";

interface PostProps {
  author: {
    name: string;
    handle: string;
    avatar: string;
    isVerified?: boolean;
  };
  content: string | React.ReactNode;
  metrics: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export function Post({ author, content, metrics }: PostProps) {
  return (
    <article className='py-6'>
      <div className='flex items-start gap-3'>
        <Image
          src={author.avatar}
          alt={author.name}
          width={48}
          height={48}
          className='rounded-full'
        />
        <div className='flex-1 min-w-0'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1'>
              <span className='font-semibold'>{author.name}</span>
              {author.isVerified && (
                <BadgeCheck className='w-4 h-4 text-blue-500' />
              )}
              <span className='text-gray-500 text-sm'>{author.handle}</span>
            </div>
            <button className='text-gray-400 hover:text-gray-600'>
              <Bookmark className='w-5 h-5' />
            </button>
          </div>
          <div className='mt-2 text-gray-900 text-sm'>{content}</div>
          <div className='mt-4 bg-white rounded-2xl p-6 border border-gray-100'>
            {/* Content card */}
          </div>
          <PostMetrics {...metrics} />
        </div>
      </div>
    </article>
  );
}
