import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, Sparkles, User, HelpCircle, MessageSquare } from "lucide-react";

const PRESET_QUESTIONS = [
  {
    q: "Why is Delhi called the City of 7 Cities?",
    a: "Modern Delhi sits atop at least 7 distinct imperial capitals built between 1060 AD and 1911 AD: Lal Kot/Qila Rai Pithora (Mehrauli), Siri, Tughlaqabad, Jahanpanah, Firozabad, Dinpanah (Purana Qila), and Shahjahanabad (Old Delhi)!"
  },
  {
    q: "Why hasn't Mehrauli's Iron Pillar rusted in 1,600 years?",
    a: "5th-century Gupta-era metallurgists incorporated high phosphorus content into the iron. When exposed to Delhi's atmosphere, it formed a microscopic 0.05mm protective passive film of 'misawite' (iron hydrogen phosphate) that blocks oxygen corrosion completely."
  },
  {
    q: "Is Chandni Chowk really 370 years old?",
    a: "Yes! Designed in 1650 AD by Princess Jahanara Begum (Emperor Shah Jahan's daughter), it originally featured a central pool that reflected the moonlight—hence 'Chandni' (Moonlight) Chowk."
  },
  {
    q: "Why does Humayun's Tomb look like the Taj Mahal?",
    a: "Because Humayun's Tomb (built 1565 AD by Empress Bega Begum) was South Asia's first monumental Charbagh garden tomb! Shah Jahan's architects studied its double-dome design and red sandstone/white marble symmetry to design the Taj Mahal 70 years later."
  }
];

export default function AskDelhiAI() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Adaab! I am your AI Heritage Guide to Delhi. Ask me anything about Delhi's secrets, ancient monuments, traditional bazaars, or Sufi lore!"
    }
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleAskQuestion = (questionText, answerText = null) => {
    if (!questionText.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: questionText }];
    setMessages(newMessages);
    setInputQuery("");
    setIsTyping(true);

    setTimeout(() => {
      let aiResponse = answerText;

      if (!aiResponse) {
        // Fallback or dynamic response matching
        const lower = questionText.toLowerCase();
        if (lower.includes("qutub") || lower.includes("minar")) {
          aiResponse = "Qutub Minar was started in 1199 AD by Qutb-ud-din Aibak as a tower of victory. Its 5 storeys showcase intricate red sandstone calligraphy and corbelled balconies!";
        } else if (lower.includes("food") || lower.includes("paranthe") || lower.includes("eating")) {
          aiResponse = "Old Delhi's Paranthe Wali Gali in Chandni Chowk has been serving deep-fried stuffed paranthas since the 1870s! Rabri, attar, and spices have scented these streets for centuries.";
        } else if (lower.includes("nizamuddin") || lower.includes("qawwali")) {
          aiResponse = "Hazrat Nizamuddin Auliya's dargah has hosted Sufi qawwali music every Thursday evening since the 13th century, preserving Amir Khusrau's original Farsi verses!";
        } else {
          aiResponse = `Fascinating question about "${questionText}"! Delhi's heritage spans over 1,000 years of living architecture, Sufi poetry, and artisan lineages. Explore our Interactive Heritage Map above to discover more!`;
        }
      }

      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <section id="ask-delhi-section" className="py-20 bg-stone-950 text-amber-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-900/30 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>Interactive AI Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-100 mb-4">
            🤖 Ask Delhi
          </h2>
          <p className="text-amber-200/70 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Have a question about Delhi's monuments, lost cities, or secrets?
            Select a curiosity prompt or type your query below.
          </p>
        </div>

        {/* Preset Curiosity Question Chips */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {PRESET_QUESTIONS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleAskQuestion(item.q, item.a)}
              className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-amber-900/40 border border-amber-500/20 hover:border-amber-400/50 text-amber-200 text-xs font-medium transition-all text-left flex items-center gap-2 shadow-md"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{item.q}</span>
            </button>
          ))}
        </div>

        {/* Chat Window Container */}
        <div className="bg-stone-900/90 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col h-[460px]">
          {/* Top Bar */}
          <div className="p-4 bg-stone-950 border-b border-amber-500/20 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
              🤖
            </div>
            <div>
              <h3 className="font-serif font-bold text-amber-100 text-sm">
                Delhi Heritage Assistant
              </h3>
              <span className="text-[10px] text-amber-400 font-mono">
                Online • Powered by DILLI Knowledge Engine
              </span>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 font-sans">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 max-w-[85%] ${
                  msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold ${
                    msg.sender === "user"
                      ? "bg-amber-500 text-stone-950"
                      : "bg-amber-900/60 text-amber-300 border border-amber-500/30"
                  }`}
                >
                  {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-amber-500 text-stone-950 font-medium rounded-tr-none"
                      : "bg-stone-950/80 border border-amber-500/20 text-amber-100 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-amber-400/70 text-xs italic font-mono pl-10">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>Delhi AI is searching ancient archives...</span>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-4 bg-stone-950 border-t border-amber-500/20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAskQuestion(inputQuery);
              }}
              className="flex items-center gap-3"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about a monument, bazaar, or Delhi story..."
                className="flex-1 bg-stone-900 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-amber-100 placeholder-amber-400/40 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
