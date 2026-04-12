# FIND YOUR WAY - BAGRUT VERSION

## מטרת הפרויקט
משחק אינטראקטיבי לתרגול שאלות הבנת הנקרא מבגרויות באנגלית.
כל שאלה היא שלב עצמאי. בעתיד יורחב למאגר בגרויות שלם עם שמירת התקדמות בשרת.

## טכנולוגיות
- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- ניהול state צד-לקוח (useState)
- מסלול דינמי: /game/[examId]

## מבנה קבצים מרכזי
```
app/
  layout.tsx              - layout גלובלי
  page.tsx                - דף בית עם רשימת בגרויות
  game/[examId]/
    page.tsx              - עמוד משחק (server wrapper)
    GameClient.tsx        - לוגיקת המשחק (client component, 'use client')
data/
  exams/
    16382.ts              - שאלון 16382 (חורף תשפ"ו, Module C)
    index.ts              - אינדקס כל השאלונים
types/
  game.ts                 - טיפוסי TypeScript
```

## סוגי שאלות
- `multiple-choice` - בחירה מרובה (הקף את המספר הנכון)
- `multi-select-options` - בחירת 2 תשובות נכונות מרשימה
- `click-text` - לחיצה על משפט אחד בטקסט
- `click-text-multi` - לחיצה על שני משפטים בטקסט

## קהל יעד
תלמידי תיכון הנערכים לבגרות באנגלית (מודול C)

## הוספת שאלון חדש
1. צור קובץ `data/exams/XXXXXX.ts` לפי המבנה של 16382.ts
2. הוסף אותו ל-`data/exams/index.ts`
3. הוא יופיע אוטומטית בדף הבית
