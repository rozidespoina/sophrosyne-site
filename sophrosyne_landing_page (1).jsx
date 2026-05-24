import React from "react";
import { motion } from "framer-motion";
import { Leaf, ScanLine, Footprints, Trophy, BarChart3, Brain, Globe2, Sparkles, Users, Building2, Camera, Share2, MessageCircle, CalendarDays, Bot, Car, Bike, Recycle, Zap, PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SophrosyneLandingPage() {
  const features = [
    {
      icon: <ScanLine className="h-6 w-6" />,
      title: "Scan Receipts & Products",
      text: "Ο χρήστης σαρώνει αποδείξεις ή barcodes και βλέπει πόσο βιώσιμες είναι οι αγορές του.",
    },
    {
      icon: <Footprints className="h-6 w-6" />,
      title: "Green Mobility Tracking",
      text: "Η εφαρμογή συνδέεται με δεδομένα βημάτων και μετακινήσεων για να αναγνωρίζει πιο πράσινες επιλογές.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Eco Points & Rewards",
      text: "Κάθε βιώσιμη επιλογή μετατρέπεται σε πόντους, badges και πιθανές ανταμοιβές μέσω συνεργασιών.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Suggestions",
      text: "Το AI προτείνει μικρές, ρεαλιστικές αλλαγές για βελτίωση του προσωπικού eco-score.",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Eco Stories",
      text: "Οι χρήστες ανεβάζουν φωτογραφίες από βιώσιμες πράξεις της καθημερινότητάς τους και τις κοινοποιούν σε Instagram, Facebook ή μέσα στην κοινότητα.",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Green Communities",
      text: "Chat groups και θεματικές κοινότητες φέρνουν σε επαφή ανθρώπους, συλλόγους και ομάδες που οργανώνουν περιβαλλοντικές δράσεις.",
    },
  ];

  const dashboardStats = [
    { label: "Eco Score", value: "78/100" },
    { label: "CO₂ Saved", value: "12.4 kg" },
    { label: "Green Trips", value: "18" },
    { label: "Sustainable Choices", value: "34" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F8F3] text-[#123026]">
      <section className="relative overflow-hidden px-6 py-8 md:px-12 lg:px-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#9DE0B5]/25 blur-3xl" />
          <div className="absolute right-[-180px] top-24 h-[620px] w-[620px] rounded-full bg-[#1F6B4A]/10 blur-3xl" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            className="absolute right-10 top-28 hidden h-72 w-72 rounded-full border border-[#1F6B4A]/20 md:block"
          >
            <div className="absolute inset-8 rounded-full border border-[#1F6B4A]/10" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-[#1F6B4A]/10" />
            <div className="absolute left-0 top-1/2 h-px w-full bg-[#1F6B4A]/10" />
            <div className="absolute left-12 top-16 h-6 w-20 rounded-full bg-[#1F6B4A]/15" />
            <div className="absolute bottom-20 right-10 h-5 w-24 rounded-full bg-[#1F6B4A]/15" />
            <div className="absolute bottom-12 left-20 h-4 w-16 rounded-full bg-[#1F6B4A]/15" />
          </motion.div>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-[#1F6B4A]/30"
              style={{ left: `${12 + i * 14}%`, top: `${18 + (i % 3) * 18}%` }}
              animate={{ y: [0, -18, 0], opacity: [0.25, 0.75, 0.25] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={`leaf-${i}`}
              className="absolute text-[#1F6B4A]/20"
              style={{ left: `${72 + i * 6}%`, top: `${18 + i * 12}%` }}
              animate={{ y: [0, 16, 0], rotate: [0, 10, -8, 0] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              <Leaf className="h-8 w-8" />
            </motion.div>
          ))}
        </div>
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1F6B4A] text-white shadow-sm">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide">SOPHROSYNE</p>
              <p className="mt-1 text-[11px] text-[#7B8F84]">Created by Ροζή Δέσποινα & Νίκος Κωνσταντόπουλος</p>
              <p className="text-xs text-[#5D7568]">Measure. Improve. Live Greener.</p>
            </div>
          </div>
          <Button className="rounded-2xl bg-[#1F6B4A] px-5 text-white hover:bg-[#18573C]">Join the pilot</Button>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-[#1F6B4A] shadow-sm">
              <Sparkles className="h-4 w-4" /> Digital sustainability platform
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Η βιωσιμότητα γίνεται μετρήσιμη καθημερινή πράξη.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4D665A]">
              Το SOPHROSYNE βοηθά τον χρήστη να κατανοεί και να βελτιώνει το οικολογικό του αποτύπωμα μέσα από αγορές, μετακινήσεις, συνήθειες, κοινοτικές δράσεις και έξυπνες προτάσεις.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl bg-[#1F6B4A] px-7 py-6 text-base text-white hover:bg-[#18573C]">Explore the concept</Button>
              <Button variant="outline" className="rounded-2xl border-[#1F6B4A]/30 px-7 py-6 text-base">View impact demo</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="flex justify-center">
            <div className="relative h-[600px] w-[310px] rounded-[3rem] border-[10px] border-[#10261D] bg-[#10261D] shadow-2xl">
              <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
              <div className="h-full w-full overflow-hidden rounded-[2.35rem] bg-white p-5">
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#6B7D72]">Today</p>
                    <h3 className="text-xl font-bold">Eco Dashboard</h3>
                  </div>
                  <div className="rounded-2xl bg-[#E4F3EA] p-3 text-[#1F6B4A]"><Leaf className="h-5 w-5" /></div>
                </div>

                <div className="mt-8 rounded-[2rem] bg-[#1F6B4A] p-6 text-white">
                  <p className="text-sm opacity-80">Your Eco Score</p>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-5xl font-bold">78</span><span className="mb-2 text-lg opacity-80">/100</span>
                  </div>
                  <div className="mt-5 h-3 rounded-full bg-white/25">
                    <div className="h-3 w-[78%] rounded-full bg-white" />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Card className="rounded-3xl border-0 bg-[#F0F7F2] shadow-none">
                    <CardContent className="p-4">
                      <Globe2 className="mb-2 h-5 w-5 text-[#1F6B4A]" />
                      <p className="text-lg font-bold">12.4kg</p>
                      <p className="text-xs text-[#6B7D72]">CO₂ saved</p>
                    </CardContent>
                  </Card>
                  <Card className="rounded-3xl border-0 bg-[#F0F7F2] shadow-none">
                    <CardContent className="p-4">
                      <Footprints className="mb-2 h-5 w-5 text-[#1F6B4A]" />
                      <p className="text-lg font-bold">18</p>
                      <p className="text-xs text-[#6B7D72]">Green trips</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-5 rounded-3xl bg-[#FFF5DE] p-4">
                  <p className="text-sm font-semibold">AI Recommendation</p>
                  <p className="mt-2 text-xs leading-5 text-[#6B5B3B]">Replace 2 car trips with public transport this week to improve your score by +6 points.</p>
                </div>

                <div className="mt-5 rounded-3xl border border-[#E8ECE8] p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[#E4F3EA] p-2 text-[#1F6B4A]"><Trophy className="h-4 w-4" /></div>
                    <div>
                      <p className="text-sm font-semibold">Campus Challenge</p>
                      <p className="text-xs text-[#6B7D72]">You are #12 this week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F6B4A]">The Problem</p>
            <h2 className="text-3xl font-bold md:text-5xl">Οι πολίτες θέλουν να ζουν πιο πράσινα, αλλά δεν ξέρουν πάντα πώς να το μετρήσουν.</h2>
            <p className="mt-5 text-lg leading-8 text-[#53675D]">
              Η πληροφορία γύρω από τις βιώσιμες επιλογές είναι συχνά διάσπαρτη. Το SOPHROSYNE μετατρέπει την καθημερινή συμπεριφορά σε καθαρό feedback, ώστε ο χρήστης να βλέπει τι κάνει ήδη σωστά και πού μπορεί να βελτιωθεί.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F6B4A]">How it works</p>
              <h2 className="text-3xl font-bold md:text-5xl">Από καθημερινές επιλογές σε πραγματικό eco impact.</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, idx) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                <Card className="h-full rounded-[2rem] border-0 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E4F3EA] text-[#1F6B4A]">{f.icon}</div>
                    <h3 className="text-lg font-bold">{f.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#53675D]">{f.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F7F8F3] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F6B4A]">Smarter Daily Guidance</p>
            <h2 className="text-3xl font-bold md:text-5xl">AI Assistant που δίνει άμεση πράσινη καθοδήγηση.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#53675D]">
              Ένας μικρός ψηφιακός βοηθός εμφανίζει απλές, πρακτικές προτάσεις με βάση τη συμπεριφορά του χρήστη, ώστε η βιωσιμότητα να γίνεται καθημερινή απόφαση και όχι θεωρία.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="rounded-[2.5rem] border-0 bg-white shadow-sm">
              <CardContent className="p-7">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-[#E4F3EA] p-3 text-[#1F6B4A]"><Bot className="h-7 w-7" /></div>
                  <div>
                    <h3 className="text-2xl font-bold">SOPHROSYNE AI</h3>
                    <p className="text-sm text-[#6B7D72]">Personal eco assistant</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }} className="rounded-[2rem] bg-[#EAF5EE] p-5">
                    <p className="font-semibold">🌍 You reduced your CO₂ by 14% this week.</p>
                    <p className="mt-2 text-sm leading-6 text-[#53675D]">Keep using public transport twice more to reach your weekly challenge.</p>
                  </motion.div>
                  <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity }} className="rounded-[2rem] bg-[#FFF5DE] p-5">
                    <p className="font-semibold">🚋 Try using public transport tomorrow.</p>
                    <p className="mt-2 text-sm leading-6 text-[#6B5B3B]">Estimated impact: +6 eco points and 1.8kg CO₂ avoided.</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-5 sm:grid-cols-2">
              {[{value:'12,000 kg',label:'CO₂ Saved'}, {value:'3,500',label:'Eco Actions'}, {value:'420',label:'Active Users'}, {value:'85',label:'Community Events'}].map((stat, idx) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                  <Card className="h-full rounded-[2rem] border-0 bg-white shadow-sm">
                    <CardContent className="p-7">
                      <p className="text-3xl font-bold text-[#1F6B4A]">{stat.value}</p>
                      <p className="mt-2 text-sm text-[#53675D]">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F6B4A]">Before / After Lifestyle</p>
            <h2 className="text-3xl font-bold md:text-5xl">Από καθημερινή κατανάλωση σε συνειδητή πράξη.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-[2.5rem] border-0 bg-[#FFF3F0] shadow-sm">
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-bold">Before</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-4"><Car className="h-7 w-7 text-[#B95B4A]" /><span>Καθημερινή χρήση αυτοκινήτου</span></div>
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-4"><Zap className="h-7 w-7 text-[#B95B4A]" /><span>Υψηλή κατανάλωση χωρίς feedback</span></div>
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-4"><Recycle className="h-7 w-7 text-[#B95B4A]" /><span>Πλαστικά προϊόντα χωρίς εναλλακτικές</span></div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-[2.5rem] border-0 bg-[#EAF5EE] shadow-sm">
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-bold">After SOPHROSYNE</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-4"><Bike className="h-7 w-7 text-[#1F6B4A]" /><span>Πράσινες μετακινήσεις & eco points</span></div>
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-4"><Leaf className="h-7 w-7 text-[#1F6B4A]" /><span>Προσωπικό eco-score σε άνοδο</span></div>
                  <div className="flex items-center gap-4 rounded-3xl bg-white p-4"><Recycle className="h-7 w-7 text-[#1F6B4A]" /><span>Επαναχρησιμοποίηση και βιώσιμες επιλογές</span></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8F3] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F6B4A]">Weekly Challenges</p>
            <h2 className="text-3xl font-bold md:text-5xl">Challenges που αυξάνουν engagement και retention.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {['No Plastic Week', 'Green Transport Challenge', 'Recycle 10 Items'].map((challenge, idx) => (
              <motion.div key={challenge} whileHover={{ y: -8 }}>
                <Card className="h-full rounded-[2rem] border-0 bg-white shadow-sm">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E4F3EA] text-[#1F6B4A]"><Trophy className="h-6 w-6" /></div>
                    <h3 className="text-xl font-bold">{challenge}</h3>
                    <p className="mt-3 leading-7 text-[#53675D]">Ολοκλήρωσε την πρόκληση, κέρδισε eco points και ανέβα στο leaderboard της κοινότητας.</p>
                    <div className="mt-5 h-3 rounded-full bg-[#EAF5EE]"><div className="h-3 rounded-full bg-[#1F6B4A]" style={{ width: `${55 + idx * 14}%` }} /></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#123026] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9DE0B5]">Motion Preview</p>
            <h2 className="text-3xl font-bold md:text-5xl">Μικρό video-like demo που δείχνει ότι το app είναι ζωντανό.</h2>
            <p className="mt-5 text-lg leading-8 text-white/75">Με motion cards και app transitions, το SOPHROSYNE μοιάζει με πραγματική πλατφόρμα έτοιμη για pilot, όχι απλώς με ιδέα παρουσίασης.</p>
          </div>
          <div className="relative rounded-[2.5rem] bg-white/10 p-6 backdrop-blur">
            <div className="mb-4 flex items-center gap-3"><PlayCircle className="h-8 w-8 text-[#9DE0B5]" /><span className="font-semibold">SOPHROSYNE App Flow</span></div>
            <div className="overflow-hidden rounded-[2rem] bg-white p-5 text-[#123026]">
              <motion.div animate={{ x: ['0%', '-33.3%', '-66.6%', '0%'] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="flex w-[300%] gap-4">
                {['Scan receipt', 'Earn eco points', 'Join local action'].map((step) => (
                  <div key={step} className="w-1/3 rounded-3xl bg-[#EAF5EE] p-8 text-center">
                    <Leaf className="mx-auto mb-4 h-10 w-10 text-[#1F6B4A]" />
                    <h3 className="text-2xl font-bold">{step}</h3>
                    <p className="mt-3 text-[#53675D]">A simple action becomes measurable impact.</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F6B4A]">Community Layer</p>
            <h2 className="text-3xl font-bold md:text-5xl">Από ατομική συνήθεια σε συλλογική οικολογική δράση.</h2>
            <p className="mt-5 text-lg leading-8 text-[#53675D]">
              Το SOPHROSYNE δεν μετρά μόνο τις προσωπικές επιλογές. Δημιουργεί έναν κοινωνικό χώρο όπου οι χρήστες ανεβάζουν eco stories, μοιράζονται βιώσιμες πράξεις και συμμετέχουν σε κοινότητες που οργανώνουν δράσεις όπως καθαρισμούς, ανακύκλωση, δενδροφυτεύσεις και green challenges.
            </p>
          </div>
          <div className="space-y-6">
            <div className="mx-auto flex h-[520px] w-[280px] rounded-[3rem] border-[10px] border-[#10261D] bg-[#10261D] shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-[2.3rem] bg-white p-4">
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#6B7D72]">Community</p>
                    <h3 className="text-lg font-bold">Green Communities</h3>
                  </div>
                  <div className="rounded-2xl bg-[#E4F3EA] p-2 text-[#1F6B4A]"><MessageCircle className="h-5 w-5" /></div>
                </div>

                <div className="mt-5 rounded-3xl bg-[#F0F7F2] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F6B4A] text-sm font-bold text-white">AN</div>
                    <div>
                      <p className="text-sm font-semibold">Anna • EcoAthens</p>
                      <p className="text-xs text-[#6B7D72]">"Today we cleaned the local beach 🌱"</p>
                    </div>
                  </div>
                  <div className="mt-4 h-40 rounded-3xl bg-gradient-to-br from-[#8FD6A3] to-[#DFF5E5]" />
                  <div className="mt-4 flex items-center justify-between text-sm text-[#53675D]">
                    <span>❤️ 128 likes</span>
                    <span>🔄 Share Story</span>
                  </div>
                </div>

                <div className="mt-5 rounded-3xl border border-[#E8ECE8] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">Green Action Group</p>
                      <p className="text-xs text-[#6B7D72]">42 active members</p>
                    </div>
                    <div className="rounded-xl bg-[#E4F3EA] px-3 py-1 text-xs font-semibold text-[#1F6B4A]">LIVE</div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl bg-[#F7F8F3] p-3 text-sm">
                      🌳 Tree planting this Sunday at 11:00
                    </div>
                    <div className="rounded-2xl bg-[#F7F8F3] p-3 text-sm">
                      ♻️ Recycling challenge starts tomorrow
                    </div>
                    <div className="rounded-2xl bg-[#F7F8F3] p-3 text-sm">
                      🚲 Who joins the green mobility week?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="rounded-[2rem] border-0 bg-[#F0F7F2] shadow-sm">
              <CardContent className="p-6">
                <Share2 className="mb-4 h-8 w-8 text-[#1F6B4A]" />
                <h3 className="text-xl font-bold">Shareable Impact</h3>
                <p className="mt-3 leading-7 text-[#53675D]">Ο χρήστης κοινοποιεί επιτεύγματα και βιώσιμες πράξεις σε social media, ενισχύοντας το word-of-mouth.</p>
              </CardContent>
            </Card>
            <Card className="rounded-[2rem] border-0 bg-[#F0F7F2] shadow-sm">
              <CardContent className="p-6">
                <CalendarDays className="mb-4 h-8 w-8 text-[#1F6B4A]" />
                <h3 className="text-xl font-bold">Local Eco Events</h3>
                <p className="mt-3 leading-7 text-[#53675D]">Κοινότητες, σύλλογοι και ομάδες οργανώνουν δράσεις και προσκαλούν χρήστες να συμμετάσχουν.</p>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EAF5EE] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F6B4A]">Discover Sustainable Actions Near You</p>
            <h2 className="text-3xl font-bold md:text-5xl">Interactive Green Map</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#53675D]">
              Οι χρήστες μπορούν να ανακαλύπτουν eco δράσεις, περιβαλλοντικές ομάδες και βιώσιμα events κοντά τους μέσα από έναν διαδραστικό χάρτη της κοινότητας.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#123026] p-6 text-white shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:32px_32px]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">Athens Eco Map</p>
                    <h3 className="text-2xl font-bold">Live Sustainability Activities</h3>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <Globe2 className="h-6 w-6 text-[#9DE0B5]" />
                  </div>
                </div>

                <div className="relative mt-8 h-[360px] overflow-hidden rounded-[2rem] bg-[#1B4735]">
                  <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />
                  </div>

                  {[{ top: '20%', left: '30%', label: 'Beach Cleanup' }, { top: '45%', left: '60%', label: 'Tree Planting' }, { top: '65%', left: '40%', label: 'Recycling Hub' }, { top: '30%', left: '75%', label: 'Green Mobility' }].map((pin, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute"
                      style={{ top: pin.top, left: pin.left }}
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2 + idx, repeat: Infinity }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9DE0B5] shadow-lg shadow-[#9DE0B5]/40">
                          <div className="h-2 w-2 rounded-full bg-[#123026]" />
                        </div>
                        <div className="mt-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
                          {pin.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <Card className="rounded-[2rem] border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">🌱 Local Environmental Actions</h3>
                  <p className="mt-3 leading-7 text-[#53675D]">
                    Οι χρήστες μπορούν να βρίσκουν nearby cleanups, tree planting δράσεις, recycling points και community eco events.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">🤝 Communities & Eco Teams</h3>
                  <p className="mt-3 leading-7 text-[#53675D]">
                    Σύλλογοι, ΜΚΟ και φοιτητικές ομάδες μπορούν να δημιουργούν communities και να φέρνουν τους πολίτες σε επαφή.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-0 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">📍 Real-world Sustainability</h3>
                  <p className="mt-3 leading-7 text-[#53675D]">
                    Το SOPHROSYNE συνδέει τον ψηφιακό κόσμο με πραγματικές δράσεις, μετατρέποντας την περιβαλλοντική ευαισθητοποίηση σε φυσική συμμετοχή.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#123026] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9DE0B5]">Live Impact Dashboard</p>
            <h2 className="text-3xl font-bold md:text-5xl">Μετρήσιμη πρόοδος για χρήστες, δήμους και οργανισμούς.</h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              Το dashboard δείχνει σε πραγματικό χρόνο βασικούς δείκτες όπως eco-score, CO₂ εξοικονόμηση, πράσινες μετακινήσεις και βιώσιμες επιλογές. Οι οργανισμοί μπορούν να παρακολουθούν συνολική συμμετοχή με ανώνυμα δεδομένα.
            </p>
          </div>
          <Card className="rounded-[2rem] border-0 bg-white/10 text-white backdrop-blur">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold">Pilot Impact</h3>
                <BarChart3 className="h-6 w-6 text-[#9DE0B5]" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {dashboardStats.map((s) => (
                  <div key={s.label} className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm text-white/65">{s.label}</p>
                    <p className="mt-2 text-3xl font-bold">{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl bg-[#9DE0B5]/15 p-5">
                <p className="text-sm text-white/70">CO₂ saved this month</p>
                <p className="mt-2 text-4xl font-bold">428 kg</p>
                <div className="mt-4 h-3 rounded-full bg-white/20"><div className="h-3 w-[68%] rounded-full bg-[#9DE0B5]" /></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="rounded-[2rem] border-0 bg-white shadow-sm lg:col-span-1">
              <CardContent className="p-7">
                <Users className="mb-4 h-8 w-8 text-[#1F6B4A]" />
                <h3 className="text-xl font-bold">For Citizens</h3>
                <p className="mt-3 leading-7 text-[#53675D]">Προσωπικό eco-score, προτάσεις και ανταμοιβές για καθημερινές βιώσιμες επιλογές.</p>
              </CardContent>
            </Card>
            <Card className="rounded-[2rem] border-0 bg-white shadow-sm lg:col-span-1">
              <CardContent className="p-7">
                <Building2 className="mb-4 h-8 w-8 text-[#1F6B4A]" />
                <h3 className="text-xl font-bold">For Cities & Institutions</h3>
                <p className="mt-3 leading-7 text-[#53675D]">Green challenges, συμμετοχικά προγράμματα και ανώνυμα sustainability reports.</p>
              </CardContent>
            </Card>
            <Card className="rounded-[2rem] border-0 bg-white shadow-sm lg:col-span-1">
              <CardContent className="p-7">
                <Globe2 className="mb-4 h-8 w-8 text-[#1F6B4A]" />
                <h3 className="text-xl font-bold">For Brands</h3>
                <p className="mt-3 leading-7 text-[#53675D]">Συνεργασίες ανταμοιβών, visibility για βιώσιμα προϊόντα και υπεύθυνες καμπάνιες.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F6B4A]">Vision</p>
          <h2 className="text-3xl font-bold md:text-5xl">Ένα μέλλον με μέτρο, συνείδηση και συλλογική δράση.</h2>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#1F6B4A]">Created by Ροζή Δέσποινα & Νίκος Κωνσταντόπουλος</p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#53675D]">
            Το SOPHROSYNE εμπνέεται από την έννοια της σωφροσύνης: την ισορροπία ανάμεσα στον άνθρωπο, την τεχνολογία και το περιβάλλον. Κάθε μικρή επιλογή μπορεί να γίνει μέρος μιας μεγαλύτερης αλλαγής.
          </p>
          <Button className="mt-8 rounded-2xl bg-[#1F6B4A] px-8 py-6 text-base text-white hover:bg-[#18573C]">Become part of the pilot</Button>
        </div>
      </section>
    </div>
  );
}
