# Discogs-Automation

Summary:

Discogs functions as a music database website. Users can look up albums, artists, and compilations. Test cases will be created to browse and interact with the website.

To automate Discogs tests were created using the page object model, custom commands using refactored code, and abstraction.

The project was run using Nightwatch.js, a Node.js testing framework.

Tests included:

  1: Searches four artists and confirms the first result is correct artist
  
  2: Advance search using name, track, and year
  
  3: Searches all items in marketplace and filters by currency
  
  4: Browse groups by tag and confirm selected group appears
  
  5: Browse events and confirms selected events show on page
  
  6: Filter trending releases by the dropdown menu
  
  7: Search the forum and verify results show for query
  
  8: Search the blog for artists and confirm they show in results
  
  9: Explore lists created by users and verifies search result table appears
