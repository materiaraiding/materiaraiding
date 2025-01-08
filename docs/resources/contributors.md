---
order: 4
title: Contributors
layout: page
---

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
      { icon: 'discord', link: 'https://discord.gg/mur' },
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
    desc: "@ranciddax"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/120703775139823618/374c90a3f6050676e6f75a3825717e7e.png?size=256',
    name: 'Kobe',
    title: 'Developer & Content Creator',
    desc: "@huderon"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/168710722346418177/e5baaf6a7f7b40824076c1409da1f1c8.png?size=256',
    name: 'Noz',
    title: 'Writer',
    desc: "@happy.gorl.lucky"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/715021806033174590/3ef2d147d8af04f93a03966e53ca46f4.png?size=256',
    name: 'Lynx Starflare',
    title: 'Editor',
    desc: "@lynx.starflare"
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/160236542634229760/db6db8a084dfde0ce5aa6c6ab4ec5470.png?size=256',
    name: 'Kurume',
    title: 'Writer',
    desc: "@Kurume"
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