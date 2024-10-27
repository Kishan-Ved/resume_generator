import secrets from "./secrets.json" with {type: 'json'}
// console.log('loaded module')

const MODEL = 'llama-3.1-8b-instant'

// function using groq api for enhancing description text for internships and projects
async function enhanceDescription(section) {
	let element1
	let element2
	switch(section){
		case 'internship':
			element1 = document.getElementById("interndescriptionF")
			element2 = document.getElementById("interndescription2F")
			break;
		case 'project':
			element1 = document.getElementById("projectdescriptionF")
			element2 = document.getElementById("projectdescription2F")
			break;
		case 'por':
			element1 = document.getElementById("PORdescriptionF");
			element2 = document.getElementById("PORdescription2F");
			break;
		case 'skill':
			element1 = document.getElementById("skilldescriptionF");
			element2 = document.getElementById("skilldescriptionF");
			break;
	}

	const description = element1.value;
	const description2 = element2.value;

	// handle empty fields
	if(description === '' || description2 === '') {
		window.alert('Please fill in both fields')
		return
	}

	// set placeholder as 'enhancing'
	element1.value = ""
	element2.value = ""
	element1.placeholder = "Enhancing Text..."
	element2.placeholder = "Enhancing Text..."

	// console.log(description, description2)
	const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${secrets.GROQ_KEY}`
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'system',
                        content:
                            `-You are a text enhancer assistant. -You are given 2 lines of description about an ${section}, enhance them for them to be put in a professional resume, highlighting key points and useful skills involved in the ${section}. -Do this within 2 short lines only for EACH input line. -Return only the enhanced texts, separated by a line, without any prefixes like 'Enhanced text:'.`

                    },
                    {
                        role: 'user',
                        content: `Line 1: ${description}\n\nLine 2: ${description2}`
                    }
                ],
                model: MODEL,
                temperature: 1,
                // max_tokens: 1024,
                top_p: 1,
                stream: false,
                stop: null
            })
        });

	if (response.ok) {
		const data = await response.json();
		const answer = data.choices[0].message?.content
		const enhancedLines = answer.split('\n').filter(e=> e != "")
		// console.log(enhancedLines)
		element1.value = enhancedLines[0]
		element2.value = enhancedLines[1]

		element1.placeholder = "Enter the description line 1"
		element2.placeholder = "Enter the description line 2"

		// return JSON.parse(data.choices[0].message?.content);
	} else {
		console.error(await response.json());
		element1.value = ""
		element2.value = ""
	}
}

// Module scope != global scope, hence assigning it to the global scope.
window.enhanceDescription = enhanceDescription;
