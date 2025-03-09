"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      className="bg-amber-500 mb-[50px] hover:bg-[#e58b00] focus-visible:bg-[#e58b00] transition-colors duration-250"
      title="Back"
      onClick={() => router.back()}
    >
      <ArrowLeft />
      Back
    </Button>
  );
}
