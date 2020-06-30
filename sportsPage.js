var sportsCommands ={
    search: function(data){
        this
            .verify.visible('@logo')
            .click('@srch')
            .pause(1000)
            .setValue('@srchBox', data.team)
            .click('@srchBtn')
            .pause(1500)
            .verify.containsText('@rslt', data.team)
            .navigate()
        return this
    },
    fantasy: function(data){
        this
            .api.url('https://www.espn.com/fantasy/basketball/story/_/id/28648854/nba-depth-charts')
        this
            .click(data.team)
            .pause(500)
            .click(data.player)
            // .getText('@plyhdr', function (result) {     console.log(result.value) })
            .verify.containsText('@plyhdr', data.hdr)

        return this    
    },
    media: function(data){
        this
            .verify.visible('@logo')
            .pause(500)
            .click(data.social)
            .pause(2500)
            .verify.visible(data.socMedia)
            .navigate()
        return this    
    }
}


module.exports = {
    url: 'https://www.espn.com/',
    commands: [sportsCommands],
    elements: {
//Search Test Selectors
        logo: 'a[name="&lpos=sitenavdefault&lid=sitenav_main-logo"]',
        srch: 'li.search',
        srchBox: 'input.search-box',
        srchBtn: 'input.btn-search',
        rslt: 'li[class="team__Results__Item"]',
        nba: 'a[name="&lpos=sitenavdefault+sitenav_nba"]',
        
//Fantasy Test Selectors
        fntsy: 'a[name="&lpos=sitenavdefault+sitenav_fantasy"]',
        fntsyBball: 'a[name="&lpos=subnav+subnav_fantasy_basketball"]',
        dpthChrt: {
            selector: '(//*[contains(text(),"Depth Chart")])[3]',
            locateStrategy: 'xpath'
        },
        bbalLogo: 'span[class="positioning"]',
        plyhdr: '.PlayerHeader__Main',
        
        bucks: 'a[href="https://www.espn.com/nba/team/depth/_/name/mil"]',
        hawks: 'a[href="https://www.espn.com/nba/team/depth/_/name/atl"]',
        wolves: 'a[href="https://www.espn.com/nba/team/depth/_/name/min"]',
        pels: 'a[href="https://www.espn.com/nba/team/depth/_/name/no"]',
        magic: 'a[href="https://www.espn.com/nba/team/depth/_/name/orl"]',
        suns: 'a[href="https://www.espn.com/nba/team/depth/_/name/phx"]',
        blazers: 'a[href="https://www.espn.com/nba/team/depth/_/name/por"]',
        jazz: 'a[href="https://www.espn.com/nba/team/depth/_/name/utah"]',
        wizards: 'a[href="https://www.espn.com/nba/team/depth/_/name/wsh"]',

        giannis: {
            selector:'(//*[contains(text(),"Giannis")])[1]',
            locateStrategy: 'xpath'
        },
        trae: {
            selector:'(//*[contains(text(),"Trae")])[1]',
            locateStrategy: 'xpath'
        },
        dangelo: {
            selector:'(//*[contains(text(),"D\'Angelo")])[1]',
            locateStrategy: 'xpath'
        },
        zion: {
            selector:'(//*[contains(text(),"Zion")])[1]',
            locateStrategy: 'xpath'
        },
        aaron: {
            selector:'(//*[contains(text(),"Aaron")])[1]',
            locateStrategy: 'xpath'
        },
        devin: {
            selector:'(//*[contains(text(),"Devin")])[1]',
            locateStrategy: 'xpath'
        },
        damian: {
            selector:'(//*[contains(text(),"Damian")])[1]',
            locateStrategy: 'xpath'
        },
        rudy: {
            selector:'(//*[contains(text(),"Rudy")])[1]',
            locateStrategy: 'xpath'
        },
        john: {
            selector:'(//*[contains(text(),"John")])[1]',
            locateStrategy: 'xpath'
        },
        
//Sign In Test Selectors
        logIn: {
            selector:'(//*[contains(text(),"Log In")])[2]',
            locateStrategy: 'xpath'
        },
        email: {
            selector: '(//input)[1]',
            locateStrategy: 'xpath'
        },
        pass: {
            selector: '(//input)[2]',
            locateStrategy: 'xpath'
        },
        logBtn: 'button.btn.btn-primary.btn-submit.ng-isolate-scope',
        err: {
            selector: '(//div)[6]',
            locateStrategy: 'xpath'
        },
        signBtn: 'a.btn.btn-secondary.ng-isolate-scope',
        first: {
            selector: '(//input)[1]',
            locateStrategy: 'xpath'
        },
        last: {
            selector: '(//input)[2]',
            locateStrategy: 'xpath'
        },
        newPass: {
            selector: '(//input)[4]',
            locateStrategy: 'xpath'
        },
        signBtn2: 'button.btn.btn-primary.ng-scope.ng-isolate-scope',
        err2: {
            selector: '(//div)[22]',
            locateStrategy: 'xpath'
        },
        close: 'button#close',

//Social Media Test Selectors
        face: {
            selector:'//*[contains(text(),"Facebook")]',
            locateStrategy: 'xpath'
        },    
        facebook: 'i.fb_logo',
        twit: {
            selector:'//*[contains(text(),"Twitter")]',
            locateStrategy: 'xpath'
        },
        twitter: 'header.css-1dbjc4n.r-1g40b8q',
        insta: {
            selector:'//*[contains(text(),"Instagram")]',
            locateStrategy: 'xpath'
        },
        instagram: 'img.s4Iyt',
        snap: {
            selector:'//*[contains(text(),"Snapchat")]',
            locateStrategy: 'xpath'
        },
        snapchat: 'img',
        you: {
            selector:'//*[contains(text(),"YouTube")]',
            locateStrategy: 'xpath'
        },
        youTube: 'a#logo.yt-simple-endpoint.style-scope.ytd-topbar-logo-renderer'
    }
}