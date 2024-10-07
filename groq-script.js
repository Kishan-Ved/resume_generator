// function using groq api for enhancing description text for internships and projects
import secrets from "./secrets.json" with {type: 'json'}
// console.log('loaded module')

async function enhanceDescription() {
	let description = document.getElementById("interndescriptionF").value;
	let description2 = document.getElementById("interndescription2F").value;

	console.log(secrets)
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
                            'You are a helpful assistant in the areas of global threat intelligence and osint.'
                    },
                    {
                        role: 'user',
                        content: description
                    }
                ],
                model: 'llama-3.1-8b-instant',
                temperature: 1,
                // max_tokens: 1024,
                top_p: 1,
                stream: false,
                stop: null
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.choices[0].message?.content, '<---- groq.com api');

            // return JSON.parse(data.choices[0].message?.content);
        } else {
            console.error(await response.json());
        }
}

// Module scope != global scope, hence assigning it to the global scope.
window.enhanceDescription = enhanceDescription;
