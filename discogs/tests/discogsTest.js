let discogs = {}


module.exports = {
    beforeEach: browser => {
        discogs = browser.page.discogsObjects()
        discogs.navigate()
    },

    after: browser => {
        discogs.end()
    },
   

'1: Searches four artists and confirms the first result is correct artist': browser => {
    var artists = require('../testAssets/discogsArtists')
        artists.forEach(test => {
            discogs
            .search4artists(test)
    })
},
 

'2: Advance search using name, track, and year': browser => {
    var advsearch = require('../testAssets/advancedSearchArray')
        advsearch.forEach(data => {
            discogs
            .advancedSearch(data)
    })
},
    

'3: Searches all items in marketplace and filters by currency': browser => {
    var mrktSearch = require('../testAssets/mrktSearch')
        mrktSearch.forEach(search => {
            discogs
                .marketplaceSearch(search)
    })
},


'4: Browse groups by tag and confirm selected group appears': browser => {
    var grpBrowse = require('../testAssets/grpBrowse')
        grpBrowse.forEach(data => {
            discogs
                .browseGroups(data)
    })
},


'5: Browse events and confirms selected events show on page': browser => {
    var eventSearch = require('../testAssets/eventSearch')
        eventSearch.forEach(data => {
             discogs
               .eventBrowse(data)
    })   
},


'6: Filter trending releases by the dropdown menu': browser => {
    discogs.trendingReleases()
},


'7: Search the forum and verify results show for query': browser => {
    var forumSearches = require('../testAssets/forumSearches')
        forumSearches.forEach(data => {
            discogs
                .forumSearch(data)
    })
},


'8: Search the blog for artists and confirm they show in results': browser => {
    var blogSearches = require('../testAssets/blogSearches')
        blogSearches.forEach(data => {
            discogs
             .blogSearch(data)
    })
},

'9: Explore lists created by users and verifies search result table appears': browser => {
   var artists = require('../testAssets/discogsArtists')
        artists.forEach(search => {
        discogs.listSearch(search)
    })
},
}
