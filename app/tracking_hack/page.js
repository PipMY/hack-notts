import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-gray-800 text-white p-4">
        <h1 className="text-2xl">Puzzle Solved!</h1>
        <p>Welcome to the next stage. Proceed carefully...</p>
        {/* Add your puzzle content here */}
      </div>
    </Suspense>
  );
}