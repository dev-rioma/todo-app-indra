This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# To-Do List Application Documentation

This document provides an overview of the To-Do List application, built with Next.js 12.

## Overview

The To-Do List application is a simple web application that allows users to manage their tasks. It provides the following functionalities:

- **Adding Tasks:** Users can add new tasks to their list using a form.
- **Viewing Tasks:** Users can view all their tasks in a list format.
- **Marking Tasks as Complete:** Users can mark tasks as completed by clicking on them.
- **Deleting Tasks:** Users can delete tasks from the list.
- **Responsive Design:** The application is designed to be responsive and adapt to different screen sizes.

## Components

The application is composed of the following components:

- **`app/page.tsx`:** This is the main page component, responsible for fetching the initial to-do list data and rendering the `TodoApp` component.
- **`components/todo/TodoApp.tsx`:** This component manages the state of the to-do list and handles the interactions between the other components.
- **`components/todo/TodoForm.tsx`:** This component renders a form for adding new tasks.
- **`components/todo/TodoItem.tsx`:** This component renders a single to-do item in the list.
- **`types/todo.ts`:** This file defines the `Todo` interface, which is used to represent a single task.

## Data Fetching

The application fetches the initial to-do list data using the `fetchTodos` function in `app/page.tsx`. This function makes a request to the `https://jsonplaceholder.typicode.com/todos` API and retrieves a list of tasks.

## Styling

The application uses Tailwind CSS for styling. This framework provides a set of utility classes that can be used to style components easily.

## Usage

To use the application, simply open it in your web browser. You can then start adding, viewing, and managing your tasks.

## Future Enhancements

Possible future enhancements for this application include:

- **Persistence:** Implementing a way to persist the to-do list data, so it is not lost when the browser is closed.
- **Editing Tasks:** Allowing users to edit existing tasks.
- **Filtering and Sorting:** Providing options to filter and sort the tasks based on different criteria.
- **User Authentication:** Adding user authentication to allow users to manage their own private to-do lists.

## Development setup

This project can be developed with the Next.js 12 framework. 

1. Install the project dependencies:

 - **next:** The Next.js framework for building React applications.
    - **react:** The core React library for building user interfaces.
    - **react-dom:** Provides the necessary methods for rendering React components into the DOM.
    - **autoprefixer:** Automatically adds vendor prefixes to CSS, ensuring compatibility across browsers.
    - **postcss:** A tool for transforming CSS with JavaScript plugins.
    - **tailwindcss:** A utility-first CSS framework for rapidly building custom user interfaces.


Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
