export const templates = [
    {
        "title": "Person",
        "description": "Simple person questionnaire",
        "imageUrl": null,
        "tags": [],
        "topicId": 1,
        "formFields": [
            {
                "name": "Name",
                "type": "text",
            },
            {
                "name": "email",
                "type": "text",
            },
            {
                "name": "description",
                "type": "select",
                "options": ["option1", "option2", "option3"]
            }
        ]
    },
    {
        "title": "Simple quiz",
        "description": "Simple questionnaire",
        "imageUrl": null,
        "tags": [],
        "topicId": 1,
        "formFields": [
            {
                "name": "What is the capital of France?",
                "type": "select",
                "options": ["Paris", "London", "Berlin", "Madrid"]
            },
            {
                "name": "Which planet is known as the Red Planet?",
                "type": "select",
                "options": ["Earth", "Mars", "Venus", "Jupiter"]
            },
            {
                "name": "What is 5 + 7?",
                "type": "text"
            },
            {
                "name": "Which is the largest ocean on Earth?",
                "type": "select",
                "options": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
            }
        ]

    },
]