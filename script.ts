import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Prisma client queries

  // Creating a user in db

  // const user = await prisma.user.create({
  //   data: {
  //     name: "bimal",
  //     email: "email@abc.com",
  //     post:{
  //       create:{
  //         title: "Hello world",
  //         content: "First step into the programming",
  //         published: true
  //       }
  //     }
  //   },
  // });

  // Retrieving the users data
  const users = await prisma.user.findMany({
    include: {
      post: true,
    },
  });
  console.dir(users, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
