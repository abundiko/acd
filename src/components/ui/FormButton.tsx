import { RedoCircle } from "react-huge-icons/outline";

export type FormButtonProps = {
<<<<<<< HEAD
  className:string;
=======
  className?:string;
>>>>>>> next-js
  children:React.ReactNode;
  loading?:boolean;
  disabled?:boolean;
}

export default function FormButton({
  className, children, loading = false, disabled= false
}:FormButtonProps) {
return <button disabled={loading || disabled} className={className+" disabled:opacity-70 disabled:pointer-events-none"}>
  {
    loading ? <RedoCircle className="animate-spin"/> : <>{children}</>
  }
</button>;
}