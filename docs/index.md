---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Materia Raiding
description: Materia Raiding is the home of Materia Datacenter Resources for FFXIV raiding. In-depth guides and resources for all high-end raiding content designed for the Materia Datacenter community.

hero:
    name: "Welcome to Materia Raiding"
    tagline: Materia Raiding is the home of Materia Datacenter Resources for FFXIV raiding. Here you will find all resources for your Ultimate, Savage and High-End Raiding needs.
    actions:
        - theme: brand
          text: Materia Raiding Discord
          link: "https://discord.gg/EySn5dRj65"
        - theme: brand
          text: Materia Ultimate Raiding Discord
          link: "https://discord.gg/ArZz3b8PZV"
    image:
        src: /images/materia-logo-large.webp
        alt: VitePress

features:
    - icon: 🌱
      title: The Beginners Guide to Raiding
      details: A comprehensive handbook to raiding in FFXIV for new players.
      link: "/resources/beginnersguide"
    - icon: ⛵
      title: The Visitor's Guide to Materia Raiding
      details: A complete guide for raiders visiting the Materia Datacenter.
      link: "/resources/visitorsguide"
---

<GuideHome />

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.discordapp.com/icons/895516967543390249/f981380b8188dbde76b5ccac6d5ade0b.webp',
    name: 'Materia Raiding',
    title: 'Community Server',
    links: [
      { icon: 'discord', link: 'https://discord.gg/EySn5dRj65' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/icons/944115415385247784/c938ea9e596f0f5e107c2802c660fe98.webp',
    name: 'Materia Ultimate Raiding',
    title: 'Community Server',
    links: [
      { icon: 'discord', link: 'https://discord.gg/ArZz3b8PZV' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/211624816619290624/57e2b10fdc8c5b525ba3bbefef027696?size=256',
    name: 'Em',
    title: 'Creator & Lead Developer',
    desc: "@mgram"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/310741793668857859/bbc46b6d7a3a29cf37c54f7f628e76ef?size=256',
    name: 'Geel',
    title: 'Developer',
    desc: "@huderon"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/163174071436050433/7bcf005b850631c96d0d224f2e3f18c8?size=256',
    name: 'Juno',
    title: 'Writer',
    desc: "@junocatto"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/168710722346418177/8aed64ed3e0920bbc6e11753ffc78fbb.webp?size=128',
    name: 'Noz',
    title: 'Writer',
    desc: "@happy.gorl.lucky"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/315713799778992129/a_3dc1db30e26b7878144be917b0f75790?size=256',
    name: 'Pod',
    title: 'Writer',
    desc: "@pod153"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/715021806033174590/f2ae42f01f6d5ccc28268afd4318abe5.webp?size=128',
    name: 'Lumi',
    title: 'Editor',
    desc: "@lumi.starflare"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/120703775139823618/45f1ecd1af82188d8b8119fa1eb547a1.webp?size=128',
    name: 'Kobe',
    title: 'Content Creator',
    desc: "@kobe_."
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/546216982219980800/807a2bcb1409bf1615df38495bcf2ece.webp?size=128',
    name: 'Ikuya',
    title: 'Content Creator',
    desc: "@gardevoir101"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/173223638248587265/2cf2eb006d677fc4d38ebe4e3a610c40.webp?size=128',
    name: 'Pipiro',
    title: 'Content Creator',
    desc: "@lightprizym"
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Key Contributors
    </template>
    <template #lead>
      Materia Raiding is a team project by a collection of dedicated members of the Materia Raiding Community. 
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
