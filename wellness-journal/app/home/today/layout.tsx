export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="absolute bottom-0 w-full h-3/5 bg-gray-100"></div>
      <div className="z-10 relative">
        {children}
      </div>
    </div>
  );
}