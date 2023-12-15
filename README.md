# Zelda Encyclopedia/Wiki

## User story

As a user, I would hope to search for where to find the specific weapons, armors, loots and monsters, through a filtered search to get exactly what I want in both BOTW and TOTK.

## Wireframe

- Home page

1. A nav bar to categorize the search type (Home, Items, Monster, Location). You can click on those for filtered search
2. A search bar for the name of the thing you are searching for (if you know exactly what you are looking for).
3. A render box below to show the result of the search
4. The result can be added on top of one another
5. The result can also be deleted when clicking on it

- Individual pages

1.  There will be linked pages for the different categories (Home, Items, Monster, Location)
2.  Each linked page will have a list of all the items in that category listed in alphabetical orders
3.  Clicking on each item will bring you to another page that shows the detailed info of that item (e.g
    {
    "name": "white-maned lynel",
    "id": 123,
    "category": "monsters",
    "description": "These fearsome monsters have lived in Hyrule since ancient times. Their ability to breathe fire makes White-Maned Lynels among the toughest of the species; each one of their attacks is an invitation to the grave. There are so few eyewitness accounts of this breed because a White-Maned Lynel is not one to let even simple passersby escape with their lives.",
    "common_locations":
    "Hyrule Field",
    "Hebra Mountains"

    "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/white-maned_lynel/image"
    }
    )

## concepts used

useState, useEffect, fetch and await, router, CRUD, airTable
