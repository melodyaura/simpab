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
  SUPABASE_URL: 'https://GANTI-DENGAN-PROJECT-ANDA.supabase.co',
  SUPABASE_ANON_KEY: 'GANTI-DENGAN-ANON-KEY-ANDA'
};
