import { useState } from 'react';
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  Briefcase,
  Heart,
  Calendar,
  Trophy,
  MessageSquare,
  Bell,
  LogOut,
  Moon,
  Sun,
} from 'lucide-react';

function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isDark, setIsDark] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
    { icon: Users, label: 'Networking Hub', href: '#' },
    { icon: Briefcase, label: 'Job Portal', href: '#' },
    { icon: Heart, label: 'Donation', href: '#' },
    { icon: Calendar, label: 'Events & Reunion', href: '#' },
    { icon: Trophy, label: 'Success Stories', href: '#' },
    { icon: MessageSquare, label: 'Feedback', href: '#' },
  ];

  const handleMenuClick = (label) => {
    setActiveItem(label);
    setIsSidebarOpen(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'}`}
    >
      {/* Top Navbar */}
      <header
        className={` ml-70 top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}
      >
        <div className="flex ml-5 items-center justify-between px-2 py-2">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 lg:hidden"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">AV</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Alumni Portal
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group">
              <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></span>
            </button>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              AV
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 transform transition-all duration-500 ease-in-out lg:translate-x-0 pt-20 lg:pt-0  ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 p-6 shadow-2xl">
          <nav className="">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.label;

              return (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.label)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl transform scale-105'
                      : 'hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-white/20 blur-xl"></div>
                  )}
                  <div className="relative z-10 flex items-center gap-4 w-full">
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-white/10'} transition-all`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                    </div>
                    <span className="font-semibold text-lg">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-10 bg-gradient-to-t from-yellow-400 to-pink-400 rounded-l-full"></div>
                    )}
                  </div>
                </button>
              );
            })}
          </nav>

          <div className="absolute bottom-8 left-6 right-6">
            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-red-600/20 hover:bg-red-600/30 text-red-400 transition-all duration-300 group">
              <div className="p-2 rounded-xl bg-red-600/30">
                <LogOut className="w-5 h-5" />
              </div>
              <span className="font-semibold text-lg">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="pt-20 lg:ml-72 min-h-screen p-6 lg:p-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="glass-card rounded-3xl p-8 mb-10 shadow-2xl backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 border border-white/20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Welcome Back, John!
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Explore your alumni network and stay connected.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { label: 'Total Alumni', value: '12,480', color: 'from-blue-500 to-cyan-500' },
              { label: 'Events This Month', value: '24', color: 'from-purple-500 to-pink-500' },
              { label: 'Jobs Posted', value: '156', color: 'from-green-500 to-emerald-500' },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                  <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
                </div>
                <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{stat.value}</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.label;

              return (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.label)}
                  className={`glass-card rounded-2xl p-6 backdrop-blur-xl border transition-all duration-500 group hover:shadow-2xl ${
                    isActive
                      ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-indigo-400 shadow-2xl scale-105'
                      : 'bg-white/40 dark:bg-gray-800/40 border-white/20 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-4 rounded-2xl mb-4 transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-xl' : 'bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:text-white'}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className={`font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {item.label}
                    </h3>
                    <p className={`text-sm ${isActive ? 'text-indigo-600 font-medium' : isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {isActive ? 'Currently Active' : 'Click to explore'}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Custom Styles */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        .dark .glass-card {
          background: rgba(30, 30, 40, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}

export default Main;