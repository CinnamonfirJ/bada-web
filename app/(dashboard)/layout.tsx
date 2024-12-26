import BottomMenu from "../_components/BottomMenu";
import Menu from "../_components/Menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col h-full'>
      {/* TOP */}
      {/* <div className='sticky top-0 bg-top-nav-bg'>
        <Header />
      </div> */}
      <div className='flex h-full'>
        {/* LEFT */}
        <div className='lg:w-[14%] bg-sidebar-bg border-r border-black/50 left-80'>
          <Menu />
        </div>
        {/* RIGHT */}
        <div className='w-[96%]'>{children}</div>
        {/* BOTTOM */}
        <div className=''>
          <BottomMenu />
        </div>
      </div>
    </div>
  );
}
