"use client";

import { useState, useEffect } from "react";

type ProgressStatus = "not_started" | "in_progress" | "completed";

interface StatusSelectorProps {
  itemType: "lesson" | "exercise" | "test";
  itemId: number;
  variant?: "default" | "inline" | "compact";
  forceStatus?: "not_started" | "in_progress" | "completed";
}

const STATUS_OPTIONS: {
  value: ProgressStatus;
  label: string;
  icon: string;
  activeClass: string;
}[] = [
  {
    value: "not_started",
    label: "Neînceput",
    icon: "radio_button_unchecked",
    activeClass:
      "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 ring-1 ring-gray-400 dark:ring-gray-500",
  },
  {
    value: "in_progress",
    label: "În lucru",
    icon: "pending",
    activeClass:
      "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-600 ring-1 ring-amber-400 dark:ring-amber-500",
  },
  {
    value: "completed",
    label: "Parcurs",
    icon: "check_circle",
    activeClass:
      "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-300 dark:border-green-600 ring-1 ring-green-400 dark:ring-green-500",
  },
];

export function StatusSelector({ itemType, itemId, variant = "default", forceStatus }: StatusSelectorProps) {
  const [status, setStatus] = useState<ProgressStatus>("not_started");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Synchronize with external status overrides (e.g. hitting 'Submit' elsewhere on the page)
  useEffect(() => {
    if (forceStatus) {
      setStatus(forceStatus);
    }
  }, [forceStatus]);

  // Fetch current status on mount
  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch(`/api/progress?type=${itemType}&id=${itemId}`);
        if (res.ok) {
          const data = await res.json();
          if (data.progress && data.progress.length > 0) {
            setStatus(data.progress[0].status);
          }
        }
      } catch {
        // silently fail — user may not be logged in
      } finally {
        setLoading(false);
      }
    }

    fetchStatus();
  }, [itemType, itemId]);

  const handleStatusChange = async (newStatus: ProgressStatus) => {
    if (saving || newStatus === status) return;

    const previousStatus = status;
    setStatus(newStatus); // optimistic update
    setSaving(true);

    try {
      const res = await fetch("/api/progress", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemType,
          itemId,
          status: newStatus,
        }),
      });

      if (!res.ok) {
        setStatus(previousStatus); // revert on error
      }
    } catch {
      setStatus(previousStatus); // revert on error
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    if (variant === "inline") {
      return (
        <span className="material-icons-outlined text-gray-400 animate-spin text-sm">
          sync
        </span>
      );
    }
    return (
      <div className="bg-white dark:bg-navy-surface rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 mt-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-icons-outlined text-gray-400 animate-spin">
            sync
          </span>
          <span className="text-sm text-gray-400">Se încarcă statusul...</span>
        </div>
      </div>
    );
  }

  const buttonsContent = (
    <div className={`flex flex-row gap-1.5 ${variant === "default" ? "sm:gap-3 flex-col sm:flex-row" : ""}`}>
      {STATUS_OPTIONS.map((option) => {
        const isActive = status === option.value;
        return (
          <button
            key={option.value}
            onClick={(e) => {
              e.preventDefault();
              handleStatusChange(option.value);
            }}
            disabled={saving}
            className={`
              flex items-center justify-center gap-1 sm:gap-2 transition-all cursor-pointer
              ${
                variant === "inline"
                  ? "px-2 py-1.5 rounded-lg text-xs"
                  : "flex-1 px-4 py-3 rounded-xl border text-sm"
              }
              ${
                isActive
                  ? option.activeClass
                  : variant === "inline"
                  ? "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }
              ${saving ? "opacity-60 cursor-wait" : ""}
            `}
          >
            <span className={`material-icons-outlined ${variant === "inline" ? "text-base" : "text-lg"}`}>
              {option.icon}
            </span>
            {option.label}
          </button>
        );
      })}
    </div>
  );

  if (variant === "inline") {
    return buttonsContent;
  }

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="bg-primary/10 text-primary p-1.5 rounded-lg">
            <span className="material-icons-outlined text-xl text-primary">bookmark</span>
          </span>
          <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">
            Status
          </h3>
          {saving && (
            <span className="material-icons-outlined text-sm animate-spin text-gray-400">
              sync
            </span>
          )}
        </div>
        {buttonsContent}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-navy-surface rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 mt-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-primary/10 text-primary p-1.5 rounded-lg">
          <span className="material-icons-outlined text-xl">bookmark</span>
        </span>
        <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">
          Status
        </h3>
        {saving && (
          <span className="text-xs text-gray-400 ml-auto flex items-center gap-1">
            <span className="material-icons-outlined text-sm animate-spin">
              sync
            </span>
            Se salvează...
          </span>
        )}
      </div>

      {buttonsContent}
    </div>
  );
}
