'use client';
const Grid = ({ children, columns = 1, gapClass = 'gap-4', className = '', ...props }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  };

  return (
    <div className={`grid ${gridCols[columns] || gridCols[1]} ${gapClass} ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Grid