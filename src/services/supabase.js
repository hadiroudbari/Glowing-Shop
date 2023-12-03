import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://faghlkyqgzimihigwgrf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhZ2hsa3lxZ3ppbWloaWd3Z3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MzA2MjQsImV4cCI6MjAxNzAwNjYyNH0.kVXp6FyENt5fnS_Q4aYgP_2MjxQQ7BydJ1TbllTwTXg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
