import {
  OAuthStrategy as ClerkOAuthStrategy,
  SetSession,
  SignUpResource,
  SignInResource,
} from "@clerk/types";

export type OAuthStrategy = ClerkOAuthStrategy;

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use Vercel URL

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export const handleOAuthSignUp = async (
  strategy: OAuthStrategy,
  setSession: SetSession,
  signUp: SignUpResource
) => {
  try {
    await signUp.authenticateWithRedirect({
      strategy,
      redirectUrl: `${getBaseUrl()}/signup/sso-oauth/${strategy}`,
      redirectUrlComplete: `${getBaseUrl()}/signup/sso-oauth/${strategy}`,
    });

    // Get session
    const { createdSessionId } = signUp;
    if (!createdSessionId) {
      throw "Something went wrong during the sign-up flow. Please ensure that all sign-up requirements are met.";
    }
    await setSession(createdSessionId);
  } catch (err) {
    console.log(JSON.stringify(err, null, 2));
    console.log("Error signing up with OAuth on the web", err);
  }
};

export const handleOAuthSignIn = async (
  strategy: OAuthStrategy,
  _setSession: SetSession,
  signIn: SignInResource
) => {
  try {
    signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: `${getBaseUrl()}/signup`,
      redirectUrlComplete: `${getBaseUrl()}/`,
    });
  } catch (err) {
    console.log(JSON.stringify(err, null, 2));
    console.log("Error signing in with OAuth on the web", err);
  }
};
