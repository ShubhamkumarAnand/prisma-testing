import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Prisma client queries

  // Creating a task in db
  // const task = await prisma.task.create({
  //   data: {
  //     dueDate: new Date(),
  //     title: "Finish the Assignment",
  //     description: "Assignment must be finished",
  //     priority: "high",
  //     status: "inprogress",
  //   },
  // });

  // Retrieving the tasks data
  const tasks = await prisma.task.findMany({});
  console.dir(tasks, { depth: null });
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
