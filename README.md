# Projekt Neurologie Website

[![.github/workflows/website-deploy-sftp.yml](https://github.com/DiplomprojektNeurologie/projekt-webseite/actions/workflows/website-deploy-sftp.yml/badge.svg)](https://github.com/DiplomprojektNeurologie/projekt-webseite/actions/workflows/website-deploy-sftp.yml) [![https://project.neurologie.tech status](https://img.shields.io/website?down_message=offline&style=plastic&up_message=online&url=https%3A%2F%2Fproject.neurologie.tech)](https://project.neurologie.tech)

### Commands

All commands are run from the root of the project, from a terminal. `[package-manager]` can be either `npm`, `pnpm` or `yarn` but should be held consistent:

| Command                         | Action                                                                           |
| :------------------------------ | :------------------------------------------------------------------------------- |
| `[package-manager] install`     | Installs dependencies                                                            |
| `[package-manager] run dev`     | Starts local dev server at `localhost:3000`. In vscode this is set to the default build task (per default bound to `CTRL+SHIFT+B`)|
| `[package-manager] run check`   | Checks the site for Typescript mistakes etc.                                     |
| `[package-manager] run build`   | Build your production site to `./dist/`. `check` is recommended before this step |
| `[package-manager] run preview` | Preview your build locally, before deploying                                     |

### Deploy

All new commits to the `main` branch will automatically be built and uploaded to the server. Please only push to the `dev` branch or to a temporary subbranch of `dev` (when multiple people are working on the project) as this will allow you to push multiple changes to Github without triggering a build each time (our build pipeline is limited to 2000 build minutes per month).

## License

**AstroWind** (the template) is licensed under the Unlicense license — see the [LICENSE](https://github.com/onwidget/astrowind/blob/main/LICENSE.md) file for details.
