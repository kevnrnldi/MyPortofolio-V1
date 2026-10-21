"use client";

import { useMemo } from "react";
import DottedMap from "dotted-map";

const DottedWorldMap = () => {
  const src = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: "diagonal" });

    // penanda lokasi (Jambi, Indonesia)
    map.addPin({
      lat: -1.6,
      lng: 103.6,
      svgOptions: { color: "#60a5fa", radius: 0.6 },
    });

    const svg = map.getSVG({
      radius: 0.22,
      color: "#ffffff40",
      shape: "circle",
      backgroundColor: "transparent",
    });

    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }, []);

  return (
    <div className="relative mt-12 w-full max-w-md">
      <img src={src} alt="World map" className="h-auto w-full" />
    </div>
  );
};

export default DottedWorldMap;
