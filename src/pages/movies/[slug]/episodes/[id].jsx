import { useParams } from "next/navigation";

export default function Movie() {
  /** @type {{ id: string }} */
  const params = useParams();

  return (
   <div className="mt-8">
    <iframe className="w-full h-[35rem] rounded-xl" src="https://mega.nz/embed/g5sU1IzS#hiBz05pciNUVrqMaCs6urMyClfJ9ctfpL0aJXTvL2Mg"  frameborder="0" allowfullscreen></iframe>
    {params?.id}
   </div>
  );
}