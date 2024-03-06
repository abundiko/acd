import { OutCircle } from "react-huge-icons/outline";

export type FormButtonProps = {
  className:string;
  children:React.ReactNode;
  loading?:boolean;
}

export default function FormButton({
  className, children, loading = false
}:FormButtonProps) {
return <button className={className}>
  {
    loading ? <OutCircle className="animate-spin" /> : <>{children}</>
  }
</button>;
}