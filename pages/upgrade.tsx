/* eslint-disable react/no-unknown-property */

/* eslint-disable react/no-unescaped-entities */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable jsx-a11y/alt-text */
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import * as React from 'react';

const solutions = [
  {
    name: 'Analytics',
    description: 'See what others see',
    href: 'https://connect.unlimitpotential.com/flow',
  },
  {
    name: 'Engagement',
    description: 'Direct to Consumer',
    href: 'https://space.unlimitpotential.com/upgrade',
  },
  {
    name: 'Security',
    description: 'Update Preferences',
    href: 'https://accounts.unlimitpotential.com/upgrade',
  },
  {
    name: 'Integrations',
    description: 'Automations',
    href: 'https://studio.unlimitpotential.com/upgrade',
  },
  {
    name: 'Automations',
    description: 'Go Live',
    href: 'https://console.unlimitpotential.com/upgrade',
  },
];
const callsToAction = [
  {
    name: 'Sellers Accounts',
    href: 'https://lillieai-betav1b.unlimitpotential.com/upgrade',
  },
  {
    name: 'Goals & Settings',
    href: 'https://feed.unlimitpotential.com/upgrade',
  },
];
export default function MyComponent(props: any) {
  return (
    <>
      <nav className="nav">
        <div className="div">
          <div className="div-2">
            <div className="div-3">
              <a
                aria-label="Logo"
                href="https://unlimitpotential.com/"
                className="a"
              >
                <div className="div-4">
                  <picture>
                    <source
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9"
                      type="image/webp"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc54999c959624ce18c43f79d598c52c9"
                      className="image"
                    />
                  </picture>
                  <div className="builder-image-sizer image-sizer" />
                </div>
              </a>
              <nav className="nav-2">
                <a className="a-2">Integrations</a>
                <a className="a-3">Extensions</a>
                <a className="a-4">Apps</a>
                <a className="a-5">Partners</a>
              </nav>
            </div>

            <Popover className="relative">
              <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                <span>Solutions</span>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {solutions.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                        >
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"></div>
                          <div>
                            <a
                              href={item.href}
                              className="font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </div>
      </nav>
      <main className="5">
        <div className="div-5">
          <div className="div-6">
            <h1 className="h1">
              <p>Receive a Demo</p>
            </h1>
            <p className="p">
              <p>
                We are constantly looking to add additional rewards and offers
                for new creators, so watch your email and stayed tuned for our
                next big announcement!
              </p>
            </p>
            <a
              href="https://calendly.com/unlimitednow/15min"
              target="_blank"
              className="a-7"
              rel="noreferrer"
            >
              <p>Get a free trial</p>
            </a>
          </div>
        </div>
        <div className="div-7">
          <a
            href="https://connect.unlimitpotential.com/upgrade"
            className="a-8"
          >
            <div className="div-8">
              <div className="div-9">
                <small className="small">Featured</small>
                <h2 className="h2">Don’t be afraid</h2>
                <div className="div-10">Lauren Langford</div>
              </div>
            </div>
            <article className="article">
              <div className="div-11">
                <small className="small">Featured</small>
                <h2 className="h2-2">You have to fight to reach your dream</h2>
                <div className="div-12">Megan Anderson</div>
              </div>
            </article>
            <article className="article-2">
              <div className="div-13">
                <small className="small">Featured</small>
                <h2 className="h2">I always loved aesthetics</h2>
                <div className="div-14">Victoria West</div>
              </div>
            </article>
            <article className="article-3">
              <div className="div-15">
                <small className="small">Featured</small>
                <h2 className="h2">
                  New technology is not good or evil in and of itself
                </h2>
                <div className="div-16">Victoria West</div>
              </div>
            </article>
          </a>
        </div>
        <div className="div-17">
          <div className="div-18" />
        </div>
        <div className="div-19">
          <a href="https://docs.unlimitpotential.com/" className="a-9">
            <div className="div-20" />
            <button className="button">
              <p>View documentation </p>
            </button>
          </a>
        </div>
        <div className="div-21" />
        <div className="div-22" />
      </main>
      <div className="div-23">
        <div className="div-24">
          It's time to manage, automate, and integrate your content across
          multiple mediums making it possible to market your business on HDTVs,
          Desktop Computers or Mobile Devices
        </div>{' '}
        <div className="div-25">
          <div className="div-26">
            <img
              loading="lazy"
              alt=""
              srcSet="http://s3.amazonaws.com/appforest_uf/f1604961750922x282296150598448260/1.svg"
              className="raw-img"
            />{' '}
            <div className="div-27">
              <div className="div-28">WE WRITE YOUR IDEAS</div>{' '}
              <div className="div-29">
                Choose from one of the many commands inside of the intelligence
                dashboard.
              </div>
            </div>
          </div>{' '}
          <div className="div-30">
            <img
              loading="lazy"
              alt=""
              srcSet="http://s3.amazonaws.com/appforest_uf/f1604961755757x814259822577678100/2.svg"
              className="raw-img"
            />{' '}
            <div className="div-31">
              <div className="div-32">WE CREATE YOUR IDEAS</div>{' '}
              <div className="div-33">
                Sit back and Relax, even If you don't have a creator for your
                audio and visual needs.{' '}
              </div>
            </div>
          </div>
          <div className="div-34">
            <img
              loading="lazy"
              alt=""
              srcSet="http://s3.amazonaws.com/appforest_uf/f1604961759264x988512729502063200/3.svg"
              className="raw-img"
            />
            <div className="div-35">
              <div className="div-36">WE ORGANIZE YOUR IDEAS</div>
              <div className="div-37">
                Unlimit yourself using the Lillie Intelligent Dashboard and save
                money!
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .5 {
          flex-grow: 1;
          margin-left: auto;
          margin-right: auto;
          max-width: 1620px;
          width: 100%;
          display: block;
        }
        .nav {
          display: flex;
          flex-direction: column;
          position: sticky;
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
          background-color: rgba(252, 252, 252, 1);
          max-height: 75px;
        }
        @media (max-width: 640px) {
          .nav {
            width: 100vw;
            align-self: stretch;
            margin-left: calc(50% - 50vw);
            background-color: rgba(254, 254, 254, 1);
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
        .div-4 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: -3px;
          width: 100%;
          min-height: 45px;
          min-width: 36px;
          overflow: hidden;
        }
        .image {
          object-fit: contain;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 106.5%;
          pointer-events: none;
          font-size: 0;
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
          color: rgba(82, 82, 82, 1);
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
          color: rgba(88, 88, 88, 1);
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
          color: rgba(78, 78, 78, 1);
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
          color: rgba(74, 74, 75, 1);
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
          justify-content: flex-end;
          flex-basis: 0%;
          flex-grow: 1;
          display: inline-flex;
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
          color: rgba(42, 42, 42, 1);
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
        @media (max-width: 640px) {
          .a-6 {
            color: rgba(70, 70, 70, 1);
          }
        }
        .div-5 {
          margin-bottom: 80px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 24px;
          max-width: 1196px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-5 {
            margin-bottom: 64px;
            margin-top: 0px;
          }
        }
        @media (max-width: 640px) {
          .div-5 {
            margin-bottom: 56px;
          }
        }
        .div-6 {
          margin-left: 14px;
          margin-right: 14px;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-6 {
            margin-left: 7px;
            margin-right: 7px;
          }
        }
        @media (max-width: 640px) {
          .div-6 {
            margin-left: 3px;
            margin-right: 3px;
          }
        }
        .h1 {
          max-width: 900px;
          line-height: 1.3;
          margin-bottom: 32px;
          font-size: 96px;
          padding-left: 30px;
          transform: translateX(-30px);
          font-family: 'EB Garamond', serif;
          font-weight: 400;
          width: 100%;
          font-style: italic;
        }
        @media (max-width: 991px) {
          .h1 {
            line-height: 1.2;
            margin-bottom: 20px;
            max-width: 800px;
            font-size: 78px;
          }
        }
        @media (max-width: 640px) {
          .h1 {
            font-size: 42px;
          }
        }
        .p {
          margin-bottom: 36px;
          font-size: 30px;
          line-height: 1.65;
          max-width: 760px;
        }
        @media (max-width: 991px) {
          .p {
            margin-bottom: 32px;
            font-size: 26px;
            max-width: 600px;
          }
        }
        @media (max-width: 640px) {
          .p {
            font-size: 18px;
          }
        }
        .a-7 {
          display: inline-block;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          height: 50px;
          margin-right: auto;
          cursor: pointer;
          pointer-events: auto;
          background-color: rgb(20, 20, 20);
          border-bottom: 0px;
          border-color: rgb(255, 255, 255);
          border-left: 0px;
          border-radius: 100px;
          border-right: 0px;
          border-top: 0px;
          border-top-left-radius: 100px;
          color: rgb(255, 255, 255);
          font-weight: 600;
          line-height: 1.5;
          outline: 0px;
          padding-bottom: 10px;
          padding-left: 34px;
          padding-right: 34px;
          padding-top: 10px;
          text-align: center;
          transition-duration: 0.15s;
          transition-property: color, background-color;
          z-index: 0;
          text-decoration: none;
        }
        @media (max-width: 640px) {
          .a-7 {
            font-size: 16px;
          }
        }
        .div-7 {
          max-width: 1196px;
          width: 100%;
          margin-bottom: 80px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 40px;
        }
        @media (max-width: 991px) {
          .div-7 {
            margin-bottom: 56px;
            margin-top: 16px;
          }
        }
        @media (max-width: 640px) {
          .div-7 {
            margin-top: 0px;
          }
        }
        .a-8 {
          animation: 0.8s ease 0s 1 normal none running slideTop;
          animation-duration: 0.8s;
          animation-name: slideTop;
          justify-content: center;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          pointer-events: auto;
          cursor: pointer;
        }
        .div-8 {
          border-radius: 33.3333px;
          flex-basis: calc(25% - 28px);
          max-width: calc(50% - 28px);
          min-height: 400px;
          min-width: 180px;
          padding-bottom: 30px;
          padding-left: 25px;
          padding-right: 25px;
          padding-top: 40px;
          background-color: rgb(244, 244, 247);
          display: flex;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          pointer-events: none;
          position: relative;
          transition: transform 0.2s ease 0s;
          transition-duration: 0.2s;
          transition-property: transform;
          will-change: transform;
          z-index: 0;
          margin-bottom: 14px;
          margin-left: 14px;
          margin-right: 14px;
          margin-top: 14px;
          flex-grow: 1;
          background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2F3c9e80a25845429a9ab5c61e7e42c658);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        @media (max-width: 991px) {
          .div-8 {
            margin-bottom: 7px;
            min-width: calc(50% - 14px);
            max-width: 100%;
            min-height: 45vh;
            flex-basis: calc(25% - 14px);
            margin-left: 7px;
            margin-right: 7px;
            margin-top: 7px;
            background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fddddf638ee024ef79f3b6224363de763);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        }
        @media (max-width: 640px) {
          .div-8 {
            border-radius: 25px;
            min-height: 200px;
            padding-bottom: 15px;
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 20px;
            margin-bottom: 3px;
            min-width: calc(50% - 6px);
            flex-basis: calc(25% - 6px);
            margin-left: 3px;
            margin-right: 3px;
            margin-top: 3px;
            background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc9b01609bbda4ec3a2c9f67a860858cc);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            opacity: 1;
            box-shadow: 1px 1px 3px 0 rgba(179, 179, 179, 1);
          }
        }
        .div-9 {
          color: rgb(255, 255, 255);
          align-self: flex-end;
          max-width: 440px;
          width: 100%;
        }
        .small {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        @media (max-width: 640px) {
          .small {
            font-size: 10px;
          }
        }
        .h2 {
          font-size: 22px;
          margin-bottom: 1vh;
          font-weight: 700;
          line-height: 1.3;
          color: rgb(255, 255, 255);
          text-decoration: none;
          background-color: transparent;
        }
        @media (max-width: 640px) {
          .h2 {
            font-size: 16px;
          }
        }
        .div-10 {
          pointer-events: none;
          position: relative;
          z-index: 1;
          font-size: 13px;
          line-height: 1.2;
          max-width: 700px;
          font-weight: 600;
          color: rgb(255, 255, 255);
          text-decoration: none;
          background-color: transparent;
        }
        @media (max-width: 640px) {
          .div-10 {
            display: none;
          }
        }
        .article {
          border-radius: 33.3333px;
          flex-basis: calc(25% - 28px);
          max-width: calc(50% - 28px);
          min-height: 400px;
          min-width: 180px;
          padding-bottom: 30px;
          padding-left: 25px;
          padding-right: 25px;
          padding-top: 40px;
          background-color: rgb(244, 244, 247);
          display: flex;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          pointer-events: none;
          position: relative;
          transition: transform 0.2s ease 0s;
          transition-duration: 0.2s;
          transition-property: transform;
          will-change: transform;
          z-index: 0;
          margin-bottom: 14px;
          margin-left: 14px;
          margin-right: 14px;
          margin-top: 14px;
          flex-grow: 1;
          background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2F28fc088f28e844ed9f977a4549382c81);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        @media (max-width: 991px) {
          .article {
            margin-bottom: 7px;
            min-width: calc(50% - 14px);
            max-width: 100%;
            min-height: 45vh;
            flex-basis: calc(25% - 14px);
            margin-left: 7px;
            margin-right: 7px;
            margin-top: 7px;
            background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2F28fc088f28e844ed9f977a4549382c81);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        }
        @media (max-width: 640px) {
          .article {
            border-radius: 25px;
            min-height: 200px;
            padding-bottom: 15px;
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 20px;
            margin-bottom: 3px;
            min-width: calc(50% - 6px);
            flex-basis: calc(25% - 6px);
            margin-left: 3px;
            margin-right: 3px;
            margin-top: 3px;
            background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2F9a031dc45e1b46699e92967eb6233e7e);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        }
        .div-11 {
          align-self: flex-start;
          color: rgb(255, 255, 255);
          max-width: 440px;
          width: 100%;
        }
        @media (max-width: 640px) {
          .div-11 {
            align-self: flex-end;
          }
        }
        .h2-2 {
          font-size: 28px;
          margin-bottom: 1vh;
          font-weight: 700;
          line-height: 1.3;
          color: rgb(255, 255, 255);
          text-decoration: none;
          background-color: transparent;
        }
        @media (max-width: 640px) {
          .h2-2 {
            font-size: 16px;
          }
        }
        .div-12 {
          pointer-events: none;
          position: relative;
          z-index: 1;
          font-size: 13px;
          line-height: 1.2;
          max-width: 700px;
          font-weight: 600;
          color: rgb(255, 255, 255);
          text-decoration: none;
          background-color: transparent;
        }
        @media (max-width: 640px) {
          .div-12 {
            display: none;
          }
        }
        .article-2 {
          border-radius: 33.3333px;
          flex-basis: calc(25% - 28px);
          max-width: calc(50% - 28px);
          min-height: 400px;
          min-width: 180px;
          padding-bottom: 30px;
          padding-left: 25px;
          padding-right: 25px;
          padding-top: 40px;
          background-color: rgb(244, 244, 247);
          display: flex;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          pointer-events: none;
          position: relative;
          transition: transform 0.2s ease 0s;
          transition-duration: 0.2s;
          transition-property: transform;
          will-change: transform;
          z-index: 0;
          margin-bottom: 14px;
          margin-left: 14px;
          margin-right: 14px;
          margin-top: 14px;
          flex-grow: 1;
          background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2F9a031dc45e1b46699e92967eb6233e7e);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        @media (max-width: 991px) {
          .article-2 {
            margin-bottom: 7px;
            min-width: calc(50% - 14px);
            max-width: 100%;
            min-height: 45vh;
            flex-basis: calc(25% - 14px);
            margin-left: 7px;
            margin-right: 7px;
            margin-top: 7px;
            background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc9b01609bbda4ec3a2c9f67a860858cc);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        }
        @media (max-width: 640px) {
          .article-2 {
            border-radius: 25px;
            min-height: 200px;
            padding-bottom: 15px;
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 20px;
            margin-bottom: 3px;
            min-width: calc(50% - 6px);
            flex-basis: calc(25% - 6px);
            margin-left: 3px;
            margin-right: 3px;
            margin-top: 3px;
            background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fddddf638ee024ef79f3b6224363de763);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        }
        .div-13 {
          color: rgb(255, 255, 255);
          align-self: flex-end;
          max-width: 440px;
          width: 100%;
        }
        .div-14 {
          pointer-events: none;
          position: relative;
          z-index: 1;
          font-size: 13px;
          line-height: 1.2;
          max-width: 700px;
          font-weight: 600;
          color: rgb(255, 255, 255);
          text-decoration: none;
          background-color: transparent;
        }
        @media (max-width: 640px) {
          .div-14 {
            display: none;
          }
        }
        .article-3 {
          border-radius: 33.3333px;
          flex-basis: calc(25% - 28px);
          max-width: calc(50% - 28px);
          min-height: 400px;
          min-width: 180px;
          padding-bottom: 30px;
          padding-left: 25px;
          padding-right: 25px;
          padding-top: 40px;
          background-color: rgb(244, 244, 247);
          display: flex;
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          pointer-events: none;
          position: relative;
          transition: transform 0.2s ease 0s;
          transition-duration: 0.2s;
          transition-property: transform;
          will-change: transform;
          z-index: 0;
          margin-bottom: 14px;
          margin-left: 14px;
          margin-right: 14px;
          margin-top: 14px;
          flex-grow: 1;
          background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2Fc9b01609bbda4ec3a2c9f67a860858cc);
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        @media (max-width: 991px) {
          .article-3 {
            margin-bottom: 7px;
            min-width: calc(50% - 14px);
            max-width: 100%;
            min-height: 45vh;
            flex-basis: calc(25% - 14px);
            margin-left: 7px;
            margin-right: 7px;
            margin-top: 7px;
            background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2F9a031dc45e1b46699e92967eb6233e7e);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        }
        @media (max-width: 640px) {
          .article-3 {
            border-radius: 25px;
            min-height: 200px;
            padding-bottom: 15px;
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 20px;
            margin-bottom: 3px;
            min-width: calc(50% - 6px);
            flex-basis: calc(25% - 6px);
            margin-left: 3px;
            margin-right: 3px;
            margin-top: 3px;
            background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc1b3106624e34af79d2e33c90a9e9021%2F28fc088f28e844ed9f977a4549382c81);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        }
        .div-15 {
          color: rgb(255, 255, 255);
          align-self: flex-end;
          max-width: 440px;
          width: 100%;
        }
        .div-16 {
          pointer-events: none;
          position: relative;
          z-index: 1;
          font-size: 13px;
          line-height: 1.2;
          max-width: 700px;
          font-weight: 600;
          color: rgb(255, 255, 255);
          text-decoration: none;
          background-color: transparent;
        }
        @media (max-width: 640px) {
          .div-16 {
            display: none;
          }
        }
        .div-17 {
          margin-bottom: 24px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 32px;
          max-width: 1196px;
          padding-bottom: 2vh;
          width: 100%;
        }
        .div-18 {
          align-items: flex-end;
          animation: 0.8s ease 0s 1 normal none running slideTop;
          animation-duration: 0.8s;
          animation-name: slideTop;
          will-change: transform;
          display: flex;
          max-width: 100%;
          margin-bottom: 24px;
          margin-left: 14px;
          margin-right: 14px;
        }
        @media (max-width: 991px) {
          .div-18 {
            margin-left: 7px;
            margin-right: 7px;
          }
        }
        @media (max-width: 640px) {
          .div-18 {
            margin-left: 3px;
            margin-right: 3px;
          }
        }
        .div-19 {
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        .a-9 {
          pointer-events: auto;
          display: flex;
          margin-left: auto;
          margin-right: auto;
          cursor: pointer;
        }
        .div-20 {
          color: rgb(20, 20, 20);
          text-decoration: none;
          background-color: transparent;
          display: none;
          pointer-events: auto;
        }
        .button {
          padding-bottom: 18px;
          padding-left: 58px;
          padding-right: 58px;
          padding-top: 18px;
          background-color: rgb(20, 20, 20);
          border-bottom: 0px;
          border-color: rgb(255, 255, 255);
          border-left: 0px;
          border-radius: 100px;
          border-right: 0px;
          border-top: 0px;
          border-top-left-radius: 100px;
          color: rgb(255, 255, 255);
          cursor: pointer;
          display: inline-block;
          font-weight: 600;
          line-height: 1.5;
          outline: 0px;
          position: relative;
          text-align: center;
          transition-duration: 0.15s;
          transition-property: color, background-color;
          z-index: 0;
          appearance: button;
        }
        @media (max-width: 991px) {
          .button {
            padding-bottom: 14px;
            padding-left: 48px;
            padding-right: 48px;
            padding-top: 14px;
          }
        }
        @media (max-width: 640px) {
          .button {
            font-size: 16px;
          }
        }
        .div-21 {
          max-width: 1196px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 128px;
        }
        @media (max-width: 991px) {
          .div-21 {
            margin-top: 112px;
          }
        }
        @media (max-width: 640px) {
          .div-21 {
            margin-top: 96px;
          }
        }
        .div-22 {
          margin-left: auto;
          margin-right: auto;
          margin-top: 128px;
          max-width: 1196px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-22 {
            margin-top: 96px;
          }
        }
        @media (max-width: 640px) {
          .div-22 {
            margin-top: 80px;
          }
        }
        .div-23 {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          margin-left: auto;
          margin-right: auto;
          padding-bottom: 71.0469px;
          padding-top: 71.0469px;
          align-items: center;
          block-size: 1202.63px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          bottom: 0px;
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-rule-color: rgb(92, 98, 120);
          display: flex;
          flex-direction: column;
          inline-size: 1165px;
          inset: 0px;
          inset-block: 0px;
          inset-block-end: 0px;
          inset-block-start: 0px;
          inset-inline: 0px;
          inset-inline-end: 0px;
          inset-inline-start: 0px;
          justify-content: flex-start;
          left: 0px;
          margin-inline: 128px;
          margin-inline-end: 128px;
          margin-inline-start: 128px;
          max-block-size: 100%;
          max-height: 100%;
          max-inline-size: 1165px;
          outline-color: rgb(92, 98, 120);
          padding-block: 71.0469px;
          padding-block-end: 71.0469px;
          padding-block-start: 71.0469px;
          perspective-origin: 582.5px 601.312px;
          position: relative;
          right: 0px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          top: 0px;
          transform-origin: 582.5px 601.316px;
          width: auto;
          align-self: center;
        }
        @media (max-width: 991px) {
          .div-23 {
            width: 100vw;
            margin-left: calc(50% - 50vw);
          }
        }
        @media (max-width: 640px) {
          .div-23 {
            width: 100vw;
            margin-right: auto;
            margin-left: calc(50% - 50vw);
          }
        }
        .div-24 {
          border-bottom: 0px;
          border-bottom-color: rgb(51, 51, 51);
          border-color: rgb(51, 51, 51);
          border-left: 0px;
          border-left-color: rgb(51, 51, 51);
          border-right: 0px;
          border-right-color: rgb(51, 51, 51);
          border-top: 0px;
          border-top-color: rgb(51, 51, 51);
          font-family: Colfax, sans-serif;
          font-size: 38px;
          line-height: 53.2px;
          align-self: center;
          block-size: 319.172px;
          border-block-color: rgb(51, 51, 51);
          border-block-end-color: rgb(51, 51, 51);
          border-block-start-color: rgb(51, 51, 51);
          border-inline-color: rgb(51, 51, 51);
          border-inline-end-color: rgb(51, 51, 51);
          border-inline-start-color: rgb(51, 51, 51);
          caret-color: rgb(51, 51, 51);
          color: rgb(51, 51, 51);
          column-rule-color: rgb(51, 51, 51);
          inline-size: 650px;
          max-inline-size: 650px;
          max-width: 650px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(51, 51, 51);
          perspective-origin: 325px 159.586px;
          text-align: center;
          text-decoration: none solid rgb(51, 51, 51);
          text-decoration-color: rgb(51, 51, 51);
          text-size-adjust: 100%;
          transform-origin: 325px 159.586px;
        }
        @media (max-width: 640px) {
          .div-24 {
            width: auto;
            align-self: center;
            margin-bottom: 60px;
          }
        }
        .div-25 {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          margin-bottom: 50px;
          margin-top: 50px;
          align-content: center;
          align-items: center;
          block-size: 641.367px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-gap: 30px;
          column-rule-color: rgb(92, 98, 120);
          gap: 30px;
          grid-auto-columns: 1fr;
          grid-template-columns: minmax(320px, 1fr) minmax(320px, 1fr);
          grid-template-rows: auto auto;
          inline-size: 774px;
          justify-content: center;
          justify-items: center;
          margin: 50px 0px;
          margin-block: 50px;
          margin-block-end: 50px;
          margin-block-start: 50px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(92, 98, 120);
          perspective-origin: 387px 320.68px;
          place-content: center;
          place-items: center;
          row-gap: 30px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          transform-origin: 387px 320.684px;
        }
        @media (max-width: 991px) {
          .div-25 {
            width: auto;
            align-self: stretch;
          }
        }
        @media (max-width: 640px) {
          .div-25 {
            margin-top: 262px;
          }
        }
        .div-26 {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          margin-bottom: 30px;
          padding-bottom: 46px;
          padding-left: 46px;
          padding-right: 46px;
          padding-top: 46px;
          align-items: flex-start;
          background-color: rgb(255, 255, 255);
          block-size: 183.789px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-end-end-radius: 10px;
          border-end-start-radius: 10px;
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          border-radius: 10px;
          border-start-end-radius: 10px;
          border-start-start-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          box-shadow: rgba(47, 55, 76, 0.08) 0px 0px 12px 0px;
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-gap: 16px;
          column-rule-color: rgb(92, 98, 120);
          display: flex;
          gap: 16px;
          grid-auto-columns: 1fr;
          grid-template-columns: 0.25fr 1fr;
          grid-template-rows: auto;
          inline-size: 774px;
          justify-content: flex-start;
          margin-block-end: 30px;
          max-inline-size: 780px;
          max-width: 780px;
          outline-color: rgb(92, 98, 120);
          padding: 46px;
          padding-block: 46px;
          padding-block-end: 46px;
          padding-block-start: 46px;
          padding-inline: 46px;
          padding-inline-end: 46px;
          padding-inline-start: 46px;
          perspective-origin: 387px 91.8906px;
          row-gap: 16px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          transform-origin: 387px 91.8945px;
        }
        @media (max-width: 991px) {
          .div-26 {
            width: auto;
            align-self: center;
          }
        }
        @media (max-width: 640px) {
          .div-26 {
            flex-grow: 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            min-height: 343px;
          }
        }
        .raw-img {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          vertical-align: middle;
          block-size: 65px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-rule-color: rgb(92, 98, 120);
          display: inline-block;
          height: 65px;
          inline-size: 70px;
          max-inline-size: 100%;
          max-width: 100%;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: 70px;
          min-width: 70px;
          object-fit: contain;
          outline-color: rgb(92, 98, 120);
          overflow: hidden;
          overflow-x: hidden;
          overflow-y: hidden;
          perspective-origin: 35px 32.5px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          transform-origin: 35px 32.5px;
          width: 70px;
        }
        @media (max-width: 640px) {
          .raw-img {
            margin-left: auto;
            margin-right: auto;
          }
        }
        .div-27 {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          margin-left: 40px;
          block-size: 91.7891px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-rule-color: rgb(92, 98, 120);
          inline-size: 556px;
          margin-inline-start: 40px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(92, 98, 120);
          perspective-origin: 278px 45.8906px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          transform-origin: 278px 45.8945px;
        }
        @media (max-width: 640px) {
          .div-27 {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
        }
        .div-28 {
          border-bottom: 0px;
          border-bottom-color: rgb(51, 51, 51);
          border-color: rgb(51, 51, 51);
          border-left: 0px;
          border-left-color: rgb(51, 51, 51);
          border-right: 0px;
          border-right-color: rgb(51, 51, 51);
          border-top: 0px;
          border-top-color: rgb(51, 51, 51);
          font-family: Colfax, sans-serif;
          font-size: 21px;
          font-weight: 700;
          line-height: 29.4px;
          margin-bottom: 12px;
          block-size: 29.3984px;
          border-block-color: rgb(51, 51, 51);
          border-block-end-color: rgb(51, 51, 51);
          border-block-start-color: rgb(51, 51, 51);
          border-inline-color: rgb(51, 51, 51);
          border-inline-end-color: rgb(51, 51, 51);
          border-inline-start-color: rgb(51, 51, 51);
          caret-color: rgb(51, 51, 51);
          color: rgb(51, 51, 51);
          column-rule-color: rgb(51, 51, 51);
          inline-size: 556px;
          margin-block-end: 12px;
          outline-color: rgb(51, 51, 51);
          perspective-origin: 278px 14.6953px;
          text-decoration: none solid rgb(51, 51, 51);
          text-decoration-color: rgb(51, 51, 51);
          text-size-adjust: 100%;
          transform-origin: 278px 14.6992px;
        }
        @media (max-width: 991px) {
          .div-28 {
            width: auto;
            align-self: center;
          }
        }
        @media (max-width: 640px) {
          .div-28 {
            text-align: center;
          }
        }
        .div-29 {
          border-bottom: 0px;
          border-bottom-color: rgb(102, 102, 102);
          border-color: rgb(102, 102, 102);
          border-left: 0px;
          border-left-color: rgb(102, 102, 102);
          border-right: 0px;
          border-right-color: rgb(102, 102, 102);
          border-top: 0px;
          border-top-color: rgb(102, 102, 102);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 25.2px;
          block-size: 50.3906px;
          border-block-color: rgb(102, 102, 102);
          border-block-end-color: rgb(102, 102, 102);
          border-block-start-color: rgb(102, 102, 102);
          border-inline-color: rgb(102, 102, 102);
          border-inline-end-color: rgb(102, 102, 102);
          border-inline-start-color: rgb(102, 102, 102);
          caret-color: rgb(102, 102, 102);
          color: rgb(102, 102, 102);
          column-rule-color: rgb(102, 102, 102);
          inline-size: 556px;
          max-inline-size: 556px;
          max-width: 556px;
          outline-color: rgb(102, 102, 102);
          perspective-origin: 278px 25.1953px;
          text-decoration: none solid rgb(102, 102, 102);
          text-decoration-color: rgb(102, 102, 102);
          text-size-adjust: 100%;
          transform-origin: 278px 25.1953px;
        }
        @media (max-width: 991px) {
          .div-29 {
            max-width: 462px;
            width: auto;
            align-self: center;
          }
        }
        @media (max-width: 640px) {
          .div-29 {
            margin-top: 21px;
            text-align: center;
          }
        }
        .div-30 {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          margin-bottom: 30px;
          padding-bottom: 46px;
          padding-left: 46px;
          padding-right: 46px;
          padding-top: 46px;
          align-items: flex-start;
          background-color: rgb(255, 255, 255);
          block-size: 183.789px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-end-end-radius: 10px;
          border-end-start-radius: 10px;
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          border-radius: 10px;
          border-start-end-radius: 10px;
          border-start-start-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          box-shadow: rgba(47, 55, 76, 0.08) 0px 0px 12px 0px;
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-gap: 16px;
          column-rule-color: rgb(92, 98, 120);
          display: flex;
          gap: 16px;
          grid-auto-columns: 1fr;
          grid-template-columns: 0.25fr 1fr;
          grid-template-rows: auto;
          inline-size: 774px;
          justify-content: flex-start;
          margin-block-end: 30px;
          max-inline-size: 780px;
          max-width: 780px;
          outline-color: rgb(92, 98, 120);
          padding: 46px;
          padding-block: 46px;
          padding-block-end: 46px;
          padding-block-start: 46px;
          padding-inline: 46px;
          padding-inline-end: 46px;
          padding-inline-start: 46px;
          perspective-origin: 387px 91.8906px;
          row-gap: 16px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          transform-origin: 387px 91.8945px;
        }
        @media (max-width: 991px) {
          .div-30 {
            width: auto;
            align-self: center;
          }
        }
        @media (max-width: 640px) {
          .div-30 {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            min-height: 343px;
          }
        }
        .div-31 {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          margin-left: 40px;
          block-size: 91.7891px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-rule-color: rgb(92, 98, 120);
          inline-size: 556px;
          margin-inline-start: 40px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(92, 98, 120);
          perspective-origin: 278px 45.8906px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          transform-origin: 278px 45.8945px;
        }
        @media (max-width: 640px) {
          .div-31 {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
        }
        .div-32 {
          border-bottom: 0px;
          border-bottom-color: rgb(51, 51, 51);
          border-color: rgb(51, 51, 51);
          border-left: 0px;
          border-left-color: rgb(51, 51, 51);
          border-right: 0px;
          border-right-color: rgb(51, 51, 51);
          border-top: 0px;
          border-top-color: rgb(51, 51, 51);
          font-family: Colfax, sans-serif;
          font-size: 21px;
          font-weight: 700;
          line-height: 29.4px;
          margin-bottom: 12px;
          block-size: 29.3984px;
          border-block-color: rgb(51, 51, 51);
          border-block-end-color: rgb(51, 51, 51);
          border-block-start-color: rgb(51, 51, 51);
          border-inline-color: rgb(51, 51, 51);
          border-inline-end-color: rgb(51, 51, 51);
          border-inline-start-color: rgb(51, 51, 51);
          caret-color: rgb(51, 51, 51);
          color: rgb(51, 51, 51);
          column-rule-color: rgb(51, 51, 51);
          inline-size: 556px;
          margin-block-end: 12px;
          outline-color: rgb(51, 51, 51);
          perspective-origin: 278px 14.6953px;
          text-decoration: none solid rgb(51, 51, 51);
          text-decoration-color: rgb(51, 51, 51);
          text-size-adjust: 100%;
          transform-origin: 278px 14.6992px;
        }
        @media (max-width: 991px) {
          .div-32 {
            width: auto;
            align-self: center;
          }
        }
        @media (max-width: 640px) {
          .div-32 {
            text-align: center;
          }
        }
        .div-33 {
          border-bottom: 0px;
          border-bottom-color: rgb(102, 102, 102);
          border-color: rgb(102, 102, 102);
          border-left: 0px;
          border-left-color: rgb(102, 102, 102);
          border-right: 0px;
          border-right-color: rgb(102, 102, 102);
          border-top: 0px;
          border-top-color: rgb(102, 102, 102);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 25.2px;
          block-size: 50.3906px;
          border-block-color: rgb(102, 102, 102);
          border-block-end-color: rgb(102, 102, 102);
          border-block-start-color: rgb(102, 102, 102);
          border-inline-color: rgb(102, 102, 102);
          border-inline-end-color: rgb(102, 102, 102);
          border-inline-start-color: rgb(102, 102, 102);
          caret-color: rgb(102, 102, 102);
          color: rgb(102, 102, 102);
          column-rule-color: rgb(102, 102, 102);
          inline-size: 556px;
          max-inline-size: 556px;
          max-width: 556px;
          outline-color: rgb(102, 102, 102);
          perspective-origin: 278px 25.1953px;
          text-decoration: none solid rgb(102, 102, 102);
          text-decoration-color: rgb(102, 102, 102);
          text-size-adjust: 100%;
          transform-origin: 278px 25.1953px;
        }
        @media (max-width: 991px) {
          .div-33 {
            width: auto;
            align-self: stretch;
          }
        }
        @media (max-width: 640px) {
          .div-33 {
            margin-top: 26px;
            text-align: center;
          }
        }
        .div-34 {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          margin-bottom: 30px;
          padding-bottom: 46px;
          padding-left: 46px;
          padding-right: 46px;
          padding-top: 46px;
          align-items: flex-start;
          background-color: rgb(255, 255, 255);
          block-size: 183.789px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          border-end-end-radius: 10px;
          border-end-start-radius: 10px;
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          border-radius: 10px;
          border-start-end-radius: 10px;
          border-start-start-radius: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          box-shadow: rgba(47, 55, 76, 0.08) 0px 0px 12px 0px;
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-gap: 16px;
          column-rule-color: rgb(92, 98, 120);
          display: flex;
          gap: 16px;
          grid-auto-columns: 1fr;
          grid-template-columns: 0.25fr 1fr;
          grid-template-rows: auto;
          inline-size: 774px;
          justify-content: flex-start;
          margin-block-end: 30px;
          max-inline-size: 780px;
          max-width: 780px;
          outline-color: rgb(92, 98, 120);
          padding: 46px;
          padding-block: 46px;
          padding-block-end: 46px;
          padding-block-start: 46px;
          padding-inline: 46px;
          padding-inline-end: 46px;
          padding-inline-start: 46px;
          perspective-origin: 387px 91.8906px;
          row-gap: 16px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          transform-origin: 387px 91.8945px;
        }
        @media (max-width: 991px) {
          .div-34 {
            width: auto;
            align-self: center;
          }
        }
        @media (max-width: 640px) {
          .div-34 {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            min-height: 343px;
          }
        }
        .div-35 {
          border-bottom: 0px;
          border-bottom-color: rgb(92, 98, 120);
          border-color: rgb(92, 98, 120);
          border-left: 0px;
          border-left-color: rgb(92, 98, 120);
          border-right: 0px;
          border-right-color: rgb(92, 98, 120);
          border-top: 0px;
          border-top-color: rgb(92, 98, 120);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 27px;
          margin-left: 40px;
          block-size: 91.7891px;
          border-block-color: rgb(92, 98, 120);
          border-block-end-color: rgb(92, 98, 120);
          border-block-start-color: rgb(92, 98, 120);
          border-inline-color: rgb(92, 98, 120);
          border-inline-end-color: rgb(92, 98, 120);
          border-inline-start-color: rgb(92, 98, 120);
          caret-color: rgb(92, 98, 120);
          color: rgb(92, 98, 120);
          column-rule-color: rgb(92, 98, 120);
          inline-size: 556px;
          margin-inline-start: 40px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(92, 98, 120);
          perspective-origin: 278px 45.8906px;
          text-decoration: none solid rgb(92, 98, 120);
          text-decoration-color: rgb(92, 98, 120);
          text-size-adjust: 100%;
          transform-origin: 278px 45.8945px;
        }
        @media (max-width: 991px) {
          .div-35 {
            width: auto;
            flex-grow: 0;
          }
        }
        @media (max-width: 640px) {
          .div-35 {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
        }
        .div-36 {
          border-bottom: 0px;
          border-bottom-color: rgb(51, 51, 51);
          border-color: rgb(51, 51, 51);
          border-left: 0px;
          border-left-color: rgb(51, 51, 51);
          border-right: 0px;
          border-right-color: rgb(51, 51, 51);
          border-top: 0px;
          border-top-color: rgb(51, 51, 51);
          font-family: Colfax, sans-serif;
          font-size: 21px;
          font-weight: 700;
          line-height: 29.4px;
          margin-bottom: 12px;
          block-size: 29.3984px;
          border-block-color: rgb(51, 51, 51);
          border-block-end-color: rgb(51, 51, 51);
          border-block-start-color: rgb(51, 51, 51);
          border-inline-color: rgb(51, 51, 51);
          border-inline-end-color: rgb(51, 51, 51);
          border-inline-start-color: rgb(51, 51, 51);
          caret-color: rgb(51, 51, 51);
          color: rgb(51, 51, 51);
          column-rule-color: rgb(51, 51, 51);
          inline-size: 556px;
          margin-block-end: 12px;
          outline-color: rgb(51, 51, 51);
          perspective-origin: 278px 14.6953px;
          text-decoration: none solid rgb(51, 51, 51);
          text-decoration-color: rgb(51, 51, 51);
          text-size-adjust: 100%;
          transform-origin: 278px 14.6992px;
        }
        @media (max-width: 991px) {
          .div-36 {
            width: auto;
            align-self: center;
          }
        }
        @media (max-width: 640px) {
          .div-36 {
            text-align: center;
          }
        }
        .div-37 {
          border-bottom: 0px;
          border-bottom-color: rgb(102, 102, 102);
          border-color: rgb(102, 102, 102);
          border-left: 0px;
          border-left-color: rgb(102, 102, 102);
          border-right: 0px;
          border-right-color: rgb(102, 102, 102);
          border-top: 0px;
          border-top-color: rgb(102, 102, 102);
          font-family: Colfax, sans-serif;
          font-size: 18px;
          line-height: 25.2px;
          block-size: 50.3906px;
          border-block-color: rgb(102, 102, 102);
          border-block-end-color: rgb(102, 102, 102);
          border-block-start-color: rgb(102, 102, 102);
          border-inline-color: rgb(102, 102, 102);
          border-inline-end-color: rgb(102, 102, 102);
          border-inline-start-color: rgb(102, 102, 102);
          caret-color: rgb(102, 102, 102);
          color: rgb(102, 102, 102);
          column-rule-color: rgb(102, 102, 102);
          inline-size: 556px;
          max-inline-size: 556px;
          max-width: 556px;
          outline-color: rgb(102, 102, 102);
          perspective-origin: 278px 25.1953px;
          text-decoration: none solid rgb(102, 102, 102);
          text-decoration-color: rgb(102, 102, 102);
          text-size-adjust: 100%;
          transform-origin: 278px 25.1953px;
        }
        @media (max-width: 991px) {
          .div-37 {
            max-width: 401px;
            width: auto;
            align-self: center;
          }
        }
        @media (max-width: 640px) {
          .div-37 {
            margin-top: 31px;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
