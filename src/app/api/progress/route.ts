import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { hasSupabaseEnv } from "@/lib/supabase/config";

// GET /api/progress — fetch user progress
// Query params: ?type=lesson&id=1 (optional, returns all if omitted)
export async function GET(request: NextRequest) {
  if (!hasSupabaseEnv()) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const itemType = searchParams.get("type");
  const itemId = searchParams.get("id");

  let query = supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", user.id);

  if (itemType) {
    query = query.eq("item_type", itemType);
  }
  if (itemId) {
    query = query.eq("item_id", parseInt(itemId));
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ progress: data });
}

// PUT /api/progress — upsert user progress
// Body: { itemType: "lesson", itemId: 1, status: "completed" }
export async function PUT(request: NextRequest) {
  if (!hasSupabaseEnv()) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { itemType, itemId, status } = body;

  if (!itemType || !itemId || !status) {
    return NextResponse.json(
      { error: "Missing required fields: itemType, itemId, status" },
      { status: 400 }
    );
  }

  const validTypes = ["lesson", "exercise", "test"];
  const validStatuses = ["not_started", "in_progress", "completed"];

  if (!validTypes.includes(itemType)) {
    return NextResponse.json({ error: "Invalid itemType" }, { status: 400 });
  }
  if (!validStatuses.includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("user_progress")
    .upsert(
      {
        user_id: user.id,
        item_type: itemType,
        item_id: itemId,
        status,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,item_type,item_id" }
    )
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ progress: data });
}
