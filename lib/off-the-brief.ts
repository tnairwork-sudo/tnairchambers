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
        label: "pp 45-60: Chapter Two continued: the frontal cortex",
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
            q: "Why are the hardest moral acts often automatic?",
            a: "Honesty often comes easily because it is automatic, not because the frontal cortex is straining. People who rescue others usually say \"I wasn't thinking, before I knew it, I had jumped in.\" The frontal cortex is more involved in thinking about morality, such as writing a term paper on it, than in the bravest moral acts.",
          },
          {
            q: "How does the size of the frontal cortex relate to social life?",
            a: "Across primate species, the bigger the average social group, the larger the frontal cortex relative to the rest of the brain, especially in species whose groups split up and rejoin, such as chimpanzees, bonobos, orangutans and spider monkeys. In people, a bigger social network (measured by how many different people someone texts) goes with a larger region of the prefrontal cortex. To test cause and effect, rhesus monkeys were placed at random into groups of different sizes, and over 15 months the monkeys in bigger groups grew a larger prefrontal cortex. Social complexity expands the frontal cortex.",
          },
          {
            q: "What happened to Phineas Gage, and what did his case show?",
            a: "In 1848 in Vermont, a blasting accident drove a 13-pound iron rod through the left side of the railroad foreman's face and out the top of his skull, landing 80 feet away with much of his left frontal cortex. He survived, but the steady Gage became fitful, profane, impatient of restraint and unable to stick to plans; friends said he was \"no longer Gage,\" and he ended up as an exhibit for P. T. Barnum. Within a few years he improved enough to work as a stagecoach driver, because his remaining right frontal cortex took over some of the lost functions, an early example of the brain's ability to rewire itself.",
          },
          {
            q: "What do diseases and altered states show about an underactive frontal cortex?",
            a: "Frontotemporal dementia first destroys the von Economo neurons and causes disinhibition, socially inappropriate behaviour and apathy. In Huntington's disease, frontal damage often comes first, and about half of patients show disinhibition such as stealing, aggression, hypersexuality and compulsive gambling. Frontal strokes can do the same. In dreaming sleep the frontal cortex goes offline, and stimulating it makes dreams more self-aware; it also goes quiet during orgasm. Studies by Adrian Raine and Kent Kiehl found reduced frontal activity in criminal psychopaths, and many people jailed for violent crimes have a history of frontal head injury.",
          },
          {
            q: "What are the dlPFC and the vmPFC?",
            a: "The dorsolateral prefrontal cortex (dlPFC) is the \"decider of deciders\": the most rational, utilitarian part, the most recently evolved, the last to mature, and mostly connected to other cortical regions. The ventromedial prefrontal cortex (vmPFC) is so closely tied to the emotional limbic system that Walle Nauta counted it as an honorary member, and it handles how emotion shapes decisions.",
          },
          {
            q: "What evidence shows that the dlPFC \"does the harder thing\"?",
            a: "It is the most active region when someone gives up an immediate reward for a bigger later one, and stronger dlPFC activity predicts saying yes to killing one person to save five. Monkeys and people with dlPFC damage stick with whatever pays off soonest and cannot postpone gratification. In a study by Ernst Fehr, temporarily silencing the dlPFC with magnetic stimulation made people accept unfair offers in an economic game, but only when they believed the other player was human. They still rated the offers as unfair; they simply could no longer act on their sense of fairness.",
          },
          {
            q: "What happens when the vmPFC is damaged?",
            a: "Intelligence, working memory and logic puzzles are unaffected, but patients struggle with social and emotional decisions, especially personal ones, even though they can still give others sensible advice. Their choices become coldly utilitarian: they would sacrifice a family member to save five strangers, and they would punish someone who killed by accident but not someone who tried to kill and failed. Sapolsky likens them to Mr. Spock, running on the dlPFC alone.",
          },
          {
            q: "How did Antonio Damasio show that emotion is essential to good decisions?",
            a: "The vmPFC runs \"as if\" experiments on gut feelings: \"How would I feel if this happened?\" Without it, people choose badly in friends and partners and ignore negative feedback. In a gambling task where the odds secretly change, healthy people adapt even before they can explain why. vmPFC patients fail to adapt even when they can explain the change, because they know the feedback is bad but do not feel it. The result is the person who says \"I see you've put on some weight,\" and then adds, \"But it's true.\"",
          },
          {
            q: "What is the takeaway for pages 45-60?",
            a: "The amygdala is a fast but inaccurate alarm for threat and uncertainty, while the frontal cortex is the costly, tireable part of the brain that makes you do the harder right thing. Doing the harder thing depends on emotion as well as reason: lose the emotional input of the vmPFC and judgement falls apart.",
          },
        ],
      },
      {
        pagesFrom: 60,
        pagesTo: 75,
        label: "pp 60-75: Chapter Two continued: the two prefrontal regions, emotional regulation, dopamine and the anticipation of reward",
        qa: [
          {
            q: "How do the dlPFC and vmPFC work together?",
            a: "Their activity can move in opposite directions. When jazz pianists improvised inside a brain scanner, the vmPFC became more active and the dlPFC less so. Judging how responsible a wrongdoer is uses the dlPFC, while choosing the punishment uses the vmPFC. In a gambling task with shifting odds, the most recent outcome was tracked by the vmPFC and long-run patterns by the dlPFC, and the balance between them predicted the choice. They are not at war: as tasks get harder, the two become more synchronised.",
          },
          {
            q: "What does the trolley problem reveal about the brain?",
            a: "If pulling a lever diverts a runaway trolley so it kills one person instead of five, 70 to 90 percent of people say they would do it. If they must push a person in front of the trolley with their own hands, 70 to 90 percent refuse, even though the numbers are the same. In Joshua Greene and Jonathan Cohen's brain-scanning study, the pushing version activated the dlPFC along with the amygdala, the vmPFC and regions for unpleasant emotion, and the more those emotional regions fired, the less likely people were to push. The lever version activated only the dlPFC, as purely cerebral as choosing which tool to use.",
          },
          {
            q: "How does the prefrontal cortex calm the emotional brain?",
            a: "Three examples. A face of another race flashed for a tenth of a second activates the amygdala, but with longer viewing the dlPFC kicks in and damps it down. Being left out of a game activates pain and distress regions, and the prefrontal cortex then soothes them with rationalisations (\"my dog loves me\"); with an immature prefrontal cortex the distress keeps growing, as in a typical teenager. And when a learned fear fades, the \"not this time\" lesson is stored in the prefrontal cortex, which inhibits the amygdala. The original fear remains underneath, which is why it can return quickly. In people, reimagining a square linked to shocks as a lovely blue sky reduces the amygdala's response.",
          },
          {
            q: "What did James Gross find about controlling emotions?",
            a: "Simply suppressing a reaction (\"sit still and breathe slowly\" while watching disturbing surgery footage) often increases amygdala and stress-system activity. Strategies used before the reaction work better: thinking about something else, such as a great holiday, or reframing the scene (\"those are just actors\"). These engage the prefrontal cortex, quiet the amygdala and reduce distress. The same mechanism helps explain placebos, where a cream believed to be a painkiller activates the prefrontal cortex and blunts pain, and cognitive behavioural therapy, where people learn to reframe present triggers as echoes of past experience.",
          },
          {
            q: "What is Damasio's somatic marker hypothesis?",
            a: "It is the emotional brain informing the rational one. When we choose, we do not only weigh costs and benefits; the limbic system also simulates how each outcome would feel and reports that to the vmPFC, like \"an emotional memory of a possible future.\" A mild signal stays in the brain (\"this feels scary\"). A strong one involves the body (\"my skin is getting clammy\"), and boosting that bodily signal in experiments strengthens the aversion.",
          },
          {
            q: "Why do we sometimes do exactly the thing we are trying hardest to avoid?",
            a: "Psychologist Daniel Wegner called it the \"imp of the perverse\": steering your bike into the rut you were watching, blurting out the sore point, spilling the red wine you were carefully holding. Self-control runs on two streams, one saying \"X is important\" and another saying \"do X\" or \"never do X.\" Under stress, distraction or mental overload the streams separate, and \"X is important\" pushes the act forward without the \"don't.\" You do the worst thing because of a stressed version of your best effort.",
          },
          {
            q: "What final points does Sapolsky make about the frontal cortex?",
            a: "Doing the harder thing does not always mean favouring thought over feeling: moral decisions about our own group go best when intuition leads, and decisions about outsiders when reasoning leads. The prefrontal cortex can also enable harmful acts, such as pulling a trigger. Its resting activity varies about thirtyfold between people. \"Right\" here means effective, not moral: lying well is a dlPFC task, and pathological liars have extra prefrontal wiring. His refrain is \"context, context, context.\"",
          },
          {
            q: "Where does dopamine come from, and what is the evidence that it signals reward?",
            a: "A region deep in the brain called the ventral tegmental area sends dopamine to the nucleus accumbens, amygdala and hippocampus, and to the prefrontal cortex. Cocaine, heroin and alcohol release dopamine in the accumbens; blocking it makes rewards unpleasant; and chronic stress or pain depletes it, leaving people unable to feel pleasure. Sex releases it in every species studied, and in people merely thinking about sex does. A picture of a milkshake does not trigger it after you have just drunk one, unless you are dieting. Accumbens activity even predicts whether someone will buy a new piece of music.",
          },
          {
            q: "What do social studies of dopamine show?",
            a: "Mutual cooperation released more dopamine than a bigger payoff from betraying a partner. Punishing a cheater released dopamine, even more when it cost the punisher something. In Elizabeth Phelps's auction study, losing a lottery did nothing, but losing a bidding war suppressed dopamine, because it felt like losing status. With envy, pain regions fire at an envied person's good fortune, and the more they fire, the more dopamine is released at that person's later misfortune. In monkeys, a surprise doubling of a usual reward doubles the dopamine response, but once the bigger reward becomes routine the response falls back, and a return to the old reward actually lowers dopamine. As Sapolsky puts it, \"nothing is ever as good as that first time.\"",
          },
          {
            q: "Why does the brain's response to reward have to fade with repetition?",
            a: "The same dopamine system has to handle rewards as different as solving a maths problem and having an orgasm. So its responses are not absolute; they are relative to the alternatives, and the system keeps rescaling. Each reward has to lose its punch with repetition so the system can respond across its full range to the next new thing.",
          },
          {
            q: "What did Wolfram Schultz's \"two versus twenty\" study show?",
            a: "Monkeys were trained to expect either 2 or 20 units of reward. Unexpectedly getting 4 instead of 2, or 40 instead of 20, produced the same burst of dopamine, and getting 1 or 10 produced the same drop. Across a tenfold range, what mattered was the relative size of the surprise, not the absolute amount.",
          },
          {
            q: "What does dopamine signal once a reward arrives?",
            a: "The gap between what was expected and what happened, in both directions. Get what you expected and there is a steady trickle. Get more, or get it sooner, and there is a burst; get less, or later, and there is a dip. Some neurons code pleasant surprises and others unpleasant ones, and the frontal cortex does the expectation sums (\"I expected 5.0 and got 4.9, how big a letdown is that?\").",
          },
          {
            q: "How could brain scans predict whether someone buys an item?",
            a: "Activity in the nucleus accumbens when people saw an item predicted how much they would pay. When the price was revealed, a price below that amount activated the emotional vmPFC, and a higher one activated the insula, a region tied to disgust. Combining the signals predicted the purchase.",
          },
          {
            q: "What is the problem with pleasures humans invent?",
            a: "We create rewards far stronger than anything in nature: organ music that was the loudest human-made sound a medieval peasant ever heard, engineered foods that outdo a hunter-gatherer's lucky find of honey, and drugs that release a thousand times more dopamine than anything natural. Unnaturally strong pleasure brings unnaturally strong habituation. We stop noticing small pleasures, like autumn leaves or the reward after a hard, worthwhile task, and we even get used to the artificial floods. \"The more we consume, the hungrier we get\": yesterday's unexpected pleasure becomes today's entitlement and tomorrow's not enough.",
          },
          {
            q: "Once a monkey has learned a task, when is most dopamine released?",
            a: "When the light signalling a reward trial comes on, before any lever pressing, while the treat itself brings only a small blip. Brian Knutson found the same in people anticipating money. Dopamine is about expectation and confidence (\"I know how this works; this is going to be great\"). The pleasure is in the anticipation, and the reward is almost an afterthought unless it fails to arrive.",
          },
          {
            q: "How does learned anticipation explain craving in addiction?",
            a: "Learning that a cue means reward makes the neurons that feed into the dopamine system more excitable. Someone sober for years who returns to the old street corner or bar gets those strengthened connections firing again: dopamine surges in anticipation and craving floods in.",
          },
          {
            q: "Can a cue become rewarding in itself?",
            a: "Yes. In Huda Akil's study, a light on one side of a cage signalled that pressing a lever on the other side would deliver food. Rats eventually worked just to hang around near the light, because the signal had taken on the pull of what it signalled. Sapolsky suggests this is what fetishes are, in both the anthropological and the sexual sense.",
          },
          {
            q: "What sets how much dopamine rises in anticipation?",
            a: "Two things. The first is the size of the expected reward: a signal that means a bigger payoff soon triggers more anticipatory dopamine. The second, more surprising, is uncertainty. When pressing a lever pays off only half the time, far more dopamine is released, because nothing fuels dopamine like the \"maybe\" of a reward that comes only some of the time. This extra rise comes after the pressing is done, while the monkey waits to find out.",
          },
          {
            q: "What happens when the odds are 25 or 75 percent instead of 50?",
            a: "Both are less uncertain than a coin flip, so both produce a smaller extra rise of dopamine. Anticipatory dopamine peaks at maximum uncertainty. This uncertainty-driven release runs mostly through the pathway to the frontal cortex, which suggests uncertainty is a more mentally demanding state.",
          },
          {
            q: "What is the takeaway for pages 60-75?",
            a: "The frontal cortex does the harder thing by working with emotion rather than overruling it. The dopamine system that motivates us responds to surprise, standing and anticipation more than to the reward itself, and it is never more excited than by a \"maybe.\"",
          },
        ],
      },
      {
        pagesFrom: 75,
        pagesTo: 90,
        label: "pp 75-90: The end of Chapter Two, \"One Second Before\", and the opening of Chapter Three, \"Seconds to Minutes Before\" (read to p. 86 so far)",
        qa: [
          {
            q: "How does this explain casinos and gambling addiction?",
            a: "With long odds, gambling should not trigger much anticipatory dopamine. But round-the-clock activity with no clocks, cheap alcohol dulling judgement, and tricks that make today feel lucky shift the perceived odds into the range where dopamine pours out. In people with gambling addiction, a near miss (two of three slot-machine reels lining up) set the dopamine system off \"like crazy,\" while other people barely responded. And between two bets with the same odds, the one with less information activated the amygdala and silenced dopamine. A well-understood risk is addictive; ambiguity is just unsettling.",
          },
          {
            q: "What shows that dopamine drives the pursuit of reward, not just the anticipation?",
            a: "If the dopamine release after the cue does not happen, the monkey does not press the lever. A rat with a damaged nucleus accumbens makes impulsive choices instead of holding out for a bigger, later reward. Stimulate the dopamine source directly instead of flashing the light, and the monkey presses. Dopamine ties a reward's value to the work needed to get it: it is \"the happiness of pursuit of reward that has a decent chance of occurring.\" When it fails, it shows up in depression, where stress dampens dopamine, and in anxiety, where the amygdala does.",
          },
          {
            q: "How does dopamine power willpower and waiting?",
            a: "Thinking about an immediate reward activates the emotional targets of dopamine, while thinking about a larger, later one activates frontal targets, and more of the latter predicts waiting. During long, effortful work, dopamine ramps up gradually, scaled to the delay and the expected reward. We also \"discount\" the future: a reward that should feel half as valuable when it takes twice as long instead feels like a quarter of the value. In impatient people, the reward system underestimates the delayed reward and the dlPFC overestimates the delay. ADHD and addictive drugs both tilt the system toward impulsiveness.",
          },
          {
            q: "What is uniquely human about delayed gratification?",
            a: "Lab delays last seconds, but humans wait astonishingly long. \"No warthog restricts calories to look good in a bathing suit next summer,\" and no gerbil studies for exams to get into college, a good job and eventually \"a good nursing home.\" We even work for rewards that come after we die: our country winning a war, our children's inheritance, paradise, or the planet our great-grandchildren will live on. How we resist discounting the future so strongly is still unknown.",
          },
          {
            q: "What does serotonin have to do with aggression?",
            a: "Since a 1979 study, low brain serotonin has been linked to aggression in people and in species from other mammals to crickets and crustaceans. The key qualifier is that it predicts impulsive aggression, not planned violence, along with other impulsiveness such as impatience and impulsive suicide. Lowering serotonin makes people more impulsive, for example wrecking a stable, cooperative relationship in an economic game. Raising it does not change typical people but does calm those prone to impulsiveness, such as adolescents with conduct disorder. The genetics, including the so-called \"warrior gene\" that some courts have used to reduce sentences, is a contradictory mess that the book returns to in chapter 8.",
          },
          {
            q: "What three misreadings of neuroscience does Sapolsky warn against?",
            a: "First, needing brain science to confirm the obvious: it should not take a scan of brain damage to convince lawmakers that combat veterans' trauma is real, and a good neuropsychologist can beat a \"gazillion-dollar brain scanner.\" Second, putting \"neuro\" in front of everything (neuroeconomics, neuromarketing, even neuroliterature); writer Adam Gopnik warns that explaining everything leads to forgiving everything, and Sapolsky will argue later that words like evil, soul and blame do not fit science at all. Third, hidden dualism: an impulsive act is not more \"biological\" because the person has a damaged frontal cortex; that brain is simply easier to understand with our crude tools.",
          },
          {
            q: "What did Isabel Gauthier show about the brain's \"face area\"?",
            a: "The fusiform face area lights up for cars in car enthusiasts and for birds in birdwatchers. It is not really about faces; it recognises examples of whatever categories matter emotionally to that person. Sapolsky closes the chapter with the point that the brain is not where behaviour \"begins\" but the final common pathway where everything in the later chapters comes together.",
          },
          {
            q: "How did behaviourism and ethology differ?",
            a: "Chapter Three opens with two schools. American behaviourists such as John Watson and B. F. Skinner looked for universal rules: reward makes a behaviour more likely and punishment less likely, so any behaviour could be shaped, and \"a pigeon is a rat is a boy.\" They were often right but missed key exceptions: a young rat or monkey raised by an abusive mother becomes more attached to her, just as people can love someone who hurts them. European ethologists instead loved the variety of each species and studied animals in the wild (\"studying rat social behavior in a cage is like studying dolphin swimming behavior in a bathtub\").",
          },
          {
            q: "What sensory triggers shape behaviour in other species?",
            a: "Sounds: when female pandas ovulate their calls get higher, which males prefer, and the same shift and preference happen in people. Sights: play bows, plumage, \"threat yawns,\" and baby features like big eyes and round foreheads, which Walt Disney used to turn rodents into Mickey and Minnie. Hidden channels: scent signals called pheromones, snakes that see infrared, electric fish courtship songs, bats jamming each other's sonar, and rats \"laughing\" ultrasonically when tickled. Whatever sense dominates in a species has the most direct line to its emotional brain, which for rodents is smell.",
          },
          {
            q: "What are examples of subliminal cues?",
            a: "Crisps taste better with louder crunching sounds. A smiling face flashed for a twentieth of a second makes people like the next neutral image more. A pricier placebo painkiller works better. And reading the word \"ocean\" makes people more likely to pick Tide as their favourite detergent, and then explain its cleaning power.",
          },
          {
            q: "What happens in the brain within a fraction of a second of seeing a face of another race?",
            a: "People can guess its race better than chance even when unsure they saw anything. The amygdala activates, more so in people with stronger unconscious bias. Elizabeth Phelps found that fear conditioning forms faster for other-race faces, and neutral other-race faces are judged angrier. With longer viewing, frontal regions kick in and calm the amygdala. John Gabrieli found less activity in the face area for other-race faces, strongest in the most biased people; a purple-skinned face gets the same-race response, so it is not just novelty. The reflexive empathy people show when watching a needle prick a hand is weaker for other-race hands, in both white and black participants.",
          },
          {
            q: "What is the takeaway so far?",
            a: "Dopamine is not about having a reward but about chasing one that might come, which is why \"maybe\" hooks us, overstimulation numbs us and the frontal cortex has to do the work of waiting. Chapter Three begins the step back in time: before the brain acts, senses and subtle cues it may never notice are already steering it.",
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
      {
        pagesFrom: 60,
        pagesTo: 75,
        label: "pp 60-75: The end of Chapter Eight, Chapter Nine and Chapter Ten up to the Teletubbies scene",
        qa: [
          {
            q: "How did the church handle her relationship with Angelo?",
            a: "She was made to pay about five thousand dollars for Angelo and his wife's church marriage counselling, was ordered not to contact him, and was sent back to auditing and ethics for her \"hidden evil intentions toward men.\" She also had to apologise to his wife in person. She read her heartbreak as deserved punishment: \"The pain I was feeling was my punishment, and I deserved it.\" Months later Angelo called to say the counselling had changed his values but not his wife's, and that he had left.",
          },
          {
            q: "How did she react when Fired Up was cancelled?",
            a: "She counted it as \"another failure as an actress and as a Scientologist.\" In her words, being a Scientologist meant \"you are responsible for all the bad things that happen to you (and anything good that was happening was due to the church).\" That belief nearly made her turn down The King of Queens, until a blunt call from Les Moonves persuaded her to meet Kevin James.",
          },
          {
            q: "What did The King of Queens give her?",
            a: "A real sense of home. Before every taping she and Kevin James touched an old name carved into the set's wood as a reminder: \"There were shows before us and there will be shows after us, so let's never take it for granted.\" She loved the routine (\"The same thing, the same people, week in and week out... I had a home. Finally.\"), Kevin's generosity (\"Give Leah the joke instead of me\") and Jerry Stiller's (\"It's you kids. You kids are the show.\").",
          },
          {
            q: "How did her faith shape life on set?",
            a: "She hid how much time she spent at the church and turned down drinks with the cast. She felt judged for her beliefs and, at the same time, pressured to \"set a good example\" so she would not put anyone off joining. The show succeeded without awards and was given a difficult time slot.",
          },
          {
            q: "What happened at her OT I pre-check?",
            a: "An Ethics Officer read every Knowledge Report ever filed about her. Church policy says anyone who knows of a fellow member's wrongdoing and does not file a report \"becomes an ACCESSORY.\" He asked why she wasn't married, as a matter of setting an example to the public, and soon afterwards she and Angelo got engaged and married in Las Vegas in 2003.",
          },
          {
            q: "What are disconnection and \"Suppressive Persons\"?",
            a: "A Suppressive Person is someone the church declares an enemy, and members are expected to cut off contact with them. After a tabloid story, the church demanded that Angelo cut off his son's mother. Leah quietly refused to report her friend Sherry, who had left the church and was thriving. The church's stock reply to ex-members' happiness was \"But are they happy, Leah, truly? What about their eternity, Leah?\"",
          },
          {
            q: "What were her pregnancy and early motherhood like?",
            a: "Church teaching on \"silent birth\" and avoiding drugs during labour gave way to an epidural, and a television special edited out her cursing so she looked serene. When her daughter Sofia cried, every Scientologist had a fix: something about her environment, or \"technology wasn't being applied correctly,\" or an \"assist\" involving touching trees. In the end, the Teletubbies did what the technology could not.",
          },
          {
            q: "What are the key ideas of these pages?",
            a: "Blaming members for every misfortune while crediting the group for every success makes the system look infallible. Asking members to report on each other turns friends into possible informants and keeps everyone in line through fear. Threatening to take away family and friends makes leaving very costly, and the group explains away the visible happiness of those who leave. Pressure to \"set a good example\" turns even private life into advertising for the group. The King of Queens set offers the healthy contrast: belonging built on routine, small shared rituals, gratitude and generosity.",
          },
        ],
      },
      {
        pagesFrom: 75,
        pagesTo: 90,
        label: "pp 75-90: Chapter Eleven and the first part of Chapter Twelve (to Tom Cruise and Katie Holmes's wedding invitations; read to p. 90, which ends mid-chapter)",
        qa: [
          {
            q: "How did she approach raising her daughter?",
            a: "She hired a nanny, Trish, who was not a Scientologist, by choice, and refused to use church practices such as the \"Contact Assist\" on her daughter Sofia. \"I refused to raise Sofia in a way that would make her incompatible with the rest of the world as I felt I was, and as were many second-generation Scientologists.\"",
          },
          {
            q: "What changed when she returned to the church's Flag base as a celebrity?",
            a: "She was charged $40,000 to make amends for food she had stolen as a hungry teenager in the Sea Org. The man who had once thrown her overboard now flattered her, saying she did \"so much more for our church being a star.\" She writes: \"And with that, all of my resentment washed away in an instant.\"",
          },
          {
            q: "What image were members expected to show the world?",
            a: "\"All Scientologists are expected to present an image to the outside world that is so perfect and happy that people can't help but want to join.\" She adds that the church's supposed influence in Hollywood is a myth: \"while the church would like you to believe it wields a tremendous amount of influence in Hollywood, that is simply not the case.\"",
          },
          {
            q: "What happened to her friend Stacy Francis?",
            a: "Leah avoided recruiting, but brought in her friend, the singer Stacy Francis. When a church official dangled a barbecue at Tom Cruise's house to keep the singer Brandy interested, Stacy asked, \"Where's my invite?\" and was put through a security check for it.",
          },
          {
            q: "How did the church end her oldest friendship?",
            a: "Her oldest friend Sherry brought her brother Stefan, a declared Suppressive Person, to breakfast. Leah reported it, was questioned at home by the church's Office of Special Affairs, and ended the friendship. \"I was devastated because, as per the church, that would be the end of my friendship with Sherry. I felt I had no choice.\"",
          },
          {
            q: "How was she pressured to give money?",
            a: "She was told that as a celebrity she had to set the example: \"You've got to step up, because if you do it, people who are not contributing will start to. So you need to do this to save the planet.\" She felt \"a combination of coercion and responsibility.\" When she asked where her Hurricane Katrina donation had gone, and walked out of a plan to open a church branch in Inglewood with turkeys stuffed with a Way to Happiness booklet, the pressure only grew. A fundraiser waited in her parking lot every day and even used Nazi-era antisemitic propaganda in her own kitchen to push her, as a Jewish woman, into giving. \"It was just money, and as LRH says, you can always make more money.\" \"As I said, it was relentless.\"",
          },
          {
            q: "What did a million-dollar donation buy?",
            a: "Entry to Tom Cruise's inner circle. \"He had that magical quality that makes the person he's talking to, in this case me, feel like the only one in the world.\" She believed her time and money had earned his approval. But Sea Org minders watched every dinner, a joke could become a Knowledge Report (\"I am just collecting the data\"), and Tom's famous couch-jumping on television was explained as being \"up-tone.\" Doubt turned inward: \"Maybe I am degraded and an S.P.?\"",
          },
          {
            q: "What are the key ideas of these pages?",
            a: "Flattery from people with power can rewrite memory, as one compliment erased years of resentment. Access sold in tiers makes closeness itself the reward, so people pay for it, and visible tiers breed resentment. Guilt, urgency and constant presence wear down resistance better than argument, especially when the request is framed as a test of who you are. A myth of influence attracts people looking for an advantage. And reframing, such as calling couch-jumping \"up-tone,\" trains members to distrust their own judgement.",
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
      {
        label: "Part 5: The second half of Trump Tower (chapter 7 from the Kandell site: Genesco, zoning, construction, sales and the tax-exemption case)",
        qa: [
          {
            q: "Why did a one-page letter matter so much?",
            a: "When Genesco tried to back out of the Bonwit Teller sale for richer bidders, his only leverage was the one-page letter of intent signed by its chief executive, Hanigan. \"I'm not at all sure the letter would have proved legally binding,\" he writes, \"but at the very least I could have litigated it.\"",
          },
          {
            q: "How did going public hold the deal together?",
            a: "He confirmed the deal to The New York Times. Bonwit's staff began leaving, and Genesco signed five days later. The book presents it as a calculated risk that could easily have soured the relationship.",
          },
          {
            q: "Why did he pay half the price up front?",
            a: "Against his lawyers' advice, he paid 50 percent, $12.5 million, at contract. He reasoned that the cash kept a struggling Genesco alive and won a 60-day closing instead of six months. He gave the seller the one thing it most needed in exchange for speed.",
          },
          {
            q: "How did he win the zoning he wanted?",
            a: "He showed city planners the building he could put up \"as of right,\" \"a thin little four-sided box going straight up eighty stories,\" which made his own design look far better. He also offered something the city wanted: Bonwit's owner, Allied, wanted its flagship store back on Fifth Avenue, and a long lease at $3 million a year against $2.5 million in carrying costs meant he \"owned the land for nothing.\" He ended up with nearly all the density he asked for.",
          },
          {
            q: "Why did he show the plans to a known critic?",
            a: "Before the vote he took the plans to Ada Louise Huxtable, the architecture critic who disliked skyscrapers. Her review, \"A New York Blockbuster of Superior Design,\" helped him more, he says, than \"any single thing I ever said or did.\"",
          },
          {
            q: "What made the design work commercially?",
            a: "Its twenty-eight sides gave every major room two views, which justified premium prices. \"To hit a real home run,\" he writes, \"you need both\": design that impresses and design that sells.",
          },
          {
            q: "What did he come to regret?",
            a: "Tearing down the building's Art Deco friezes to save a few weeks of carrying costs, which made him \"a symbol of everything evil about modern developers.\" He regrets it, though he also concludes that controversy sells.",
          },
          {
            q: "How did he think about pricing?",
            a: "When a rival tower priced its apartments lower, he said, \"they had just announced that it was not as good.\" He gave no celebrity a special deal, because \"a celebrity willing to pay full price\" is what means something.",
          },
          {
            q: "How did scarcity help sell the apartments?",
            a: "He kept waiting lists, never rushed buyers, raised prices twelve times and held a dozen apartments back. \"The more unattainable the apartments seemed, the more people wanted them.\" The building was sold \"not just as a beautiful building in a great location but as an event,\" and a discreet \"no comment\" policy let rumours, such as one about Prince Charles, spread on their own. Quality tenants drew more quality tenants: Asprey brought in Cartier and Harry Winston.",
          },
          {
            q: "Why did he keep spending on upkeep?",
            a: "He spent nearly $1 million a year on maintenance and had the brass polished twice a month. When a new manager at his partner, the Equitable, pushed for cuts, he bought the partner out. In his view the standard was the product.",
          },
          {
            q: "How did the tax-exemption fight end?",
            a: "The city denied him a tax exemption, which he saw as politics. He sued and won 7 to 0 twice in New York's highest court, the Court of Appeals, with Roy Cohn arguing the case without notes.",
          },
          {
            q: "What were the results?",
            a: "The building cost about $190 million, and apartment sales brought in about $240 million, roughly $50 million in profit, plus about $10 million in commissions and ongoing rent.",
          },
        ],
      },
      {
        label: "Part 6: Gaming: The Building on the Boardwalk (chapter 8)",
        qa: [
          {
            q: "Why was he drawn to casinos?",
            a: "He noticed that two Las Vegas casinos earned nearly 40 percent of the Hilton hotel company's net profit, while the famous New York Hilton earned under 1 percent. The lesson he draws is to look at where the profit actually sits, not at prestige.",
          },
          {
            q: "Why didn't he buy Atlantic City land early?",
            a: "He refused to buy before New Jersey's gambling referendum passed: \"I thought it was a better bet to pay more for a sure thing.\" Then he waited about three years for the overheated market to cool. \"The worst of times often create the best opportunities to make good deals.\"",
          },
          {
            q: "How did he assemble the site?",
            a: "The site, a two-and-a-half-acre piece at the centre of the Boardwalk beside the convention centre, was three large parcels, each owned by a different investment group, plus half a dozen small homes owned by immigrant families. He made every purchase depend on all the others, with all the closings at the same time (they took 28 hours) and lawsuits dropped first. Next door, the publisher Bob Guccione was left building around a single holdout house.",
          },
          {
            q: "Why did owners finally deal with him?",
            a: "By 1980 the Grand Hyatt and Trump Tower had made him believable to landowners who had been \"promised the world a half dozen times.\" His track record was what opened a hard negotiation.",
          },
          {
            q: "Why did he hold off building until he had a licence?",
            a: "\"Once you've begun investing huge sums of money, it's very hard to say no to anything they ask for.\" He set a timetable for the gaming regulators and a credible walk-away: \"if it takes a year, then I'm out of here.\"",
          },
          {
            q: "How did he get banks to lend for a casino?",
            a: "Most banks avoided lending to the gaming business because of its reputation, and he had no casino track record at all. He turned that into the pitch: better to lend to \"a reputable company with a clean slate\" than to an experienced gaming operator with a questionable reputation, and proven builders could promise a lender the project would actually get built.",
          },
          {
            q: "How did he bring the casino in on time and on budget?",
            a: "He gave regulators full drawings before building, which avoided costly changes midway, and complete plans stopped contractors from underbidding and making it back through change orders. Small savings were repeated at scale, such as one cheaper hinge across 2,000 doors. It became the first Atlantic City casino finished on time and on budget, about $218 million against $220 million. He credits a small, fast organisation: \"Anyone with a question could bring it directly to me and get an answer immediately.\"",
          },
          {
            q: "How did he land Holiday Inns as a partner?",
            a: "He spent ten minutes trying to sell Holiday's chairman, Mike Rose, on a different property before realising Rose had come to talk about an Atlantic City partnership. He then played hard to get (\"Frankly, I don't need a partner\") and won $50 million, reimbursement of $22 million already spent, financing, a five-year guarantee against losses and half the upside. He also had bulldozers move dirt back and forth so his nearly empty site looked like the busiest construction site anywhere when Holiday's board visited. The book's lesson is to find out what a visitor came for before pitching.",
          },
          {
            q: "How did he run the casino once it opened?",
            a: "He hired the best people from competitors and paid them more with performance bonuses, and he had his manager, Steve Hyde, focus on profit rather than revenue. Under his own management, gross operating profit reached about $58 million, against the $38 million his partner's Harrah's division had projected.",
          },
          {
            q: "How did the Holiday Inns stake end?",
            a: "After buying a large stake in Holiday, he sold when the company restructured to fend off a takeover and the stock jumped to 76, taking millions in eight weeks rather than fighting for control. He also paid more for bond financing, about $7 million a year, to avoid personal liability, because \"it assured I'd sleep better at night.\" And he kept a confidentiality promise even when he could have fought it: \"a deal is a deal.\"",
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
  {
    subject: "Face perception and social cognition",
    title:
      "Hierarchical Encoding Makes Individuals in a Group Seem More Attractive",
    authors: "Drew Walker and Edward Vul",
    year: 2014,
    citation: "Psychological Science, Volume 25, Issue 1",
    link: "https://doi.org/10.1177/0956797613497969",
    slug: "hierarchical-encoding",
    published: true,
    relatedWork: [
      {
        authors: "Carragher and colleagues",
        title:
          "Visuospatial asymmetries do not modulate the cheerleader effect",
        year: 2018,
        citation: "Scientific Reports",
      },
    ],
    qa: [
      {
        q: "What did the study ask?",
        a: "Whether a person looks more attractive when seen as part of a group than when seen alone, an idea popularly called the cheerleader effect.",
      },
      {
        q: "How was it tested?",
        a: "Across five experiments, participants rated the attractiveness of faces shown on their own and the same faces shown within a group of faces of the same gender.",
      },
      {
        q: "What did it find?",
        a: "Faces were rated more attractive in a group than in isolation.",
      },
      {
        q: "Why would that happen?",
        a: "The authors propose three steps. The visual system automatically forms an average impression of a group of faces. Each individual face is then remembered as somewhat closer to that average. Average faces are generally judged attractive, so each member benefits.",
      },
      {
        q: "Has it held up?",
        a: "Largely, yes. An independent team replicated the effect in 2018 and found it in every arrangement they tested, regardless of where the face sat in the group. The effect is modest, roughly a 1.5 to 2 percent increase in ratings, and at least one replication in Japan found a weaker, non-significant result.",
      },
      {
        q: "Why does it matter more generally?",
        a: "It shows that judgements of a single person are shaped by context. How we perceive someone depends partly on who they are seen with, a reminder that first impressions are rarely formed in isolation.",
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
