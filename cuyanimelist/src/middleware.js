import { matchesMiddleware } from "next/dist/shared/lib/router/router"

export { default } from "next-auth/middleware"

export const config = { matcher: ["/user/:path*"]}
