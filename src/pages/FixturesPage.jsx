import Logo1 from "../assets/images/Logo1.png";
import Logo2 from "../assets/images/Logo2.png";
import Header from "../components/Header";
import Footer from "../components/Footer";


const fixturesData = [
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },

    ],
  },
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },
];

const FixturesPage = () => {
  return (
    <>
    < Header />
    <div className="w-full min-h-screen bg-white pt-6 min-w-0">

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-center py-10 rounded-b-3xl shadow-md">
        <h1 className="text-white text-3xl font-extrabold tracking-wide uppercase">
          Match Fixtures
        </h1>
      </div>

      {/* Fixtures */}
      <div className="w-full px-4 sm:px-6 lg:px-10 py-10">
        {fixturesData.map((fixture, index) => (
          <div
            key={index}
            className="mb-10 bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            {/* Date Header */}
            <div className="flex items-center bg-red-600 text-white px-5 py-3 font-semibold text-lg">

              {fixture.date}
            </div>

            {/* League Info */}
            <div className="flex items-center justify-between bg-gray-800 text-white px-5 py-3 text-sm font-medium">
              <div className="flex items-center gap-2">

                {fixture.league}
              </div>
              <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
                {fixture.week}
              </span>
            </div>

            {/* Match Cards */}
            <div className="p-5 space-y-4">
              {fixture.matches.map((match, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-xl flex flex-col md:flex-row justify-between items-center p-4 hover:shadow-md transition-shadow"
                >
                  {/* Teams */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={match.homeLogo}
                      alt="Home Team"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-semibold text-gray-800 text-sm md:text-base">
                      {match.homeTeam}
                    </span>
                    <span className="font-bold text-gray-500">vs</span>
                    <img
                      src={match.awayLogo}
                      alt="Away Team"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-semibold text-gray-800 text-sm md:text-base">
                      {match.awayTeam}
                    </span>
                  </div>

                  {/* Match Info */}
                  <div className="flex items-center gap-3 mt-3 md:mt-0">
                    <div className="bg-white border px-3 py-1 rounded-md text-gray-700 font-medium">
                      {match.time}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">

                      {match.stadium}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FixturesPage;
