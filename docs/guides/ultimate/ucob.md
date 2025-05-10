---
order: 1
title: UCOB
longTitle: The Unending Coil of Bahamut
difficulty: Ultimate
expansion: Stormblood
image: ucob-goldenbaha.webp
discussionLink: https://discord.com/channels/944115415385247784/954964367462514710
glossary: UCOB
---
## Credits
- Written Guide by Em Gram (Phases 1, 2 and 3) and Noz (Phases 4 and 5)
- PoVs by Kur Rumi

## Toolbox/Raidplan
Toolboxes are an interactive guide that allows you to click through each phase indiviudally and review the mechanics in a easy to understand manner.

<ActionGroup
    :actions=" [
        { title: 'Quick March Trio (QMT)', color: 'red', href: 'https://ff14.toolboxgaming.space/?id=877146678916361&preview=1' },
        { title: 'Blackfire Trio (BFT)', color: 'red', href: 'https://ff14.toolboxgaming.space/?id=838145884536361&preview=1' },
        { title: 'Fellruin Trio (FRT)', color: 'red', href: 'https://ff14.toolboxgaming.space/?id=810783368854861&preview=1' },
        { title: 'Heavensfall Trio (HFT)', color: 'red', href: 'https://ff14.toolboxgaming.space/?id=740246169786361&preview=1' },
        { title: 'Tenstrike Trio (TST)', color: 'red', href: 'https://ff14.toolboxgaming.space/?id=141245760517361&preview=1' },
        { title: 'Grand Octet (GO)', color: 'red', href: 'https://ff14.toolboxgaming.space/?id=803246524767361&preview=1' },
    ]"
/>

## PoV Videos

@[DPS](https://www.youtube.com/watch?v=nYFW4YKTk-8)

@[Healer](https://www.youtube.com/watch?v=wfVuqFvT0AE)

@[Tank](https://www.youtube.com/watch?v=4R_b3AauWGk)

## Macros
::: details View All Macros
**Macro 1**
Neurolinks and Nael Spreads
```markdown
==========================================
[Neurolink placement]
■ - 1>2>3
[Nael spread]
         MT    OT
               ♦
        D1      D2
D3  H1      H2  D4
```

**Macro 2**
QMT and BFT
```markdown
[Quickmarch]
MT     Trio   OT
H1                H2
D1                D2
D3                D4
             DPS Shaker
H1/MT   Baha   H2/OT
                STACK
(relative to trio spawn)
[Blackfire]
MT     Nael    D1
OT                    D2
H1                   D3
H2    STACK   D4
```

**Macro 3**
FRT and HFT
```markdown
[Fellruin]
■ - Bahamut - MT
■ - Twin - OT
■ - Nael - Party
     MT    OT
D1    H1   D2
D3    H2   D4
(H1 stays on neurolink)
[Heavensfall]
        MTOT
H1                 H2
D1                 D2
        D3D4
*OT Covers Nael Tower
OT +1 | H2 +2 | D2 +3 | D4 +4 | MT -1 | H1 -2 | D1 -3 | D3 -4
```

**Macro 4**

TST and GO
```markdown
[Tenstrike]
■ - Left > Right Generate Priority
             TRUE NORTH
D3 D1 H1 MT OT H2 D2 D4
■ - If the line-up is wrong, spread to your Quickmarch sides and adjust accordingly
             Earthshakers
                   NW  NE
              W                  E
■ - South is the safe spot for both sets of Earthshakers
[Grand Octet]
■ - Twin bait - Left of twin (from middle facing twin)
■ - Megaflare stack - Right of twin (from middle facing twin)
■ - Tank LB3 can be used here for safety
```

**Macro 5 (D4 Float)**
Adds
```markdown
[Adds Phase]
■ - MT = Start Twin
■ - OT = Start Nael
Neurolink Priority:
■ - D1 - Waymark 1 Neurolink
■ - D2 - Waymark 2 Neurolink
■ - D3 - Waymark 3 Neurolink
■ - D4 - Float
```

**Macro 6**
Golden Bahamut Mits
```markdown
[Morn Afah Mitigation]
■ - Use the transition to clarify and adjust any mitigations
■ - 1 - MT 90, OT Reprisal, Addle, rDPS Mit
■ - 2 - OT 90, MT Reprisal, any spare Mit, Tank LB
■ - 3 - MT 90, OT Reprisal, Addle
■ - 4 - OT 90, MT Reprisal, rDPS Mit, Tank LB
■ - 5 - MT 90, OT Reprisal, Addle
[Akh Morn Mitigation]
■ - 1 - Share
■ - 2 - WAR > GNB > PLD > DRK Invuln priority
■ - 3 - The other tank
■ - 4 - Share (with tank LB if mitigation is lacking)
==========================================
```
:::

## Buff Timings
:::: timing-window
::: burst
- Twintania opener
- Nael opener
- Bahamut opener
- Post Felruin Trio
- Start of Adds Phase
- Golden Bahamut Opener
- Mid Golden Bahamut
:::

::: pot
- Twintania opener (for extra pot usage) **OR** Nael reopener (to try and skip Divebombs) 
- Bahamut reopener (if used pot in Twintania)
- Adds opener
- 2nd 2-minute buffs during Golden Bahamut

**Given that the DPS check in Twintania and Bahamut are not tight, it is recommended to pot Nael and endeavour to avoid Divebombs. However, pick the option that suits you and your party's needs.**
:::
::::

## Waymarks
These can be imported using an XIV Launcher Plugin.

```json
{"Name":"UCoB","MapID":280,"A":{"X":-11.472,"Y":0.0,"Z":-16.383,"ID":0,"Active":true},"B":{"X":11.47153,"Y":0.0,"Z":-16.383,"ID":1,"Active":true},"C":{"X":19.31852,"Y":0.0,"Z":5.176381,"ID":2,"Active":true},"D":{"X":-19.319,"Y":0.0,"Z":5.176,"ID":3,"Active":true},"One":{"X":-7.57,"Y":0.0,"Z":-4.38,"ID":4,"Active":true},"Two":{"X":7.57,"Y":0.0,"Z":-4.38,"ID":5,"Active":true},"Three":{"X":0.0,"Y":0.0,"Z":8.75,"ID":6,"Active":true},"Four":{"X":0.0,"Y":0.0,"Z":0.0,"ID":7,"Active":true}}
```

## Fight Writeup

### Phase 1: Twintania

This guide is based off the original and very detailed guide by Clees, which can be found below:

<Action title='Clees Guide' color='purple' href='https://clees.me/guides/ucob/' />

#### Key Mechanics
::: everyone
Look out for Twister cast, you will need to be moving when it finishes otherwise you will die and kill anyone near you. Start moving at 90% of the castbar and spread out to make sure you have somewhere safe to run.

Fireball will target a player with a party stack. Generate more LB by having one player stay out of the first Fireball stack at the start of this phase.
:::

::: tank
Death Sentence is a forced tank swap. Communicate an order with your cotank - ideally, OT should have aggro at the end of this phase, in preparation for the beginning of **Phase 2: Nael**.

Your role is to position the boss in a way to drop a Neurolink on Waymarks 1 -> 2 -> 3 markers in order. This will happen when the boss hits 74%, 44% and 0%. You should be on the outside of the boss towards the wall unless moving in to stack with party for other mechanics.

![](/images/ucob-markers.webp)
:::

::: damage
You will have two roles in this phase. Firstly **Ranged** will need to bait Liquid Hell by being the furthest player from the boss through the phase. Assign a **Primary Baiter** (generally D3) and **Backup Baiter** (generally D4).

All DPS can be targetted by Hatch orbs, indicated by the **Generate** castbar, run to a Neurolink and make sure you are in the Neurolink when the Hatch orb reaches you. 

If you are **Primary Baiter** and you get Hatch, the **Backup Baiter** must resolve Liquid Hell in that instance.
:::

::: healer
Just stay outta the way lol.
:::

#### Phase Timeline
:::: details Expanded Phase Timeline
**100% -> 74% Mini-Phase**

1. Pull Twintania to Waymark 1.
1. Plummet on Tanks.
1. Twister Dodge.
1. Fireball Stack.
1. Death Sentence Tank Swap.
1. Push to 74% and drop Neurolink.

**74% -> 44% Mini-Phase**

1. Move boss to Waymark 2.
1. Liquid Hell on furthest player.
1. Hatch to Neurolink.
1. Death Sentence Tank Swap.
1. Hatch to Neurolink.
1. Twister Dodge.
1. Push to 44% and drop Neurolink.

**44% -> 0% Mini-Phase**

1. Move boss to Waymark 3.
1. Liquid Hell on furthest player.
1. Hatch **x2** to Neurolink.
1. Liquid Hell on **RANDOM** party member.
1. Fireball Stack.
1. Death Sentence Tank Swap.
1. Hatch **x2** to Neurolink.
1. Twister Dodge.
1. Liquid Hell on furthest player.
1. Hatch **x2** to Neurolink.
1. Liquid Hell on **RANDOM** party member.
1. Fireball Stack.
1. Push to 0%.

Finally, Stand in a Neurolink for phase transition.

::: info NOTE
If you don't phase any of these checkpoints in time, Twintania will continue to repeat the mechanics of the current Mini-Phase until you hit the next phase or enrage.
:::
::::

### Phase 2: Nael
::: details View Nael Timeline

1. TB + 2 min opener
2. Thunder debuffs out - form a Mickey Mouse
3. 1st Quotes, prepare to resolve (IN + OUT/STACK)
4. First doom + Fire Tether (IN)
5. Second doom + TB
6. Fire Tether (OUT)
7. Thunders out, away from party + 2nd Quotes (STACK + IN/OUT)
8. First doom
9. Second doom + Thunders out, away from party
10. Third doom + Fire Tether (IN)
11. TB + spread out loosely 
12. 3rd Quote + Nael dive (SPREAD + IN/OUT)
13. Thunder debuffs out + Fire Tether (IN) (Thunder leave as soon as fire tether animation is gone, 3sec on Debuff)
14. First doom 
15. Second doom
16. Third doom
17. Ravensbeak (SWAP)
18. Dive bait 1 out
19. 4th Quotes out (TB + STACK or SPREAD + TB) + Dive bait 2 out
20. Dive bait 3 out + Nael drops on OT
21. OT TB
22. Other things we hope to skip that has all the quotes 

If you have not phased yet, just get ready for miscellaneous quotes until Enrage or you hit 0%.
:::

The fight starts and a pillar will drop in the room, spread out for Meteor Stream and dodge the cleaves.

Boss will enter on the tank who had aggro on Twintania as she was defeated (generally the OT) with Dalamud Dive and the party will stack up behind the boss ready for the first quotes. Nael will use Bahamuts Claw - the OT should use their invulnerability on both the entrance tankbuster and Bahamuts Claw before tank swapping with the MT. 

Nael will then summon 5 dragons around the room with **bahamuts Favor**.

The 5 dragons will use various abilities through the phase that players need to deal with:

::: everyone
Thunderstruck Two players are targeted with the Thunderstruck debuff. At the end of the timer, it emits an AoE around the player that inflicts damage and paralysis to surrounding players. Thus, Thunderstruck players need to stay away from the party to avoid killing anyone or giving them paralysis.

Wings of Salvation Large white puddles appear on the ground exploding shortly after, dealing lethal damage if you are in the puddle when it explodes. It leaves behind a small white puddle after the explosion which can remove doom.

Doom Inflicted to multiple players, will kill the player when the timer reaches zero. You can remove this by stepping in the light puddle left behind by Wings of Salvation.

**Icebitten**: Ice Dragon will hit players with Iceball applying the Icebitten debuff or removing Firescorched. If you are hit with Iceball again while you have Icebitten you will die.

**Firescorched**: Fire Dragon will target players with a tether. This eventually explodes in a small AOE applying **Firescorched** or removing **Icebitten**. Being hit by the AOE from the tether while you already have **Firescorched** is fatal.
:::

::: tank
Dalamud Dive Nael jumps onto her target, dealing significant splash damage. Make sure to spread away from the tank to prevent any extra damage.

Bahamuts Claw Physical tankbuster consisting of 5 successive hits to her target.

As mentioned, Nael enters with Dalamud Dive on the **tank with last aggro on Twintania** (generally OT), followed by Bahamuts Claw. Use an invulnerability here and keep this away from party.
:::

#### First Quotes
Two players will now get Thunderstruck followed by the first set of quotes.

::: details Nael Quotes Explained
Through the phase Nael will say various quotes, these are indicators for upcoming mechanics, if you cannot translate the quotes then you will die to the mechanics. Each quote translates to a pair of mechanics in this phase. 

Here are all the possible quotes from this phase:

- O hallowed moon, take fire and scorch my foes! = Lunar Dynamo → Thermionic Beam
- O hallowed moon, shine you the iron path! = Lunar Dynamo → Iron Chariot
- Blazing path, lead me to iron rule! = Thermionic Beam → Iron Chariot
- Take fire, O hallowed moon! = Thermionic Beam → Lunar Dynamo
- From on high I descend, the iron path to call! or From on high I descend, the iron path to walk! = Raven's Dive → Iron Chariot
- From on high I descend, the hallowed moon to call! = Raven's Dive → Lunar Dynamo
- Fleeting light! 'Neath the red moon, scorch you the earth! = Dalamud Dive → Thermionic Beam
- Fleeting light! Amid a rain of stars, exalt you the red moon! = Meteor Stream → Dalamud Dive

Quotes come in pairs, either one of the two can happen and you need to be able to read the quote to identify them. It is easier to remember them when you break them down to pairs of two possible mechanics.

Quote 1:
- IN → STACK
- IN → SPREAD

Quote 2:
- STACK → IN
- STACK → OUT

Quote 3: 
- SPREAD → IN
- SPREAD → OUT

QUOTE 4:
- TANKBUSTER DIVE → STACK
- SPREAD → TANKBUSTER DIVE

*Don't tell Yoshi-P but there are some good tools to help quickly translate quotes to more understandable mechanics...*
:::

**Quotes 1**
- O hallowed moon, take fire and scorch my foes! = Lunar Dynamo → Thermionic Beam
- O hallowed moon, shine you the iron path! = Lunar Dynamo → Iron Chariot

The two players with Thunderstruck must seperate from the party and take up a position near the boss on north side. Thunderstruck will resolve before the second mechanic in the quote. Two players who had Thunderstruck then rejoin or run out depending on quotes.

![](/images/ucob-thunder.webp)

Doom will apply to two players (6s and 10s). Wings of Salvation will target a party member and the party should rotate **clockwise** around the boss. Shortest Doom timer takes the small puddle after Wings of Salvation explodes. Another Wings of Salvation and Doom cleanse following that. Bahamuts Claw will happen during Doom cleanses.

You should be taking the cleanse puddle when your Doom is less than **5 seconds**.

During the first quotes, a player will also get targetted with a **Fire Tether**, this should be stacked with the party to remove and **Icebitten** debuffs. 

:::: details Fire Tethers Explained
**Icebitten and Firescorched Debuffs**

Through the phase, dragons will attack players with iceballs and AOE other players with a fire tether, each applies a debuff or removes the opposite debuff. If you have either debuff and you are hit by the same effect again (ie: hit by fireball and you already have firescorched ![](/images/icons/firescorched.webp)) you will die.

To safely manage this, you will stack together for Fire tethers, to remove the ice debuffs from the party. There will be **FOUR** fire tethers during the phase and they should be stacked or taken out of the group using the following order;

**IN > OUT > IN > IN**

This means the first tether is stacked, the second tether is taken out of the party, and the third and fourth fire tether are also stacked with the party. It is each members responsibility to monitor their debuffs and ensure they are in the fire stacks in time.

::: danger IMPORTANT
Whoever gets the second fire tether and takes it out of the party must AVOID the third fire tether as they will already have the fire debuff and this will kill them if they join the stack.
:::
::::

::: info NOTE
Party should aim to move together as one, **clockwise** around the boss as each Wings of Salvation to avoid accidentally stealing the cleanse puddles needed to remove Doom.
:::

Second Fire Tether appears and this should be taken **OUT**** of the party stack.

![](/images/ucob-fire2.webp)

Thunderstruck will apply to two players after fireball resolves, these need to leave the party stack.

#### Second Quotes
Party should be stacked in preparation for second quotes.

**Quotes 2**
- Blazing path, lead me to iron rule! = Thermionic Beam → Iron Chariot
- Take fire, O hallowed moon! = Thermionic Beam → Lunar Dynamo

This will always be a stack first, so prep with some light mits. Following quotes will be another set of Doom and Wings of Salvation - this time on **three** players.

After the third Wings of Salvation another two players will get Thunderstruck and should leave the party stack. 

The third **Fire Tether** will appear and this should be stacked with the party. Players who had Thunderstruck will need to make sure they get back to the stack for this. 

::: info NOTE
The player who had to take Second Fire Tether MUST NOT be in the Third Fire Tether stack, otherwise you will die due to still having **Firescorched** from the Second Tether.
:::

Nael will follow this up with another Bahamuts Claw for Tanks.

#### Third Quotes
Prepare for Third Quotes by pre-spreading as this will always start with a Raven's Dive spread.

This is the default spread with H1 on waymark 4.
```markdown
   MT    OT
D1    H1   D2
D3    H2   D4
```

**Quotes 3**
- From on high I descend, the iron path to call! or From on high I descend, the iron path to walk! = Raven's Dive → Iron Chariot
- From on high I descend, the hallowed moon to call! = Raven's Dive → Lunar Dynamo

During the quotes, another Fire Tether will target a player and two more players will get Thunderstruck. This Thunderstruck will resolve **AFTER** the Fire Tether. The party will stack for the Fire Ball and players with Thunderstruck should run out when they have 3 seconds left on their Thunderstruck debuff to ensure they get hit by the Fire Ball.

Following the fireball will be another set of Doom and Wings of Salvation on **three** players.

#### Divebombs and Fourth Quotes
Nael will call out the fourth quote:

**Fourth Quote**
- Fleeting light! 'Neath the red moon, scorch you the earth! = Dalamud Dive → Thermionic Beam
- Fleeting light! Amid a rain of stars, exalt you the red moon! = Meteor Stream → Dalamud Dive

This quote will not resolve until after the Second Dive finishes.

The dragons on the outside of the room will start targetting players for Dives. Three players will be fixated with a green marker on their head, these go out one at a time.

![](/images/ucob-divemarker.webp)

The Dragons will dive in sets of **2-1-2** starting at True North. The 1st and 2nd Dragon will fixate on the 1st marked player. The 3rd Dragon will fixate on the 2nd marked player, and the last two dragons will fixate on the 3rd marked player.

Your goal is to position the three marked players in such a way that they bait the Dragon Dives away from the middle of the room.

There are 8 possible locations for the Dragons to spawn. Only 5 dragons will spawn.

![](/images/ucob-dives-spawns.webp)

You need to bait the dives in such a way to avoid the middle of the room, such as the following example where RED is the first dive, YELLOW is the second dive and BLUE is the third dive.

If you have an experience party member, they will often call the bait positions using **Clock Positions** (indicated in the following image) to loosely indicate where each bait should go, the solution for this example would be: **"2 6 10"**

![239685120-2641ce2c-55fb-48a4-b67d-81693202d511.webp](/images/ucob-dive-clocks.webp)

::: details More Examples...

Solution: **3 7 10**

![239672846-00b5589c-8430-4b5b-af15-2f22f0180db6.webp](/images/ucob-dive-example1.webp)

Solution: **5 9 12**

![239674081-bd087b32-a861-406b-b791-2b21cc9ff614.webp](/images/ucob-dive-example2.webp)

Solution: **11 5 7**

![239674130-6d04b1c7-5842-4d4f-be86-3ad29e863d6a.webp](/images/ucob-dive-example3.webp)
:::

Try out the Divebomb simulator here to practice solving these yourself: 

<Action title='Divebomb Simulator' color='purple' href='https://freehaha.github.io/nael-dive/' />

Nael will also be targetting the furthest players with Hypernova, players baiting dives will need to watch out for these as they move out.

::: info NOTE
The Dragons will lock on to the players position when the green marker above them **disappears**. This might mean dodging some Hypernova before moving into the correct position.
:::

As the Dives are going off, the Party will need to prepare for Quotes, these will be either a Spread followed by a Tankbuster or a Tankbuster followed by a Stack. 

Nael should now be dead, if not prepared for the other quotes to be recycled and used again until Nael dies.

### Phase 3: Bahamut Prime

:::: details Mechanics Summary
::: tank
**Flare Breath**: Conal cleave dealing very significant magic damage. Treat it like a mini-tankbuster.

**Flatten**: Physical tankbuster dealing massive physical damage,\ that must be mitigated.

**Tempest Wing**: A tether will extend from Bahamut to a random target. This tether can be intercepted by standing between Bahamut and it's target. Deals magical spash damage that knocks back and stuns any party member except it's target.
:::
::: everyone
**Earth Shaker**: Bahamut will place a marker over a party member, targetting them with a huge conal AoE between Bahamut and his target (The range is approximately a full 90 degree slice of the arena). Deals significant physical damage, and leaves a fire puddle (not unlike Liquid Hell puddles). Standing in the puddle will inflict Sludge, a heavy and severe dot that will likely kill you.

**Megaflare**: 2+ players will get marked by a circle surrounding them, indicating them to stack. Splash damage will target random players, so everyone must spread out. Players without splash damage must not get hit by another player's splash damage, as they likely will likely either die, or not have enough HP to survive a later mechanic. AoE circles will also appear on the ground to dodge.

**Gigaflare**: Raidwide AoE dealing massive magic damage.
:::
::::

#### Transition
After Nael dies, party to stack on south Neurolink ready for the **Seventh Umbral Era**, a heavy raidwide and knockback. This will be followed by three **Calamitous Flame** raidwides and **Calamitous Blaze** another heavy raidwide. **Calamitous Blaze** is fatal without Tank LB2, but LB3 is preferred. 

::: tank
Use the Tank LB immediately after you get knocked back.
:::

::: healer
Use heavy heals during the **Calamitous Flames**, you want to make sure the party is topped up for the last hit from **Calamitous Blaze**, especially if it's LB2.
:::

Bahamut will follow this up with Tank mechanics, First a Flare Breath followed by Flatten.

#### Quickmarch Trio (QMT)
<Action title='QMT Toolbox' color='red' href='https://ff14.toolboxgaming.space/?id=877146678916361&preview=1' />

Party Stacks middle and looks for the Three dragons to spawn on a wall and prepare to dive across the room, this becomes **Relative North**. 

Light parties split, **LP1 relative West**, **LP2 relative East** and spread out on the wall, from top to bottom **(Tanks > Healers > Melee > Range)**.

![239686972-a15141be-7fd0-428c-967c-ba2cc0ae16a2.webp](/images/ucob-qmt-spread.webp)

Players will drop a Twister when the dragons dive, start moving inwards when you see the dragons begin their dive across the arena.

Stay spread out as players are about to drop **Megaflare Puddles** followed by some players being hit with **Megaflare AoEs**. Players now all need to check debuffs and move into the following positions.

![239686989-ef856845-11c2-4363-b0ef-165c977f6a3b.webp](/images/ucob-qmt-flares.webp)

One DPS and both healers get Earth Shaker. H1 moves to relative West. H2 moves to relative East. DPS with Earth Shaker moves to relative North.

All other DPS stack relative south.

Tanks will intercept the Tempest Wing Tethers and take these East and West in line with the Healers.

![239687017-c5b80af1-68ac-483c-8a86-685af73a501c.webp](/images/ucob-qmt-baits.webp)

::: healer
You may need to run into the middle after **Megaflares** to top up the party as there is heavy damage here, just make sure you get to your relative position quickly after. Suggest using sprint here. Also make sure you are not too close to tanks for Tempest Wing.
:::

Earth Shaker DPS wait until Tempest Wing resolves before moving back to party stack.

Once more, Bahamut will use Flare Breath followed by Flatten.

#### Blackfire Trio (BFT)
<Action title='BFT Toolbox' color='red' href='https://ff14.toolboxgaming.space/?id=838145884536361&preview=1' />

Players stack center and look for Nael on the wall, this becomes relative north.

Liquid Hell will start hitting party, move together towards Nael and stay stacked for Thermionic Beam.

::: healer
This is heavy damage and needs to be topped up fast. Suggest saving swift-cast and other OGCD heals for this as you will not have time to stop and heal here.
:::

Party will split into roles at the wall, **Tanks and Healers split left** and **DPS right**.

![239687923-1277de86-0f8a-4472-8a7a-7de7058646ac.webp](/images/ucob-bft-dive.webp)

All players run south, Two DPS and Two Tank/Healers get stack markers, run these to south of the Liquid Hell puddles.

Non-stack markers should move **NEAR** one of the four towers that have spawned. 

Priority for Towers (relative north to south)
```markdown
MT     Nael   D1
OT            D2
H1            D3
H2    STACK   D4
```

Before towers resolve, Nael will send out two Hypernova, wait for these to go out **before** moving into the towers.

![239688306-ad209dff-0561-4d3c-a6bf-2b50f2235f4f.webp](/images/ucob-bft-baits.webp)

After towers resolve, party stack and heal for a Gigaflare, followed by Flare Breath followed by Flatten on Tanks.

#### Fellruin Trio (FRT)
<Action title='FRT Toolbox' color='red' href='https://ff14.toolboxgaming.space/?id=810783368854861&preview=1' />

Nael, Bahamut and Twin will spawn on a Neurolink each. Party should move to Nael, this becomes **South** with the center of the room being **North**.

Nael will do another set of Quotes:
- "From hallowed moon I descend, a rain of stars to bring!" = Lunar Dynamo → Raven's Dive → Meteor Stream
- "From on high I descend, the moon and stars to bring!" = Raven's Dive → Lunar Dynamo → Meteor Stream

This resolves into either **SPREAD > IN** or **IN > SPREAD**. Spread is centered on Nael using the same spread pattern as Nael phase.

![239689966-69fa32e9-bb34-42f0-bbf2-1ddb63c50740.webp](/images/ucob-frt-spread.webp)

Depending on the Quote, Nael will either jump to a player and then perform a Lunar Dynamo or Raven's Dive, and then Raven's Dive or Lunar Dynamo.

Tanks need to grab the two Tempest Wing Tethers coming from Bahamut. MT runs to Bahamut and OT runs to Twintania. Suggest using sprint to reach the Neurolink in time.

Party must stack in south Neurolink for Aetheric Profusion, this is a heavy raidwide. After this immediately spread for Meteor Stream. Bahamut will use Gigaflare followed by another set of tank busters with Flare Breath followed by Flatten.

#### Heavensfall Trio (HFT)
<Action title='HFT Toolbox' color='red' href='https://ff14.toolboxgaming.space/?id=740246169786361&preview=1' />

Party to stack mid, similar to QMT the party will split left and right from where the Trio spawns on the wall.

The Trio will be in a random order with Nael positioned either Left, Middle or Right. Two of the Trio will be doing a dive across the room, Nael will not be diving. 

Screenshots from the toolbox below show the possible spawns and respective spreads, Nael is highlighted **RED**.


![239719096-3dca53e3-88c6-4fc7-b04f-d7f05a62f4d1.webp](/images/ucob-hft-dives1.webp){caption="Nael Left"}


![239719103-52a6c820-214a-4e31-96eb-bab73657f889.webp](/images/ucob-hft-dives2.webp){caption="Nael Right"}


![239719119-2935b116-f5ca-4e7e-b9b8-20f587702bd5.webp](/images/ucob-hft-dives3.webp){caption="Nael Middle"}

Pay attention to the position of Nael and spread out in the safe spaces that are not being dived. When the dive goes off, move inwards to avoid a Twister. Players will drop **Megaflare Puddles** as they move in, do not rush in otherwise you might place these too close to the middle. 

**8 towers** will now spawn in positions around the room, each player will need to position to be knocked back into one of the towers. LP1 will count towers **Counter-Clockwise** from Nael and LP2 will count **Clockwise**. 

Find your tower using the following priority system:

```markdown
                  <NAEL>
D3 < D1 < H1 < MT < OT > H2 > D2 > D4
```

::: info NOTE
If a tower spawns infront of Nael, this belongs to **OT**.
:::

Avoiding the **Megaflare Puddles** that drop, preposition yourself to be knocked back into your tower by **Heavensfall**, if you miss the tower, you have some time to adjust into the tower before it explodes.

Once the towers resolve, rotating AoEs will begin spinning around the room, avoid the AoEs by rotating around the room and stay near the wall while Nael sends out two Hypernova, after the Hypernova make your way into the center of the room for another **Party Stack** (Fireball). Finally, Bahamut will use another Gigaflare followed by three Flare Breath.

#### Tenstrike Trio (TST)
<Action title='TST Toolbox' color='red' href='https://ff14.toolboxgaming.space/?id=141245760517361&preview=1' />

Preposition in QMT spreads around the middle of the room. The three players will get two Hatch's one after another. Targetted players should move to a Neurolink, other players spread out away from the Neurolinks.

The players with Hatch will take the first Hatch in the Neurolink.

![239719934-e61c4564-690f-4ca3-a9d9-45573ad6adb8.webp](/images/ucob-tst-towers.webp)

Targetted players will then run directly out to the wall to bait the second Hatch to go through the Neurolink. Another player will need to intercept the Hatch by standing in the Neurolink.

Neurolink targets move to the wall marked in **RED**.

Intercepts move into Neurolink to catch Orbs marked in **YELLOW**.

![239720066-ea2d1ed5-b7d8-4693-8be5-9a7c44c8a74c.webp](/images/ucob-tst-swaps.webp)

::: info NOTE
Intercepts on south waymark may need to side-step a bit to catch the incoming orb as it sometimes spawns slightly offset to the right. Your job is to act like a goalkeeper and catch the orb as it goes past the Neurolink.
:::

After the Hatch resolve, four players will be targetted with Earth Shaker.

Players with Earth Shaker head to the 4 outer waymarks. 

![239720163-97071fb0-e936-42f3-96f5-f5ceecce14e0.webp](/images/ucob-tst-proteans.webp)

The remaining players should head to south waymark to avoid Earth Shaker. These players will now get Earth Shaker and need to swap positions with the first four players.

::: info NOTE
Pre-position around the south waymark to indicate which outer waymark you will be heading too.

![239720216-5997bb46-72d6-4337-bbed-55e93c0486f6.webp](/images/ucob-tst-directions.webp)
Image from Tessian's UCOB Guide Video
:::

After the final Earth Shaker resolve, the phase will end with Gigaflare followed by Flatten and Flare Breath.

#### Grand Octet (GO)
<Action title='GO Toolbox' color='red' href='https://ff14.toolboxgaming.space/?id=620787600564861&preview=1' />

Party should stack middle, Bahamut, Nael, Twin and the 5 Dragons will spawn on all Cardinals and Intercardinals. Look at Bahamuts position, this will tell you which direction you rotate around the room in GO.

If Bahamut is on a...
- **CARDINAL** you will rotate **Counter-Clockwise** around the room.
- **INTERCARDINAL** you will rotate **Clockwise** around the room.

Once you find Bahamut, look to the opposite direction. 

- **IF** Nael is **NOT** opposite Bahamut, run directly to the wall.
- **IF** Nael **IS** opposite Bahamut, offset by one dragon position Clockwise or Counter-Clockwise in the direction you will be rotating.

Once you are at the wall, wait for the first Dive go off, then start running in the CCW or CW direction mentioned before.

After the second dragon dive goes off, use **Sprint** and continue running around the wall past Bahamut (Do **NOT** use sprint if you had to adjust for Nael opposite Bahamut)

Once you are past Bahamut, one player will get targetted with a **Red** beacon. Once this appears, all players turn and run into the middle of the room.

**Tanks** use LB when towers appear and **ALL** party members use **Knockback Resist** when you see the Tank LB. 

::: info NOTE
Tank LB and Knockback Resist will be used to cheese the dive from Twintania and the Stack markers, **these can be completely ignored**.
:::

Ensure that at least one party member is in a tower and prepare for Twister when Twintania completes their Dive.

If you are soaking a tower, walk **across** the tower as the dive goes off to ensure you do not leave the tower early and you don't get clipped by your own Twister.

![239723699-7d0c9d70-8300-443b-8e29-c6b9b1001697.webp](/images/ucob-go-towerdodge.webp)

Once Twister resolve, you will finish the phase and go into Adds.

### Phase 4: Adds
Bahamut will spend this phase in the background charging up **Aethertrail Attunement**, indicated by the **Duty Gauge**. In this phase you will simultaneously take on **Twintania** and **Nael**, who are defending Bahamut as he charges up. If **Aethertrail Attunement** reaches 100 before the 2 bosses are killed, the party will wipe.

**Twintania** and **Nael** will spawn together **north**, in which initially the MT takes aggro of Twintania and OT takes Nael.

::: tank
As initial aggro is based off emnity during **Phase 3: Bahamut Prime**, be sure to **Provoke** your boss.
:::

There are no brand new mechanics this phase. However, as you have the mechanics of both bosses to deal with, there's more to do and things can get pretty chaotic.

::: damage
Keep the HP's of both bosses as similar as possible, as they need to be killed approximately at the same time, otherwise the other will begin casting an enrage.
:::

#### Phase Timeline
::: details Expand Phase Timeline
1. Twintania Plummet and Nael Bahamuts Claw on their respective aggro'd player.
2. Twintania Liquid Hell.
3. Twintania Generate (Hatch) into Twister.
4. Nael **Quotes**.
5. Twintania Twister.
6. Nael Megaflare (raidwide).
7. Twintania Death Sentence and Nael Ravensbeak (tankbusters that require a tank swap).
8. Twintania Plummet and Nael Bahamuts Claw on their respective aggro'd player.
9. Twintania Liquid Hell.
10. Twintania Generate (Hatch) into Twister.
11. Nael **Quotes**.
12. Twintania Twister.
13. Twintania Death Sentence and Nael Ravensbeak (tankbusters that require a tank swap).
14. Nael Megaflare (raidwide).
15. Teraflare: if bosses are not dead at this point the gauge would have filled -> wipe.

You'll notice after the tank swap (Death Sentence and Ravensbeak) the mechanics just repeat in the same order (except the last tankbuster and Megaflare are switched). Essentially, you will have 2 'rotations' or 'cycles' of mechanics to kill Twintania and Nael before the enrage occurs.
:::

::: damage
Liquid Hell is to be baited by D3, who should take them along the southern wall, starting from east/south east-ish.

**Generate** will target 3 DPS this time to soak a Hatch in a Neurolink. To prevent people from fighting over a Neurolink, we have assigned spots for this phase. D1 will take the one on Waymark 1 (north-west), D2 takes Waymark 2 (north-east) and D3 takes Waymark 3 (south). D4 will flex accordingly.

Twintania's Twister comes very shortly after **Generate** is cast - be sure to move in a way so you will resolve both mechanics safely. DPS soaking on Waymark 1 and Waymark 2 should find that they can soak their Hatch first then move for Twister, while DPS soaking on Waymark 3 may find that they need to **resolve Twister first** before moving into their Neurolink due to the orb needing to travel longer.
:::

::: tank
Plan your mitigations carefully - this phase will **hurt**.

Face the bosses to the wall, away from the party and your cotank. This will prevent Twintania dunking on everyone with Plummet.

When the bosses cast their respective Death Sentence and Ravensbeak, you and your cotank will need to swap aggro of each boss as these tankbusters apply a **vulnerability** to the boss's attacks. Simply **Provoke** - shirk shouldn't be necessary.
:::

::: healer
Watch and look after your tanks and remember to use your single target cooldowns to help them, **especially when the back-to-back tankbuster is coming up**.

As you resolve Twister and move around in general throughout this phase, be sure to stand in an area where you will not be clipped by the explosion of DPS resolving Generate (Hatch). One suggestion is to stick around the wall north east or north west so you are not accidentally baiting Liquid Hell while also still being in range to support your tanks. Then, you can just move along the wall as Twister is cast.
:::

#### Quotes
As you can see from the timeline, Nael will do 2 sets of quotes. Each set will come with 3 attacks each.

Nael will do 4 possible quotes:

- From hallowed moon I bare iron, in my descent to wield! = Lunar Dynamo → Iron Chariot → Raven's Dive
- From hallowed moon I descend, upon burning earth to tread! = Lunar Dynamo → Raven's Dive → Thermionic Beam
- Unbending iron, descend with fiery edge! = Iron Chariot → Raven's Dive → Thermionic Beam
- Unbending iron, take fire and descend! = Iron Chariot → Thermionic Beam → Raven's Dive

You will notice that:
- The first is always an **IN** or **OUT**.
- If it is **IN** first, it can be **OUT** next into a **spread**, otherwise it is **spreads into stack**.
- If it is **OUT** first, the next is either **spread into stack**, or **stack into spread**.

Everyone should run to Waymark 4 (centre of the arena) for the **stack**.

::: warning
Remember that the **IN** / **OUT** is relative to **where Nael is** so keep an eye on her hitbox (i.e. if you happen to be targeting Twintania, don't get their hitboxes confused)
:::

::: info NOTE
If it is **spreads into stack**, the **spreads** are fairly yolo-able, but do not stand too far out from the centre to ensure you make it to Waymark 4 in time. Be sure to spread out again after the stack for an incoming Twister.

If it is **stack into spreads**, run outwards from Waymark 4 **after** the stack (generally speaking, in the direction of your clock spot is a good idea to ensure everyone is going different ways, except for tanks who should stick to their bosses) for not only a potential incoming **spread**, but to be separate for the upcoming Twister cast which comes after quotes.
:::

::: everyone
Once the Twister that comes after quotes is resolved, come back inwards to receive mitigation and healing for the upcoming **Megaflare** raidwide, before repositioning for the next rotation of mechanics.
:::

On the 2nd round of quotes, it will be the same list of possible quotes. However, the first **IN** or **OUT** will always be the **opposite** of what the first set of quotes was. So, if the first set of quotes had **IN** as the first attack, the second set of quotes will definitely have **OUT** as the first attack.

**All of these attacks happen in fairly quick succession so after Hatches and Twisters, watch Nael carefully and quickly interpret and resolve her following attacks.**

#### Transitioning to the Final Phase
To help finish off the bosses, a caster should use **Limit Break** on the 2 bosses. The Limit Break gauge will fully recharge for the final phase anyway, so you might as well use it. **Remember to kill the bosses at the same time!**

If you successfully take down the 2 bosses before **Aethertrail Attunement** fully charges, **Teraflare** will cast and wipe the party. Everyone will then be fully resurrected by the Phoenix, who will grant the party with **full 3 bars of Limit Break** and the **Phoenix's Blessing** buff, which is a sweet damage buff that lasts until the end of the pull / fight, or on death. This buff will help you overcome the final phase of this fight.

::: info NOTE
If anyone has died in the wall at the end of this phase, they will die again once resurrected by Phoenix. They will need to be resurrected again by a player, thus gaining a weakness and losing **Phoenix's Blessing**.
:::

Bahamut will then return, paint himself yellow and begin his final standoff.

### Phase 5: Golden Bahamut

::: info NOTE
If in **Phase 3: Bahamut Prime**, Bahamut was not reduced to below 60% HP, he will gain a significant damage buff which will make it extremely unlikely that you will survive this phase. Although, it is [not impossible](https://youtu.be/0ivLvPhZ7DQ?si=8YDoowUjYrrryz3p&t=878)...
:::

::: warning
The damage buff from **Phoenix's Blessing** is lost on death. While the DPS check is still winnable with maybe 1-2 early deaths, keep your main focus on surviving and playing safe where possible.
:::

**Golden Bahamut** will cycle between **3 attacks** throughout this phase.

- Morn Afah an untelegraphed **AoE attack** on a random player in which the damage must be shared with everyone (**stack**). Mitigation is a **MUST**, you can use tank LB if you feel it is needed.
- Akh Morn repeated **AoE tankbuster attacks** on the highest emnity target. The first Akh Morn includes 3 attacks, but each subsequent Akh Morn will add 1 extra hit. These can be shared between both tanks with mitigation or taken solo with an invulnerability - **everyone else must steer clear**. Tanks will usually have an ignore overhead marker so healers and DPS can easily identify where they should not stand near.
- Exaflare are **AoE circles** that travel in the direction of the indicated arrow. In this fight, the exaflares all spawn on one side in 3 sets of 2, and all travel in the same direction. The first set appears roughly at 50% of the castbar. Taking damage from an exaflare is **lethal** for healers and DPS, tanks can survive a hit but will be afflicted with a **damage down**.

I will explain 2 ways to dodge Exaflare, **wall dodge** and **mid dodge**.

**Wall dodging** is a safe and easy way to handle Exaflare, but will require the most movement and can lead to loss in uptime for melee jobs.

As soon as you see and locate the first set of Exaflare that spawn, **stand beside** one on the wall and wait. Then, when that first set of Exaflare begin to resolve, **walk along the wall into where the first Exaflare exploded**, and simply wait till all the other Exaflare go off and group back up with your party.

**Mid dodging** is best for uptime and will require much less total movement. [**This video**](https://www.youtube.com/watch?v=CAgvxOzbSQs) explains mid dodging amazingly and I highly recommend watching it.

Essentially, you treat each set of Exaflare like a **lane**. Once you identify the first set of Exaflare, imagine its trajectory is a lane - stand beside (NOT in) the lane, wait for the Exaflare to pass by, then move into the lane and wait. 

Mid dodging does require a bit more effort than wall dodging as you have the extra step of visualising this 'danger lane.' However if you are a melee DPS or tank, mid dodging would be ideal to learn to maintain uptime.

To keep this guide consistent in the quality of the diagrams, below is an Emgram style MS Paint diagram showing the 2 ways to dodge Exaflare. The orange on the wall indicates an example of where the first set may spawn, the pale yellow shows how the AoE circle of the Exaflare cascades and the red just demonstrates 1 point for mid dodgers in which they can 'switch lanes.'

**DIAGRAM IS NOT 100% TO SCALE AND IS PURELY FOR DEMONSTRATIVE PURPOSES**

![313406535-c9c5cda6-f387-4344-84f4-1f7d98866ff2.webp](/images/ucob-exa.webp)

#### Phase Timeline

:::: details Expand Phase Timeline
::: tank
While I have noted how the Akh Morn tankbusters are generally handled, if you require any variation for any reason, simply communicate with your cotank, ideally during transition.
:::

::: healer
For an Akh Morn that is shared by both tanks, watch their health, use your single target cooldowns and top them up if needed, **ESPECIALLY** for the final 6 hit Akh Morn.
:::

1. Morn Afah
2. Akh Morn (3 hits): shared by both tanks.
3. Exaflare
4. Akh Morn (4 hits): take with invulnerability.
5. Morn Afah
6. Exaflare
7. Morn Afah
8. Akh Morn (5 hits): take with invulnerability.
9. Exaflare
10. Morn Afah
11. Akh Morn (6 hits): shared by both tanks.
12. Exaflare
13. Morn Afah

After is **Golden bahamuts enrage** - he will continuously cast **Morn Afah** for lethal damage, so everyone should spread out as he takes everyone down one by one.

::: tank
The Morn Afah enrage is based on emnity, so if you see the enrage, it is a good idea to **shirk** your healers to give DPS a few extra seconds to defeat him.
:::
::::


