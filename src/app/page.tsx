'use client'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        {/* Main Hello World Section */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to your beautiful Next.js application built with modern design principles and Tailwind CSS
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 mt-12">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-blue-700 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">Next.js</div>
            <div className="text-gray-600">Modern React Framework</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">Tailwind</div>
            <div className="text-gray-600">Utility-First CSS</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-blue-700 mb-2">TypeScript</div>
            <div className="text-gray-600">Type-Safe Development</div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-16 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
          <p className="text-gray-700 font-medium">
            🎉 Your application is running successfully! Ready to build something amazing?
          </p>
        </div>
      </div>
    </main>
  )
}