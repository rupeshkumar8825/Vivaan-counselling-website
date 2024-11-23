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


export const IITBombayCutOffContentConstant : string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint praesentium, modi voluptatem a iusto consequuntur eligendi quibusdam impedit at cupiditate, culpa accusamus labore et. Perferendis numquam blanditiis eum est necessitatibus Officiis provident hic ipsam deserunt minus, tenetur delectus iste harum neque asperiores id commodi ipsum eligendi inventore perferendis quam molestiae, nesciunt rerum aliquid tempore magni recusandae amet explicabo! Ex, animi!"
export const IITBombayCutOffHeadingIdConstant : string = "iit-bombay-cut-off-page-heading"
export const IITBombayCutOffHeadingName : string = "IIT Bombay Cut Off Details"