import * as React from "react";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useUser, useSignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { clerkClient } from '@clerk/nextjs/api';
import { withEdgeMiddlewareAuth } from "@clerk/nextjs/edge-middleware";


interface PostData {
  index: number;
  id: string;
  featuredImage: string;
  title: string;
  desc: string;
  date: string;
  href: string;
  commentCount: number;
  viewedCount: number;
  readingTime: number;
  bookmark: { count: number; isBookmarked: boolean };
  like: { count: number; isLiked: boolean };
  authorId: number;
  categoriesId: number[];
  postType: string;
  galleryImgs: string[];
  company:string[];
  country:string[];
}


export const middleware = withEdgeMiddlewareAuth((req, ev) => {
  const { userId, sessionId, getToken } = req.auth;

  // Retrieve the token
  const token = getToken();
  const token2 = 'UClUDQbgbwrScqUxWoPPQB_iEaWMuBuyxtIRb7dn6xcqRTcQRHXudBbyjvpePA_q'
  const data = {
    // Your data to update in the database
  };
  
  fetch('prisma://aws-us-east-1.prisma-data.com/?api_key=' + token2, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
  

  // Do something with the token
  console.log(token);
  console.log(sessionId);
  console.log(userId);

  // Your middleware
});

const createUser = async () => {
  const params = {
    emailAddress: ['john@example.com'],
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
  };

  const user = await clerkClient.users.createUser(params);
  console.log(user);
};

const updateUser = async () => {
  const userId = 'my-user-id';
  const params = {
    username: 'John',
  };

  const user = await clerkClient.users.updateUser(userId, params);
  console.log(user);
};


// Grab the query param server side, and pass through props
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { signInToken: context.query.token ? context.query.token : null },
  };
};

const AcceptToken = ({
  signInToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { signIn, setSession } = useSignIn();
  const { user } = useUser();
  const [signInProcessed, setSignInProcessed] = useState<boolean>(false);

  useEffect(() => {
    if (!signIn || !setSession || !signInToken) {
      return;
    }

    const aFunc = async () => {
      try {
        // Create a signIn with the token, note that you need to use the "ticket" strategy.
        const res = await signIn.create({
          strategy: "ticket",
          ticket: signInToken as string,
        });

        setSession(res.createdSessionId, () => {
          setSignInProcessed(true);
        });
      } catch (err) {
        setSignInProcessed(true);
      }
    };

    aFunc();
  }, [signIn, setSession]);

  if (!signInToken) {
    return <div>no token provided</div>;
  }

  if (!signInProcessed) {
    return <div>loading</div>;
  }

  const { isLoaded, isSignedIn } = useUser();

if (!user) {
  return <div>error invalid token</div>;
}

if (!isLoaded || !isSignedIn) {
  return null;
}

let postData: PostData | null = null;

if (user && user.unsafeMetadata) {
  postData = user.unsafeMetadata as unknown as PostData;
}
  return <>{postData ? (
    <>         <p> 🧠  </p>

</>
    ) : (
      <>
        <p>You are not signed in.</p>
      </>
    )}<>
          <nav className="nav">
              <div className="div">
                  <div className="div-2">
                      <div className="div-3">
                          <a
                              aria-label="Logo"
                              href="https://unlimitpotential.com/"
                              className="a" />
                          <nav className="nav-2">
                              <a className="a-2">Integrations</a>
                              <a className="a-3">Extensions</a>
                              <a className="a-4">Apps</a>
                              <a className="a-5">Partners</a>
                              <a className="a-6">Account</a>
                          </nav>
                      </div>
                      <a
                          href="https://dashboard.unlimitpotential.com/account2"
                          className="a-7"
                      >
                          Dashboard
                      </a>
                  </div>
              </div>
          </nav>
          <div className="div-4">
              <section className="section">
                  <section data-testid="1234" className="section-2">
                      <div
                          data-animationappear="off"
                          data-record-type="712"
                          className="div-5"
                      >
                          <div className="div-6">
                              <div
                                  data-content-cover-id="112985622"
                                  data-content-cover-bg="https://static.tildacdn.com/tild3734-3164-4234-a364-356238643638/Depositphotos_244394.png"
                                  data-content-cover-height="100vh"
                                  data-content-cover-parallax=""
                                  data-content-cover-updated-height="954px"
                                  className="div-7" />
                              <div className="div-8" />
                              <div className="div-9">
                                  <div className="div-10">
                                      <div data-hook-content="covercontent" className="div-11">
                                          <div className="div-12"><a href="https://spaces.unlimitpotential.com/verify">1. Add a Phone or Invite a collaborator</a>
                                              <div className="div-13"><div>Signed in as {user.id}<div>
      <button onClick={createUser}>Invite User</button>
      <button onClick={updateUser}>You are missing Username</button>
  </div></div></div><br></br>
  <a href="https://sellers.unlimitpotential.com/access" className="a-16">
            <p>step 3: Add a username</p>
          </a>      <a href="https://spaces.unlimitpotential.com/upload-details" className="a-16">
            <p>step 2: Add a Password</p>
          </a>                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </section>
          </div>
          <style jsx>{`
        .nav {
          display: none;
          flex-direction: column;
          position: sticky;
          background-color: rgb(0, 0, 0);
          top: 0px;
          transition-duration: 0.15s;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 40;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        @media (max-width: 991px) {
          .nav {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .nav {
            width: 100vw;
            align-self: stretch;
            margin-left: calc(50% - 50vw);
            display: flex;
          }
        }
        .div {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          margin-left: auto;
          margin-right: auto;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
          width: 100vw;
          max-width: 1000px;
        }
        @media (max-width: 991px) {
          .div {
            width: 100vw;
            margin-left: calc(50% - 50vw);
          }
        }
        @media (max-width: 640px) {
          .div {
            width: 100vw;
            margin-left: calc(50% - 50vw);
          }
        }
        .div-2 {
          padding-bottom: 1.5rem;
          padding-top: 1.5rem;
          justify-content: space-between;
          display: flex;
          position: relative;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        @media (max-width: 991px) {
          .div-2 {
            padding-bottom: 1rem;
            padding-top: 1rem;
          }
        }
        .div-3 {
          align-items: center;
          flex-basis: 0%;
          flex-grow: 1;
          display: flex;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a {
          border-radius: 9999px;
          border-top-left-radius: 9999px;
          cursor: pointer;
          transform: none;
          transition-duration: 0.1s;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .nav-2 {
          display: block;
          margin-left: 1.5rem;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        @media (max-width: 991px) {
          .nav-2 {
            display: none;
          }
        }
        .a-2 {
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgb(228, 228, 231);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-3 {
          margin-left: 8px;
          margin-right: 0px;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgb(228, 228, 231);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-4 {
          margin-left: 8px;
          margin-right: 0px;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgb(228, 228, 231);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-5 {
          margin-left: 8px;
          margin-right: 0px;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgb(228, 228, 231);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-6 {
          margin-left: 8px;
          margin-right: 0px;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgb(228, 228, 231);
          cursor: pointer;
          display: inline-flex;
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
        }
        .a-7 {
          justify-content: flex-end;
          flex-basis: 0%;
          flex-grow: 1;
          display: flex;
          border-bottom: 0px solid currentcolor;
          border-bottom-color: currentcolor;
          border-left: 0px solid currentcolor;
          border-left-color: currentcolor;
          border-right: 0px solid currentcolor;
          border-right-color: currentcolor;
          border-top: 0px solid currentcolor;
          border-top-color: currentcolor;
          cursor: pointer;
          pointer-events: auto;
          align-items: center;
          border-radius: 0.375rem;
          border-top-left-radius: 0.375rem;
          color: rgb(228, 228, 231);
          font-weight: 500;
          line-height: 1.5rem;
          padding-bottom: 4px;
          padding-left: 4px;
          padding-right: 4px;
          padding-top: 4px;
          transition-duration: 75ms;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-text-decoration-color,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .div-4 {
          border-bottom: 0px;
          border-bottom-color: rgb(34, 34, 34);
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-left-color: rgb(34, 34, 34);
          border-right: 0px;
          border-right-color: rgb(34, 34, 34);
          border-top: 0px;
          border-top-color: rgb(34, 34, 34);
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 300;
          line-height: 18.84px;
          padding-bottom: 24px;
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 0px;
          align-items: center;
          border-block-color: rgb(34, 34, 34);
          border-block-end-color: rgb(34, 34, 34);
          border-block-start-color: rgb(34, 34, 34);
          border-inline-color: rgb(34, 34, 34);
          border-inline-end-color: rgb(34, 34, 34);
          border-inline-start-color: rgb(34, 34, 34);
          caret-color: rgb(34, 34, 34);
          color: rgb(34, 34, 34);
          column-rule-color: rgb(34, 34, 34);
          display: flex;
          flex-direction: column;
          outline-color: rgb(34, 34, 34);
          padding: 24px 30px;
          perspective-origin: 562px 744.742px;
          text-decoration: none solid rgb(34, 34, 34);
          text-decoration-color: rgb(34, 34, 34);
          text-size-adjust: 100%;
          transform-origin: 562px 744.742px;
          width: 100vw;
          margin-left: auto;
          max-width: 1800px;
          margin-right: auto;
          margin-top: 0px;
        }
        @media (max-width: 991px) {
          .div-4 {
            display: flex;
            padding-top: 0px;
          }
        }
        @media (max-width: 640px) {
          .div-4 {
            max-width: 300px;
            padding-left: 0px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-right: 0px;
            margin-left: -8px;
            display: flex;
          }
        }
        .section {
          display: block;
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 300;
          height: 100vh;
          perspective-origin: 532px 720.742px;
          transform-origin: 532px 720.742px;
          width: 100vw;
          align-self: center;
          margin-left: calc(50% - 50vw);
        }
        @media (max-width: 640px) {
          .section {
            width: 100vw;
            margin-left: auto;
            margin-right: auto;
            margin-top: auto;
            margin-bottom: auto;
          }
        }
        .section-2 {
          display: block;
          border-bottom: 0px;
          border-color: rgb(34, 34, 34);
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          font-family: Poppins, sans-serif;
          font-size: 12px;
          font-weight: 300;
          perspective-origin: 532px 190px;
          transform-origin: 532px 190px;
        }
        @media (max-width: 640px) {
          .section-2 {
            width: 100vw;
            margin-left: calc(50% - 50vw);
          }
        }
        .div-5 {
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        .div-6 {
          background-color: rgba(255, 255, 255, 1);
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 954px;
          position: relative;
          text-align: center;
          vertical-align: middle;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fe0efc13ce4784d8aa62d01a2a7c9d1a1);
          margin-top: -25px;
        }
        @media (max-width: 991px) {
          .div-6 {
            border-radius: 0px;
          }
        }
        @media (max-width: 640px) {
          .div-6 {
            background-attachment: fixed;
            border-radius: 0;
            background-color: rgba(255, 255, 255, 1);
          }
        }
        .div-7 {
          transform: unset;
          background-position: left center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 954px;
          position: relative;
          text-align: center;
          vertical-align: middle;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          border-radius: 55px;
        }
        @media (max-width: 640px) {
          .div-7 {
            border-radius: 55px;
          }
        }
        .div-8 {
          height: 954px;
          left: 0px;
          position: absolute;
          top: 0px;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          background-color: rgb(0, 0, 0);
          opacity: 0;
        }
        .div-9 {
          bottom: 0px;
          inset: 0px;
          left: 0px;
          position: absolute;
          right: 0px;
          top: 0px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 640px;
          }
        }
        .div-10 {
          display: table-cell;
          height: 954px;
          width: 1200px;
          vertical-align: middle;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          position: relative;
          z-index: 1;
          border-radius: 5px;
          padding-top: 0px;
        }
        @media (max-width: 991px) {
          .div-10 {
            border-radius: 0px;
          }
        }
        @media (max-width: 640px) {
          .div-10 {
            height: auto;
            flex-grow: 0;
            max-height: 600px;
            margin-top: 0px;
          }
        }
        .div-11 {
          position: relative;
          text-align: left;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 640px) {
          .div-11 {
            display: flex;
            flex-direction: column;
          }
        }
        .div-12 {
          max-width: 660px;
          display: inline;
          float: left;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
        }
        @media (max-width: 991px) {
          .div-12 {
            display: block;
            box-sizing: border-box;
            float: none;
            margin-left: 0px;
            margin-right: 0px;
            padding-left: 20px;
            padding-right: 20px;
            max-width: 100%;
          }
        }
        @media (max-width: 640px) {
          .div-12 {
            margin-top: 20px;
          }
        }
        .div-13 {
          border-bottom: 0px;
          border-left: 0px;
          border-right: 0px;
          border-top: 0px;
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          line-height: normal;
          height: auto;
        }
        @media (max-width: 991px) {
          .div-13 {
            margin-bottom: 35px;
          }
        }
      `}</style>
      </></>;
};


export default AcceptToken;
