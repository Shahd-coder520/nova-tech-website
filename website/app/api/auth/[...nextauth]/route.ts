import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/lib/db';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Search for the user in the database using the provided email
        const user = db.prepare('SELECT * FROM users WHERE email = ?').get(credentials.email) as any;

        // if not found, return null
        if (!user) {
          return null;
        }

        // Check if the provided password matches the stored password
        if (credentials.password !== user.password) {
          return null;
        }

        // If the user is found and the password matches, return the user object
        return {
          id: user.id.toString(), // Convert id to string as NextAuth expects a string
          name: user.name,
          email: user.email,
          role: user.role,
        };
      }
    })
  ],
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  pages: {
    signIn: "/login", // Redirect to the custom login page
  },
  // Add a secret for NextAuth to sign the JWT tokens
  secret: "super-secret-key-for-nova-website-123", 
});

export { handler as GET, handler as POST };