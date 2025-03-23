import { twMerge } from 'tailwind-merge';

const PersonIcon = ({ className }: { className: string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge('h-4 w-4', className)}
  >
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
  </svg>
);
export default PersonIcon;
