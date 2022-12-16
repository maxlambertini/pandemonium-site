const _table1=`1|10|Mass Hallucinations
11|15|UFO Sighting
16|20|Crop Circles Found
21|25|Bigfoot Sighting
26|30|Missing Person(s) Reported
31|35|Haunting Reported
36|40|Weird Cult Activities Reported
41|45|Mothman Sighting
46|50|Lake Monster Sighting
51|55|Vampire Sighting
56|60|Spontaneous Human Combustion Reported
61|65|Bizarre Mutations Reported
66|70|Forteana Reported
71|75|Uncanny Psychic Phenomena Recorded
76|80|Werewolf Sighting
81|83|Uncanny Spirit Phenomena Reported
84|86|Unusual Archaeology Discovered
87|88|Mermaid Sighting
89|90|Cryomorph Found
91|93|Bizarre Criminal Acts Reported
94|96|Miracle Reported
97|99|Animal Mutilations Reported
100|100|Elvis Sighting`

function elemToElems(elem) {
    elems= elem.split('|');
    return { min: parseInt(elems[0]), max:parseInt(elems[1]), desc:elems[2] }
}

const _manifestationTable = _table1.split(/\r?\n/);

let ManifestationTable = _manifestationTable.map( e => elemToElems(e) )

const _table2=`1|5|New Mexico
6|10|L.A.
11|15|Las Vegas
16|20|Milwaukee
21|25|Bermuda Triangle
26|30|Loch Ness
31|35|Brazil
36|40|Washington DC
41|45|New Jersey
46|50|Machu Picchu
51|55|Louisianna
56|60|New York City
61|65|Nellis Range, Nevada
66|70|Stonehenge
71|75|Egypt
76|80|Florida
81|83|Devil's Triangle
84|85|A Small Mid Western Town
86|87|A Small New England Town
88|90|Mental Institution (in city of choice)
91|93|The Investigators' Home Town or City
94|95|Supermarket (in city of choice)
96|97|Neighbor's House (in city of choice)
98|100|Nightclub (in city of choice)`

const _manifestationLocation = _table2.split(/\r?\n/);
let ManifestationLocation = _manifestationLocation.map( e => elemToElems(e) )


const _table3 = `1|8|Demonic Possession
9|10|Top Secret Government experiment Gone Awry
17|20|Weird Cultists
21|25|Deranged Serial Killer
26|30|Spirit Possession
31|35|Scam by Alien Con Artist(s) from Arcturus
36|40|Plot by Brazilian Nazis
41|45|Alien Abductors
46|50|Mass Hallucinations.
51|55|Hoax Perpetrated by Local Publicity Seeker.
56|60|Practical Joke Played by EBES (Wiseguy Aliens from Betelgeuse)
61|65|Martian Mind Control Secret Conspiracy
66|70|Friendly Aliens from Venus Trying to Wam Us of Impending Disaster
71|75|Hostile Aliens from Zeta Reticuli
76|80|Contact by Gilaneans
81|85|Mass Hallucinations
86|90|Side Effect Caused by Toxic Waste
91|95|Side Effect Caused by Food Additives
96|100|Inter Dimensional Rifts`

const _majorPhenomena = _table3.split(/\r?\n/);
let MajorPhenomena = _majorPhenomena.map( e => elemToElems(e) )


const _table4=`1|10|Mundane Encounter with someone who knows nothing about what the P.I.s are investigating, and thinks that they're a bunch of kooks.
11|12|Mundane Encounter with someone who knows nothing about what the P.I.s are investigating, and thinks that they're a bunch of kooks. This Mundane decides to report the P.Ls to the authorities. Roll on the Fate table to see if the Police come for questioning (Action Sum of 6+ means they do),
13|14|Mundane Encounter with someone who knows nothing about what the P.I.s are investigating, and thinks that they're a bunch of kooks. This Mundane knows something about the Story and will tell them possibly for a price. 
15|16|Mundane Encounter with someone who knows nothing about what the P.I.s are investigating, and thinks that they're a bunch of kooks. This Mundane is actually a hostile alien entity of some sort posing as a Mundane (Editor's choice as to the true identity and motives of the false Mundane).
17|18|Mundane Encounter with someone who knows nothing about what the P.I.s are investigating, and thinks that they're a bunch of kooks. This Mundane is actually a Replicant or Pinhead being directed by Martian Mind Controllers.
19|20|Enlightened Encounter with someone who knows nothing about the investigation, but might nevertheless be of help in some way unrelated to the story (offering healing, advice, etc.).
21|21|Enlightened Encounter with someone who knows something about the Story, and will consent to talk to the P.I.s if approached. However, the Enlightened one is too preoccupied with other concems to offer more than token assistance.
22|23|Outbreak of Forteana delays the characters
24|25|Deja Vu: an event that occurred in the recent past occurs again.
26|27|Deja Vu Time Loop: as above, but the event keeps happening over and over again until the P.1.s can find a way out of the loop.
28|29|One of the P.I.s is hit in head by a piece of falling space debris and suffers temporary amnesia. This incident may be random in nature or part of the Story.
30|31|Spontaneous Human Combustion: an innocent bystander (or one of the P.I.S) goes up in smoke.
32|33|Synchronicity: something happens just as the P.Ls are talking about it. 
34|35|Out of Body Experience: a P.I.'s astral self suddenly flies forth into the Astral Plane, where he or she is approached by a benevolent ghost offering advice.
36|37|Out of Body Experience: a P.I.'s astral self suddenly flies forth into the Astral Plane, where he or she is approached by a Ghost. The ghost is hostile, and may have been sent to frighten away the P.I.s and keep them from learning more about the Story,
38|39|Encounter with P.I. from rival Tabloid. The P.L. may be an old friend, a former lover, a longtime rival, or an enemy, as the Editor sees fit.
40|42|Mundane Encounter with someone who knows nothing about what the P.I.s are investigating, and thinks that they're a bunch of kooks. This Mundane is a Debunker who is trying to disprove something related to the Story.
43|44|Encounter with a Celebrity: typically of the minor sort, such as the guy who played Spock's father on the Star Trek TV show, though the Editor may choose otherwise. The Celebrity can be doing anything the Editor wants: filming a commercial, looking for work, on vacation, etc.
45|46|The P.Ls find a Strange Shop that offers useful items, artifacts, or services for sale. Prices may be very reasonable or totally outrageous, depending on the nature of the shop's owner. 
47|48|Encounter with a group of Fanatic Cultists who want to convert the P.l.s to their weird beliefs.
49|50|Encounter with a bunch of Money Making Cultists looking for donations.
50|51|Encounter with a group of Oddball Cultists who either worship something or someone related to the Story or are just acting like the kooks that they are.
51|52|Temporal Rift; while driving or walking the characters enter a low lying cloud that turns out to be a hole in Time. When they pass through the cloud they discover that they have gone back in time to the previous day.
53|54|Mundane accident delays the characters. 
55|56|Poltergeist Phenomena occurs in the vicinity of the P.IS.
58|59|Reality Check: the oppressive nature of the Mundane world causes all the P.I.s to make a Reality Check vs their Mind rating. Those who fail temporarily drift out of Enlightened consciousness and revert to their Mundane consciousness, losing all knowledge of Past Lives or Paranormal Talents until a cure can be effected.
60|61|Gremlins damage or steal a piece of equipment from the characters. 
62|63|Friendly Aliens from Venus appear in human form and offer to help the P.I.s in some way.
64|65|Hostile Alien Abductors, disguised as friendly aliens from Venus, offer to help the P.I.s. If their ruse is successful, they will try to kidnap the P.I.S and subject them to weird genetic experiments, after which they will drop the P.I.s in a crop circle somewhere in the middle of a comfield in Kansas. 
66|67|The P.I.S run into a group of alien Reptoids involved in some sort of criminal activity. This incident may or may not be related to the Story.
68|69|Three Men in Black approach the P.I.s and warn them not to get involved in the Story that they're working on.
70|71|Deranged Serial Killer attacks victim in local area. The evidence suggests that this incident may be related to the Story, but this is a false lead.
72|73|Miracle: religious icon appears in some Mundane object or place.
74|75|Mundane accident delays the characters. However, the accident is not of Mundane origin, but was caused by someone or something related to the Story, and is intended to deliberately delay the P.I.S
76|77|As per last entry, but this incident is somehow connected with the Story.
78|79|One of the P.Ls is suddenly possessed by a Channeling Spirit, who offers information related to the Story before leaving the P.I.'s body. If the P.I. is a Channeler, further contact may be possible.
80|81|A group of drug crazed Satanic Cultists, chanting evil rock & roll lyrics, puts a curse on the characters. This incident  may or may not be related to the Story. 
82|83|A Werewolf attacks one of the P.I.S.
84|86|Walk In: a disincarnate entity from the Sixth Dimension, appearing in the body of a Mundane, approaches the characters to give them an important message or warning pertaining to the Story.
87|87|The P.I.S see an advertisement for a Wonder Product that may or may not come in handy while they're trying to get their Story.
88|88|Mysterious Lights in the Sky spell out a message to the characters.
89|89|Encounter with one or more Zombies.
90|90|The P.I.s encounter a freelance Exorcist, who may or may not have something to do with the Story. If needed, the Exorcist can be hired to drive out a hostile spirit or demon from one of the P.I.s or a nearby location.
91|91|A Vampire attacks one of the P.I.s at night.
92|92|Encounter with a Paranormal Obfuscator who is trying using his/her abilities to keep the P.I.S from getting the Story. The Obfuscator's motives are up to the Editor to decide.
93|93|The P.Is meet an Holistic Healer. If needed, he/she can be hired to heal any single ailment for $20 per point of Healing.
94|94|A local bag lady or street person who is actually a Witch (male or female: your choice) asks the characters for spare change. If they refuse he/she puts the Evil Eye on one of them.
95|95|The P.I.s meet a Gypsy who offers to tell their fortune. If needed, he/she can be hired to remove any curse for $100 
96|96|Report that a Mummy has been found in the area. How it got there and whether it's dead or "alive" is up to the Editor.
97|97|Encounter with a Collector of some sort.
98|98|Encounter with an Elvis Impersonator.
99|99|Report that a Bigfoot kidnapped a woman in nearby rural or wilderness area.
100|100|Elvis Sighting in the vicinity (authentic).`

const _minorPhenomena = _table4.split(/\r?\n/);
let MinorPhenomena = _minorPhenomena.map( e => elemToElems(e) )

function getItem(arr) {
    const rndInt = Math.floor(Math.random() * 100) + 1
    var res = "!"
    arr.forEach(el => {
        if (el.min <= rndInt  && rndInt <= el.max) {
            res= el.desc
        }
    });
    console.log(rndInt)
    return res
}






function getPhenomena() {
    rndInt=Math.floor(Math.random() * 3) + 3
    minPhen = []
    for (var h = 0; h < rndInt; h++) {
        phen = getItem(MinorPhenomena)
        while (minPhen.includes(phen)) {
            phen = getItem(MinorPhenomena)
        }
        minPhen.push(phen)
    }
    
    return {
        manifestation : getItem(ManifestationTable),
        location : getItem(ManifestationLocation) ,
        major : getItem(MajorPhenomena) ,
        minor : minPhen
    }
}


console.log(getPhenomena())

