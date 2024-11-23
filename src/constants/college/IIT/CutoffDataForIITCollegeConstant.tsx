// Common file to store the data of cut off for each of the IITs 

// creating the required interfaces here for this purpose
export interface IGender {
    genderList : Array<string>
}

// export interface 

export const IITBombayCutOffDataConstant = [
    {
        year : "2020",
        category : "General",
        gender : "Female",
        data : [
            {
                round : "Round 1",
                cutOffData : [
                    {
                        branch : "Computer Science and Engineering",
                        openingRank : 1,
                        closingRank : 100
                    },
                    {
                        branch : "Electrical Engineering",
                        openingRank : 100,
                        closingRank : 200
                    },
                    {
                        branch : "Mechanical Engineering",
                        openingRank : 200,
                        closingRank : 300
                    },
                    {
                        branch : "Civil Engineering",
                        openingRank : 300,
                        closingRank : 400
                    },
                    {
                        branch : "Chemical Engineering",
                        openingRank : 400,
                        closingRank : 500
                    }
                ]
            }
        ]
    }
]