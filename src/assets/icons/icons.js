export const ServiceIcon = ({ icon, className = "w-12 h-12" }) => {
  const iconProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
  };

  switch (icon) {
    case "code":
      return (
        <svg {...iconProps} aria-label="Code Icon" role="img">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...iconProps} aria-label="Chart Icon" role="img">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      );
    case "eye":
      return (
        <svg {...iconProps} aria-label="Eye Icon" role="img">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "stream":
      return (
        <svg {...iconProps} aria-label="Stream Processing Icon" role="img">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg {...iconProps} aria-label="Arrow Icon" role="img">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      );
    case "carousel-next":
      return (
        <svg {...iconProps} aria-label="Carousel Next Icon" role="img">
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "carousel-prev":
      return (
        <svg {...iconProps} aria-label="Carousel Prev Icon" role="img">
          <path
            d="M19 12H5M5 12L12 19M5 12L12 5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "button-arrow":
      return (
        <svg {...iconProps} aria-label="Chart Icon" role="img">
          <path
            d="M5 12h14M12 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chevron-right":
      return (
        <svg
          {...iconProps}
          viewBox="0 0 24 24"
          aria-label="Chevron Right Icon"
          role="img"
        >
          <path
            d="M9 18l6-6-6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "twitter":
      return (
        <svg
          {...iconProps}
          fill="currentColor"
          stroke="none"
          aria-label="Twitter Icon"
          role="img"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          {...iconProps}
          fill="currentColor"
          stroke="none"
          aria-label="FaceBook Icon"
          role="img"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          {...iconProps}
          fill="none"
          stroke="currentColor"
          aria-label="Instagram Icon"
          role="img"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          {...iconProps}
          fill="currentColor"
          stroke="none"
          aria-label="Linkedin Icon"
          role="img"
        >
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "location":
      return (
        <svg
          {...iconProps}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Location Icon"
          role="img"
        >
          <g id="SVGRepo_bgCarrier"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      );

    case "augmented-reality":
      return (
        <svg
          {...iconProps}
          id="Icons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="800px"
          height="800px"
          fill="#000000"
          aria-label="Augmented Reality Icon"
          role="img"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <line x1="4" y1="24" x2="28" y2="24" />{" "}
            <polygon
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              points="16,2 10,5 16,8 22,5 "
            />{" "}
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              points="10,5 10,12 16,15 22,12 22,5 "
            />{" "}
            <line x1="16" y1="8" x2="16" y2="15" />{" "}
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="M28.5,23.4l-3.9-4.7c-0.4-0.5-0.9-0.7-1.5-0.7H8.9c-0.6,0-1.2,0.3-1.5,0.7l-3.9,4.7C3.2,23.8,3,24.3,3,24.7V27 c0,1.1,0.9,2,2,2h22c1.1,0,2-0.9,2-2v-2.3C29,24.3,28.8,23.8,28.5,23.4z"
            />{" "}
          </g>
        </svg>
      );

    case "researchDevelopment":
      return (
        <svg {...iconProps} aria-label="Research Development Icon" role="img">
          <circle cx="11" cy="11" r="7" className="magnifying-glass-body" />

          <line
            x1="16.4"
            y1="16.4"
            x2="21"
            y2="21"
            className="magnifying-glass-handle"
            strokeWidth="2"
          />

          <line
            x1="7"
            y1="10.5"
            x2="7"
            y2="11.5"
            className="measurement-mark"
          />
          <line
            x1="15"
            y1="10.5"
            x2="15"
            y2="11.5"
            className="measurement-mark"
          />
          <line
            x1="10.5"
            y1="7"
            x2="11.5"
            y2="7"
            className="measurement-mark"
          />
          <line
            x1="10.5"
            y1="15"
            x2="11.5"
            y2="15"
            className="measurement-mark"
          />
        </svg>
      );

    case "head-set":
      return (
        <svg
          {...iconProps}
          id="Icons"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Head Set Icon"
          role="img"
          viewBox="0 0 32 32"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M18.9,9.1c-1-0.2-2,0-2.8,0.4c-0.7,0.4-1.6,0.5-2.4,0.2c-0.1,0-0.2-0.1-0.3-0.1l-8-1.3C4.1,8.2,3,9.1,3,10.2
	v5.9c0,1.2,1.1,2,2.3,1.9l8-1.3c0.1,0,0.2,0,0.3-0.1c0.9-0.3,1.9-0.3,2.9,0c0.5,0.2,1,0.3,1.5,0.3c2.5,0,4.5-2.3,3.9-4.9
	C21.6,10.6,20.4,9.4,18.9,9.1z"
          />
          <path
            className="st0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M9.5,9c1.3-3.6,4.7-6.2,8.8-6C23,3.2,27,7.2,27,11.9c0,1.8-0.5,3.5-1.4,4.9c-1.8,2.8-2.5,6.2-1.6,9.4l1,3.8H13
	l0.7-3.9c0.2-0.9-0.7-1.6-1.5-1.3l0,0c-2,0.6-4-1-3.8-3.1L8.6,18H7.5c-0.3,0-0.5-0.1-0.7-0.2"
          />
          <path
            className="st0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M18,20.3c0,1.6-1,3.1-2.6,3.6l-3.3,0.9"
          />
          <circle
            className="st0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            cx="18"
            cy="13"
            r="1"
          />
        </svg>
      );
    case "data-storage":
      return (
        <svg {...iconProps} aria-label="Data Storage Icon" role="img">
          {/* Main cylinder body */}
          <path
            d="M4 6C4 4.5 8 2 12 2C16 2 20 4.5 20 6C20 7.5 16 10 12 10C8 10 4 7.5 4 6Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Vertical lines connecting cylinders */}
          <path
            d="M4 6V18C4 19.5 8 22 12 22C16 22 20 19.5 20 18V6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Middle layer */}
          <path
            d="M4 12C4 13.5 8 16 12 16C16 16 20 13.5 20 12"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center lines for detail */}
          <path
            d="M12 10V16M12 16V22"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "data-science":
      return (
        <svg
          {...iconProps}
          width="800px"
          height="800px"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Data Science Icon"
          role="img"
        >
          <title>data-science</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="invisible_box" data-name="invisible box">
              <rect width="48" height="48" fill="none" />
              <rect width="48" height="48" fill="none" />
              <rect width="48" height="48" fill="none" />
            </g>
            <g id="icons_Q2" data-name="icons Q2">
              <g>
                <path d="M43.1,13c-1.1-1.8-3.5-2.7-6.6-2.7a19.6,19.6,0,0,0-5.2.7C29.6,5.5,27,2,24,2s-5.6,3.5-7.3,9a19.6,19.6,0,0,0-5.2-.7c-3.1,0-5.5.9-6.6,2.7s.2,6.8,4,11c-3.8,4.2-5.5,8.3-4,11s3.5,2.7,6.6,2.7a19.6,19.6,0,0,0,5.2-.7c1.7,5.5,4.3,9,7.3,9s5.6-3.5,7.3-9a19.6,19.6,0,0,0,5.2.7c3.1,0,5.5-.9,6.6-2.7s-.2-6.8-4-11C42.9,19.8,44.6,15.7,43.1,13ZM24,5c1.1,0,3,2.3,4.4,6.8A38.9,38.9,0,0,0,24,13.4a38.9,38.9,0,0,0-4.4-1.6C21,7.3,22.9,5,24,5Zm6,19c0,1.4-.1,2.7-.2,3.9l-2.6,1.7L24,31.2l-3.2-1.6-2.6-1.7c-.1-1.2-.2-2.5-.2-3.9s.1-2.7.2-3.9l2.6-1.7L24,16.8l3.2,1.6,2.6,1.7C29.9,21.3,30,22.6,30,24Zm3-1.7L34.9,24,33,25.7V22.3Zm-3.6,9.5-.3,1.5-1.5-.5,1.1-.6Zm-9,1-1.5.5-.3-1.5.7.4ZM15,25.7,13.1,24,15,22.3v3.4Zm3.6-9.5.3-1.5,1.5.5-1.1.6Zm10.1-.4-1.1-.6,1.5-.5.3,1.5ZM7.5,14.5c.5-.7,2-1.2,4-1.2a18.6,18.6,0,0,1,4.5.6c-.3,1.4-.5,2.9-.7,4.5A38.4,38.4,0,0,0,11,21.9C7.9,18.5,6.9,15.6,7.5,14.5Zm4,20.2c-2,0-3.5-.5-4-1.2s.4-4,3.5-7.4a38.4,38.4,0,0,0,4.3,3.5c.2,1.6.4,3.1.7,4.5A18.6,18.6,0,0,1,11.5,34.7ZM24,43c-1.1,0-3-2.3-4.4-6.8A38.9,38.9,0,0,0,24,34.6a38.9,38.9,0,0,0,4.4,1.6C27,40.7,25.1,43,24,43Zm16.5-9.5c-.5.7-2,1.2-4,1.2a18.6,18.6,0,0,1-4.5-.6c.3-1.4.5-2.9.7-4.5A38.4,38.4,0,0,0,37,26.1C40.1,29.5,41.1,32.4,40.5,33.5ZM37,21.9a38.4,38.4,0,0,0-4.3-3.5c-.2-1.6-.4-3.1-.7-4.5a18.6,18.6,0,0,1,4.5-.6c2,0,3.5.5,4,1.2S40.1,18.5,37,21.9Z" />
                <circle cx="24" cy="24" r="3" />
              </g>
            </g>
          </g>
        </svg>
      );

    case "business-intelligence":
      return (
        <svg {...iconProps} aria-label="Bussiness Intelligence Icon" role="img">
          {/* Axes */}
          <path
            d="M3 21h18M3 21V3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Bar chart columns */}
          <path
            d="M6 21v-14"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />

          <path
            d="M11 21v-8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />

          <path
            d="M16 21v-11"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />

          <path
            d="M21 21v-9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </svg>
      );

    case "data-integration":
      return (
        <svg
          {...iconProps}
          aria-label="Data Integration Icon"
          role="img"
          width="800px"
          height="800px"
          viewBox="0 0 52 52"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M44.5,21a5.5,5.5,0,1,1-4.9,8h-.91c-5.39.06-7.29,1.7-10.31,7.34l-.17.33-.2.38c-1.8,3.37-2.82,4.9-4.66,6.52C20.76,45.84,17.42,47,13,47h-.6a5.5,5.5,0,1,1,0-5h.91c5.49-.06,7.36-1.76,10.48-7.67h0L24,34a27.18,27.18,0,0,1,3.11-5H12.4a5.5,5.5,0,1,1,0-5H39.6a5.53,5.53,0,0,1,4.68-3Zm0-19a5.5,5.5,0,1,1-4.9,8H12.4a5.5,5.5,0,1,1,0-5H39.6A5.5,5.5,0,0,1,44.5,2Z" />
        </svg>
      );

    case "data-governance":
      return (
        <svg {...iconProps} aria-label="Data Governance Icon" role="img">
          <path d="M12 2l9 4v6c0 5.25-3.75 10.15-9 11-5.25-.85-9-5.75-9-11V6l9-4z" />
          <path d="M8 11l3 3 5-5" />
        </svg>
      );

    case "data-visualization":
      return (
        <svg {...iconProps} aria-label="Data Visualization Icon" role="img">
          <path d="M12 12L12 3A9 9 0 0 1 21 12Z" fill="currentColor" />
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "cpu":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Cpu Icon"
          role="img"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-cpu"
        >
          <rect width="16" height="16" x="4" y="4" rx="2" />
          <rect width="6" height="6" x="9" y="9" rx="1" />
          <path d="M15 2v2" />
          <path d="M15 20v2" />
          <path d="M2 15h2" />
          <path d="M2 9h2" />
          <path d="M20 15h2" />
          <path d="M20 9h2" />
          <path d="M9 2v2" />
          <path d="M9 20v2" />
        </svg>
      );
    case "users":
      return (
        <svg {...iconProps} aria-label="Users" role="img">
          <path
            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx={9} cy={7} r={4} />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "shuffle":
      return (
        <svg {...iconProps} aria-label="Shuffle" role="img">
          <path
            d="m18 14 4 4-4 4M18 2l4 4-4 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22M2 6h1.972a4 4 0 0 1 3.6 2.2M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
        </svg>
      );
    case "trending-down":
      return (
        <svg {...iconProps} aria-label="Trending Down Icon" role="img">
          <path
            d="m22 17-8.5-8.5-5 5L2 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M16 17h6v-6" />
        </svg>
      );
    case "database":
      return (
        <svg {...iconProps} aria-label="Database Icon" role="img">
          <ellipse cx={12} cy={5} rx={9} ry={3} />
          <path
            d="M3 5v14a9 3 0 0 0 18 0V5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M3 12a9 3 0 0 0 18 0" />
        </svg>
      );
    case "zap":
      return (
        <svg {...iconProps} aria-label="Zap Icon" role="img">
          <path
            d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "timer":
      return (
        <svg {...iconProps} aria-label="Timer Icon" role="img">
          <path
            d="M10 2h4M12 14l3-3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx={12} cy={14} r={8} />
        </svg>
      );
    case "loader":
      return (
        <svg {...iconProps} aria-label="Loader Icon" role="img">
          <path
            d="M12 2v4M16.2 7.8l2.9-2.9M18 12h4M16.2 16.2l2.9 2.9M12 18v4M4.9 19.1l2.9-2.9M2 12h4M4.9 4.9l2.9 2.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "infinity":
      return (
        <svg {...iconProps} aria-label="Infinity Icon" role="img">
          <path
            d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "flame":
      return (
        <svg {...iconProps} aria-label="Flame Icon" role="img">
          <path
            d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "bar-chart":
      return (
        <svg {...iconProps} aria-label="Bar Chart Icon" role="img">
          <path
            d="M12 20V10M18 20V4M6 20v-4"
            className="lucide lucide-chart-no-axes-column-increasing"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "activity":
      return (
        <svg {...iconProps} aria-label="Activity Icon" role="img">
          <path
            d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "circle-dot":
      return (
        <svg {...iconProps} aria-label="Circle Dot Icon" role="img">
          <path strokeLinecap="round" strokeLinejoin="round" />
          <circle cx={10} cy={10} r={8} />
          <circle cx={10} cy={10} r={2} />
        </svg>
      );
    case "square-square":
      return (
        <svg {...iconProps} aria-label="Square Square Icon" role="img">
          <path strokeLinecap="round" strokeLinejoin="round" />
          <rect width={18} height={18} x={3} y={3} rx={2} />
          <rect width={8} height={8} x={8} y={8} rx={1} />
        </svg>
      );
    case "menu":
      return (
        <svg {...iconProps} aria-label="Menu Icon" role="img">
          <path
            d="M4 12h16M4 6h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pragmatic-approach":
      return (
        <svg
          {...iconProps}
          aria-label="Pragmatic Approach Icon"
          role="img"
          fill="currentColor"
          stroke="none"
        >
          <path d="M11 4h2v5h-2zm0 6h2v2h-2zm1 9c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18C6.48 1 2 5.48 2 11s4.48 10 10 10 10-4.48 10-10S17.52 1 12 1z" />
        </svg>
      );
    case "memory-management":
      return (
        <svg
          {...iconProps}
          aria-label="Memory Management Icon"
          role="img"
          fill="currentColor"
          stroke="none"
        >
          <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z" />
        </svg>
      );
    case "jvm-compatibility":
      return (
        <svg
          {...iconProps}
          aria-label="JVM Compatibility Icon"
          role="img"
          fill="currentColor"
          stroke="none"
        >
          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v2h-9v-2zm-5 2l-3.5-3.5L3 12l3.5 3.5L10 12l-1.5-1.5L5 14zm5-6h9v2h-9V8z" />
        </svg>
      );
    case "reduced-technical":
      return (
        <svg
          {...iconProps}
          aria-label="Reduced Technical Icon"
          role="img"
          fill="currentColor"
          stroke="none"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z" />
        </svg>
      );
    case "settings":
      return (
        <svg {...iconProps} aria-label="Settings Icon" role="img">
          <path
            d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx={12} cy={12} r={3} />{" "}
        </svg>
      );
    case "robust":
      return (
        <svg
          {...iconProps}
          aria-label="Robust Icon"
          role="img"
          fill="currentColor"
          stroke="none"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        </svg>
      );
    case "correct-sign":
      return (
        <svg
          {...iconProps}
          aria-label="Correct Sign Icon"
          role="img"
          fill="currentColor"
          stroke="none"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z" />
        </svg>
      );
    case "bars-under-box":
      return (
        <svg
          {...iconProps}
          aria-label="Bars Under Box Icon"
          role="img"
          fill="currentColor"
          stroke="none"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
        </svg>
      );
    case "expertise":
      return (
        <svg
          {...iconProps}
          aria-label="Expertise Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <path
            fill="#929497"
            d="M38.16 20.981L23.02 43.782c-2.949-.46-6.04.637-8.06 3.168c-3.053 3.839-2.491 9.505 1.257 12.663c3.749 3.161 9.26 2.615 12.31-1.218c2.057-2.579 2.471-5.985 1.382-8.902l18.797-19.637c1.856.317 3.797.225 5.697-.346c3.479-1.042 6.492-3.535 8.127-6.874c1.724-3.521 1.889-7.625.49-11.312c-.148-.392-.703-.53-.964-.167c-1.313 1.82-4.251 5.677-5.564 7.504c-.028.004-.048.016-.084.028l-.711.237l-2.069.691c-.896.301-1.796.598-2.691.9a3053 3053 0 0 0-4.307-3.628c.116-1.017.229-2.037.349-3.057l.258-2.29q.035-.311.072-.619c1.475-1.688 4.58-5.412 6.06-7.099a.51.51 0 0 0 .04-.648a.54.54 0 0 0-.39-.292c-4.713-.852-9.679.908-12.688 4.757c-2.72 3.473-3.7 8.167-2.455 12.48c.089.296.182.579.281.86m18.389-2.344c.048-.03.059-.03 0 0"
          />
          <path
            fill="#7f8081"
            d="M45.03 12.187q.126-1.139.257-2.288l.072-.621c1.347-1.535 4.03-4.756 5.621-6.597c.679.021 1.361.084 2.041.205a.54.54 0 0 1 .39.292a.51.51 0 0 1-.04.648c-1.479 1.688-4.584 5.412-6.06 7.099q-.037.308-.072.619l-.258 2.29c-.12 1.02-.232 2.041-.349 3.057c-.651-.55-1.302-1.101-1.953-1.645c.113-1.022.234-2.038.35-3.059"
          />
          <path
            fill="#767676"
            d="M45.41 9.214c1.362-1.559 3.997-4.717 5.564-6.533c.679.021 1.361.083 2.041.207a.5.5 0 0 1 .39.287a.504.504 0 0 1-.041.651c-1.466 1.673-4.531 5.352-6.02 7.06a100 100 0 0 1-1.933-1.671"
          />
          <path
            fill="#7f8081"
            d="M26.575 56.744c2.053-2.574 2.467-5.981 1.382-8.898l18.797-19.637c1.856.315 3.797.229 5.697-.346c3.479-1.044 6.492-3.531 8.123-6.876a14.17 14.17 0 0 0 1.093-9.294c.145-.193.273-.374.39-.534c.261-.364.815-.225.964.167c1.398 3.686 1.233 7.79-.49 11.312c-1.635 3.338-4.647 5.831-8.127 6.874c-1.9.571-3.841.663-5.697.346L29.91 49.493c1.089 2.917.675 6.323-1.382 8.902c-3.049 3.833-8.561 4.379-12.31 1.218a9 9 0 0 1-.916-.896c3.668 2.286 8.493 1.523 11.273-1.973"
          />
          <path
            fill="#f4f5f5"
            d="M16.934 48.917c-1.651 2.074-1.346 5.144.683 6.852a4.647 4.647 0 0 0 6.665-.659c1.651-2.079 1.342-5.146-.683-6.854a4.64 4.64 0 0 0-6.665.661"
          />
          <path
            fill="#7f8081"
            d="M23.599 48.26q.313.267.574.572a4.63 4.63 0 0 0-6 1.131c-1.482 1.858-1.386 4.514.104 6.275a5 5 0 0 1-.659-.466c-2.029-1.708-2.334-4.777-.683-6.852a4.644 4.644 0 0 1 6.666-.66"
          />
          <path
            fill="#767676"
            d="M29.938 49.55a70 70 0 0 0-1.904-1.704l18.729-19.561c.072.016.149.02.229.032a38 38 0 0 0 1.796 1.627l-.076-.012z"
          />
          <path
            fill="#8a5d3b"
            d="M59.56 53.24c1.567 1.695 1.298 4.576-.606 6.426c-1.9 1.854-4.709 1.979-6.275.283l-34.787-37.55c-1.567-1.699-1.293-4.576.607-6.428c1.904-1.852 4.712-1.981 6.279-.281z"
          />
          <path
            fill="#929497"
            d="M2.053 21.909c2.35-2.29 5.966-2.424 8.746-.558l5.998-5.841C28.347 4.088 37.277 2.127 41.661 1.991l.004-.004l.024.004l.06-.004v.012c3.154.211.844.922.221 1.093C29.9 7.314 29.139 14.447 29.103 17.273c.181.767.229 1.571.148 2.376v.002c-.181 1.776-.992 3.55-2.415 4.938l-6.966 6.793c-.02.018-.044.034-.064.054c1.237 2.814.791 6.112-1.366 8.222c-2.784 2.71-7.344 2.411-10.188-.669l-6.086-6.594c-2.845-3.082-2.893-7.774-.113-10.486"
          />
          <path
            fill="#8a5d3b"
            d="M21.329 11.946c1.567 1.695 1.293 4.574-.606 6.426c-1.904 1.854-4.713 1.979-6.279.281c-.868-.952.234-3.292 1.953-4.89s4.02-2.7 4.932-1.817"
          />
          <path
            fill="#767676"
            d="M11.245 29.812c3.817 4.13 5.673 8.686 4.146 10.177c-1.526 1.486-5.861-.657-9.674-4.793c-3.816-4.13-5.673-8.688-4.142-10.176c1.527-1.488 5.853.658 9.67 4.792"
          />
        </svg>
      );

    case "end-to-end":
      return (
        <svg
          {...iconProps}
          aria-label="End to End Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 128 128"
        >
          <path fill="none" d="m15.73 105.38l13.1-26.6V41.2l-13.1 26.61z" />
          <path
            fill="#513118"
            d="M31.4 32.91h-1.95L12.81 66.77c-.1.21-.16.44-.16.68V112a1.53 1.53 0 0 0 1.54 1.54c.58 0 1.12-.33 1.38-.86l15.82-32.14h87.47V32.91zm-2.57 45.87l-13.1 26.61V67.81l13.1-26.61z"
          />
          <path
            fill="#513118"
            d="m14.58 69.12l16.17-32.87V80.8l-16.17 32.87z"
          />
          <path
            fill="#904427"
            d="M106.58 39.01H87.41c-1.03 0-1.86.83-1.86 1.86v6.87c0 1.03.83 1.86 1.86 1.86h19.17c1.03 0 1.86-.83 1.86-1.86v-6.87c0-1.03-.83-1.86-1.86-1.86"
          />
          <path fill="#ffd393" d="M32.95 45.79h75.49v44.55H32.95z" />
          <path
            fill="#64758b"
            d="M84.29 43.99H65.11c-1.03 0-1.86.83-1.86 1.86v6.87c0 1.03.83 1.86 1.86 1.86h19.17c1.03 0 1.86-.83 1.86-1.86v-6.87c.01-1.02-.82-1.86-1.85-1.86"
          />
          <path fill="#ffd393" d="M29.03 51.24h75.49v44.55H29.03z" />
          <path
            fill="#eeba73"
            d="M104.08 67.26s0-1.97-.01-4.93c0-1.48-.01-3.2-.01-5.05v-1.41c-.01-.47.02-.98-.06-1.36c-.15-.82-.64-1.61-1.33-2.11c-.35-.25-.74-.44-1.15-.54c-.42-.11-.8-.12-1.32-.11c-.97.01-1.93.02-2.85.04c-1.85.04-3.57.03-5.05 0s-2.71-.02-3.57-.06c-.86-.03-1.36-.05-1.36-.05a.45.45 0 0 1-.43-.47c.01-.24.2-.42.43-.43c0 0 .49-.02 1.36-.05c.86-.04 2.09-.04 3.57-.06c1.48-.03 3.2-.04 5.05 0c.92.01 1.88.02 2.85.04c.45 0 1.06.01 1.59.16c.54.15 1.05.4 1.49.74c.89.67 1.5 1.68 1.68 2.78c.09.57.05 1.04.06 1.51v1.41c0 1.85-.01 3.57-.01 5.05c-.01 2.96-.01 4.93-.01 4.93c0 .25-.2.45-.45.45s-.47-.23-.47-.48M39.4 51.66s-.37.04-.94.08c-.56.04-1.31.06-2.06.06s-1.5-.02-2.06-.06s-.94-.09-.94-.09a.46.46 0 0 1-.4-.51c.03-.21.19-.37.4-.4c0 0 .37-.05.94-.09c.56-.04 1.31-.06 2.06-.06c.75.01 1.5.03 2.06.06c.56.04.94.08.94.08c.25.03.43.25.4.5c-.02.25-.19.41-.4.43"
          />
          <path
            fill="#855731"
            d="M62.62 48.83H43.44c-1.03 0-1.86.83-1.86 1.86v6.87c0 1.03.83 1.86 1.86 1.86h19.17c1.03 0 1.86-.83 1.86-1.86v-6.87c.01-1.03-.82-1.86-1.85-1.86"
          />
          <path fill="#ffd393" d="M25.28 56.54h75.49v44.55H25.28z" />
          <path
            fill="#eeba73"
            d="M41.57 56.98s-.73.06-1.83.1c-1.1.05-2.56.07-4.02.08c-1.46-.01-2.93-.02-4.02-.08c-1.1-.04-1.83-.11-1.83-.11a.576.576 0 0 1-.52-.61c.02-.28.25-.49.52-.52c0 0 .73-.06 1.83-.11s2.56-.07 4.02-.08c1.46.01 2.93.03 4.02.08c1.1.05 1.83.1 1.83.1c.31.02.55.3.52.61a.57.57 0 0 1-.52.54m59.04 16.25s-.01-3.15-.02-7.87c0-1.18 0-2.46-.01-3.81c-.02-.66.04-1.42-.09-1.97c-.14-.6-.45-1.18-.91-1.64c-.45-.46-1.04-.79-1.69-.92c-.6-.13-1.41-.06-2.18-.07c-1.55.01-3.12.02-4.7.02c-3.15.01-6.29.05-9.24.03s-5.7-.03-8.06-.05c-2.36-.01-4.33-.03-5.7-.06c-1.38-.02-2.16-.04-2.16-.04c-.25 0-.45-.21-.44-.46c0-.24.2-.44.44-.44c0 0 .79-.01 2.16-.04c1.38-.03 3.34-.05 5.7-.06s5.11-.03 8.06-.05s6.1.02 9.24.03c1.57.01 3.15.02 4.7.02c.39 0 .77 0 1.16.01c.36-.01.85.02 1.25.11c.84.2 1.6.64 2.18 1.24s.97 1.35 1.13 2.14c.16.85.07 1.49.09 2.18c0 1.35-.01 2.63-.01 3.81c-.01 4.72-.02 7.87-.02 7.87c0 .25-.2.45-.45.45c-.22.02-.43-.18-.43-.43"
          />
          <path
            fill="#dc7f27"
            d="M41.44 54.69H22.26c-1.03 0-1.86.83-1.86 1.86v6.87c0 1.03.83 1.86 1.86 1.86h19.17c1.03 0 1.86-.83 1.86-1.86v-6.87c.01-1.03-.83-1.86-1.85-1.86"
          />
          <path fill="#ffd393" d="M20.4 62.96h75.49v44.55H20.4z" />
          <path
            fill="#eeba73"
            d="M95.83 69.66s-.01-.89-.02-2.44c0-.4-.01-.79-.11-1.17a3.39 3.39 0 0 0-3.27-2.57c-5.33.02-12.43.04-19.54.07c-7.11-.02-14.21-.04-19.54-.06c-5.33-.05-8.88-.08-8.88-.08c-.25 0-.45-.21-.45-.46s.2-.45.45-.45c0 0 3.55-.03 8.88-.08c5.33-.02 12.44-.04 19.54-.06c7.11.02 14.22.05 19.55.07c1.54.02 2.82.86 3.51 1.85c.73.97.85 2.18.81 2.94c-.01 1.55-.02 2.44-.02 2.44c0 .25-.21.45-.46.45s-.45-.2-.45-.45"
          />
          <path
            fill="#855731"
            d="M102.12 67.2H12.65v46.48c0 1.06.86 1.93 1.93 1.93h88.75c.73 0 1.4-.42 1.73-1.08l13.82-28.46V32.79z"
          />
          <path
            fill="#513118"
            d="M104.29 70.72s.04.65.1 1.78c.04 1.13.15 2.75.2 4.68c.05 1.94.14 4.2.17 6.62c.05 2.42.05 5.01.06 7.59c-.01 2.58-.02 5.17-.06 7.59c-.03 2.42-.12 4.68-.17 6.62s-.15 3.55-.19 4.68c-.07 1.13-.1 1.78-.1 1.78c-.03.54-.49.94-1.03.91a.963.963 0 0 1-.91-.91s-.04-.65-.1-1.78c-.04-1.13-.15-2.75-.19-4.68c-.05-1.94-.13-4.2-.17-6.62s-.05-5.01-.06-7.59c.01-2.58.02-5.17.06-7.59c.03-2.42.12-4.68.17-6.62s.15-3.55.2-4.68c.07-1.13.1-1.78.1-1.78c.03-.54.49-.94 1.03-.91c.47.03.86.43.89.91"
          />
          <path fill="#fff2d4" d="M41.83 85.51h28.83v16.07H41.83z" />
          <path
            fill="#f7b618"
            d="M66.76 85.51v12.38H45.73V85.51h-3.9v16.07h28.83V85.51z"
          />
          <path fill="#513118" d="M29.18 20.91H119v12.52H29.18z" />
          <path
            fill="#6e451d"
            d="m118.99 33.42l-16.75-5.58V15.32l16.75 5.59zm-89.62 0l-16.69-5.58V15.32l16.69 5.59z"
          />
          <path fill="#855731" d="M12.42 15.32h89.82v12.52H12.42z" />
          <path
            fill="#f7b618"
            d="M56.25 23.73a4.11 4.11 0 0 0-4.11 4.11h8.22a4.11 4.11 0 0 0-4.11-4.11m0 47.6a4.11 4.11 0 0 0 4.11-4.11h-8.22a4.11 4.11 0 0 0 4.11 4.11"
          />
          <path
            fill="#60371a"
            d="m115.01 34.65l-13 .2c-3.9.03-8.45.07-13.33.11c-4.88.01-10.08.03-15.28.05c-5.2-.02-10.4-.03-15.28-.05c-4.88-.04-9.43-.08-13.33-.11l-13-.2a.655.655 0 0 1-.64-.66c.01-.35.29-.63.64-.64l13-.2c3.9-.03 8.45-.07 13.33-.11c4.88 0 10.09-.02 15.29-.04c5.2.02 10.4.03 15.28.05c4.88.04 9.43.08 13.33.11l13 .2c.36.01.64.3.64.66c-.02.34-.3.62-.65.63"
          />
        </svg>
      );

    case "custom-approach":
      return (
        <svg
          {...iconProps}
          aria-label="Custom Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 128 128"
        >
          <path
            fill="#82aec0"
            d="M113.88 94.05c-1.36-1.16-3.17-2.53-5.46-4.26c-8.49-6.44-24.2-18.37-50.96-45.03c2.06-3.75 3.23-7.95 3.36-12.37c.24-7.56-2.69-14.97-8.04-20.32c-8.84-8.84-22.55-10.61-33.34-4.3c-.49.29-.79.82-.79 1.39s.31 1.1.8 1.38l16.61 9.59c1.64 8.29-3.12 16.57-11.18 19.35L8.22 29.84c-.49-.28-1.1-.29-1.59 0c-.49.28-.8.8-.81 1.37c-.09 8.13 3.4 15.85 9.58 21.18c5.12 4.42 11.52 6.62 17.92 6.62c3.59 0 7.17-.72 10.54-2.11c24.21 24.32 35.66 41.18 42.52 51.29c2.4 3.54 4.14 6.1 5.63 7.77c4.56 5.1 9.52 7.86 14.36 7.99c.12 0 5.33.8 10.83-4.7c3.46-3.46 5.14-7.25 4.98-11.24c-.2-4.74-2.99-9.44-8.3-13.96m-9.07 18.92c-3.39 0-6.15-2.75-6.15-6.15s2.75-6.15 6.15-6.15s6.15 2.75 6.15 6.15s-2.76 6.15-6.15 6.15"
          />
          <path
            fill="#2f7889"
            d="M61.13 48.38c-1.2-1.18-2.42-2.39-3.67-3.63c2.06-3.75 3.23-7.95 3.36-12.37c.09-3-.32-5.96-1.17-8.79c-.76-1.25-1.96-2.59-2.72-1.78c.31 9.82-2.54 20.05-9.37 27.11c-3.39 3.5-7.8 6.03-12.53 7.23c-2.34.59-4.76.85-7.17.72c-1.41-.08-5.39-1.55-6.19-.47v.05c3.67 1.71 7.65 2.56 11.63 2.56c3.59 0 7.17-.72 10.54-2.11c7.83 7.87 14.32 14.95 19.76 21.28c-2.72-5.14-10.74-14.63-12.88-18.25c-.48-.82-1.16-2.92.37-4.81c2.17-2.65 6.58-5.11 10.04-6.74"
          />
          <path
            fill="#b9e4ea"
            d="M70.01 66.91s3.73-1.64 9.25 2.83c5.52 4.48 26.76 22.54 28.55 24.93s-5.42-.04-7.96-.48c-2.53-.45-29.84-27.28-29.84-27.28M43.32 12c3.08 2.21 5.84 4.82 8.73 7.28c.74.63 1.83 1.27 2.6.66c.83-.66.31-1.98-.32-2.84c-5.46-7.5-15.65-12.86-25.5-10.73C34.03 8.04 38.7 8.7 43.32 12"
          />
          <path
            fill="#2f7889"
            d="M18.83 37.74c1.21.72 2.89 1.7 3.86 1.97c1.17.32 4.46-.95 5.42-1.72c-3.94-2.57-8.34-5.45-12.29-8.02c-.45-.29-.9-.59-1.41-.75c-.62-.19-1.28-.18-1.92-.14c-.9.04-5.3-.11-5.81.67c-.52.79 1.31 1.54 1.9 1.9c3.41 2.04 6.84 4.05 10.25 6.09"
          />
        </svg>
      );

    case "technology":
      return (
        <svg
          {...iconProps}
          aria-label="Technology Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 128 128"
        >
          <path
            fill="#b7d5e5"
            d="M106 24.79H22.15c-1.92 0-3.48 1.56-3.48 3.48v57.59c0 1.92 1.56 3.48 3.48 3.48H106c1.92 0 3.48-1.56 3.48-3.48V28.27c0-1.92-1.55-3.48-3.48-3.48"
          />
          <radialGradient
            id="notoLaptop0"
            cx="48.408"
            cy="13.024"
            r="75.465"
            gradientTransform="matrix(1 0 0 1.0843 0 -10.19)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop offset="1" />
          </radialGradient>
          <path
            fill="url(#notoLaptop0)"
            d="M104.75 83.2H23.4l.96-52.27h79.43z"
          />
          <path
            fill="#2f7889"
            d="M121.09 123.82H7.59q-.645 0-1.2-.09c-2.88-.44-4.21-4.18-2.5-6.74l.39-.59h119.59l.4.6c1.86 2.78.12 6.76-3.04 6.81c-.04.01-.09.01-.14.01"
          />
          <path
            fill="#eee"
            d="M106.84 90.41H20.6c-1.27 0-2.54.77-3.25 1.99l-14 25.48c-.59.88-.01 2.12.99 2.12H123.8c1 0 1.58-1.24.99-2.12l-14.71-25.63c-.7-1.08-1.97-1.84-3.24-1.84"
          />
          <path fill="#b7d5e5" d="M86.36 115.52H41.8l2.85-7.98h39.07z" />
          <path
            fill="#69a1ba"
            d="m72.69 94.84l-.27-2.2h-3.44l.13 2.2zm-5.55 0l-.14-2.2h-3.45v2.2zm26.47 0l-.81-2.2h-3.26l.68 2.2zm-5.25 0l-.68-2.2h-3.32l.54 2.2zm-5.18 0l-.54-2.2h-3.37l.41 2.2zm18.93 0l-.95-2.2h-6.71l.82 2.2zm-24.5 0l-.41-2.2h-3.41l.28 2.2zm-43.85 0l.68-2.2h-3.26l-.81 2.2zm16.75 0l.27-2.2h-3.41l-.4 2.2zm-11.16 0l.54-2.2h-3.32l-.67 2.2zm-11.18 0l.81-2.2H25.8l-.95 2.2zm16.76 0l.41-2.2h-3.37l-.54 2.2zm11.15 0l.14-2.2h-3.44l-.27 2.2zm5.57 0v-2.2H58.2l-.14 2.2zm22.13 8.89H44.36l-.75 2.2h41.08zm18.37 2.2l-1.21-2.2h6.54l.95 2.2zm-15.4 0l-.83-2.2h6.29l.96 2.2zm8.64 0l-.96-2.2h4.31l1.1 2.2zm-69.72 0l1.21-2.2h-6.54l-.95 2.2zm15.4 0l.83-2.2h-6.29l-.96 2.2zm-8.65 0l.97-2.2h-4.31l-1.11 2.2zm-2.71-7.42l.82-2.19h-6.67l-.95 2.19zm68.24 0l-.81-2.19h6.66l.95 2.19zm-1.7 0l-.96-2.19h-3.85l.82 2.19zm-10.02 0l-.65-2.19h3.85l.78 2.19zm-6.04 0l-.47-2.19h3.85l.6 2.19zm-6.04 0l-.28-2.19h3.84l.43 2.19zm-6.03 0l-.11-2.19h3.85l.24 2.19zm-6.04 0l.07-2.19H66l.06 2.19zm-6.04 0l.25-2.19h3.85l-.11 2.19zm-6.03 0l.42-2.19h3.85l-.29 2.19zm-6.04 0l.6-2.19h3.85l-.47 2.19zm-6.04 0l.78-2.19h3.85l-.64 2.19zm-6.03 0l.95-2.19h3.85l-.82 2.19zm-2.2 3.71l.81-2.2h-8.75l-.95 2.2zm66.17 0l-.77-2.2h-4.17l.64 2.2zm-10.94 0l-.48-2.2h4.16l.62 2.2zm-6.65 0l-.32-2.2h4.17l.45 2.2zm-6.64 0l-.17-2.2h4.17l.3 2.2zm-6.64 0l-.01-2.2h4.16l.15 2.2zm-6.64 0l.14-2.2h4.17l-.01 2.2zm-6.65 0l.3-2.2h4.17l-.17 2.2zm-6.64 0l.46-2.2h4.16l-.32 2.2zm-6.64 0l.61-2.2h4.17l-.48 2.2zm-6.65 0l.77-2.2h4.17l-.63 2.2zm65.69 0l-.82-2.2h8.75l.95 2.2z"
            opacity="0.57"
          />
          <path
            fill="#b7d5e5"
            d="M124.73 117.88L110.39 92.4c-.71-1.07-1.98-1.84-3.25-1.84c0 0 1.22 1.1 1.59 1.63l12.59 23.59c.56 1.02-.18 2.26-1.34 2.26H7.96c-1.15 0-1.89-1.23-1.35-2.24l11.95-23.18c.35-.6 1.88-1.99 1.88-1.99h-.45c-1.27 0-2.54.77-3.25 1.99L3.28 117.88c-.59.88-.01 2.12.99 2.12h119.46c1.01 0 1.59-1.24 1-2.12"
          />
          <path
            fill="none"
            stroke="#eee"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="2.936"
            d="M25.97 28.02h13.21"
          />
          <path
            fill="#75a7bc"
            d="M109.37 30.11c0-1.04-1.01-1.12-1.01.11v55.8c0 1.34-1.09 2.43-2.43 2.43H22.08c-1.34 0-2.43-1.09-2.43-2.43v-55.8c0-1.23-1.01-1.15-1.01-.11l-.95 55.91c0 2.42 1.24 4.39 4.39 4.39h83.85c2.73 0 4.39-1.97 4.39-4.39z"
          />
        </svg>
      );

    case "real-time":
      return (
        <svg
          {...iconProps}
          aria-label="Real Time Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <g
            fill="#2f88ff"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          >
            <path d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4V24H44Z" />
            <path d="M43.0844 18H30V4.91553C36.2202 6.86917 41.1308 11.7798 43.0844 18Z" />
          </g>
        </svg>
      );

    case "scalable":
      return (
        <svg
          {...iconProps}
          aria-label="Scalable Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 128 128"
        >
          <path
            fill="#ca2c31"
            d="m3.77 71.73l16.34-16.1l27.82-4.93l-2.75 14.56L7.57 76.82l-2.43-1.05z"
          />
          <path
            fill="#a02422"
            d="M22.94 59.76L5.2 75.88l13.05 6.36l19.81-10.11v-4.77l4.05-10.92zm41.98 28.39l-8.57 3.72l-8.09 17.15s7.12 15.77 7.44 15.77s4.37.32 4.37.32l14.4-16.1l3.64-27.5z"
          />
          <path
            fill="#ca2c31"
            d="M56.5 100.84s4.77-.97 8.17-2.59s7.6-4.04 7.6-4.04l-1.54 13.43l-15.05 17.13s-.59-.73-3.09-6.17c-1.99-4.34-2.68-5.89-2.68-5.89z"
          />
          <path
            fill="#f7d74d"
            d="M31.58 80.66s-5.74-.48-12.03 7.47c-5.74 7.26-8.43 19.08-9.47 22.12s-3.53 3.66-2.7 5.05s4.42 1.31 8.85.76s8.23-1.94 8.23-1.94s-.19.48-.83 1.52c-.23.37-1.03.9-.97 1.45c.14 1.31 11.36 1.34 20.32-7.88c9.68-9.95 4.98-18.11 4.98-18.11z"
          />
          <path
            fill="#fbf0b4"
            d="M33.31 85.29s-6.19.33-11.31 8.28s-7.5 17.16-7.01 17.78c.48.62 10.02-2.83 12.31-2.14c1.57.48.76 2.07 1.18 2.49c.35.35 4.49.94 11.19-6.32c6.71-7.26 5.12-17.46 5.12-17.46z"
          />
          <path
            fill="#858585"
            d="M36.35 74.44s-3.11 2.77-4.22 4.36s-1.11 1.73-1.04 2.21s1.22 5.75 6.01 10.37c5.88 5.67 11.13 6.43 11.89 6.43s5.81-5.67 5.81-5.67z"
          />
          <path
            fill="#437687"
            d="M50.1 91.24s5.04 3.31 13.49.47c11.55-3.88 20.02-12.56 30.51-23.52c10.12-10.58 18.61-23.71 18.61-23.71l-5.95-19.93z"
          />
          <path
            fill="#3f545f"
            d="m67.99 80.33l1.39-4.32l3.48.49s2.65 1.25 4.6 2.16s4.46 1.6 4.46 1.6l-4.95 4.18s-2.7-1.02-4.67-1.88c-2.22-.97-4.31-2.23-4.31-2.23"
          />
          <path
            fill="#8dafbf"
            d="M84.32 16.14s-9.62 5.58-23.41 18.63c-12.43 11.76-21.64 22.4-23.87 31.45c-1.86 7.58-.87 12.18 3.36 17.15c4.47 5.26 9.71 7.87 9.71 7.87s3.94.06 20.38-12.59C91 62.86 107.43 36.42 107.43 36.42z"
          />
          <path
            fill="#d83f22"
            d="M104.18 41.84s-8.37-3.57-14.34-11.9c-5.93-8.27-5.46-13.86-5.46-13.86s4.96-3.89 16.11-8.34c7.5-2.99 17.71-4.52 21.07-2.03s-2.3 14.98-2.3 14.98l-10.31 19.96z"
          />
          <path
            fill="#6896a5"
            d="M68.17 80.4s-7.23-3.69-11.83-8.94c-8.7-9.91-10.5-20.79-10.5-20.79l4.37-5.13S51.3 57.1 60.63 67.09c6.08 6.51 12.43 9.49 12.43 9.49s-1.27 1.07-2.63 2.11c-.87.67-2.26 1.71-2.26 1.71"
          />
          <path
            fill="#a02422"
            d="M112.71 44.48s4.34-5.23 8.45-17.02c5.74-16.44.74-21.42.74-21.42s-1.69 7.82-7.56 18.69c-4.71 8.71-10.41 17-10.41 17s3.14 1.41 4.84 1.9c2.14.62 3.94.85 3.94.85"
          />
          <path
            fill="#b3e1ee"
            d="M39.81 69.66c1.3 1.24 3.27-.06 4.56-3.1c1.3-3.04 1.28-4.74.28-5.46c-1.24-.9-3.32 1.07-4.23 2.82c-1 1.94-1.59 4.8-.61 5.74m45.14-49.53s-7.61 5.47-15.73 12.91c-7.45 6.83-12.39 12.17-13.07 13.41c-.72 1.33-.73 3.21-.17 4.17s1.8 1.46 2.93.62c1.13-.85 9.18-9.75 16.45-16.11c6.65-5.82 11.78-9.51 11.78-9.51s2.08-3.68 1.74-4.52c-.34-.85-3.93-.97-3.93-.97"
          />
          <path
            fill="#ed6a65"
            d="M84.95 20.13s5.62-4.31 11.74-7.34c5.69-2.82 11.35-5.17 12.37-3.13c.97 1.94-5.37 4.58-10.95 8.14s-10.95 7.81-10.95 7.81s-.82-1.5-1.35-2.89a24 24 0 0 1-.86-2.59"
          />
          <path
            fill="#e1e1e1"
            d="M89.59 39.25c-5.57-5.13-13.32-3.75-17.14.81c-3.92 4.7-3.63 11.88 1 16.2c4.21 3.92 12.04 4.81 16.76-.69c4.2-4.88 3.94-12.13-.62-16.32"
          />
          <path
            fill="#3f545f"
            d="M75.33 41.87c-3.31 3.25-3.13 9.69.81 12.63c3.44 2.57 8.32 2.44 11.38-.69s3.06-8.82.19-11.76c-3.3-3.37-8.59-3.9-12.38-.18"
          />
          <path
            fill="#a02524"
            d="M50 76.89s6.19-6.28 6.87-5.6s.59 4.49-2.37 8.73C51.53 84.26 45 91.81 39.83 96.9c-5.1 5.01-12.29 10.74-12.97 10.64c-.53-.08-2.68-1.15-3.54-2.19c-.84-1.03 1.67-5.9 2.68-7.51c1.02-1.61 24-20.95 24-20.95"
          />
          <path
            fill="#ca2c31"
            d="M21.23 101.85c-.08 1.44 2.12 3.54 2.12 3.54L56.87 71.3s-1.57-1.77-6.19 1.1c-4.66 2.9-8.74 6.38-14.76 12.21c-8.39 8.14-14.61 15.8-14.69 17.24"
          />
          <path
            fill="#fff"
            d="M19.06 36.95c-1.11 1.11-1.16 2.89.08 3.91c1.1.91 2.89.32 3.56-.5s.59-2.6-.3-3.48c-.89-.89-2.66-.6-3.34.07"
          />
          <path
            fill="#fff"
            d="M41.02 35.65c-.84.93-.57 2.31.21 2.82s1.95.46 2.52-.24c.51-.63.57-1.89-.21-2.67c-.68-.67-1.98-.51-2.52.09"
            opacity="0.5"
          />
          <path
            fill="#fff"
            d="M55.55 11.89s1.22-3.48 1.94-3.52c.73-.04 1.78 3.48 1.78 3.48s3.61.04 3.85.57c.31.68-2.31 2.96-2.31 2.96s.85 3.4.45 3.81c-.45.45-3.56-1.34-3.56-1.34s-3.2 2.23-3.89 1.62c-.6-.53.65-4.13.65-4.13s-3-2.19-2.84-2.8c.23-.86 3.93-.65 3.93-.65m41.46 83.44c1.21.67 2.73.29 3.29-1c.51-1.15-.43-2.52-1.28-2.89s-2.34.12-2.88 1.09c-.53.96.14 2.4.87 2.8m17.18-29.49c-.69-1.07-2.18-1.42-3.15-.56c-.94.84-.71 2.16-.18 2.83s1.95.92 2.81.37s.94-2 .52-2.64"
          />
        </svg>
      );
    case "interoperability":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          aria-label="Interoperability Icon"
          role="img"
        >
          <g fill="currentColor">
            <path d="M28 24a4 4 0 1 1-8 0a4 4 0 0 1 8 0m14-5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-30 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M17.936 22.351a1 1 0 0 1-1.287.585l-8-3a1 1 0 1 1 .702-1.872l8 3a1 1 0 0 1 .585 1.287"
              clipRule="evenodd"
            />
            <path d="M24 10.902a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
            <path
              fillRule="evenodd"
              d="M23.902 17.5a1 1 0 0 1-1-1V7.902a1 1 0 1 1 2 0V16.5a1 1 0 0 1-1 1m16.027 1.129a1 1 0 0 1-.558 1.3l-7.5 3a1 1 0 0 1-.742-1.857l7.5-3a1 1 0 0 1 1.3.557"
              clipRule="evenodd"
            />
            <path d="M17 38a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M20.118 29.714a1 1 0 0 1 .168 1.404l-5.5 7a1 1 0 1 1-1.572-1.236l5.5-7a1 1 0 0 1 1.404-.168"
              clipRule="evenodd"
            />
            <path d="M31.5 38a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
            <path
              fillRule="evenodd"
              d="M28.382 29.714a1 1 0 0 0-.168 1.404l5.5 7a1 1 0 1 0 1.572-1.236l-5.5-7a1 1 0 0 0-1.404-.168"
              clipRule="evenodd"
            />
          </g>
        </svg>
      );
    case "performance":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Performance Icon"
          role="img"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chart-no-axes-combined"
        >
          <path d="M24 32v10" />
          <path d="M32 28v14" />
          <path d="M40 20v22" />
          <path d="m44 6-17.292 17.292a1 1 0 0 1-1.416 0L18.708 16.708a1 1 0 0 0-1.414 0L4 30" />
          <path d="M8 36v6" />
          <path d="M16 28v14" />
        </svg>
      );
    case "interfaces":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Interfaces Icon"
          role="img"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <defs>
            <mask id="ipTDocSuccess0">
              <g
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              >
                <path
                  fill="#555555"
                  d="M38 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
                />
                <path d="M17 30h14m-14 6h7m6-23l-8 8l-4-4" />
              </g>
            </mask>
          </defs>
          <path
            fill="currentColor"
            d="M0 0h48v48H0z"
            mask="url(#ipTDocSuccess0)"
          />
        </svg>
      );

    case "versatile":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Versatile Icon"
          role="img"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <path d="M20.7 3.3c-3.15 3.825-3.225 4.2-1.2 4.2 1.275 0 1.5.525 1.5 3.375 0 1.875.375 3.375.75 3.375 1.05 0 .975-8.025-.075-8.4-.45-.15-.15-1.05.75-2.1L24 1.875l1.575 1.875c.9 1.05 1.2 1.95.75 2.1-1.05.375-1.125 8.4-.075 8.4.45 0 .75-1.5.75-3.375 0-2.85.225-3.375 1.5-3.375.825 0 1.5-.225 1.5-.45C30 6.375 24.6 0 24 0c-.3 0-1.8 1.5-3.3 3.3zM18.225 17.4c-.975 1.125-1.725 3.3-2.1 6.075-.45 3.75-.3 4.35.9 4.8.75.225 2.325 1.275 3.45 2.25 2.625 2.175 5.1 2.175 6.975.15.75-.9 2.175-1.875 3.15-2.25 1.65-.675 1.725-.975 1.275-5.025-.75-6-2.4-7.65-7.875-7.65-3.45 0-4.5.3-5.775 1.65zM28.8 18.45c.675.6 1.2 2.025 1.125 3.15 0 1.125-.225 1.575-.45 1.05-.15-.45-1.125-.9-2.025-.9-.9 0-2.325-.525-3.15-1.125-1.35-.9-1.95-.9-3.525-.15-1.125.525-2.1 1.425-2.325 2.025-.15.6-.3.3-.375-.675 0-.975.525-2.4 1.275-3.15 1.65-1.725 7.8-1.875 9.45-.225zm-3.975 4.2c2.625.75 2.925 1.125 2.925 3.3 0 4.125-3.675 6.3-6.3 3.6-1.725-1.65-1.575-7.8.15-7.8.225 0 1.65.375 3.225.9zm-6.075 3.225c0 .6-.3 1.125-.75 1.125-.375 0-.75-.525-.75-1.125s.375-1.125.75-1.125c.45 0 .75.525.75 1.125zm12 0c0 .6-.3 1.125-.75 1.125-.375 0-.75-.525-.75-1.125s.375-1.125.75-1.125c.45 0 .75.525.75 1.125zM3 21l-3.375 3L3 27c3.825 3.375 4.5 3.6 4.5 1.5 0-1.275.525-1.5 3.375-1.5 1.875 0 3.375-.375 3.375-.75 0-1.05-8.025-.975-8.4.075-.15.45-1.05.15-2.1-.75L1.875 24l1.875-1.575c1.05-.9 1.95-1.2 2.1-.75.375 1.05 8.4 1.125 8.4.075 0-.45-1.5-.75-3.375-.75-2.85 0-3.375-.225-3.375-1.5 0-2.1-.675-1.875-4.5 1.5zM40.5 19.5c0 1.275-.525 1.5-3.375 1.5-1.875 0-3.375.3-3.375.75 0 1.05 8.025.975 8.4-.075.15-.45 1.05-.15 2.1.75L46.125 24l-1.875 1.575c-1.05.9-1.95 1.2-2.1.75-.375-1.05-8.4-1.125-8.4-.075 0 .375 1.5.75 3.375.75 2.85 0 3.375.225 3.375 1.5 0 2.1.675 1.875 4.5-1.5l3.375-3L45 21c-3.825-3.375-4.5-3.6-4.5-1.5zM21 37.125c0 2.85-.225 3.375-1.5 3.375-2.1 0-1.875.675 1.5 4.5l3 3.375L27 45c3.375-3.825 3.6-4.5 1.5-4.5-1.275 0-1.5-.525-1.5-3.375 0-1.875-.3-3.375-.75-3.375-1.05 0-.975 8.025.075 8.4.45.15.15 1.05-.75 2.1L24 46.125l-1.575-1.875c-.9-1.05-1.2-1.95-.75-2.1 1.05-.375 1.125-8.4.075-8.4-.375 0-.75 1.5-.75 3.375z" />
        </svg>
      );
    case "full-stack":
      return (
        <svg
          {...iconProps}
          aria-label="Full Stack Icon"
          role="img"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999L2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0M12 3.332L5.887 7L12 10.668L18.113 7z"
          />
        </svg>
      );
    case "modern":
      return (
        <svg
          {...iconProps}
          aria-label="Modern Icon"
          role="img"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            strokeWidth="0.5"
            d="M12 3.5a8.46 8.46 0 0 0-4.026 1.012A8.55 8.55 0 0 0 4.787 7.5H8.5v2h-7v-7h2v3.334a10.55 10.55 0 0 1 3.525-3.083A10.46 10.46 0 0 1 12 1.5c5.799 0 10.5 4.701 10.5 10.5v1h-2v-1A8.5 8.5 0 0 0 12 3.5M13 6v5.586l1.664 1.664l-1.414 1.414l-2.25-2.25V6zm-9.558 5.901l.104.995A8.5 8.5 0 0 0 12 20.5h1v2h-1c-5.427 0-9.89-4.115-10.443-9.396l-.104-.994zM19.5 14.005v1.14c.533.159 1.013.44 1.406.813l.989-.57l1 1.731l-.99.572a3.5 3.5 0 0 1 0 1.623l.99.571l-1 1.732l-.992-.572a3.5 3.5 0 0 1-1.403.81V23h-2v-1.145a3.5 3.5 0 0 1-1.404-.81l-.992.572l-1-1.732l.99-.572a3.5 3.5 0 0 1 0-1.622l-.99-.571l1-1.732l.99.57a3.5 3.5 0 0 1 1.406-.813v-1.14zM18.5 17a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"
          />
        </svg>
      );
    case "healthcare":
      return (
        <svg
          {...iconProps}
          aria-label="Healthcare Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width={128}
          height={128}
          viewBox="0 0 128 128"
        >
          <radialGradient
            id="notoHealthWorkerLightSkinTone0"
            cx={64.139}
            cy={4.464}
            r={69.458}
            gradientTransform="matrix(-1.08 .0045 .0029 .5843 133.401 120.64)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.559} stopColor="#f5f5f5"></stop>
            <stop offset={1} stopColor="#c6c6c6"></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTone0)"
            d="M64.03 95.93c-25.51.07-51.97 7.33-51.97 25.06v3.04H116v-3.04c0-17.74-26.46-25-51.97-25.06"
          ></path>
          <path
            fill="#312d2d"
            d="M98.9 79.85c-1.25-2.27.34-4.58 3.06-7.44c4.31-4.54 9-15.07 4.64-25.76c.03-.06-.86-1.86-.83-1.92l-1.79-.09c-.57-.08-20.26-.12-39.97-.12s-39.4.04-39.97.12c0 0-2.65 1.95-2.63 2.01c-4.35 10.69.33 21.21 4.64 25.76c2.71 2.86 4.3 5.17 3.06 7.44c-1.21 2.21-4.81 2.53-4.81 2.53s.83 2.26 2.83 3.48c1.85 1.13 4.13 1.39 5.7 1.43c0 0 6.15 8.51 22.23 8.51h17.9c16.08 0 22.23-8.51 22.23-8.51c1.57-.04 3.85-.3 5.7-1.43c2-1.22 2.83-3.48 2.83-3.48s-3.61-.32-4.82-2.53"
          ></path>
          <radialGradient
            id="notoHealthWorkerLightSkinTone1"
            cx={99.638}
            cy={45.85}
            r={23.419}
            gradientTransform="matrix(1 0 0 .4912 -21.055 59.629)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.728} stopColor="#454140" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#454140"></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTone1)"
            d="M63.99 95.79v-9.44l28.57-2.26l2.6 3.2s-6.15 8.51-22.23 8.51z"
          ></path>
          <radialGradient
            id="notoHealthWorkerLightSkinTone2"
            cx={76.573}
            cy={49.332}
            r={6.921}
            gradientTransform="matrix(-.9057 .4238 -.3144 -.6719 186.513 79.36)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.663} stopColor="#454140"></stop>
            <stop offset={1} stopColor="#454140" stopOpacity={0}></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTone2)"
            d="M95.1 83.16c-4.28-6.5 5.21-8.93 5.21-8.93l.01.01c-1.65 2.05-2.4 3.84-1.43 5.61c1.21 2.21 4.81 2.53 4.81 2.53s-4.91 4.36-8.6.78"
          ></path>
          <radialGradient
            id="notoHealthWorkerLightSkinTone3"
            cx={94.509}
            cy={68.91}
            r={30.399}
            gradientTransform="matrix(-.0746 -.9972 .8311 -.0622 33.494 157.622)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.725} stopColor="#454140" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#454140"></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTone3)"
            d="M106.62 46.65c4.25 10.35-.22 21.01-4.41 25.51c-.57.62-3.01 3.01-3.57 4.92c0 0-9.54-13.31-12.39-21.13c-.57-1.58-1.1-3.2-1.17-4.88c-.05-1.26.14-2.76.87-3.83c.89-1.31 20.16-1.7 20.16-1.7c0 .01.51 1.11.51 1.11"
          ></path>
          <radialGradient
            id="notoHealthWorkerLightSkinTone4"
            cx={44.31}
            cy={68.91}
            r={30.399}
            gradientTransform="matrix(.0746 -.9972 -.8311 -.0622 98.274 107.563)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.725} stopColor="#454140" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#454140"></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTone4)"
            d="M21.4 46.65c-4.24 10.35.23 21.01 4.41 25.5c.58.62 3.01 3.01 3.57 4.92c0 0 9.54-13.31 12.39-21.13c.58-1.58 1.1-3.2 1.17-4.88c.05-1.26-.14-2.76-.87-3.83c-.89-1.31-1.93-.96-3.44-.96c-2.88 0-15.49-.74-16.47-.74c.01.02-.76 1.12-.76 1.12"
          ></path>
          <radialGradient
            id="notoHealthWorkerLightSkinTone5"
            cx={49.439}
            cy={45.85}
            r={23.419}
            gradientTransform="matrix(-1 0 0 .4912 98.878 59.629)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.728} stopColor="#454140" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#454140"></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTone5)"
            d="M64.03 95.79v-9.44l-28.57-2.26l-2.6 3.2s6.15 8.51 22.23 8.51z"
          ></path>
          <radialGradient
            id="notoHealthWorkerLightSkinTone6"
            cx={26.374}
            cy={49.332}
            r={6.921}
            gradientTransform="matrix(.9057 .4238 .3144 -.6719 -13.024 100.635)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.663} stopColor="#454140"></stop>
            <stop offset={1} stopColor="#454140" stopOpacity={0}></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTone6)"
            d="M32.92 83.16c4.28-6.5-5.21-8.93-5.21-8.93l-.01.01c1.65 2.05 2.4 3.84 1.43 5.61c-1.21 2.21-4.81 2.53-4.81 2.53s4.91 4.36 8.6.78"
          ></path>
          <path
            fill="#edc391"
            d="M54.92 90.08v20.96c0 5.26 3.7 9.53 8.26 9.53h1.65c4.56 0 8.26-4.26 8.26-9.53V90.08z"
          ></path>
          <path fill="#81d4fa" d="m52.66 102l3.85 22H71.9l3.44-22z"></path>
          <linearGradient
            id="notoHealthWorkerLightSkinTone7"
            x1={26.655}
            x2={26.655}
            y1={11.255}
            y2={31.458}
            gradientTransform="rotate(180 52.079 64)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.335} stopColor="#e0e0e0"></stop>
            <stop offset={0.668} stopColor="#d0d0d0"></stop>
            <stop offset={0.987} stopColor="#bdbdbd"></stop>
          </linearGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTone7)"
            d="M73.12 96.17c5.92.43 8.69.94 8.69.94l3.13 7.3l-5.25 4.39l2.83 6.17l-5.58 8.99h-6.87z"
          ></path>
          <linearGradient
            id="notoHealthWorkerLightSkinTone8"
            x1={12.773}
            x2={12.773}
            y1={11.255}
            y2={31.458}
            gradientTransform="matrix(1 0 0 -1 37.757 128)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.335} stopColor="#e0e0e0"></stop>
            <stop offset={0.668} stopColor="#d0d0d0"></stop>
            <stop offset={0.987} stopColor="#bdbdbd"></stop>
          </linearGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTone8)"
            d="M54.91 96.17c-5.92.43-8.69.94-8.69.94l-3.13 7.3l5.25 4.39l-2.83 6.17l5.58 8.99h6.87z"
          ></path>
          <path
            fill="none"
            stroke="#03a9f4"
            strokeMiterlimit={10}
            strokeWidth={3}
            d="M32.94 104.33c1.57-.82 3.4-2.02 4.25-2.76c1.92-1.67 6.47-5.97 9.86-2.94c3.66 3.21-.1 8.27-1.55 10.37c-.72 1.05-1.27 2.21-1.72 3.39"
          ></path>
          <linearGradient
            id="notoHealthWorkerLightSkinTone9"
            x1={34.007}
            x2={24.6}
            y1={23.511}
            y2={12.679}
            gradientTransform="matrix(1 0 0 -1 0 128)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#757575"></stop>
            <stop offset={1}></stop>
          </linearGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTone9)"
            d="M29.79 111.35c-.49.08-1.02.29-1.54-.21c-.34-.33-.77-1.27-.65-2.08c.12-.82 1.03-1.16 2.97-1.99c1.51-.64 2.9-1.29 4.16-2.14l-1.88-2.34s-2.17 1.22-3.35 1.68c-2.09.8-4.47 1.71-4.86 4.35c-.42 2.84 1.14 4.86 2.34 5.77c.98.75 1.92 1.11 2.83 1.17c1.41.09 2.35-.83 2.35-2.25s-1.39-2.12-2.37-1.96"
          ></path>
          <linearGradient
            id="notoHealthWorkerLightSkinTonea"
            x1={42.813}
            x2={33.406}
            y1={15.863}
            y2={5.032}
            gradientTransform="matrix(1 0 0 -1 0 128)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#757575"></stop>
            <stop offset={1}></stop>
          </linearGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTonea)"
            d="M37.03 116.79c-.01.5-.14 1.05.43 1.49c.38.29 1.37.58 2.15.35c.79-.24 1-1.18 1.54-3.22c.42-1.58.86-3.06 1.52-4.43l2.58 1.52s-.9 2.32-1.18 3.56c-.49 2.19-1.05 4.67-3.61 5.43c-2.75.83-4.98-.44-6.05-1.49c-.88-.87-1.37-1.74-1.56-2.64c-.29-1.38.49-2.45 1.89-2.65s2.31 1.08 2.29 2.08"
          ></path>
          <path
            fill="#03a9f4"
            d="M55.1 93.75c-4.63.09-7.93 2.45-9.19 3.91l2.27 1.96c.03-.03 2.45-2.74 6.92-2.86zm31.16 8.73c-2.43-5.47-6.19-7.55-8.21-8.3c-1.85-.69-3.65-.97-4.97-1.08v3.01c1.08.1 2.49.34 3.93.88c1.58.59 4.53 2.24 6.51 6.71c2.78 6.26 3.48 7.89 3.49 7.89l2.75-1.19s-.7-1.62-3.5-7.92"
          ></path>
          <linearGradient
            id="notoHealthWorkerLightSkinToneb"
            x1={87.856}
            x2={93.231}
            y1={18.892}
            y2={7.517}
            gradientTransform="matrix(1 0 0 -1 0 128)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#757575"></stop>
            <stop offset={1}></stop>
          </linearGradient>
          <circle
            cx={90.2}
            cy={114.06}
            r={7}
            fill="url(#notoHealthWorkerLightSkinToneb)"
          ></circle>
          <circle cx={90.2} cy={114.06} r={4} fill="#9e9e9e"></circle>
          <path
            fill="#edc391"
            d="M91.33 50.43H36.67c-5.89 0-10.71 5.14-10.71 11.41s4.82 11.41 10.71 11.41h54.65c5.89 0 10.71-5.14 10.71-11.41s-4.81-11.41-10.7-11.41"
          ></path>
          <path
            fill="#f9ddbd"
            d="M64 11.07c-17.4 0-33.52 18.61-33.52 45.4c0 26.64 16.61 39.81 33.52 39.81S97.52 83.1 97.52 56.46c0-26.78-16.12-45.39-33.52-45.39"
          ></path>
          <path
            fill="#454140"
            d="M54.8 49.82c-.93-1.23-3.07-3.01-7.23-3.01s-6.31 1.79-7.23 3.01c-.41.54-.31 1.17-.02 1.55c.26.35 1.04.68 1.9.39s2.54-1.16 5.35-1.18c2.81.02 4.49.89 5.35 1.18s1.64-.03 1.9-.39c.28-.38.39-1.01-.02-1.55m32.87 0c-.93-1.23-3.07-3.01-7.23-3.01s-6.31 1.79-7.23 3.01c-.41.54-.31 1.17-.02 1.55c.26.35 1.04.68 1.9.39s2.54-1.16 5.35-1.18c2.81.02 4.49.89 5.35 1.18s1.64-.03 1.9-.39c.28-.38.39-1.01-.02-1.55"
          ></path>
          <g fill="#312d2d">
            <ellipse cx={47.56} cy={58.81} rx={4.93} ry={5.1}></ellipse>
            <ellipse cx={80.44} cy={58.81} rx={4.93} ry={5.1}></ellipse>
          </g>
          <path
            fill="#444"
            d="M72.42 76.14c-3.18 1.89-13.63 1.89-16.81 0c-1.83-1.09-3.7.58-2.94 2.24c.75 1.63 6.44 5.42 11.37 5.42s10.55-3.79 11.3-5.42c.75-1.66-1.09-3.33-2.92-2.24"
          ></path>
          <path
            fill="#dba689"
            d="M67.86 68.06c-.11-.04-.21-.07-.32-.08h-7.08c-.11.01-.22.04-.32.08c-.64.26-.99.92-.69 1.63s1.71 2.69 4.55 2.69s4.25-1.99 4.55-2.69c.3-.71-.05-1.37-.69-1.63"
          ></path>
          <path
            fill="#312d2d"
            d="M104.07 25.11c-2.44-3.69-7.91-8.64-12.82-8.97c-.79-4.72-5.84-8.72-10.73-10.27c-13.23-4.19-21.84.51-26.46 3.03c-.96.52-7.17 3.97-11.51 1.5c-2.72-1.55-2.67-5.74-2.67-5.74s-8.52 3.25-5.61 12.3c-2.93.12-6.77 1.36-8.8 5.47c-2.42 4.9-1.56 8.99-.86 10.95c-2.52 2.14-5.69 6.69-3.52 12.6c1.64 4.45 8.17 6.5 8.17 6.5c-.46 8.01 1.03 12.94 1.82 14.93c.14.35.63.32.72-.04c.99-3.97 4.37-17.8 4.03-20.21c0 0 11.35-2.25 22.17-10.22c2.2-1.62 4.59-3 7.13-4.01c13.59-5.41 16.43 3.82 16.43 3.82s9.42-1.81 12.26 11.27c1.07 4.9 1.79 12.75 2.4 18.24c.04.39.57.47.72.11c.95-2.18 2.85-6.5 3.3-10.91c.16-1.55 4.34-3.6 6.14-10.26c2.41-8.88-.54-17.42-2.31-20.09"
          ></path>
          <radialGradient
            id="notoHealthWorkerLightSkinTonec"
            cx={82.019}
            cy={84.946}
            r={35.633}
            gradientTransform="matrix(.3076 .9515 .706 -.2282 -3.184 -15.605)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.699} stopColor="#454140" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#454140"></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTonec)"
            d="M100.22 55.5c.16-1.55 4.34-3.6 6.14-10.26c.19-.71.35-1.43.5-2.15c1.46-8.09-1.16-15.52-2.79-17.98c-2.26-3.41-7.1-7.89-11.69-8.81c-.4-.05-.79-.1-1.16-.12c0 0 .33 2.15-.54 3.86c-1.12 2.22-3.41 2.75-3.41 2.75c11.97 11.98 11.12 22 12.95 32.71"
          ></path>
          <radialGradient
            id="notoHealthWorkerLightSkinToned"
            cx={47.28}
            cy={123.8}
            r={9.343}
            gradientTransform="matrix(.8813 .4726 .5603 -1.045 -63.752 111.228)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.58} stopColor="#454140"></stop>
            <stop offset={1} stopColor="#454140" stopOpacity={0}></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinToned)"
            d="M56.95 7.39c-1.1.53-2.06 1.06-2.9 1.51c-.96.52-7.17 3.97-11.51 1.5c-2.67-1.52-2.67-5.58-2.67-5.72c-1.23 1.57-4.95 12.78 5.93 13.53c4.69.32 7.58-3.77 9.3-7.23c.62-1.26 1.59-3.1 1.85-3.59"
          ></path>
          <radialGradient
            id="notoHealthWorkerLightSkinTonee"
            cx={159.055}
            cy={62.862}
            r={28.721}
            gradientTransform="matrix(-.9378 -.3944 -.2182 .5285 231.04 50.678)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.699} stopColor="#454140" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#454140"></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTonee)"
            d="M79.16 5.47c7.32 1.98 10.89 5.71 12.08 10.68c.35 1.46.77 15.08-25.23-.4c-9.67-5.76-7.03-9.36-5.9-9.77c4.42-1.6 10.85-2.73 19.05-.51"
          ></path>
          <radialGradient
            id="notoHealthWorkerLightSkinTonef"
            cx={43.529}
            cy={115.276}
            r={8.575}
            gradientTransform="matrix(1 0 0 -1.2233 0 153.742)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.702} stopColor="#454140" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#454140"></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinTonef)"
            d="M39.84 4.68c-.01.01-.03.01-.06.03h-.01c-.93.39-8.24 3.78-5.51 12.25l7.78 1.25c-6.89-6.98-2.17-13.55-2.17-13.55s-.02.01-.03.02"
          ></path>
          <radialGradient
            id="notoHealthWorkerLightSkinToneg"
            cx={42.349}
            cy={100.139}
            r={16.083}
            gradientTransform="matrix(-.9657 -.2598 -.2432 .9037 107.598 -51.632)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.66} stopColor="#454140" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#454140"></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinToneg)"
            d="m39.07 17.73l-4.81-.77c-.19 0-.83.06-1.18.11c-2.71.38-5.9 1.78-7.63 5.36c-1.86 3.86-1.81 7.17-1.3 9.38c.15.74.45 1.58.45 1.58s2.38-2.26 8.05-2.41z"
          ></path>
          <radialGradient
            id="notoHealthWorkerLightSkinToneh"
            cx={38.533}
            cy={84.609}
            r={16.886}
            gradientTransform="matrix(.9907 .1363 .1915 -1.3921 -15.841 155.923)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.598} stopColor="#454140" stopOpacity={0}></stop>
            <stop offset={1} stopColor="#454140"></stop>
          </radialGradient>
          <path
            fill="url(#notoHealthWorkerLightSkinToneh)"
            d="M24.37 33.58c-2.37 2.1-5.56 6.79-3.21 12.61c1.77 4.39 8.09 6.29 8.09 6.29c0 .02 1.26.4 1.91.4l1.48-21.9c-3.03 0-5.94.91-7.82 2.22c.03.03-.46.35-.45.38"
          ></path>
        </svg>
      );
    case "finance":
      return (
        <svg
          {...iconProps}
          aria-label="Finance Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-12 h-12"
        >
          <defs>
            <linearGradient
              id="finance-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <path
            fill="url(#finance-gradient)"
            d="M54 20H10c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V22c0-1.1-.9-2-2-2zm-2 20H12V24h40v16z"
          />
          <path
            fill="url(#finance-gradient)"
            d="M32 28c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm0 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
          />
          <rect
            x="16"
            y="30"
            width="4"
            height="4"
            fill="url(#finance-gradient)"
          />
          <rect
            x="44"
            y="30"
            width="4"
            height="4"
            fill="url(#finance-gradient)"
          />
        </svg>
      );

    case "education":
      return (
        <svg
          {...iconProps}
          aria-label="Education Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-12 h-12"
        >
          <defs>
            <linearGradient
              id="edu-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
          </defs>
          <path
            fill="url(#edu-gradient)"
            d="M32 10L8 22l24 12 20-10v14h4V22L32 10zm0 28L16 30v8c0 5.5 7.2 10 16 10s16-4.5 16-10v-8l-16 8z"
          />
        </svg>
      );

    case "real-estate":
      return (
        <svg
          {...iconProps}
          aria-label="Real Estate Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-12 h-12"
        >
          <defs>
            <linearGradient
              id="real-estate-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#C026D3" />
            </linearGradient>
          </defs>
          <path
            fill="url(#real-estate-gradient)"
            d="M32 8L10 24v32h44V24L32 8zm18 44H14V25.3L32 12l18 13.3V52z"
          />
          <path
            fill="url(#real-estate-gradient)"
            d="M26 36h12v16H26zm16-8h4v24h-4zm-24 0h4v24h-4z"
          />
        </svg>
      );

    case "hospitality":
      return (
        <svg
          {...iconProps}
          aria-label="Hospitality Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-12 h-12"
        >
          <defs>
            <linearGradient
              id="hospitality-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#DB2777" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <path
            fill="url(#hospitality-gradient)"
            d="M54 24H42v-8H22v8H10a2 2 0 00-2 2v24h48V26a2 2 0 00-2-2zM26 20h12v4H26v-4zm24 26H14V28h36v18z"
          />
          <path
            fill="url(#hospitality-gradient)"
            d="M32 32c3.3 0 6 2.7 6 6H26c0-3.3 2.7-6 6-6z"
          />
        </svg>
      );
    case "microservices":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={100}
          viewBox="0 0 75 75"
          aria-label="Microservices Icon"
          role="img"
        >
          <defs>
            <clipPath id="a">
              <path d="M0 0h.824v1H0Zm0 0" />
            </clipPath>
            <clipPath id="b">
              <path d="M0 0h.824v1.5H0Zm0 0" />
            </clipPath>
            <clipPath id="c">
              <path d="M0 0h.824v1H0Zm0 0" />
            </clipPath>
            <clipPath id="d">
              <path d="M0 1h.824v.5H0Zm0 0" />
            </clipPath>
            <clipPath id="e">
              <path d="M0 0h.824v1H0Zm0 0" />
            </clipPath>
            <clipPath id="f">
              <path d="M0 1h.824v.5H0Zm0 0" />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path d="m.39.402.032.032v.004l.055-.06.066.017C.555.398.559.395.566.39L.625.332C.629.324.633.316.629.309L.609.23A.017.017 0 0 0 .594.215L.516.195C.508.191.5.195.492.2L.434.258C.43.266.426.273.43.28l.015.067Zm.126-.16.05.016.016.05-.039.04-.05-.016-.016-.05Zm0 0" />
          </g>
          <g clipPath="url(#b)">
            <path d="M.39.941.364.914A.25.25 0 0 0 .395.84h.039C.477.84.496.816.496.773V.727C.496.684.476.66.434.66h-.04a.25.25 0 0 0-.03-.074L.39.559C.42.527.418.496.387.469L.355.438C.328.405.297.402.265.433L.239.46A.25.25 0 0 0 .164.43V.39C.164.349.141.329.098.329H.05c-.043 0-.063.02-.067.063V.43A.25.25 0 0 0-.09.46L-.117.435C-.148.402-.18.406-.207.438l-.031.03c-.032.028-.035.06-.004.09l.027.028A.25.25 0 0 0-.246.66h-.04c-.042 0-.062.024-.062.067v.046c0 .043.02.067.063.067h.039a.25.25 0 0 0 .031.074l-.027.027c-.031.032-.028.063.004.09l.031.032c.027.03.059.035.09.003l.027-.027a.25.25 0 0 0 .074.031v.04c.004.042.024.062.067.062h.047c.043 0 .066-.02.066-.063V1.07a.25.25 0 0 0 .074-.03l.028.026c.03.032.062.028.09-.004l.03-.03c.032-.028.036-.06.005-.09ZM.356 1l-.03.031c-.009.008-.016.008-.028.004L.257.992C.25.984.239.984.228.992a.368.368 0 0 1-.09.04c-.012 0-.02.007-.02.019v.058c0 .008-.008.016-.02.016H.052c-.012 0-.02-.008-.02-.016v-.058c0-.012-.008-.02-.02-.02a.368.368 0 0 1-.09-.039c-.01-.008-.023-.008-.03 0l-.04.043c-.011.004-.019.004-.027-.004L-.207 1C-.215.992-.215.984-.211.973l.043-.04c.008-.007.008-.019 0-.03a.254.254 0 0 1-.035-.09C-.207.8-.215.792-.227.792h-.058C-.297.789-.301.785-.301.773V.727c0-.012.004-.016.016-.02h.058c.012 0 .02-.008.024-.02a.254.254 0 0 1 .035-.09c.008-.011.008-.023 0-.03l-.043-.04C-.215.516-.215.507-.207.5l.031-.031C-.168.46-.16.46-.148.465l.039.043c.007.008.02.008.03 0a.368.368 0 0 1 .09-.04c.012 0 .02-.007.02-.019V.391c0-.008.008-.016.02-.016h.047c.011 0 .02.004.02.016v.058c0 .012.007.02.019.02a.368.368 0 0 1 .09.039c.011.008.023.008.03 0l.04-.043C.309.46.317.46.324.469L.355.5C.363.508.363.516.36.527l-.043.04C.31.573.31.585.316.596a.368.368 0 0 1 .04.09c0 .012.007.02.019.02h.059c.011.004.015.008.015.02v.046C.45.785.445.79.434.793H.375c-.012 0-.02.008-.02.02a.368.368 0 0 1-.039.09C.31.913.31.925.316.932l.043.04C.363.984.363.993.355 1Zm0 0" />
          </g>
          <g clipPath="url(#c)">
            <path d="M.074.574c-.117 0-.176.059-.176.176 0 .117.059.176.176.176C.191.926.25.867.25.75.25.633.191.574.074.574Zm0 .305C-.012.879-.055.836-.055.75c0-.086.043-.129.13-.129.085 0 .128.043.128.129C.203.836.16.879.074.879ZM-.008.168l.059.035v.078h.047V.203L.156.168a.021.021 0 0 0 .012-.02V.066C.168.055.164.051.156.046L.086.005a.025.025 0 0 0-.023 0l-.07.043C-.017.05-.02.055-.02.067v.081c0 .008.004.016.012.02Zm.035-.09L.074.051l.047.027v.055L.074.16.027.133Zm0 0" />
          </g>
          <g clipPath="url(#d)">
            <path d="m.156 1.332-.058-.035v-.078H.05v.078l-.059.035a.021.021 0 0 0-.012.02v.082c0 .011.004.015.012.02l.07.042a.025.025 0 0 0 .024 0l.07-.043c.008-.004.012-.008.012-.02v-.081a.021.021 0 0 0-.012-.02Zm-.035.09-.047.027-.047-.027v-.055l.047-.027.047.027Zm0 0" />
          </g>
          <g clipPath="url(#e)">
            <path d="m.813.688-.07-.04a.025.025 0 0 0-.024 0l-.07.04C.64.69.636.699.636.71v.016H.543v.046h.094V.79c0 .012.004.02.011.023l.07.04a.025.025 0 0 0 .024 0l.07-.04C.82.81.825.801.825.79V.711C.824.699.82.69.813.688Zm-.036.09L.73.804.684.777V.723L.73.695l.047.028Zm0 0" />
          </g>
          <g clipPath="url(#f)">
            <path d="M.566 1.11C.56 1.104.555 1.101.543 1.104l-.066.016-.055-.058v.003l-.031.032.054.054-.015.067c-.004.008 0 .015.004.023l.058.059c.008.004.016.008.024.004l.078-.02a.017.017 0 0 0 .015-.015l.02-.079c.004-.007 0-.015-.004-.023Zm0 .132-.05.016-.04-.04.016-.05.051-.016.039.04Zm0 0" />
          </g>
          <path d="M37.508 28.605c-4.906 0-8.895 4-8.895 8.918 0 4.918 3.989 8.918 8.895 8.918s8.894-4 8.894-8.918c0-4.918-3.988-8.918-8.894-8.918Zm0 15.97c-3.88 0-7.035-3.16-7.035-7.052 0-3.89 3.156-7.05 7.035-7.05s7.035 3.164 7.035 7.05c0 3.887-3.156 7.051-7.035 7.051Zm37.262-7.509-3.145-5.625h-.004a.931.931 0 0 0-.809-.477h-6.105a.92.92 0 0 0-.809.477L61.02 36.59h-4.79v-1.524a1.83 1.83 0 0 0-1.457-1.8l-3.203-.692c-.18-.511-.39-1.02-.629-1.515l1.782-2.762a1.83 1.83 0 0 0-.246-2.305l-1.07-1.078 3.386-3.398 5.664 1.601a.942.942 0 0 0 .254.031c.242 0 .48-.093.656-.273l4.317-4.324a.935.935 0 0 0 .242-.895l-.008-.02h.004L64.18 11.43a.931.931 0 0 0-.645-.645L57.344 9.04c-.008 0-.012-.004-.02-.004a.918.918 0 0 0-.89.242l-4.317 4.325c-.238.238-.328.59-.238.914l1.594 5.68-3.387 3.394-1.074-1.074a1.823 1.823 0 0 0-2.301-.246l-2.754 1.785c-.492-.239-.996-.45-1.512-.63l-.687-3.214a1.828 1.828 0 0 0-1.801-1.457h-1.52v-4.805l5.137-2.886a.93.93 0 0 0 .473-.813V4.137a.94.94 0 0 0-.477-.817L37.96.164a.942.942 0 0 0-.91 0L31.442 3.32c-.003.004-.007.008-.015.008a.94.94 0 0 0-.461.809v6.117c0 .336.183.648.476.812l5.133 2.887v4.8H35.06a1.83 1.83 0 0 0-1.801 1.458l-.688 3.215c-.511.18-1.015.39-1.511.629l-2.754-1.785a1.823 1.823 0 0 0-2.301.246l-1.074 1.078-3.387-3.399 1.594-5.68a.933.933 0 0 0-.239-.91l-4.316-4.328a.92.92 0 0 0-.89-.242c-.008 0-.012.004-.02.008v-.004l-6.192 1.746a.931.931 0 0 0-.644.645l-1.742 6.207h.004l-.008.02c-.082.32.012.66.242.894l4.316 4.324c.176.18.415.273.657.273a.942.942 0 0 0 .254-.03l5.664-1.602 3.386 3.398-1.07 1.074a1.835 1.835 0 0 0-.246 2.309l1.781 2.762c-.238.492-.449 1-.629 1.515l-3.207.692a1.829 1.829 0 0 0-1.453 1.8v1.524h-4.793l-2.879-5.149a.93.93 0 0 0-.812-.472H4.203a.933.933 0 0 0-.805.46c-.003.005-.003.012-.007.016L.242 37.07a.942.942 0 0 0 0 .91l3.149 5.625c.004.008.004.012.007.016.168.29.473.465.805.465h6.102a.934.934 0 0 0 .812-.477l2.88-5.148h4.788v1.523c0 .88.602 1.621 1.457 1.805l3.207.688c.176.511.387 1.02.625 1.515l-1.781 2.762a1.834 1.834 0 0 0 .246 2.305l1.074 1.078-3.386 3.394-5.668-1.597a.933.933 0 0 0-.91.238l-4.317 4.324a.944.944 0 0 0-.242.899c.004.003.004.011.008.015h-.004l1.742 6.207c.09.313.332.559.644.649l6.192 1.746v-.004l.02.008a.932.932 0 0 0 .89-.242l4.316-4.329a.933.933 0 0 0 .239-.91l-1.594-5.683 3.387-3.395 1.074 1.074a1.818 1.818 0 0 0 2.3.246l2.755-1.785c.492.238.996.45 1.511.63l.688 3.214c.187.86.926 1.46 1.8 1.46h1.52v4.802l-5.137 2.886a.937.937 0 0 0-.472.817v6.117c0 .328.176.637.46.805.005.004.012.004.016.007l5.61 3.157a.94.94 0 0 0 .457.12.964.964 0 0 0 .457-.12l5.61-3.157c.003-.003.01-.003.015-.007a.938.938 0 0 0 .46-.805v-6.117a.94.94 0 0 0-.476-.817l-5.14-2.89v-4.801h1.519c.875 0 1.617-.602 1.8-1.457l.688-3.215a15.26 15.26 0 0 0 1.512-.629l2.754 1.785c.734.477 1.68.375 2.3-.246l1.075-1.078 3.387 3.399-1.594 5.68c-.09.323 0 .671.238.91l4.317 4.328a.932.932 0 0 0 .89.242c.008 0 .012-.004.02-.008v.004l6.191-1.746a.939.939 0 0 0 .645-.645l1.742-6.21h-.004c.004-.005.004-.009.008-.016a.944.944 0 0 0-.242-.895l-4.317-4.328a.933.933 0 0 0-.91-.238l-5.668 1.601-3.387-3.398 1.075-1.074c.617-.621.718-1.57.246-2.309l-1.782-2.762c.235-.492.446-.996.625-1.515l3.207-.692a1.832 1.832 0 0 0 1.457-1.8v-1.524h4.79l2.878 5.148a.93.93 0 0 0 .813.473h6.102a.933.933 0 0 0 .804-.46c.004-.005.004-.013.008-.016l3.148-5.625a.932.932 0 0 0-.003-.91ZM60.438 21.172 56.3 20.004l2.804-2.813 4.137 1.164Zm3.242-4.629-4.09-1.156-1.153-4.102 4.094 1.152Zm-7.055-4.82 1.164 4.148-2.805 2.813-1.164-4.149Zm-14.438-2.02-3.75 2.11V7.835l3.75-2.11Zm-4.68-7.652 3.708 2.086-3.707 2.082L33.8 4.133Zm-4.679 3.676 3.75 2.109v3.976l-3.75-2.105Zm-11.633 8.808-1.164 4.149-2.804-2.813 1.164-4.148Zm-8.71-2.098 4.093-1.152-1.152 4.102-4.09 1.156Zm2.093 8.735-2.805-2.817 4.137-1.164 2.805 2.813Zm-4.816 11.66 2.101 3.758H7.895l-2.102-3.758Zm-5.559.977 2.078 3.714-2.078 3.715-2.082-3.715Zm5.559 8.406H5.793l2.102-3.758h3.964Zm4.816 11.66 4.137 1.168-2.805 2.812-4.137-1.167Zm-3.242 4.629 4.09 1.152 1.152 4.106-4.094-1.157Zm7.055 4.82-1.164-4.148 2.804-2.813 1.164 4.149Zm14.437 2.016 3.75-2.106v3.977l-3.75 2.105Zm4.68 7.656L33.8 70.91l3.707-2.082 3.707 2.082Zm4.68-3.676-3.75-2.11v-3.976l3.75 2.106Zm11.632-8.808 1.164-4.149 2.805 2.813-1.164 4.148Zm8.711 2.093-4.093 1.157 1.152-4.106 4.09-1.152Zm.711-5.917-4.137 1.167-2.804-2.812 4.136-1.168ZM54.367 39.96l-3.203.691a1.828 1.828 0 0 0-1.348 1.192c-.16.457-.347.906-.558 1.343a1.848 1.848 0 0 0 .113 1.805l1.777 2.758-3.441 3.45-2.75-1.782a1.813 1.813 0 0 0-1.797-.113c-.437.21-.89.398-1.34.558a1.819 1.819 0 0 0-1.191 1.352l-.688 3.21h-4.867l-.687-3.21a1.834 1.834 0 0 0-1.188-1.356 12.096 12.096 0 0 1-1.34-.554 1.831 1.831 0 0 0-1.8.113l-2.75 1.781-3.442-3.449 1.778-2.758a1.838 1.838 0 0 0 .113-1.804c-.211-.438-.399-.891-.559-1.344a1.819 1.819 0 0 0-1.351-1.192l-3.2-.691v-4.879l3.2-.687a1.833 1.833 0 0 0 1.351-1.192c.16-.457.348-.906.555-1.344a1.847 1.847 0 0 0-.11-1.804l-1.777-2.758 3.438-3.45 2.754 1.782a1.823 1.823 0 0 0 1.796.113c.438-.21.887-.398 1.34-.558a1.831 1.831 0 0 0 1.192-1.356l.687-3.21h4.867l.688 3.21c.133.633.578 1.14 1.191 1.356.45.156.903.343 1.34.558a1.823 1.823 0 0 0 1.797-.113l2.754-1.781 3.437 3.449-1.777 2.758a1.837 1.837 0 0 0-.11 1.804c.208.438.395.887.555 1.344.215.61.72 1.055 1.352 1.192l3.203.69v4.876Zm10.887-7.129h3.969L67.12 36.59h-3.969Zm0 9.383-2.102-3.758h3.97l2.1 3.758Zm5.558-.977-2.078-3.715 2.079-3.714 2.082 3.714Zm0 0" />
        </svg>
      );
    case "monolithic":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 75 75"
          aria-label="Monolithic Icon"
          role="img"
        >
          {/* <!-- Main Icon --> */}
          <path
            fill="#000000"
            d="M38.578 9.398h-2.336V7.063h2.336zm31.438 30.399c.02.09.043.195.043.3v10.044c0 .457-.27.87-.684 1.066l-8.16 3.762a1.232 1.232 0 0 1-.485.113c-.105 0-.199-.02-.289-.043-.03-.008-.054-.02-.086-.031a.489.489 0 0 1-.113-.04l-8.156-3.761a1.35 1.35 0 0 1-.29-.184l-5.108 2.926c.765.645 1.218 1.414 1.218 2.305 0 .21-.031.406-.07.605.039.188.07.371.07.57v3.512c0 .207-.031.403-.07.602.039.187.07.371.07.57v3.512c0 .207-.031.402-.07.602.039.187.07.375.07.57v3.512c0 3.074-5.273 4.683-10.496 4.683-5.222 0-10.496-1.61-10.496-4.683v-3.512c0-.195.031-.383.074-.57a2.817 2.817 0 0 1-.074-.602v-3.512c0-.199.031-.383.074-.57a2.817 2.817 0 0 1-.074-.602V57.43c0-.2.031-.383.074-.57a2.822 2.822 0 0 1-.074-.606c0-.727.313-1.379.828-1.941l-4.808-3.239c-.063.04-.125.094-.188.125l-8.156 3.758a1.165 1.165 0 0 1-.488.114c-.102 0-.196-.02-.29-.04-.03-.011-.05-.023-.082-.031a.671.671 0 0 1-.113-.043l-8.16-3.758a1.165 1.165 0 0 1-.68-1.07V40.098c0-.106.02-.2.04-.301.011-.024.011-.055.019-.074a1.165 1.165 0 0 1 .312-.489c.062-.055.133-.094.207-.137.008-.012.02-.02.031-.02l8.156-3.761c.313-.145.665-.145.973 0l7.395 3.406 6.109-3.063V30.73c0-.105.023-.199.043-.304a1.165 1.165 0 0 1 .332-.559c.062-.055.132-.094.207-.137.007-.012.02-.02.03-.02l7.485-3.45v-5.097h-3.824l.879-3.511h-7.54V.032h23.317V17.59h-7.539l.88 3.512H38.59v5.097l7.488 3.45a1.165 1.165 0 0 1 .684 1.069v4.88l6.11 3.066 7.394-3.406c.309-.145.66-.145.973 0l8.156 3.758a1.165 1.165 0 0 1 .508.457c.043.074.082.156.105.238 0 .031.008.055.02.086zM28.082 15.254h5.793l.29-1.172h6.483l.29 1.172h5.789V2.375H28.082zm7.324 3.512h4.012l-.29-1.176-.288-1.172h-2.844l-.293 1.172zm19.957 21.332l2.532 1.172 1.667.77 1.168.538 1.168-.539 1.664-.77 2.536-1.171-2.547-1.176-2.82-1.309-2.825 1.309zm-1.625 9.28l.375.169 5.457 2.512v-7.454l-5.832-2.69zm8.16 2.692l5.832-2.691v-7.453l-5.832 2.687zM32.043 30.73l2.535 1.172 1.664.77 1.168.527 1.168-.539 1.668-.77 2.531-1.171-2.543-1.176-2.824-1.297-2.82 1.309zm12.36 1.825l-5.833 2.691v7.457l5.832-2.691zm-13.981 4.5v2.957l5.832 2.691v-7.457l-5.832-2.691zm-9.328 11.797v-6.938l-5.832 2.691v7.454l5.43-2.5.402-.188zM8.727 40.098l2.53 1.172 1.669.77 1.168.538 1.168-.539 1.664-.77 2.535-1.171-2.547-1.176-2.82-1.309-2.824 1.309zm-1.633 9.28l5.832 2.692v-7.457l-5.832-2.687z"
          />

          {/* <!-- Bottom section --> */}
          <path
            fill="#ffffff"
            d="M45.57 68.646c-2.027 1.082-5.097 1.64-8.16 1.64-3.058 0-6.133-.558-8.156-1.64v1.64c0 .676 2.863 2.348 8.156 2.348 5.305 0 8.16-1.66 8.16-2.348zm-1.468-13.582c-.672-.301-1.57-.594-2.68-.813a21.358 21.358 0 0 0-4.012-.363c-2.11 0-3.816.261-5.129.625a9.68 9.68 0 0 0-1.562.55c-.41.188-.742.372-.992.56-.309.237-.473.456-.473.612 0 .282.504.739 1.465 1.176.726.32 1.718.633 2.96.86 1.063.187 2.305.312 3.731.312.434 0 .848-.012 1.242-.031 2.45-.125 4.293-.614 5.45-1.133.96-.434 1.468-.883 1.468-1.172 0-.25-.383-.633-1.136-1.008a1.337 1.337 0 0 0-.332-.175zm1.468 8.898a9.802 9.802 0 0 1-1.015.469c-1.965.777-4.57 1.172-7.153 1.172-2.586 0-5.191-.395-7.156-1.172a9.223 9.223 0 0 1-1.004-.47v1.642c0 .28.508.738 1.469 1.175 1.344.602 3.598 1.172 6.691 1.172 3.09 0 5.344-.558 6.688-1.172.965-.437 1.469-.882 1.469-1.175V63.96zm0-4.684a9.802 9.802 0 0 1-1.015.47c-1.965.776-4.57 1.171-7.153 1.171-2.586 0-5.191-.395-7.156-1.172a9.223 9.223 0 0 1-1.004-.469v1.641c0 .281.508.738 1.469 1.176 1.344.601 3.598 1.172 6.691 1.172 3.09 0 5.344-.559 6.688-1.172.965-.438 1.469-.883 1.469-1.176v-1.64zm5.832-10.75v-7.965l-4.664-2.335v2.535c0 .457-.27.87-.683 1.058l-8.157 3.758a1.165 1.165 0 0 1-.488.106c-.101 0-.195-.02-.289-.043-.031-.008-.05-.02-.082-.02-.043-.012-.074-.02-.113-.043l-8.16-3.758a1.164 1.164 0 0 1-.684-1.058v-2.535l-4.66 2.336v8.019l6.441 4.309c2.004-.883 4.785-1.34 7.547-1.34 2.461 0 4.934.363 6.867 1.07zm0-20.394a3.506 3.506 0 0 1 3.496-3.512h11.653c1.933 0 3.496 1.578 3.496 3.512 0 1.93-1.57 3.512-3.496 3.512H54.898a3.506 3.506 0 0 1-3.496-3.512zm2.336 0c0 .644.528 1.172 1.168 1.172h11.657c.64 0 1.167-.52 1.167-1.172 0-.645-.527-1.176-1.168-1.176H54.898c-.64 0-1.16.531-1.16 1.176zm-30.316 3.512v-2.348h-8.16v2.348zm-10.496-2.34h-8.16v2.347h8.16zm10.496-4.684H4.766v2.336h18.656z"
          />
        </svg>
      );
    case "event-driven":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={100}
          height={100}
          viewBox="0 0 75 75"
          aria-label="Event Driven Icon"
          role="img"
        >
          <defs>
            <clipPath id="a">
              <path d="M0 0h.824v1H0Zm0 0" />
            </clipPath>
            <clipPath id="b">
              <path d="M0 0h.824v1.5H0Zm0 0" />
            </clipPath>
            <clipPath id="c">
              <path d="M0 0h.824v1H0Zm0 0" />
            </clipPath>
            <clipPath id="d">
              <path d="M0 1h.824v.5H0Zm0 0" />
            </clipPath>
            <clipPath id="e">
              <path d="M0 0h.824v1H0Zm0 0" />
            </clipPath>
            <clipPath id="f">
              <path d="M0 1h.824v.5H0Zm0 0" />
            </clipPath>
            <clipPath id="g">
              <path d="M18 38h29v36.25H18Zm0 0" />
            </clipPath>
            <clipPath id="h">
              <path d="M.676 0h74.25v38H.676Zm0 0" />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path d="m.39.402.032.032v.004l.055-.06.066.017C.555.398.559.395.566.39L.625.332C.629.324.633.316.629.309L.609.23A.017.017 0 0 0 .594.215L.516.195C.508.191.5.195.492.2L.434.258C.43.266.426.273.43.28l.015.067Zm.126-.16.05.016.016.05-.039.04-.05-.016-.016-.05Zm0 0" />
          </g>
          <g clipPath="url(#b)">
            <path d="M.39.941.364.914A.25.25 0 0 0 .395.84h.039C.477.84.496.816.496.773V.727C.496.684.476.66.434.66h-.04a.25.25 0 0 0-.03-.074L.39.559C.42.527.418.496.387.469L.355.438C.328.405.297.402.265.433L.239.46A.25.25 0 0 0 .164.43V.39C.164.349.141.329.098.329H.05c-.043 0-.063.02-.067.063V.43A.25.25 0 0 0-.09.46L-.117.435C-.148.402-.18.406-.207.438l-.031.03c-.032.028-.035.06-.004.09l.027.028A.25.25 0 0 0-.246.66h-.04c-.042 0-.062.024-.062.067v.046c0 .043.02.067.063.067h.039a.25.25 0 0 0 .031.074l-.027.027c-.031.032-.028.063.004.09l.031.032c.027.03.059.035.09.003l.027-.027a.25.25 0 0 0 .074.031v.04c.004.042.024.062.067.062h.047c.043 0 .066-.02.066-.063V1.07a.25.25 0 0 0 .074-.03l.028.026c.03.032.062.028.09-.004l.03-.03c.032-.028.036-.06.005-.09ZM.356 1l-.03.031c-.009.008-.016.008-.028.004L.257.992C.25.984.239.984.228.992a.368.368 0 0 1-.09.04c-.012 0-.02.007-.02.019v.058c0 .008-.008.016-.02.016H.052c-.012 0-.02-.008-.02-.016v-.058c0-.012-.008-.02-.02-.02a.368.368 0 0 1-.09-.039c-.01-.008-.023-.008-.03 0l-.04.043c-.011.004-.019.004-.027-.004L-.207 1C-.215.992-.215.984-.211.973l.043-.04c.008-.007.008-.019 0-.03a.254.254 0 0 1-.035-.09C-.207.8-.215.792-.227.792h-.058C-.297.789-.301.785-.301.773V.727c0-.012.004-.016.016-.02h.058c.012 0 .02-.008.024-.02a.254.254 0 0 1 .035-.09c.008-.011.008-.023 0-.03l-.043-.04C-.215.516-.215.507-.207.5l.031-.031C-.168.46-.16.46-.148.465l.039.043c.007.008.02.008.03 0a.368.368 0 0 1 .09-.04c.012 0 .02-.007.02-.019V.391c0-.008.008-.016.02-.016h.047c.011 0 .02.004.02.016v.058c0 .012.007.02.019.02a.368.368 0 0 1 .09.039c.011.008.023.008.03 0l.04-.043C.309.46.317.46.324.469L.355.5C.363.508.363.516.36.527l-.043.04C.31.573.31.585.316.596a.368.368 0 0 1 .04.09c0 .012.007.02.019.02h.059c.011.004.015.008.015.02v.046C.45.785.445.79.434.793H.375c-.012 0-.02.008-.02.02a.368.368 0 0 1-.039.09C.31.913.31.925.316.932l.043.04C.363.984.363.993.355 1Zm0 0" />
          </g>
          <g clipPath="url(#c)">
            <path d="M.074.574c-.117 0-.176.059-.176.176 0 .117.059.176.176.176C.191.926.25.867.25.75.25.633.191.574.074.574Zm0 .305C-.012.879-.055.836-.055.75c0-.086.043-.129.13-.129.085 0 .128.043.128.129C.203.836.16.879.074.879ZM-.008.168l.059.035v.078h.047V.203L.156.168a.021.021 0 0 0 .012-.02V.066C.168.055.164.051.156.046L.086.005a.025.025 0 0 0-.023 0l-.07.043C-.017.05-.02.055-.02.067v.081c0 .008.004.016.012.02Zm.035-.09L.074.051l.047.027v.055L.074.16.027.133Zm0 0" />
          </g>
          <g clipPath="url(#d)">
            <path d="m.156 1.332-.058-.035v-.078H.05v.078l-.059.035a.021.021 0 0 0-.012.02v.082c0 .011.004.015.012.02l.07.042a.025.025 0 0 0 .024 0l.07-.043c.008-.004.012-.008.012-.02v-.081a.021.021 0 0 0-.012-.02Zm-.035.09-.047.027-.047-.027v-.055l.047-.027.047.027Zm0 0" />
          </g>
          <g clipPath="url(#e)">
            <path d="m.813.688-.07-.04a.025.025 0 0 0-.024 0l-.07.04C.64.69.636.699.636.71v.016H.543v.046h.094V.79c0 .012.004.02.011.023l.07.04a.025.025 0 0 0 .024 0l.07-.04C.82.81.825.801.825.79V.711C.824.699.82.69.813.688Zm-.036.09L.73.804.684.777V.723L.73.695l.047.028Zm0 0" />
          </g>
          <g clipPath="url(#f)">
            <path d="M.566 1.11C.56 1.104.555 1.101.543 1.104l-.066.016-.055-.058v.003l-.031.032.054.054-.015.067c-.004.008 0 .015.004.023l.058.059c.008.004.016.008.024.004l.078-.02a.017.017 0 0 0 .015-.015l.02-.079c.004-.007 0-.015-.004-.023Zm0 .132-.05.016-.04-.04.016-.05.051-.016.039.04Zm0 0" />
          </g>
          <g clipPath="url(#g)">
            <path d="M37.8 74.203c3.028 0 6.055-.734 8.74-2.117l-1.09-2.137a16.511 16.511 0 0 1-7.638 1.852c-9.238 0-16.757-7.547-16.757-16.82 0-3.63 1.199-7.176 3.351-10.06l1.559 1.563a1.2 1.2 0 0 0 .848.348c.132 0 .25-.023.382-.059.43-.144.742-.515.801-.972l.852-5.95a1.222 1.222 0 0 0-.336-1.019 1.157 1.157 0 0 0-1.016-.336l-5.926.852a1.18 1.18 0 0 0-.968.804 1.19 1.19 0 0 0 .285 1.227l1.808 1.812a19.3 19.3 0 0 0-4.035 11.774c0 10.597 8.598 19.226 19.152 19.226ZM26.239 41.102l-.285 1.984-1.691-1.695Zm0 0" />
          </g>
          <path d="M37.8 35.754c-2.859 0-5.612.613-8.175 1.84l1.031 2.176a16.435 16.435 0 0 1 7.145-1.61c9.238 0 16.758 7.543 16.758 16.82a16.83 16.83 0 0 1-3.352 10.067l-1.559-1.563a1.187 1.187 0 0 0-2.02.684l-.85 5.95c-.048.37.07.757.335 1.019.227.23.528.351.848.351.062 0 .11 0 .168-.011l5.926-.856a1.18 1.18 0 0 0 .968-.805 1.19 1.19 0 0 0-.285-1.226l-1.808-1.813a19.266 19.266 0 0 0 4.035-11.773c0-10.598-8.594-19.223-19.153-19.223Zm11.563 33.101.285-1.984 1.688 1.695Zm0 0" />
          <path d="M25.867 52.105a1.201 1.201 0 0 0 .574 1.36l1.293.722a8.302 8.302 0 0 0-.047.934c0 .313.012.613.047.938l-1.293.722a1.198 1.198 0 0 0-.574 1.356 11.96 11.96 0 0 0 3.293 5.566c.383.36.945.43 1.41.18l1.176-.664c.094-.047.227-.059.285-.012.469.324.98.602 1.496.844.07.035.098.117.098.18v1.308c0 .543.36 1.023.883 1.164 1.09.29 2.191.434 3.281.434h.156a12.19 12.19 0 0 0 3.121-.446c.528-.144.887-.609.887-1.164V64.23c0-.074.035-.156.098-.18a9.83 9.83 0 0 0 1.496-.843c.07-.047.191-.035.285.012l1.16.652c.457.25 1.031.18 1.414-.184a11.972 11.972 0 0 0 3.305-5.55 1.198 1.198 0 0 0-.574-1.356l-1.293-.734c.035-.313.047-.625.047-.938 0-.312-.012-.609-.047-.937l1.293-.719c.476-.266.718-.828.574-1.36a11.967 11.967 0 0 0-3.293-5.562 1.213 1.213 0 0 0-1.41-.18l-1.176.66c-.094.063-.215.063-.285.012a10.618 10.618 0 0 0-1.496-.84c-.074-.035-.098-.12-.098-.18v-1.308c0-.543-.36-1.023-.887-1.168a12.87 12.87 0 0 0-3.433-.43c-1.028.012-2.07.157-3.125.442a1.2 1.2 0 0 0-.883 1.168v1.297c0 .07-.04.156-.098.18a9.81 9.81 0 0 0-1.496.84c-.07.05-.191.038-.285-.012l-1.164-.649a1.213 1.213 0 0 0-1.41.18 12.011 12.011 0 0 0-3.305 5.55Zm4.344-3.183.36.207c.886.492 1.988.457 2.788-.086.36-.238.743-.457 1.149-.637a2.596 2.596 0 0 0 1.508-2.379v-.336a9.463 9.463 0 0 1 1.652-.156c.637 0 1.27.047 1.902.156v.348c0 1.023.59 1.961 1.512 2.379.395.18.79.398 1.148.637.813.554 1.903.59 2.79.086l.359-.207a9.724 9.724 0 0 1 1.746 2.933l-1.16.649c-.457.254-.695.77-.602 1.273.098.48.133.926.133 1.36 0 .43-.047.874-.133 1.355a1.204 1.204 0 0 0 .602 1.273l1.16.649a9.436 9.436 0 0 1-1.746 2.922l-.36-.207c-.886-.493-1.976-.453-2.789.086-.359.238-.742.457-1.148.636a2.62 2.62 0 0 0-1.512 2.38v.347a9.383 9.383 0 0 1-1.648.156c-.637 0-1.27-.047-1.906-.156v-.348a2.609 2.609 0 0 0-1.508-2.379 8.43 8.43 0 0 1-1.149-.636c-.812-.555-1.902-.59-2.789-.086l-.36.207a9.49 9.49 0 0 1-1.745-2.934l1.16-.648c.457-.25.695-.77.598-1.274a6.792 6.792 0 0 1-.13-1.344c0-.433.048-.878.13-1.347a1.198 1.198 0 0 0-.598-1.274l-1.16-.648a9.373 9.373 0 0 1 1.746-2.918Zm0 0" />
          <path d="M37.8 60.531c2.97 0 5.388-2.43 5.388-5.41 0-2.976-2.418-5.406-5.387-5.406-2.969 0-5.387 2.43-5.387 5.406 0 2.98 2.418 5.41 5.387 5.41Zm0-8.41a2.997 2.997 0 0 1 2.993 3c0 1.66-1.34 3.004-2.992 3.004a2.997 2.997 0 0 1-2.992-3.004c0-1.656 1.34-3 2.992-3Zm0 0" />
          <g clipPath="url(#h)">
            <path d="M71.313 6.008H52.163V3.605c0-1.984-1.617-3.605-3.59-3.605H27.027c-1.972 0-3.59 1.621-3.59 3.605v2.403H4.29c-1.976 0-3.594 1.62-3.594 3.605V25.23c0 1.985 1.618 3.606 3.594 3.606h6.629l6.824 7.988c.227.278.563.422.906.422.145 0 .278-.023.422-.074.465-.18.778-.625.778-1.129v-7.207h5.984c1.973 0 3.59-1.621 3.59-3.606v-2.402h4l3.277 7.676a1.2 1.2 0 0 0 1.102.734c.48 0 .91-.289 1.101-.734l3.278-7.676h4v2.402c0 1.985 1.613 3.606 3.59 3.606h5.984v7.207c0 .504.312.95.777 1.129.133.05.278.074.422.074.344 0 .68-.144.906-.422l6.825-7.988h6.629c1.976 0 3.593-1.621 3.593-3.606V9.613c0-1.984-1.617-3.605-3.594-3.605ZM27.026 25.23c0 .66-.539 1.204-1.195 1.204h-7.184c-.656 0-1.195.539-1.195 1.199V32.8l-5.074-5.95a1.214 1.214 0 0 0-.91-.417h-7.18c-.66 0-1.2-.543-1.2-1.204V9.613c0-.664.54-1.203 1.2-1.203h19.148v10.813c0 1.984 1.618 3.605 3.59 3.605Zm14.364-4.804c-.477 0-.91.289-1.102.73l-2.488 5.84-2.489-5.84a1.207 1.207 0 0 0-1.101-.73h-7.184a1.205 1.205 0 0 1-1.195-1.203V3.605c0-.66.54-1.203 1.195-1.203h21.547c.656 0 1.196.543 1.196 1.203v15.618c0 .66-.54 1.203-1.196 1.203Zm31.12 4.804c0 .66-.538 1.204-1.198 1.204h-7.18c-.348 0-.684.156-.91.418L58.148 32.8v-5.168c0-.66-.539-1.2-1.195-1.2H49.77a1.205 1.205 0 0 1-1.196-1.203v-2.402c1.973 0 3.59-1.621 3.59-3.605V8.41h19.148c.66 0 1.2.54 1.2 1.203Zm0 0" />
          </g>
          <path d="m39.059 11.582-2.813-2.824a1.188 1.188 0 0 0-1.687 0l-7.184 7.21 1.688 1.692 6.332-6.355 2.742 2.754a1.194 1.194 0 0 0 1.625.058L48.14 6.91l-1.555-1.828-7.54 6.488ZM65.328 10.813h2.395v12.015h-2.395ZM60.543 13.215h2.395v9.613h-2.395ZM55.754 15.617h2.394v7.211h-2.394ZM15.059 10.813c-3.961 0-7.18 3.234-7.18 7.21 0 3.977 3.219 7.207 7.18 7.207 3.96 0 7.183-3.23 7.183-7.207 0-3.976-3.222-7.21-7.183-7.21Zm4.62 6.007h-3.421v-3.437a4.793 4.793 0 0 1 3.422 3.437Zm-4.62 6.008c-2.645 0-4.786-2.152-4.786-4.805 0-2.234 1.532-4.097 3.59-4.64v4.64c0 .66.54 1.2 1.196 1.2h4.62c-.538 2.066-2.394 3.605-4.62 3.605Zm0 0" />
        </svg>
      );
    case "serverless":
      return (
        <svg
          {...iconProps}
          aria-label="ServerLess Icon"
          role="img"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6zM22 17v-1a2 2 0 0 0-2-2h-1M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4zM6 18h.01M2 2l20 20" />
        </svg>
      );

    case "education":
      return (
        <svg
          {...iconProps}
          aria-label="Education Icon"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 8l10 6 8.5-5.1v7.1H22V8L12 2z"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
          <path
            d="M6 12v4c0 2 2.7 4 6 4s6-2 6-4v-4"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
        </svg>
      );

    case "megaphone":
      return (
        <svg
          {...iconProps}
          aria-label="Megaphone Icon"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 4v16M19 4l-9 4v8l9 4M10 8H6a2 2 0 00-2 2v4a2 2 0 002 2h4"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
          <path
            d="M6 16l-2 4"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "play":
      return (
        <svg
          {...iconProps}
          aria-label="Play Icon"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
          <path d="M10 8v8l6-4-6-4" fill="currentColor" />
        </svg>
      );
    case "factory":
      return (
        <svg
          {...iconProps}
          aria-label="Factory Icon"
          role="img"
          strokeWidth={1.2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M22,1H18a1,1,0,0,0-1,1V9H15V7a1,1,0,0,0-1.447-.895L9,8.382V7a1,1,0,0,0-1.447-.895l-6,3A1,1,0,0,0,1,10V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V2A1,1,0,0,0,22,1ZM21,3V5H19V3ZM3,21V10.618l4-2V10a1,1,0,0,0,1.447.895L13,8.618V10a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V7h2V21Zm2-8H8v2H5Zm5,0h4v2H10Zm6,0h3v2H16ZM5,17H8v2H5Zm5,0h4v2H10Zm6,0h3v2H16Z"></path>
          </g>
        </svg>
      );
    case "cross":
      return (
        <svg
          {...iconProps}
          aria-label="Cross Icon"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
          <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "bag":
      return (
        <svg
          {...iconProps}
          aria-label="Bag Icon"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
          <path
            d="M3 6h18M16 10a4 4 0 01-8 0"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "house":
      return (
        <svg
          {...iconProps}
          aria-label="House Icon"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12l9-9 9 9M5 10v10h14V10"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
          <path
            d="M9 14h6v6H9v-6"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "ball":
      return (
        <svg
          {...iconProps}
          aria-label="Ball Icon"
          role="img"
          strokeWidth={0.5}
          viewBox="0 0 256 256"
          data-name="Layer 1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title></title>
            <circle
              className="cls-1"
              fill="none"
              strokeMiterlimit="10"
              strokeWidth="15"
              cx="127.98"
              cy="128.07"
              r="118.73"
            ></circle>
            <line
              className="cls-1"
              fill="none"
              strokeMiterlimit="10"
              strokeWidth="15"
              x1="211.94"
              x2="44.03"
              y1="44.11"
              y2="212.02"
            ></line>
            <line
              className="cls-1"
              fill="none"
              strokeMiterlimit="10"
              strokeWidth="15"
              x1="44.03"
              x2="211.94"
              y1="44.11"
              y2="212.02"
            ></line>
            <path
              className="cls-1"
              fill="none"
              strokeMiterlimit="10"
              strokeWidth="15"
              d="M122.33,9.2A96.16,96.16,0,0,1,9.6,121.94"
            ></path>
            <path
              className="cls-1"
              fill="none"
              strokeMiterlimit="10"
              strokeWidth="15"
              d="M246.75,133.62A96.15,96.15,0,0,0,134,246.36"
            ></path>
          </g>
        </svg>
      );
    case "connected-screens":
      return (
        <svg
          {...iconProps}
          aria-label="Connected Screen Icon"
          role="img"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M23.313 26.102l-6.296-3.488c2.34-1.841 2.976-5.459 2.976-7.488v-4.223c0-2.796-3.715-5.91-7.447-5.91-3.73 0-7.544 3.114-7.544 5.91v4.223c0 1.845 0.78 5.576 3.144 7.472l-6.458 3.503s-1.688 0.752-1.688 1.689v2.534c0 0.933 0.757 1.689 1.688 1.689h21.625c0.931 0 1.688-0.757 1.688-1.689v-2.534c0-0.994-1.689-1.689-1.689-1.689zM23.001 30.015h-21.001v-1.788c0.143-0.105 0.344-0.226 0.502-0.298 0.047-0.021 0.094-0.044 0.139-0.070l6.459-3.503c0.589-0.32 0.979-0.912 1.039-1.579s-0.219-1.32-0.741-1.739c-1.677-1.345-2.396-4.322-2.396-5.911v-4.223c0-1.437 2.708-3.91 5.544-3.91 2.889 0 5.447 2.44 5.447 3.91v4.223c0 1.566-0.486 4.557-2.212 5.915-0.528 0.416-0.813 1.070-0.757 1.739s0.446 1.267 1.035 1.589l6.296 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.809zM30.312 21.123l-6.39-3.488c2.34-1.841 3.070-5.459 3.070-7.488v-4.223c0-2.796-3.808-5.941-7.54-5.941-2.425 0-4.904 1.319-6.347 3.007 0.823 0.051 1.73 0.052 2.514 0.302 1.054-0.821 2.386-1.308 3.833-1.308 2.889 0 5.54 2.47 5.54 3.941v4.223c0 1.566-0.58 4.557-2.305 5.915-0.529 0.416-0.813 1.070-0.757 1.739 0.056 0.67 0.445 1.267 1.035 1.589l6.39 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.779h-4.037c0.61 0.46 0.794 1.118 1.031 2h3.319c0.931 0 1.688-0.757 1.688-1.689v-2.503c-0.001-0.995-1.689-1.691-1.689-1.691z"></path>{" "}
          </g>
        </svg>
      );
    case "scalability":
      return (
        <svg
          {...iconProps}
          aria-label="Scalability Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <path
            fill="currentColor"
            d="M12 3H5.14l7.93 7.93l-2.11 2.11L3.03 5.14V12H0V0h12zM36 0h12v12h-3V5.14l-7.93 7.93l-2.11-2.11L42.89 3H36zM10.93 34.96l2.11 2.11L5.14 45h6.86v3H0V36h3v6.86zm34.04 7.93V36h3v12H36v-3h6.86l-7.93-7.93l2.11-2.11zM15 33V15h18v18zm3-15v12h12V18z"
          />
        </svg>
      );
    case "resilience":
      return (
        <svg
          aria-label="Resilience Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path
            fill="currentColor"
            d="M33 4a11 11 0 0 0-10.696 13.578L5.682 34.2a5.742 5.742 0 1 0 8.12 8.12l8.23-8.226a12.94 12.94 0 0 1 2.344-6.586L11.68 40.2a2.742 2.742 0 0 1-3.88-3.88l17.248-17.244a1.5 1.5 0 0 0 .36-1.536a8 8 0 0 1 8.426-10.496l-3.688 3.688a2.5 2.5 0 0 0 0 3.536l3.586 3.586a2.5 2.5 0 0 0 3.534 0l3.69-3.69q.042.414.042.836a8 8 0 0 1-4.324 7.108a13 13 0 0 1 3.7 1.052A11 11 0 0 0 44 15c0-1.534-.314-2.996-.884-4.326a1.5 1.5 0 0 0-2.44-.472L35.5 15.38l-2.878-2.88L37.8 7.324a1.5 1.5 0 0 0-.47-2.44A11 11 0 0 0 33 4m-4.446 23.952a4 4 0 0 1-2.882 4.992l-1.168.288a11.4 11.4 0 0 0 .012 3.616l1.08.26a4 4 0 0 1 2.9 5.02l-.374 1.262c.88.772 1.88 1.398 2.97 1.844l.986-1.038a4 4 0 0 1 5.798 0l.998 1.05a10.6 10.6 0 0 0 2.964-1.826l-.396-1.372a4 4 0 0 1 2.884-4.992l1.166-.288a11.4 11.4 0 0 0-.012-3.616l-1.08-.26a4 4 0 0 1-2.898-5.02l.372-1.26a10.6 10.6 0 0 0-2.968-1.844l-.986 1.036a4 4 0 0 1-5.8 0l-.996-1.05c-1.088.44-2.088 1.06-2.966 1.824zM35 38c-1.6 0-2.9-1.344-2.9-3s1.3-3 2.9-3s2.9 1.344 2.9 3s-1.3 3-2.9 3"
          />
        </svg>
      );
    case "reactive":
      return (
        <svg
          aria-label="Reactive Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path
            fill="currentColor"
            d="M6 40v-4h5.5l-.8-.7q-2.6-2.3-3.65-5.25T6 24.1q0-5.55 3.324-9.876T18 8.5v4.2q-3.6 1.3-5.8 4.526T10 24.1q0 2.25.85 4.376T14.5 32.4l.5.5V28h4v12zm35.85-18H37.8q-.25-1.75-1.074-3.35T34.5 15.6l-.5-.5V20h-4V8h12v4h-5.5l.8.7q2.05 2.1 3.15 4.45t1.4 4.85M34 46l-.6-3q-.6-.25-1.124-.524T31.2 41.8l-2.9.9l-2-3.4l2.3-2q-.1-.7-.1-1.3t.1-1.3l-2.3-2l2-3.4l2.9.9q.55-.4 1.076-.674t1.124-.526L34 26h4l.6 3q.6.25 1.126.55t1.074.75l2.9-1l2 3.5l-2.3 2q.1.6.1 1.25t-.1 1.25l2.3 2l-2 3.4l-2.9-.9q-.55.4-1.074.676t-1.126.524L38 46zm2-6q1.65 0 2.826-1.174T40 36t-1.174-2.824T36 32t-2.824 1.176T32 36t1.176 2.826T36 40"
          />
        </svg>
      );
    case "integration":
      return (
        <svg
          aria-label="Integration Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M20.38 11.612a2.12 2.12 0 0 1 1.888-1.112l4.2.064a2.12 2.12 0 0 1 1.848 1.168l1.68 3.376l2.968-.252a2.12 2.12 0 0 1 1.944.956l2.12 3.288a2.1 2.1 0 0 1-.06 2.36l-1.56 2.184l1.66 2.192c.516.68.568 1.608.128 2.344l-2 3.352a2.12 2.12 0 0 1-1.928 1.02l-3.14-.192l-1.932 3.956a2.12 2.12 0 0 1-1.888 1.176H21.98a2.12 2.12 0 0 1-1.884-1.176l-1.816-3.712l-3.36.304a2.12 2.12 0 0 1-1.972-.984l-2.124-3.42a2.1 2.1 0 0 1 .12-2.388l1.92-2.5l-1.544-2.156a2.1 2.1 0 0 1-.056-2.36l2.12-3.288a2.12 2.12 0 0 1 1.94-.956l3.188.272zm2.392 1.896l-1.888 3.552a2.12 2.12 0 0 1-2.032 1.108l-3.24-.276l-1.496 2.32l1.576 2.2a2.1 2.1 0 0 1-.04 2.5l-1.952 2.536l1.504 2.424l3.424-.312a2.1 2.1 0 0 1 2.08 1.168l1.836 3.764h3.2l1.952-3.988a2.12 2.12 0 0 1 2.012-1.172l3.192.192l1.408-2.36l-1.696-2.24a2.1 2.1 0 0 1-.032-2.488l1.596-2.224l-1.496-2.32l-3.04.256a2.1 2.1 0 0 1-2.06-1.16l-1.708-3.432z"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M41.128 29.6a18 18 0 0 1-34.664-1.504l3.404-.672L3.388 20.72L0 29.388l3.588-.704a21 21 0 0 0 40.5 1.844zm3.344-10.16A21 21 0 0 0 3.972 17.6l2.852.928a18 18 0 0 1 34.664 1.5l-3.404.676l6.48 6.688l3.432-8.656z"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M24 22.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M19.5 24a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"
            clipRule="evenodd"
          />
        </svg>
      );
    case "resilient":
      return (
        <svg
          {...iconProps}
          aria-label="Resilient Icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.408.966H9.375m1.517 0v2.6M5.07 2.749L3.997 3.822L2.925 4.894m1.072-1.072L5.836 5.66M1.142 9.2v3.033m0-1.517h2.6m-.817 5.822l1.072 1.073l1.073 1.072m-1.073-1.072l1.839-1.839M18.858 4.894l-1.072-1.072l-1.073-1.073m1.073 1.073L15.947 5.66m-6.572 4.407a1.517 1.517 0 1 0 0-3.034a1.517 1.517 0 0 0 0 3.034"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.748 8.683a7.15 7.15 0 1 0-8.89 8.884m3 5.467h8.458a2.533 2.533 0 0 0 2.542-2.523v-6.606a2.19 2.19 0 0 0-1.9-2.211a2.1 2.1 0 0 0-1.152 3.969a6 6 0 0 0 0 4.428a4.674 4.674 0 0 0-7.338-1.265"
          />
        </svg>
      );
    case "gauge":
      return (
        <svg
          {...iconProps}
          aria-label="Gauge Icon"
          role="img"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 14 4-4M3.34 19a10 10 0 1 1 17.32 0" />
        </svg>
      );
    case "piggy-bank":
      return (
        <svg
          {...iconProps}
          aria-label="Piggy Bank Icon"
          role="img"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5zM2 9v1c0 1.1.9 2 2 2h1M16 11h.01" />
        </svg>
      );
    case "expand":
      return (
        <svg
          {...iconProps}
          aria-label="Expand Icon"
          role="img"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8M3 16.2V21m0 0h4.8M3 21l6-6M21 7.8V3m0 0h-4.8M21 3l-6 6M3 7.8V3m0 0h4.8M3 3l6 6" />
        </svg>
      );
    case "shield-check":
      return (
        <svg
          {...iconProps}
          aria-label="Shield Check Icon"
          role="img"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "activity":
      return (
        <svg
          {...iconProps}
          aria-label="Activity Icon"
          role="img"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
        </svg>
      );
    case "headphones":
      return (
        <svg
          {...iconProps}
          aria-label="Headphones Icon"
          role="img"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
        </svg>
      );
    case "game":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Game Development"
          role="img"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M24.027 28.726H17.75c-.407 0-.772.232-.967.59c-2.078 3.81-4.858 4.71-5.613 4.853a2 2 0 0 1-.292.037c-8.655.255-4.264-11.153-4.264-11.153c1.252-3.659 4.275-7.955 5.293-8.946c.21-.204.487-.317.779-.317h22.628c.293 0 .57.113.78.317c1.017.991 4.04 5.287 5.292 8.946c0 0 4.391 11.409-4.264 11.153a2 2 0 0 1-.292-.037c-.755-.142-3.534-1.043-5.613-4.854a1.11 1.11 0 0 0-.967-.59h-6.277"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.141 24a2.403 2.403 0 0 0 4.807 0h0a2.403 2.403 0 0 0-4.807 0m6.911 0a2.403 2.403 0 0 0 4.807 0h0a2.403 2.403 0 0 0-4.807 0m5.565-4.337a.961.961 0 0 0 1.923.002v-.002a.961.961 0 0 0-1.923-.002zm5.089 0a.961.961 0 0 0 1.923 0v0a.961.961 0 0 0-1.923-.001zm-2.544 2.256a.961.961 0 0 0 1.923 0v0a.961.961 0 0 0-1.923-.001zm0-4.487a.961.961 0 0 0 1.923 0v0a.961.961 0 0 0-1.923-.001zm-19.18-.582v5.625m-2.812-2.793h5.626"
          />
        </svg>
      );
    case "home":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </g>
        </svg>
      );
    case "services":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Services Icon"
          role="img"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m10.05 10.607l-7.07 7.07a2 2 0 0 0 0 2.83v0a2 2 0 0 0 2.828 0l7.07-7.072m-2.828-2.828c-.844-2.153-.679-4.978 1.06-6.718s4.95-2.121 6.718-1.06l-3.04 3.04l-.283 3.111l3.111-.282l3.04-3.041c1.062 1.768.68 4.978-1.06 6.717c-1.74 1.74-4.564 1.905-6.717 1.061"
          />
        </svg>
      );
    case "solutions":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Solutions Icon"
          role="img"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-lightbulb-off"
        >
          <path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" />
          <path d="m2 2 20 20" />
          <path d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      );
    case "technologies":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Technology Icon"
          role="img"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16.5 19a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M10 5l2-2m-4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m.5 6l8-8M5.5 21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m13-13a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M12 21l2-2"
          />
        </svg>
      );
    case "contact-us":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Contact-Us Icon"
          role="img"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-circle-more"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          <path d="M8 12h.01" />
          <path d="M12 12h.01" />
          <path d="M16 12h.01" />
        </svg>
      );
    case "tools-integration":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Tools Integration Icon"
          role="img"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M39.23 26q.13-.995.14-2a17 17 0 0 0-.14-2l4.33-3.39a1 1 0 0 0 .25-1.31l-4.1-7.11a1 1 0 0 0-1.25-.44l-5.11 2.06a15.7 15.7 0 0 0-3.46-2l-.77-5.43a1 1 0 0 0-1-.86H19.9a1 1 0 0 0-1 .86l-.77 5.43a15.4 15.4 0 0 0-3.46 2L9.54 9.75a1 1 0 0 0-1.25.44l-4.1 7.11a1 1 0 0 0 .25 1.31L8.76 22a17 17 0 0 0-.14 2q.01 1.005.14 2l-4.32 3.39a1 1 0 0 0-.25 1.31l4.1 7.11a1 1 0 0 0 1.25.44l5.11-2.06a15.7 15.7 0 0 0 3.46 2l.77 5.43a1 1 0 0 0 1 .86h8.2a1 1 0 0 0 1-.86l.77-5.43a15.4 15.4 0 0 0 3.46-2l5.11 2.06a1 1 0 0 0 1.25-.44l4.1-7.11a1 1 0 0 0-.25-1.31z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.055 30.074q5.363-5.483 10.8-10.894c-.256-1.303.156-2.768 1.277-3.554a3.5 3.5 0 0 1 2.84-.561c-.64.732-1.576 1.303-1.82 2.288c-.26 1.252 1.162 2.362 2.324 1.861c.755-.422 1.289-1.15 1.924-1.729c.429 1.663-.562 3.558-2.232 4.043c-.624.416-1.502-.126-2.029.246l-10.97 10.67a1.59 1.59 0 0 1-2.113-2.369zm10.661-5.08l5.06 5.152c.316.316.494.746.494 1.194h0a1.688 1.688 0 0 1-2.883 1.193l-5.121-5.129m-2.365-3.27c-1.298-1.26-2.548-2.573-3.888-3.788c-.85-.466-1.935.365-1.735 1.304c.04.375-.422.543-.612.823l-.733.738l-2.433-2.432l1.368-1.37c.83.232 1.795-.486 1.601-1.382c-.075-.372.417-.537.6-.815c.893-.88 1.774-1.907 3.083-2.12c1.111-.268 2.36-.086 3.303.567c-.207.53-.717.475-1.18.466c-1.107.02-2.24.467-2.983 1.297c1.673 1.765 3.421 3.46 5.134 5.187"
          />
        </svg>
      );
    case "git":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Git Icon"
          role="img"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            d="m6.793 1.207l.353.354zM1.207 6.793l-.353-.354zm0 1.414l.354-.353zm5.586 5.586l-.354.353zm1.414 0l-.353-.354zm5.586-5.586l.353.354zm0-1.414l-.354.353zM8.207 1.207l.354-.353zM6.44.854L.854 6.439l.707.707l5.585-5.585zM.854 8.56l5.585 5.585l.707-.707l-5.585-5.585zm7.707 5.585l5.585-5.585l-.707-.707l-5.585 5.585zm5.585-7.707L8.561.854l-.707.707l5.585 5.585zm0 2.122a1.5 1.5 0 0 0 0-2.122l-.707.707a.5.5 0 0 1 0 .708zM6.44 14.146a1.5 1.5 0 0 0 2.122 0l-.707-.707a.5.5 0 0 1-.708 0zM.854 6.44a1.5 1.5 0 0 0 0 2.122l.707-.707a.5.5 0 0 1 0-.708zm6.292-4.878a.5.5 0 0 1 .708 0L8.56.854a1.5 1.5 0 0 0-2.122 0zm-2 1.293l1 1l.708-.708l-1-1zM7.5 5a.5.5 0 0 1-.5-.5H6A1.5 1.5 0 0 0 7.5 6zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 4.5zM7.5 4a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 3zm0-1A1.5 1.5 0 0 0 6 4.5h1a.5.5 0 0 1 .5-.5zm.646 2.854l1.5 1.5l.707-.708l-1.5-1.5zM10.5 8a.5.5 0 0 1-.5-.5H9A1.5 1.5 0 0 0 10.5 9zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 12 7.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 10.5 6zm0-1A1.5 1.5 0 0 0 9 7.5h1a.5.5 0 0 1 .5-.5zM7 5.5v4h1v-4zm.5 5.5a.5.5 0 0 1-.5-.5H6A1.5 1.5 0 0 0 7.5 12zm.5-.5a.5.5 0 0 1-.5.5v1A1.5 1.5 0 0 0 9 10.5zm-.5-.5a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 7.5 9zm0-1A1.5 1.5 0 0 0 6 10.5h1a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      );
    case "requirement":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Git Icon"
          role="img"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3 2.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h5.25a.75.75 0 0 1 0 1.5H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.25a.75.75 0 0 1-1.5 0V3a.5.5 0 0 0-.5-.5zm12.28 8.72a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.97-1.97a.75.75 0 0 1 1.06 0M4.75 4a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8m.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "final-project":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M5 8h14V6H5zm0 0V6zm0 14q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v5.675q-.475-.225-.975-.375T19 11.075V10H5v10h6.3q.175.55.413 1.05t.562.95zm13 1q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m1.675-2.625l.7-.7L18.5 17.8V15h-1v3.2z"
          />
        </svg>
      );
    default:
      return null;
  }
};
