"use client";

import Link from "next/link";
import type { User } from "@supabase/supabase-js";

interface ProfileContentProps {
  user: User | null;
}

/* ── Mock stats for demonstration ── */
const MOCK_STATS = {
  lessonsCompleted: 2,
  totalLessons: 6,
  exercisesSolved: 14,
  testsTaken: 3,
  averageScore: 78,
  streak: 5,
};

const RECENT_ACTIVITY = [
  {
    icon: "menu_book",
    title: "Cantitatea de informație",
    subtitle: "Lecția 1 parcursă",
    time: "acum 2 ore",
    color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: "quiz",
    title: "Test Online #1",
    subtitle: "Scor: 85%",
    time: "acum 1 zi",
    color: "text-green-500 bg-green-50 dark:bg-green-900/20",
  },
  {
    icon: "code",
    title: "Exercițiu: Variabile",
    subtitle: "Rezolvat cu succes",
    time: "acum 2 zile",
    color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: "menu_book",
    title: "Tipuri de Date în C++",
    subtitle: "Lecția 2 parcursă",
    time: "acum 3 zile",
    color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20",
  },
];

const ACHIEVEMENTS = [
  {
    icon: "local_fire_department",
    title: "Prima Lecție",
    description: "Ai parcurs prima lecție",
    unlocked: true,
    color: "from-orange-400 to-red-500",
  },
  {
    icon: "emoji_events",
    title: "Test Perfect",
    description: "Scor de 100% la un test",
    unlocked: false,
    color: "from-yellow-400 to-amber-500",
  },
  {
    icon: "bolt",
    title: "Serie de 7 zile",
    description: "Activitate 7 zile la rând",
    unlocked: false,
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: "school",
    title: "Toate Lecțiile",
    description: "Parcurge toate lecțiile",
    unlocked: false,
    color: "from-green-400 to-emerald-500",
  },
];

export function ProfileContent({ user }: ProfileContentProps) {
  const displayName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Elev";
  const email = user?.email || "elev@bacinfo.ro";
  const avatar = user?.user_metadata?.avatar_url;
  const joinDate = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("ro-RO", {
        year: "numeric",
        month: "long",
      })
    : "Februarie 2026";

  const progressPercent = Math.round(
    (MOCK_STATS.lessonsCompleted / MOCK_STATS.totalLessons) * 100
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      {/* ── Profile Header ── */}
      <div className="relative bg-white dark:bg-navy-surface rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden mb-8">
        {/* Banner gradient */}
        <div className="h-36 sm:h-44 bg-linear-to-r from-primary via-orange-500 to-amber-400 relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bTEyIDB2Nmg2di02aC02em0tMTIgMTJ2Nmg2di02aC02em0xMiAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        </div>

        <div className="px-6 sm:px-8 pb-8 -mt-16 sm:-mt-20 relative">
          <div className="flex flex-col sm:flex-row sm:items-end sm:gap-6">
            {/* Avatar */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl border-4 border-white dark:border-navy-surface shadow-xl bg-linear-to-br from-primary to-orange-600 flex items-center justify-center overflow-hidden shrink-0">
              {avatar ? (
                <img
                  src={avatar}
                  alt={displayName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white text-5xl font-bold font-display">
                  {displayName.charAt(0).toUpperCase()}
                </span>
              )}
            </div>

            {/* Name & meta */}
            <div className="mt-4 sm:mt-0 sm:pb-1 flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white font-display">
                {displayName}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {email}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700/50 px-3 py-1 rounded-full">
                  <span className="material-icons-outlined text-[14px]">
                    verified
                  </span>
                  Cont Activ
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                  <span className="material-icons-outlined text-[14px]">
                    calendar_today
                  </span>
                  Membru din {joinDate}
                </span>
              </div>
            </div>

            {/* Edit button */}
            <div className="mt-4 sm:mt-0 shrink-0">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all text-sm font-medium bg-white dark:bg-navy-deep">
                <span className="material-icons-outlined text-lg">edit</span>
                Editează profilul
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <StatCard
          icon="menu_book"
          label="Lecții parcurse"
          value={`${MOCK_STATS.lessonsCompleted}/${MOCK_STATS.totalLessons}`}
          color="text-blue-500 bg-blue-50 dark:bg-blue-900/20"
        />
        <StatCard
          icon="code"
          label="Exerciții rezolvate"
          value={MOCK_STATS.exercisesSolved.toString()}
          color="text-purple-500 bg-purple-50 dark:bg-purple-900/20"
        />
        <StatCard
          icon="quiz"
          label="Teste date"
          value={MOCK_STATS.testsTaken.toString()}
          color="text-green-500 bg-green-50 dark:bg-green-900/20"
        />
        <StatCard
          icon="analytics"
          label="Scor mediu"
          value={`${MOCK_STATS.averageScore}%`}
          color="text-amber-500 bg-amber-50 dark:bg-amber-900/20"
        />
        <StatCard
          icon="local_fire_department"
          label="Serie curentă"
          value={`${MOCK_STATS.streak} zile`}
          color="text-red-500 bg-red-50 dark:bg-red-900/20"
        />
        <StatCard
          icon="trending_up"
          label="Progres total"
          value={`${progressPercent}%`}
          color="text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── Left Column: Progress + Activity ── */}
        <div className="lg:col-span-2 space-y-8">
          {/* Progress Card */}
          <div className="bg-white dark:bg-navy-surface rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white font-display flex items-center gap-3 mb-6">
              <span className="bg-primary/10 text-primary p-2 rounded-lg">
                <span className="material-icons-outlined">school</span>
              </span>
              Progresul meu
            </h2>

            {/* Overall progress bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Lecții parcurse
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {MOCK_STATS.lessonsCompleted} / {MOCK_STATS.totalLessons}
                </span>
              </div>
              <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-primary to-orange-400 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              <SkillBar label="Fundamente" value={100} color="from-blue-500 to-cyan-400" />
              <SkillBar label="C++" value={40} color="from-indigo-500 to-purple-400" />
              <SkillBar label="Algoritmi" value={10} color="from-green-500 to-emerald-400" />
              <SkillBar label="Structuri de date" value={0} color="from-amber-500 to-yellow-400" />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-navy-surface rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white font-display flex items-center gap-3 mb-6">
              <span className="bg-secondary/10 text-secondary p-2 rounded-lg">
                <span className="material-icons-outlined">history</span>
              </span>
              Activitate recentă
            </h2>

            <div className="space-y-1">
              {RECENT_ACTIVITY.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${activity.color}`}
                  >
                    <span className="material-icons-outlined text-xl">
                      {activity.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.subtitle}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
              <Link
                href="/lessons"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-orange-600 transition-colors"
              >
                Vezi toate lecțiile
                <span className="material-icons-outlined text-lg">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Right Column: Achievements + Quick Actions ── */}
        <div className="space-y-8">
          {/* Achievements */}
          <div className="bg-white dark:bg-navy-surface rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white font-display flex items-center gap-3 mb-6">
              <span className="bg-amber-50 dark:bg-amber-900/20 text-amber-500 p-2 rounded-lg">
                <span className="material-icons-outlined">emoji_events</span>
              </span>
              Realizări
            </h2>

            <div className="space-y-3">
              {ACHIEVEMENTS.map((achievement, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 p-3 rounded-xl border transition-all ${
                    achievement.unlocked
                      ? "border-amber-200 dark:border-amber-700/40 bg-amber-50/50 dark:bg-amber-900/10"
                      : "border-gray-100 dark:border-gray-800 opacity-50 grayscale"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-linear-to-br ${achievement.color} text-white shadow-sm`}
                  >
                    <span className="material-icons-outlined text-xl">
                      {achievement.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {achievement.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.unlocked && (
                    <span className="material-icons-outlined text-amber-500 text-xl">
                      check_circle
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-navy-surface rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white font-display flex items-center gap-3 mb-6">
              <span className="bg-green-50 dark:bg-green-900/20 text-green-500 p-2 rounded-lg">
                <span className="material-icons-outlined">bolt</span>
              </span>
              Acțiuni rapide
            </h2>

            <div className="space-y-3">
              <QuickActionLink
                href="/lessons"
                icon="menu_book"
                label="Continuă lecția"
                sublabel="Tipuri de Date în C++"
              />
              <QuickActionLink
                href="/test-online"
                icon="quiz"
                label="Dă un test"
                sublabel="3 teste disponibile"
              />
              <QuickActionLink
                href="/exercises"
                icon="code"
                label="Rezolvă exerciții"
                sublabel="12 exerciții noi"
              />
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white dark:bg-navy-surface rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6">
            <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
              Setări cont
            </h3>
            <button className="w-full text-left flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-sm font-medium">
              <span className="material-icons-outlined text-lg">logout</span>
              Deconectează-te
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: string;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-white dark:bg-navy-surface rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-4 text-center">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 ${color}`}
      >
        <span className="material-icons-outlined text-xl">{icon}</span>
      </div>
      <p className="text-xl font-bold text-gray-900 dark:text-white">{value}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</p>
    </div>
  );
}

function SkillBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
          {value}%
        </span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full bg-linear-to-r ${color} rounded-full transition-all duration-700`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function QuickActionLink({
  href,
  icon,
  label,
  sublabel,
}: {
  href: string;
  icon: string;
  label: string;
  sublabel: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-primary hover:shadow-sm transition-all group"
    >
      <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-navy-deep flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
        <span className="material-icons-outlined text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors text-xl">
          {icon}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
          {label}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{sublabel}</p>
      </div>
      <span className="material-icons-outlined text-gray-300 dark:text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all text-lg">
        chevron_right
      </span>
    </Link>
  );
}
