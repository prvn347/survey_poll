export function PollSkeleton() {
  return (
    <div>
      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>

        <div className="h-4 w-28 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-4 w-28 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-4 w-28 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>

        <div className=" flex justify-end"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
