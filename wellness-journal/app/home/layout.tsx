import SideNav from "../ui/home/sidenav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white text-black">
      <SideNav />
      <div className="flex-grow">{children}</div>
    </div>
  )
}