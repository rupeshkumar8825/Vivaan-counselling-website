// this store the details related to the courses being offered by different IIT college
// Following are the details about the courses 
// 1. Duration for which it is being offered (4 year or 5 year)
// 2. List of courses being offered for each of the duration


export const IITBombayCoursesDetailsConstants = [
    {
        duration : "4",
        graduationType : [
            {
                type : "B.Tech",
                courses : [
                    "Aerospace Engineering1",
                    "Chemical Engineering",
                    "Civil Engineering",
                    "Computer Science and Engineering",
                    "Electrical Engineering",
                    "Mechanical Engineering",
                    "Metallurgical Engineering and Materials Science"
                ]
            },
            {
                type : "B.Sc",
                courses : [
                    "Aerospace Engineering2",
                    "Chemical Engineering",
                    "Civil Engineering",
                    "Computer Science and Engineering",
                    "Electrical Engineering",
                    "Mechanical Engineering",
                    "Metallurgical Engineering and Materials Science"
                ]
            },
        ] 
        
    },
    {
        duration : "5", 
        graduationType : [
            {
                type : "B.Tech + M.Tech",
                courses : [
                    "Aerospace Engineering3",
                    "Chemical Engineering",
                    "Civil Engineering",
                    "Computer Science and Engineering",
                    "Electrical Engineering",
                    "Mechanical Engineering",
                    "Metallurgical Engineering and Materials Science"
                ]
            }, 
            {
                type : "B.Sc + M.Sc",
                courses : [
                    "Aerospace Engineering4",
                    "Chemical Engineering",
                    "Civil Engineering",
                    "Computer Science and Engineering",
                    "Electrical Engineering",
                    "Mechanical Engineering",
                    "Metallurgical Engineering and Materials Science"
                ]
            }
        ]
        
    }
]