import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SnakePathProps {
  className?: string;
  strokeWidth?: number;
  color?: string;
}

export const SnakePath: React.FC<SnakePathProps> = ({
  className = '',
  strokeWidth = 3,
  color = '#8800FF'
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set up the path to be hidden initially
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Animate the path drawing on scroll
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: svgRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={`snake-path ${className}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      <path
        ref={pathRef}
        d=""
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

// Simple vertical line segment
interface SnakeVerticalProps {
  height?: number | string;
  strokeWidth?: number;
  color?: string;
}

export const SnakeVertical: React.FC<SnakeVerticalProps> = ({
  height = 100,
  strokeWidth = 3,
  color = '#8800FF'
}) => {
  return (
    <svg 
      width={strokeWidth} 
      height={height} 
      style={{ display: 'block', flexShrink: 0 }}
    >
      <line
        x1={strokeWidth / 2}
        y1="0"
        x2={strokeWidth / 2}
        y2="100%"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

// Simple horizontal line segment
interface SnakeHorizontalProps {
  width?: number | string;
  strokeWidth?: number;
  color?: string;
}

export const SnakeHorizontal: React.FC<SnakeHorizontalProps> = ({
  width = 100,
  strokeWidth = 3,
  color = '#8800FF'
}) => {
  return (
    <svg 
      width={width} 
      height={strokeWidth} 
      style={{ display: 'block', flexShrink: 0 }}
    >
      <line
        x1="0"
        y1={strokeWidth / 2}
        x2="100%"
        y2={strokeWidth / 2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

// Corner pieces
interface SnakeCornerProps {
  direction: 'down-right' | 'down-left' | 'right-down' | 'left-down';
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export const SnakeCorner: React.FC<SnakeCornerProps> = ({
  direction,
  size = 40,
  strokeWidth = 3,
  color = '#8800FF'
}) => {
  const offset = strokeWidth / 2;
  const end = size - offset;
  
  const getPath = () => {
    switch (direction) {
      case 'down-right':
        return `M ${offset} 0 L ${offset} ${end} L ${size} ${end}`;
      case 'down-left':
        return `M ${end} 0 L ${end} ${end} L 0 ${end}`;
      case 'right-down':
        return `M 0 ${offset} L ${end} ${offset} L ${end} ${size}`;
      case 'left-down':
        return `M ${size} ${offset} L ${offset} ${offset} L ${offset} ${size}`;
      default:
        return '';
    }
  };

  return (
    <svg width={size} height={size} style={{ display: 'block', flexShrink: 0 }}>
      <path
        d={getPath()}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

// Full snake line component using GSAP
interface FullSnakeLineProps {
  strokeWidth?: number;
  color?: string;
}

export const FullSnakeLine: React.FC<FullSnakeLineProps> = ({
  strokeWidth = 3,
  color = '#8800FF'
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pathRef.current || !containerRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 0.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Path will be calculated based on actual element positions
  // For now using a placeholder - will update with actual coordinates
  return (
    <div ref={containerRef} className="full-snake-container">
      <svg
        className="full-snake-svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

// Legacy exports
export const GuideLine = SnakeVertical;
export const VerticalLine = SnakeVertical;
export const HorizontalConnector = SnakeHorizontal;
export const GuideLineConnector = SnakeHorizontal;
