import Menu from "../_components/Menu";
import Header from "../_components/Header";
import Navbar from "../_components/Navbar";
import SalesHub from "./saleshub/SalesHub";
import TopToolbar from "../_components/ToolBar";

export default function DashboardLayout({}: // children,
Readonly<{
  children: React.ReactNode;
}>) {
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
          <TopToolbar />
          <SalesHub />
        </div>
      </div>
    </div>
  );
}
