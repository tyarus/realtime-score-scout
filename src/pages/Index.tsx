
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MatchCard from "@/components/MatchCard";
import { toast } from "@/components/ui/use-toast";

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: "NOT_STARTED" | "LIVE" | "FINISHED";
  minute: number;
}

const Index = () => {
  const [matches, setMatches] = useState<Match[]>([
    {
      id: "1",
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      homeScore: 2,
      awayScore: 1,
      status: "LIVE",
      minute: 75,
    },
    {
      id: "2",
      homeTeam: "Manchester City",
      awayTeam: "Liverpool",
      homeScore: 0,
      awayScore: 0,
      status: "NOT_STARTED",
      minute: 0,
    },
    {
      id: "3",
      homeTeam: "Bayern Munich",
      awayTeam: "Dortmund",
      homeScore: 3,
      awayScore: 2,
      status: "FINISHED",
      minute: 90,
    },
  ]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setMatches((prev) =>
        prev.map((match) => {
          if (match.status === "LIVE") {
            const shouldUpdateScore = Math.random() > 0.8;
            if (shouldUpdateScore) {
              const team = Math.random() > 0.5 ? "home" : "away";
              const newMatch = {
                ...match,
                minute: Math.min(90, match.minute + 1),
                [`${team}Score`]:
                  match[`${team}Score` as "homeScore" | "awayScore"] + 1,
              };
              toast({
                title: "GOAL!",
                description: `${
                  team === "home" ? match.homeTeam : match.awayTeam
                } scores!`,
              });
              return newMatch;
            }
            return { ...match, minute: Math.min(90, match.minute + 1) };
          }
          return match;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Scores</h1>
          <p className="text-gray-600">Real-time football match updates</p>
        </header>
        
        <AnimatePresence>
          <div className="space-y-4">
            {matches.map((match) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <MatchCard match={match} />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
