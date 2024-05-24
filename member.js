function skillsMember(){
    var skills = [
        {
            "id": 1,
            "name": "HTML",
            "description": "HyperText Markup Language is the standard markup language for creating web pages and web applications."
        },
        {
            "id": 2,
            "name": "CSS",
            "description": "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML."
        },
        {
            "id": 3,
            "name": "JavaScript",
            "description": "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification."
        },
        {
            "id": 4,
            "name": "PHP",
            "description": "PHP is a popular general-purpose scripting language that is especially suited to web development."
        },
        {
            "id": 5,
            "name": "MySQL",
            "description": "MySQL is an open-source relational database management system."
        },
        {
            "id": 6,
            "name": "Python",
            "description": "Python is an interpreted, high-level, general-purpose programming language."
        },
        {
            "id": 7,
            "name": "Java",
            "description": "Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented."
        },
        {
            "id": 8,
            "name": "C#",
            "description": "C# is a general-purpose, multi-paradigm programming language developed by Microsoft."
        },
        {
            "id": 9,
            "name": "C++",
            "description": "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language."
        },
        {
            "id": 10,
            "name": "C",
            "description": "C is a general-purpose, procedural computer programming language supporting structured programming."
        },
        {
            "id": 11,
            "name": "Ruby",
            "description": "A dynamic, open source programming language with a focus on simplicity and productivity."
        },
        {
            "id": 12,
            "name": "Swift",
            "description": "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc."
        }];
        //add skills to member
        var members = [
            {
                "id": 1,
                "name": "John Doe",
                "skills": [1, 2, 3]
            },
            {
                "id": 2,
                "name": "Jane Doe",
                "skills": [4, 5]
            },
            {
                "id": 3,
                "name": "Tom Doe",
                "skills": [6]
            },
            {
                "id": 4,
                "name": "Jerry Doe",
                "skills": [7, 8, 9]
            },
            {
                "id": 5,
                "name": "Jill Doe",
                "skills": [10]
            },
            {
                "id": 6,
                "name": "Jen Doe",
                "skills": [11]
            },
            {
                "id": 7,
                "name": "Joe Doe",
                "skills": [12]
            }
        ];
        
        //display members with skills
        var result = members.map(function(member){
            var memberSkills = member.skills.map(function(skillId){
                return skills.find(function(skill){
                    return skill.id === skillId;
                });
            });
            return {
                "id": member.id,
                "name": member.name,
                "skills": memberSkills
            }
        });
        console.log(result);
}
