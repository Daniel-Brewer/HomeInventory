<!-- // Define the database as an object -->
        const HomeInventoryDatabase = {}
<!-- Define the arrays (a.k.a. tables) in the database to store each type of items -->
        HomeInventoryDatabase.furniture = []
        HomeInventoryDatabase.musicgear = []
        HomeInventoryDatabase.electronics = []

<!-- // musicgear items -->
        const guitar = {
        name: "Telecaster",
        location: "Music-Room",
        description: "My main guitar for gigging."
        }
        const guitar2 = {
        name: "VC",
        location: "Music-Room",
        description: "My backup guitar for gigging."
        }
        const guitar3 = {
        name: "EXL1",
        location: "Music-Room",
        description: "My jazz/standards guitar for gigging."
        }
        const guitar4 = {
        name: "Stratocaster",
        location: "Music-Room",
        description: "My project guitar."
        }
        const profilingAmp = {
        name: "Kemper",
        location: "Music-Room",
        description: "My main guitar for gigging."
        }
        const interface = {
        name: "Scarlet",
        location: "Music-Room",
        description: "My interface for studio recording."
        }
        const cabinet = {
        name: "Jet-City",
        location: "Music-Room",
        description: "My main cabinet for gigging."
        }
        const condenserMic = {
        name: "Baby-Bottle-Mic",
        location: "Music-Room",
        description: "My main guitar for gigging."
        }
        const bass = {
        name: "SR505",
        location: "Music-Room",
        description: "My wife's main bass."
        }
        const acousticBass = {
        name: "Gold-Tone",
        location: "Music-Room",
        description: "My wife's acoustic bass."
        }

<!-- // furniture data items -->
        const producerDesk = {
        name: "Studio-Desk",
        location: "Music-Room",
        description: "This Studio desk is special because I found and purchased it works well as both a coding station and music production station."
        }
        const futonChair = {
        name: "Futon",
        location: "Rec-Room",
        description: "This futon is versatile in that it can add extra siiting room or extra sleep space"
        }
        const bigScreen = {
        name: "50in-TV",
        location: "Rec-Room",
        description: "This TV is the main one used for watching sports and movies."
        }
        const couch = {
        name: "Couch-Recliner",
        location: "Rec-Room",
        description: "This couch is my favorite place to relax."
        }
        const dresser = {
        name: "Handmade-Dresser",
        location: "Bedroom",
        description: "This dresser was crafted by my late Grandfather in law."
        }
        const vanity = {
        name: "Handmade-Vanity",
        location: "Bedroom",
        description: "This vanity was crafted by my late Grandfather in law."
        }
        const sofa = {
        name: "Sofa-Couch",
        location: "Living Room",
        description: "This is my wife's favorite place to read and relax."
        }
        const table = {
        name: "Roundtable",
        location: "Music-Room",
        description: "This table is a holding place for things in transition."
        }
        const diningTable = {
        name: "Kitchen-Table",
        location: "Kitchen",
        description: "This table is where we eat."
        }
        const computerDesk = {
        name: "Computer-Workstation",
        location: "Rec-Room",
        description: "This is our main desktop computer work area."
        }

        HomeInventoryDatabase.musicgear.push(guitar, guitar2, guitar3, guitar4, profilingAmp, interface, cabinet, condenserMic, bass, acousticBass)
        HomeInventoryDatabase.furniture.push(producerDesk, futonChair, bigScreen, couch, dresser, vanity, sofa, table,diningTable, computerDesk)

        console.log(HomeInventoryDatabase)
       

        const saveDatabase = function (localStorageKey, HomeInventoryDatabase) {
            /*
                Convert the Object into a string.
            */
            const stringifiedDatabase = JSON.stringify(HomeInventoryDatabase)
        
            /*
                Create a key in local storage, and store the string
                version of your inventory database as the value
            */
            localStorage.setItem(localStorageKey, stringifiedDatabase)
        }

        saveDatabase("HomeData" , HomeInventoryDatabase );

        const loadDatabase = function (localStorageKey) {
            // Get the string version of the database
            const databaseString = localStorage.getItem(localStorageKey)
        
            // Use JSON.parse() to convert the string back into an object
            return JSON.parse(databaseString)
        }
        console.log(loadDatabase("HomeData"));
        