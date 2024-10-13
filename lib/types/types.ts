export interface BaseComponent {
  children?: React.ReactNode;
  className?: string;

  key?: string | number;
  onClick?: () => void;
}
