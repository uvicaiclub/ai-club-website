import { useState } from "react";

const ChatBotPage = () => {

    // Prevents usual form submission
    // $('form input').on('keypress', function(e) {
    // return e.which !== 13;
    // });

    // Click Submit on "Enter" button
    function keyboardSubmit(event: { keyCode: any; }) {
        var x = event.keyCode
        if (x === 13) {  // 13 is the return key
            const submit = document.getElementById("submit")
            if(submit === null) return
            submit.click()
        }
    }

    ///////////////////////
    ////// INITIALIZE /////
    ///////////////////////

    const unknown = "I don't understand"
    const [userInput, setUserInput] = useState("")
    const [response, setResponse] = useState("")
    const [previousUserInput, setPreviousUserInput] = useState("")
    const [responded, setResponded] = useState(false)
    

    //////////////////
    ////// MAIN //////
    //////////////////


    //Runs when the submit button is pressed
    function Submit() {

        //Do not submit blank responses
        if(userInput === "") return
        
        //Enable voting and responses
        setResponded(true)
        setPreviousUserInput(userInput)

        //Convert user string to set
        let user_set = toSet(Tokenize(userInput.toLowerCase()))

        //Queries the entire database
        //TODO: test/test.php needs a real name and local directory
        // $.post("../test/test.php", {},
        // function(data) {

        // 	//Retrieves the database
        // 	var db = JSON.parse(data);

        // 	//Convert strings to one large set (not very efficient)
        // 	var strings = [];
        // 	for(i in db){
        // 		strings[i] = db[i]["string"];
        // 	}
            
        // 	//Converts array of strings to array of sets
        // 	var db_sets = dbToSet(strings)
                    
        // 	//Returns an array of threshold jaccard values (currently highest match).
        // 	for(var i=100; i>0; i--){
        // 		var thresh_i = JaccardThreshold(user_set, db_sets, i*0.01);
        // 		if(thresh_i.length != 0) break;
        // 	}

        // 	//Converts indexes to db dictionary values
        // 	var choices = [];
        // 	for(var i = 0; i<thresh_i.length; i++){
        // 		choices.push(db[thresh_i[i]]);
        // 	}

        // 	//Chooses best responses based on rating
        // 	var response = ratingPick(choices);

        // 	//return the unknown response
        // 	if(response == null) response = unknown;

        // 	//Populate HTML values for user
        // 	$('#response').html(response); //Send to html
        // 	$('#chat')[0].reset();

        // 	//Reveal voting for response
        // 	$('#thumb_up').show();
        // 	$('#thumb_down').show();
        // });
    }

    //Runs when the add response button is pressed
    function AddResponse() {

        //checks and prevents spam
        if((responded == false) || (userInput == "")) return;
        setResponded(false)

        //Tokenizes the user string
        const tokenArray = Tokenize(previousUserInput).join(" ");

        //If the string and response are already in the db, increase
        //the rating. Otherwise, add to database
        // $.post("../chatbot/addResponse.php", {previous_user_string: tolkens, user_string: user_string},
        // function(data) {

        // 	//Populate HTML values for user
        // 	$('#response').html(data); //Send to html
        // 	$('#chat')[0].reset();
            
        // 	//Reveal voting for response
        // 	$('#thumb_up').show();
        // 	$('#thumb_down').show();
        // });
    }

    //Increases the rating for responses
    function UpVote() {

        //Omit unknown response
        if((response === unknown) || (response === "<br>\n            ")) return

        //updates the db
        // $.post("../chatbot/upvote.php", {previous_user_string: previous_user_string, response2: response2},
        // function(data) {

        // 	//prevents spamming
        // 	$('#thumb_up').hide();
        // 	$('#thumb_down').hide();
        // });
    }

    //Decreases the rating for responses
    function DownVote() {

        //Omit unknown response
        if((response === unknown) || (response === "<br>\n            ")) return

        //updates the db
        // $.post("../chatbot/downvote.php", {previous_user_string: previous_user_string, response2: response2},
        // function(data) {

        //prevents spamming
        // 	$('#thumb_up').hide();
        // 	$('#thumb_down').hide();
        // });
    }


    ///////////////////////
    ////// FUNCTIONS //////
    ///////////////////////

    //Jaccard Similarity
    function Jaccard(set1: string[], set2: string[]) {
        const intersect = new Set(set1.filter(value => set2.includes(value)))
        const union = new Set([...set1, ...set2])
        return intersect.size / union.size
    }

    //Tokenize input into string array
    function Tokenize(str: string){

        //Parse string and split
        let str_arr = str.toLowerCase().replace('?',' ?').replace('!',' !').replace(',',' ').replace('.',' ').replace('\'re',' are').replace('\'ll',' will').replace('\'d',' would').replace('\'s',' is').replace('\'m',' am').split(" ")

        //Remove empty elements
        for(var i = 0; i < str_arr.length; i++){
            if (str_arr[i] === "") str_arr.splice(i--, 1)
        }
        return str_arr
    }

    //Converts string array into string set
    function toSet(str_arr: string[]){
        return new Set(str_arr)
    }

    //converts db entries into and array of sets 
    function dbToSet(db_arr: string[]){
        var db_set = []
        for (var i = 0; i < db_arr.length; i++){
            db_set.push(new Set(db_arr[i].split(" ")))
        }
        return db_set
    }

    //Returns the indexs with Jaccard value greater than threshold
    function JaccardThreshold(str_set: string[], db_set: string[][], threshold: number = 0.50){
        var threshold_index = []

        //run Jaccard and record index of threshold values
        for(var j = 0; j < db_set.length; j++){
            if(Jaccard(str_set, db_set[j]) >= threshold) threshold_index.push(j)
        }
        return threshold_index
    }

    //Algorithm for picking similar strings based 
    //on random numbers and rank.
    function ratingPick(choices: any){
        
        //Nothing to choose from, or only one choice
        if(choices.length === 0) return null
        if(choices.length === 1) return choices[0]["response"]

        //Variables used in calculation
        var my_data: never[] = []
        var cur_rank = 0
        var max_rank = 0
        var min = 9999999
        var choice

        //obtain the minimum rating, parse the ratings
        //into Int and add them to my_data.
        // for(x in choices){
        // 	my_data.push(parseInt(choices[x]["rating"]));
        // 	if(choices[x]["rating"] < min){
        // 		min = choices[x]["rating"];
        // 	}
        // }

        //Determines the algorithm for normalizing the data
        var negative = false
        if(min <= 1){
            negative = true
        }
            
        //Determines the difference value
    let difference =  min - 1
        if(negative === true){
            difference = -Math.abs(min - 1)
        }

        // for(x in my_data){
        // 	//Modify data with difference
        // 	my_data[x] = my_data[x] - difference;

        // 	//Creating the max_rank value
        // 	max_rank = max_rank + my_data[x];
        // }

        //Generate our random number
        const rand = Math.random()

        //run probability algorithm
        // for(x in my_data){
            //create a threshold for our first choice
            // cur_rank = cur_rank + (my_data[x] / max_rank)

            //return the choice which lies in the threshold
        // 	if(rand < cur_rank){
        // 		choice = choices[x]["response"];
        // 		break
        // 	}
        // }
        // return choice;
    }

    return (
        <main>
            <br/>
            <h1>This is the UVic AI Club Chatbot</h1>
            <br/>
            <br/>
            <div className="chatbot">

                You:
                <div id="previous_user_input"><br/>
                </div>

                <br/>
                <br/>

                Chatbot:
                <div id="response"><br/>
                </div>

                <br/>
                <br/>

                <form id="chat" method="post">
                    <input name="user_string" id="user_string" type="text" onChange={e => setUserInput(e.target.value)} onKeyDown={keyboardSubmit}/><br/>
                    <input type="button" id="thumb_up" className="thumb_up" onClick={UpVote}/>
                    <input type="button" id="submit" onClick={Submit} value="Submit"/>
                    <input type="button" id="addResponse=" onClick={AddResponse} value="Add Response"/>
                    <input type="button" id="thumb_down" className="thumb_down" onClick={DownVote}/>
                </form>

                <br/>
            </div>
            <br/>
        </main>
    );
}

export default ChatBotPage;