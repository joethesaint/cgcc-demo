<p align="center">
  <img src="./favicon.svg" width="160" alt="CGCC logo" />
</p>

<h1 align="center">CGCC IMS Demo</h1>

<p align="center">Explore the member and ministry workflows in the CGCC IMS frontend.</p>

## The CGCC credo

> **Love God, Love People**<br>
> **Serve God, Serve People**
>
> By doing the above, we glorify God individually and corporately.

Source: [The CGCC Treatise, August 2024](https://thecitadelglobal.org/ochikoos/2024/08/THE-CGCC-TREATISE%E2%80%94AUGUST-2024-Website.pdf).

## Explore the demo

Open the [CGCC IMS demo](https://joethesaint.github.io/cgcc-demo/). Use the demo role selector on the sign-in page to review the interface for each role.

The demo includes member profiles and family, appointments, notifications, outreach opportunities, and role-based navigation. The layout supports desktop and mobile screens.

## Demo data

This site uses mock data. Do not enter real member information. The demo saves some changes in the current browser. These records are not live church records and are not shared with other users.

Frontend role controls support the demo experience. They do not secure data. A production API must validate each role, permission, record scope, and submitted value.

## About this repository

This repository contains the compiled demo site. The Vue source code stays in the private [`cgcc_vue_frontend` repository](https://github.com/joethesaint/cgcc_vue_frontend). GitHub Actions builds the source and publishes the site here.
