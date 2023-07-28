"use client";

import React, { useRef, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import SearchDrawer from "./ui/SearchDrawer";
import clsx from "clsx";
import { DrawerContext } from "@/context/context";

function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFooterHidden, setIsFooterHidden] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [guests, setGuests] = useState<number>(0);

  const scrollDivRef = useRef<HTMLDivElement>(null);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY =
      (scrollDivRef.current && scrollDivRef.current.scrollTop) || 0;
    setIsFooterHidden(currentScrollY > prevScrollY.current);
    prevScrollY.current = currentScrollY;
  };

  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative flex flex-col h-full">
        <Header city={city} guests={guests} />

        <SearchDrawer setGuests={setGuests} setCity={setCity} />

        <div
          onClick={() => setIsOpen(false)}
          className={clsx(
            "absolute h-full w-full z-30 bg-gray/70",
            !isOpen && "hidden"
          )}
        />

        <main
          ref={scrollDivRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto mt-[37px] md:mt-[61px]"
        >
          <Main city={city} />
        </main>

        <Footer hidden={isFooterHidden} />
      </div>
    </DrawerContext.Provider>
  );
}

export default Home;
