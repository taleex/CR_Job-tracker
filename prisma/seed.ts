import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || "file:./dev.db",
});

const db = new PrismaClient({ adapter });

async function main() {
  const user = await db.user.create({
    data: {
      name: "Jorge Matos",
      email: "jorge@test.com",
      passwordHashed: "placeholder",
    },
  });

  await db.jobItem.createMany({
    data: [
      {
        userId: user.id,
        companyName: "Vercel",
        companyLogo: "",
        position: "Frontend Developer",
        description: "Build UI components with React and Next.js",
        salary: 45000,
        tags: "react,nextjs,typescript",
        status: "APPLIED",
      },
      {
        userId: user.id,
        companyName: "Stripe",
        companyLogo: "",
        position: "Junior Frontend Engineer",
        description: "Work on payment dashboards",
        salary: 50000,
        tags: "typescript,react",
        status: "INTERVIEW",
      },
      {
        userId: user.id,
        companyName: "Linear",
        companyLogo: "",
        position: "Product Engineer",
        description: "Build fast, polished interfaces",
        salary: 48000,
        tags: "react,design",
        status: "REJECTED",
      },
    ],
  });

  console.log("Seed data created");
}

main()
  .catch((e) => console.error(e))
  .finally(() => db.$disconnect());