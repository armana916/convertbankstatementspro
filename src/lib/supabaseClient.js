// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jhdyxpamiqdevynnrkns.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZHl4cGFtaXFkZXZ5bm5ya25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NDY5MjEsImV4cCI6MjA2OTQyMjkyMX0.C3oJ9tZJgBoW_kytaTwggDQrFLL8MH3bRj-mzrj59Po';

export const supabase = createClient(supabaseUrl, supabaseKey);
