type logoProps = {
  fill: string;
  className?: string;
};

const Logo: React.FC<logoProps> = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 62 61"
      fill="none"
      className={className}
      role="img"
      aria-label="Company logo"
    >
      <path d="M52.3379 0L62 36.7504L25.6139 26.9907L52.3379 0Z" fill={fill} />
      <path d="M0 24.3372L36.6252 34.3362L9.98869 61L0 24.3372Z" fill={fill} />
    </svg>
  );
};

export default Logo;
