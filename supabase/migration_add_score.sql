-- ============================================
-- BAC Info Prep — Update User Progress Table
-- Run this in Supabase Dashboard → SQL Editor
-- ============================================

-- Add score fields to track numerical performance
ALTER TABLE user_progress
ADD COLUMN IF NOT EXISTS score INTEGER DEFAULT NULL,
ADD COLUMN IF NOT EXISTS max_score INTEGER DEFAULT NULL;
