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
    title: 'Cambodia Premier League Best Goals December 2024',
    thumbnail: 'https://img.youtube.com/vi/35CgcnoH9tE/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/35CgcnoH9tE?si=UPIO7GQvNcSEHKXG',
    duration: '12:45',
    views: '523K views'
  },
  {
    id: 2,
    title: 'Preah Khan Reach vs Phnom Penh Crown Full Highlights',
    thumbnail: 'https://img.youtube.com/vi/vmhi8pajk1Y/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/vmhi8pajk1Y?si=ESP3GuKbd0ATh5QQ',
    duration: '15:20',
    views: '892K views'
  },
  {
    id: 3,
    title: 'Top 10 Skills & Tricks in Cambodian League',
    thumbnail: 'https://img.youtube.com/vi/Ocjwu845yMA/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/Ocjwu845yMA?si=Wwldw2DtbYIKaqls',
    duration: '8:30',
    views: '1.2M views'
  },
  {
    id: 4,
    title: 'Best Saves of the Season - CPL Goalkeepers',
    thumbnail: 'https://img.youtube.com/vi/3f9vW2XlgXY/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/3f9vW2XlgXY?si=hmmOxCh9Ukwi203P',
    duration: '9:40',
    views: '445K views'
  },
  {
    id: 5,
    title: 'Visakha FC Amazing Comeback Victory',
    thumbnail: 'https://img.youtube.com/vi/zicdchV8BOE/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/zicdchV8BOE?si=qbx1K-FcdSv0QoO2',
    duration: '11:15',
    views: '675K views'
  },
  {
    id: 6,
    title: 'Angkor Tiger FC Championship Celebration',
    thumbnail: 'https://img.youtube.com/vi/PzltIjuRkyE/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/PzltIjuRkyE?si=yLO8pSoYWIQepKm6',
    duration: '14:50',
    views: '1.8M views'
  },
  {
    id: 7,
    title: 'AFC Cup - Cambodia Teams Best Moments',
    thumbnail: 'https://img.youtube.com/vi/UGqUhgSjjnY/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/UGqUhgSjjnY?si=Mpw2cho1p--bXCe8',
    duration: '16:25',
    views: '2.1M views'
  },
  {
    id: 8,
    title: 'Young Star Player - Season Highlights',
    thumbnail: 'https://img.youtube.com/vi/unIe6UyH66U/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/unIe6UyH66U?si=j8BgdSTrvGfjzy8o',
    duration: '10:05',
    views: '956K views'
  },
  {
    id: 9,
    title: 'Derby Match Atmosphere - Fans Best Moments',
    thumbnail: 'https://img.youtube.com/vi/lH4QHVXnSok/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/lH4QHVXnSok?si=uJRBo-zFwRLiAl2_',
    duration: '7:55',
    views: '1.5M views'
  },
  {
    id: 10,
    title: 'Behind the Scenes - Training & Preparation',
    thumbnail: 'https://img.youtube.com/vi/s7Ul-X9TBIs/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/s7Ul-X9TBIs?si=S7LoAPcM42hESikt',
    duration: '13:30',
    views: '720K views'
  },
  {
    id: 11,
    title: 'Cambodia Premier League Best Goals December 2024',
    thumbnail: 'https://img.youtube.com/vi/35CgcnoH9tE/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/35CgcnoH9tE?si=UPIO7GQvNcSEHKXG',
    duration: '12:45',
    views: '523K views'
  },
  {
    id: 12,
    title: 'Preah Khan Reach vs Phnom Penh Crown Full Highlights',
    thumbnail: 'https://img.youtube.com/vi/vmhi8pajk1Y/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/vmhi8pajk1Y?si=ESP3GuKbd0ATh5QQ',
    duration: '15:20',
    views: '892K views'
  },
  {
    id: 13,
    title: 'Top 10 Skills & Tricks in Cambodian League',
    thumbnail: 'https://img.youtube.com/vi/Ocjwu845yMA/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/Ocjwu845yMA?si=Wwldw2DtbYIKaqls',
    duration: '8:30',
    views: '1.2M views'
  },
  {
    id: 4,
    title: 'Best Saves of the Season - CPL Goalkeepers',
    thumbnail: 'https://img.youtube.com/vi/3f9vW2XlgXY/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/3f9vW2XlgXY?si=hmmOxCh9Ukwi203P',
    duration: '9:40',
    views: '445K views'
  },
  {
    id: 15,
    title: 'Visakha FC Amazing Comeback Victory',
    thumbnail: 'https://img.youtube.com/vi/zicdchV8BOE/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/zicdchV8BOE?si=qbx1K-FcdSv0QoO2',
    duration: '11:15',
    views: '675K views'
  },
  {
    id: 16,
    title: 'Angkor Tiger FC Championship Celebration',
    thumbnail: 'https://img.youtube.com/vi/PzltIjuRkyE/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/PzltIjuRkyE?si=yLO8pSoYWIQepKm6',
    duration: '14:50',
    views: '1.8M views'
  },
  {
    id: 17,
    title: 'AFC Cup - Cambodia Teams Best Moments',
    thumbnail: 'https://img.youtube.com/vi/UGqUhgSjjnY/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/UGqUhgSjjnY?si=Mpw2cho1p--bXCe8',
    duration: '16:25',
    views: '2.1M views'
  },
  {
    id: 18,
    title: 'Young Star Player - Season Highlights',
    thumbnail: 'https://img.youtube.com/vi/unIe6UyH66U/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/unIe6UyH66U?si=j8BgdSTrvGfjzy8o',
    duration: '10:05',
    views: '956K views'
  },
  {
    id: 19,
    title: 'Derby Match Atmosphere - Fans Best Moments',
    thumbnail: 'https://img.youtube.com/vi/lH4QHVXnSok/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/lH4QHVXnSok?si=uJRBo-zFwRLiAl2_',
    duration: '7:55',
    views: '1.5M views'
  },
  {
    id: 20,
    title: 'Behind the Scenes - Training & Preparation',
    thumbnail: 'https://img.youtube.com/vi/s7Ul-X9TBIs/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/s7Ul-X9TBIs?si=S7LoAPcM42hESikt',
    duration: '13:30',
    views: '720K views'
  }
];

// Top Scorers 
const topScorers = [
  { rank: 1, name: 'Marcus Sterling', team: 'Forward', goals: 18, assists: 7 },
  { rank: 2, name: 'James Rodriguez', team: 'Midfielder', goals: 14, assists: 12 },
  { rank: 3, name: 'David Williams', team: 'Forward', goals: 11, assists: 5 }
];

// Latest News 
const latestNews = [
  {
    id: 1,
    title: 'Preah Khan Reach Dominates in Championship Showdown',
    description: 'PKR delivers a stunning 3-0 victory against Phnom Penh Crown in a crucial Cambodian Premier League match. The home side dominated possession from start to finish, with standout performances from their attacking trio.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/694a0adf58ea7.jpg',
    date: "13 Nov 2025 11:30",
    author: "Admin",
    timeAgo: '2 hours ago'
  },
  {
    id: 2,
    title: "Cambodian Development League Has Reached Week 5",
    description: "The Cambodian Development League continues to showcase future talent as it hits the Week 5 milestone. Youth players are showing significant progress and technical skill as the competition heats up.",
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/694a0adfba976.jpg', 
    date: "12 Nov 2025 04:37",
    author: "Admin",
    timeAgo: '5 hours ago'
  },
  {
    id: 3,
    title: 'Angkor Tiger Signs International Star Player from Thailand',
    description: 'Cambodian club makes history with a record-breaking transfer signing from the Thai League. The newly acquired midfielder brings years of international experience and is expected to strengthen the squad.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/694a0adfba61e.jpg',
    date: "11 Nov 2025 14:20",
    author: "Admin",
    timeAgo: '8 hours ago'
  },
  {
    id: 4,
    title: 'Visakha FC Youth Academy Graduates Shine on National Stage',
    description: 'Three talented young players from Visakha FC academy have earned their first call-up to the Cambodia national team after impressive performances in recent league matches.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/694a0adf27cf4.jpg',
    date: "10 Nov 2025 10:15",
    author: "Admin",
    timeAgo: '12 hours ago'
  },
  {
    id: 5,
    title: 'Boeung Ket Manager Reveals Championship Strategy',
    description: 'In an exclusive press conference, the head coach discussed his tactical approach for the upcoming crucial matches in the intense title race.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/6948b52271453.jpg',
    date: "09 Nov 2025 16:45",
    author: "Admin",
    timeAgo: '1 day ago'
  },
  {
    id: 6,
    title: 'Morodok Techo Stadium Hosts Historic Derby Match',
    description: 'A record-breaking attendance of 60,000 passionate fans witnessed one of the most intense derby matches in Cambodian football history.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/6948ba22a39bf.jpg',
    date: "08 Nov 2025 19:00",
    author: "Admin",
    timeAgo: '1 day ago'
  },
  {
    id: 7,
    title: 'Cambodia League Teams Excel in AFC Cup Competition',
    description: 'Preah Khan Reach and Visakha FC have both successfully advanced to the knockout stages of the AFC Cup with impressive group stage performances.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/692f0257aad4d.jpg',
    date: "07 Nov 2025 08:30",
    author: "Admin",
    timeAgo: '2 days ago'
  },
  {
    id: 8,
    title: 'Rising Star Breaks Goal Scoring Record in Debut Season',
    description: 'At just 19 years old, the talented forward has become the youngest player in Cambodian Premier League history to score 15 goals in a single season.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/692eaf77df7e1.JPG',
    date: "06 Nov 2025 13:00",
    author: "Admin",
    timeAgo: '2 days ago'
  },
  {
    id: 9,
    title: 'Dramatic Last-Minute Winner Stuns Thousands of Fans',
    description: 'NagaWorld FC secured an incredible comeback victory with a stunning injury-time goal that sent their supporters into wild celebrations.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/6915613a0b5c2.jpg',
    date: "05 Nov 2025 21:15",
    author: "Admin",
    timeAgo: '3 days ago'
  },{
    id: 10,
    title: 'Dramatic Last-Minute Winner Stuns Thousands of Fans',
    description: 'NagaWorld FC secured an incredible comeback victory with a stunning injury-time goal that sent their supporters into wild celebrations.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/6915613a0b5c2.jpg',
    date: "05 Nov 2025 21:15",
    author: "Admin",
    timeAgo: '3 days ago'
  },
   {
    id: 11,
    title: 'Preah Khan Reach Dominates in Championship Showdown',
    description: 'PKR delivers a stunning 3-0 victory against Phnom Penh Crown in a crucial Cambodian Premier League match. The home side dominated possession from start to finish, with standout performances from their attacking trio.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/694a0adf58ea7.jpg',
    date: "13 Nov 2025 11:30",
    author: "Admin",
    timeAgo: '2 hours ago'
  },
  {
    id: 12,
    title: "Cambodian Development League Has Reached Week 5",
    description: "The Cambodian Development League continues to showcase future talent as it hits the Week 5 milestone. Youth players are showing significant progress and technical skill as the competition heats up.",
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/694a0adfba976.jpg', 
    date: "12 Nov 2025 04:37",
    author: "Admin",
    timeAgo: '5 hours ago'
  },
  {
    id: 13,
    title: 'Angkor Tiger Signs International Star Player from Thailand',
    description: 'Cambodian club makes history with a record-breaking transfer signing from the Thai League. The newly acquired midfielder brings years of international experience and is expected to strengthen the squad.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/694a0adfba61e.jpg',
    date: "11 Nov 2025 14:20",
    author: "Admin",
    timeAgo: '8 hours ago'
  },
  {
    id: 14,
    title: 'Visakha FC Youth Academy Graduates Shine on National Stage',
    description: 'Three talented young players from Visakha FC academy have earned their first call-up to the Cambodia national team after impressive performances in recent league matches.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/694a0adf27cf4.jpg',
    date: "10 Nov 2025 10:15",
    author: "Admin",
    timeAgo: '12 hours ago'
  },
  {
    id: 15,
    title: 'Boeung Ket Manager Reveals Championship Strategy',
    description: 'In an exclusive press conference, the head coach discussed his tactical approach for the upcoming crucial matches in the intense title race.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/6948b52271453.jpg',
    date: "09 Nov 2025 16:45",
    author: "Admin",
    timeAgo: '1 day ago'
  },
  {
    id: 16,
    title: 'Morodok Techo Stadium Hosts Historic Derby Match',
    description: 'A record-breaking attendance of 60,000 passionate fans witnessed one of the most intense derby matches in Cambodian football history.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/6948ba22a39bf.jpg',
    date: "08 Nov 2025 19:00",
    author: "Admin",
    timeAgo: '1 day ago'
  },
  {
    id: 17,
    title: 'Cambodia League Teams Excel in AFC Cup Competition',
    description: 'Preah Khan Reach and Visakha FC have both successfully advanced to the knockout stages of the AFC Cup with impressive group stage performances.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/692f0257aad4d.jpg',
    date: "07 Nov 2025 08:30",
    author: "Admin",
    timeAgo: '2 days ago'
  },
  {
    id: 18,
    title: 'Rising Star Breaks Goal Scoring Record in Debut Season',
    description: 'At just 19 years old, the talented forward has become the youngest player in Cambodian Premier League history to score 15 goals in a single season.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/692eaf77df7e1.JPG',
    date: "06 Nov 2025 13:00",
    author: "Admin",
    timeAgo: '2 days ago'
  },
  {
    id: 19,
    title: 'Dramatic Last-Minute Winner Stuns Thousands of Fans',
    description: 'NagaWorld FC secured an incredible comeback victory with a stunning injury-time goal that sent their supporters into wild celebrations.',
    thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/6915613a0b5c2.jpg',
    date: "05 Nov 2025 21:15",
    author: "Admin",
    timeAgo: '3 days ago'
  }
];

// League Standings 
const leagueStandings = [
  { rank: 1, team: 'Manchester City', played: 12, points: 31, team_logo: home_team_logo, trend: 'up' },
  { rank: 2, team: 'Arsenal', played: 12, points: 29, team_logo: home_team_logo, trend: 'same' },
  { rank: 3, team: 'Liverpool', played: 12, points: 27, team_logo: home_team_logo, trend: 'up' },
  { rank: 4, team: 'Aston Villa', played: 12, points: 26, team_logo: home_team_logo, trend: 'down' },
  { rank: 5, team: 'Tottenham', played: 12, points: 24, team_logo: home_team_logo, trend: 'up' },
  { rank: 6, team: 'Chelsea', played: 12, points: 22, team_logo: home_team_logo, trend: 'same' },
  { rank: 7, team: 'Newcastle', played: 12, points: 21, team_logo: home_team_logo, trend: 'down' },
  { rank: 8, team: 'Brighton', played: 12, points: 19, team_logo: home_team_logo, trend: 'up' }
];

// Clubs
const clubs = [
  {
    id: 1,
    team_name: 'Cambodian Club 1',
    team_logo: 'CC1',
    est: '2003',
    stadium: 'Prince Stadium',
    capacity: '5,000',
    championships: 2
  },
  {
    id: 2,
    team_name: 'Cambodian Club 2',
    team_logo: 'CC2',
    est: '2011',
    stadium: 'Olympic Stadium',
    capacity: '50,000',
    championships: 4
  },
  {
    id: 3,
    team_name: 'Cambodian Club 3',
    team_logo: 'CC3',
    est: '2018',
    stadium: 'Army Stadium',
    capacity: '5,000',
    championships: 1
  },
  {
    id: 4,
    team_name: 'Cambodian Club 4',
    team_logo: 'CC4',
    est: '2007',
    stadium: 'Svay Rieng Stadium',
    capacity: '5,000',
    championships: 3
  },
  {
    id: 5,
    team_name: 'Cambodian Club 5',
    team_logo: 'CC5',
    est: '2015',
    stadium: 'RSN Stadium',
    capacity: '5,000',
    championships: 0
  },
  {
    id: 6,
    team_name: 'Cambodian Club 6',
    team_logo: 'CC6',
    est: '2001',
    stadium: 'Siem Reap Stadium',
    capacity: '10,000',
    championships: 1
  },
  {
    id: 7,
    team_name: 'Cambodian Club 7',
    team_logo: 'CC7',
    est: '2019',
    stadium: 'Takhmao Stadium',
    capacity: '3,000',
    championships: 0
  },
  {
    id: 8,
    team_name: 'Cambodian Club 8',
    team_logo: 'CC8',
    est: '2010',
    stadium: 'Kampong Speu Stadium',
    capacity: '3,000',
    championships: 2
  },
  {
    id: 9,
    team_name: 'Cambodian Club 9',
    team_logo: 'CC9',
    est: '2005',
    stadium: 'Prince Stadium',
    capacity: '5,000',
    championships: 5
  },
  {
    id: 10,
    team_name: 'Cambodian Club 10',
    team_logo: 'CC10',
    est: '2016',
    stadium: 'Olympic Stadium',
    capacity: '50,000',
    championships: 3
  },
  {
    id: 11,
    team_name: 'Cambodian Club 11',
    team_logo: 'CC11',
    est: '2009',
    stadium: 'Army Stadium',
    capacity: '5,000',
    championships: 1
  },
  {
    id: 12,
    team_name: 'Cambodian Club 12',
    team_logo: 'CC12',
    est: '2012',
    stadium: 'Svay Rieng Stadium',
    capacity: '5,000',
    championships: 0
  },
  {
    id: 13,
    team_name: 'Cambodian Club 13',
    team_logo: 'CC13',
    est: '2004',
    stadium: 'RSN Stadium',
    capacity: '5,000',
    championships: 2
  },
  {
    id: 14,
    team_name: 'Cambodian Club 14',
    team_logo: 'CC14',
    est: '2017',
    stadium: 'Siem Reap Stadium',
    capacity: '10,000',
    championships: 1
  },
  {
    id: 15,
    team_name: 'Cambodian Club 15',
    team_logo: 'CC15',
    est: '2020',
    stadium: 'Prince Stadium',
    capacity: '5,000',
    championships: 0
  },
  {
    id: 16,
    team_name: 'Cambodian Club 16',
    team_logo: 'CC16',
    est: '2008',
    stadium: 'Olympic Stadium',
    capacity: '50,000',
    championships: 4
  },
  {
    id: 17,
    team_name: 'Cambodian Club 17',
    team_logo: 'CC17',
    est: '2006',
    stadium: 'Army Stadium',
    capacity: '5,000',
    championships: 2
  },
  {
    id: 18,
    team_name: 'Cambodian Club 18',
    team_logo: 'CC18',
    est: '2014',
    stadium: 'Takhmao Stadium',
    capacity: '3,000',
    championships: 0
  },
  {
    id: 19,
    team_name: 'Cambodian Club 19',
    team_logo: 'CC19',
    est: '2002',
    stadium: 'Kampong Speu Stadium',
    capacity: '3,000',
    championships: 1
  },
  {
    id: 20,
    team_name: 'Cambodian Club 20',
    team_logo: 'CC20',
    est: '2013',
    stadium: 'Svay Rieng Stadium',
    capacity: '5,000',
    championships: 3
  },
  {
    id: 21,
    team_name: 'Cambodian Club 21',
    team_logo: 'CC21',
    est: '2018',
    stadium: 'RSN Stadium',
    capacity: '5,000',
    championships: 0
  },
  {
    id: 22,
    team_name: 'Cambodian Club 22',
    team_logo: 'CC22',
    est: '2000',
    stadium: 'Prince Stadium',
    capacity: '5,000',
    championships: 5
  },
  {
    id: 23,
    team_name: 'Cambodian Club 23',
    team_logo: 'CC23',
    est: '2007',
    stadium: 'Siem Reap Stadium',
    capacity: '10,000',
    championships: 1
  },
  {
    id: 24,
    team_name: 'Cambodian Club 24',
    team_logo: 'CC24',
    est: '2011',
    stadium: 'Olympic Stadium',
    capacity: '50,000',
    championships: 2
  },
  {
    id: 25,
    team_name: 'Cambodian Club 25',
    team_logo: 'CC25',
    est: '2019',
    stadium: 'Army Stadium',
    capacity: '5,000',
    championships: 0
  },
  {
    id: 26,
    team_name: 'Cambodian Club 26',
    team_logo: 'CC26',
    est: '2005',
    stadium: 'Svay Rieng Stadium',
    capacity: '5,000',
    championships: 3
  },
  {
    id: 27,
    team_name: 'Cambodian Club 27',
    team_logo: 'CC27',
    est: '2016',
    stadium: 'Prince Stadium',
    capacity: '5,000',
    championships: 2
  },
  {
    id: 28,
    team_name: 'Cambodian Club 1',
    team_logo: 'CC1',
    est: '2003',
    stadium: 'Prince Stadium',
    capacity: '5,000',
    championships: 2
  },
  {
    id: 29,
    team_name: 'Cambodian Club 2',
    team_logo: 'CC2',
    est: '2011',
    stadium: 'Olympic Stadium',
    capacity: '50,000',
    championships: 4
  },
  {
    id: 30,
    team_name: 'Cambodian Club 3',
    team_logo: 'CC3',
    est: '2018',
    stadium: 'Army Stadium',
    capacity: '5,000',
    championships: 1
  },
  {
    id: 31,
    team_name: 'Cambodian Club 4',
    team_logo: 'CC4',
    est: '2007',
    stadium: 'Svay Rieng Stadium',
    capacity: '5,000',
    championships: 3
  },
  {
    id: 32,
    team_name: 'Cambodian Club 5',
    team_logo: 'CC5',
    est: '2015',
    stadium: 'RSN Stadium',
    capacity: '5,000',
    championships: 0
  },
];
const topScorersStats = [
  { rank: 1, name: "Keo Sokpheng", team: "Preah Khan Reach FC", goals: 18, avatar: "KS", color: "bg-orange-500" },
  { rank: 2, name: "Lim Pisoth", team: "Angkor Tiger FC", goals: 15, avatar: "LP", color: "bg-orange-500" },
  { rank: 3, name: "Sieng Chanthea", team: "Phnom Penh Crown FC", goals: 12, avatar: "SC", color: "bg-orange-500" },
  { rank: 4, name: "Chan Vathanaka", team: "Boeung Ket FC", goals: 11, avatar: "CV", color: "bg-orange-500" },
  { rank: 5, name: "Mat Noron", team: "Visakha FC", goals: 10, avatar: "MN", color: "bg-orange-500" },
  { rank: 6, name: "Kouch Sokumpheak", team: "Nagaworld FC", goals: 9, avatar: "KS", color: "bg-orange-500" },
  { rank: 7, name: "Sos Suhana", team: "Nagaworld FC", goals: 8, avatar: "SS", color: "bg-orange-500" },
  { rank: 8, name: "Prak Mony Udom", team: "Preah Khan Reach FC", goals: 7, avatar: "PM", color: "bg-orange-500" },
  { rank: 9, name: "Chheng Meng", team: "Visakha FC", goals: 6, avatar: "CM", color: "bg-orange-500" },
];

const assists = [
  { rank: 1, name: "Keo Sokpheng", team: "Preah Khan Reach FC", assists: 12, avatar: "KS", color: "bg-orange-500" },
  { rank: 2, name: "Prak Mony Udom", team: "NagaWorld FC", assists: 10, avatar: "PM", color: "bg-orange-500" },
  { rank: 3, name: "Lim Pisoth", team: "Angkor Tiger FC", assists: 9, avatar: "LP", color: "bg-orange-500" },
  { rank: 4, name: "Mat Noron", team: "Visakha FC", assists: 8, avatar: "MN", color: "bg-orange-500" },
  { rank: 5, name: "Chheng Meng", team: "Visakha FC", assists: 7, avatar: "CM", color: "bg-orange-500" },
  { rank: 6, name: "Sos Suhana", team: "Nagaworld FC", assists: 6, avatar: "SS", color: "bg-orange-500" },
  { rank: 7, name: "Orn Chanpolin", team: "Phnom Penh Crown FC", assists: 5, avatar: "OC", color: "bg-orange-500" },
  { rank: 8, name: "Sin Kakada", team: "Visakha FC", assists: 5, avatar: "SK", color: "bg-orange-500" },
  { rank: 9, name: "Long Menghour", team: "Preah Khan Reach FC", assists: 4, avatar: "LM", color: "bg-orange-500" },
];

const minutesPlayed = [
  { rank: 1, name: "Kouch Sokumpheak", team: "Visakha FC", minutes: 900, avatar: "KS", color: "bg-orange-500" },
  { rank: 2, name: "Seyha Choun", team: "Royal Armed Forces FC", minutes: 900, avatar: "SC", color: "bg-orange-500" },
  { rank: 3, name: "Ken Chansopheak", team: "Visakha FC", minutes: 885, avatar: "KC", color: "bg-orange-500" },
  { rank: 4, name: "Cheng Meng", team: "Visakha FC", minutes: 870, avatar: "CM", color: "bg-orange-500" },
  { rank: 5, name: "Sath Rosib", team: "Boeung Ket FC", minutes: 850, avatar: "SR", color: "bg-orange-500" },
  { rank: 6, name: "Tes Sambath", team: "Visakha FC", minutes: 820, avatar: "TS", color: "bg-orange-500" },
  { rank: 7, name: "Hul Kimhuy", team: "Visakha FC", minutes: 810, avatar: "HK", color: "bg-orange-500" },
  { rank: 8, name: "Choun Chanchav", team: "Phnom Penh Crown FC", minutes: 795, avatar: "CC", color: "bg-orange-500" },
  { rank: 9, name: "Yue Safy", team: "Phnom Penh Crown FC", minutes: 780, avatar: "YS", color: "bg-orange-500" },
];

const yellowCards = [
  { rank: 1, name: "Seyha Choun", team: "Royal Armed Forces FC", cards: 8, avatar: "SC", color: "bg-orange-500" },
  { rank: 2, name: "Kouch Sokumpheak", team: "Visakha FC", cards: 7, avatar: "KS", color: "bg-orange-500" },
  { rank: 3, name: "Thierry Chantha Bin", team: "Visakha FC", cards: 5, avatar: "TB", color: "bg-orange-500" },
  { rank: 4, name: "Soeuy Visal", team: "Preah Khan Reach FC", cards: 5, avatar: "SV", color: "bg-orange-500" },
  { rank: 5, name: "In Sodavid", team: "Visakha FC", cards: 4, avatar: "IS", color: "bg-orange-500" },
  { rank: 6, name: "Yue Safy", team: "Phnom Penh Crown FC", cards: 4, avatar: "YS", color: "bg-orange-500" },
  { rank: 7, name: "Ken Chansopheak", team: "Visakha FC", cards: 3, avatar: "KC", color: "bg-orange-500" },
  { rank: 8, name: "Nhean Sosidan", team: "Tiffy Army FC", cards: 3, avatar: "NS", color: "bg-orange-500" },
  { rank: 9, name: "Sraing Titchy", team: "Preah Khan Reach FC", cards: 3, avatar: "ST", color: "bg-orange-500" },
];

const tackles = [
  { rank: 1, name: "Chanrasmey Hok", team: "Boeung Ket FC", tackles: 52, avatar: "CH", color: "bg-orange-500" },
  { rank: 2, name: "Seyha Choun", team: "Royal Armed Forces FC", tackles: 48, avatar: "SC", color: "bg-orange-500" },
  { rank: 3, name: "Choun Chanchav", team: "Phnom Penh Crown FC", tackles: 45, avatar: "CC", color: "bg-orange-500" },
  { rank: 4, name: "Ouk Sovann", team: "Visakha FC", tackles: 42, avatar: "OS", color: "bg-orange-500" },
  { rank: 5, name: "Sor Rotana", team: "Visakha FC", tackles: 39, avatar: "SR", color: "bg-orange-500" },
  { rank: 6, name: "Sin Sophanat", team: "Visakha FC", tackles: 37, avatar: "SS", color: "bg-orange-500" },
  { rank: 7, name: "Leng Nora", team: "Visakha FC", tackles: 35, avatar: "LN", color: "bg-orange-500" },
  { rank: 8, name: "Taing Bunchhai", team: "Boeung Ket FC", tackles: 33, avatar: "TB", color: "bg-orange-500" },
  { rank: 9, name: "Seut Baraing", team: "Phnom Penh Crown FC", tackles: 31, avatar: "SB", color: "bg-orange-500" },
];
export {
  heroBanner,
  aboutData,
  videoHighlights,
  topScorers,
  latestNews,
  leagueStandings,
  upcomingMatches,
  clubs,
  topScorersStats,
  assists,
  minutesPlayed,
  yellowCards,
  tackles
};