"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const statusMap: Record<string, { label: string; icon: string; colorClass: string }> = {
  "completed": { label: "Parcurs", icon: "check_circle", colorClass: "text-green-500" },
  "in_progress": { label: "În lucru", icon: "pending", colorClass: "text-yellow-500" },
  "not_started": { label: "Neînceput", icon: "radio_button_unchecked", colorClass: "text-gray-400" },
};

export function StatusDisplay({
  itemType,
  itemId,
}: {
  itemType: "lesson" | "exercise" | "test";
  itemId: string | number;
}) {
  const [currentStatus, setCurrentStatus] = useState<string>("not_started");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `/api/progress?type=${itemType}&id=${itemId}`,
        );
        if (response.ok) {
          const data = await response.json();
          if (data.progress && data.progress.length > 0) {
            setCurrentStatus(data.progress[0].status);
          }
        }
      } catch (error) {
        console.error("Error fetching progress:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatus();
  }, [itemType, itemId]);

  const displayData = statusMap[currentStatus] || statusMap["not_started"];

  if (isLoading) {
    return (
      <div className="flex items-center gap-1.5 text-gray-300 dark:text-gray-600 animate-pulse">
        <span className="material-icons-outlined text-lg">radio_button_unchecked</span>
        <span className="text-sm font-bold">...</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-1.5", displayData.colorClass)}>
      <span className="material-icons-outlined text-lg">{displayData.icon}</span>
      <span className="text-sm font-bold whitespace-nowrap">{displayData.label}</span>
    </div>
  );
}
