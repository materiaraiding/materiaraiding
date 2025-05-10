---
title: About
layout: about
nav_order: 2
permalink: /about
---

# Materia Raiding Website

Materia Raiding is a community driven project to collate the various guides and tools created for raiding in the FF14 Materia Datacenter.

This [Github Repository](https://github.com/materiaraiding/materiaraiding) is for the Materia Raiding website, a Github Pages site built with Jekyll using the "Just the Docs" template. The goal is to create a comprehensive tool with all guides for current Savage and Ultimate content in one consistent open-source website. 

As this website is built using an open-source github repository, anyone can contribute to the project with changes using the typical Github Pull-Request Workflow, please see the instructions below. Pull requests will be reviewed and merged by our team when submitted.

If you are not comfortable with editing content with github, you can join the conversation and suggest changes to us at the Materia Raiding Discord server. 

[Materia Raiding Discord](https://discord.gg/EySn5dRj65)

[![GitHub Pages Deployment](https://github.com/materiaraiding/materiaraiding/actions/workflows/pages.yml/badge.svg)](https://github.com/materiaraiding/materiaraiding/actions/workflows/pages.yml)

## How to Contribute
Make a **Fork** of the project and do your edits in the fork, you can then create a **Pull Request** to merge your edits back into the main repository.

First, login to github, you need an account to make changes.

- Make a Fork using the Fork Button on the Materia Raiding Repo Page (fork is like your own copy of the website)
  ![](https://github.com/materiaraiding/materiaraiding-old/assets/85346345/3bb113b8-bdd6-4463-b597-cb0e9be5227c)

- Make Changes on your Fork, edit files and commit the changes to your Fork. You can edit the files directly in the web browser with the Edit Button. Then "Commit Changes" to save them to your fork.
  ![](https://github.com/materiaraiding/materiaraiding-old/assets/85346345/041b63df-2449-430c-8d91-07fbe0b9a442)

- When you have completed your changes, use the "Contribute" button on your Fork Page to create a Pull Request, this submits it back to the main repo for us to approve the changes.
  ![](https://github.com/materiaraiding/materiaraiding-old/assets/85346345/fde900bb-48e3-4be0-8518-5c02d04b1fa7)

- Once your pull request is approved, your changes will appear on the website. It will take 5-10 mins for the system to render the new changes. 

If you get stuck, reach out to "mgram" in MR or MUR Discords.

## Local Development

For easy development you can run the website locally on your computer.

### Prerequisites

- Node.js 22.15 LTS
- Git

1. Install Node.js 22.15 LTS from [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads)
2. Reboot after installing Node.js
3. Clone the repository to your local machine with git
4. Open a terminal and navigate to the cloned repository
5. Run `npm install` to install the required packages
6. Run `npm run docs:dev` to start the local server
7. Open your web browser and navigate to `http://localhost:5173` to view the website and see your changes live

## Pages
Each page is a single Markdown File (.md) which can be located anywhere in the root folder. Each page begins with a header to specify the page name and details, this will not appear in the final page.

{% include image.html path="https://github.com/The-Seat-of-Namazu/namazu.tools/assets/85346345/ea33a705-6501-4a46-a6c8-155dc35e201c"  %}

After this, you can use Markdown or HTML formatting to build out the page. Take a look at some of the [existing pages](https://github.com/The-Seat-of-Namazu/namazu.tools/blob/main/top.md?plain=1) for an example. 

Here is some reference guides for the different types of formatting you can use:

[Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)

This website uses Just-The-Docs, a website generating Jekyll theme that can create special custom components using simple tags inside the page. You can read more about how these work with the link below.
[Just-The-Docs Documentation](https://just-the-docs.github.io/just-the-docs/docs/ui-components)

# Further help
If your interested with helping on this project, you can get involved and join the discussion in the [Materia Raiding Discord](https://discord.gg/EySn5dRj65)
