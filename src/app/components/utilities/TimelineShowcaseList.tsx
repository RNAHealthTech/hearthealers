
// components/doctor/TimelineShowcaseList.tsx
import { RefObject, useRef } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

// Updated ColorScheme interface to match About.tsx
export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  gradientFrom: string;
  gradientTo: string;
  bgGradient: string;
  cardBg: string;
  primaryText: string;
  secondaryText: string;
  primaryBg: string;
  secondaryBg: string;
  borderColor: string;
  hoverShadow: string;
}

// Timeline item data structures that match your About.tsx usage
export interface TimelineItem {
  title: string;
  organisation: {
    name: string;
    href: string;
  };
  date: string;
  location?: string;
  description?: string;
}

export interface TimelineListIconProps {
  iconRef: RefObject<HTMLElement | null>;
  colorScheme: ColorScheme;
  icon?: React.ReactNode;
}

function TimelineIcon({ iconRef, colorScheme, icon }: TimelineListIconProps) {
  const { scrollYProgress } = useScroll({
    target: iconRef,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });
  
  // Get colors from the colorScheme object
  const getProgressColor = () => {
    if (colorScheme.primary === 'red') return '#ef4444'; // red-500
    if (colorScheme.primary === 'teal') return '#14b8a6'; // teal-500
    if (colorScheme.primary === 'blue') return '#3b82f6'; // blue-500
    return '#14b8a6'; // default teal
  };

  const getOuterColor = () => {
    if (colorScheme.primary === 'red') return '#dc2626'; // red-600
    if (colorScheme.primary === 'teal') return '#0d9488'; // teal-600
    if (colorScheme.primary === 'blue') return '#2563eb'; // blue-600
    return '#0d9488'; // default teal
  };

  const progressColor = getProgressColor();
  const outerColor = getOuterColor();
  
  return (
    <figure className="absolute left-0">
      <svg width="75" height="75" viewBox="0 0 100 100">
        {/* Outer circle - static */}
        <circle
          cx="50"
          cy="27"
          r="20"
          className="fill-none stroke-1"
          stroke={outerColor}
        />
        {/* Animated progress circle */}
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="50"
          cy="27"
          r="20"
          className="fill-white stroke-[5px] dark:fill-gray-100"
          stroke={progressColor}
          strokeDasharray="1 1"
        />
        {/* Inner circle with icon */}
        <circle 
          cx="50" 
          cy="27" 
          r="12" 
          fill={progressColor}
        />
      </svg>
      {/* Icon overlay */}
      <div className="absolute top-[14px] left-[38px] w-6 h-6 flex items-center justify-center text-white">
        {icon}
      </div>
    </figure>
  );
}

export interface TimelineShowcaseListItemProps {
  data: TimelineItem;
  colorScheme: ColorScheme;
  icon?: React.ReactNode;
}

function TimelineShowcaseListItem({ data, colorScheme, icon }: TimelineShowcaseListItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  
  return (
    <li ref={ref} className="mx-auto mb-14 flex w-[90%] md:w-[70%] flex-col gap-1">
      <TimelineIcon iconRef={ref} colorScheme={colorScheme} icon={icon} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.6,
          delay: 0.1
        }}
        className={`${colorScheme.cardBg} backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg ${colorScheme.borderColor} border hover:shadow-xl transition-all duration-300 ml-6 md:ml-0`}
      >
        <h3 className="text-base font-bold text-gray-900 sm:text-lg md:text-xl mb-2">
          {data.title}{" "}
          <Link
            href={data.organisation.href}
            className={`cursor-pointer ${colorScheme.primaryText} hover:underline text-sm md:text-base`}
            target="_blank"
            rel="nofollow"
          >
            @{data.organisation.name}
          </Link>
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-3">
          <span className={`text-sm font-medium ${colorScheme.primaryText} xs:text-base`}>
            {data.date}
          </span>
          {data.location && (
            <span className="text-sm text-gray-600 xs:text-base">
              {data.location}
            </span>
          )}
        </div>
        {data.description && (
          <p className="text-sm font-medium text-gray-700 leading-relaxed xs:text-base">
            {data.description}
          </p>
        )}
      </motion.div>
    </li>
  );
}

export interface TimelineShowcaseListProps {
  title: string;
  details: TimelineItem[];
  colorScheme: ColorScheme;
  icon?: React.ReactNode;
}

export function TimelineShowcaseList({ title, details, colorScheme, icon }: TimelineShowcaseListProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  
  // Dynamic gradient colors based on theme
  const getLineGradient = () => {
    if (colorScheme.primary === 'red') {
      return 'linear-gradient(180deg, #ef4444, #991b1b)';
    }
    if (colorScheme.primary === 'teal') {
      return 'linear-gradient(180deg, #14b8a6, #134e4a)';
    }
    if (colorScheme.primary === 'blue') {
      return 'linear-gradient(180deg, #3b82f6, #1e3a8a)';
    }
    return 'linear-gradient(180deg, #14b8a6, #134e4a)'; // default
  };
  
  const lineGradient = getLineGradient();
  
  return (
    <div className="mx-auto my-20 md:my-32 max-w-7xl px-4 md:px-8 lg:px-8">
      {/* Section Title */}
      <motion.h2 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24 w-full text-center text-3xl font-bold text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl"
      >
        <span className={`bg-gradient-to-r ${colorScheme.gradientFrom} ${colorScheme.gradientTo} bg-clip-text text-transparent`}>
          {title}
        </span>
      </motion.h2>
      
      {/* Timeline Container */}
      <div ref={ref} className="relative w-full md:mx-auto md:w-[85%]">
        {/* Animated Timeline Line */}
        <motion.div
          style={{ 
            scaleY: scrollYProgress,
            background: lineGradient
          }}
          className="absolute left-9 top-5 h-full w-1 origin-top rounded-full shadow-sm"
        />
        
        {/* Timeline Items */}
        <ul className="ml-4 w-full items-center space-y-8">
          {details.map((item, index) => (
            <TimelineShowcaseListItem 
              key={index} 
              data={item}
              colorScheme={colorScheme}
              icon={icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TimelineShowcaseList;
 