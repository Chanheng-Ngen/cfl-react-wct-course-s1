const HeroBanner = ({ title, subtitle, background }) => {
  return (
    <div
      className="relative w-full h-[320px] md:h-[380px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold uppercase tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-sm md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
