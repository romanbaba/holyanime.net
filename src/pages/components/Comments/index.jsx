import { Button, Textarea } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function Comments() {
  const session = useSession();

  return (
    <div>
      <h1 className="text-3xl font-semibold">Yorumlar</h1>

      <div className="mt-2 flex flex-col items-end space-y-2">
        <Textarea placeholder="Ne düşünüyorsun?" minRows={8} />

        <div className="flex gap-2">
          <Button color="danger" variant="bordered">İptal</Button>
          <Button color="primary">Paylaş</Button>
        </div>
      </div>

    </div>
  );
}