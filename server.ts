import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

// Explicit verification and sitemap routes
app.get('/googleae243f73bf53395f.html', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'googleae243f73bf53395f.html'));
});

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'sitemap.xml'));
});

// Initialize Gemini Client Lazily
let genAI: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!genAI) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('GEMINI_API_KEY environment variable is missing.');
    }
    genAI = new GoogleGenAI({
      apiKey: apiKey || '',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return genAI;
}

const SYSTEM_INSTRUCTION = `
You are the official AI Assistant for Mr. Muhammad Ayub, District Population Welfare Officer (DPWO), Islamabad Capital Territory (ICT), Pakistan.
Your responses MUST be concise, direct, helpful, and under 100 words.

OFFICIAL KNOWLEDGE BASE:
- Officer Name: Mr. Muhammad Ayub, DPWO Islamabad
- Address: District Population Welfare Office, DHO Complex, Sector G-11/4, Islamabad
- Email: dpwo.islamabad@pwd.gov.pk | Phone: +92 (51) 9260142 / +92 (51) 9260143
- Timings: Mon-Fri: 09:00 AM – 03:00 PM (Sat-Sun Closed)
- Supervises: 18+ District Health Outlets (FWCs, RHSC-A at PIMS, RHSC-B at Poly Clinic, Mobile Welfare Units)
- Services: Family Planning Counseling, Contraceptives, MNCH Care, Lady Health Visitor trainings.

INSTRUCTIONS:
1. Answer in concise bullet points directly in the user's language.
2. Keep replies short and fast.
3. Append action tags if relevant: [ACTION:SCHEDULE_MEETING], [ACTION:VIEW_OUTLETS], [ACTION:DOWNLOAD_RESOURCES], [ACTION:CALL_OFFICE]
`;

// Instant matching cache for common queries to deliver <10ms instant response
function checkFastMatch(message: string): { reply: string; actions: string[] } | null {
  const q = message.toLowerCase().trim();

  // Meeting / Appointment
  if (q.includes('ملاقات') || q.includes('appointment') || q.includes('meeting') || q.includes('schedule') || q.includes('وقت')) {
    return {
      reply: `**جناب محمد ایوب (DPWO اسلام آباد) سے ملاقات کا طریقہ کار:**

- **دفتر کے اوقات:** پیر تا جمعہ (صبح 09:00 بجے تا دوپہر 03:00 بجے)
- **مقام:** District Population Welfare Office, DHO Complex, Sector G-11/4, Islamabad
- **آن لائن وقت حاصل کریں:** نیچے دیے گئے بٹن پر کلک کر کے فارم پر کریں۔`,
      actions: ['SCHEDULE_MEETING', 'CALL_OFFICE']
    };
  }

  // Outlets / Facilities / Centers
  if (q.includes('مرکز') || q.includes('مراکز') || q.includes('outlet') || q.includes('center') || q.includes('fwc') || q.includes('rhsc') || q.includes('pims') || q.includes('hospital')) {
    return {
      reply: `**اسلام آباد کے ضلعی آبادیاتی صحتی مراکز (18+ Outlets):**

- **FWCs (فیملی ویلفیئر سنٹرز):** G-7/2، راوت، بھارہ کہو اور دیگر تمام یونین کونسلز
- **RHSC-A:** پمز ہسپتال (PIMS Sector G-8/3)
- **RHSC-B:** پولی کلینک ہسپتال (Sector G-6/2)
- **موبائل ویلفیئر یونٹس:** دیہی علاقوں میں مفت طبی خدمات

تفصیلی فہرست اور نقشہ دیکھنے کے لیے بٹن دبائیں۔`,
      actions: ['VIEW_OUTLETS', 'CALL_OFFICE']
    };
  }

  // Contact / Address / Phone / Email
  if (q.includes('رابطہ') || q.includes('نمبر') || q.includes('فون') || q.includes('پتہ') || q.includes('address') || q.includes('phone') || q.includes('contact') || q.includes('email') || q.includes('location')) {
    return {
      reply: `**ضلعی شعبہ آبادیاتی بہبود اسلام آباد - رابطہ کی تفصیلات:**

- 📍 **دفتر کا پتہ:** DHO Complex, Sector G-11/4, Islamabad
- 📞 **فون نمبر:** +92 (51) 9260142 | +92 (51) 9260143
- ✉️ **ای میل:** dpwo.islamabad@pwd.gov.pk
- 🌐 **ویب سائٹ:** www.dpwoislamabad.net`,
      actions: ['CALL_OFFICE', 'SCHEDULE_MEETING']
    };
  }

  return null;
}

// API Endpoint for AI Assistant
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    // 1. Check ultra-fast instant local match first (<5ms response time)
    const fastResult = checkFastMatch(message);
    if (fastResult) {
      res.json(fastResult);
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.json({
        reply: `سلام! میں ضلع آبادیاتی بہبود اسلام آباد (DPWO) کا اے آئی معاون ہوں۔
        
جناب محمد ایوب (ضلعی افسر) کے دفتر کے حوالے سے معلومات:
- 🏥 ضلعی صحتی مراکزی پتے (FWCs / RHSCs)
- 📅 ملاقات کا وقت (G-11/4, Islamabad)
- 📞 رابطہ نمبر (+92 51 9260142)`,
        actions: ['SCHEDULE_MEETING', 'VIEW_OUTLETS', 'CALL_OFFICE']
      });
      return;
    }

    const ai = getGenAI();

    // Limit conversation history to last 2 exchanges for maximum speed
    const contents: any[] = [];
    if (Array.isArray(conversationHistory)) {
      const recent = conversationHistory.slice(-2);
      for (const msg of recent) {
        if (msg.role && msg.text) {
          contents.push({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
          });
        }
      }
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2,
        maxOutputTokens: 350,
      },
    });

    let fullText = response.text || 'معذرت، میں اس وقت آپ کی درخواست کا جواب تیار نہیں کر سکا۔';

    // Parse action tags if present
    const actions: string[] = [];
    const actionRegex = /\[ACTION:([A_Z_]+)\]/g;
    let match;
    while ((match = actionRegex.exec(fullText)) !== null) {
      actions.push(match[1]);
    }
    const cleanText = fullText.replace(/\[ACTION:[A_Z_]+\]/g, '').trim();

    res.json({
      reply: cleanText,
      actions: actions
    });

  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({
      error: 'Failed to process request',
      details: error.message || String(error)
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
