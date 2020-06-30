//ESPN Test Automation
//Manual Testing: https://trello.com/invite/b/wrlThsX6/bc9d95817436bd8b798f84a869327fdf/trevortyler-solo-project


var array = require('../testAssests/sportsAssets')
var array2 = require('../testAssests/sportsAssets2')
var array3 = require('../testAssests/sportsAssets3')
var sports = {}

module.exports = {
    beforeEach: browser => {
        sports = browser.page.sportsPage()
        sports
            .navigate()
            .maximizeWindow()
    },
    after: browser => {
        browser.end()
    },
   
    'Search Test': browser => {
        array.forEach(test => {
            sports.search(test)
        })
    },

    'Fantasy Test': browser => {
        sports
            .click('@fntsy')
            .click('@fntsyBball')
            .verify.containsText('@bbalLogo', 'Fantasy Basketball')
            .waitForElementVisible('@dpthChrt')    
        array2.forEach(test => {
            sports.fantasy(test)
        })
    },

    'Sign In Test': browser => {
        sports
            .pause(2500)  
            .moveToElement('#global-user-trigger', 1,1)
            .click('@logIn')
            .api.frame('disneyid-iframe')
        sports
            .setValue('@email', 'bobsmith@mail.com')
            .setValue('@pass', 'abc123')
            .click('@logBtn')
            .pause(2500)
            .expect.element('@err').text.contain('The credentials you entered are incorrect')
        sports
            .click('@signBtn')
            .pause(2500)
            .setValue('@first', 'Bob')
            .setValue('@last', 'Smith')
            .setValue('@newPass', 'abc123')
            .pause(2500)
            .click('@signBtn2')
            .expect.element('@err2').text.contain('The password is too easily guessed.')
        sports
            .click('@close')
    },

    'Social Media Test': browser => {
        array3.forEach(test => {
            sports.media(test)
        })
    },

}