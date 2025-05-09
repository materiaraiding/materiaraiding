---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

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

<PageList/>

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
    name: 'Em Gram',
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
    name: 'Juno Dax',
    title: 'Writer',
    desc: "@junocatto"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/168710722346418177/21ee876a06956a5b4f21893535560590?size=256',
    name: 'Noz Leafhill',
    title: 'Writer',
    desc: "@happy.gorl.lucky"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/715021806033174590/b183fe66bd2aec1d2c1aee6cb7035625?size=256',
    name: 'Lynx Starflare',
    title: 'Editor',
    desc: "@lynx.starflare"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/120703775139823618/3b46661783b34a9f29ccd0c518c96e3b?size=256',
    name: 'Kobe',
    title: 'Content Creator',
    desc: "@kobe_."
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/546216982219980800/ebd0a5aec0469fe45f567194b7f8d578.png?size=256',
    name: 'Ikuya Kirishima',
    title: 'Content Creator',
    desc: "@gardevoir101"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/173223638248587265/106677284cc1260accfa778b37417894.png?size=256',
    name: 'Pipiro Piro',
    title: 'Content Creator',
    desc: "@lightprizym"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/217912740180656139/00af26490ffa2a4f81a97f1f82a3b5ed.png?size=256',
    name: 'Melvin',
    title: 'Developer',
    desc: "@melvinhk"
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
