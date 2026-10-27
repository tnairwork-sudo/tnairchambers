export type OffTheBriefQa = {
  q: string;
  a: string;
};

export type OffTheBriefSession = {
  day?: number;
  pagesFrom?: number;
  pagesTo?: number;
  label?: string;
  qa: OffTheBriefQa[];
};

export type OffTheBriefBook = {
  slug: string;
  title: string;
  author: string;
  intro?: string;
  published: boolean;
  sessions: OffTheBriefSession[];
};

export type OffTheBriefRelatedWork = {
  authors: string;
  title: string;
  year: number;
  citation: string;
};

export type OffTheBriefPaper = {
  subject: string;
  title: string;
  authors?: string;
  year?: number;
  citation?: string;
  link?: string;
  slug: string;
  published: boolean;
  relatedWork?: OffTheBriefRelatedWork[];
  qa: OffTheBriefQa[];
};

export type OffTheBriefPaperGroup = {
  subject: string;
  id: string;
  papers: OffTheBriefPaper[];
};

export const offTheBriefBooks: OffTheBriefBook[] = [
  {
    slug: "behave",
    title: "Behave",
    author: "Robert M. Sapolsky",
    published: true,
    sessions: [
      {
        pagesFrom: 1,
        pagesTo: 15,
        label: "Pages 1-15",
        qa: [
          {
            q: "How does Sapolsky open the book, and why?",
            a: "With a confession: a recurring fantasy of capturing Hitler and making him suffer. Even imagining it, his heart rate rises, he flushes and his fists clench. The point is that even a gentle academic has a real appetite for violence he considers deserved.",
          },
          {
            q: "What contradiction does he admit straight away?",
            a: "He doesn't believe in souls or evil and doubts that punishment belongs in criminal justice, yet he feels some people deserve to die while opposing the death penalty. He enjoys violent films while backing strict gun control. His feelings about violence are confused, \"just like most humans.\"",
          },
          {
            q: "What is the book's central point about violence?",
            a: "\"We don't hate violence. We hate and fear the wrong kind of violence, violence in the wrong context.\" Unlike a disease, violence can't simply be put on a list to wipe out, because in the right context we love it.",
          },
          {
            q: "How do we celebrate the \"right\" kind of violence?",
            a: "We pay to watch it in stadiums, teach children to stand up for themselves, use military metaphors (\"rally the troops\", ideas getting \"shot down\") and name sports teams Warriors, Vikings and Lions. Even chess gets described as a \"murderous attack.\" We also build belief systems around violence and elect leaders who are good at it.",
          },
          {
            q: "Why is violence so hard to understand?",
            a: "Because the same act can mean opposite things: pulling a trigger can be hideous aggression or a self-sacrificing act of love. So the book covers both sides of behaviour: aggression and competition, but also cooperation, empathy, reconciliation and altruism.",
          },
          {
            q: "What are the book's two personal roots?",
            a: "First, violence frightens him, and he has a professor's hopeful belief that enough explaining will make it go away. Second, he is a pessimist by nature. Studying the subject gave him a surprising reason for optimism: humans harming each other is \"neither universal nor inevitable.\"",
          },
          {
            q: "What three points come from his work as a neurobiologist and primatologist?",
            a: "You can't understand aggression, cooperation or empathy without biology. You're equally stuck if you rely only on biology. And separating the \"biological\" from the \"psychological\" or \"cultural\" makes no sense, because they are completely intertwined.",
          },
          {
            q: "What does the chicken crossing the road illustrate?",
            a: "How each science explains behaviour from inside its own \"bucket.\" A hormone researcher says estrogen acted on the hen's brain, an engineer talks about leg bones and pelvis mechanics, and an evolutionary biologist says hens that responded this way left more descendants. Each answer is true but partial.",
          },
          {
            q: "What does the colour study show about thinking in categories?",
            a: "Languages divide the continuous colour spectrum at arbitrary points. When two similar colours fall on either side of a language's colour boundary, speakers overestimate the difference; when both fall inside one category, they underestimate it. Categories help memory, but they distort what we see.",
          },
          {
            q: "What method does the book use instead of buckets?",
            a: "A timeline. Start with what happened in the brain one second before a behaviour, then the sights, sounds and smells that triggered it seconds to minutes before, then the hormones of hours to days before. Then widen out: how experience reshaped the brain over months and years, childhood, life in the womb, genes, culture, the ecology that shaped that culture, and finally evolution.",
          },
          {
            q: "What does he call the most important idea in the book?",
            a: "Explaining a behaviour with any single discipline quietly involves all the others, because each step is the product of everything before it. A behaviour is never caused by \"a gene\" or \"a hormone\"; those labels are shorthand for a long chain of causes.",
          },
          {
            q: "Which famous scientists show the danger of one-bucket thinking?",
            a: "John Watson, the founder of behaviourism, who claimed he could train any infant into any kind of specialist. Egas Moniz, who won a Nobel Prize in 1949 for the brain operations that became lobotomies. And Konrad Lorenz, the Nobel-winning animal behaviourist who served Nazi race policy. Each was trapped in one narrow view, and the consequences were destroyed brains and \"final solutions for problems that didn't exist.\"",
          },
        ],
      },
      {
        pagesFrom: 15,
        pagesTo: 30,
        label: "Pages 15-30",
        qa: [
          {
            q: "In what ways are humans just like other animals?",
            a: "A frightened person releases the same stress hormone as a bullied fish. Pleasure runs on the same brain chemicals as in a capybara, and our neurons work like those of brine shrimp. And we can be as violent as other apes, hitting, throwing stones and killing with our bare hands.",
          },
          {
            q: "How do humans use the same biology in uniquely human ways?",
            a: "We set off our alarm systems watching a horror film, trigger a stress response just by thinking about death, and release bonding hormones looking at a baby panda. We can harm someone over an idea, pass beliefs down for thousands of years, and hurt people without touching them: by nodding consent, looking away or damning with faint praise.",
          },
          {
            q: "What are his two examples of uniquely human harming and caring?",
            a: "The grape lollipop: after a driver cut off his family and made a rude gesture, his wife caught up with the man at a red light and threw a lollipop into his car, saying that anyone that mean probably needed it. The driver crept away, ashamed. The second is darker: during the mass killings in Indonesia in the mid-1960s, death squads brought gamelan orchestras to village massacres, and a veteran explained it was \"to make it more beautiful.\"",
          },
          {
            q: "Why are words like aggression and empathy so hard to define?",
            a: "They are loaded with values and fought over. \"Competition\" can mean racing a rival lab to a discovery, a pickup football game, a raffle, or \"whose god is more worth killing for.\" And each discipline splits these behaviours differently: some see two types, others seventeen.",
          },
          {
            q: "How do different fields divide aggression?",
            a: "Animal behaviourists separate an intruder's attack from a resident's defence. Criminologists separate impulsive from planned aggression. Anthropologists separate warfare, clan feuds and murder. Others distinguish hot-blooded reactive aggression from cold-blooded instrumental aggression (\"this isn't personal\").",
          },
          {
            q: "What is displacement aggression, and what is the uncomfortable finding about it?",
            a: "It means lashing out at a weaker bystander when you're frustrated or in pain: a shocked rat bites a smaller rat, a baboon who loses to the alpha chases a lower-ranking one, and domestic violence rises with unemployment. Disturbingly, taking it out on someone else can lower the aggressor's own stress hormones. Beyond reactive and instrumental aggression, there is also aggression done purely for pleasure.",
          },
          {
            q: "What is the takeaway so far?",
            a: "No behaviour has a single cause. Biological, psychological and cultural explanations are slices of one continuous chain that runs from the last second back through evolution, and violence is hard to understand because what we hate is only its wrong-context version.",
          },
        ],
      },
    ],
  },
  {
    slug: "troublemaker",
    title: "Troublemaker",
    author: "Leah Remini",
    intro: "Read as a study of persuasion, belonging and propaganda.",
    published: false,
    sessions: [
      {
        pagesFrom: 1,
        pagesTo: 15,
        label: "Pages 1-15",
        qa: [
          {
            q: "What is in the opening pages?",
            a: "Pages 1 to 5 are the cover, title, copyright, contents (an introduction and 19 chapters) and an epigraph: \"In a time of universal deceit, telling the truth is a revolutionary act.\" The introduction runs from page 6 to 9, and the story begins on page 10.",
          },
          {
            q: "How does Remini begin her introduction?",
            a: "She calls herself an \"apostate\" and lists her own and her family's flaws up front. By confessing first, she takes away the ammunition she expects the church to use against her.",
          },
          {
            q: "How, in her account, is Scientology sold to newcomers?",
            a: "Not as a religion but as self-improvement: a clear, \"scientific\" path to your full potential that you can test for yourself (\"use it and see for yourself\").",
          },
          {
            q: "Why does belonging come before belief?",
            a: "New members find a beautiful building, welcoming people, food and someone who listens and takes their side. She writes: \"You feel vindicated. This person understands me. He or she is my ally. This group believes in me. In the real world you may feel like you are nothing, but here you are treated with respect.\"",
          },
          {
            q: "What role does public recognition play?",
            a: "Donors are cheered on stage or given framed certificates at every level of giving. She estimates she spent about $2 million on services and donated about $3 million more.",
          },
          {
            q: "Why is leaving so hard?",
            a: "Members give at least two and a half hours a day, every day, and for those raised inside, everyone they know is a member. That creates an \"us against them\" world. Anyone \"declared\" a Suppressive Person must be cut off by everyone else, so leaving means losing everything.",
          },
          {
            q: "Who, according to her, makes the most likely recruits?",
            a: "People with the very qualities that get them punished elsewhere: \"defying, questioning, thinking independently\" are, she says, the same qualities that made her generation prime candidates.",
          },
          {
            q: "What happens in the first pages of Chapter One?",
            a: "Her Brooklyn childhood: a born performer, a frightening father and a loving, unconventional mother. Her mother's new partner, Dennis, is a Scientologist, and her mother joins. When Leah confesses a small money-making scheme, she is praised rather than punished. She and her sister then take the subway to the Scientology centre in Times Square.",
          },
          {
            q: "How did that first contact make her feel?",
            a: "Respected and grown up: \"I suddenly felt like I went from being a kid to being someone capable of making my own decisions. The sense of power and superiority was exciting.\"",
          },
        ],
      },
      {
        pagesFrom: 15,
        pagesTo: 30,
        label: "Pages 15-30",
        qa: [
          {
            q: "What were the first courses like?",
            a: "Leah and her sister do communication drills, including \"Bullbait,\" in which you must hold still and show no reaction to any provocation. They are sold as a way to communicate better, but in practice they train people not to react to whatever is done to them.",
          },
          {
            q: "What made a child feel chosen?",
            a: "She wrote to L. Ron Hubbard and received a typed letter signed \"Love Ron,\" with a real signature rather than a stamp. \"This was proof; I was special.\" One personal gesture from the top bound her more strongly than any general message could.",
          },
          {
            q: "How did her father's mockery affect her?",
            a: "It pushed her further in. \"Little did he know that by attacking Scientology, he ended up simply pushing me back into its arms. Them against us.\" Ridicule from outside confirmed the group's story that outsiders don't understand.",
          },
          {
            q: "How was her family recruited into the Sea Org?",
            a: "Recruiters framed it as a moral duty: \"The planet is going downhill, your help is needed, and in the end what will be your answer to this question: 'Did you help?'\" She was told she was now part of \"an elite and important group who were the only ones doing anything about the planet.\"",
          },
          {
            q: "What did they find on arriving at the Flag base in Clearwater, Florida?",
            a: "Nothing like the promise. They arrived at 2 a.m. with no one to meet them and were put in a run-down motel dormitory. She signed a billion-year contract and did boot camp: 12 hours of hard labour plus study, where every question was answered with \"What does LRH say?\"",
          },
          {
            q: "What happened when she tried to lead?",
            a: "At 13 she was put in charge of a cleaning crew and rewarded them with time at the pool. For that she was thrown overboard. Her pay was $15 a week.",
          },
          {
            q: "Why did staying stop being a choice?",
            a: "Dennis left the family, and with no home, money or schooling to fall back on, there was nowhere else to go. A grand mission followed by sunk cost and no alternatives kept them in.",
          },
          {
            q: "What did daily life look like at the start of Chapter Three?",
            a: "Fourteen-hour days and no real school. Staff ate rice and beans while paying guests ate steak and lobster. Members filed \"Knowledge Reports\" on one another, and the sisters faced an ethics investigation.",
          },
          {
            q: "Why did she suddenly want to become a \"Messenger\"?",
            a: "She learned that Messengers speak for Hubbard and must be addressed as \"Sir.\" Visible rank, uniforms and titles made status something she could see and want, and a moment of punishment turned into ambition.",
          },
          {
            q: "What are the key ideas of these pages?",
            a: "People are won over by how they are treated long before they accept a doctrine. Personal recognition, visible ranks and guilt-framed missions bind people in, and outside mockery only strengthens their loyalty. The weak point is the gap between promise and reality, which the system covers with reframing and control rather than by delivering what it promised.",
          },
        ],
      },
      {
        pagesFrom: 16,
        pagesTo: 30,
        label: "Pages 16-30",
        qa: [
          {
            q: "What do the communication drills train, on her account?",
            a: "Leah and her sister go on course. The drills, including one called Bullbait, ask a person to hold still and show no reaction to any provocation. They are offered as a way to speak to people better. In practice, she writes, they train a person not to react, and to accept whatever is done.",
          },
          {
            q: "What did the letter signed Love Ron do?",
            a: "She wrote to L. Ron Hubbard. The reply, in her words, \"was typed out on a clean white piece of paper, folded perfectly, and at the bottom it said, 'Love Ron,' not a stamp but his actual signature. This was proof; I was special.\" One personal gesture from the top bound her more tightly than a general message.",
          },
          {
            q: "How did mockery from her father land?",
            a: "It pushed her further in. She writes: \"Little did he know that by attacking Scientology, he ended up simply pushing me back into its arms. Them against us.\" Ridicule from outside seemed to prove the group's claim that others did not understand.",
          },
          {
            q: "How was the Sea Org put to the family?",
            a: "Recruiters framed joining as a duty. She records the question: \"The planet is going downhill, your help is needed, and in the end what will be your answer to this question: 'Did you help?'\" She was told that she \"was now a part of an elite and important group who were the only ones doing anything about the planet.\"",
          },
          {
            q: "What did arrival fail to match?",
            a: "She had pictured a welcome. They reached the Flag base in Clearwater at 2 a.m., with no one to meet them, and were put in a run-down dormitory. She signed a billion-year contract. In the boot camp that followed, \"Any question we asked was answered with 'What does LRH say?'\"",
          },
          {
            q: "What happened when she rewarded the cleaning crew?",
            a: "At 13 she was put in charge and gave them time at the pool. For that she was thrown overboard. Her pay was $15 a week. Her father's mockery of that pay pushed her back in, rather than out.",
          },
          {
            q: "Why did staying stop being a choice?",
            a: "Dennis left the family. With no home, money or schooling to return to, there was nowhere else to go. A grand mission came first. After the alternatives disappeared, staying was no longer a choice.",
          },
          {
            q: "What does the opening of the next chapter show?",
            a: "Fourteen-hour days, and no real school. Staff ate rice and beans, while paying guests ate steak and lobster. Members filed reports on one another, and the sisters faced an ethics investigation. She learned that a Messenger speaks for Hubbard and must be addressed as \"Sir,\" and she wanted that at once.",
          },
          {
            q: "What do these pages say about how people are bound in?",
            a: "A personal gesture from the top binds more tightly than a general message. Mockery from outside hardens loyalty, because it seems to confirm the group's prediction. Rank is made visible, in uniform and in a form of address, so it becomes something to want. A mission framed as duty, followed by the loss of every alternative, keeps people in. The weak point is the gap between the promise and the arrival, which these pages show being covered by reframing rather than by what was promised.",
          },
        ],
      },
    ],
  },
  {
    slug: "the-art-of-the-deal",
    title: "The Art of the Deal",
    author: "Donald J. Trump with Tony Schwartz",
    intro: "Read in ten parts as a study of negotiation and deal-making.",
    published: true,
    sessions: [
      {
        label: "Part 1: Dealing: A Week in the Life (chapter 1)",
        qa: [
          {
            q: "Why does this account keep several exits open at once?",
            a: "In the Holiday Inns stake, the book names three ways out: take control, sell at a profit, or be bought out at a premium. It also has him courting Gulf & Western while a dozen other parties wanted the theatres. Those open options are why, in this telling, there was no need to hurry.",
          },
          {
            q: "How did patience lower the price of Mar-a-Lago?",
            a: "The book says the first bid, of $15 million, was refused. Each time another buyer fell away, the next bid was lower. The price it records at the end is $5 million, plus $3 million for the furnishings. The leverage it points to is the seller's fatigue.",
          },
          {
            q: "When does the book stand by a deal he refuses?",
            a: "It describes an oil venture put to him as a deal that could not lose, at $50 million. He declined, on instinct. The book says the venture later went bankrupt. In this account he stayed with what he knew, and he passed on a deal that felt wrong even when the paper looked perfect.",
          },
          {
            q: "Why does the messenger matter in this account?",
            a: "The book says Helmut Jahn was replaced as architect by Alex Cooper, a former city planner who was respected in the approvals office. It also says Gliedman was hired after opposing him in court. The request, in this account, went through people the decision-maker already trusted.",
          },
          {
            q: "Why does the book linger on the Wollman Rink pour?",
            a: "It describes the concrete pour running on the front pages for days. The book treats that single, checkable event as worth more than a run of announcements.",
          },
          {
            q: "What does brevity signal in these calls?",
            a: "The book times calls with the people he speaks to most. Greenberg is finished in under two minutes. Schrager covers six subjects in ten minutes. It presents those short, decisive exchanges as a mark of status.",
          },
        ],
      },
      {
        label: "Part 2: Trump Cards and Growing Up (chapters 2 and 3)",
        qa: [
          {
            q: "What are chapters 2 and 3 about?",
            a: "Chapter 2 is Trump's rulebook in eleven short rules, from \"think big\" to \"have fun\". Chapter 3 is where they came from: his father Fred, who started out building $50 garages at 16, went on to put up thousands of Queens and Brooklyn apartments, and haggled as hard over mops as over the main contract. Then come military school, Wharton, and Donald's decision to leave the low-margin brick business for Manhattan.",
          },
          {
            q: "Why should you never look desperate in a deal?",
            a: "\"The worst thing you can possibly do in a deal is seem desperate to make it.\" Leverage is what the other side wants, then needs, then \"simply can't do without\". Often you have to build it, as he did when he had the Commodore's owners announce they were closing the hotel.",
          },
          {
            q: "What does planning for the worst look like?",
            a: "Each Boardwalk parcel deal only took effect if he got the whole site, and he waited for the gaming licence before building. Holiday Inns then repaid his money, paid for construction and covered his losses for five years in return for half the profits. Barron Hilton built first, was refused a licence, and had to sell to Trump.",
          },
          {
            q: "Why does knowing the true cost matter?",
            a: "Fred knew a plumbing job cost the contractor $400,000, so he never pushed for $300,000 and never accepted $600,000. He won contractors over with reliability: \"with me you get paid, and you get paid on time.\"",
          },
          {
            q: "How do you deal with someone powerful?",
            a: "Show respect without fear. At military school, Trump handled the tough drill sergeant Dobias by showing \"I respected his authority, but that he didn't intimidate me.\" Strong people go for weakness and respect strength.",
          },
          {
            q: "What is the takeaway for any reader?",
            a: "Never appear to need the deal, protect your downside before you commit, know what things really cost, and earn loyalty by being reliable, above all by paying on time.",
          },
        ],
      },
    ],
  },
];

export const offTheBriefPapers: OffTheBriefPaper[] = [
  {
    subject: "Social psychology, conversation and social perception",
    title:
      "The Liking Gap in Conversations: Do People Like Us More Than We Think?",
    authors:
      "Erica J. Boothby, Gus Cooney, Gillian M. Sandstrom, Margaret S. Clark",
    year: 2018,
    citation:
      "Psychological Science, 29(11), 1742 to 1756; doi:10.1177/0956797618783714",
    slug: "liking-gap",
    published: true,
    qa: [
      {
        q: "What question did the researchers ask?",
        a: "After a conversation with someone new, do people judge accurately how much the other person liked them?",
      },
      {
        q: "What did they find?",
        a: "They did not. Across five studies, people consistently underestimated how much their conversation partners liked them and enjoyed their company. The authors call this illusion the liking gap.",
      },
      {
        q: "Where was the effect observed?",
        a: "Among strangers meeting in a laboratory, among first-year university students getting to know the people they shared halls with, and among members of the public at a personal development workshop. It held for short and long conversations alike.",
      },
      {
        q: "Does the gap fade once people know each other?",
        a: "Not quickly. Among the students sharing halls, it lasted for several months as the new relationships developed.",
      },
      {
        q: "Why does it happen?",
        a: "The signals of liking are visible during the conversation. People miss them because they are absorbed in their own self-critical thoughts about how they came across, and they assume the other person judges them as harshly as they judge themselves.",
      },
      {
        q: "What is the practical takeaway?",
        a: "After a first meeting, you are probably liked more than you think. Paying attention to how the other person actually responds is a better guide than your own replay of what you said.",
      },
    ],
  },
  {
    subject: "Psychophysiology, music and arousal",
    title:
      "Cardiovascular, cerebrovascular, and respiratory changes induced by different types of music in musicians and non-musicians: the importance of silence",
    authors: "L. Bernardi, C. Porta, P. Sleight",
    year: 2006,
    citation:
      "Heart, 92(4), 445 to 452; published online September 2005; doi:10.1136/hrt.2005.064600",
    slug: "importance-of-silence",
    published: true,
    qa: [
      {
        q: "What did the study set out to measure?",
        a: "How different kinds of music change breathing, blood pressure, heart rate and blood flow to the brain, and whether tempo, rhythm, style, preference or musical training matter.",
      },
      {
        q: "How was it done?",
        a: "Twelve practising musicians and twelve matched non-musicians listened, in random order, to six styles: slow classical, fast classical, twelve-tone, techno, rap and raga. A two-minute pause was inserted at random.",
      },
      {
        q: "What drove the effects?",
        a: "Tempo, more than style. Faster tempi and simpler rhythms raised breathing, blood pressure and heart rate. Fast classical and techno produced similar results when they were similarly fast. Slow pieces had a smaller effect, and raga brought the largest fall in heart rate.",
      },
      {
        q: "What happened during the silence?",
        a: "The pause produced the strongest relaxation of all. Heart rate, blood pressure and breathing fell even below the resting baseline taken before any music was played.",
      },
      {
        q: "Did musical training make a difference?",
        a: "Yes. Musicians' breathing was more sensitive to tempo than that of non-musicians.",
      },
      {
        q: "What is the practical takeaway?",
        a: "Pace sets arousal. Faster music focuses attention, slower music calms, and a well-placed silence calms most of all.",
      },
    ],
  },
  {
    subject: "Behavioural science, memory and the evaluation of experience",
    title: "When More Pain Is Preferred to Less: Adding a Better End",
    authors:
      "Daniel Kahneman, Barbara L. Fredrickson, Charles A. Schreiber, Donald A. Redelmeier",
    year: 1993,
    citation:
      "Psychological Science, 4(6), 401 to 405; doi:10.1111/j.1467-9280.1993.tb00589.x",
    slug: "adding-a-better-end",
    published: true,
    relatedWork: [
      {
        authors: "Barbara L. Fredrickson and Daniel Kahneman",
        title:
          "Duration neglect in retrospective evaluations of affective episodes",
        year: 1993,
        citation:
          "Journal of Personality and Social Psychology, 65(1), 45 to 55; doi:10.1037/0022-3514.65.1.45",
      },
      {
        authors: "Donald A. Redelmeier and Daniel Kahneman",
        title:
          "Patients' memories of painful medical treatments: real-time and retrospective evaluations of two minimally invasive procedures",
        year: 1996,
        citation:
          "Pain, 66(1), 3 to 8; doi:10.1016/0304-3959(96)02994-6",
      },
    ],
    qa: [
      {
        q: "What question did the researchers ask?",
        a: "When people look back on an experience, do they remember it as the sum of every moment, or do some moments count far more than others?",
      },
      {
        q: "How was it tested?",
        a: "Volunteers held a hand in uncomfortably cold water twice. One trial lasted 60 seconds. The other lasted the same 60 seconds and then continued for another 30 seconds while the water was warmed slightly, still unpleasant but less so. Asked which trial they would rather repeat, most chose the longer one, even though it contained strictly more discomfort.",
      },
      {
        q: "What explains that choice?",
        a: "Memory does not keep a running total. Remembered experience is shaped largely by its most intense moment, the peak, and by how it ends. The researchers called this the peak-end rule. A companion study by Fredrickson and Kahneman, using short film clips, found the matching pattern of duration neglect: how long an experience lasted had surprisingly little effect on how it was later judged.",
      },
      {
        q: "Does it hold outside the laboratory?",
        a: "Redelmeier and Kahneman recorded patients' discomfort minute by minute during colonoscopy and kidney stone treatment. Patients' later ratings tracked the worst moment and the final few minutes far more closely than the length of the procedure. A later randomised trial found that ending a colonoscopy more gently improved how patients remembered it.",
      },
      {
        q: "Has the finding been questioned?",
        a: "It has been qualified rather than overturned. Later reviews find that peaks and endings do carry extra weight, but that the overall average of an experience matters too, and that duration is not always ignored. The effect is strongest for brief, single episodes with a clear shape and weaker for long or complex ones. Some researchers also note that what people remember and what they actually felt at the time are different measures, and the rule describes only the first.",
      },
      {
        q: "What is the practical takeaway?",
        a: "How something ends, and its single strongest moment, will largely decide how it is remembered. Attention spent on a good close is rarely wasted.",
      },
    ],
  },
  {
    subject: "Affective science / Social psychology (facial expression and emotion)",
    title:
      "A multi-lab test of the facial feedback hypothesis by the Many Smiles Collaboration",
    authors:
      "Nicholas A. Coles, David S. March, Fernando Marmolejo-Ramos, Jeff T. Larsen and colleagues (49 authors, the Many Smiles Collaboration)",
    year: 2022,
    citation: "Nature Human Behaviour, 6, 1731 to 1742",
    link: "https://www.nature.com/articles/s41562-022-01458-9",
    slug: "many-smiles-collaboration",
    published: true,
    qa: [
      {
        q: "What question did the paper ask?",
        a: "Whether our facial expressions can shape how we feel. The facial feedback hypothesis holds that smiling can make a person feel happier. Earlier research had produced mixed results, including a widely discussed failed replication.",
      },
      {
        q: "How was the study carried out?",
        a: "Researchers who supported the hypothesis, researchers who doubted it and researchers with no settled view agreed on a design in advance and preregistered it. Data were collected from 3,878 participants across 19 countries. Participants made happy or neutral expressions in one of three ways: copying photographs of smiling actors, moving particular facial muscles on instruction, or holding a pen in the mouth. Half viewed pleasant images while doing so.",
      },
      {
        q: "What did they find?",
        a: "Participants reported feeling happier after making happy expressions than after making neutral ones. This held for the mimicry task and the voluntary muscle task, and it appeared both when people were viewing pleasant images and when they were not. This suggests expressions can strengthen an existing feeling and can also start one.",
      },
      {
        q: "Where was the evidence weaker?",
        a: "The pen-in-mouth method did not show a clear effect in the main analysis. The overall effect was also modest in size, about five per cent of the rating scale. Because of the pandemic, all data were collected online.",
      },
      {
        q: "Why does it matter?",
        a: "It offers one of the most careful answers to a long-running debate. Our faces do appear to influence our feelings, but gently rather than dramatically. The finding is also a useful model of how a contested question can be settled: rivals agreeing on the test before seeing the data.",
      },
    ],
  },
];

function anchorSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function publishedOffTheBriefBooks() {
  return offTheBriefBooks.filter((book) => book.published);
}

export function publishedOffTheBriefPapers() {
  return offTheBriefPapers.filter((paper) => paper.published);
}

export function publishedOffTheBriefPaperGroups(): OffTheBriefPaperGroup[] {
  const groups: OffTheBriefPaperGroup[] = [];

  for (const paper of publishedOffTheBriefPapers()) {
    const current = groups[groups.length - 1];
    if (current && current.subject === paper.subject) {
      current.papers.push(paper);
    } else {
      groups.push({
        subject: paper.subject,
        id: `papers-${anchorSlug(paper.subject)}`,
        papers: [paper],
      });
    }
  }

  return groups;
}

export function offTheBriefSessionId(
  book: OffTheBriefBook,
  session: OffTheBriefSession
) {
  if (session.label) {
    return `${book.slug}-${anchorSlug(session.label)}`;
  }

  return `${book.slug}-day-${session.day}-${session.pagesFrom}-${session.pagesTo}`;
}

export function offTheBriefSessionLabel(session: OffTheBriefSession) {
  if (
    session.day == null ||
    session.pagesFrom == null ||
    session.pagesTo == null
  ) {
    return session.label ?? "Session";
  }

  const pages =
    session.pagesFrom === session.pagesTo
      ? `page ${session.pagesFrom}`
      : `pages ${session.pagesFrom}-${session.pagesTo}`;
  return `Day ${session.day}, ${pages}`;
}

export function offTheBriefSessionHeading(session: OffTheBriefSession) {
  return session.label ?? offTheBriefSessionLabel(session);
}

export function offTheBriefIndexLabel(session: OffTheBriefSession) {
  if (session.label) return session.label;
  if (session.pagesFrom == null || session.pagesTo == null) return "Session";
  if (session.pagesFrom === session.pagesTo) return `Page ${session.pagesFrom}`;
  return `Pages ${session.pagesFrom}-${session.pagesTo}`;
}

export function offTheBriefPaperLine(paper: OffTheBriefPaper) {
  if (paper.year == null) return paper.citation;
  if (!paper.citation) return String(paper.year);
  return `${paper.year} (${paper.citation})`;
}
