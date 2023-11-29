import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fafspaqijfbvrmhrxeza.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhZnNwYXFpamZidnJtaHJ4ZXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5NDM4MTYsImV4cCI6MjAxNjUxOTgxNn0.QRtYQGcQkNTj0zJ1SVuQWOQ4O8RxzyJBG9-O7z7aHCc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

export { supabaseUrl };
