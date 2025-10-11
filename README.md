# Mode - Issue Tracking System

Modern and intuitive issue tracking application for managing tasks and projects efficiently. Built with cutting-edge web technologies to provide a seamless user experience.

## ✨ Features

- **User Authentication** - Secure JWT-based authentication with bcrypt password hashing
- **Issue Management** - Complete CRUD operations for issues with real-time updates
- **Status Tracking** - Track issues through multiple stages: Backlog, Todo, In Progress, Done
- **Priority Levels** - Organize work by priority: Low, Medium, High
- **Modern UI/UX** - Clean, responsive interface with dark mode support
- **Real-time Feedback** - Toast notifications for user actions
- **Type Safety** - Full TypeScript implementation for robust code
- **Form Validation** - Client and server-side validation using Zod

## 🛠️ Tech Stack

### Core

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[React 19](https://react.dev/)** - UI library with latest features

### Database & ORM

- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe SQL ORM
- **[Neon Database](https://neon.tech/)** - Serverless PostgreSQL
- **PostgreSQL** - Production-ready relational database

### Authentication & Security

- **[Jose](https://github.com/panva/jose)** - JWT token management
- **[bcrypt](https://github.com/kelektiv/node.bcrypt.js)** - Password hashing
- **[Zod](https://zod.dev/)** - Schema validation

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Modern icon library
- **[React Hot Toast](https://react-hot-toast.com/)** - Toast notifications

### Developer Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Database migrations
- **[tsx](https://github.com/privatenumber/tsx)** - TypeScript execution

## 📋 Prerequisites

Before running this application, ensure you have:

- **Node.js** 18.17 or higher
- **npm** or **yarn** package manager
- **PostgreSQL database** (or Neon account for serverless PostgreSQL)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd next.js-fundamentals
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@host:port/database"

# JWT Secret (minimum 32 characters)
JWT_SECRET="your-super-secure-jwt-secret-key-min-32-chars"

# Node Environment
NODE_ENV="development"
```

**Note:** For production, use a strong, randomly generated JWT_SECRET and set NODE_ENV to "production".

### 4. Database Setup

Push the database schema to your database:

```bash
npm run db:push
```

To open Drizzle Studio (database GUI):

```bash
npm run db:studio
```

### 5. Seed Database (Optional)

Populate your database with sample data:

```bash
npm run seed
```

### 6. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes group
│   │   ├── signin/               # Sign in page
│   │   └── signup/               # Sign up page
│   ├── (marketing)/              # Marketing pages group
│   │   ├── features/             # Features page
│   │   ├── pricing/              # Pricing page
│   │   └── faq/                  # FAQ page
│   ├── actions/                  # Server actions
│   │   ├── auth.ts              # Authentication actions
│   │   └── issues.ts            # Issue CRUD actions
│   ├── api/                     # API routes
│   │   └── user/                # User API endpoints
│   ├── components/              # React components
│   │   ├── ui/                  # Reusable UI components
│   │   ├── IssueForm.tsx        # Issue creation/edit form
│   │   ├── IssueCard.tsx        # Issue display card
│   │   └── Navigation.tsx       # App navigation
│   ├── dashboard/               # Dashboard pages
│   ├── issues/                  # Issue management pages
│   │   ├── [id]/                # Dynamic issue pages
│   │   │   ├── edit/            # Edit issue page
│   │   │   └── page.tsx         # Issue detail page
│   │   └── new/                 # Create issue page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── db/                          # Database configuration
│   ├── schema.ts                # Drizzle schema definitions
│   └── index.ts                 # Database connection
├── lib/                         # Utility libraries
│   ├── auth.ts                  # Authentication utilities
│   ├── dal.ts                   # Data access layer
│   ├── types.ts                 # TypeScript types
│   └── utils.ts                 # Helper functions
├── scripts/                     # Utility scripts
│   └── seed.ts                  # Database seeding script
└── public/                      # Static assets
```

## 🎯 Key Features Explained

### Authentication System

- JWT-based stateless authentication
- Secure password hashing with bcrypt (10 salt rounds)
- 7-day token expiration with auto-refresh
- HTTP-only cookies for enhanced security

### Issue Management

- **Create**: Add new issues with title, description, status, and priority
- **Read**: View all issues in a organized dashboard
- **Update**: Edit issue details and track progress
- **Delete**: Remove completed or obsolete issues

### Database Schema

- **Users**: Stores user credentials and metadata
- **Issues**: Tracks all issue details with relationships to users
- Uses PostgreSQL enums for status and priority fields

## 🔧 Available Scripts

| Command             | Description                    |
| ------------------- | ------------------------------ |
| `npm run dev`       | Start development server       |
| `npm run build`     | Build production application   |
| `npm run start`     | Start production server        |
| `npm run lint`      | Run ESLint code linting        |
| `npm run db:push`   | Push database schema changes   |
| `npm run db:studio` | Open Drizzle Studio GUI        |
| `npm run seed`      | Seed database with sample data |

## 🌐 Deployment

### Deploy to Vercel

The easiest way to deploy this application:

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically detect Next.js and configure optimal settings.

### Environment Variables for Production

Ensure these are set in your production environment:

- `DATABASE_URL` - Production database connection string
- `JWT_SECRET` - Strong secret key (min 32 characters)
- `NODE_ENV` - Set to "production"

## 🔐 Security Considerations

- Passwords are hashed using bcrypt before storage
- JWT tokens are stored in HTTP-only cookies
- CSRF protection through SameSite cookie policy
- Input validation on both client and server
- SQL injection prevention via Drizzle ORM
- Environment variables for sensitive data

## 🎨 UI/UX Features

- **Responsive Design** - Works seamlessly on all devices
- **Dark Mode Support** - Built-in dark theme
- **Loading States** - Skeleton screens and loading indicators
- **Error Handling** - User-friendly error messages
- **Toast Notifications** - Real-time feedback for actions
- **Keyboard Navigation** - Accessible keyboard shortcuts

## 📝 API Routes

### User API

- `GET /api/user` - Fetch current user information

Additional API routes can be added in the `app/api` directory.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Database powered by [Neon](https://neon.tech/)
- Icons from [Lucide](https://lucide.dev/)
- UI inspired by modern project management tools

---

**Mode** - Streamline your workflow, track progress efficiently.
