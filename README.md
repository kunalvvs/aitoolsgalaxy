# AI Tools Galaxy

A web application that provides a curated list of AI tools, categorized for easy exploration.

## Key Features

- Extensive list of AI tools across various categories.
- Search functionality to quickly find specific tools.
- Modern, responsive, and visually appealing user interface.
- Built with Vite, React, TypeScript, Tailwind CSS, and Shadcn UI.
- Includes unique UI elements like a custom cursor and galaxy-themed animations.

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-tools-galaxy.git
   cd ai-tools-galaxy
   ```
   (Note: Replace `your-username/ai-tools-galaxy.git` with the actual repository URL if available, otherwise use a placeholder)
2. Install dependencies:
   ```bash
   npm install
   ```
   (or `yarn install`)
3. Run the development server:
   ```bash
   npm run dev
   ```
   This will start the app, typically at `http://localhost:5173`.

## Available Scripts

You can run these scripts using `npm run <scriptname>`:

- `dev`: Starts the development server using Vite. Ideal for local development with hot reloading.
- `build`: Builds the application for production. The output is typically in the `dist` folder.
- `lint`: Lints the codebase using ESLint to check for code quality and style issues.
- `preview`: Serves the production build locally to preview before deployment.

## Project Structure

```
ai-tools-galaxy/
├── public/             # Static assets (favicon, images, robots.txt)
├── src/                # Application source code
│   ├── components/     # Reusable React components (UI elements, layout)
│   │   ├── ui/         # Shadcn UI components
│   ├── data/           # Tool data, categorized
│   │   └── tools/      # Individual tool category files
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions (e.g., cn for classnames)
│   ├── pages/          # Top-level page components (e.g., Index, NotFound)
│   ├── App.tsx         # Main application component, sets up routing
│   ├── main.tsx        # Entry point of the React application
│   └── index.css       # Global styles
├── .gitignore          # Files and folders to be ignored by Git
├── package.json        # Project metadata, dependencies, and scripts
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript compiler options
└── README.md           # This file
```

## Contributing

Contributions are welcome! If you'd like to add a new AI tool or improve the application, please follow these guidelines.

### Adding a New Tool

1.  **Locate or Create a Category File:** Tool data is organized by category in `src/data/tools/`. For example, text generation tools are in `src/data/tools/textGenerationTools.ts`. If your tool fits an existing category, open that file. If it's a new category, create a new `[newCategoryName]Tools.ts` file in this directory.
2.  **Define the Tool Data:** Each tool is an object adhering to the `ToolData` interface (defined in `src/components/ToolCard.tsx` but imported in the data files). A typical tool object looks like this:
    ```typescript
    {
      id: "unique-tool-id", // Must be unique
      name: "Awesome AI Tool",
      category: "Text Generation", // Should match the category of the file
      description: "This tool does amazing things with AI.",
      url: "https://awesomeaitool.com",
      imageUrl: "/assets/tools/awesomeaitool.png", // Optional: path to logo in public/assets/tools/ or use placeholder
      pricing: "Freemium", // e.g., "Free", "Paid", "Subscription", "Freemium"
      tags: ["ai", "text", "productivity"],
      featured: false // Optional: true if featured
    }
    ```
3.  **Add to the Exported Array:** Add your new tool object to the array that is exported from the category file (e.g., `textGenerationTools`).
4.  **Update Main Data File:** If you created a new category file, import it and include its exported array in `src/data/tools/index.ts`.

### General Guidelines

-   Ensure your code lints successfully (`npm run lint`).
-   Follow the standard GitHub flow: Fork the repository, create a new branch for your feature or fix, and submit a pull request.

## License

This project is currently not licensed. Please add a license file (e.g., MIT, Apache 2.0) to define how others can use, modify, and distribute the code.
