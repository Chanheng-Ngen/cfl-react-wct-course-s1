// Mock data for landing page 
// Hero banner 
import morodok_techo_stadium from '../assets/images/morodok_techo_stadium.jpg';
import home_team_logo from '../assets/images/Logo1.png';
import away_team_logo from '../assets/images/Logo2.png';
const heroBanner = {
    badge: 'NEXT MATCH',
    title: 'Champions League Final',
    description: "Witness the ultimate showdown as two titans clash for European glory. Don't miss the most anticipated match of the season!",
    matchInfo: [
        { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', text: 'Saturday, Nov 16, 2025' },
        { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: '8:00 PM' }
    ],
    backgroundImage: morodok_techo_stadium
};

// upcoming match
const upcomingMatches = [
    {
        id: 1,
        league: 'Bundesliga',
        home_team: { name: 'Bayern Munich', logo: home_team_logo },
        away_team: { name: 'Borussia Dortmund', logo: away_team_logo },
        date: 'Nov 20, 2025',
        time: '7:30 PM',
        venue: 'Allianz Arena',
        matchNumber: 'Match 1 of 6'
    },
    {
        id: 2,
        league: 'Cambodia League',
        home_team: { name: 'Phnom Penh Crown', logo: home_team_logo },
        away_team: { name: 'Angkor Tiger', logo: away_team_logo },
        date: 'Nov 21, 2025',
        time: '6:00 PM',
        venue: 'Morodok Techo Stadium',
        matchNumber: 'Match 2 of 6'
    },
    {
        id: 3,
        league: 'Cambodia League',
        home_team: { name: 'Visakha FC', logo: home_team_logo },
        away_team: { name: 'Boeung Ket', logo: away_team_logo },
        date: 'Nov 22, 2025',
        time: '5:30 PM',
        venue: 'National Olympic Stadium',
        matchNumber: 'Match 3 of 6'
    },
    {
        id: 4,
        league: 'Premier League',
        home_team: { name: 'Manchester United', logo: home_team_logo },
        away_team: { name: 'Liverpool', logo: away_team_logo },
        date: 'Nov 23, 2025',
        time: '8:00 PM',
        venue: 'Old Trafford',
        matchNumber: 'Match 4 of 6'
    },
    {
        id: 5,
        league: 'Cambodia League',
        home_team: { name: 'Preah Khan Reach', logo: home_team_logo },
        away_team: { name: 'National Police', logo: away_team_logo },
        date: 'Nov 24, 2025',
        time: '4:00 PM',
        venue: 'RSN Stadium',
        matchNumber: 'Match 5 of 6'
    },
    {
        id: 6,
        league: 'La Liga',
        home_team: { name: 'Real Madrid', logo: home_team_logo },
        away_team: { name: 'Barcelona', logo: away_team_logo },
        date: 'Nov 25, 2025',
        time: '9:00 PM',
        venue: 'Santiago Bernabéu',
        matchNumber: 'Match 6 of 6'
    }
]

// About Us
const aboutData = [
    {
        id: 1,
        icon: '🏆',
        title: 'Our Legacy',
        description: "With over 50 years of excellence, we've built a legacy of championship victories and unforgettable moments. Our trophy cabinet speaks volumes about our commitment to success.",
        stat: 'Championships',
        statValue: '28'
    },
    {
        id: 2,
        icon: '⚽',
        title: 'Our Philosophy',
        description: "We believe in playing beautiful, attacking football that entertains fans worldwide. Our commitment to developing young talent and playing with passion defines who we are.",
        stat: 'Youth Players',
        statValue: '150+'
    },
    {
        id: 3,
        icon: '🌍',
        title: 'Global Impact',
        description: "From local communities to international stages, our influence extends far beyond the pitch. We're proud to inspire millions of fans across the globe.",
        stat: 'Global Fans',
        statValue: '500M+'
    },
    {
        id: 4,
        icon: '💪',
        title: 'Community First',
        description: "Our commitment to giving back drives everything we do. Through various initiatives, we support education, health, and sports development in communities worldwide.",
        stat: 'Programs',
        statValue: '50+'
    }
];

// Video Highlights 
const videoHighlights = [
    {
        id: 1,
        title: 'Best Goals of the Month',
        thumbnail: morodok_techo_stadium,
        duration: '8:45',
        views: '2.3M views'
    },
    {
        id: 2,
        title: 'Champions League Highlights',
        thumbnail: morodok_techo_stadium,
        duration: '12:30',
        views: '4.1M views'
    },
    {
        id: 3,
        title: 'Amazing Skills & Tricks',
        thumbnail: morodok_techo_stadium,
        duration: '6:15',
        views: '1.8M views'
    },
    {
        id: 4,
        title: 'Last Match Full Highlights',
        thumbnail: morodok_techo_stadium,
        duration: '10:22',
        views: '3.5M views'
    }
];

// Season Stats 
const seasonStats = [
    { icon: '🎯', label: 'Goals Scored', value: '89', change: '+12', positive: true },
    { icon: '🛡️', label: 'Clean Sheets', value: '24', change: '+5', positive: true },
    { icon: '📊', label: 'Win Rate', value: '73%', change: '+8%', positive: true },
    { icon: '👥', label: 'Squad Players', value: '28', change: '+2', positive: true }
];

// Top Scorers 
const topScorers = [
    { rank: 1, name: 'Marcus Sterling', position: 'Forward', goals: 18, assists: 7 },
    { rank: 2, name: 'James Rodriguez', position: 'Midfielder', goals: 14, assists: 12 },
    { rank: 3, name: 'David Williams', position: 'Forward', goals: 11, assists: 5 }
];

// Latest News 
const latestNews = [
    {
        id: 1,
        category: 'Match Report',
        categoryColor: 'bg-blue-600',
        title: 'Historic Victory: Team Secures Championship Title',
        description: 'An incredible performance leads to a decisive win in the final match of the season.',
        thumbnail: morodok_techo_stadium,
        timeAgo: '2 hours ago'
    },
    {
        id: 2,
        category: 'Transfer News',
        categoryColor: 'bg-blue-600',
        title: 'Star Player Signs New Long-Term Contract',
        description: 'Club announces extension keeping key player at the team through 2028.',
        thumbnail: morodok_techo_stadium,
        timeAgo: '5 hours ago'
    },
    {
        id: 3,
        category: 'Academy',
        categoryColor: 'bg-blue-600',
        title: 'Youth Academy Produces Future Stars',
        description: 'Talented youngsters making waves in the development squad ahead of first team opportunities.',
        thumbnail: morodok_techo_stadium,
        timeAgo: '1 day ago'
    },
    {
        id: 4,
        category: 'Interview',
        categoryColor: 'bg-blue-600',
        title: 'Manager Discusses Tactical Evolution',
        description: "Head coach shares insights on the team's playing style and future strategy.",
        thumbnail: morodok_techo_stadium,
        timeAgo: '1 day ago'
    }
];

// League Standings 
const leagueStandings = [
    { rank: 1, team: 'Manchester City', played: 12, points: 31, trend: 'up' },
    { rank: 2, team: 'Arsenal', played: 12, points: 29, trend: 'same' },
    { rank: 3, team: 'Liverpool', played: 12, points: 27, trend: 'up' },
    { rank: 4, team: 'Aston Villa', played: 12, points: 26, trend: 'down' },
    { rank: 5, team: 'Tottenham', played: 12, points: 24, trend: 'up' },
    { rank: 6, team: 'Chelsea', played: 12, points: 22, trend: 'same' },
    { rank: 7, team: 'Newcastle', played: 12, points: 21, trend: 'down' },
    { rank: 8, team: 'Brighton', played: 12, points: 19, trend: 'up' }
];
export { heroBanner, aboutData, videoHighlights, seasonStats, topScorers, latestNews, leagueStandings, upcomingMatches };