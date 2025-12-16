import React from 'react';
import { CheckCircle, Trophy, Users, Calendar, MapPin, Star, Target, TrendingUp, Heart } from 'lucide-react';

const CambodiaFootballLeague = () => {
  const stats = [
    { icon: Trophy, value: "15+", label: "Seasons", color: "bg-yellow-500" },
    { icon: Users, value: "11", label: "Clubs", color: "bg-blue-500" },
    { icon: Calendar, value: "110+", label: "Matches per Season", color: "bg-green-500" },
    { icon: MapPin, value: "8", label: "Cities", color: "bg-purple-500" }
  ];

  const values = [
    {
      icon: Star,
      title: "Our Mission",
      description: "To develop and promote professional football in Cambodia by providing a competitive platform for clubs and players, fostering youth talent, and creating memorable experiences for fans across the nation.",
      color: "bg-blue-500"
    },
    {
      icon: Target,
      title: "Our Vision",
      description: "To establish the Cambodia Football League as a leading football competition in Southeast Asia, recognized for its quality of play, professional standards, and contribution to the development of the sport regionally and internationally.",
      color: "bg-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Striving for the highest standards in Cambodian football through continuous improvement and dedication.",
      color: "bg-blue-500"
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Upholding fair play, transparency, and ethical conduct in all aspects of the league operations.",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Development",
      description: "Investing in youth development and infrastructure to elevate the quality of Cambodian football.",
      color: "bg-purple-500"
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building strong connections between fans and communities across Cambodia through football.",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <CheckCircle className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm font-medium text-blue-200">Est. 2009</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 leading-tight">About Cambodia Football League</h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mb-8 leading-relaxed">
            The premier professional football competition in Cambodia, dedicated to developing local talent, promoting the beautiful game, and bringing communities together through the passion of football.
          </p>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Our Teams
            </button>
            <button className="px-6 py-3 bg-blue-700/50 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-blue-700/70 transition-all">
              Latest News
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The Cambodia Football League (CFL) was established in 2009 with a vision to create a professional, competitive football environment that would nurture Cambodian talent and elevate the sport to international standards.
              </p>
              
              <p>
                Over the years, the league has grown from humble beginnings to become the cornerstone of Cambodian football, featuring 11 competitive clubs across 8 cities. Our commitment to excellence has helped develop countless players who have gone on to represent Cambodia at the international level.
              </p>
              
              <p>
                Today, the CFL is recognized as one of Southeast Asia's emerging football leagues, with increasing investment in youth development, modern facilities, and professional training programs. We continue to work towards our goal of making Cambodian football a force to be reckoned with in the region.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600"></div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.3),transparent)]"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end p-8 text-white min-h-[400px]">
              <div className="text-6xl font-bold mb-2">15+</div>
              <div className="text-xl font-semibold mb-2">Years of Excellence in</div>
              <div className="text-lg">Cambodian Football</div>
              <div className="mt-6 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ml-auto">
                <Trophy className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Mission & Vision</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Building the future of Cambodian football through excellence, integrity, and community engagement
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {values.slice(0, 2).map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.slice(2).map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Competition Format Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Competition Format</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding how the Cambodia Football League operates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">11 Teams</h3>
              <p className="text-slate-300 leading-relaxed">
                The league consists of 11 professional football clubs from across Cambodia, competing for the championship title each season.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Round Robin</h3>
              <p className="text-slate-300 leading-relaxed">
                Teams play each other twice (home and away) in a double round-robin format, ensuring fair competition and exciting matchups.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Points System</h3>
              <p className="text-slate-300 leading-relaxed">
                Standard 3 points for a win, 1 point for a draw. The team with the most points at the end of the season is crowned champion.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl mb-16">
          <h2 className="text-3xl font-bold mb-4">Join the Football Community</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Follow your favorite team, stay updated with the latest news, and be part of the growing Cambodia Football League family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              View All Teams
            </button>
            <button className="px-8 py-3 bg-blue-700/50 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-blue-700/70 transition-all">
              Match Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CambodiaFootballLeague;