import { SWR } from "@/functions/swr";
import { Error } from "@/pages/components/Error";
import { SplashScreen } from "@/pages/components/SplashScreen";
import { useAdministrators } from "@/stores/administrators";
import { Avatar, Button, Card } from "@nextui-org/react";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import relativeTime from "dayjs/plugin/relativeTime";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdMovie, MdWorkspacePremium } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
dayjs.extend(relativeTime);

export default function Dashboard() {
  const { status, data } = useSession();
  const { administrators } = useAdministrators();

  /** @type {[import("@/jsdoc").UserData[], import("@/jsdoc").MovieData[]]} */
  const [ users, movies ] = [SWR("/api/users").data, SWR("/api/movies").data];
  if (!(users && movies && status !== "loading")) return <SplashScreen />;

  if (status === "unauthenticated") return <Error message="Bu alanı görüntülemek için oturum açmalısınız." />;
  if (!administrators.includes(data.user?.email)) return <Error message="Aradığınız sayfa bulunamadı." />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8">
      <h2 className="text-3xl font-bold tracking-tight mb-3">Yönetim Paneli</h2>
      <div className="grid grid-cols-4 gap-2 *:h-32 *:bg-[#202224] *:shadow-none *:border *:border-white/5 *:rounded-xl">
        <Card>
          <div className="flex justify-between p-6 pb-2">
            <h1 className="text-md font-semibold">Toplam Seriler</h1>
            <span className="bg-[#ddeaf814] p-2 rounded-full"><MdMovie color="#f1f7feb5" /></span>
          </div>
          <div className="p-6 pt-0">
            <h1 className="text-2xl font-bold">+{movies.length}</h1>
            <p className="text-xs opacity-80">+0.0% geçen aydan beri</p>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between p-6 pb-2">
            <h1 className="text-md font-semibold">Toplam Sezonlar</h1>
            <span className="bg-[#ddeaf814] p-2 rounded-full"><BiSolidMoviePlay color="#f1f7feb5" /></span>
          </div>
          <div className="p-6 pt-0">
            <h1 className="text-2xl font-bold">+{movies.reduce((seasons, response) => seasons + response.episodes.length, 0)}</h1>
            <p className="text-xs opacity-80">+0.0% geçen aydan beri</p>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between p-6 pb-2">
            <h1 className="text-md font-semibold">Toplam Bölümler</h1>
            <span className="bg-[#ddeaf814] p-2 rounded-full"><RiMovie2Fill color="#f1f7feb5" /></span>
          </div>
          <div className="p-6 pt-0">
            <h1 className="text-2xl font-bold">+{movies.reduce((seasons, response) => seasons + response.episodes.reduce((episodes, val) => episodes + val.length, 0), 0)}</h1>
            <p className="text-xs opacity-80">+0.0% geçen aydan beri</p>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between p-6 pb-2">
            <h1 className="text-md font-semibold">Toplam Premium</h1>
            <span className="bg-[#ddeaf814] p-2 rounded-full"><MdWorkspacePremium color="#f1f7feb5" /></span>
          </div>
          <div className="p-6 pt-0">
            <h1 className="text-2xl font-bold">+{0}</h1>
            <p className="text-xs opacity-80">+0.0% geçen aydan beri</p>
          </div>
        </Card>
      </div>
      <div className="flex *:w-1/2 space-x-3 mt-3 *:bg-[#202224] *:border *:border-white/5">
        <Card>
          <div className="p-6">
            <h1 className="font-semibold text-xl">Aksiyonlar</h1>
            <p className="text-sm opacity-80">Yeni bir seri, bölüm veya bildirim oluşturmak için burayı kullanabilirsiniz.</p>
          </div>
          <div className="p-6 pt-0 space-y-2 flex flex-col">
            <Button color="primary"><Link href={"/dashboard/movies/new"}>Yeni Seri Oluştur</Link></Button>
            <Button color="primary">Yeni Bölüm Oluştur</Button>
            <Button color="primary">Yeni Bildirim Oluştur</Button>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h1 className="font-semibold text-xl">Kullanıcılar</h1>
            <p className="text-sm opacity-80">Son zamanlarda kayıt olmuş kullanıcılar</p>
          </div>

          <div className="p-6 pt-0 space-y-3">
            {users.slice(0, 5).map((user, index) => (
              <div key={index} className="flex justify-between items-start">
                <div className="flex space-x-3">
                  <Avatar src={user.image} name={user.name} />
                  <div className="*:text-sm">
                    <h3>{user.name}</h3>
                    <span className="opacity-80">{user.email}</span>
                  </div>
                </div>
                <div>
                  <span className="text-sm bg-[#ddeaf814] text-[#f1f7feb5] py-1 px-2 rounded-full">{dayjs().locale("tr").to(dayjs(user.createdAt))}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </motion.div>
  );
}