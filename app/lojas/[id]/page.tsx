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
    <LojasInfo barbershop={barbershop} />

    // <div>
    //   <div className="h-[250px] w-full relative">
    //     <Button
    //       size="icon"
    //       variant="outline"
    //       className="z-50 absolute top-2 left-2"
    //     >
    //       <ChevronLeftIcon />
    //     </Button>

    //     <Button
    //       size="icon"
    //       variant="outline"
    //       className="z-50 absolute top-2 right-2"
    //     >
    //       <MenuIcon />
    //     </Button>
    //     <Image
    //       src={barbershop.imageUrl}
    //       fill
    //       alt={barbershop.name}
    //       style={{
    //         objectFit: "cover",
    //       }}
    //       className="opacity-85"
    //     />

    //     {/* <barbershop barbershop={barbershop} /> */}

    //     {barbershop.services.map((service) => (
    //       <ServiceItem key={service.id} service={service} />
    //     ))}
    //   </div>
    //   <div className="px-5 py-3 pb-6 border-b border-solid border-secondary">
    //     <h1 className="text-xl font-bold">{barbershop.name}</h1>
    //     <div className="flex items-center gap-1 mt-2">
    //       <MapPinIcon className="text-primary" size={18} />
    //       <p className="text-sm">{barbershop.address}</p>
    //     </div>

    //     <div className="flex items-center gap-1 mt-2">
    //       <StarIcon className="text-primary" size={18} />
    //       <p className="text-sm">5,0 (895 avaliações)</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LojasDetailsPage;
