import { SWR } from "@/functions/swr.js";
import { Avatar, Badge, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaBell, FaBookmark, FaDollarSign, FaFeatherAlt, FaHeart, FaKey, FaQuestion, FaUser, FaUserFriends } from "react-icons/fa";
import { MdSensorDoor } from "react-icons/md";

/** @param {{ size: "sm" | "md" | "lg"; }} params */
export default function _Dropdown({ size = "lg" }) {
  const session = useSession();
  const admins = ["kizilkartalhd@gmail.com"];

  const { isLoading, data } = SWR("/api/users");
  const user = isLoading ? {} : data.find((val) => val.email === session.data.user?.email);

  return (
    <>
      <Dropdown className="mt-2">
        <DropdownTrigger>
          <div className="cursor-pointer">
            {user?.notifications?.length ? (
              <Badge  content={user?.notifications?.length} color="danger">
                <Avatar isBordered={true} size={size} color="primary" src={session.data.user?.image} name={session.data.user?.name} />
            </Badge>
            ) : (
              <Avatar isBordered={true} size={size} color="primary" src={session.data.user?.image} name={session.data.user?.name} />
            )}
          </div>
        </DropdownTrigger>

        <DropdownMenu variant="flat">
          <DropdownSection showDivider={true}>
            <DropdownItem startContent={<FaUser />}> Profil </DropdownItem>
            <DropdownItem startContent={user?.notifications?.length ? <Badge content={user?.notifications.length } size="sm" color="danger"><FaBell /></Badge> : <FaBell />}>Bildirimler</DropdownItem>
            <DropdownItem startContent={<FaHeart />}> Beğenilenler </DropdownItem>
            <DropdownItem startContent={<FaBookmark />}> Kaydedilenler </DropdownItem>
          </DropdownSection>

          <DropdownSection showDivider={true}>
            <DropdownItem startContent={<FaFeatherAlt />}> Yardım & Geri Bildirim </DropdownItem>
            <DropdownItem startContent={<FaQuestion />}>SSS</DropdownItem>
            <DropdownItem startContent={<FaDollarSign />} color="success" href="https://instagram.com/holyanimenet"> Premium&apos;a geç </DropdownItem>
          </DropdownSection>

          {admins.includes(session.data.user.email) && (
            <DropdownSection showDivider={true}>
              <DropdownItem startContent={<FaUserFriends />}> Kullanıcılar </DropdownItem>
              <DropdownItem startContent={<FaKey />}><Link href={"/dashboard"}> Yönetim Paneli </Link></DropdownItem>
            </DropdownSection>
          )}

          <DropdownSection>
            <DropdownItem startContent={<MdSensorDoor />} color="danger" onClick={() => signOut()}> Çıkış yap </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}