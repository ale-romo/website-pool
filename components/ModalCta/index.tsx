'useClient';
import { useState } from "react";
interface Props {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  color?:string;
}

const ModalCta = ({ title, children, color }: Props) => {
  const [showForm, setShowForm] = useState(false);
  return <>
    <button onClick={() => setShowForm(true)} className={`max-w-64 mx-auto rounded-full ${color ? color : 'text-white bg-black'} px-16 py-4 z-10`}>{title}</button>
    <div className={`popupform fixed top-0 left-0 right-0 bottom-0 backdrop-blur-xl bg-white/30 ${showForm ? 'opacity-100' : 'opacity-0 pointer-events-none'} transitions-all duration-300 z-50 `}>
      <div className="fixed bg-white text-black rounded-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2">
        <button className="absolute font-3xl right-10 top-10" onClick={() => setShowForm(false)}>&times;</button>
        {children}
      </div>
    </div>
  </>
}


export default ModalCta;