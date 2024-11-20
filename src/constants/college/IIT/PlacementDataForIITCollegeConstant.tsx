// file storing the placement data of the IIT colleges curently
// this data will be used in the placement component to show case it on the UI 


// making the interfaces required for the placement data of IIT colleges. 
// now we will be writing the interfaces for the constants in the same file itself

export interface IPlacementData {
    placementYear : string, 
    placementPackageData : Array<IPlacementPackageData>, 
    placementStatsImageData : IPlacementStatsImageData, 
    placementBranchVsPlacementPercentage : Array<IBranchVsPlacementPercentage>,
    overAllplacementPercentage : string, 
    highestPackage : string
}

export interface IBranchVsPlacementPercentage {
    branchName : string, 
    placementPercentage : string
}

export interface IPlacementPackageData {
    companyName : string, 
    ctc : string
}

export interface IPlacementStatsImageData {
    barGraphDataImage : string, 
    pieGraphDataImage : string, 
    lineGraphDataImage : string
}


export const IITBombayPlacementDataConstant : Array<IPlacementData> = [
    {
        placementYear : "2024",
        placementPackageData: [
            {
                companyName : "Microsoft",
                ctc : "1.4 Cr"
            },
            {
                companyName : "Google",
                ctc : "1.3 Cr"
            },
            {
                companyName : "Goldman Sachs",
                ctc : "1.2 Cr"
            }
        ], 
        placementStatsImageData : {
                barGraphDataImage : "https://www.google.com", 
                pieGraphDataImage : "https://www.google.com",
                lineGraphDataImage : "https://www.google.com"
        }, 
        placementBranchVsPlacementPercentage : [
            {
                branchName : "CSE", 
                placementPercentage : "95%"
            },
            {
                branchName : "ECE", 
                placementPercentage : "90%"
            },
            {
                branchName : "ME", 
                placementPercentage : "85%"
            }
        ],
        overAllplacementPercentage : "90%",
        highestPackage : "1.4 Cr"
    }, 
    {
        placementYear : "2023",
        placementPackageData: [
            {
                companyName : "Microsoft",
                ctc : "1.3 Cr"
            },
            {
                companyName : "Google",
                ctc : "1.2 Cr"
            },
            {
                companyName : "Goldman Sachs",
                ctc : "1.1 Cr"
            }
        ], 
        placementStatsImageData : {
                barGraphDataImage : "https://www.google.com", 
                pieGraphDataImage : "https://www.google.com",
                lineGraphDataImage : "https://www.google.com"
        }, 
        placementBranchVsPlacementPercentage : [
            {
                branchName : "CSE", 
                placementPercentage : "90%"
            },
            {
                branchName : "ECE", 
                placementPercentage : "85%"
            },
            {
                branchName : "ME", 
                placementPercentage : "80%"
            }
        ],
        overAllplacementPercentage : "85%",
        highestPackage : "1.3 Cr"
    }, 
    {
        placementYear : "2022",
        placementPackageData: [
            {
                companyName : "Microsoft",
                ctc : "1.2 Cr"
            },
            {
                companyName : "Google",
                ctc : "1.1 Cr"
            },
            {
                companyName : "Goldman Sachs",
                ctc : "1.0 Cr"
            }
        ], 
        placementStatsImageData : {
                barGraphDataImage : "https://www.google.com", 
                pieGraphDataImage : "https://www.google.com",
                lineGraphDataImage : "https://www.google.com"

        }, 
        placementBranchVsPlacementPercentage : [
            {
                branchName : "CSE", 
                placementPercentage : "85%"
            },
            {
                branchName : "ECE", 
                placementPercentage : "80%"
            },
            {
                branchName : "ME", 
                placementPercentage : "75%"
            }
        ],
        overAllplacementPercentage : "80%",
        highestPackage : "1.2 Cr"
    }
]