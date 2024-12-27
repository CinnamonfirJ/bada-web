import { FeedTabs } from "@/app/_components/FeedTabs";
import { SearchBar } from "@/app/_components/SearchBar";
import { Post } from "@/app/_components/Post";
import Aside from "@/app/_components/Aside";

const HomePage = () => {
  return (
    <div className='flex justify-between max-[900px]:flex-col'>
      <main>
        <div className='w-full mx-auto px-4'>
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

      <Aside />
    </div>
  );
};

export default HomePage;
