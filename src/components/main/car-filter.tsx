"use client";
import { useQueryState } from "nuqs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CarFilter = () => {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [order, setOrder] = useQueryState("order", { defaultValue: "desc" });

  return (
    <div className="flex gap-2 max-w-3xl">
      <div className="relative flex-1">
        <Input
          className="pl-10"
          placeholder="Search car by name"
          value={search || ""}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
      <Select value={order} onValueChange={setOrder}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Sort order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="desc">Descending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
