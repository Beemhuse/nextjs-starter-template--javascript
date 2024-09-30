"use client"
import DashboardCard from "@/components/card/DashboardCard";
import Table from "@/components/reusables/table/Table";
import Typography from "@/components/reusables/typography/Typography";
import React from "react";
import { FaFilter, FaUser, } from "react-icons/fa";
import { BsBoxArrowInDownRight, BsBoxArrowUpRight, BsPersonFill } from "react-icons/bs";
import { columns } from "@/lib/constants/dashboardData";
import useSWR from "swr";

export default function Dashboard() {
 const {data: dashboard, isLoading } = useSWR("/adminapp/dashboard/")

 return (
    <section className="p-2 font-poppins">
     <Typography>Dashboard</Typography>
      <Table columns={columns} data={dashboard?.recent_transactions ?? []} isGray={false} isLoading={isLoading} />
    </section>
  );
}
