import React from "react";

interface MaterialIconProps {
  icon: string;
}

const MaterialIcon: React.FC<MaterialIconProps> = ({ icon }) => {
  return <span className="material-symbols-outlined text-gray-3">{icon}</span>;
};

export default MaterialIcon;
