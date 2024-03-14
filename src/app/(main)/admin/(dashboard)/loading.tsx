export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="rounded-md h-10 w-full bg-gray-300 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-md h-10 w-full bg-gray-300 animate-pulse" />
        <div className="rounded-md h-10 w-full bg-gray-300 animate-pulse" />
        <div className="rounded-md h-10 w-full bg-gray-300 animate-pulse" />
        <div className="rounded-md h-10 w-full bg-gray-300 animate-pulse" />
      </div>
    </div>
  );
}
