'use client'

import { useEffect } from "react";

const RenewBioRepairPro = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full" style={{ height: "calc(100vh - 80px)", minHeight: "600px" }}>
      <iframe
        src="/renew-bio-repair-pro-framer.html"
        className="w-full h-full border-0"
        title="Renew Bio Repair Pro"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          overflow: "auto"
        }}
      />
    </div>
  );
};

export default RenewBioRepairPro;
