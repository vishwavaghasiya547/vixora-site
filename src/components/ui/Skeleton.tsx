'use client';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export const Skeleton = ({ 
  className = '', 
  variant = 'rectangular',
  width,
  height,
  lines = 1
}: SkeletonProps) => {
  const baseClasses = 'animate-pulse bg-gray-200';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-lg'
  };

  const style = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1rem' : '2rem')
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }, (_, i) => (
          <div
            key={i}
            className={`${baseClasses} ${variantClasses[variant]}`}
            style={{
              ...style,
              width: i === lines - 1 ? '70%' : '100%'
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  );
};

export const CardSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1 space-y-2">
          <Skeleton width="60%" height={16} />
          <Skeleton width="40%" height={12} />
        </div>
      </div>
      <Skeleton lines={3} />
      <div className="flex justify-between">
        <Skeleton width={80} height={24} />
        <Skeleton width={80} height={24} />
      </div>
    </div>
  );
};

export const ProjectCardSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
      <div className="flex items-center space-x-3">
        <Skeleton width={60} height={20} />
        <Skeleton width={80} height={16} />
      </div>
      <Skeleton height={24} />
      <Skeleton lines={2} />
      <div className="flex space-x-2">
        <Skeleton width={60} height={20} />
        <Skeleton width={60} height={20} />
        <Skeleton width={60} height={20} />
      </div>
      <Skeleton width={100} height={36} />
    </div>
  );
};
