// ===== แก้ค่าในไฟล์นี้ไฟล์เดียว ให้ตรงกับระบบของโรงเรียน =====
const CONFIG = {
  // URL ของ Edge Function (Supabase > Edge Functions > api > คัดลอก URL)
  API_URL: "https://YOUR-PROJECT-REF.supabase.co/functions/v1/api",

  // LIFF ID ของแต่ละหน้า (LINE Developers > LINE Login channel > LIFF)
  LIFF_STUDENT: "2011981207-6ebJpe6l",
  LIFF_TEACHER: "2011981207-Aw0MO4RJ",
  LIFF_ADMIN:   "2011981207-gBucylQm",
  LIFF_FORMS:   "2000000000-ffffffff",   // แบบฟอร์มนักเรียน (ปพ.8 / SDQ / EQ) → forms.html
  LIFF_CARE:    "2000000000-cccccccc",   // ระบบดูแลช่วยเหลือนักเรียน (ครู) → care.html

  // แสดงผลคะแนน SDQ/EQ ให้นักเรียนเห็นหลังส่งหรือไม่ (false = ครูเห็นในชีตเท่านั้น)
  SHOW_RESULTS_TO_STUDENT: false,

  SCHOOL_NAME: "โรงเรียนตัวอย่างวิทยา",
};
