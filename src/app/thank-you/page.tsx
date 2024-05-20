import React, { Suspense } from "react";
import { ThankYou } from "./ThankYou";

const Rage = () => {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  );
};

export default Rage;
