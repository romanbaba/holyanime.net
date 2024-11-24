import { Button, Input, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";

export default function NotificationNew() {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);

  const handleChange = () => {
    axios.post(`/api/notifications?email=${email}`, { name, description, date: Date.now() });
  };

  return (
    <div className="mt-40 grid place-items-center">
      <div className="mx-auto container space-y-3 flex flex-col items-center">
        <Input placeholder="@example, @everyone veya bir sorgu belirleyin" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Başlık" value={name} onChange={(e) => setName(e.target.value)} />
        <Textarea placeholder="Açıklamanız" minRows={5} value={description} onChange={(e) => setDescription(e.target.value)} />
        

        <Button color="primary" onClick={handleChange}>Paylaş</Button>
      </div>
    </div>
  );
}