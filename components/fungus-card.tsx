import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Fungus } from "@/types/fungus"

interface FungusCardProps {
  fungus: Fungus
}

export default function FungusCard({ fungus }: FungusCardProps) {
  return (
    <Link href={`/fungus/${fungus.id}`}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>{fungus.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{fungus.description.substring(0, 100)}...</p>
        </CardContent>
      </Card>
    </Link>
  )
}

