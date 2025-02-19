
import { motion } from "framer-motion";

interface ScoreDisplayProps {
  homeScore: number;
  awayScore: number;
  status: string;
}

const ScoreDisplay = ({ homeScore, awayScore, status }: ScoreDisplayProps) => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <motion.span
        key={`home-${homeScore}`}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        className="text-3xl font-bold text-gray-900"
      >
        {homeScore}
      </motion.span>
      <span className="text-gray-400">-</span>
      <motion.span
        key={`away-${awayScore}`}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        className="text-3xl font-bold text-gray-900"
      >
        {awayScore}
      </motion.span>
    </div>
  );
};

export default ScoreDisplay;
