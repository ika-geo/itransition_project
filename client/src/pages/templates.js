export const templates = [
    {
        "title": "Person",
        "description": "Simple person questionnaire",
        "imageUrl": "https://centrechurch.org/wp-content/uploads/2022/03/img-person-placeholder.jpeg",
        "tags": [
            "Person",
            "questionnaire",
        ],
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
                "name": "description1",
                "type": "select",
                "options": ["option1", "option2", "option3"]
            }
        ]
    },
    {
        "title": "Simple quiz",
        "description": "Simple questionnaire",
        "imageUrl": "https://media.istockphoto.com/id/1186386668/vector/quiz-in-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design.jpg?s=612x612&w=0&k=20&c=mBQMqQ6kZuC9ZyuV5_uCm80QspqSJ7vRm0MfwL3KLZY=",
        "tags": [
            "quiz",
            "qustions",
        ],
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