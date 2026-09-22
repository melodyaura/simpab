/* =====================================================================
   SIMPAB — pengaturan koneksi ke Supabase
   Isi dua nilai di bawah dari Supabase Dashboard:
   Project Settings → API (atau: Connect → App Frameworks)
     - Project URL      → SUPABASE_URL
     - anon / public key (atau "publishable key") → SUPABASE_ANON_KEY
   Kunci "anon/publishable" memang aman ditaruh di sini karena semua data
   dilindungi aturan akses di database. JANGAN pernah menaruh kunci
   "service_role" / "secret" di berkas ini.
   ===================================================================== */
window.SIMPAB_CONFIG = {
  SUPABASE_URL: 'https://jockejqjxibkkyowslkx.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvY2tlanFqeGlia2t5b3dzbGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwODcxMzQsImV4cCI6MjEwNTY2MzEzNH0._SokDSmsIXyZ3HtwS8MaTw12I3AGlf0_cdXf9DxbW_o'
};
