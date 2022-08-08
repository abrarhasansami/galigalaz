var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Abal"
words[2] = "Chudirbhai"
words[3] = "Bandirpola"
words[4] = "Khankirpola"
words[5] = "Shauwarpola"
words[6] = "Hauwarpola"
words[7] = "Nolachoda"
words[8] = "Kuttar baccha"
words[9] = "Shuworer baccha"
words[10] = "Madarchod"
words[11] = "Bainchod"
words[12] = "Chotmarani"
words[13] = "Achoda"
words[14] = "Goruchoda"
words[15] = "Lewrachoda"
words[16] = "Jaroz Shontan"
words[17] = "Mayre Chudi"
words[18] = "Boin re Chudi"
words[19] = "Mangernati"
words[20] = "Zidan"
words[21] = "Jaura"
words[22] = "Putkikhor"
words[23] = "Magi"
words[24] = "Khanki"
words[25] = "Furat"
words[26] = "BNP"
words[27] = "BTS Army"
words[28] = "Ananta Jalil"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}