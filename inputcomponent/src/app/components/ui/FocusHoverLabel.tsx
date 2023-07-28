import React from "react";

interface FocusHoverLabelProps {
  focus?: boolean;
}

const FocusHoverLabel: React.FC<FocusHoverLabelProps> = ({ focus }) => {
  return (
    <label
      className="
        text-xs/3
        text-gray-3
        font-ubuntuMono
        font-normal
        "
    >
      {focus ? "&:focus" : "&:hover"}
    </label>
  );
};

export default FocusHoverLabel;

