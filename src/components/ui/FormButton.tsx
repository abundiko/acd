import { RedoCircle } from "react-huge-icons/outline";

export type FormButtonProps = {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: ()=>void;
};

export default function FormButton({
  className,
  children,
  loading = false,
  disabled = false,
  onClick
}: FormButtonProps) {
  return (
    <button
    onClick={onClick}
      disabled={loading || disabled}
      className={
        className + " disabled:opacity-70 disabled:pointer-events-none"
      }
    >
      {loading ? <RedoCircle className="animate-spin" /> : <>{children}</>}
    </button>
  );
}
