'use client';
const List = ({ children, direction = 'row', gapClass = 'gap-4', className = '', ...props }) => {
  const flexDirection = direction === 'column' ? 'flex-col' : 'flex-row'
  
  return (
    <div 
      className={`flex ${flexDirection} ${gapClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default List