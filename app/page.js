"use client";
import Card from "@/components/card";
import DisplayByStatus from "@/components/displayByStatus";
import DisplayByUser from "@/components/displayByUser";
import Navbar from "@/components/navbar";
import { useBoundStore } from "@/store";


export default function Home() {
  const grouping = useBoundStore(state => state.grouping);

  const showByGroup = () => {
    if (grouping === "status") {
      return <DisplayByStatus />
    } else if (grouping === "user") {
      return <DisplayByUser />
    }
  }

  return (
    <div className="bg-gray-100 h-full">
      <Navbar />
      {showByGroup()}
    </div>
  )
}
