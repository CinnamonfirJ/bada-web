import { FeedTabs } from "@/app/_components/FeedTabs";
import { SearchBar } from "@/app/_components/SearchBar";
import { Post } from "@/app/_components/Post";
import { ThemeToggle } from "@/app/_components/ThemeToggle";
import { WalletStatus } from "@/app/_components/WalletStatus";
import { TrendingAssets } from "@/app/_components/TrendingAssets";
import { SuggestedFollows } from "@/app/_components/SuggestedFollows";
// import { Bookmark, Heart, MessageSquare, Share2 } from "lucide-react";
// import Image from "next/image";

const HomePage = () => {
  return (
    <div className='flex justify-between max-[900px]:flex-col max-[900px]:flex-col-reverse'>
      <main className=''>
        <div className='max-w-2xl mx-auto px-4'>
          <div className='py-4'>
            <SearchBar />
          </div>
          <FeedTabs />
          <Post
            author={{
              name: "DESMOND.sui",
              handle: "defi_funds1",
              avatar: "/assets/profile-pic.png?height=48&width=48",
              isVerified: true,
            }}
            content={
              <p>
                BADA is finally LIVE! Check out amazing features on{" "}
                <a href='#' className='text-blue-500 hover:underline'>
                  bada.fun
                </a>
                . Thanks to{" "}
                <a href='#' className='text-blue-500 hover:underline'>
                  @swill_eke
                </a>{" "}
                and{" "}
                <a href='#' className='text-blue-500 hover:underline'>
                  @lorem_ipsum
                </a>{" "}
                for supporting this.
              </p>
            }
            metrics={{
              likes: 574000,
              comments: 76000,
              shares: 5000,
            }}
          />
        </div>
      </main>

      <aside className='w-full flex flex-col justify-center items-center p-4'>
        <div className='flex w-full items-center justify-between mb-8'>
          <ThemeToggle />
          <WalletStatus />
        </div>
        <div className='w-full max-w-md p-4'>
          <TrendingAssets />
          <SuggestedFollows />
        </div>
      </aside>
    </div>
  );
};

export default HomePage;
