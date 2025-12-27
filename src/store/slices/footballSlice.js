import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { footballApi } from '../../services/API';
import { upcomingMatches, leagueStandings, topScorers, clubs } from '../../services/mockData';

// Async thunk for fetching landing page data
export const fetchLandingData = createAsyncThunk(
  'football/fetchLandingData',
  async () => {
    try {
      const fromDate = '2025-12-12';
      const toDate = '2025-12-21';
      const standingLeagueId = 152;
      const topScorersLeagueId = 152;

      const [getFixturesData, getStandingsData, getTopScorersData] = await Promise.all([
        footballApi.getFixtures(fromDate, toDate),
        footballApi.getStandings(standingLeagueId),
        footballApi.getTopScorers(topScorersLeagueId)
      ]);

      let transformedFixtures = [];
      if (getFixturesData && getFixturesData.result.length > 0) {
        transformedFixtures = getFixturesData.result.slice(0, 6).map((match, index) => ({
          id: match.event_key || index + 1,
          league: match.league_name,
          team1: {
            name: match.event_home_team,
            logo: match.home_team_logo
          },
          team2: {
            name: match.event_away_team,
            logo: match.away_team_logo,
          },
          date: match.event_date ? new Date(match.event_date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }) : 'TBD',
          time: match.event_time,
          venue: match.event_stadium,
          matchNumber: `Match ${index + 1} of 6`
        }));
      } else {
        transformedFixtures = upcomingMatches;
      }

      let transformedStandings = [];
      if (getStandingsData && getStandingsData.result.total.length > 0) {
        transformedStandings = getStandingsData.result.total.slice(0, 8).map((team, index) => ({
          id: team.standing_team_id || index + 1,
          rank: team.standing_place,
          team: team.standing_team,
          played: team.standing_P,
          points: team.standing_PTS,
          team_logo: team.team_logo,
          trend: team.standing_GD > 0 ? 'up' : team.standing_GD < 0 ? 'down' : 'same'
        }));
      } else {
        transformedStandings = leagueStandings;
      }

      let transformedTopScorers = [];
      if (getTopScorersData && getTopScorersData.result.length > 0) {
        transformedTopScorers = getTopScorersData.result.slice(0, 7).map((player, index) => ({
          id: index + 1,
          rank: player.player_place,
          name: player.player_name,
          team: player.team_name,
          goals: player.goals,
          assists: player.assists ? player.assists : 0
        }));
      } else {
        transformedTopScorers = topScorers;
      }

      return {
        fixtures: transformedFixtures,
        standings: transformedStandings,
        topScorers: transformedTopScorers
      };
    } catch (error) {
      console.error('Error fetching landing data:', error);
      return {
        fixtures: upcomingMatches,
        standings: leagueStandings,
        topScorers: topScorers
      };
    }
  }
);

// Async thunk for fetching all fixtures (FixturesPage)
export const fetchAllFixtures = createAsyncThunk(
  'football/fetchAllFixtures',
  async () => {
    const fromDate = '2025-12-12';
    const toDate = '2025-12-21';
    const response = await footballApi.getFixtures(fromDate, toDate);
    
    if (response?.result) {
      return response.result.map((match, index) => ({
        id: match.event_key || index + 1,
        date: match.event_date ? new Date(match.event_date).toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }) : 'TBD',
        league: match.league_name,
        homeTeam: match.event_home_team,
        awayTeam: match.event_away_team,
        time: match.event_time,
        stadium: match.event_stadium,
        homeLogo: match.home_team_logo,
        awayLogo: match.away_team_logo,
      }));
    }
    return [];
  }
);

// Async thunk for fetching results (ResultsPage)
export const fetchResults = createAsyncThunk(
  'football/fetchResults',
  async () => {
    const fromDate = '2025-12-12';
    const toDate = '2025-12-21';
    const data = await footballApi.getFixtures(fromDate, toDate);
    
    if (data.result && Array.isArray(data.result)) {
      const finishedMatches = data.result
        .filter(match => {
          const status = match.event_status?.toLowerCase();
          return status === "finished" ||
            (match.match_hometeam_score !== "" && match.match_awayteam_score !== "");
        })
        .sort((a, b) => new Date(b.match_date) - new Date(a.match_date))
        .slice(0, 20);
      
      return finishedMatches;
    }
    return [];
  }
);

// Async thunk for fetching full standings (StandingPage)
export const fetchFullStandings = createAsyncThunk(
  'football/fetchFullStandings',
  async () => {
    const LEAGUE_ID = 152;
    const response = await footballApi.getStandings(LEAGUE_ID);
    
    if (response?.result?.total) {
      return response.result.total.slice(0, 20).map((team, index) => ({
        pos: team.standing_place || index + 1,
        logo: team.team_logo,
        club: team.standing_team || `Team ${index + 1}`,
        played: team.standing_P || 0,
        won: team.standing_W || 0,
        drawn: team.standing_D || 0,
        lost: team.standing_L || 0,
        gf: team.standing_F || 0,
        ga: team.standing_A || 0,
        gd: team.standing_GD || 0,
        pts: team.standing_PTS || 0,
      }));
    }
    return [];
  }
);

// Async thunk for fetching clubs (Club page)
export const fetchClubs = createAsyncThunk(
  'football/fetchClubs',
  async () => {
    const leagueId = 152;
    const standingsData = await footballApi.getStandings(leagueId);
    
    if (!standingsData?.result?.total) {
      return [];
    }
    
    return standingsData.result.total.map((team, index) => ({
      id: team.team_key,
      team_name: team.standing_team || 'Unknown',
      team_logo: team.team_logo || clubs[index]?.team_logo,
      est: team.team_founded || clubs[index]?.est,
      stadium: team.venue?.name || clubs[index]?.stadium,
      capacity: team.venue?.capacity || clubs[index]?.capacity,
      championships: team.team_championships || clubs[index]?.championships,
    }));
  }
);

// Async thunk for fetching team details (ClubDetails & CoachPlayers)
export const fetchTeamDetails = createAsyncThunk(
  'football/fetchTeamDetails',
  async (teamId) => {
    const club = await footballApi.getTeams(teamId);
    
    if (!club?.result || !club.result[0]) {
      return null;
    }
    
    const teamData = club.result[0];
    const managerFormatted = {
      name: teamData.coaches[0]?.coach_name || 'Unknown',
      country: teamData.coaches[0]?.coach_country || 'Unknown',
      age: teamData.coaches[0]?.coach_age || 'Unknown',
      image: teamData.coaches[0]?.coach_image || null
    };
    
    const playerFormatted = teamData.players.map((player) => ({
      player_key: player.player_key,
      name: player.player_name || 'Unknown',
      position: player.player_type || 'Unknown',
      number: player.player_number || 'Unknown',
      image: player.player_image || null
    }));
    
    return {
      teamId,
      manager: managerFormatted,
      players: playerFormatted
    };
  }
);

const footballSlice = createSlice({
  name: 'football',
  initialState: {
    // Landing page data
    fixtures: [],
    standings: [],
    topScorers: [],
    isLoading: false,
    error: null,
    lastFetched: null,
    
    // All fixtures data
    allFixtures: [],
    allFixturesLoading: false,
    allFixturesLastFetched: null,
    
    // Results data
    results: [],
    resultsLoading: false,
    resultsLastFetched: null,
    
    // Full standings data
    fullStandings: [],
    fullStandingsLoading: false,
    fullStandingsLastFetched: null,
    
    // Clubs data
    clubs: [],
    clubsLoading: false,
    clubsLastFetched: null,
    
    // Team details (cached by team ID)
    teamDetails: {}, // { teamId: { manager, players } }
    teamDetailsLoading: {},
  },
  reducers: {
    clearFootballData: (state) => {
      state.fixtures = [];
      state.standings = [];
      state.topScorers = [];
      state.lastFetched = null;
    },
    clearAllData: (state) => {
      return {
        ...state,
        fixtures: [],
        standings: [],
        topScorers: [],
        allFixtures: [],
        results: [],
        fullStandings: [],
        clubs: [],
        teamDetails: {},
        lastFetched: null,
        allFixturesLastFetched: null,
        resultsLastFetched: null,
        fullStandingsLastFetched: null,
        clubsLastFetched: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // Landing data
      .addCase(fetchLandingData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLandingData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.fixtures = action.payload.fixtures;
        state.standings = action.payload.standings;
        state.topScorers = action.payload.topScorers;
        state.lastFetched = new Date().toISOString();
      })
      .addCase(fetchLandingData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      
      // All fixtures
      .addCase(fetchAllFixtures.pending, (state) => {
        state.allFixturesLoading = true;
      })
      .addCase(fetchAllFixtures.fulfilled, (state, action) => {
        state.allFixturesLoading = false;
        state.allFixtures = action.payload;
        state.allFixturesLastFetched = new Date().toISOString();
      })
      .addCase(fetchAllFixtures.rejected, (state) => {
        state.allFixturesLoading = false;
      })
      
      // Results
      .addCase(fetchResults.pending, (state) => {
        state.resultsLoading = true;
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.resultsLoading = false;
        state.results = action.payload;
        state.resultsLastFetched = new Date().toISOString();
      })
      .addCase(fetchResults.rejected, (state) => {
        state.resultsLoading = false;
      })
      
      // Full standings
      .addCase(fetchFullStandings.pending, (state) => {
        state.fullStandingsLoading = true;
      })
      .addCase(fetchFullStandings.fulfilled, (state, action) => {
        state.fullStandingsLoading = false;
        state.fullStandings = action.payload;
        state.fullStandingsLastFetched = new Date().toISOString();
      })
      .addCase(fetchFullStandings.rejected, (state) => {
        state.fullStandingsLoading = false;
      })
      
      // Clubs
      .addCase(fetchClubs.pending, (state) => {
        state.clubsLoading = true;
      })
      .addCase(fetchClubs.fulfilled, (state, action) => {
        state.clubsLoading = false;
        state.clubs = action.payload;
        state.clubsLastFetched = new Date().toISOString();
      })
      .addCase(fetchClubs.rejected, (state) => {
        state.clubsLoading = false;
      })
      
      // Team details
      .addCase(fetchTeamDetails.pending, (state, action) => {
        const teamId = action.meta.arg;
        state.teamDetailsLoading[teamId] = true;
      })
      .addCase(fetchTeamDetails.fulfilled, (state, action) => {
        if (action.payload) {
          const { teamId, manager, players } = action.payload;
          state.teamDetails[teamId] = { manager, players, lastFetched: new Date().toISOString() };
          state.teamDetailsLoading[teamId] = false;
        }
      })
      .addCase(fetchTeamDetails.rejected, (state, action) => {
        const teamId = action.meta.arg;
        state.teamDetailsLoading[teamId] = false;
      });
  },
});

export const { clearFootballData, clearAllData } = footballSlice.actions;
export default footballSlice.reducer;
