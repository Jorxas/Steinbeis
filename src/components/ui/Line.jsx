'use client';
const Line = ({ width = '100%', height = '1px', className = '', ...props }) => {
  const style = {
    width,
    height,
  };

  return <div className={`bg-background-overlay ${className}`} style={style} {...props} />;
}

export default Line