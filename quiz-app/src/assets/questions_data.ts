export type QuestionAndAnswer = {
    question: string;
    answer: string;
}

const questionsAndAnswers: QuestionAndAnswer[] = [
  {
    question: "Hva er en 0-hypotese?",
    answer:
      "En hypotese som vanligvis formuleres for å bli motbevist. I vitenskapelige tester forsøker man ofte å avkrefte 0-hypotesen for å støtte en alternativ hypotese.",
  },
  {
    question: "Hva er en ad hoc-hypotese?",
    answer:
      "En hypotese som introduseres utelukkende for å redde en teori fra falsifisering, uten at det finnes uavhengig støtte for den. Ad hoc-hypoteser kan hindre vitenskapelig fremskritt ved å gjøre teorier ufalsifiserbare.",
  },
  {
    question: "Hva fokuserer aktørorienterte etiske teorier på?",
    answer:
      "Disse teoriene fokuserer på hva slags person man bør være, i motsetning til å gi regler for hva som er moralsk riktig handling. Dydsetikk er et eksempel på en aktørorientert teori.",
  },
  {
    question: "Hva betyr appell til det naturlige?",
    answer:
      "Et argument eller en retorisk teknikk som hevder at noe er bra fordi det er naturlig, eller dårlig fordi det er unaturlig. Denne typen argumentasjon kan være feilaktig, da det ikke alltid er en sammenheng mellom hva som er naturlig og hva som er moralsk riktig.",
  },
  {
    question: "Hva består et argument av?",
    answer:
      "En eller flere påstander som er ment å støtte eller svekke en annen påstand.",
  },
  {
    question: "Hva er argumentasjonsstruktur?",
    answer:
      "Sammenhengen mellom argumentene som utgjør argumentasjonen, og standpunktet de er ment å støtte. En god argumentasjonsstruktur er avgjørende for å presentere et overbevisende argument.",
  },
  {
    question: "Hva er atomisme?",
    answer:
      "Læren om at den fysiske virkeligheten er satt sammen av udelelige minstepartikler. Atomisme har vært en viktig teori i fysikk og filosofi.",
  },
  {
    question: "Hva er base rate?",
    answer:
      "Sannsynligheten for at noe er tilfelle i utgangspunktet, før ny evidens kommer inn. For eksempel sannsynligheten for at en hypotese er korrekt før den utsettes for en test.",
  },
  {
    question: "Hva er begrunnelseskontekst?",
    answer:
      "Den delen av vitenskapelig arbeid som handler om å teste hypoteser mot observasjoner, for å avgjøre hvor stor tillit vi bør ha til hypotesene.",
  },
  {
    question: "Hva er bekreftelsestendens (confirmation bias)?",
    answer:
      "Den ubevisste tendensen vi har til å legge merke til og lete etter informasjon som støtter oppfatninger vi allerede har, og overse eller bagatellisere informasjon som ikke passer. Bekreftelsestendens kan føre til at vi blir mer sikre på våre egne meninger enn det vi har grunnlag for.",
  },
  {
    question: "Hva er bias?",
    answer:
      "En tankemessig snarvei eller 'vekting' som påvirker hvordan vi vurderer påstander og evidens. Bias refererer til generelle ubevisste tendenser i tankemønstrene våre som kan hindre objektiv vurdering.",
  },
  {
    question: "Hva er deduksjon / deduktiv argumentasjon?",
    answer:
      "En argumentasjonstype hvor standpunktet er ment å følge logisk fra argumentene. I et gyldig deduktivt argument, hvis argumentene er sanne, må konklusjonen også være sann.",
  },
  {
    question: "Hva er demarkasjonskriterium?",
    answer:
      "Et kriterium for å skille fenomener i kategorier. I vitenskapelig sammenheng brukes begrepet ofte om en betingelse som må oppfylles for at en påstand eller hypotese skal regnes som vitenskapelig.",
  },
  {
    question: "Hva er demokrati?",
    answer:
      "'Folkestyre'. I direkte demokratier deltar folket direkte i politiske beslutningsprosesser. I representative demokratier styrer folket indirekte gjennom valgte representanter.",
  },
  {
    question: "Hva er deskriptivt utsagn / deskriptive påstander?",
    answer:
      "Beskrivende utsagn som sier noe (sant eller usant) om hvordan virkeligheten faktisk er. I motsetning til normative utsagn, som sier noe om hvordan ting bør være.",
  },
  {
    question: "Hva er digitalisering?",
    answer:
      "Brukes primært om at møteplasser og tjenester i offentlig og privat sektor overføres til nettbaserte apper og plattformer. Digitalisering har stor innflytelse på samfunnet.",
  },
  {
    question: "Hva er dualisme?",
    answer:
      "Betyr at virkeligheten forklares med to fundamentalt forskjellige prinsipper. Substansdualisme er en form for dualisme som sier at det mentale og det fysiske er helt separate ting.",
  },
  {
    question: "Hva er dydsetikk?",
    answer:
      "En av de tre normative etiske teoriene som presenteres i kildene. I stedet for å fokusere på regler for handlinger, fokuserer dydsetikken på å utvikle dyder, positive karaktertrekk, for å bli en moralsk god person.",
  },
  {
    question: "Hva er dyd?",
    answer:
      "Positive karaktertrekk eller egenskaper som disponerer oss til å handle på bestemte måter. Dyder er sentrale i dydsetikken.",
  },
  {
    question: "Hva er enaktivisme?",
    answer:
      "En teori om sinnet som vektlegger betydningen av å handle for å forstå bevissthet. Enaktivismen hevder at bevissthet ikke bare er et produkt av hjernen, men også av vår interaksjon med omverdenen.",
  },
  {
    question: "Hva er enhetsvitenskap?",
    answer:
      "Ideen om at forskjellige vitenskapers forklaringer og teorier kan 'forbindes' med hverandre. For eksempel gjennom at vitenskapelige resultater i prinsippet kan reduseres til beskrivelser i en annen disiplin.",
  },
  {
    question: "Hva er epistokrati?",
    answer: "Styreform der politisk makt er gitt til de med mest kunnskap.",
  },
  {
    question: "Hva er epistemologi?",
    answer:
      "Læren om kunnskap. Epistemologien stiller spørsmål som: Hva er kunnskap? Hvordan kan vi vite noe? Hva gjør noen oppfatninger mer berettigede enn andre?",
  },
  {
    question: "Hva er epistemologiske normer?",
    answer:
      "Normer vi bør følge for å oppnå kunnskap. Eksempler på epistemologiske normer er presisjon, nøyaktighet, og å unngå bias.",
  },
  {
    question: "Hva er er/bør-problemet?",
    answer:
      "En metaetisk diskusjon om problemet med å slutte til hva vi bør gjøre (normativt), ut fra hvordan noe er (deskriptivt). David Hume er kjent for å argumentere for at vi ikke kan utlede normative utsagn fra deskriptive utsagn.",
  },
  {
    question: "Hva er eudaimonia?",
    answer:
      "Fra gammelgresk. Oversettes ofte med 'lykke', men handler bredere om hva det vil si å leve et godt og meningsfullt liv. Eudaimonia er et sentralt begrep i Aristoteles' etikk.",
  },
  {
    question: "Hva er evidens?",
    answer:
      "Enhver informasjonsbit som gjør det noe mer – eller mindre – sannsynlig at en teori eller hypotese er korrekt. Evidens er grunnlaget for vitenskapelig kunnskap.",
  },
  {
    question: "Hva er evolusjonsteori?",
    answer:
      "Teorien om hvordan endring i biologiske arter og dannelse av nye arter foregår. Evolusjonsteorien er en av de viktigste teoriene i biologi.",
  },
  {
    question: "Hva er fagfellevurdering?",
    answer:
      "En viktig del av den vitenskapelige prosessen, der en studie vurderes anonymt av andre eksperter på feltet før publisering. Fagfellevurdering bidrar til å sikre kvaliteten på vitenskapelig forskning.",
  },
  {
    question: "Hva er falsifikasjonisme?",
    answer:
      "Synet, assosiert med Karl Popper, at vitenskapene ikke bør, eller kan, forsøke å bekrefte hypoteser. Ifølge falsifikasjonismen kan hypoteser bare falsifiseres, det vil si motbevises.",
  },
  {
    question: "Hva er falsifiserbarhet?",
    answer:
      "En hypotese eller påstand er falsifiserbar hvis det er mulig å vise at den er usann, dersom den faktisk er usann. Falsifiserbarhet er et viktig kriterium for vitenskapelige hypoteser.",
  },
  {
    question: "Hva er feminisme?",
    answer:
      "Teori om at det skal være politisk, sosial og økonomisk likhet mellom kjønnene fordi alle mennesker er likeverdige.",
  },
  {
    question: "Hva er formålsforklaring?",
    answer:
      "En forklaring av et fenomen eller hendelse som henviser til formålet med hendelsen. Formålsforklaringer er ofte relevante når vi skal forklare menneskelige handlinger.",
  },
  {
    question: "Hva er forskjellsfeminisme?",
    answer:
      "En retning innenfor feminismen som vektlegger at det finnes grunnleggende forskjeller mellom kjønnene, og at likestilling ikke nødvendigvis innebærer at kvinner skal gjøre det samme som menn.",
  },
  {
    question: "Hva er fronesis?",
    answer:
      "Fra gammelgresk. Praktisk visdom og evnen til å utvise skjønn i konkrete situasjoner. Fronesis er en viktig dyd i Aristoteles' etikk.",
  },
  {
    question: "Hva er funksjonalisme?",
    answer:
      "En teori om bevissthet som definerer mentale tilstander ut fra den funksjonen de har i et system. For eksempel hevder funksjonalismen at det som gjør en smerte til en smerte, er dens årsak (f.eks. en skade), dens typiske effekter (f.eks. å si 'au!'), og dens forbindelse til andre mentale tilstander (f.eks. frykt).",
  },
  {
    question: "Hva er fysikalisme?",
    answer:
      "Synet om at alt som eksisterer, er fysisk. Dette innebærer at også bevissthet må være et fysisk fenomen.",
  },
  {
    question: "Hva er handlingsorientert etisk teori?",
    answer:
      "Teorier som fokuserer på å gi generelle prinsipper for hvordan man bør handle i ulike situasjoner. Utilitarisme og pliktetikk er eksempler på handlingsorienterte teorier.",
  },
  {
    question: "Hva er Humes lov (Humes giljotin)?",
    answer:
      "Synet om at man aldri kan utlede normative utsagn (utsagn om hva man bør gjøre) bare fra deskriptive utsagn (utsagn om hvordan noe er).",
  },
  {
    question: "Hva er hypotetisk-deduktiv metode (HD-metoden)?",
    answer:
      "Et generelt skjema for hvordan man går frem for å teste hypoteser mot observasjoner. Metoden innebærer å formulere en hypotese, utlede prediksjoner fra hypotesen, og teste prediksjonene mot observasjoner.",
  },
  {
    question: "Hva er identitetsteori?",
    answer:
      "En teori om bevissthet som hevder at mentale tilstander og prosesser er identiske med nevrale tilstander og prosesser i hjernen.",
  },
  {
    question: "Hva er induksjon / induktiv argumentasjon?",
    answer:
      "En argumentasjonstype hvor argumentene er ment å sannsynliggjøre standpunktet, men ikke garantere dets sannhet. Induktive argumenter går ofte fra observasjoner av enkeltting til generelle konklusjoner.",
  },
  {
    question: "Hva er induksjonsproblemet?",
    answer:
      "Et klassisk filosofisk problem som handler om å finne et rasjonelt fundament for induktiv resonnering, eller et begrunnbart prinsipp for å skille gode fra dårlige induktive argumenter.",
  },
  {
    question: "Hva er inkommensurabilitet?",
    answer:
      "Begrepet brukes om to ting (for eksempel teorier eller paradigmer) som ikke kan sammenlignes på en meningsfull måte, fordi de mangler et felles grunnlag for sammenligning.",
  },
  {
    question: "Hva er interessebasert rettighetsteori?",
    answer:
      "En teori som hevder at rettigheter er instrumenter for å fremme velferd eller menneskelige interesser.",
  },
  {
    question: "Hva er kapabilitet?",
    answer:
      "Vår faktiske mulighet til å utøve en typisk menneskelig funksjon. Begrepet brukes ofte i politisk filosofi for å argumentere for at et rettferdig samfunn bør gi alle individer muligheten til å utvikle sine kapabiliteter.",
  },
  {
    question: "Hva er kategorisk imperativ?",
    answer:
      "I Kants etikk er det kategoriske imperativ et moralsk prinsipp som gjelder ubetinget, uavhengig av våre ønsker eller mål. Kant formulerer det kategoriske imperativ på flere måter, blant annet som universaliseringsformuleringen ('Handle bare etter den maksime som du samtidig kan ville at skal bli en allmenn lov') og humanitetsformuleringen ('Handle slik at du alltid bruker menneskeheten både i din egen person og i enhver annen person samtidig som et formål og aldri bare som et middel').",
  },
  {
    question: "Hva er konstruktivisme?",
    answer:
      "I vitenskapsfilosofisk sammenheng er (sosial-) konstruktivisme synet om at fakta er skapt av oss, som et resultat av sosiale prosesser og rammeverket vi jobber under.",
  },
  {
    question: "Hva er kropp/sinn-problemet?",
    answer:
      "En klassisk filosofisk problemstilling som handler om å forklare forholdet mellom det fysiske og det mentale. Hvis det mentale er noe ikke-fysisk, hvordan kan kropp og sinn da påvirke hverandre?",
  },
  {
    question: "Hva er kroppsliggjøring (embodiment)?",
    answer:
      "En samlebetegnelse for teorier som hevder at kroppen har en sentral rolle i sinnet og bevisstheten. Kroppsliggjøringsteorier utfordrer tradisjonelle syn på sinnet som noe rent mentalt og adskilt fra kroppen.",
  },
  {
    question: "Hva er kulturrelativisme?",
    answer:
      "En variant av etisk relativisme som hevder at moralske normers gyldighet er relative til den kulturen de tilhører.",
  },
  {
    question: "Hva er kunstig intelligens (KI)?",
    answer:
      "Informasjonsteknologi som kan utføre oppgaver som vanligvis krever menneskelig intelligens, for eksempel problemløsning, læring og beslutningstaking. KI er et raskt voksende felt med potensial til å revolusjonere mange aspekter ved samfunnet.",
  },
  {
    question: "Hva er kvantemekanikk?",
    answer:
      "Teori som beskriver den fysiske virkeligheten på atomært og subatomært nivå. Kvantemekanikken er en av de mest suksessfulle teoriene i fysikk, men den har også ført til en rekke filosofiske spørsmål om virkelighetens natur.",
  },
  {
    question: "Hva er likhetsfeminisme?",
    answer:
      "En retning innenfor feminismen som vektlegger at det ikke er grunnleggende forskjeller mellom kjønnene, og at alle derfor skal ha de samme rettighetene og mulighetene.",
  },
  {
    question: "Hva er maktfordelingsprinsippet?",
    answer:
      "Et prinsipp som sier at statsmakt bør fordeles på ulike institusjoner for å hindre maktmisbruk. Prinsippet er viktig i demokratiske samfunn.",
  },
  {
    question: "Hva er maskinlæring?",
    answer:
      "En type kunstig intelligens der datamaskiner lærer fra data uten å bli eksplisitt programmert. Maskinlæring brukes i en rekke applikasjoner, for eksempel bildegjenkjenning, spamfiltrering og selvkjørende biler.",
  },
  {
    question: "Hva er mekanisme?",
    answer:
      "Synet at alt i universet kan forklares ut fra mekaniske prinsipper, det vil si ut fra materielle ting og deres bevegelser.",
  },
  {
    question: "Hva er menneske-verden-relasjonen?",
    answer:
      "Et bredt filosofisk tema som handler om å forstå menneskets plass i verden og forholdet mellom mennesket og dets omgivelser.",
  },
  {
    question: "Hva er metaetikk?",
    answer:
      "Undersøker spørsmål angående moralens grunnlag. Metaetikken forsøker å klargjøre hva moralutsagn er, og hvordan vi kommer frem til og begrunner moralske oppfatninger. Den forsøker å undersøke hva moral er uten å ta stilling til hva som er moralsk. For eksempel, ser metaetikken på om etiske utsagn kan være sanne eller usanne, og om det finnes rasjonelle grunner for å slutte seg til én etisk norm fremfor en annen.",
  },
  {
    question: "Hva er moralsk nihilisme?",
    answer:
      "Et metaetisk syn som hevder at det ikke finnes noe moralsk rett og galt. Moralen er en illusjon. Det finnes ikke noe rett og galt. Vanlige begrunnelser for moralsk nihilisme er at moralutsagn enten verken kan være sanne eller falske, at de alle er falske, eller at de ikke forsøker å være sanne eller falske, men bare uttrykker smak og behag.",
  },
  {
    question: "Hva er en modell?",
    answer:
      "I vitenskapelig sammenheng er en modell en forenklet representasjon av virkeligheten som hjelper oss å forstå og forutsi fenomener. Modeller kan være visuelle, matematiske eller konseptuelle. Litt forenklet kan vi si at en modell er et (idealisert) bilde eller en beskrivelse av virkeligheten som lar oss se strukturer, mekanismer og hvordan bitene henger sammen, og som kan hjelpe oss å forutse hva som kommer til å skje.",
  },
  {
    question: "Hva er moralsk status?",
    answer:
      "Handler om hvem eller hva vi har moralske forpliktelser overfor. Utilitarister mener for eksempel at alle vesener som kan føle smerte og glede, har moralsk status, uavhengig av art, kjønn, rase eller andre egenskaper. Pliktetikere kan argumentere for at moralsk status er knyttet til evnen til å handle rasjonelt.",
  },
  {
    question: "Hva er naturalistisk feilslutning?",
    answer:
      "En feilslutning som oppstår når man forsøker å utlede en normativ konklusjon fra en deskriptiv premiss. For eksempel: å påstå at noe er godt fordi det er naturlig, eller at noe er dårlig fordi det er unaturlig.",
  },
  {
    question: "Hva er negativ frihet?",
    answer:
      "Handler om frihet fra innblanding fra andre. Det vil si at man er fri til å handle uten at andre hindrer en, for eksempel gjennom tvang eller trusler. Mill definerte negativ frihet som ikke-innblanding, altså fravær av hindringer påført oss av andre. Ifølge dette synet på frihet er vi frie i den grad vi kan gjøre som vi vil, og ufrie i den grad andre hindrer oss i å nå våre mål.",
  },
  {
    question: "Hva er normalvitenskap?",
    answer:
      "Kuhns begrep for vitenskapelig arbeid som foregår innenfor et etablert paradigme. I normalvitenskapen prøver forskere å løse gåter og utvide paradigmets rekkevidde, uten å stille spørsmål ved paradigmets grunnleggende forutsetninger.",
  },
  {
    question: "Hva er normativ etikk?",
    answer:
      "Den delen av etikken som handler om hvordan vi bør handle, hvem vi bør være, og hva som er verdifullt og moralsk prisverdig. Normativ etikk forsøker å finne generelle prinsipper for hva som er moralsk riktig og galt. For eksempel kan normativ etikk gi oss prinsipper for å vurdere om det er riktig å lyve, stjele eller drepe.",
  },
  {
    question: "Hva er normative påstander?",
    answer:
      "Utsagn som uttrykker en vurdering eller et bør. De sier noe om hva som bør eller skal være tilfellet, i motsetning til deskriptive utsagn, som beskriver hvordan noe er. For eksempel: 'Du bør ikke lyve' er et normativt utsagn, mens 'Jorden er rund' er et deskriptivt utsagn.",
  },
  {
    question: "Hva er nytteprinsippet?",
    answer:
      "Det grunnleggende prinsippet i utilitarismen, som sier at vi alltid bør velge det handlingsalternativet som gir størst mulig sum av gode konsekvenser for alle berørte parter.",
  },
  {
    question: "Hva er observasjoners teoriavhengighet?",
    answer:
      "Ideen om at hva vi observerer, er påvirket av våre teorier og forventninger. Det vil si at observasjoner ikke er nøytrale eller objektive, men farget av vår forståelse av verden.",
  },
  {
    question: "Hva er Ockhams barberkniv?",
    answer:
      "Et prinsipp som sier at man, når man har flere mulige forklaringer på et fenomen, bør velge den enkleste forklaringen. Med andre ord, man bør ikke introdusere unødvendige antagelser eller komplikasjoner.",
  },
  {
    question: "Hva er oppdagelseskontekst og begrunnelseskontekst?",
    answer:
      "Skillet mellom hvordan en hypotese ble oppdaget, og hvordan den ble begrunnet eller testet. Oppdagelseskonteksten kan være preget av tilfeldigheter, intuisjon eller kreative innfall, mens begrunnelseskonteksten krever systematisk testing og evaluering av hypotesen.",
  },
  {
    question: "Hva er en organisme?",
    answer:
      "En levende enhet som er i stand til å vokse, reprodusere seg og tilpasse seg omgivelsene.",
  },
  {
    question: "Hva er et paradigme?",
    answer:
      "Kuhns begrep for et rammeverk for vitenskapelig arbeid, som består av grunnleggende antagelser, begreper, metoder og eksempler. Paradigmet bestemmer hva som regnes som viktige spørsmål, akseptabel evidens og gyldige forklaringer innenfor en vitenskapelig disiplin. For eksempel kan Newtons mekanikk ses som et paradigme i fysikken, mens Darwins evolusjonsteori kan ses som et paradigme i biologien.",
  },
  {
    question: "Hva er paternalisme?",
    answer:
      "En form for innblanding i andres frihet, der man begrunner innblandingen med at det er til personens eget beste. For eksempel: å forby rusmidler fordi man mener det er skadelig for folks helse.",
  },
  {
    question: "Hva er personargument?",
    answer:
      "En type argumentasjonsfeil der man angriper en persons karakter eller motiver i stedet for å adressere argumentene deres. For eksempel: å avfeie en persons argument for vegetarianisme med at personen er en 'hysterisk dyreaktivist'.",
  },
  {
    question: "Hva er pliktetikk?",
    answer:
      "En gruppe etiske teorier som hevder at det finnes moralske plikter som er uavhengige av konsekvensene. Pliktetikere mener at det rette har forrang over det gode, og at vi kan ha plikt til å handle på måter som ikke gir best mulig konsekvenser. For eksempel kan en pliktetiker argumentere for at det er galt å lyve, selv om det i et gitt tilfelle kan føre til bedre konsekvenser.",
  },
  {
    question: "Hva er politisk atomisme?",
    answer:
      "En politisk teori som legger vekt på individets rettigheter og frihet, og som ser staten som et nødvendig onde for å beskytte disse rettighetene. Politisk atomisme er skeptisk til statlig innblanding og paternalisme.",
  },
  {
    question: "Hva er positiv frihet?",
    answer:
      "Handler om å ha muligheten til å realisere seg selv og leve et meningsfullt liv. Det vil si at man har tilgang til ressurser, utdanning og andre muligheter som gjør det mulig å utvikle sine evner og leve et godt liv.",
  },
  {
    question: "Hva er prediksjon?",
    answer:
      "En påstand om hva som vil skje i fremtiden, basert på observasjoner og teorier.",
  },
  {
    question: "Hva er preferanseutilitarisme?",
    answer:
      "En variant av utilitarisme som definerer gode konsekvenser som oppfyllelse av preferanser. Det vil si at en handling er riktig hvis den fører til at flest mulig får oppfylt sine ønsker.",
  },
  {
    question: "Hva er pseudovitenskap?",
    answer:
      "Teorier eller påstander som presenteres som vitenskapelige, men som ikke oppfyller kravene til vitenskapelig metode. Pseudovitenskapelige påstander er ofte basert på anekdoter, spekulasjoner eller ubekreftede hypoteser. For eksempel: astrologi, homeopati og healing.",
  },
  {
    question: "Hva er Quine–Duhem-tesen?",
    answer:
      "Et argument som sier at det er umulig å teste en enkelt hypotese i isolasjon, fordi hypoteser alltid testes i sammenheng med andre hypoteser og bakgrunnsteorier.",
  },
  {
    question: "Hva er realisme (vitenskapelig)?",
    answer:
      "Synet at den vitenskapelige beskrivelsen av verden gir oss en sann beskrivelse av en virkelighet som eksisterer uavhengig av oss. Realister mener at vitenskapelige teorier kan være sanne eller falske, avhengig av om de samsvarer med virkeligheten.",
  },
  {
    question: "Hva er reduksjonisme?",
    answer:
      "En filosofisk posisjon som hevder at komplekse fenomener kan forklares ut fra enklere, mer grunnleggende fenomener. For eksempel: å redusere bevissthet til nevrologiske prosesser i hjernen.",
  },
  {
    question: "Hva er relasjonelt teknologisyn?",
    answer:
      "Et syn på teknologi som vektlegger samspillet mellom teknologi og samfunn. Det relasjonelle teknologisynet ser teknologi som en del av et komplekst nettverk av sosiale, kulturelle og politiske faktorer, og avviser både teknologisk determinisme og teknologisk instrumentalisme.",
  },
  {
    question: "Hva er relativisme (vitenskapelig)?",
    answer:
      "Synet at det ikke finnes noen objektiv sannhet innenfor vitenskapen, og at vitenskapelige teorier bare er gyldige i forhold til et bestemt paradigme eller en bestemt kultur.",
  },
  {
    question: "Hva er relativitetsteorien?",
    answer:
      "Einsteins teori om forholdet mellom rom, tid og gravitasjon. Relativitetsteorien har revolusjonert vår forståelse av universet.",
  },
  {
    question: "Hva er relevans?",
    answer:
      "Et argument er relevant hvis det støtter eller svekker den påstanden det er ment å støtte eller svekke.",
  },
  {
    question: "Hva er replikerbarhet?",
    answer:
      "En vitenskapelig studie er replikerbar hvis andre forskere kan gjennomføre den samme studien og få de samme resultatene. Replikerbarhet er et viktig kriterium for vitenskapelig kvalitet.",
  },
  {
    question: "Hva er samfunnsansvar?",
    answer:
      "Ideen om at bedrifter og organisasjoner har et ansvar for å handle etisk og bidra til samfunnets beste.",
  },
  {
    question: "Hva er scientisme?",
    answer:
      "En overdreven tro på vitenskapens evne til å gi svar på alle spørsmål, og en tendens til å avvise andre former for kunnskap.",
  },
  {
    question: "Hva er skadeprinsippet?",
    answer:
      "Et prinsipp som sier at staten bare kan begrense individers frihet for å hindre skade på andre. Skadeprinsippet er et viktig prinsipp i liberalistisk politisk filosofi.",
  },
  {
    question: "Hva er skråplansargument?",
    answer:
      "En type argument som hevder at en handling vil føre til en rekke negative konsekvenser, selv om den første handlingen i seg selv ikke er problematisk.",
  },
  {
    question: "Hva er sosioteknisk nettverk?",
    answer:
      "Et nettverk som består av både tekniske og sosiale elementer, som for eksempel maskiner, mennesker, organisasjoner og lover. Sosiotekniske nettverk er komplekse og dynamiske systemer.",
  },
  {
    question: "Hva er standpunktepistemologi?",
    answer:
      "En filosofisk posisjon som hevder at vår kunnskap er påvirket av vår sosiale posisjon, og at marginaliserte grupper kan ha en unik innsikt i sosiale problemer.",
  },
  {
    question: "Hva er statusbasert rettighetsteori?",
    answer:
      "En teori som begrunner rettigheter i iboende egenskaper ved personen, for eksempel evnen til å føle smerte eller tenke rasjonelt. Statusbaserte rettighetsteorier er ofte knyttet til pliktetikk.",
  },
  {
    question: "Hva er stråmannsargument?",
    answer:
      "En type argumentasjonsfeil der man presenterer en forvrengt eller overdrevet versjon av motstanderens argument, og deretter angriper denne versjonen.",
  },
  {
    question: "Hva er teleologi?",
    answer:
      "Læren om formål eller målrettethet. Teleologiske forklaringer er vanlige i biologien, der man ofte forklarer organismers egenskaper ut fra deres funksjon.",
  },
  {
    question: "Hva er teknologiens tosidighet?",
    answer:
      "Ideen om at teknologi kan ha både positive og negative konsekvenser. For eksempel: Internett kan brukes til både kommunikasjon og overvåking.",
  },
  {
    question: "Hva er teknologisk determinisme?",
    answer:
      "Synet at teknologi er den viktigste drivkraften i samfunnsutviklingen, og at teknologi former samfunnet uavhengig av menneskelige valg. For eksempel: å hevde at internett har ført til demokratisering.",
  },
  {
    question: "Hva er teknologisk instrumentalisme?",
    answer:
      "Synet at teknologi er et nøytralt verktøy som kan brukes til både gode og onde formål.",
  },
  {
    question: "Hva er teknologisk logikk?",
    answer:
      "En tenkemåte som preges av effektivitet, rasjonalitet og standardisering. Teknologisk logikk kan føre til at man overser etiske og sosiale hensyn.",
  },
  {
    question: "Hva er en teori?",
    answer:
      "En forklaring på et fenomen som er basert på observasjoner og logiske resonnementer. Vitenskapelige teorier er falsifiserbare, det vil si at de kan motbevises gjennom observasjoner.",
  },
  {
    question: "Hva er Turingtesten?",
    answer:
      "En test for å avgjøre om en maskin kan tenke, der en person kommuniserer med både en maskin og et menneske uten å vite hvem som er hvem. Hvis personen ikke kan skille maskinen fra mennesket, har maskinen bestått Turingtesten.",
  },
];

export default questionsAndAnswers;
