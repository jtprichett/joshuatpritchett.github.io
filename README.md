## JPrime's Personal Website [![Build Status](https://travis-ci.org/JoshuaTPritchett/website.svg?branch=master)](https://travis-ci.org/JoshuaTPritchett/website)

## Summary

*Vision:* To further my knowledge of React.js development knowledge and show recruiters my sweet skills

*Strategy:* Modular website that extends my resume!


Things I want to accomplish:
- [X] Hosting the website on Github Pages
- [ ] [Focus on some testing approaches found here](https://content.pivotal.io/blog/testing-strategies)
    - [ ] TDD
    - [ ] BDD?
- [ ] Leverage Continuous Integration (CI) practices using [Travis CI](https://travis-ci.org/)
    - [X] Development Environment Parity
    - [ ] Automated Testing
       - [X] Linting
       - [X] Unit Testing
       - [ ] Journeys Testing
    - [ ] Automated Site Deployment to Github Pages
- [ ] Keep my skills sharp, especially since I am now a Product Manager
    - [ ] Use issues to populate stories for website releases
    - [ ] Try to create some wireframes?

This is just a rough list and I will look to improve this list over time.  Ultimately, I have always wanted to do a mini-site project using entirely open source tools. So I will create detailed goals for this site and myself over time.

## Hosting on Github Pages

I was hoping that hosting a React.js based site on Github pages was going to be an easy task. However, it's proven to be difficult due to how redirects and rendering are performing by Pages. I used the following guides to help me learn and get started:

* [Best example for starting a Github pages React App](https://github.com/firstcontributions/firstcontributions.github.io)
   * `I would highly recommend starting here` as I wasted a solid 4 hours not understanding how redirects work
* [Here is a more detailed guide on how to setup single-page websites](https://github.com/rafrex/spa-github-pages)



## Leverage Continuous Integration (CI) Practices Using Travis CI

#### Development Environment Parity

I use MacOSX and have no idea what it means for parity when developing JavaScript. I wanted [Ubuntu Trusty Tahr](http://releases.ubuntu.com/14.04/) users to replicate my development process. I eneded up using a few important fields within my `package.json`:

```
* engines
* browserlist package, with browserslist configuration
``` 

#### Automated Testing

###### Linting

Packages used for linting:

```
npm install eslint eslint-config-airbnb eslint-plugin-custom-rules babel-eslint
```

I additionally added [.eslintrc.js](./.eslintrc.js) to be provided with linting rules and added the command `npm run lint` to perform the linting successfully with Travis!

###### Unit Testing

Unit testing with Travis kept consistently failing, I ended up needing to specify a srict [nvm](https://github.com/creationix/nvm) version within my [travis.yml file](./.travis.yml) to match the package.json `engine` requirements.

###### Journeys Testing

#### Automated Site Deployment to Github Pages
