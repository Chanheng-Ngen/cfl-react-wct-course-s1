import React from 'react';
import { CheckCircle, Trophy, Users, Calendar, MapPin, Star, Target, TrendingUp, Heart, Award, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  const stats = [
    { icon: Trophy, value: "15+", label: "Seasons", color: "from-yellow-400 to-yellow-600" },
    { icon: Users, value: "11", label: "Clubs", color: "from-blue-500 to-blue-700" },
    { icon: Calendar, value: "110+", label: "Matches per Season", color: "from-green-500 to-green-700" },
    { icon: MapPin, value: "8", label: "Cities", color: "from-purple-500 to-purple-700" }
  ];

  const values = [
    {
      icon: Star,
      title: "Our Mission",
      description: "To develop and promote professional football in Cambodia by providing a competitive platform for clubs and players, fostering youth talent, and creating memorable experiences for fans across the nation.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Our Vision",
      description: "To establish the Cambodia Football League as a leading football competition in Southeast Asia, recognized for its quality of play, professional standards, and contribution to the development of the sport regionally and internationally.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Striving for the highest standards in Cambodian football through continuous improvement and dedication.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Upholding fair play, transparency, and ethical conduct in all aspects of the league operations.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Development",
      description: "Investing in youth development and infrastructure to elevate the quality of Cambodian football.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building strong connections between fans and communities across Cambodia through football.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden min-h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Cambodian Stadium Background */}
          <img 
            src="https://resources.premierleague.pulselive.com/photo-resources/2025/06/16/9dcb7d51-84fc-4c6a-9fe1-6593370971f0/GettyImages-2188259551.jpg?height=1080&width=1920" 
            alt="Cambodian Premier League Stadium"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-white50/88"></div>
          {/* Additional gradient effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.2),transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.2),transparent)]"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative container px-4 mx-auto py-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Est. 2009</div>
                <div className="text-xs text-blue-300">Professional Football League</div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-white">
              Cambodia Football League
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mb-8 leading-relaxed">
              The premier professional football competition in Cambodia, dedicated to developing local talent, promoting the beautiful game, and bringing communities together through the passion of football.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group px-7 py-3 bg-white text-blue-900 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-0.5">
                <span className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Our Teams
                </span>
              </button>
              <button className="px-7 py-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all shadow-lg">
                Latest News
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl"></div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
            </div>
            
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>
                The Cambodia Football League (CFL) was established in 2009 with a vision to create a professional, competitive football environment that would nurture Cambodian talent and elevate the sport to international standards.
              </p>
              
              <p>
                Over the years, the league has grown from humble beginnings to become the cornerstone of Cambodian football, featuring 11 competitive clubs across 8 cities. Our commitment to excellence has helped develop countless players who have gone on to represent Cambodia at the international level.
              </p>
              
              <p>
                Today, the CFL is recognized as one of Southeast Asia's emerging football leagues, with increasing investment in youth development, modern facilities, and professional training programs.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-red-200 to-gray-700"></div>
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.4),transparent)]"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white/30 rounded-full"></div>
                <div className="absolute bottom-12 left-8 w-12 h-12 border-2 border-white/20 rounded-full"></div>
              </div>
            </div>
            <div className="relative h-full flex flex-col justify-between p-8 text-white min-h-[380px]">
              <div className="flex-1 flex flex-col justify-center">
                <div className="inline-block">
                  <div className="text-7xl sm:text-8xl font-black mb-3 drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-red-100">
                    15+
                  </div>
                  <div className="h-1.5 w-24 bg-white/80 rounded-full mb-5 shadow-lg"></div>
                </div>
                <div className="text-2xl font-bold mb-2 drop-shadow-lg">Years of Excellence</div>
                <div className="text-lg text-red-50 drop-shadow-md font-medium">Cambodian Football Legacy</div>
                <div className="mt-4 flex gap-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
                  <div className="relative w-20 h-20 rounded-full bg-white/30 backdrop-blur-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl border-2 border-white/40">
                    <Trophy className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the future of Cambodian football through excellence, integrity, and community engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {values.slice(0, 2).map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.slice(2).map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Competition Format Section */}
        <div className="mb-16">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Competition Format</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding how the Cambodia Football League operates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-3xl p-10 text-white shadow-2xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl border border-white/40">
                <Users className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-3xl font-bold mb-4 drop-shadow-md text-gray-700">11 Teams</h3>
              <p className="leading-relaxed text-lg  text-gray-500">
                The league consists of 11 professional football clubs from across Cambodia, competing for the championship title each season.
              </p>
            </div>

            <div className="group rounded-3xl p-10 text-white shadow-2xl hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl border border-white/40">
                <Calendar className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-3xl font-bold mb-4 drop-shadow-md text-gray-700">Round Robin</h3>
              <p className="leading-relaxed text-lg  text-gray-500">
                Teams play each other twice (home and away) in a double round-robin format, ensuring fair competition and exciting matchups.
              </p>
            </div>

            <div className="group rounded-3xl p-10 text-white shadow-2xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl border border-white/40">
                <Trophy className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-3xl font-bold mb-4 drop-shadow-md text-gray-700">Points System</h3>
              <p className="leading-relaxed text-lg  text-gray-500">
                Standard 3 points for a win, 1 point for a draw. The team with the most points at the end of the season is crowned champion.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-600 via-blue-500 to-gray-600 rounded-3xl p-10 sm:p-12 text-center text-white shadow-xl mb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,100,100,0.3),transparent)]"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-40 h-40 bg-rose-400/20 rounded-full blur-2xl animate-pulse delay-150"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-white/20 rounded-full"></div>
            <div className="absolute top-16 right-1/4 w-20 h-20 border-2 border-white/10 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center mb-5">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
                <div className="relative w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/30">
                  <Heart className="w-8 h-8 text-white animate-pulse" />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 drop-shadow-xl">
              Join CFL Community
            </h2>
            <div className="h-1.5 w-40 bg-white/60 rounded-full mx-auto mb-6 shadow-lg"></div>
            
            <p className="text-lg sm:text-xl text-red-50 mb-8 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-md">
              Follow your favorite team, stay updated with the latest news, and be part of the growing Cambodia Football League family.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-8 py-3.5 bg-white text-black rounded-xl font-bold hover:bg-red-50 transition-all shadow-xl hover:shadow-white/50 transform hover:-translate-y-0.5">
                <span className="flex items-center gap-2 text-base">
                  <Trophy className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View All Teams
                </span>
              </button>
              <button className="px-8 py-3.5 bg-white/20 backdrop-blur-xl border-2 border-white/40 text-white rounded-xl font-bold hover:bg-white/30 transition-all shadow-lg text-base">
                Match Schedule
              </button>
            </div>
            
            <div className="mt-8 flex justify-center gap-3">
              <div className="w-2.5 h-2.5 bg-white/40 rounded-full animate-bounce"></div>
              <div className="w-2.5 h-2.5 bg-white/40 rounded-full animate-bounce delay-100"></div>
              <div className="w-2.5 h-2.5 bg-white/40 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;