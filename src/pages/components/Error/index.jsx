import { motion } from "framer-motion";

/** @param {{ message: string }} params */
export function Error({ message = "Bir şeyler ters gitti." }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-screen">
      <div className="flex flex-col h-full items-center justify-center">
        <div className="bg-red-400/10 text-red-400 py-1 px-3 text-xs rounded-full">HATA</div>
        <h1 className="text-4xl font-semibold mt-4">Üzgünüz, bir hata oluştu.</h1>
        <p className="text-sm mt-2 opacity-80">{message}</p>
      </div>
    </motion.div>
  );
}