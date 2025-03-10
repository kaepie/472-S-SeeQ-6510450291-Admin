import { createCookie, redirect, type Cookie, type LoaderFunctionArgs } from "react-router";

const ENV: string = process.env.ENV as string;
const BACKEND_URL: string = process.env.BACKEND_URL as string;

export const authCookie: Cookie = createCookie("auth", {
  path: "/",
  sameSite: "lax",
  maxAge: 60 * 60 * 24,

  httpOnly: ENV !== "PRODUCTION",
  secure: ENV === "PRODUCTION",
  secrets: [BACKEND_URL]
});

export interface AuthCookieProps {
  token: string;
  user_id: string;
  role: string;
}

export async function getAuthCookie({ request }: {request: Request}): Promise<AuthCookieProps> {
  const cookie = request.headers.get("Cookie");
  const auth = await authCookie.parse(cookie);
  if(!auth) throw redirect("/login");
  return auth;
}