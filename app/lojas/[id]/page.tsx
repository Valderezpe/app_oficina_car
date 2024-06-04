import { db } from "@/app/_lib/prisma";
import LojasInfo from "./_components/lojas-infor";

interface LojasDetailsPagePros {
  params: {
    id?: string;
  };
}

const LojasDetailsPage = async ({ params }: LojasDetailsPagePros) => {
  if (!params.id) {
    return null;
  }

  const lojasinfo = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!lojasinfo) {
    return null;
  }
  return <LojasInfo barbershop={lojasinfo} />;
};

export default LojasDetailsPage;
