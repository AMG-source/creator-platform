"use client"; // Ensure it's a Client Component

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Creator Ecosystem 🚀</h1>
      <p className="mt-4 text-lg text-gray-700">
        Your platform for connecting creators and professionals.
      </p>
      <Image src="/next.svg" alt="Next.js Logo" width={150} height={50} className="mt-6" />
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
}
