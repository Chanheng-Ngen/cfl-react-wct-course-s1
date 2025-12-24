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
        description: 'PKR delivers a stunning 3-0 victory against Phnom Penh Crown in a crucial Cambodian Premier League match. The home side dominated possession from start to finish, with standout performances from their attacking trio. This victory solidifies their position at the top of the table and keeps their championship dreams alive heading into the final stretch of the season.',
        thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/694a0adf58ea7.jpg',
        timeAgo: '2 hours ago'
    },
    {
        id: 2,
        title: 'Angkor Tiger Signs International Star Player from Thailand',
        description: 'Cambodian club makes history with a record-breaking transfer signing from the Thai League. The newly acquired midfielder brings years of international experience and is expected to strengthen the squad significantly. Club officials expressed excitement about this landmark signing, which demonstrates their ambition to compete at the highest level in Southeast Asian football competitions.',
        thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/694a0adfba976.jpg',
        timeAgo: '5 hours ago'
    },
    {
        id: 3,
        title: 'Visakha FC Youth Academy Graduates Shine on National Stage',
        description: 'Three talented young players from Visakha FC academy have earned their first call-up to the Cambodia national team after impressive performances in recent league matches. The academy continues to prove its reputation as one of the finest youth development programs in Southeast Asia, producing technically skilled players who are ready for the highest level of competition.',
        thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/694a0adfba61e.jpg',
        timeAgo: '8 hours ago'
    },
    {
        id: 4,
        title: 'Boeung Ket Manager Reveals Championship Strategy',
        description: 'In an exclusive press conference, the head coach discussed his tactical approach for the upcoming crucial matches in the intense title race. He emphasized the importance of maintaining defensive solidity while exploiting opponents\' weaknesses through quick counter-attacks. The manager also praised his squad\'s mental strength and determination to bring silverware back to the club.',
        thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/694a0adf27cf4.jpg',
        timeAgo: '12 hours ago'
    },
    {
        id: 5,
        title: 'Morodok Techo Stadium Hosts Historic Derby Match',
        description: 'A record-breaking attendance of 60,000 passionate fans witnessed one of the most intense derby matches in Cambodian football history at the newly renovated Morodok Techo National Stadium. The atmosphere was electric throughout the 90 minutes, with both sets of supporters creating an unforgettable spectacle. The match ended in a thrilling 2-2 draw with goals coming in the final 15 minutes.',
        thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/6948b52271453.jpg',
        timeAgo: '1 day ago'
    },
    {
        id: 6,
        title: 'Cambodia League Teams Excel in AFC Cup Competition',
        description: 'Preah Khan Reach and Visakha FC have both successfully advanced to the knockout stages of the AFC Cup with impressive group stage performances that have put Cambodian football on the regional map. Their tactical discipline and clinical finishing have earned praise from football analysts across Asia, marking a new era for Cambodian clubs in international competitions.',
        thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/6948ba22a39bf.jpg',
        timeAgo: '1 day ago'
    },
    {
        id: 7,
        title: 'Rising Star Breaks Goal Scoring Record in Debut Season',
        description: 'At just 19 years old, the talented forward has become the youngest player in Cambodian Premier League history to score 15 goals in a single season. His remarkable combination of pace, technical skill, and composure in front of goal has attracted attention from scouts across Southeast Asia. The young sensation credits his success to the support of his teammates and coaches.',
        thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/692f0257aad4d.jpg',
        timeAgo: '2 days ago'
    },
    {
        id: 8,
        title: 'Dramatic Last-Minute Winner Stuns Thousands of Fans',
        description: 'NagaWorld FC secured an incredible comeback victory with a stunning injury-time goal that sent their supporters into wild celebrations. Trailing 2-1 with minutes remaining, the team showed tremendous character to equalize in the 88th minute before scoring the winner in the 94th minute. This victory keeps their hopes alive for a top-four finish and continental qualification.',
        thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/692eaf77df7e1.JPG',
        timeAgo: '2 days ago'
    },
    {
        id: 9,
        title: 'Football Clubs Unite for Grassroots Development Initiative',
        description: 'All Cambodian Premier League teams have joined forces to launch a comprehensive grassroots development program aimed at promoting youth football across Cambodia. The initiative will establish training centers in rural provinces, provide coaching education, and create opportunities for talented young players from all backgrounds. This collaborative effort demonstrates the league\'s commitment to building a sustainable future for Cambodian football.',
        thumbnail: 'https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/2/6915613a0b5c2.jpg',
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
        team_name: 'Preah Khan Reach Svay Rieng FC',
        team_logo: 'PKR',
        est: '2015',
        stadium: 'Svay Rieng Stadium',
        capacity: '5,000',
        championships: 3
    },
    {
        team_name: 'Angkor Tiger FC',
        team_logo: 'ATF',
        est: '2009',
        stadium: 'RSN Stadium',
        capacity: '5,000',
        championships: 2
    },
    {
        team_name: 'Phnom Penh Crown FC',
        team_logo: 'PPC',
        est: '2001',
        stadium: 'Olympic Stadium',
        capacity: '50,000',
        championships: 4
    },
    {
        team_name: 'Boeung Ket FC',
        team_logo: 'BKF',
        est: '2002',
        stadium: 'Army Stadium',
        capacity: '5,000',
        championships: 1
    },
    {
        team_name: 'NagaWorld FC',
        team_logo: 'NWF',
        est: '2009',
        stadium: 'Olympic Stadium',
        capacity: '50,000',
        championships: 0
    },
    {
        team_name: 'Royal Cambodian Armed Forces FC',
        team_logo: 'RAF',
        est: '2000',
        stadium: 'Army Stadium',
        capacity: '5,000',
        championships: 1
    },
    {
        team_name: 'Visakha FC',
        team_logo: 'VIS',
        est: '2016',
        stadium: 'Prince Stadium',
        capacity: '5,000',
        championships: 2
    },
    {
        name: 'Kirivong Sok Sen Chey FC',
        team_logo: 'KSC',
        est: '2007',
        stadium: 'Takhmao Stadium',
        capacity: '3,000',
        championships: 0
    },
    {
        team_name: 'MDI Kampong Dewa FC',
        team_logo: 'MDI',
        est: '2019',
        stadium: 'Prince Stadium',
        capacity: '5,000',
        championships: 0
    },
    {
        team_name: 'Asia Pacific FC',
        team_logo: 'APF',
        est: '2018',
        stadium: 'Kampong Speu Stadium',
        capacity: '3,000',
        championships: 0
    },
    {
        team_name: 'Soltilo Angkor FC',
        team_logo: 'SAF',
        est: '2017',
        stadium: 'Siem Reap Stadium',
        capacity: '10,000',
        championships: 0
    }
];

export { 
    heroBanner,
    aboutData, 
    videoHighlights, 
    topScorers, 
    latestNews, 
    leagueStandings, 
    upcomingMatches,
    clubs };