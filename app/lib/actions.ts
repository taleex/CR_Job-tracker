"use server";

import { db } from "./db";

export async function getJobs(){
    const jobs = await db.jobItem.findMany({
        orderBy: { createdAt: "desc"},
    });

    return jobs;
}