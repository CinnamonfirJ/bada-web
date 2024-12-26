import Image from "next/image";

interface SuggestedUser {
  name: string;
  role: string;
  avatar: string;
}

export function SuggestedFollows() {
  const users: SuggestedUser[] = [
    {
      name: "Swill_eke",
      role: "Sui Ambassador",
      avatar: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "sugarcho.sui",
      role: "Sui Ambassador",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  ];

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='font-semibold '>Suggested follows</h2>
        <a href='#' className='text-sm text-blue-400 hover:text-blue-300'>
          See more
        </a>
      </div>

      <div className='space-y-3'>
        {users.map((user) => (
          <div
            key={user.name}
            className='bg-gray-50 rounded-2xl p-3 flex items-center gap-3'
          >
            <Image
              src={user.avatar}
              alt={user.name}
              width={48}
              height={48}
              className='rounded-full'
            />
            <div className='flex-1 min-w-0'>
              <h3 className='font-semibold text-gray-900 truncate'>
                {user.name}
              </h3>
              <p className='text-sm text-gray-500 truncate'>{user.role}</p>
            </div>
            <button className='px-4 py-1.5 bg-[#1B3A4B] text-white text-sm font-medium rounded-lg hover:bg-[#152d3b]'>
              Follow user
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
