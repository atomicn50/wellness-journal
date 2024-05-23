export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute bottom-0 w-full h-3/5 bg-gray-100"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}