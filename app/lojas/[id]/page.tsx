import { db } from "@/app/_lib/prisma";

import LojasInfo from "./_components/lojas-infor";
import ServiceItem from "./_components/service-item";

interface LojasDetailsPagePros {
  params: {
    id?: string;
  };
}

const LojasDetailsPage = async ({ params }: LojasDetailsPagePros) => {
  if (!params.id) {
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return null;
  }
  return (
    <div>
      <LojasInfo barbershop={barbershop} />

      <div className="px-5 flex flex-col gap-3 py-6">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default LojasDetailsPage;
