import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Crimson Creative Studios</title>
          <meta
            name="description"
            content="Crimson Creative Studios, lorem ipsum"
          />
          <meta property="og:title" content="Crimson Creative Studios" />
          <meta
            property="og:description"
            content="Crimson Creative Studios, lorem ipsum"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cb15e6e0-82bf-45f3-ba03-ea73af3e065c/3613f958-0e4d-476a-92d5-814bd18f0faa?org_if_sml=1"
          />
        </Head>
        <section className="home-hero">
          <div className="home-menu">
            <div className="home-desktop-navigation">
              <nav className="home-centered">
                <div className="home-left">
                  <Link href="/">
                    <a className="home-link">
                      <img
                        alt="pastedImage"
                        src="/logocrimson-200h.png"
                        className="home-logo"
                      />
                    </a>
                  </Link>
                  <div className="home-links">
                    <Link href="/software">
                      <a className="home-link1 Link">
                        <span>Software</span>
                        <br></br>
                      </a>
                    </Link>
                    <span className="home-text02 Link">Games</span>
                    <span className="home-text03 Link">Contact</span>
                  </div>
                </div>
                <div className="home-right"></div>
              </nav>
            </div>
          </div>
          <header className="home-header">
            <h1 className="home-text04">Crimson Creative Studios</h1>
            <p className="home-text05">Simple, user-friendly, free</p>
            <div className="home-get-started">
              <span className="home-text06">Discover</span>
            </div>
          </header>
        </section>
        <section className="home-features">
          <div className="home-title">
            <span className="home-text07">
              Lets show you what we allow you to do
            </span>
          </div>
          <div className="home-cards">
            <div className="home-container1">
              <div className="home-schedule card">
                <span className="home-text08">Simplify</span>
                <span className="home-text09">
                  Simplify the process of setting up your software, one click
                  and it&apos;s done, no hassle!
                </span>
              </div>
              <div className="home-publish card">
                <span className="home-text10">Automate</span>
                <span className="home-text11">
                  Automate your tasks to make them simpler and cleaner.
                </span>
              </div>
            </div>
            <div className="home-container2">
              <div className="home-analyze card">
                <span className="home-text12">Grow</span>
                <span className="home-text13">
                  We can help you can your business grow, adding our products to
                  your workflow is easy and productive.
                </span>
              </div>
              <div className="home-get-leads card">
                <span className="home-text14">Take control</span>
                <span className="home-text15">
                  Our software allows flexibility including custom requests for
                  certain software, whether it be a modification of existing
                  software or new software, we can hopefully provide a
                  satisfactory product.
                </span>
              </div>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-top">
            <div className="home-right1">
              <div className="home-category">
                <span className="home-text16">Company</span>
                <div className="home-links1">
                  <span className="home-text17">About</span>
                  <span className="home-text18">Team</span>
                  <span className="home-text19">News</span>
                  <span className="home-text20">Partners</span>
                  <span className="home-text21">Careers</span>
                  <span className="home-text22">Press &amp; Media</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <img
              alt="pastedImage"
              src="/logocrimson-200h.png"
              className="home-branding"
            />
            <span className="home-text23">
              Copyright © Crimson Creative Studios - 2023
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
            background-color: #bd0a0a;
          }
          .home-hero {
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
          .home-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .home-centered {
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
          .home-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .home-link {
            display: contents;
          }
          .home-logo {
            width: 50px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-links {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .home-link1 {
            color: var(--dl-color-gray-white);
            text-decoration: none;
          }
          .home-text02 {
            color: var(--dl-color-gray-white);
          }
          .home-text03 {
            color: var(--dl-color-gray-white);
          }
          .home-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-header {
            display: flex;
            margin-top: auto;
            align-items: center;
            margin-bottom: auto;
            flex-direction: column;
          }
          .home-text04 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .home-text05 {
            color: rgb(238, 233, 254);
            font-size: 20px;
            max-width: 600px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-get-started {
            color: white;
            cursor: pointer;
            display: flex;
            margin-top: 40px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-color: #000000;
          }
          .home-get-started:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text06 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-features {
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
          .home-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text07 {
            color: var(--dl-color-gray-white);
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .home-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .home-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-schedule {
            height: 215px;
            padding-top: var(--dl-space-space-threeunits);
          }
          .home-text08 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text09 {
            line-height: 24px;
          }
          .home-publish {
            height: 215px;
            padding-top: var(--dl-space-space-threeunits);
          }
          .home-text10 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text11 {
            line-height: 24px;
          }
          .home-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .home-analyze {
            height: 215px;
            padding-top: var(--dl-space-space-threeunits);
          }
          .home-text12 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .home-text13 {
            line-height: 24px;
          }
          .home-get-leads {
            height: 215px;
            padding-top: var(--dl-space-space-threeunits);
          }
          .home-text14 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text15 {
            line-height: 24px;
          }
          .home-footer {
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
          .home-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-right1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-category {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text16 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text17 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text18 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text19 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text20 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text21 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text22 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-branding {
            width: var(--dl-size-size-medium);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text23 {
            color: #686868;
            font-size: 14px;
            line-height: 30px;
          }
          @media (max-width: 1600px) {
            .home-text07 {
              color: rgb(255, 255, 255);
              font-size: 56px;
              font-style: normal;
              font-weight: 700;
              line-height: 72px;
            }
            .home-schedule {
              height: 215px;
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-publish {
              height: 215px;
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-text10 {
              font-size: 28px;
              font-style: normal;
              font-weight: 700;
              line-height: 33px;
            }
            .home-text11 {
              line-height: 24px;
            }
            .home-analyze {
              height: 215px;
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-text12 {
              font-size: 28px;
              font-style: normal;
              font-weight: 700;
              line-height: 33px;
            }
            .home-text13 {
              line-height: 24px;
            }
            .home-get-leads {
              height: 215px;
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-text14 {
              font-size: 28px;
              font-style: normal;
              font-weight: 700;
              line-height: 33px;
            }
            .home-text15 {
              line-height: 24px;
            }
            .home-text23 {
              color: rgb(104, 104, 104);
              font-size: 14px;
              line-height: 30px;
            }
          }
          @media (max-width: 1200px) {
            .home-text06 {
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .home-schedule {
              height: 241px;
            }
            .home-publish {
              height: 241px;
            }
            .home-analyze {
              height: 241px;
            }
            .home-get-leads {
              height: 241px;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .home-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-logo {
              width: 32px;
            }
            .home-header {
              width: 100%;
              max-width: 1200px;
            }
            .home-features {
              padding-top: 260px;
            }
            .home-title {
              width: 100%;
              max-width: 1200px;
            }
            .home-text07 {
              font-size: 36px;
              line-height: 40px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-text09 {
              line-height: 21px;
            }
            .home-text11 {
              line-height: 21px;
            }
            .home-text13 {
              line-height: 21px;
            }
            .home-text14 {
              font-size: 24px;
            }
            .home-text15 {
              line-height: 21px;
            }
            .home-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .home-top {
              flex-direction: column;
            }
            .home-right1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-links1 {
              gap: var(--dl-space-space-unit);
            }
            .home-branding {
              width: var(--dl-size-size-small);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text23 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              position: relative;
              padding-bottom: 180px;
              background-color: #bd0a0a;
            }
            .home-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-left {
              margin-left: var(--dl-space-space-unit);
            }
            .home-logo {
              width: 32px;
            }
            .home-right {
              margin-right: var(--dl-space-space-unit);
            }
            .home-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-text04 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .home-text05 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-get-started {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text07 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-text08 {
              font-size: 24px;
            }
            .home-text09 {
              font-size: 14px;
            }
            .home-publish {
              margin-left: 0px;
            }
            .home-text10 {
              font-size: 24px;
            }
            .home-text11 {
              font-size: 14px;
            }
            .home-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-analyze {
              margin-right: 0px;
            }
            .home-text12 {
              font-size: 24px;
            }
            .home-text13 {
              font-size: 14px;
            }
            .home-text15 {
              font-size: 14px;
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-bottom: 160px;
            }
            .home-logo {
              width: 32px;
            }
            .home-text05 {
              color: #eee9fe;
            }
            .home-get-started {
              width: 100%;
            }
            .home-features {
              padding-top: 200px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .home-analyze {
              margin-bottom: 0px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
