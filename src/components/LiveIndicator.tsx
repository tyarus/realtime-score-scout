
import { motion } from "framer-motion";

interface LiveIndicatorProps {
  minute: number;
}

const LiveIndicator = ({ minute }: LiveIndicatorProps) => {
  return (
    <div className="flex items-center space-x-2">
      <motion.div
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-2 h-2 rounded-full bg-white"
      />
      <span className="text-white">LIVE {minute}'</span>
    </div>
  );
};

export default LiveIndicator;
