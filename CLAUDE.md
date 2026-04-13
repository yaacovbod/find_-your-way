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
    GameClient.tsx        - לוגיקת המשחק + sub-components: ActionArea, ParagraphCard, QuestionCard
data/
  exams/
    16382.ts              - שאלון 16382 (חורף תשפ"ו, Module C)
    index.ts              - אינדקס כל השאלונים
types/
  game.ts                 - טיפוסי TypeScript
AGENTS.md                 - הוראות לסוכני AI
README.md                 - תיעוד כללי
```

## סוגי שאלות
- `multiple-choice` - בחירה מרובה (הקף את המספר הנכון)
- `multi-select-options` - בחירת 2 תשובות נכונות מרשימה
- `click-text` - לחיצה על משפט אחד בטקסט
- `click-text-multi` - לחיצה על שני משפטים בטקסט
- שדה `questionPrefix` אופציונלי להצגת תחילת משפט להשלמה

## עיצוב ו-UX
- Layout דו-עמודי בדסקטופ (paragraph | question), עמוד אחד במובייל
- במובייל: ActionArea מוצג כ-fixed bar בתחתית המסך (z-20)
- צבעים: slate-950 רקע, amber-500 accent, Tailwind CSS v4

## קהל יעד
תלמידי תיכון הנערכים לבגרות באנגלית (מודול C ומודול E)

## כלל קריטי: רק חלק ה-Unseen
בכל שאלון, מכל מודול, יש לכלול **רק את חלק ה-Unseen** (הבנת הנקרא, Part I).
אין לכלול שאלות אוצר מילים (Part II / Vocabulary / Lexical Knowledge) ואין לכלול חלקי כתיבה.

## הוספת שאלון חדש מ-PDF

### מיקום קבצי ה-PDF לפי מודול
- מודול C: `c:/Users/yaaco/Documents/my-workspace/english game/module c/`
- מודול E: `c:/Users/yaaco/Documents/my-workspace/english game/module e/`

### תהליך מלא (ביצוע אוטומטי כשהמשתמש אומר "הוספתי שאלון XXXXXX" / "העליתי קובץ XXXXXX")
1. קרא את ה-PDF עם pdfplumber — זהה את המודול (C / E) לפי התיקייה:
```python
import pdfplumber, sys
sys.stdout.reconfigure(encoding='utf-8')
pdf = pdfplumber.open('c:/Users/yaaco/Documents/my-workspace/english game/module X/XXXXXX.pdf')
for i, page in enumerate(pdf.pages):
    print(f'--- PAGE {i+1} ---')
    print(page.extract_text())
```
2. זהה: כותרת הטקסט, מועד ושנה (מדף 3 של ה-PDF), מספר שאלות — רק Part I
3. צור `data/exams/XXXXXX.ts` לפי המבנה המפורט למטה
4. הוסף import ורשומה ל-`data/exams/index.ts`
5. בצע commit ו-push לגיטהאב

### מבנה קובץ שאלון (TypeScript)
```ts
import type { ExamData } from '@/types/game'
export const examXXXXXX: ExamData = {
  id: 'XXXXXX',
  title: '...',
  subject: 'English – Module C',
  year: '...',
  text: { title: '...', paragraphs: [...] },
  questions: [...]
}
```

### מיפוי סוגי שאלות לפי נוסח הבגרות
| נוסח בבגרות | type בקוד |
|---|---|
| "Circle the number of the correct answer" (1 תשובה) | `multiple-choice` |
| "Put a √ by the TWO correct answers" | `multi-select-options` |
| "Click on the sentence..." (משפט אחד) | `click-text` |
| "Click on TWO sentences..." | `click-text-multi` |
| "COMPLETE THE ANSWER / COMPLETE THE SENTENCE / ANSWER:" (מודול E) | `click-text` עם `questionPrefix` |

- `correctOption` — אינדקס 0-based לתשובה הנכונה ב-multiple-choice
- `correctOptions` — מערך אינדקסים ב-multi-select-options
- `correctSentenceIds` — מערך id-ים של משפטים נכונים
- `questionPrefix` — אופציונלי, תחילת המשפט להשלמה (למשל "Because...")
- `requiredSelections` — נדרש ב-multi-select ו-click-text-multi

### מבנה index.ts
```ts
import { examXXXXXX } from './XXXXXX'
// ...שאר ה-imports
export const allExams: ExamData[] = [exam16382, ..., examXXXXXX]
```
