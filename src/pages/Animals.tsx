import { useState } from "react";
import { Search, Filter, Plus } from "lucide-react";
import Header from "@/components/Layout/Header";
import BottomNav from "@/components/Layout/BottomNav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AnimalCard from "@/components/Animals/AnimalCard";

const mockAnimals = [
  {
    id: "1",
    tag: "BR-2024-0458",
    species: "Bovino",
    breed: "Nelore",
    location: "Fazenda São José - Pasto 12",
    lastUpdate: "há 2 horas",
    status: "active" as const,
  },
  {
    id: "2",
    tag: "BR-2024-0459",
    species: "Bovino",
    breed: "Angus",
    location: "Fazenda Esperança - Curral A",
    lastUpdate: "há 1 dia",
    status: "active" as const,
  },
  {
    id: "3",
    tag: "BR-2024-0442",
    species: "Bovino",
    breed: "Brahman",
    location: "Fazenda Santa Clara - Quarentena",
    lastUpdate: "há 3 dias",
    status: "quarantine" as const,
  },
  {
    id: "4",
    tag: "BR-2024-0401",
    species: "Bovino",
    breed: "Nelore",
    location: "Fazenda Boa Vista",
    lastUpdate: "há 5 dias",
    status: "transferred" as const,
  },
];

const Animals = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Animais</h2>
            <p className="text-sm text-muted-foreground">{mockAnimals.length} animais cadastrados</p>
          </div>
          <Button size="icon" className="rounded-full h-12 w-12 shadow-lg">
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por tag, espécie ou localização..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Animals List */}
        <div className="space-y-3">
          {mockAnimals.map((animal) => (
            <AnimalCard key={animal.id} {...animal} />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Animals;
