"use client";
import React, { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="text-gray-3 h-6 w-6 rounded-[4px] border border-gray-3"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

interface GuestsItemsProps {
  title: string;
  subtitle: string;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const GuestsItems: React.FC<GuestsItemsProps> = ({
  title,
  subtitle,
  state,
  setState,
}) => {
  return (
    <div className="text-sm">
      <div>
        <h6 className="font-bold">{title}</h6>

        <span className="text-lightGray">{subtitle}</span>
      </div>

      <div className="flex items-center gap-4 mt-3">
        <Button onClick={() => setState((prev) => prev + 1)}>+</Button>

        <span className="font-bold">{state}</span>

        <Button onClick={() => setState((prev) => (prev <= 0 ? 0 : prev - 1))}>
          -
        </Button>
      </div>
    </div>
  );
};

interface GuestsProps {
  childrens: number;
  adults: number;
  setChildrens: React.Dispatch<React.SetStateAction<number>>;
  setAdults: React.Dispatch<React.SetStateAction<number>>;
}

const Guests: React.FC<GuestsProps> = ({
  childrens,
  adults,
  setChildrens,
  setAdults,
}) => {
  return (
    <div className="flex flex-col gap-14">
      <GuestsItems
        title="Adults"
        subtitle="Ages 13 or above"
        state={adults}
        setState={setAdults}
      />
      <GuestsItems
        title="Children"
        subtitle="Ages 2-12"
        state={childrens}
        setState={setChildrens}
      />
    </div>
  );
};

export default Guests;
