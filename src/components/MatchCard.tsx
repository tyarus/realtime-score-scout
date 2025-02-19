
import { motion } from "framer-motion";
import LiveIndicator from "./LiveIndicator";
import ScoreDisplay from "./ScoreDisplay";

interface MatchCardProps {
  match: {
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    status: "NOT_STARTED" | "LIVE" | "FINISHED";
    minute: number;
  };
}

const MatchCard = ({ match }: MatchCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "LIVE":
        return "bg-green-500";
      case "FINISHED":
        return "bg-gray-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs text-white ${getStatusColor(match.status)}`}>
            {match.status === "LIVE" ? (
              <LiveIndicator minute={match.minute} />
            ) : (
              match.status
            )}
          </span>
        </div>
        
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="text-right">
            <h3 className="text-lg font-semibold text-gray-900">{match.homeTeam}</h3>
          </div>
          
          <ScoreDisplay
            homeScore={match.homeScore}
            awayScore={match.awayScore}
            status={match.status}
          />
          
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-900">{match.awayTeam}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
