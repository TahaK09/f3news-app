const LatestNewsWidget = () => {
  return (
    <div className="fixed top-24 right-5 w-[320px] z-10 bg-white rounded shadow-lg overflow-hidden">
      {/* Video Thumbnail Section */}
      <div className="relative">
        <img
          src="https://media.architecturaldigest.com/photos/579933cdb6c434ab487bc12c/16:9/w_2560%2Cc_limit/trump-1985-apartment-AD_06.jpg"
          alt="Live News"
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
          ● Live
        </div>
      </div>

      {/* Live Label */}
      <div className="px-3 py-2 font-semibold text-sm border-b">
        <span className="text-red-600 font-bold">●</span> ABC News Live First
      </div>

      {/* Top Stories */}
      <div className="bg-blue-900 text-white px-3 py-2 font-semibold text-sm">
        Top Stories
      </div>
      <ul className="divide-y text-sm bg-white">
        {[
          "2 dead in Pennsylvania in severe weather events",
          "Russia-Ukraine war has 'nuances,' Kremlin says",
          "Kim Jong Un oversees missile tests on new warship",
          "North Korea has around 4,700 casualties in Russia",
          "One of these cardinals could become the new pope",
          "State poised to ban fluoride from public water",
          "Deadly crash at after-school camp wasn’t targeted",
          "Runaway kangaroo shuts down Alabama highway",
        ].map((story, idx) => (
          <li
            key={idx}
            className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-blue-800"
          >
            • {story}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestNewsWidget;
