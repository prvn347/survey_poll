export function Skelon() {
  return (
    <div>
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="flex gap-5 items-center">
          <div className="h-8 w-8 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-5 w-36 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        </div>
        <div className=" flex justify-end">
          <div className="h-9 w-20   bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
