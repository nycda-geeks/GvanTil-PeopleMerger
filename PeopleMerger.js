// ### People Merge App
// - Read in a file, named "people1.json", which contains a list of people.
// - Read in another file, named "people2.json", which contains another list of people.
// - After both of these files have been read, write a new file called "peopleComplete.txt" which contains a sorted list of all the people from the first two files.
// ### BONUS
// - Read in N files from a people directory, and merge all of the files in the directory into a peopleComplete.json file

var filesystem = require ('fs')
var everyone = [] // initialize empty array to hold the people
var readfiles = 0 // variable to track the number of files that have completely loaded


// function to keep track of when file loads are complete.
function done ( ){
	readfiles ++ // add one to the file counter

	// Only do the below when all (2) files are loaded
	if (readfiles == 2 ){ // note to self, if doing more files change this number
		// write the everyone data to the file
		filesystem.writeFile ('peopleComplete.txt', everyone.sort(), function (error){ // note the .sort which alphabetically sorts names
			// Handle errors if they occur
			if (error){
				console.log ("No noes! Error: " + error)
				throw error
			}
		})
	}
}

//////////////////////////////////////////////////////////
// Read file statements to load files into everyone array
//////////////////////////////////////////////////////////

function readJSON (file){
	filesystem.readFile (file, function (error, filedata){
	// change data format from buffer to JSON
	filedata = JSON.parse ( filedata )
	// Loop over json data
	filedata.forEach (function (person) {
		// Push seperate elements into the everyone array
		everyone.push (person)
	})
	// call the done function to keep track of our loading progress.
		done (  )
})
}


readJSON ('people1.json')
readJSON ('people2.json')

// // calling readfile on json data
// filesystem.readFile ('people1.json', function (error, filedata){
// 	// change data format from buffer to JSON
// 	filedata = JSON.parse ( filedata )
// 	// Loop over json data
// 	filedata.forEach (function (person) {
// 		// Push seperate elements into the everyone array
// 		everyone.push (person)
// 	})
// 	// call the done function to keep track of our loading progress.
// 		done (  )
// })

// // identical to above, just with different file name
// filesystem.readFile ('people2.json', function (error, filedata){
// 	filedata = JSON.parse ( filedata )
// 	filedata.forEach (function (person) {
// 		everyone.push (person)
// 	})
// 		done()
// })


