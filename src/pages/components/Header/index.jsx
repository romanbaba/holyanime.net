import Autocomplete from "@/pages/components/Header/components/autocomplete.jsx";
import Dropdown from "@/pages/components/Header/components/dropdown.jsx";
import { useAuthenticating } from "@/stores/authenticating.js";
import { Button } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const session = useSession();
  const { isAuthenticating, setAuthenticating } = useAuthenticating();

  const handleChange = () => {
   setAuthenticating(true);
   signIn("google");
  };

  return (
    <div className="flex items-center justify-between pt-6 h-20">
      <div className="w-[91%] flex items-center gap-2">
        <Autocomplete />
        <Button color="primary" isIconOnly={true}><FaSearch /></Button>
      </div>
      <div className="mx-4">
        {session.status === "authenticated" ? <Dropdown size="md" /> : (
          <Button type="button" color="primary" isLoading={isAuthenticating || session.status === "loading"} onClick={handleChange}>
            Oturum aç
          </Button>
        )}
      </div>
    </div>
  );
}
