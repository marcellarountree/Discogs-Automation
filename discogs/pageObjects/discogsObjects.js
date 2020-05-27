var discogsCustomCommands = {

    search4artists: function (artist) {
        this
       .setValue('@searchBar', artist)
       .click('@searchButton')
       .expect.element('@firstResultSearch').text.to.contain(artist)
        this
       .click('@home')
       .pause(1000)
        return this
    },


    advancedSearch: function (search) {
        this
        .click('@exploreButton')
        .click('@advancedSearch')
        .setValue('@nameField', search.name)
        .setValue('@trackField', search.track)
        .setValue('@yearField', search.year)
        .click('@advSearchButton')
        .pause(3000)
        .verify.containsText('@advBody', search.name)
        .pause(3000)
        return this
    },


    marketplaceSearch: function (search) {
        this
        .click('@exploreMarketButton')
        .click('@allItemsMarketplace')
        .click(search)
        .assert.visible('@eventsBody') 
        return this
    },

    browseGroups: function (browse) {
        this
        .click('@communityButton')
        .click('@groups')
        .click('@browseGroupTab')
        .pause(3000)
        .click(browse.tag)
        .pause(6000)
        .verify.containsText('@groupPage', browse.group)
        .pause(6000)
        return this
    },


    blogSearch: function (search) {
        this
        .click('@communityButton')
        .click('@blog')
        .setValue('@blogSearchBar', search)
        .click('@blogSearchButton')
        .verify.containsText('@blogBody', search)
        return this
    },


    trendingReleases: function () { 
        this
        .click('@trendingReleases')
        .click('@filterRelevance')
        .assert.visible('@trendingBody')
        .click('@filterLatestAdditions')
        .assert.visible('@trendingBody')
        .click('@filterLatestEdits')
        .assert.visible('@trendingBody')
        .click('@filterAZ')
        .assert.visible('@trendingBody')
        .click('@filterZA')
        .assert.visible('@trendingBody')
        .click('@mostCollected')
        .assert.visible('@trendingBody')
        .click('@hot')
        .assert.visible('@trendingBody')
        .click('@yearNewFirst')
        .assert.visible('@trendingBody')
        .click('@yearOldestFirst')
        .assert.visible('@trendingBody')
        return this
    },


    forumSearch: function (data) { 
        this
        .click('@communityButton')
        .click('@forum')
        .setValue('@searchForumBar', data)
        .click('@searchForumSubmitButton')
        .assert.visible('@searchBody') 
        return this
    },


    eventBrowse: function (data) { 
        this
        .click('@communityButton')
        .click('@events')
        .assert.containsText("@eventsBody", data);
        return this
    },


    listSearch: function (search) {
        this
        .click('@exploreButton')
        .click('@listExplorer')
        .setValue('@listSearchBar', search)
        .pause(3000)
        .expect.element('@listsTable').to.be.visible
        return this
    },
}


module.exports = {
    url: 'https://www.discogs.com/',
    commands: [discogsCustomCommands],
    elements: 
    {     
        home: '#header_logo',
        searchBar: '#search_q',
        searchButton: '#do_site_search',
        firstResultSearch: '.card:nth-child(1) .search_result_title',
        nameField: '#title',
        trackField: '#track',
        yearField: '#year',
        advSearchButton: '#advanced_search_form_submit',
        exploreButton: '#section_nav_explore > .nav_group_control',
        advBody: '#search_results',
        exploreMarketButton: "#section_nav_marketplace > .nav_group_control",
        allItemsMarketplace: 'td:nth-child(4) > ul > li:nth-child(1) > a',
        marketplaceSearchBar: '#marketplace-search-input',
        marketplaceSearchButton: '.button:nth-child(3) > .icon',
        marketplaceHeader: 'h1',
        electronic: '.filter_genre .menu-item:nth-child(3) .link_text',
        house: '.filter_style .menu-item:nth-child(3) .link_text',
        communityButton: '#section_nav_community > .nav_group_control',
        trendingReleases: '.trending-releases > .see-more',
        listExplorer: '#site_nav_tray_explore td:nth-child(1) li:nth-child(3) > a',
        listSearchBar: '#list_search > input',
        listsTable: '.recent-lists-table',
        advancedSearch: '#site_nav_tray_explore td:nth-child(1) li:nth-child(4) > a',
        vinylMarketplace: '.tray_genres:nth-child(1) li:nth-child(1) > a',
        groups: '#site_nav_submenu_community > li:nth-child(1) > a',
        browseGroupTab: '#page_content > a',
        vinyl: '.groups_browse_tags:nth-child(4)',
        houseGroup: '.groups_browse_tags:nth-child(5)',
        music: '.groups_browse_tags:nth-child(6)',
        french: '.groups_browse_tags:nth-child(36)',
        disco: '.groups_browse_tags:nth-child(14)',
        oldschool: '.groups_browse_tags:nth-child(24)',
        italo: '.groups_browse_tags:nth-child(47)',
        groupPage: '#main_wrapper',
        blog:'#site_nav_submenu_community > li:nth-child(3) > a',
        blogSearchBar: '#site-search > input',
        blogSearchButton: 'button > .icon',
        blogBody: '#body',
        blogHome: '#Layer_2',
        filterRelevance: {
                selector: '//option[contains(text(),"Relevance")]',
                locateStrategy: 'xpath',
        },
        filterLatestAdditions: {
                selector: '//option[contains(text(),"Latest Additions")]',
                locateStrategy: 'xpath'
        },
         filterLatestEdits: {
                 selector: '//option[contains(text(),"Latest Edits")]',
                locateStrategy: 'xpath'
        },
        filterAZ: {
                selector: '//option[contains(text(),"Title, A-Z")]',
                locateStrategy: 'xpath'         
        },
        filterZA: {
                selector: '//option[contains(text(),"Title, Z-A")]',
                locateStrategy: 'xpath'
        },
        mostCollected: {
                 selector: '//option[contains(text(),"Most Collected")]',
                locateStrategy: 'xpath'
        },
        mostWanted: {
                 selector: '//option[contains(text(),"Most Wanted")]',
                locateStrategy: 'xpath'
        },
        hot: {
                selector: '//option[contains(text(),"Hot")]',
                locateStrategy: 'xpath'
        },
        yearNewFirst: {
                selector: '//option[contains(text(),"Year, Newest First")]',
                 locateStrategy: 'xpath'
        },
        yearOldestFirst: {
                selector: '//option[contains(text(),"Year, Oldest First")]',
                locateStrategy: 'xpath'
        },
        trendingBody: '#search_results',
        forum: '#site_nav_submenu_community > li:nth-child(2) > a',
        searchForumBar: '.search_table_field',
        searchForumSubmitButton: '#search_form_submit > .icon',
        searchBody: 'h1',
        events: '#site_nav_submenu_community > li:nth-child(7) > a',
        eventsBody: '#main_wrapper',
        currencyEuro: '.filter_currency .first .link_text',
        currencyUSD: '.filter_currency .menu-item:nth-child(3) .link_text',
        currencyGBP: '.filter_currency .menu-item:nth-child(4) .link_text',
    }
}
