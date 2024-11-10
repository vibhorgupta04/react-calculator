const Navbar = () => {
  return (
    <div className="navbar-container">
      <span className="navbar-title">
        <div className="navbar-item">
          <span className="navbar-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1 2v16h14V4H5zm2 2h10v4H7V6zm0 6h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v6h-2v-6z"
                fill="rgba(49,52,75,1)"
              />
            </svg>
          </span>
          <div className="navbar-text">Calculator</div>
        </div>
      </span>
    </div>
  );
};

export default Navbar;
