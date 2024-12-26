import Menu from "../_components/Menu";
import Navbar from "../_components/Navbar";

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
        <div className='lg:w-[24%] md:w-[10%] bg-sidebar-bg border-r border-black/50'>
          <Menu />
        </div>
        {/* RIGHT */}
        <div className='w-[86%] bg-blue-100'>
          <Navbar />
          {children}
          {/* <TopToolbar />
          <SalesHub /> */}
        </div>
      </div>
    </div>
  );
}
