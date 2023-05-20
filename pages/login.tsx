import { Center } from '@chakra-ui/react'
import { BackgroundGradient } from '../components/gradients/background-gradient'
import { PageTransition } from '../components/motion/page-transition'
import { Section } from '../components/section'
import { useState } from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

import {
  OAuthStrategy,
} from "../utils/auth.web";

interface Props {
  type: "sign-up" | "sign-in";
  handleOAuthWithPress: (strategy: OAuthStrategy) => void;
  handleEmailWithPress: (emailAddress: string, password: string) => void;
}

export const SignUpSignInComponent: React.FC<Props> = ({
  type,
  handleOAuthWithPress,
  handleEmailWithPress,
}) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignIn = () => {
    handleEmailWithPress(emailAddress, password);
  };

  const handleOAuthSignIn = (strategy: OAuthStrategy) => {
    handleOAuthWithPress(strategy);
  };

  return (
    <Section height="calc(100vh - 200px)" innerWidth="container.sm">
      <BackgroundGradient zIndex="-1" />

      <Center height="100%" pt="20">
        <PageTransition width="100%">
          <div>
            {type === "sign-up" && (
              <div>
                <h1>Sign Up</h1>
                {/* Sign up form */}
                <input
                  type="email"
                  placeholder="Email Address"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleEmailSignIn}>Sign Up</button>
              </div>
            )}

            {type === "sign-in" && (
              <div>
                <h1>Sign In</h1>
                {/* Sign in form */}
                <input
                  type="email"
                  placeholder="Email Address"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleEmailSignIn}>Sign In</button>
              </div>
            )}

            {/* OAuth buttons */}
            <Button
              size="md"
              onClick={() => handleOAuthSignIn("oauth_google")}
              _hover={{ opacity: 0.8 }}
              _focus={{ scale: 0.95 }}
              borderColor="gray.200"
            >
              <Image
                src="https://qwvsfvhphdefqfyuuhlb.supabase.co/storage/v1/object/public/logos/Google%20logo.png"
                width={20}
                height={20}
                alt="icon"
              />
            </Button>
            <Button
              size="md"
              onClick={() => handleOAuthSignIn("oauth_apple")}
              _hover={{ opacity: 0.8 }}
              _focus={{ scale: 0.95 }}
              borderColor="gray.200"
            >
              <Image
                src="https://qwvsfvhphdefqfyuuhlb.supabase.co/storage/v1/object/public/logos/Apple%20logo.png"
                width={22}
                height={22}
                alt="icon"

                resizeMode="contain"
              />
            </Button>
          </div>
        </PageTransition>
      </Center>
    </Section>
  )
}
