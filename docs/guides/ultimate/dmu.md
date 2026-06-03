---
order: 7
fightID: DMU
title: Dancing Mad Ultimate
description: A Materia Raiding strategy guide for the Dancing Mad Ultimate raid in Final Fantasy XIV.
banner: /images/banners/DMU.webp
difficulty: Ultimate
expansion: Dawntrail
image: dmu-kefka.webp
authors: [Juno, Pipiro, MUR]
discussionLink:
---

## Foreword

This is a template for the upcoming ultimate raid. It will be added to as more information is learned throughout prog.

## Toolbox/Raidplan

Toolboxes are an interactive guide that allows you to click through each phase indiviudally and review the mechanics in a easy to understand manner.

<ActionGroup
    :actions=" [
        { title: 'Phase 1: Kefka (incomplete)', color: 'pink', href: 'https://raidplan.io/plan/WTwMeXxyjEv_UugX' }
    ]"
/>

## PoV Videos

Videos covering clears by different roles.

## Mitigation Plan

Mitigation Plan Spreadsheet

## Macros

::: details View All Macros

:::

## Cheatsheet

TBA

## Buff Timings

:::: timing-window
::: burst

:::
::: pot

:::
::::

## Waymarks

These can be imported using an XIV Launcher Plugin.

## Fight Writeup (W.I.P)

### Phase 1

### These will be prog strats!!! These more than likely will be changed as we prog and learn more about the ultimate.

Kefka will begin the fight with **Revolting Ruin III**, a hard hitting conal tank baster that cleaves twice. The 2nd hit will target the player with the **2nd highest** emnity.

#### Graven Image

Kefka will then cast **Graven Image**, and the Statue will tether all 4 players of a role (i.e. supports/DPS). This tether will cause the player to be knocked back from the statue by roughly half the arenas width.

Kefka will then cast Mystery Magic. Players will be marked with either a stack/spread marker, and Kefka will telegraph 2 quarter room cleaves. As well as this, 2 Rings will spawn around Kefka: one coloured red and the other blue. These **can** be in a random order. The **red ring** corresponds to the players overhead markers. The **blue ring** corresponds to the floor cleaves.

On these rings are 2 orbs. If these orbs have a **?** symbol inside them the players must resolve the **opposite** of what is indicated (i.e. a stack marker with a **?** will mean that everyone must spread). Both mechanics can be "fake" at the same time.

To resolve this, have all DPS players anchor East quadrants and all Support players West quadrants. The tethered players will have to ride their KB just before the mechanic resolves, so if they have to take a Northern quadrant they should move as far North as possible.

Immediately afterwards the Statue will shoot lasers at 2 DPS and 2 Support players, inflicting them with a **magic vulnerability up**, as well as spawning a tower underneath them.

All players will line up a conga-line as shown in the image below (see toolbox for now). After the lasers go off the non-laser players will soak the towers.

During the laser castbar, Kefka will cast **Double-Trouble Trap**. This will target a player from each role group and acts as a 4 person **enumeration(?) stack** that will knockback all non-debuff players away from the debuff player. Once the debuff goes off it will transfer to another random non-debuff player that was hit. This will propagate 3 times, the debuff lasting for 3s, 80s, and 50s.

~~As of right now it's unclear what this mechanic is for, as it simply disappears after the third "pass". We could potentially have to somehow carry this debuff into later phases but its unclear.~~

The debuff player will stand at max melee and the players of the same role will stand in front of them to be knocked through Kefka and across the arena.

Just before this knockback resolves, Kefka will begin to cast another **Mystery Magic**. He will telegraph the same ice quadrant cleaves from earlier, as well as two parallel **lightning** AOEs.
Simply determine which ones are fake and stand in the corresponding safespot after the knockback (there is plenty of time to adjust).

Kefka will then raise the platform and the statue will change, before casting a **Light of Judgement** raid-wide and a **Hyperdrive** tankbuster that hits 3 times.

Afterwards, Kefka will cast **Graven Image** again.

#### Graven Image II

Each role will either be tethered to the **right (yellow)** or the **left (purple)** of the statue. The purple statue will cast a pair stack on each tethered player that leaves a bubble on the floor, and the yellow statue will cast a spread AOE on each tethered player.

Spread players **cannot** place their spreads close to the bubbles as it will cause them to explode and wipe the raid.

At the same time as these tethers Kefka will yet again telegraph another fake/real ice quadrant cleave.

To resolve this mechanic we have light party 1 (MT/H1/D1/D3) stack all their tethers North and light party 2 (ST/H2/D2/D4) South, noting which role has the spread tether.

Each light party will take their stack at the very edge of the arena. The ranged spread players will then rotate CCW and the melee players will rotate CW to take their spread, whilst all non-spread players will stack behind Kefka.

Immediately following this Kefka will cast another Revolting Ruin III. The tank will take this north and the party will stay stacked South.

The statue will then indicate and resolve either a East/West cleave before tethering everyone again. These tethers are solved by placing the bubble directly in front of the first bubble. The spreads are resolved the same.

As the last spread resolves the Statue will indicate another East/West cleave. Because the 2nd **Double-Trouble Trap** is coming up, all DPS players will stack North of Kefka, and Supports South. The debuff player should stand closer to Kefka to launch each light party into the bubbles to soak them.

::: info NOTE
The soak window for the bubbles is quite small. They cannot be soaked outside of the window just after the KB goes off.
:::

Kefka will raise the platform once more, followed by another **Light of Judgement** / **Hyperdrive** combo.

#### Tele-Trouncing/Graven Image III

Kefka will assign each player with 2 arrow debuffs, one short (7s) and one long (10s). These debuffs will place a teleport pad on the floor that is **based on true north**. This means that no matter which direction the player is facing if they have an East arrow the arrow will always point East when placed. If 2 arrows of opposite directions are placed on eachother they will cancel out.

One role will get mixed debuffs (e.g. up/left arrow), whilst the other role gets 2 identical arrow debuffs.

The goal here is to utilize all the arrows. If all arrows are not utilized Kefka's voice lines will not change and P2 will not be clearable (? TBD).

All identical arrow players should move to the cardinal that results in their arrows making a "counter-clockwise" pattern with the other arrows, as seen below.

All mixed debuff players will have to place their arrows in such a way to form an "L" shape that will cause a player to move into the identical arrow player's teleport pads.

![](\images\ultimate\dmu-arrows.webp)

The Statue will then tether each role seperately once more. **Left (yellow)** will inflict each player with a **confused** debuff and right (purple) will inflict each player with a small AOE and a **sleep** debuff.

To resolve this, we have MT/D1 North, H2/D4 East, ST/D2 South, and H1/D3 West. The yellow tether/confused players will stand just in front of the teleporter pad corresponding with their cardinal (such that they will be forced to walk along all 4)The purple tether/sleep players will stand on the bosses hitbox **behind the teleporter pad** on their cardinal. This will result in the confused player being unable to reach and auto-attack the sleep player because they will be teleported along each pad.

Kefka will then cast one more **Mystery Magic**, telegraphing the same lightning AOEs as before and spread/stack markers on each role group. In addition, the Statue will also cast a real/fake gaze.

DPS players will stack/spread North of Kefka, and the support players will stack/spread South of Kefka.

If Kefka is below 15% HP at this point he will then transition to Phase 2.

If above 15%, Kefka will then become untargetable and cast a final **Light of Judgement** that wipes the raid.
