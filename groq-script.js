// Importing secrets from a JSON file to use confidential API keys.
import secrets from "./secrets.json" with {type: 'json'}

// The model version being used in the API request.
const MODEL = 'llama-3.1-8b-instant'

// Function to enhance description text for internship or project sections using the Groq API.
async function enhanceDescription(section) {
	let element1
	let element2

	switch (section) {
		// Check whether the section is for 'internship' or 'project' and assign the corresponding HTML input elements.
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

	// Fetching values from the input fields.
	const description = element1.value;
	const description2 = element2.value;

	// If either input field is empty, alert the user and stop further execution.
	if (description === '' || description2 === '') {
		window.alert('Please fill in both fields')
		return
	}

	// Clear the input fields and set placeholders while the text enhancement process is running.
	element1.value = ""
	element2.value = ""
	element1.placeholder = "Enhancing Text..." // Show progress status.
	element2.placeholder = "Enhancing Text..." // Show progress status.

	// Send a POST request to the Groq API to enhance the text descriptions.
	const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json', // Indicate that the request body is in JSON format.
			Authorization: `Bearer ${secrets.GROQ_KEY}` // Include the API key for authentication.
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
			model: MODEL, // Specify the model used for generating the response.
			temperature: 1, // Controls the randomness of the model output.
			top_p: 1, // Alternative to sampling; controls diversity in generated responses.
			stream: false, // Disables streaming of partial responses.
			stop: null // No stop sequence defined for this request.
		})
	});

	// If the API response is successful, process the returned data.
	if (response.ok) {
		const data = await response.json();  // Parse the JSON response.
		const answer = data.choices[0].message?.content // Extract the enhanced text from the response.
		const enhancedLines = answer.split('\n').filter(e => e != "")  // Split the response into lines and filter out empty lines.

		// Assign the enhanced descriptions back to the input fields.
		element1.value = enhancedLines[0]
		element2.value = enhancedLines[1]

		// Reset the placeholders to their original values after enhancement.
		element1.placeholder = "Enter the description line 1"
		element2.placeholder = "Enter the description line 2"

	} else {
		// If the API response fails, log the error and reset the fields.
		console.error(await response.json());
		element1.value = ""
		element2.value = ""
	}
}

// Assign the `enhanceDescription` function to the global `window` object so that it can be called from the HTML.
window.enhanceDescription = enhanceDescription;