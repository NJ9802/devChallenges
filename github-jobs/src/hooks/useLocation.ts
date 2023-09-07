"use client";

import React, { useEffect, useState } from "react";
import { getlocationName } from "@/lib";
import { Position } from "@/types";

const useLocation = () => {
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    const onSuccess = async (position: Position) => {
      const locationName = await getlocationName(position);
      setLocation(locationName);
    };

    const onError = () => setLocation("New York");

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return [location, setLocation] as const;
};

export default useLocation;
