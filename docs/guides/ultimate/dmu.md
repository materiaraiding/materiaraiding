---
order: 7
fightID: DMU
title: Dancing Mad Ultimate
description: A Materia Raiding strategy guide for the Dancing Mad Ultimate raid in Final Fantasy XIV.
banner: /images/banners/DMU.webp
difficulty: Ultimate
expansion: Dawntrail
image: dmu-kefka.webp
authors: [Juno, Pipiro, Eely, Ikuya, MUR]
discussionLink:
---

## Toolbox/Raidplan

Toolboxes are an interactive guide that allows you to click through each phase indiviudally and review the mechanics in a easy to understand manner.

<ActionGroup
    :actions=" [
        { title: 'Phase 1: Kefka (to be fully tested)', color: 'pink', href: 'https://raidplan.io/plan/BCd8L1CiFV-80hru' },
        { title: 'Phase 2: God Kefka (W.I.P)', color: 'blue', href: 'https://raidplan.io/plan/YLTg5zd8jWGDxI9s'}
    ]"
/>

## PoV Videos

Videos covering clears by different roles.

## Mitigation Plan

By Ikuya Kirishima

::: warning IMPORTANT
The mit sheets is **NOT** intended to be taken as gospel, but rather a general guideline to how you can set up your CDs through the fight. **Talk with your party** and work out what CD timings you are using together.

[**I understand, take me to the mit sheet**](https://docs.google.com/spreadsheets/d/10C3ytfH3irHqkb45rchIq5oqdAs-v_OKTj57M-Twi3k/edit?usp=sharing)
:::

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

Throughout Phase 1, the Statue behind Kefka will have 3 candles that need to be lit to successfully clear Phase 2 later. To light these candles the party must sucessfully:

- Utilize all **Double-Trouble Trap** debuffs without letting them fall off.
- Succesfully soak all the gravity bubbles in **Graven Image II**
- Place and utilize all 16 arrow debuffs in **Tele-Trouncing**

Solving these will be included in the guide.

Kefka will begin the fight with **Revolting Ruin III**, a hard hitting conal tank baster that cleaves twice. The 2nd hit will target the player with the **2nd highest** emnity.

#### Graven Image

Kefka will then cast **Graven Image**, and the Statue will tether all 4 players of a role (i.e. supports/DPS). This tether will cause the player to be knocked back from the statue by roughly half the arenas width.

Kefka will then cast Mystery Magic. Players will be marked with either a stack/spread marker, and Kefka will telegraph 2 quarter room cleaves. As well as this, 2 Rings will spawn around Kefka: one coloured red and the other blue. These **can** be in a random order. The **red ring** corresponds to the players overhead markers. The **blue ring** corresponds to the floor cleaves.

On these rings are 2 orbs. If these orbs have a **?** symbol inside them the players must resolve the **opposite** of what is indicated (i.e. a stack marker with a **?** will mean that everyone must spread). Both mechanics can be "fake" at the same time.

To resolve this, have all DPS players anchor East quadrants and all Support players West quadrants. The tethered players will have to ride their KB just before the mechanic resolves, so if they have to take a Northern quadrant they should move as far North as possible.

Immediately afterwards the Statue will shoot lasers at 2 DPS and 2 Support players, inflicting them with a **magic vulnerability up**, as well as spawning a tower underneath them.

All players will line up a conga-line as shown in the image below (see toolbox for now). After the lasers go off the non-laser players will soak the towers.

During the laser castbar, Kefka will cast **Double-Trouble Trap**. This will target a player from each role group and acts as a 4 person **enumeration(?) stack** that will knockback all non-debuff players away from the debuff player. Once the debuff goes off it will transfer to another random non-debuff player that was hit. This will propagate 3 times, the debuff lasting for 3s, 80s, and 50s.

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

Each light party will take their stack at the very edge of the arena. The ranged players will rotate CCW regardless if they have spread or not, and the melees will spread around Kefka.

Immediately following this Kefka will cast another Revolting Ruin III. The tank will take this north and the party will stay stacked South.

The statue will then indicate and resolve either a East/West cleave before tethering everyone again. These tethers are solved by placing the bubble directly in front of the first bubble. The spreads are resolved the same as the first time, however the melee players should make sure that the tethers are **East/West** of Kefka to avoid clipping a bubble..

As the last spread resolves the Statue will indicate another East/West cleave. Because the 2nd **Double-Trouble Trap** is coming up, all Support players will stack inside Kefka's hitbox to the North, and DPS South. The debuff player should stand closer to Kefka to launch each light party into the bubbles to soak them.

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

::: info NOTE
Parties have had more success with placing these arrows on the intercardinals to allow for the knockbacks to be resolved N/S or E/W without worry that players will accidentally soak an arrow.
:::

Once again we will resolve the **Double-Trouble Trap** by having the Support players take their knockback from the South-East, and the DPS South-East.

The Statue will then tether each role seperately once more. **Left (yellow)** will inflict each player with a **confused** debuff and right (purple) will inflict each player with a small AOE and a **sleep** debuff.

To resolve this, we have MT/D3 North, H2/D2 East, ST/D4 South, and H1/D1 West. The yellow tether/confused players will stand just in front of the teleporter pad corresponding with their cardinal (such that they will be forced to walk along all 4)The purple tether/sleep players will stand on the bosses hitbox **behind the teleporter pad** on their cardinal. This will result in the confused player being unable to reach and auto-attack the sleep player because they will be teleported along each pad.

Kefka will then cast one more **Mystery Magic**, telegraphing the same lightning AOEs as before and spread/stack markers on each role group. In addition, the Statue will also cast a real/fake gaze.

Support players will stack/spread North of Kefka, and the DPS players will stack/spread South of Kefka.

If Kefka is below 15% HP at this point he will then transition to Phase 2.

If above 15%, Kefka will then become untargetable and cast a final **Light of Judgement** that wipes the raid.

### Phase 2

God Kefka will lower down from the sky and begin the phase by casting **Ultimate Embrace** a shared tankbuster. This is followed by a hard-hitting raidwide:

#### Forsaken

Supports will pre-position themselves to the West, lining up North to South: H1 MT OT H2

Dps will mirror this to the East and line up: D3 D1 D2 D4

(lineups subject to change)

Each role will then be assigned either **AOEs** or **Cones**. One player from each role will also be assigned a **3-Person Enumeration Stack**.

It is important to note where you are in the line up as this will determine how you will resolve your mechanic.

Each player will also be inflicted with 4 stacks of **Spells' Trouble**. The goal of this mechanic is to gradually remove every stack by resolving your assigned mechanic.

Kefka will then place 2 meteor towers on the floor adjacent to eachother. These will be treated as **relative South**.

These towers will **activate** any mechanics that are in them when they resolve.

Every **odd** set of towers will give the 4 people that soaked them 2 cones, and 2 AOE debuffs to be activated later.

Every **even** set of towers will give the 4 people that soaked them 2 stacks, 1 cone, and 1 AOE debuff to be activated later.

##### First Towers

The first set of towers will be resolved by **both** stack players, one **cone** and one **AOE** player.

W.I.P while strats get hashed out
