import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Software = (props) => {
  return (
    <>
      <div className="software-container">
        <Head>
          <title>Software - Crimson Creative Studios</title>
          <meta
            name="description"
            content="Crimson Creative Studios, lorem ipsum"
          />
          <meta
            property="og:title"
            content="Software - Crimson Creative Studios"
          />
          <meta
            property="og:description"
            content="Crimson Creative Studios, lorem ipsum"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cb15e6e0-82bf-45f3-ba03-ea73af3e065c/3613f958-0e4d-476a-92d5-814bd18f0faa?org_if_sml=1"
          />
        </Head>
        <section className="software-hero">
          <div className="software-menu">
            <div className="software-desktop-navigation">
              <nav className="software-centered">
                <div className="software-left">
                  <Link href="/">
                    <a className="software-link">
                      <img
                        alt="pastedImage"
                        src="/logocrimson-200h.png"
                        className="software-logo"
                      />
                    </a>
                  </Link>
                  <div className="software-links">
                    <Link href="/software">
                      <a className="software-link1 Link">
                        <span>Software</span>
                        <br></br>
                      </a>
                    </Link>
                    <span className="software-text02 Link">Games</span>
                    <span className="software-text03 Link">Contact</span>
                  </div>
                </div>
                <div className="software-right"></div>
              </nav>
            </div>
          </div>
          <h1 className="software-text04">Software</h1>
        </section>
        <section className="software-features">
          <div className="software-title">
            <span className="software-text05">
              Here is a list of out top projects
            </span>
          </div>
          <div className="software-cards">
            <div className="software-container1">
              <div className="software-schedule card">
                <img
                  alt="pastedImage"
                  src="/crimsonlogohires-200h.png"
                  className="software-icon"
                />
                <span className="software-text06">CrimsonGUI</span>
                <span className="software-text07">
                  CrimsonGUI is a no fuss visual interface for your Discord bot,
                  install extensions directly in the app and go!
                </span>
              </div>
              <div className="software-publish card">
                <img
                  alt="pastedImage"
                  src="/crimsonlogohires-200h.png"
                  className="software-icon1"
                />
                <span className="software-text08">Soon™️</span>
                <span className="software-text09">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
            <div className="software-container2">
              <div className="software-analyze card">
                <img
                  alt="pastedImage"
                  src="/crimsonlogohires-200h.png"
                  className="software-icon2"
                />
                <span className="software-text10">Soon™️</span>
                <span className="software-text11">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="software-get-leads card">
                <img
                  alt="pastedImage"
                  src="/crimsonlogohires-200h.png"
                  className="software-icon3"
                />
                <span className="software-text12">Soon™️</span>
                <span className="software-text13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <footer className="software-footer">
          <div className="software-top">
            <div className="software-right1">
              <div className="software-category">
                <span className="software-text14">Company</span>
                <div className="software-links1">
                  <span className="software-text15">About</span>
                  <span className="software-text16">Team</span>
                  <span className="software-text17">News</span>
                  <span className="software-text18">Partners</span>
                  <span className="software-text19">Careers</span>
                  <span className="software-text20">Press &amp; Media</span>
                </div>
              </div>
            </div>
          </div>
          <div className="software-bottom">
            <img
              alt="pastedImage"
              src="/logocrimson-200h.png"
              className="software-branding"
            />
            <span className="software-text21">
              Copyright © Crimson Creative Studios - 2023
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .software-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
            background-color: #bd0a0a;
          }
          .software-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-color: #bd0a0a;
          }
          .software-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .software-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .software-centered {
            width: 100%;
            display: flex;
            max-width: 1200px;
            box-sizing: initial;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .software-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .software-link {
            display: contents;
          }
          .software-logo {
            width: 50px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .software-links {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .software-link1 {
            color: var(--dl-color-gray-white);
            text-decoration: none;
          }
          .software-text02 {
            color: var(--dl-color-gray-white);
          }
          .software-text03 {
            color: var(--dl-color-gray-white);
          }
          .software-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .software-text04 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            margin-top: auto;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
            margin-bottom: auto;
            justify-content: center;
          }
          .software-features {
            width: 100%;
            height: 100vh;
            display: flex;
            z-index: 1;
            align-items: center;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-color: #141414;
          }
          .software-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .software-text05 {
            color: var(--dl-color-gray-white);
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .software-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .software-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .software-schedule {
            padding-top: var(--dl-space-space-threeunits);
          }
          .software-icon {
            width: 64px;
            filter: brightness(100%);
            height: 64px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .software-text06 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .software-text07 {
            line-height: 24px;
          }
          .software-publish {
            height: initial;
            padding-top: var(--dl-space-space-threeunits);
          }
          .software-icon1 {
            width: 64px;
            height: 64px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .software-text08 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .software-text09 {
            line-height: 24px;
          }
          .software-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .software-analyze {
            padding-top: var(--dl-space-space-threeunits);
          }
          .software-icon2 {
            width: 64px;
            height: 64px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .software-text10 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .software-text11 {
            line-height: 24px;
          }
          .software-get-leads {
            padding-top: var(--dl-space-space-threeunits);
          }
          .software-icon3 {
            width: 64px;
            height: 64px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .software-text12 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .software-text13 {
            line-height: 24px;
          }
          .software-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
            background-color: #000000;
          }
          .software-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .software-right1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .software-category {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .software-text14 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .software-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .software-text15 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .software-text16 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .software-text17 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .software-text18 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .software-text19 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .software-text20 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .software-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .software-branding {
            width: var(--dl-size-size-medium);
            margin-bottom: var(--dl-space-space-unit);
          }
          .software-text21 {
            color: #686868;
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 1600px) {
            .software-hero {
              height: 553px;
            }
            .software-text05 {
              color: rgb(255, 255, 255);
              font-size: 56px;
              font-style: normal;
              font-weight: 700;
              line-height: 72px;
            }
            .software-schedule {
              padding-top: var(--dl-space-space-threeunits);
            }
            .software-icon {
              width: 64px;
              height: 64px;
            }
            .software-text06 {
              font-size: 28px;
              font-style: normal;
              font-weight: 700;
              line-height: 33px;
            }
            .software-text07 {
              line-height: 24px;
            }
            .software-text21 {
              color: rgb(104, 104, 104);
              font-size: 14px;
              line-height: 30px;
            }
          }
          @media (max-width: 1200px) {
            .software-hero {
              height: 537px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 991px) {
            .software-hero {
              height: 457px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .software-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .software-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .software-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .software-logo {
              width: 32px;
            }
            .software-features {
              padding-top: 260px;
            }
            .software-title {
              width: 100%;
              max-width: 1200px;
            }
            .software-text05 {
              font-size: 36px;
              line-height: 40px;
            }
            .software-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .software-text07 {
              line-height: 21px;
            }
            .software-text09 {
              line-height: 21px;
            }
            .software-text11 {
              line-height: 21px;
            }
            .software-text12 {
              font-size: 24px;
            }
            .software-text13 {
              line-height: 21px;
            }
            .software-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .software-top {
              flex-direction: column;
            }
            .software-right1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .software-links1 {
              gap: var(--dl-space-space-unit);
            }
            .software-branding {
              width: var(--dl-size-size-small);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .software-text21 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .software-hero {
              height: 400px;
              position: relative;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              background-color: #bd0a0a;
            }
            .software-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .software-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .software-left {
              margin-left: var(--dl-space-space-unit);
            }
            .software-logo {
              width: 32px;
            }
            .software-right {
              margin-right: var(--dl-space-space-unit);
            }
            .software-text04 {
              color: rgb(255, 255, 255);
            }
            .software-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .software-text05 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .software-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .software-text06 {
              font-size: 24px;
            }
            .software-text07 {
              font-size: 14px;
            }
            .software-publish {
              margin-left: 0px;
            }
            .software-text08 {
              font-size: 24px;
            }
            .software-text09 {
              font-size: 14px;
            }
            .software-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .software-analyze {
              margin-right: 0px;
            }
            .software-text10 {
              font-size: 24px;
            }
            .software-text11 {
              font-size: 14px;
            }
            .software-text13 {
              font-size: 14px;
            }
            .software-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .software-hero {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .software-logo {
              width: 32px;
            }
            .software-features {
              padding-top: 200px;
            }
            .software-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .software-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .software-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .software-analyze {
              margin-bottom: 0px;
            }
            .software-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Software
