export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 sm:p-8">
      {/* Terminal Window */}
      <div className="w-full max-w-2xl bg-black border-2 border-gray-700 rounded-lg shadow-lg">
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-gray-800 p-2 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-sm font-mono">Terminal</div>
          <div className="w-12"></div> {/* Spacer for alignment */}
        </div>
        {/* Terminal Body */}
        <div className="p-4 font-mono text-green-400 text-base sm:text-lg">
          <p className="mb-2">
            <span className="text-green-600">$</span> curl www.hearthealers.in
          </p>
          <p className="text-red-600 font-bold underline">
            Running Over Here
          </p>
        </div>
      </div>
    </div>
  );
}