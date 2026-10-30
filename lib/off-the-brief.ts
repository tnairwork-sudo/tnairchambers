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
  link?: string;
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
            q: "What other kinds of aggression does he name?",
            a: "Maternal aggression, which has its own distinctive hormone profile. He also separates real aggression from ritual threats of it: many primates bare their canines far more often than they actually fight, and aggression in Siamese fighting fish is mostly ritual.",
          },
          {
            q: "What is \"pathological altruism\"?",
            a: "To a psychologist it can mean the codependency of enabling a partner's drug use. To a neuroscientist it is the result of a kind of frontal cortex damage. In economic games, people with that damage keep playing generously while the other player betrays them again and again, even though they can describe the other player's strategy out loud.",
          },
          {
            q: "Does pure altruism exist?",
            a: "That is the big open question: is doing good always mixed with hope of reciprocity, praise, self-esteem or paradise? He points to a 2009 New Yorker piece, \"The Kindest Cut,\" about people who give a kidney to a total stranger. Instead of admiration, they unsettle everyone, who wonder if they are secretly paid or desperate for attention. They unnerve people because the act is so detached and unemotional.",
          },
          {
            q: "Why do \"hot-blooded\" and \"cold-blooded\" acts feel so different to us?",
            a: "We understand hot-blooded violence and see mitigating factors, like a grieving, raging father who kills his child's killer. Affectless violence, like a contract killer or a fictional villain whose heart rate never rises, horrifies us. In the same way, we expect our best acts to be warmhearted, so cold-blooded goodness feels like a contradiction.",
          },
          {
            q: "What did the meditating monk say about his knees?",
            a: "At a meeting of neuroscientists and Buddhist meditators, a monk was asked whether he ever stops meditating because his knees hurt. He said he sometimes stops early, not because of pain (he doesn't notice it), but \"as an act of kindness to my knees.\" Sapolsky found that admirable but \"from another planet,\" and notes that dispassionate kindness often has a lot to recommend it.",
          },
          {
            q: "What does the shoot-or-bandage brain-scan study show?",
            a: "Elie Wiesel said, \"The opposite of love is not hate; its opposite is indifference,\" and the biology of strong love and strong hate is similar in many ways. In one study, people in a scanner were placed in a virtual room with either an injured person or a menacing alien, and could bandage or shoot. Bandaging the person and shooting the alien are opposite actions, but both are the \"right\" thing, and both activated the same circuitry in the prefrontal cortex. Meaning matters more than which muscles move.",
          },
          {
            q: "How does he finally frame the book's subject?",
            a: "Because the key words depend so much on context, he rejects \"pro- and antisocial\" as too cold and \"good and evil\" as too hot. The book is about \"the biology of our best and worst behaviors.\"",
          },
          {
            q: "What question does Chapter Two ask, and why is the brain \"the final common pathway\"?",
            a: "What happened in the brain one second before a behaviour: nerve signals, brain chemicals and circuits in particular regions. Every more distant factor, from hormones an hour before to childhood a decade before to evolution a million years before, works by changing the brain, so the brain is the channel for all of them.",
          },
          {
            q: "What is the \"triune brain\" model?",
            a: "Paul MacLean's 1960s model divides the brain into three layers. Layer 1 is an ancient base, shared from humans to geckos, that runs automatic regulation such as shivering when cold or feeling hungry when blood sugar drops. Layer 2, expanded in mammals, is about emotion. Layer 3, the neocortex on top, handles thought, memory and abstraction. A sad scene in a film about beings who aren't even real can pull layers 2 and 1 along, producing the same stress response as fleeing a lion.",
          },
          {
            q: "What is wrong with the triune model?",
            a: "MacLean himself stressed four flaws. The layers overlap physically. Information doesn't only flow from the top down: holding a cold drink makes people judge a stranger as having a colder personality. Automatic responses, emotion and thought can't really be separated. And it wrongly suggests evolution added new layers without changing the old ones. It is still a useful way to organise the subject.",
          },
          {
            q: "Why was the emotional layer first called the \"nose brain\"?",
            a: "In a rat, the huge smell centres at the front of the brain send their first connections to layer 2, so early researchers named it the \"nose brain.\" Later work showed that destroying it caused abnormal social, sexual and aggressive behaviour, so it was renamed the limbic system and linked to emotion. The argument ended when someone pointed out that for a rat, emotion and smell are nearly the same thing. In primates, the limbic system relies more on vision.",
          },
          {
            q: "What is the takeaway so far?",
            a: "No behaviour has a single cause. Biological, psychological and cultural explanations are slices of one continuous chain that runs from the last second back through evolution, and violence is hard to understand because what we hate is only its wrong-context version.",
          },
        ],
      },
      {
        pagesFrom: 30,
        pagesTo: 45,
        label: "Pages 30-45",
        qa: [
          {
            q: "Are there \"centers\" in the brain for particular behaviours?",
            a: "Not really. The limbic system includes the amygdala, hippocampus, septum, habenula and mammillary bodies. One tiny patch of motor cortex comes close to a \"center\" for bending your left little finger, and some regions are almost centres for breathing or temperature. But there is no centre for feeling irritable or amorous, for bittersweet nostalgia, or for love. Limbic circuitry is immensely complex.",
          },
          {
            q: "What does the hypothalamus do?",
            a: "It is the link between layers 1 and 2. Every limbic structure tries to influence it, and it passes their signals down to the brain stem regions that run the body automatically: raising heart rate when muscles work, widening gut blood vessels after a big meal, sending blood to the skin when you're too warm. Together these form the autonomic nervous system. This is how a terrifying sight can make you need the bathroom just as a full bladder does, and how emotions change the body.",
          },
          {
            q: "What is the difference between the sympathetic and parasympathetic systems?",
            a: "The sympathetic system handles arousal, \"fight or flight,\" which medical students joke covers \"the four Fs: fear, fight, flight, and sex.\" It releases adrenaline and noradrenaline and shuts down digestion, because if you're running from becoming someone's lunch, there's no point spending energy on breakfast. The parasympathetic system handles calm: it slows the heart and promotes digestion. These body states feed back to the brain and shape behaviour, usually without our noticing.",
          },
          {
            q: "Why is the split between thought and emotion wrong?",
            a: "The cortex handles senses, movement, language, memory, maths and decisions, but it is not separate from emotion. The temperature of a cup changes how we judge someone's personality, and emotions filter what we remember and how accurately. Some stroke patients who lose the ability to speak can still sing what they want to say, routing language through emotional pathways. Signals run both ways between the cortex and the limbic system. The neuroscientist Antonio Damasio makes this case in his book Descartes' Error.",
          },
          {
            q: "What did Walle Nauta discover about the frontal cortex?",
            a: "In the 1960s, Nauta mapped the connections of the frontal cortex and found it deeply wired, in both directions, to the limbic system. He proposed that it was practically a member of the limbic system. Colleagues thought him daft, as if the highbrow frontal cortex would only visit to preach good manners. He was right: the frontal cortex and limbic system excite, restrain, cooperate and argue, and that interplay is at the core of the book.",
          },
          {
            q: "What about lobes and \"left brain, right brain\"?",
            a: "The folded cortex forms four lobes: temporal, parietal, occipital and frontal. Most brain regions come in left and right pairs with somewhat different roles, the left more analytical and the right more intuitive. Popular culture exaggerates this absurdly, and the real differences are subtle, so he mostly sets it aside. The three regions he will focus on are the amygdala, the frontal cortex and the dopamine reward system.",
          },
          {
            q: "What is the evidence that the amygdala drives aggression?",
            a: "In animals, amygdala neurons fire during aggression, and it uses more energy then than almost any other region. Destroying or temporarily silencing it lowers aggression, and stimulating it triggers aggression. In humans, anger-provoking pictures activate it, and stimulating it during certain brain surgery can produce rage. Most convincing are rare people with damage only to the amygdala: they struggle to recognise angry faces but read other emotions normally.",
          },
          {
            q: "What did surgery to destroy the amygdala show about human aggression?",
            a: "In the 1970s, some surgeons destroyed the amygdala to control aggression, which caused a fierce ethical debate: who decides what aggression is pathological, and what counts as a cure? The surgery clearly reduced violence when the violence was a reflexive outburst just before an epileptic seizure. When it was done only to control behaviour, the answer was \"maybe\": patients and techniques varied, there was no modern brain imaging, and reported success rates ran from 33 to 100 percent. The procedure has almost entirely disappeared.",
          },
          {
            q: "Which two notorious violent cases point to the amygdala?",
            a: "Ulrike Meinhof, co-founder of the Red Army Faction (the Baader-Meinhof Gang), had a benign brain tumour removed in 1962, and her 1976 autopsy found tumour remnants and scar tissue pressing on her amygdala. Charles Whitman, the 1966 \"Texas Tower\" sniper, killed his wife and mother and then sixteen people at the University of Texas. He had complained of headaches and violent impulses, asked in his suicide note for his brain to be examined, and had a glioblastoma pressing on his amygdala.",
          },
          {
            q: "Did Whitman's tumour \"cause\" the killings?",
            a: "Probably not in a simple \"amygdala tumour equals murderer\" way. Whitman had other risk factors that interacted with the tumour: his father beat him and he watched his mother and siblings beaten, he physically abused his wife, he was court-martialled as a Marine for threatening another soldier, and his brother was later killed in a bar fight at twenty-four.",
          },
          {
            q: "What do amygdala experts think of first?",
            a: "Fear and anxiety, not aggression. The crucial point is that the brain region most involved in feeling afraid and anxious is also the one most involved in producing aggression.",
          },
          {
            q: "What did the \"Ms. Pac-Man from hell\" and waiting-for-a-shock studies show?",
            a: "In a brain-scanner game, people were chased by a dot that would shock them. The amygdala stayed quiet while they were evading it and fired up as the dot came close; the stronger the shocks, the earlier and stronger the activation and the more panic people reported. In the waiting study, an unpredictable wait was so unpleasant that many people chose a stronger shock straight away, and for the rest, growing dread increasingly activated the amygdala.",
          },
          {
            q: "How does the amygdala show up in PTSD and in anxiety about ambiguity?",
            a: "In PTSD the amygdala overreacts to mildly frightening things, is slow to calm down, and grows larger with long-term PTSD. On ambiguity: betting on a red top card from a deck that is half red and half black is a known risk, while betting from a deck described only as \"at least one red and one black\" is ambiguous. The odds are the same, yet ambiguity makes people more anxious and activates the amygdala more.",
          },
          {
            q: "What do monkey, ranking-game and conformity studies say about social uncertainty?",
            a: "A high-ranking male rhesus monkey watching his female partner in another room with a rival activated his amygdala, and the activation tracked his anxiety (teeth chattering, self-scratching), not his aggression or testosterone. In a rigged competitive game, stable rankings activated the frontal cortex, while wildly shifting rankings also activated the amygdala, because being unsure of your place is unsettling. In a conformity test, people who stuck with what they really saw while everyone else said something different showed amygdala activation.",
          },
          {
            q: "How is innate fear different from learned fear, and what is \"prepared learning\"?",
            a: "Innate fear needs no trial and error: a lab-born rat that has never met a cat still avoids the smell of one, and all phobias activate the amygdala. Learned fears are things like a dangerous neighbourhood or a letter from the tax office. The line is fuzzy. Humans and other primates are not automatically afraid of snakes and spiders, but they learn to fear them far more readily than pandas or beagles, and lab monkeys that have never seen snakes are conditioned to fear them more easily than artificial flowers. The next chapter shows humans are similarly primed to learn fear of people who look a certain way.",
          },
          {
            q: "How do the central and basolateral parts of the amygdala divide the work?",
            a: "The evolutionarily ancient central amygdala handles innate fear. The newer, cortex-like basolateral amygdala (BLA) surrounds it, learns new fears, and passes the news to the central amygdala.",
          },
          {
            q: "How did Joseph LeDoux show the amygdala learning fear?",
            a: "A shock makes a rat freeze, release stress hormones and rev up its sympathetic nervous system. Pair a tone with the shock again and again and the tone alone triggers freezing. BLA neurons that respond to the tone gradually rewire to activate the central amygdala. These neurons respond to what the signal means, not what kind of signal it is, so they would respond to a light just the same. Stimulating them makes fear conditioning easier, and stimulating the hearing pathway during shocks, with no tone at all, creates a \"false fear\" of a tone. Conditioning also strengthens the connections between the BLA and the central amygdala and raises growth factors that build new connections.",
          },
          {
            q: "How does a fear fade?",
            a: "When the tone keeps sounding without a shock, a second group of BLA neurons starts responding to it as \"no longer scary,\" and the two groups inhibit each other. The \"not scary anymore\" neurons get their input from the frontal cortex. So we do not passively forget a fear; we actively learn that something is no longer dangerous.",
          },
          {
            q: "What does amygdala damage do in the Ultimatum Game, and what does it say about trust?",
            a: "Normally, the more the amygdala activates after an unfair offer, the more likely a player is to reject it out of anger and a wish to punish. People with damaged amygdalae are unusually generous and do not reject more as offers turn unfair. They understand the rules, play normally against a computer, and expect the same fairness as everyone else. The researchers called this \"pathological altruism\": our default is to trust, and the amygdala learns vigilance and distrust from bad social experience.",
          },
          {
            q: "What does the amygdala do in desire and reward?",
            a: "Young heterosexual men passively viewing pictures of attractive women activated reward circuitry; having to work for the pictures by pressing a button also activated the amygdala. The amygdala responds most to rewards whose value is shifting, and some of its neurons fire for changing rewards and changing punishments alike. So the amygdala is not about the pleasure itself but about uncertain longing and the anxiety that the reward may be smaller or may not come at all.",
          },
          {
            q: "What are the amygdala's main inputs?",
            a: "First, information from every sense, including a shortcut that skips the cortex. It is fast and excitable but inaccurate: a man with cortical blindness still recognised emotional faces through it, and it is why the amygdala can \"see\" a gun before the cortex reports that the object is a phone. Second, pain, through a brain stem region called the periaqueductal gray, which can trigger panic attacks and is enlarged in chronic panic; it is unpredictable pain, not pain itself, that activates the amygdala. Third, disgust from the insular cortex: rotten food and moral disgust both activate the insula, which drives the amygdala and predicts how much outrage and wish for revenge people feel. This happens only when a person, not a computer, betrays you, and it is how one group comes to see a neighbouring group as \"cockroaches.\" Fourth, heavy input from the frontal cortex.",
          },
          {
            q: "What are its main outputs?",
            a: "It talks back to the regions that talk to it. It pulls the hippocampus into focused fear learning, separating the cue (the tone) from the context (the cage), which is why we remember the plane hitting the second tower but not the clouds. Cue and context can rescale: in a robbery the gun can be the cue and the alley the context, or the alley the cue and the neighbourhood the context. A motor shortcut lets an aroused amygdala bypass the cortex, so a person can pull a trigger before consciously meaning to. For arousal, it signals through a relay to the hypothalamus to start the stress-hormone response, activates the sympathetic nervous system, and drives a brain stem region to flood the cortex with norepinephrine.",
          },
          {
            q: "Why does Sapolsky say \"the opposite of love is not hate, it's indifference\"?",
            a: "The sympathetic nervous system goes full blast in fear, flight, fight and sex, and also when you win the lottery. About a quarter of the neurons in one part of the hypothalamus drive sexual behaviour in male mice and, at higher stimulation, aggression. Your heart does roughly the same thing in a murderous rage as during an orgasm. Bodily arousal does not decide what you feel, but it does shape how intensely you feel it.",
          },
          {
            q: "How are fear and aggression related, and what do psychopaths show?",
            a: "They are not inevitably linked. Fear tends to increase aggression only in people already prone to it, and in subordinates who cannot safely be aggressive it does the opposite. Violent psychopaths are less sensitive to pain and have smaller, unresponsive amygdalae; their violence is cold and calculated rather than reactive. The link between fear and violence is strongest for frenzied, reactive aggression.",
          },
        ],
      },
      {
        pagesFrom: 45,
        pagesTo: 60,
        label:
          "Pages 45-60: Chapter Two continued: the frontal cortex (read to p. 53 so far)",
        qa: [
          {
            q: "What is Sapolsky's one-line definition of the frontal cortex, and what makes it distinctive?",
            a: "\"The frontal cortex makes you do the harder thing when it's the right thing to do.\" It is the most recently evolved region, with a disproportionate share of genes found only in primates and highly individual gene activity. It is more intricately wired in humans, the last region to mature (not fully online until the mid-twenties), and home to von Economo (spindle) neurons. Those neurons are found only in the insula and the anterior cingulate, regions central to empathy, and only in socially complex species: primates, whales, dolphins and elephants.",
          },
          {
            q: "How does the prefrontal cortex work, and how does it show up in everyday thinking?",
            a: "The prefrontal cortex is \"the decider.\" It chooses between competing options, often thought against feeling, and sends its orders through the motor regions to the muscles. Remembering to add an old area code before dialling is one example. Monkeys switching between attending to the colour of dots or their motion showed a burst of prefrontal activity that suppressed the now-irrelevant information. People who hear a 16-item shopping list several times discover its categories (fruit, cleaning products, spices, starches) and regroup what they recall. In studies of images morphed between dogs and cats, \"dog\" neurons fired for images that were 80 or 60 percent dog, but \"cat\" neurons took over at 40 percent dog.",
          },
          {
            q: "Why is willpower a limited resource, and how does habit rescue us?",
            a: "Following rules (\"don't pee whenever you feel like it,\" \"self-discipline is good\") is metabolically expensive. Frontal neurons use a great deal of energy, and expensive cells are vulnerable cells. Under mental load (hard memory tasks, controlling behaviour, many shopping decisions, multitasking), performance on the next frontal task drops. People also become less charitable and helpful and more likely to lie, and after hard emotional self-control they cheat more on their diets. With practice, though, a hard task such as potty training, a piano trill or a sports skill moves from the frontal cortex to reflexive regions like the cerebellum and becomes automatic.",
          },
          {
            q: "What is the takeaway so far?",
            a: "The amygdala is a fast but inaccurate alarm for uncertainty, threat and distrust, while the frontal cortex is the costly, tireable part of the brain that makes you do the harder right thing until practice makes it automatic.",
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
    published: true,
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
        pagesFrom: 30,
        pagesTo: 45,
        label: "Pages 30-45",
        qa: [
          {
            q: "How did her time in the Sea Org end?",
            a: "The Ethics Officer wanted to send Leah and her sister to the Rehabilitation Project Force: all-black clothes, heavy labour, running everywhere and calling everyone \"Sir,\" treated as barely a person. Her mother refused and asked for a fitness board, which was the way out. As one officer told her, \"You're more trouble than you're worth.\"",
          },
          {
            q: "Why did the family stay in Scientology after leaving the Sea Org?",
            a: "They drove to Los Angeles still believers, looking for \"the security of this larger group, a real community.\" The group identity outlasted the bad experience, and they were even handed a \"freeloader's debt\" for the courses that had been free.",
          },
          {
            q: "What did her first jobs teach her?",
            a: "At a solar company she cold-called people with a scripted \"free trip\" pitch, with a board of little suns tracking each booking, and was fired for shouting at a man who hung up. At a print shop she learned to collect debts, in her words \"using church tactics to find their weaknesses and prey on them.\" As she puts it, \"There simply is no 'no' in Scientology.\"",
          },
          {
            q: "How was she persuaded to inform on her friends?",
            a: "Her mother filed a report on her, and an Ethics officer questioned her calmly and warmly. He framed it as care, not betrayal: \"It's not about tattling, Leah... You're not narcing on them; you're helping them.\" She named everyone and left feeling virtuous rather than guilty, vowing, \"I didn't want to be average... I am more than this.\"",
          },
          {
            q: "How did she break into acting?",
            a: "She wanted to become an \"Opinion Leader\" to win back respect. After failed auditions, she charmed the casting director John Levey, froze on the reading, then called him from a Taco Bell pay phone. He backed her: \"you had the balls to call me. And I'm telling you now, I don't want you to change, Leah.\"",
          },
          {
            q: "How did she explain her failures to herself?",
            a: "Rejection followed rejection and her car was repossessed, but she saw each failure as \"100 percent my fault\" for not applying Scientology's methods well enough. A system that blames every failure on the believer never has to deliver. Her first line on Head of the Class nearly cost her the part because she kept adding a wink. Chapter Six opens on her audition for Living Dolls.",
          },
          {
            q: "What are the key ideas of these pages?",
            a: "Punishment by loss of status keeps everyone else in line. A debt created after the fact turns a gift into control. Calm, warm questioning and a moral reframe extract more than hostility does. And scripts and \"free\" offers make people ask \"What's the catch?\", while the one person who truly helped her did it by being honest and accepting her as she was.",
          },
        ],
      },
      {
        pagesFrom: 45,
        pagesTo: 60,
        label: "Pages 45-60",
        qa: [
          {
            q: "How did she land her first television series?",
            a: "Before her audition for the producers of Living Dolls, her mother brought home a group of Scientologists, and one of them drilled her for two hours on the Tone Scale, calling out \"Flunk\" and \"Not enough intention.\" She nailed the audition and landed her first series at eighteen. She credited \"the Scientology technology\" and the members who had rallied round her, not herself.",
          },
          {
            q: "What did she learn from two weeks on Who's the Boss?",
            a: "Tony Danza taught her how to behave on a set: know the crew's names, make guests feel at home, and never keep an audience waiting. \"There are two hundred and fifty people waiting out there,\" he told her. \"This isn't about you. You have to think about the audience. You've got to run.\"",
          },
          {
            q: "Did success earn her any relief from the church?",
            a: "No. She worked twelve-hour days on set and then spent two and a half hours on course at the church, and missed hours still had to be made up. She moved the family to Burbank, persuading her mother with \"LRH had very nice things, Mom. We need to live better.\" Her sister Nicole drifted away from the church, and her mother blamed every ordinary problem on that.",
          },
          {
            q: "How did she take it when Living Dolls was cancelled?",
            a: "The show was cancelled after twelve episodes, and her first question was \"What had I done?\" The pattern in these pages is that wins are credited to the church's methods and failures are treated as the member's own fault.",
          },
          {
            q: "What happened in her career over Chapter Seven?",
            a: "A run of cancelled shows and pilots. She became friends with Jennifer Aniston at auditions, won a role on Cheers, where Ted Danson asked her to run lines, and lost the part of Monica on Friends to Courteney Cox, which left her crying for days.",
          },
          {
            q: "What was course life like at this stage?",
            a: "She did fake \"survey\" drills on Hollywood Boulevard to practise reading strangers' emotional tone, pushed on with \"John Travolta did it. You're going to do it.\" There was a private entrance for celebrities and VIPs that she felt she had not yet earned: \"I didn't get that role on Friends, so I wasn't 'there' yet.\" Students sat perfectly still so supervisors would not spot \"study problems,\" and a failed checkout could send you back ten pages.",
          },
          {
            q: "How does she describe auditing?",
            a: "The auditor uses an E-Meter, and only topics that register on the meter are discussed. Criticism of others is turned back on yourself: Hubbard defined critical thought as \"a symptom of an overt act having been committed\" or \"a withhold from an auditor.\" The auditor assigns you a problem and repeats the question until you give in and the needle \"floats.\" As she puts it, \"they assigned you the problem and not the other way around.\" The relief felt real, but \"it really existed only when I was in the presence of other Scientologists, who completely bought into it,\" and it was gone by the time she reached the parking lot.",
          },
          {
            q: "How did she handle her private life in Chapter Eight?",
            a: "She dated men outside the church as one small part of life she kept for herself, going through a guarded and promiscuous period. Her mother's answer to every problem was \"You'll handle that in session.\" She met Angelo Pagan, who was married and admitted to cheating, and sent him on a church course to fix him; his confessions were treated as progress. Her mother's disgust (\"I did not raise this person\") jolted her, and the church's remedy was for her to pay for Angelo and his wife's church marriage counselling.",
          },
          {
            q: "What are the key ideas of these pages?",
            a: "Credit for success flows to the system while blame for failure stays with the member, which makes the system look infallible. The demands never let up, however successful a member becomes. Visible tiers of access, like the VIP entrance, turn status into the next thing to chase. Redefining a word such as \"critical\" makes doubt itself feel like guilt. A problem the group assigns and a relief the group supplies create dependence, because the good feeling exists only among believers. One stock answer to everything (\"handle that in session\") shuts down real conversation. Tony Danza's plain courtesy is the decent counter-example.",
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
      {
        label: "Part 3: The Cincinnati Kid and The Move to Manhattan (chapters 4 and 5)",
        qa: [
          {
            q: "How did he buy Swifton Village?",
            a: "The book describes 1,200 units in Cincinnati, 800 of them vacant, in a government foreclosure, with \"no one else was even bidding.\" He bought it for under $6 million. It had cost twice that to build two years earlier. The mortgage covered the price plus about $100,000, so he put no money down. A large job, on this account, takes nearly the same energy as a small one, with far more upside.",
          },
          {
            q: "What did the visible repairs do?",
            a: "White shutters, colonial doors, clean halls, landscaping and advertisements took Swifton to fully let within a year. He writes: \"I can always tell a loser when I see someone with a car for sale that is filthy dirty.\"",
          },
          {
            q: "Why did he sell, and how did he check the advice?",
            a: "A tenant who had survived a concentration camp told him to \"sell this job.\" He spent two more days driving the area, saw what the tenant had seen, and sold for $12 million, about $6 million over what he had in it. A trusted voice came first. Then he went and looked.",
          },
          {
            q: "How was the sale contract drawn?",
            a: "He gave representations as of signing, not as of closing, and he required the buyer to guarantee the closing or pay a large penalty, rather than merely forfeit a 10 percent deposit. The buyer's inspector, the book says, spent three hours at lunch and asked almost nothing.",
          },
          {
            q: "How did he reach the person who could say yes?",
            a: "Le Club laughed at him. He called back three times until he reached the president, then met him twice. For the Penn Central yards he began, \"Hello, my name is Donald Trump, and I'd like to buy the Sixtieth Street yards.\" The book says the simplest approach is often the most effective.",
          },
          {
            q: "How did he deal with Penn Central?",
            a: "Working closely with Victor Palmieri, he obtained exclusive options, subject to every approval and with no money down, while Penn Central paid his development costs. He had no record to point to. What he offered was energy, as someone working the seller's problem rather than as one more bidder.",
          },
          {
            q: "What happened when the housing subsidies collapsed?",
            a: "In 1975 the subsidies ended, and the 34th Street yards were recast as a convention-centre site. He hired Lindenbaum, a zoning lawyer who had worked on a rival site, and Louise Sunshine. He held a press conference under the name \"Miracle on 34th Street,\" and argued cost and access. The book says he \"won by wearing everyone else down,\" and that advertising matters most when people are not buying.",
          },
          {
            q: "What does the book admit about how he presented himself?",
            a: "He inflated \"the Trump Organization,\" which these pages place in two small offices on Avenue Z, and he says he probably oversold himself. A rival asked where the bricks and mortar were. He also spoke down the competing bids. The account records the boast, and the question it drew.",
          },
          {
            q: "What does he value in Roy Cohn, and what did he still check?",
            a: "He wanted a lawyer who would fight and stand with him. He also checked, before each court date, whether Cohn was prepared, and he pressed for a postponement when he was not.",
          },
          {
            q: "What did the convention-centre work return?",
            a: "About $833,000, after years of it. He offered to give up the fee if the centre carried his father's name, and he was still barred from building it. The city's version, the book says, ran four years late and about $700 million over.",
          },
        ],
      },
      {
        label:
          "Part 4: Grand Hotel and the first half of Trump Tower (chapter 6 and chapter 7 up to the Kandell site)",
        qa: [
          {
            q: "How did he turn New York's crisis into his argument?",
            a: "In a city close to bankruptcy, he told the railway's trustee, Victor Palmieri, that he was the only buyer, told banks they owed it to New York, and told the city he would bring thousands of jobs. In his words, \"the city's desperate circumstances became my biggest weapon.\"",
          },
          {
            q: "How did he gain control of the Commodore hotel without much money?",
            a: "He took a $10 million option conditional on a tax abatement, financing and a hotel partner, and his $250,000 deposit was delayed so long that the copy he showed the city \"was signed only by me.\" Each provisional yes (Hyatt, the design, the Equitable, the banks) was used to win the next one. The book itself shows how close this came to implying commitments he did not yet hold.",
          },
          {
            q: "Why does the book insist on going to the top?",
            a: "Hyatt kept reopening terms until he called Jay Pritzker directly. \"If you're going to make a deal of any significance, you have to go to the top,\" he writes, because an employee \"isn't going to fight for your deal.\"",
          },
          {
            q: "How did he borrow credibility he did not yet have?",
            a: "He brought the older, white-haired broker Henry Pearce to meetings to reassure bankers, had architect Der Scutt's sketches made to look expensive (\"a good-looking presentation goes a long way\"), and staged a press conference with Hyatt so the banks had something real to see.",
          },
          {
            q: "What happened when he asked for a 40-year tax abatement?",
            a: "It was unprecedented, and he expected it to be cut. He got all of it, approved 8 to 0, and later joked that he got it \"because I didn't ask for fifty.\" Penn Central's announcement that it would close the hotel and a weak rival bid helped seal it.",
          },
          {
            q: "Why does he value one clause above his half of the hotel?",
            a: "Pritzker had refused Hyatt an exclusive covenant for the city. At closing, while Pritzker was in Nepal, Trump got the bank to demand it and drafted it himself within the hour. He values that clause above his 50 percent stake and wrote it into his will. The person not in the room lost the point.",
          },
          {
            q: "How did persistence and timing win the Bonwit Teller site?",
            a: "Franklin Jarman told him \"you've got to be crazy.\" He kept writing letters for three years, and on the day a new turnaround chief executive, Hanigan, arrived, he called at nine sharp and heard \"you're the guy who has been writing all those letters.\" He then locked in a one-page letter of intent and removed the board-approval condition before the market caught on.",
          },
          {
            q: "Why did he pretend to have a fallback option?",
            a: "To the Equitable, his partner, he stressed a cheap office conversion as his alternative, although \"I was no longer certain\" it could be financed, so they would not \"drive a much harder bargain.\"",
          },
          {
            q: "How did he win Tiffany's air rights?",
            a: "He appealed to Walter Hoving's pride, offering $5 million \"to let me preserve Tiffany,\" and showed him an ugly alternative design. Hoving honoured the price even after the market jumped and Avon, Tiffany's new owner, objected: \"When I make a deal, that's the deal.\"",
          },
          {
            q: "What lever did he find in the paperwork for the Kandell parcel?",
            a: "An option on the Kandell land, bought from Tiffany as an add-on, turned an owner who would not sell into a 20-minute deal: the lease was extended from under 20 years to 100 years, with no bar on rebuilding. Kandell later gave him 15 percent of the Ritz Carlton land.",
          },
          {
            q: "What does the chapter say about relationships beyond the deal?",
            a: "He cancelled a long-planned meeting to attend A.N. Pritzker's funeral and lost that deal, with \"no regrets.\" A Hyatt manager who wanted independence won it by flooding him with friendly detail, showing that being positive and attentive often works better than a fight.",
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
  {
    subject: "Narrative psychology and persuasion",
    title:
      "The Extended Transportation-Imagery Model: A Meta-Analysis of the Antecedents and Consequences of Consumers' Narrative Transportation",
    authors:
      "Tom van Laer, Ko de Ruyter, Luca M. Visconti, Martin Wetzels",
    year: 2014,
    citation:
      "Journal of Consumer Research, 40(5), 797-817; doi 10.1086/673383",
    link: "https://openaccess.city.ac.uk/6755/",
    slug: "narrative-transportation",
    published: true,
    relatedWork: [
      {
        authors: "Melanie C. Green and Timothy C. Brock",
        title:
          "The role of transportation in the persuasiveness of public narratives",
        year: 2000,
        citation: "Journal of Personality and Social Psychology",
      },
    ],
    qa: [
      {
        q: "What is narrative transportation?",
        a: "It is the experience of being mentally carried into the world a story creates, so that attention, imagery and feeling are all absorbed by it.",
      },
      {
        q: "What did the original work show?",
        a: "Green and Brock found that readers who were more absorbed in a story later held beliefs more consistent with it, and noticed fewer details that struck them as false or out of place.",
      },
      {
        q: "What did this paper add?",
        a: "The authors brought together two decades of research from psychology, communication, marketing and literary studies into a single model, then tested it with a meta-analysis of 132 effect sizes from 76 published and unpublished studies.",
      },
      {
        q: "What makes a story transporting?",
        a: "Features of the story, chiefly an identifiable character, a plot the audience can imagine, and a sense that it could be true. Features of the audience also matter, including familiarity with the subject, attention, and a personal tendency to become absorbed in stories.",
      },
      {
        q: "What follows from it?",
        a: "Greater transportation was associated with stronger emotional responses and more story-consistent beliefs, attitudes and intentions, together with less critical thought about the message.",
      },
      {
        q: "How strong is the evidence?",
        a: "The pattern is consistent across many studies, which gives it weight. Much of the research relies on self-reported absorption and controlled settings, so the size of the effect in everyday life should be read with some care.",
      },
      {
        q: "Why does it matter more generally?",
        a: "It suggests that a well-told account, with a real person at its centre and details that ring true, can shape understanding in ways a list of facts often cannot. It also suggests that one false note can undo the effect.",
      },
    ],
  },
  {
    subject: "Social psychology",
    title:
      "Beautiful mess effect: Self\u2013other differences in evaluation of showing vulnerability",
    authors: "Anna Bruk, Sabine G. Scholl, Herbert Bless",
    year: 2018,
    citation: "Journal of Personality and Social Psychology",
    link: "https://doi.org/10.1037/pspa0000120",
    slug: "beautiful-mess-effect",
    published: true,
    relatedWork: [
      {
        authors: "Anna Bruk, Sabine G. Scholl, Herbert Bless",
        title:
          "You and I Both: Self-Compassion Reduces Self\u2013Other Differences in Evaluation of Showing Vulnerability",
        year: 2022,
        citation: "Personality and Social Psychology Bulletin",
        link: "https://journals.sagepub.com/doi/10.1177/01461672211031080",
      },
    ],
    qa: [
      {
        q: "What question did the researchers ask?",
        a: "Whether people judge the act of showing vulnerability differently when they picture themselves doing it than when they picture someone else doing it. Examples include confessing romantic feelings, asking for help, revealing a physical imperfection or taking responsibility for a mistake.",
      },
      {
        q: "What did they find?",
        a: "Across seven studies, people rated their own displays of vulnerability more negatively than the same behaviour in others. In themselves it looked like weakness. In others it looked more like courage and authenticity. The authors call this the beautiful mess effect, and they report evidence that it holds in a real-life situation as well as in imagined scenarios.",
      },
      {
        q: "Why does it happen?",
        a: "The authors draw on construal level theory. When we are the one exposed, we think about the situation concretely and focus on what could go wrong. When we watch someone else, we think about it more abstractly and notice the positive side of being open. Their studies found that the level of construal plays a central part in producing the difference.",
      },
      {
        q: "Has the finding been repeated?",
        a: "The same research team replicated the effect in a later set of four studies (2022). They also found that people high in self-compassion show a smaller gap, mainly because they judge their own vulnerability more kindly. Nearly all of the evidence so far comes from this one group, so independent replication would strengthen the case.",
      },
      {
        q: "Why does it matter more generally?",
        a: "People often stay silent, avoid asking for help or hide mistakes because they expect to be judged harshly. This research suggests those fears are often overstated: observers tend to view such openness more favourably than the person showing it expects. That is useful in workplaces, client relationships and leadership, where candour is often undervalued by the person offering it.",
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
