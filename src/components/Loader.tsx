// src/components/Loader.tsx
const Loader = () => {
  return (
    <div className="loader-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 50 50"
        fill="none"
        stroke="none"
        className="loader"
      >
        <circle cx="25" cy="25" r="20" strokeWidth="4" className="circle" />
      </svg>
    </div>
  );
};

export default Loader;
