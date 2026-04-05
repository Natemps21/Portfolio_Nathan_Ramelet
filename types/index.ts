// Galaxy Store Types
export interface GalaxyState {
  speed: number;
  rotation: number;
  zoomLevel: number;
  isActive: boolean;
  mousePosition: { x: number; y: number };
  setSpeed: (speed: number) => void;
  setRotation: (rotation: number) => void;
  setZoomLevel: (zoom: number) => void;
  setActive: (active: boolean) => void;
  setMousePosition: (pos: { x: number; y: number }) => void;
}

// Menu Store Types
export interface MenuState {
  isOpen: boolean;
  isExpanded: boolean;
  activeSection: string | null;
  toggle: () => void;
  setExpanded: (expanded: boolean) => void;
  setActiveSection: (section: string | null) => void;
  close: () => void;
}

// Component Props Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "glass" | "solid" | "gradient";
  hoverable?: boolean;
}

export interface TagProps {
  text: string;
  variant?: "cyan" | "magenta" | "purple" | "gold";
  size?: "sm" | "md";
}
















