# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/35d72d2e-6e25-40e5-9b0c-c0d1a7c1b727

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/35d72d2e-6e25-40e5-9b0c-c0d1a7c1b727) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

### Styling and best practices

- **Tailwind container** – the `tailwind.config.ts` file centers the container and
  applies a default padding of `2rem` for consistent spacing across screen sizes.
- **PostCSS Autoprefixer** – `postcss.config.js` includes Autoprefixer to
  automatically add vendor prefixes during builds.
- **Global styles** – `src/index.css` defines CSS custom properties, sets global
  typography, and enables smooth scrolling.
- **Section helper** – the `.section-container` class applies responsive
  horizontal padding (`px-4 sm:px-6 lg:px-8`) and vertical padding
  (`py-7 md:py-10`) to sections, ensuring consistent spacing.
- **Padding utilities** – inline pixel values have largely been replaced with
  Tailwind classes such as `py-3 px-6` for better scalability.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/35d72d2e-6e25-40e5-9b0c-c0d1a7c1b727) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

## Dependency maintenance with Renovate

This project uses [Renovate](https://github.com/renovatebot/renovate) to keep dependencies up to date. Run `npm run renovate` to check for updates.
