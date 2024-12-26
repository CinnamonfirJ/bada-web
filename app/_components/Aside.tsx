import { SuggestedFollows } from "./SuggestedFollows";
import { ThemeToggle } from "./ThemeToggle";
import { TrendingAssets } from "./TrendingAssets";
import { WalletStatus } from "./WalletStatus";

const Aside = () => {
  return (
    <aside className='w-full min-[900px]:max-w-sm p-4'>
      <div className='flex items-center justify-between mb-8'>
        <ThemeToggle />
        <WalletStatus />
      </div>
      <TrendingAssets />
      <SuggestedFollows />
    </aside>
  );
};

export default Aside;
