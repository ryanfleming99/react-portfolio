// utils/toolIcons.js

const toolIcons = {
  Photoshop: (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="128" height="128" rx="20" fill="#001E36" />
      <path
        d="M45.5 64.5c0-5.5 4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.5 10-10 10h-10c-5.5 0-10-4.5-10-10z"
        fill="#31A8FF"
      />
    </svg>
  ),
  Wix: (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="256" height="256" rx="60" fill="#F5F5F5" />
      <path d="M128 64l-64 128h128L128 64z" fill="#FFDA44" />
    </svg>
  ),
  Figma: (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <circle cx="64" cy="64" r="64" fill="#F24E1E" />
      <circle cx="64" cy="64" r="48" fill="#A259FF" />
      <circle cx="64" cy="64" r="32" fill="#0ACF83" />
      <circle cx="64" cy="64" r="16" fill="#FF7262" />
    </svg>
  ),
  Javascript: (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="128" height="128" rx="20" fill="#F7DF1E" />
      <path d="M64 32v64h32V32H64z" fill="#000" />
    </svg>
  ),
  React: (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <circle cx="64" cy="64" r="10" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="4" fill="none">
        <ellipse cx="64" cy="64" rx="50" ry="20" transform="rotate(60 64 64)" />
        <ellipse
          cx="64"
          cy="64"
          rx="50"
          ry="20"
          transform="rotate(120 64 64)"
        />
        <ellipse cx="64" cy="64" rx="50" ry="20" />
      </g>
    </svg>
  ),
  Midjourney: (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="128" height="128" rx="20" fill="#000" />
      <path d="M64 32l32 64H32l32-64z" fill="#FFF" />
    </svg>
  ),
  Firebase: (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <path d="M64 0l64 128H0L64 0z" fill="#FFCA28" />
    </svg>
  ),
  Render: (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="128" height="128" rx="20" fill="#2D2D2D" />
      <circle cx="64" cy="64" r="40" fill="#FFF" />
    </svg>
  ),
  "Adzuna API": (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect width="128" height="128" rx="20" fill="#00ADEF" />
      <path d="M64 32l32 64H32l32-64z" fill="#FFF" />
    </svg>
  )
};

export default toolIcons;
