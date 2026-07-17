---
order: 4
fightID: DSR
title: Dragonsong's Reprise
description: A Materia Raiding strategy guide for the Dragonsong's Reprise Ultimate raid in Final Fantasy XIV.
banner: /images/banners/DSR.webp
difficulty: Ultimate
expansion: Endwalker
image: dsr-dkt.webp
authors: [Juno, Noz, Tessan Twintails, MUR]
discussionLink: https://discord.com/channels/944115415385247784/954964560606015508
---

## Toolbox/Raidplan

Toolboxes are an interactive guide that allows you to click through each phase indiviudally and review the mechanics in a easy to understand manner.
<ActionGroup
    :actions=" [
        { title: 'Phase 1: Knights', color: 'yellow', href: 'https://ff14.toolboxgaming.space/?id=199680719834861&preview=1' },
        { title: 'Phase 2: Thordan', color: 'green', href: 'https://ff14.toolboxgaming.space/?id=110786314454861&preview=1' },
        { title: 'Phase 3: Nidhogg', color: 'red', href: 'https://ff14.toolboxgaming.space/?id=654299805191961&preview=1' },
        { title: 'Phase 4: Eyes', color: 'blue', href: 'https://ff14.toolboxgaming.space/?id=674291612991961&preview=1' },
        { title: 'Phase 5: Dark Thordan: Wrath', color: 'purple', href: 'https://ff14.toolboxgaming.space/?id=143466228734561&preview=1' },
        { title: 'Phase 5: Dark Thordan: Death', color: 'purple', href: 'https://ff14.toolboxgaming.space/?id=268588669900861&preview=1' },
        { title: 'Phase 6: Double Dragons', color: 'pink', href: 'https://ff14.toolboxgaming.space/?id=610785126654861&preview=1' }
    ]"
/>

## PoV Videos

Videos covering clears by different roles.
**DPS**
@[DPS](https://youtu.be/FMr8XWq-mXs)
**TANK**
@[TANK](https://youtu.be/Yex5-s3ITPg)

## Mitigation Plan

Mitigation Plan Spreadsheet

<Action title='Mit Plan' color='green' href='https://docs.google.com/spreadsheets/d/1FGF76e57PCD4358zFK7_v3IRze7C_bn6xd3hiM9yfiE/edit#gid=0' />

## Macros

::: details View All Macros
**Playstation Chains**

```markdown
――【Playstation chains】――――――――――――――――――
　　D△ T× T□
　　D〇　 　D〇　west: D1>2>3>4: east
　　D□ H× H△
```

**Haurchefant**

```markdown
――【Haurchefant】――――――――――――――――――
　　　cleave　cleave　　　※ cleaves towards
　　H/R AoE ★ T/M AoE　　　ring (True South)
　　　　　 party
　East cleaves: H1 > D1 > D3 > MT
　West cleaves: H2 > D2 > D4 > ST
```

:::

## Mitigations

::: details View Mitigations

```markdown
――【Mitigations】――――――――
3-3-2 Mit Plans

Transition, every Akh Morn, and every Gigaflare require Kerachole/Sacred Soil. The correct timing for an Akh Morn kera/SS is immediately after the second trinity in exaflares; this will ensure it catches all of akh morn and will be up for the subsequent giggleflare.

==========================
SCH/AST:
/p transition: HoL, missionary, samba, improv, collective, spreadlo
/p akh morn 1: barrier, feint 1, addle, fey illum
/p gigaflare 1: expedient, seraph, feint 2, collective, neutral
/p akh morn 2: HoL, missionary, samba
/p gigaflare 2: feint 1, addle, collective, spreadlo
/p akh morn 3: expedient, seraph, neutral, feint 2, barrier, fey illum
==========================

==========================
SCH/WHM:
/p transition: HoL, missionary, samba, improv, spreadlo
/p akh morn 1: temp, feint 1, addle, barrier, fey illum
/p gigaflare 1: expedient, seraph, feint 2
/p akh morn 2: HoL, missionary, samba, bell
/p gigaflare 2: spreadlo, feint 1, addle
/p akh morn 3: temp, expedient, seraph, feint 2, barrier, fey illum
==========================

==========================
SGE/AST:
/p transition: HoL, missionary, samba, improv, barrier, collective (USE PERSONALS, IF NO RDM USE HOLOS)
/p akh morn 1: panhaima, feint 1, addle, physis
/p gigaflare 1: feint 2, holos, collective, neutral
/p akh morn 2: HoL, missionary, samba, barrier, physis
/p gigaflare 2: feint 1, collective, addle, pneuma
/p akh morn 3: panhaima, neutral, feint 2, holos, physis
==========================

==========================
SGE/WHM:
/p transition: HoL, missionary, samba, improv, barrier (USE PERSONALS, IF NO RDM USE HOLOS)
/p akh morn 1: panhaima, temp, feint 1, physis, addle
/p gigaflare 1: holos, feint 2, pneuma
/p akh morn 2: HoL, missionary, samba, barrier, bell, physis
/p gigaflare 2: feint 1, addle
/p akh morn 3: panhaima, temp, holos, feint 2, physis, pneuma
==========================
```

:::

## Cheatsheet

![](/images/ultimate/dsr-dsrcheatsheet.webp)

## Buff Timings

:::: timing-window
::: burst

- Thordan opener.
- Post Sanctity of the Ward.
- Save slightly for just after tank tether busters go off.
- Post Wrath of the Heavens.
- Double Dragons opener.
- Save for post-touchdown (or WB2 with good DPS).
- Save for tail-end of gigaflare 1.
- Akh Morn 3.
  :::
  ::: pot
- Thordan opener.
- Nidhogg 2-minute window.
- Double Dragons opener.
- Either of the 2-minute windows in DKT.
  :::
  ::::

## Waymarks

These can be imported using an XIV Launcher Plugin.

Phase 1

```json
{
	"Name": "P1",
	"MapID": 788,
	"A": {"X": 93.331, "Y": 0.0, "Z": 103.162, "ID": 0, "Active": true},
	"B": {"X": 96.814, "Y": 0.0, "Z": 106.708, "ID": 1, "Active": true},
	"C": {"X": 103.22, "Y": 0.0, "Z": 106.666, "ID": 2, "Active": true},
	"D": {"X": 106.597, "Y": 0.0, "Z": 103.18, "ID": 3, "Active": true},
	"One": {"X": 93.138, "Y": 0.0, "Z": 96.403, "ID": 4, "Active": true},
	"Two": {"X": 96.841, "Y": 0.0, "Z": 93.277, "ID": 5, "Active": true},
	"Three": {"X": 103.2, "Y": 0.0, "Z": 93.412, "ID": 6, "Active": true},
	"Four": {"X": 106.664, "Y": 0.0, "Z": 96.402, "ID": 7, "Active": true}
}
```

Phase 2 onwards

```json
{
	"Name": "DSR",
	"MapID": 788,
	"A": {"X": 99.663, "Y": 0.0, "Z": 80.695, "ID": 0, "Active": true},
	"B": {"X": 114.335, "Y": 0.0, "Z": 85.543, "ID": 1, "Active": true},
	"C": {"X": 120.013, "Y": 0.0, "Z": 99.957, "ID": 2, "Active": true},
	"D": {"X": 113.466, "Y": 0.0, "Z": 113.585, "ID": 3, "Active": true},
	"One": {"X": 99.991, "Y": 0.0, "Z": 120.12, "ID": 4, "Active": true},
	"Two": {"X": 85.942, "Y": 0.0, "Z": 113.995, "ID": 5, "Active": true},
	"Three": {"X": 79.691, "Y": 0.0, "Z": 100.098, "ID": 6, "Active": true},
	"Four": {"X": 85.919, "Y": 0.0, "Z": 86.197, "ID": 7, "Active": true}
}
```

## Fight Writeup

Guide written by Juno (P1-5) and Noz (P6-7)

> Tidied up by Juno like 2 years later : )

As a starter, a lot of the mechanics in this fight will cause **Damage Down** ^[Damage Down] if solved incorrectly. This debuff reduces your damage by about 50% and it is common practice to wall **IF IT IS SAFE TO DO SO**, as the damage loss from resurrection weakness is less than damage down.

### Phase 1: Knights

This phase begins with two targetable bosses: Adelphel and Grinnaux. Once pulled, tanks will stack the bosses and the party will stay south.

::: damage
As Adelphel goes untargetable soon after the phase starts, players should spend their buffs and openers on him. Throughout the phase both bossess should be kept as similar health as possible.
:::

After a **Holiest of Holy** raid wide, Grinnaux will cast **Empty Dimension**, forming a donut AoE centered on him. At the same time Adelphel will cast **Holy Shield Bash**, a tethered AoE tankbuster that is targeted on a random player. The MT must walk through this tether and bring it north of the bosses to take the tankbuster **with invulnerability**. At the same time, the party will take a **Heavensblaze** stack at the south.

After this stack and tankbuster combo, Adelphel will become untargetable and Grinnaux will cast: **Hyperdimensional Slash**

#### Hyperdimensional Slash

Grinnaux will target 4 random players with a line AOE. This AOE will drop a purple portal on the edge of the arena wherever it was aimed, and if two portals are too close to one another they will tether to eachother and wipe the raid. Similarly, if a player stands too close to a portal they will become tethered and die.

These 4 players must spread to the north of Grinnaux at max-melee, where they will take a line AOE. The positions each player will take are designated by waymarks.

At the same time as the prey markers move North, the remaining party members will stack south of Grinnaux and take a **large conal AOE stack** that gets baited on a random non-prey player.

![](/images/ultimate/dsr-hyperslash.webp)

_Image taken from Tessan Twintails DSR video guide_

This process repeats twice, where the 2nd set of prey markers will instead **spread south** and the initial prey players will **stack north**.

Adelphel will then drop down onto a random cardinal and cast another **Holiest of Holy** and Grinnaux will cast **Faith Unmoving** which will knock players away from Grinnaux (who is still in the center of the arena). Players will use anti-knockback and position themselves so Grinnaux is between them and Adelphel, as Adelphel will then begin to dash across the arena in an hourglass shape.

Adelphel will start this dodge by either moving left or right, and the party will move the same direction and stand on the tip of an arrow shaped pattern in the arena.

After completing his dashes, Adelphel will drop onto the player who had the highest emnity on him before he dissappeared, delivering a heavy hitting AoE tank buster that the OT will invuln. To avoid hitting the party with this, the OT will follow the party to the safe spot and then **continue moving past the party**.

Adelphel will then immediately begin casting 1 of 3 instances of **Holiest Hallowing**, an interruptible heal targeted on Grinnaux. The **Off Tank** will interrupt this and both tanks will position their bosses in the center of the arena for:

#### Playstation Chains

Each player will be marked with either a **cross**, **square**, **circle**, or **triangle**, so that there is two of each symbol.

::: info NOTE

Symbol assignment is restricted by role:

- **Healers** → Cross or Triangle only
- **Tanks** → Cross or Square only
- **DPS** → Square, Circle, or Triangle only

:::

The party will form around Grinnaux in the pattern seen below, and be knocked back by another **Faith Unmoving** to break their tethers. If unbroken, the resulting AoE will kill any players who have not resolved their tethers.

![](/images/ultimate/dsr-playstation.webp)

::: warning
Warrior players: Inner Release is perfectly timed in this phase to be up as this mechanic resolves. This means you'll be immune to knockback and unable to resolve your tether. Either prepull Inner Release earlier in the fight, or click off the **Inner Strength** buff during this mechanic.
:::

Immediately after this is resolved, the 2nd **Holiest Hallowing** cast begins, and the **Ranged** player (or **Main Tank**) will interrupt it. Both bosses should be stacked middle again for another **Holiest of Holy** and either an **Empty** or **Full Dimension**:

| Cast                | Resolution                                              |
| :------------------ | :------------------------------------------------------ |
| **Empty Dimension** | Donut AOE around Grinnaux — move **in**                 |
| **Full Dimension**  | Large circular AOE centered on Grinnaux — move **away** |

The final **Holiest Hallowing** will be interrupted by the **Off Tank** again. At this point, if one of them dies before the other, they will begin to cast their enrage: either **Bull's Steel** or **Brightblade's Steel**. As such both bosses must be killed at roughly the same time.

After dropping their health to 0%, they will immediately become untargetable. Grinnaux will then **holmgang** the entire party to the western side of the arena, chaining them in a small circle. Attempting to leave this circle will kill the player immediately.

A new boss **Charibert** will then appear at the southern side of the circle and begin to cast **Pure of Heart**, the enrage of phase 1.

#### Pure of Heart

**Haurchefant** will run to the side of the circle and block an arrow. This arrow pulses intermittently, dealing damage to the party.

Charibert will then cleave the two players closest to him, applying a 5s debuff **Skyblind** ^[Skyblind]. Once this debuff wears off, an invisible AOE will drop under the player's feet and explode after a few seconds. To resolve this, players bait in role order, with ranged dropping their AOEs east and melee dropping theirs west:

**H → M → R → T**

Once Charibert is reduced to approximately 25-30% health, the DPS check is reached, and as long as one player survives the transition the party will receive a checkpoint.

### Phase 2: Thordan

Phase 2 will begin with the MT facing Thordan north for 2 auto-attacks before he will begin casting **Ascalon's Mercy**, a baited protean on every member of the party.
The party will stack up behind Thordan before dodging to the side to avoid the cleave.

::: info NOTE
The tell to move for this attack can either be the end of the castbar, or when Thordan raises his sword slightly.
:::

Thordan will then slash 3 times at the Main Tank with a tank buster **Ascalon's Might**.

::: tank
Due to the mit plan that MUR PF uses, if the **Main Tank** is a **Warrior** they can use their invincibility here for free.
:::

After moving to the center, Thordan will cast the first trio of the fight: **Strength of the Ward**.

#### Strength of the Ward

Thordan will become untargetable and jump from the arena, and both Light parties will split East/West.

3 Knights will then cleave 3 random cardinals/intercardinals, leaving only 1 safespot either side of the arena.

::: info NOTE
**Light Party 1** will always be on a **number** waymark, and **Light Party 2** will always be on a **letter** waymark. Two waymarks on opposite sides of the arena will also share a colour, so it's enough to call out a single colour to determine both safe spots.
:::

![](/images/ultimate/dsr-strength.webp)

> In the image above we can see the purple, yellow, and blue waymarks have knights on them. Thus we can simply call out "Red" and both parties will know where they have to go.

Within both safe spots, each light party will have to spread to avoid overlapping lightning AOEs about to drop on each player. These lightning AOEs go off at the same time as the dashes.

While the parties are getting into position, **Grinnaux** and **Thordan** appear again, with Grinnaux placed somewhere near the center of the arena and Thordan in the direct center. Grinnaux will then cast a quake that expands out towards each light party — simply wait until it is safe to walk forward.

While the party is dodging this, Thordan will cast another **Ascalon's Mercy**. Each light party must quickly make their way toward Thordan and stack up tightly on either side of him to bait the proteans.

Thordan will then jump again and land on a random cardinal or intercardinal, along with 2 other knights dropping onto the arena. For this section of the trio, **Thordan becomes our new north**.

::: tip
Thordan can be tricky to find here if you're spinning your camera. Instead, look at the **2 knights**, who will always be further away from and facing Thordan.
:::

3 players will then get marked with a **large blue defamation marker**, and large red puddles will begin to grow on the ground. Each of the 2 knights will also tether the player directly in front of them with **Holy Shieldbash/Bladedance**.

Everyone who does **not** have a marker should quickly find Thordan and make their way to him. The Tanks will take their respective tether:

- **Main Tank** left knight facing Thordan

- **Off Tank** right knight facing Thordan

And then criss-cross them into the safe spot under Thordan to stretch them further for reduced damage:

![305584973-9ff95bb1-a663-4834-991b-bef741b5e0cf.webp](/images/ultimate/dsr-strength2.webp)

::: warning
The relative **West** and **East** **Defamation** players should stand on the **edge of the waymark** as seen in the image. If you stand in the middle of your waymark you are likely to kill one of the Tanks next to Thordan.
:::

Just before everything goes off, 6 towers appear in the middle of the arena that must be soaked by every player other than the tanks. The 3 **non-marker** players should line up against the wall below Thordan to indicate which tower they're taking, before standing together for a stack shared with both tanks.

::: tank
Each tank can stand in front of their respective knight to ensure they're the one to grab the tether, before using sprint to comfortably make it to the safe spot.
:::

Each player will then walk forward into their respective tower and soak the damage. Missing one tower deals a high amount of damage to the party, likely wiping the group.

Thordan will then drop into the center of the arena and cast **Ancient Quaga**, a heavy-hitting raidwide, followed by **Heavenly Heel** into **Ascalon's Mercy**. **Heel** inflicts a **Slashing Resistance Down** ^[Slashing Resistance Down] debuff, requiring a tank swap.

He will then begin to cast the next trio of the fight: **Sanctity of the Ward**.

#### Sanctity of the Ward

Thordan will leave the arena and **2 knights** will drop down near the center, on opposite sides of each other. These knights can face either **clockwise** or **counter-clockwise**, determining the direction they're about to dash across the arena. A third knight will also spawn on one of the waymarks near the outside of the arena.

The knight at the edge of the arena will then target **2 people** for distance-based stacks, indicated by either a **single sword** or **2 swords** above the player's head:

- **2 swords** → move _behind_ the third knight.
- **1 sword** → move to the opposite side of the arena on the same axis as the knight.
    > (e.g. if the knight spawns on a blue waymark, move to the opposite blue waymark)

Each stack will move 4 notches in the same direction as the knights (**clockwise**/**counter-clockwise**). This will leave the party in the 1st of 2 safespots as part of the dashes. After the cleaves go off around them the party will move to 4 notches _before_ the next waymark for the next safe spot.

Just before these stacks and cleaves go off, Thordan and a large red eye that appeared around the arena will perform a gaze attack that must be avoided.

_(Diagram to be added; Check raidplan for now)_

After the last AoEs resolve, various knights will appear around the arena alongside thordan, preparing to cast various new mechanics in tandem. This set of mechanics is referred to as: **Meteors**.

#### Meteors

::: info NOTE
This mechanic has a lot of moving parts. I recommend reviewing the toolbox above and watching a few PoVs before your first attempt.
:::

##### Starting positions

Players split into pairs on each cardinal, per the cheatsheet, standing between the AOEs that have spawned on the intercardinals:

| Cardinal  | Pair    |
| :-------- | :------ |
| **North** | MT / D3 |
| **South** | OT / D4 |
| **West**  | H1 / D1 |
| **East**  | H2 / D2 |

2 players will be marked with **Meteor** ^[Prey], a small red arrow above the player's head. These 2 players will **always** share the same role — that role is the **priority role** for this mechanic.

##### Meteor ^[Prey] movement

The **Meteor players** ^[Prey] reposition to North and South, swapping with whichever **priority role player** is already there. _Generally_ they should move to whichever N/S cardinal is **clockwise** of their starting position, though this isn't a hard rule.

Each pair stands roughly halfway between the center and edge of the arena to bait a partner stack. This leaves a puddle granting a brief **Ice Resistance Up** ^[Ice Resistance Up] buff — move out of it quickly before it applies a heavy frostbite DOT. The orange intercardinal AOEs also turn into fire puddles when the stacks resolve, cutting off the middle of the arena from the outer ring.

##### First Towers

8 towers spawn — some on the outer edge, some in the middle. The general tower priority is as follows:

- **1 outer tower available in your quadrant** → priority role takes it; the other player moves to the middle and soaks the tower **clockwise** from where they baited their **ice puddle**.
- **2 outer towers available in your quadrant** → priority role takes the leftmost, non-priority takes the rightmost.

::: info NOTE
This rule is a bit flimsy in practice - most of the time players will edge towards a direction to indicate the tower they wish to take.
:::

The **Meteor** ^[Prey] debuff causes 8 meteors to drop on each Meteor player, one at a time. If two meteors land too close together they explode and wipe the raid, so the two **Meteor** players want to begin the mechanic as far apart as possible after the first tower soak.

::: info NOTE
Ideally the two Meteor players begin **180°** apart. Because tower placement is semi-random, two other patterns can occur instead: roughly **150°** or **120°** apart. The **120°** pattern is colloquially known as **"cursed."**
:::

To minimize how often the tighter patterns occur, each Meteor player should look at the other and pick whichever available tower gives the largest gap between them. When you do end up with a tight pattern, the player on the **"short"** side should:

- Follow the curve of the inner AOEs to use up as much space as possible.
- If the pattern is **cursed** (120°), use stutter-stepping to pace the meteors correctly — the drops will be close together, so this takes practice. Fortunately this pattern is uncommon.

##### Second Towers

After the initial soak, both **Meteor** players begin moving clockwise around the arena. 8 more towers spawn on each cardinal and intercardinal. After roughly 5-6 meteor drops, Thordan casts **Faith Unmoving**:

- **Outside players** → use anti-knockback.
- **Inside players** → ride the knockback into their respective tower.

Which tower each player takes depends on their initial safe spot:

- **Priority players** → the cardinal tower.
- **Non-priority players** → the tower **1 clockwise** of their starting safe spot.
- **Both Meteor players** → end up in the opposite North or South tower.

After these towers are resolved, Thordan will drop down at true north and begin to cast a heavy hittind raidwide: **Ultimate End**. After this, Thordan gains a **Discomposed** ^[Discomposed] debuff, causing him to take 30% more damage. He will then cast **Broad Swing** twice in a row at a random player, where the party will stand behind him and move into the first cleave.

Thordan will then cast his enrage: **Atheric Burst**.

### Phase 3: Nidhogg

::: everyone
This phase begins with a HEAVY raidwide attack and should be mitigated appropriately
:::

Nidhogg will drop down and begin auto-attacking the main tank, before casting:

#### Dive from Grace

::: info NOTE
This is one of the first "walls" of the fight and can be difficult to wrap your head around on a first read. Reviewing PoVs and the toolbox above is strongly recommended.
:::

As the cast begins, a set of numbers is applied to the party:

| Number                  | Count |
| :---------------------- | :---- |
| **1** ^[First in Line]  | x3    |
| **2** ^[Second in Line] | x2    |
| **3** ^[Third in Line]  | x3    |

Players preposition according to their number, as shown below:

![314374579-babf8707-75cb-4b42-8c58-70d07df7da93.webp](/images/ultimate/dsr-dfg.webp)

~5 seconds later, a second debuff is applied to each player:

| Debuff                                                   |
| :------------------------------------------------------- |
| **High Jump Target** ^[High Jump Target]                 |
| **Elusive Jump Target** ^[Elusive Jump Target]           |
| **Spineshatter Dive Target** ^[Spineshatter Dive Target] |

The **number** debuff is the order players will be dived/jumped on by Nidhogg (**1 ^[First in Line]** → **2 ^[Second in Line]** → **3 ^[Third in Line]**). The **arrow/circle** debuff is the _type_ of dive/jump Nidhogg performs on that player.

Getting dived leaves behind a tower that must be soaked by someone else — both the dive and the tower inflict **Fire Resistance Down II** ^[Fire Resistance Down II] and **Physical Vulnerability Up** ^[Physical Vulnerability Up].

##### Tower Placement

The dive _type_ determines where the resulting tower lands. Think of the arrows as "pushing" the tower a hitbox-width away from the dived player, in the direction they're facing. Regardless of arrow/no-arrow, we always want towers placed on the **East/West/South** of Nidhogg's hitbox for the upcoming mechanic.

::: info NOTE
OCE uses the **"Easthogg"** strat — arrows are solved so that every arrow player can simply face east and the mechanic resolves correctly.
:::

| Arrow                                    | Position | Facing |
| :--------------------------------------- | :------- | :----- |
| **Up Arrow** ^[Spineshatter Dive Target] | West     | East   |
| **Down Arrow** ^[Elusive Jump Target]    | East     | East   |

If a set of numbers has **no arrows**, they use the positions they indicated when the numbers first went out.

As seen above we place the **Up Arrow** West, and the **Down Arrow** East. If both these players **look East** the towers will end up on the sides of Nidhogg's hitbox. If a set of numbers **does not** have arrows, they will use the positions they indicated when the numbers first went out.

##### Tower Soak Order

Using each player's indicated or arrow position:

- **3rd ^[Third in Line] dive** players soak the towers dropped by **1st ^[First in Line] dive** players.
- **East/West 1st ^[First in Line] dive** players soak the towers dropped by **2nd ^[Second in Line] dive** players.
- **2nd ^[Second in Line] dive** players and the **South 1st ^[First in Line] dive** player soak the towers dropped by **3rd ^[Third in Line] dive** players.

Upon soaking a tower, a Nidhogg clone will drop down and aim a line AOE at the closest player. Bait this out of the arena, and **when Nidhogg glows**, step through Nidhogg to avoid being hit.

While the first and third sets of towers are being placed, Nidhogg will also cast either **Lash and Gnash** (**in** then **out**) or **Gnash and Lash** (**out** then **in**). On cast finish, Nidhogg casts a party stack on a player not currently placing/soaking a tower, then performs whichever of Lash/Gnash was first on the castbar, followed by the other.

::: info NOTE
Snapshot timing for the first attack of **Lash/Gnash** is on cast finish, so it's safe to walk through the boss before the animation plays.
:::

::: warning
Though it's possible to live through a hit from **Lash/Gnash**, it will knock the player away from Nidhogg and apply a **Damage Down** ^[Damage Down] debuff. The P3 damage check isn't especially tight at present, but a few damage downs can make it impossible to beat.
:::

#### Enumeration Towers

Immediately after **Dive from Grace**, the tank will take a few more auto-attacks before casting **Drachenlance on a random player** — a short conal AOE that deals lethal damage to anyone hit.

4 towers spawn on each intercardinal around Nidhogg. All players stack with their partner to begin with. In all but 1 pattern, each tower needs a different number of players, indicated by the number of pillars in the tower.

::: info NOTE
Ranged players anchor in their starting spot. If a melee player sees their tower only needs 1 person, they flex to another using priority: **clockwise, then counter-clockwise, then across the arena.**
:::

These towers drop clones similar to Dive from Grace, but one clone carries a tankbuster tether. The main Nidhogg in the middle also carries a tether, and both tanks take a tether each and invuln the buster in the center of the arena.

The Main tank will then face Nidhogg south and continue to take auto-attacks. After one more **south-facing Drachenlance**, Nidhogg will cast his enrage: **Revenge of the Horde**

### Phase 4: Eyes

::: tank
Tanks should communicate which eye they are taking before this phase, as each eye deals auto-attacks. Generally in OCE, **Main Tank** takes the **Red** eye, and **Off Tank** takes the **Blue** eye.
:::

Everyone begins this phase by grouping on top of Alphinaud as he walks into the arena. Alphinaud and a random party member are given a buff that applies to everyone in a short range (hence the stack): **Soul of Devotion** ^[Soul of Devotion] and **Soul of Friendship** ^[Soul of Friendship] allow players to damage the **Blue** and **Red** eyes respectively. These buffs are lost upon death.

::: damage
Ranged should begin to focus on the **Red** eye, and melee should focus on the **Blue** eye
:::

Estinien will cast a heavy raidwide and bleed: **Resentment**

#### Hatebound

Tethers are randomly applied so there are **4 blue** and **4 red** tethers, each attached to their respective eye:

| Tether   | Effect                                |
| :------- | :------------------------------------ |
| **Blue** | Taking damage **heals** the blue eye  |
| **Red**  | Taking damage **damages** the red eye |

At the same time, a large yellow orb appears in front (**East/West**) of each eye, with 2 smaller blue orbs to its sides (**North/South**).

::: warning
Tethers can be swapped by standing on a player of the opposite colour so be careful not to swap accidentally by walking on top of others.
:::

All melee (MT, ST, D1, D2) will want to begin the mechanic with **red** tethers. Any melee with the wrong colour walks to the middle and **stacks on Estinien**; the ranged player with the wrong colour does the same, so both can swap and receive the correct tether. Supports move to the **Red** eye, DPS to the **Blue** eye as seen below:

_(Diagram to be added; Check raidplan for now)_

Once the yellow orb grows **twice**, all melee walk into it together for a pair stack, then split and stand on top of their ranged partner, swapping tethers before moving to the middle. Ranged players wait for their own orb to grow twice before walking in. Everyone then moves to the **Blue** eye: red-tether (now ranged) players form a square around the eye, melee stack underneath it.

#### Mirage Dives

Nidhogg dives 2 random red-tether players, 4 times in a row. Each hit player must be swapped with to ensure they won't be struck twice and instantly killed as the dive applies a vuln up.

::: damage
Around 38-40% HP on the **Red** eye, ranged should swap to the **Blue** eye.
:::

Finishing all the dives with good damage results in both eyes dying before a final **Steep in Rage** cast. If **either** eye is still alive at that point the party wipes; if specifically the **Red** eye is alive, it will resurrect the Blue eye, so keep an eye on it to ensure it dies.

### Intermission

Intermission reruns the **Pure of Heart** mechanic from Phase 1, with some key differences:

Haurchefant is now _targetable_, but has an **HP Recovery Down** ^[HP Recovery Down] debuff. A tank must use **Limit Break 3** to remove it, letting him take significantly reduced damage, but also allowing him to be healed.

::: tank
Either tank should LB3 as soon as Haurchefant appears: roughly after the 2nd GCD on Charibert.
:::

::: healer
Keep an eye on Haurchefant's HP throughout. He should be at or near full health before the final **Pure of Heart** raidwide, which hits hard. A WHM can save Benediction for this to simplify healing.
:::

Following the same **H → M → R → T** bait order as Phase 1, players resolve the mechanic, then face an additional DPS check on the **Spear of the Fury** Haurchefant is blocking. Defeating the spear before it casts **Pierce** allows the party to continue to Phase 5; failure sends the party back to Phase 2.

### Phase 5 - Dark King Thordan

After 2 AOE autoattacks, Thordan begins to cast: **Wrath of the Heavens**.

#### Wrath of the Heavens (WOTH / Wrath)

Thordan will become untargetable, and 2 knights and a dragon will drop down on a random cardinal/intercardinal. **This becomes our new North.**

A player is marked with a blue **defamation** marker, and 2 players are marked with line-AOEs (orange tethers from the knights). Tether players pull their tethers across the arena from their knight; the defamation player stands near the western knight.

::: info NOTE
Tether players can use the arena's line markings to line up their tethers. The defamation player can similarly count 2 lines from the waymark west of the knight to avoid clipping the tether player.
:::

The rest of the party spreads along the relative east wall. During this, the dragon casts **Twisting Dive**; all players should move towards the center of the arena to avoid any twisters that appear under them (or others).

::: info NOTE
For twister timing, watch either the dragon or the orange tethers. Move as soon as the dragon starts moving (shortly after cast finish) or the tethers disappear.
:::

As Twisting Dive resolves, two more knights and Thordan drop into the center. After avoiding the twisters, players spread on their side of the arena for an upcoming protean. A non-tether/defamation player is marked with **Dive Bomb** (a green marker) and should run to the wall behind the **knight with a staff** to bait it.

This splits the party into 2 groups: 4 players who have resolved a mechanic, and 4 who haven't.

After a protean slash from Thordan, a random **non-mechanic** player is targeted with 5 consecutive **Liquid Heaven** baits, and a random **mechanic** player is targeted with 4 **Eruption** baits. 2 random players (which may be the same players) are also targeted with lightning AOEs.

::: warning
Stay on your own side of the arena here. All **mechanic** players carry a **Magic Vulnerability Up** ^[Magic Vulnerability Up] debuff and will **instantly die** if hit by a Liquid Heaven.
:::

Everyone will then make their way to the **Warrior** as he will shortly cast a donut AOE. Stack near Thordan, with the two lightning AOEs spread near the rear of the donut to form a "Mickey Mouse" shape.

::: info NOTE
Both bait players should avoid overlapping their baits on top of the stack to leave room for the rest of the party. It's fine to walk away from the safe spot and loop back in time.
:::

After this resolves, Thordan will cast an **Ancient Quaga** raidwide, followed by 2 more AOE auto attacks and another **Heavenly Heel** into **Ascalon's Might** tank buster.

::: tank
Due to the mit plan that MUR PF uses, if the **Main Tank** is a **WAR** they can use their **invulnerability** here for free.
:::

Thordan will then cast: **Death of the Heavens**.

#### Death of the Heavens (DOTH/Death)

::: info NOTE
This mechanic has a lot of moving parts — reviewing PoVs and toolboxes is highly recommended.
:::

Thordan goes untargetable and jumps to the arena's edge, summoning his eye. Several dragons and a knight also drop onto the arena's edge. Another knight wielding an axe drops into the arena, slightly offset from center towards a cardinal/intercardinal. **This knight becomes our new North.**

The party immediately lines up as follows:

<div align="center">

Knight

**H1 — MT — D3 — D1 — D2 — D4 — ST — H2**

</div>

4 random players are given a visible red **Doom** ^[Doom] debuff (**26s**), killing the player if not cleansed. Any player without **Doom** ^[Doom] will shortly drop a Doom-cleansing puddle. Because of upcoming mechanics, we want these spread at **West**/**East** and the **Northern** intercardinals.

As OCE runs **Dooms south**: using the line-up above, each **Doom** ^[Doom] player positions themselves 1-4 along the relative south wall, counting **clockwise**. Non-Doom players do the opposite, lining up 1-4 along the relative north wall.

The exact intercardinal positions can be finnicky due to upcoming cleaves through the arena. In general intercardinal players should lean **toward the center** of the arena, using the waymark.

_(Diagram to be added; Check raidplan for now)_

Once in position, the dragon dives and the knight's lightning spread resolve. Because one of the dragons is the same one from **Wrath**, there will also be twisters.

::: info NOTE
This twister's timing is as soon as the lightning AOE goes off.
:::

The knight in the middle also casts a quake that gradually spreads outward from his position.

- **North, close-West, and close-East** players hold forward towards the knight as soon as their lightning AOE resolves.
- **Everyone else** walks along the arena's edge, dodging into the 2nd earthshaker AOE as it appears.

As these resolve, several knights replace the axe knight in the middle — including our favourite, **Grinnaux**.

Once players reach the middle, everyone is assigned **Playstation Tethers**. These differ slightly from Phase 1:

- Only **Doom** ^[Doom] players can receive circle (baited by the furthest-away players).
- Only **non-Doom** players can receive cross.
- Only one square and one triangle per group.

The 1st and 4th **Doom** ^[Doom] players stand outside the inner circle to bait the circle tethers; the other **Doom** ^[Doom] players stand relative **North-West** / **North-East** of the middle circle, surrounding Grinnaux. **Non-Doom** players spread to **South-West** / **South-East** and **North** / **South**, using eyes to stay opposite their Doom counterpart.

::: info NOTE
Players should start identifying where Thordan and the giant Red eye are as there will shortly be a gaze attack from each.
:::

Players look away from both gazes and ride a **Faith Unmoving** knockback from Grinnaux. **Doom** ^[Doom] players should immediately move into the cleanse puddles if not knocked back perfectly.

::: tip
Wiggling while standing in the puddle sometimes helps the game register you as standing in it.
:::

#### Meteors

Without a break, 8 meteors will spawn on each cardinal and intercardinal. The 3 meteors at **North** / **North-West** / **North-East** are killed using a targeted magic LB2 on the meteor at north, while the rest of the party bursts down the remaining meteors.

Killing the meteors causes Thordan to jump back to the arena and perform another **Ancient Quaga**, followed by 2 more AOE auto-attacks into **Heavenly Heel** and an **Ascalon's Might** tankbuster.

::: warning
Players **must** stop damaging Thordan below **2.8%** HP. If Thordan dies here, the fight becomes **impossible** to beat, as he will wipe the party at the end of Phase 6. Once this threshold is reached, Thordan will say **"I yield..."** and drop to one knee.
:::

Players then immediately position south for the next phase:

### Phase 6: Double Dragons - Nidhogg & Hraesvelgr

::: warning IMPORTANT
This phase has two possible failure conditions:

- **Mortal Vow** ^[Mortal Vow] — letting the **Mortal Vow** ^[Mortal Vow] debuff fall off enrages **Nidhogg**.
- **Solemn Vow** ^[Solemn Vow] — dying to _any_ instance of Hraesvelgr damage (autos/stacks/AOE/spreads) breaks **Solemn Vow** ^[Solemn Vow] and enrages **Hraesvelgr**.

Breaking a vow gives that dragon a **Damage Up** ^[Damage Up] and **Damage Taken Down** buff, effectively one-shotting tanks with auto-attacks. Breaking a vow mid-phase isn't always fatal (e.g. dying in **Cauterize**), but early vow breaks will almost certainly wipe the raid.
:::

::: tank
This phase is very tank-heavy compared to earlier phases. Know your mitigations — without the correct mits you may need healer help, or you will die.
:::

::: damage
There are 2 **hand of pain**-style HP checks in this phase: the health differential must be no more than **2.8%** between Nidhogg and Hraesvelgr. Especially during the opening mechanic, DPS must tab between both dragons to keep the gap from widening.
:::

**Main Tank** will tank **Nidhogg**, **Off Tank** will tank **Hraesvelgr**. After a few auto-attacks, both dragons begin to cast: **Dread/Great Wyrmsbreath**.

#### Wyrmsbreath 1 (WB1)

The arena transforms into a donut via an AOE.

- 3 random **non-tank** players are given a fire tether from Nidhogg, inflicting **Boiling** ^[Boiling].
    > **Boiling** ^[Boiling] will resolve to **Pyretic** ^[Pyretic], dealing high damage upon movement.
- 3 random **non-tank** players are given an ice tether from Hraesvelgr, inflicting **Freezing** ^[Freezing].
    > **Freezing** ^[Freezing] will resolve to **Deep Freeze** ^[Deep Freeze], dealing high damage if not moving.

Each **fire-tether** player must stack with an **ice-tether** player to cancel both debuffs out.

::: info NOTE
Since we can't predict who gets targeted, the strategy has 3 groups of 2: one **"plant"** per group, and one **"flex"** player who swaps out if their partner ends up with the same tether type.
:::

Tanks don't need to worry about tethers — instead, watch both dragons' mouths to see whether a single or 2-person tankbuster is coming:

| Mouths           | Resolution                                                                                                                                                                                                              |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Both glowing** | Tanks **stack** and share the buster in the center of the arena to resolve the **Sustained Dark Damage** ^[Sustained Dark Damage] and **Sustained Light Damage** ^[Sustained Light Damage] debuffs applied by the orbs. |
| **One glowing**  | Tank on the **non-glowing** dragon takes a large **defamation-style** buster; the other dragon does a large conal cleave through the middle                                                                             |

Immediately after, all players spread away from DPS as a random DPS is assigned **Mortal Vow** ^[Mortal Vow] via a targeted AOE.

::: info NOTE
**Mortal Vow** ^[Mortal Vow] is a "hot potato": at the end of its timer (or on the player's death), it releases a small AOE and inflicts the holder with **Mortal Atonement** ^[Mortal Atonement].

> The inflicted player will take lethal damage from a **Mortal Vow** ^[Mortal Vow] AOE.

Someone else must be hit by this AOE to receive and renew the debuff. Letting it fall off without renewal enrages Nidhogg.

Extra players caught in the pass AOE are inflicted with **Suppuration** ^[Suppuration], decreasing their maximum HP by 50% and increasing their damage taken. Stay away from the middle unless it's your job to do the pass.

Should an extra person catch the **Suppuration** ^[Suppuration] debuff, they should wall when safe to do so to avoid dying to (particularly Hraesvelgr) a dragon's damage.
:::

::: healer
**Mortal Vow** ^[Mortal Vow] gives a mild DOT. It isn't anything you have to focus on heavily but just be aware in case an under-mitted raidwide leaves them on single digit HP.
:::

::: info NOTE
Because previous **Mortal Vow** ^[Mortal Vow] holders are inflicted by **Mortal Atonement** ^[Mortal Atonement], D1 and D2 should note who received the first Mortal Vow, as it affects who does a pass later in the phase.
:::

After the first Mortal Vow is assigned, both dragons cast: **Akh Afah**.

#### Akh Afah 1

2 light-party stacks with the hand-of-pain HP check. If the dragons' HP is too far apart by cast finish, the light party being targeted by the **higher health dragon** will be inflicted with lethal damage. A tether between the 2 dragons signals which dragon is higher health:

- Purple Tether -> **Nidhogg HP too high**
- White Tether -> **Hraesvelgr HP too high**

Everyone stacks near the middle: LP1 leaning north, LP2 leaning south.

Nidhogg then flies away, and Hraesvelgr casts: **Hallowed Wings**.

#### Hallowed Wings 1 (HW1)

Two separately baited tankbusters, with only a quarter of the arena safe. Read all 3 components in whatever order works for you:

- Nidhogg cleaves the entire **West** or **East** half of the arena — check the **North** / **South** wall to see which side he's coming from.
- One of Hraesvelgr's wings glows, cleaving the entire **North** or **South** of the arena.
- Hraesvelgr's head is either **low** (busters on the **2 closest players**) or **high** (busters on the **2 furthest players**).

Once the safe quadrant is found, **Tanks** position to bait the buster while the rest of the party groups on the opposite side.

Both dragons return and auto-attack a few times. **Mortal Vow** ^[Mortal Vow] now passes: the **current holder** and the **Main Tank** go mid, passing the debuff — everyone else stay clear of middle.

::: damage
Even after Nidhogg returns, **keep focusing Hraesvelgr**, as he'll be untargetable for the next mechanic.
:::

After the pass, Nidhogg casts: **Wroth Flames**.

#### Wroth Flames

::: healer
This mechanic is a heavy-hitting party stack while moving, so most major mitigations are typically saved for here.
:::

- 4 players are given a **Spreading Flames** ^[Spreading Flames] debuff.
    > Resolves under **Nidhogg**, at the very end of the mechanic.
- 2 players are given a **Entangled Flames** ^[Entangled Flames] debuff.
    > Resolves under **Hraesvelgr**, at the very end of the mechanic.
- 2 players are given **nothing**.
    > Assist with the **Entangled Flames** ^[Entangled Flames] stacks.

Nidhogg prepares **Akh Morn** (a 4-hit party stack leaving a lethal puddle), while **Hraesvelgr** flies away to prepare a cleave of the entire **West** or **East** side of the arena. Three sets of fire orbs also spawn, forming large plus-shaped AOEs on resolution. The goal is to dodge all of these as a party while soaking the repeated **Akh Morn** stacks.

##### Starting Position

- Move to the side Hraesvelgr **isn't** cleaving (check the **North** / **South** wall for his approach).
- Watch where the 2nd set of orbs spawns and move to the opposite corner on the same wall.

::: info NOTE
Example: if Hraesvelgr cleaves **West** and the 2nd orb spawns **North-East**, the party starts **South-East**.
:::

The party then performs a fixed "J"-shaped movement, gradually moving toward the middle.

::: warning
Stack tightly and don't run ahead — stop at the edge of each puddle before the next step. Sprint isn't essential here and should only be used if you read the safe spot late.
:::

After the dodges, Nidhogg casts **Hot Tail** (sides of his hitbox safe) or **Hot Wing** (center line through his hitbox safe) — the **Spreading** ^[Spreading Flames] / **Entangled flames** ^[Entangled Flames] debuffs resolve at the end of this cast.

::: info NOTE
On **Hot Tail**, the party resolves debuffs on the **North** / **South** cardinal **opposite** where they started.
:::

::: info NOTE
Most parties will use **Auto Markers** to fix spread/stack positions. Doing it "legit," spreads are fairly yoloable and stacks just need a simple priority system or in-chat callouts (or first come first serve basis). Give tanks priority to be towards the center, as they need to move mid for the Mortal Vow pass right after.
:::

After the spreads/stacks resolve, there's another **Mortal Vow** ^[Mortal Vow] pass: **both tanks** move to the middle (everyone else, stay clear), passing from **Main Tank** to **Off Tank**. Use this window to balance the bosses' HP, as both dragons then cast: **Akh Afah**.

#### Akh Afah 2

This is the exact same as the first one, position in light parties just like before.

Hraesvelgr then casts:

#### Hallowed Wings 2 (HW2)

The same tankbuster pattern as **Hallowed Wings 1**, but instead of Nidhogg cutting the arena in half, he casts **Hot Wings** or **Hot Tail**. Check which half Hraesvelgr is cleaving and his head position:

- **Off Tank** is always towards the center line.
- **Main Tank / party** are under or on the complete opposite side of Hraesvelgr, depending on a near or far bait.

::: warning
Hraesvelgr's cleave is **slightly bigger than 50% of the arena**. The **Hot Wings** pattern's safe line can be especially tight due to this.
:::

Another **Mortal Vow** ^[Mortal Vow] pass follows this: **Off Tank** passes to D1, unless D1 held the first vow (in which case D2 passes instead, since D1 will have ^[Mortal Atonement]). Everyone else, once again, stay away from mid.

Both dragons then begin to cast:

#### Wyrmsbreath 2 (WB2)

Conceptually the same as **Wyrmsbreath 1**, but this time we do **not** want to cancel out our tether debuffs. Healers and DPS use fixed positions that, if done correctly, ensure each player is hit by only 1 tether and keeps their ice or fire debuff for the mechanic after.

::: info NOTE
Don't worry if your tether isn't visually stretched — just stand in the exact diagram spot.
:::

::: healer
It can be useful to keep an eye on the HP of the **Mortal Vow** ^[Mortal Vow] DPS, especially if their tether isn't visually stretched.
:::

Tanks again check both dragons' mouths:

| Mouths           | Resolution                                                                              |
| :--------------- | :-------------------------------------------------------------------------------------- |
| **Both glowing** | Shared buster, resolved in the middle                                                   |
| **One glowing**  | Move to the fixed spread spot for the buster (center is **not** safe due to breath AOE) |

::: info NOTE
Melee players should pay particular attention to floor patterning to position correctly here.
:::

#### Cauterize

Once everything resolves, both dragons fly north, preparing **Cauterize**: a wild-charge dash cleaving their half of the arena (front player takes the most damage). Healers should top the party up quickly, especially anyone with an unstretched tether from WB2.

- **MT** — frontmost, west side.
- **OT** — frontmost, east side.
- Both tanks use invulnerability here.

Healers and DPS move to the side with the dragon **opposite** their current debuff:

| Debuff (from WB2)        | Stand in path of |
| :----------------------- | :--------------- |
| **Freezing** ^[Freezing] | Nidhogg          |
| **Boiling** ^[Boiling]   | Hraesvelgr       |

This both survives Cauterize and cancels the debuffs. At the end of the debuff timers, **Freezing** ^[Freezing] players freeze and **Boiling** ^[Boiling] players take a **Pyretic** ^[Pyretic] debuff, causing significant damage on any action taken.

::: warning

- **Boiling** ^[Boiling] healers must top up **before** their **Pyretic** ^[Pyretic] activates.
- **Boiling** ^[Boiling] DPS — **especially Physical Ranged** — should untarget the boss so auto-attacks don't trigger Pyretic damage.

:::

::: warning
As the dragons cleave just over half the arena, stay well clear of the center line and firmly inside the side you intend to be cleaved on.
:::

Once the dragons move, everyone will stack **North**. Healers top the party up again for the upcoming **Touchdown**.

::: healer
If one of your tanks is a DRK, top them up individually, as they have nothing to hit to proc Living Dead.
:::

The dragons then jump down for: **Touchdown** & **Revenge of the Horde**

#### Touchdown & Revenge of the Horde

::: info NOTE
If one boss had their vow broken during Cauterize, Touchdown is liveable with a tank LB2.
:::

Nidhogg and Hraesvelgr slam down on the center and south of the arena respectively, dealing **proximity** AOE damage. Everyone runs out to finish the bosses off, **except** D3 and the **Mortal Vow** ^[Mortal Vow] holder, who complete the final pass at **North** before moving.

::: info NOTE
It's fine for **D3** to receive this pass even if they held the first Mortal Vow **Mortal Vow** ^[Mortal Vow] as their **Mortal Atonement** ^[Mortal Atonement] will have fallen off.
:::

Both dragons then cast their enrage, **Revenge of the Horde**.

::: warning
If the **Mortal Vow** ^[Mortal Vow] pass fails here, Nidhogg still 'enrages', gaining a defence-up buff. Depending on current boss HP, DPS LB may be needed to finish them off.
:::

#### Transition

Once both dragons die,

- **If Thordan died in Phase 5** — the party wipes here, as the Eyes of Nidhogg appear (as in Phase 4) but without the **Soul of Friendship** ^[Soul of Friendship] buff.
- **If Thordan survived Phase 5** — continue, and prepare for the heavy raidwide transition.

Use this downtime to mark tanks with Ignore overhead markers, since they'll take AOE attacks in the final phase — this makes them easier for the rest of the party to avoid.

The eyes first do a small raidwide with a bleed — no mitigation needed, just GCD-heal through it. Thordan then returns to absorb the eyes and does another small bleed raidwide, healed the same way.

::: info NOTE
Dancers using Improvisation for the transition should start channeling as soon as Thordan does this raidwide.
:::

Thordan then begins channeling **Alternative End**, an extremely hard-hitting raidwide. **Wait for the bleed to fall off** before applying shields and mitigations, then move on to the final phase.

### Phase 7: Dragon King Thordan

#### General Knowledge

::: tank
Make sure both of your stances are on if not already.

The boss doesn't move this phase — he faces the highest-enmity target instead. Mechanics resolve based on his orientation, so always end each mechanic facing him **North** or **South** (**A** and **1** / **Red** waymarks) to help the rest of the party.
:::

::: healer
Study your heal and mit plan closely. This phase is intense, but absolutely doable first-try if you're focused and prepared.
:::

This phase cycles through **3 major mechanics** with **2 auto-attacks** in between. They're not mechanically complex, but they're a nerve check — hard-hitting and almost always lethal if executed incorrectly. See the cheatsheet for a mit plan overview, and the Mitigations section at the top of this page for a detailed plan by healer combo (including the transition).

::: info NOTE
Tank and DPS mitigations, plus H2's 30s cooldowns (Sacred Soil / Kerachole), are fairly non-negotiable — but there's flexibility with long healer cooldowns depending on the specific healer (e.g. AST may prefer Macrocosmos on Gigaflare 2, while WHM may prefer Bell on Akh Morn 2). If you're unsure where to use majors, check a PoV or log, or ask in #dsr-discussion in MUR.
:::

#### Flames / Ice of Ascalon

During each major cast, Dragon King Thordan imbues his swords with fire or ice. At the end of the cast:

| Imbue    | Position                                                 |
| :------- | :------------------------------------------------------- |
| **Fire** | Be **outside** his hitbox                                |
| **Ice**  | Be **inside** his hitbox (outermost ring = donut border) |

#### Trinity (autoattacks)

Between each mechanic, Dragon King Thordan performs 2 sets of 3 AOE auto-attacks:

| Target                 | Effect                                                                                                                                                         |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Highest enmity**     | Stacking **Dark Resistance Down** ^[Dark Resistance Down]                                                                                                      |
| **2nd highest enmity** | Stacking **Light Resistance Down** ^[Light Resistance Down:3135]                                                                                               |
| **Closest player**     | **Physical Vulnerability Up** ^[Physical Vulnerability Up] + both **Dark** ^[Dark Resistance Down] and **Light Resistance Down** ^[Light Resistance Down:3135] |

::: tank
After every 2 auto-attacks, swap aggro. Shirk won't always be up, so watch the enmity gauge and adjust your stance based on the DPS gap with your co-tank.
:::

Each non-tank player will take turns running to the middle under the boss to bait these autoattacks. The assumed order is:

Non-tank players take turns running to the middle to bait these autos:

| After      | Order   |
| :--------- | :------ |
| Exaflares  | D1 → D2 |
| Akh Morns  | D3 → D4 |
| Gigaflares | H1 → H2 |

::: info NOTE
If a designated bait player dies (e.g. D1 to an Exaflare), someone else can take the auto and swap order with them.
:::

#### Exaflare's Edge

3 sets of Exaflares spawn, lethal AOEs cascading in 3 directions per the indicating arrows. There's a dodge that reliably given the boss is facing north/south:

1. Move towards the boss's rear, in or out of his hitbox depending on fire/ice.
2. Note the beam of light in the center of the Exaflare indicator:

<img width="1873" height="1017" alt="image" src="https://github.com/user-attachments/assets/92f31290-52dc-4e64-be27-c366312ffc25" />

3. Run to that spot as soon as the first hit lands — some patterns are tight, so commit immediately.
4. After the next hit, run to the spot behind you, where the ground lines intersect:

<img width="974" height="790" alt="image" src="https://github.com/user-attachments/assets/52828b27-66a1-49ac-8c76-af00d3c10223" />

Stay here until all Exaflares pass, except for the tanks and D1, who move up opposite the party for the Trinity auto-attacks (while still watching Exaflare state to avoid stray AOEs). The main-enmity tank runs fully across to face the boss north/south; the second-enmity tank stands on either diagonal in front of the boss, away from the party but not overlapping their co-tank.

::: info NOTE
Sprint isn't mandatory but is extremely useful here. If the boss isn't facing **North** / **South**, do the first dodge the same way, and use the edge of the initial AOE marker closest to the wall as your reference point for the second — Yell at your tanks so they know to face the boss better next time.
:::

#### Akh Morn's Edge

Dragon King Thordan prepares 3 towers dealing hard-hitting multi-hit raidwide damage. An unsoaked tower explodes and wipes the party. Relative to his hitbox: 2 red towers spawn **North-West** and **North-East**, and a blue one spawns at his **South**.

::: info NOTE
The first Akh Morn's Edge is 5 sets of hits; each subsequent cast adds 1 extra set.
:::

| Tower          | Group      |
| :------------- | :--------- |
| **North-West** | H1, D1, D3 |
| **North-East** | H2, D2, D4 |
| **Rear**       | Both tanks |

Check whether the boss's swords are ice or fire:

- **Ice** → stand inside the hitbox in the tower and stay still.
- **Fire** → stand outside the hitbox in the tower, then move inside after the first hit to stay in heal range.

::: healer
For White Mages: Cure III will **not** reach the party — spam Medica I instead (precast Medica II for the regen). A Lily can be used here but save most for Gigaflares.
:::

#### Gigaflare's Edge

Dragon King Thordan will gradually spawn 3 proximity AoEs. Move opposite the first spawned AOE, and check the sword imbue.

::: warning
If it is **ice imbued**, you must be as close to the edge of the boss's hitbox as possible. If you are too far in you will risk dying to the proximity damage.
:::

<img width="967" height="686" alt="image" src="https://github.com/user-attachments/assets/c193bdfe-2cc1-4a66-bcea-432f104db655" />

Check where the second one spawns and after the first hit, you want to rotate opposite the 2nd one as a party at max-melee distance around the boss's hitbox. As each hit goes off, the party must quickly be topped up as even even with mitigation they are hard-hitting.

After all Gigaflares resolve, tanks keep rotating until the main-enmity tank reaches a **North** / **South** waymark, both refacing the boss for **Exaflares** and clearing space from the party for the **Trinity** autos.

#### Timeline

With all the mechanics out of the way, here is the full cycle of mechanics:

::: tank
As a reminder, remember to reface the boss either **North** or **South** (whichever is most convenient) during the autoattacks.

**WATCH AGGRO CAREFULLY FOR THE AUTOATTACKS** because if any of you die, it is **very** difficult to recover.
:::

::: healer
Generally speaking, **Akh Morn** 2 will be the heaviest to heal, as H2 typically won't have major cooldowns up for it per the mit plan.
:::

- Exaflare 1
- D1 autoattack -> D2 autoattack
- Akh Morn 1 (5 hits)
- D3 autoattack -> D4 autoattack
- Gigaflare 1
- H1 autoattack -> H2 autoattack
- Exaflare 2
- D1 autoattack -> D2 autoattack
- Akh Morn 2 (6 hits)
- D3 autoattack -> D4 autoattack
- Gigaflare 2
- H1 autoattack -> H2 autoattack
- Exaflare 3
- D1 autoattack -> D2 autoattack
- Akh Morn 3 (7 hits)
- D3 autoattack -> D4 autoattack
- Enrage sequence

#### Enrage Sequence

Dragon King Thordan will cast Morn Afah's Edge (no ice or fire here), which will spawn 3 towers in the same formation as the Akh Morn towers. These will kill anyone inside, but if unsoaked will just blow up the whole party. Once soaked, they will continue to repeat in quick succession until the party is wiped.

| Set | North-West | North-East | South |
| :-- | :--------- | :--------- | :---- |
| 1st | H1         | H2         | MT    |
| 2nd | D3         | D4         | OT    |

If the boss is still not dead by the third and final set, it is a wipe.
