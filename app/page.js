import Card from "@/components/card";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div className="bg-gray-100 h-svh">
      <Navbar />
      <Card priority={3} displayByStatus={false} status="Completed" />
    </div>
  )
}
