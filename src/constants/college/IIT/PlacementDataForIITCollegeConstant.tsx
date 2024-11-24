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


export const IITGandhinagarPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Amazon",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Facebook",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Apple",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "92%"
            },
            {
                branchName: "ECE",
                placementPercentage: "88%"
            },
            {
                branchName: "ME",
                placementPercentage: "83%"
            }
        ],
        overAllplacementPercentage: "88%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Amazon",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Facebook",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Apple",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "87%"
            },
            {
                branchName: "ECE",
                placementPercentage: "83%"
            },
            {
                branchName: "ME",
                placementPercentage: "78%"
            }
        ],
        overAllplacementPercentage: "83%",
        highestPackage: "1.1 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Amazon",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Facebook",
                ctc: "0.9 Cr"
            },
            {
                companyName: "Apple",
                ctc: "0.8 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "82%"
            },
            {
                branchName: "ECE",
                placementPercentage: "78%"
            },
            {
                branchName: "ME",
                placementPercentage: "73%"
            }
        ],
        overAllplacementPercentage: "78%",
        highestPackage: "1.0 Cr"
    }
]


export const IITBhubaneshwarPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Adobe",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Oracle",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Cisco",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "90%"
            },
            {
                branchName: "ECE",
                placementPercentage: "85%"
            },
            {
                branchName: "ME",
                placementPercentage: "80%"
            }
        ],
        overAllplacementPercentage: "85%",
        highestPackage: "1.1 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Adobe",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Oracle",
                ctc: "0.9 Cr"
            },
            {
                companyName: "Cisco",
                ctc: "0.8 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "85%"
            },
            {
                branchName: "ECE",
                placementPercentage: "80%"
            },
            {
                branchName: "ME",
                placementPercentage: "75%"
            }
        ],
        overAllplacementPercentage: "80%",
        highestPackage: "1.0 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Adobe",
                ctc: "0.9 Cr"
            },
            {
                companyName: "Oracle",
                ctc: "0.8 Cr"
            },
            {
                companyName: "Cisco",
                ctc: "0.7 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "80%"
            },
            {
                branchName: "ECE",
                placementPercentage: "75%"
            },
            {
                branchName: "ME",
                placementPercentage: "70%"
            }
        ],
        overAllplacementPercentage: "75%",
        highestPackage: "0.9 Cr"
    }
]

export const IITMadrasPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "IBM",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Intel",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Qualcomm",
                ctc: "1.1 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "93%"
            },
            {
                branchName: "ECE",
                placementPercentage: "89%"
            },
            {
                branchName: "ME",
                placementPercentage: "84%"
            }
        ],
        overAllplacementPercentage: "89%",
        highestPackage: "1.3 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "IBM",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Intel",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Qualcomm",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "88%"
            },
            {
                branchName: "ECE",
                placementPercentage: "84%"
            },
            {
                branchName: "ME",
                placementPercentage: "79%"
            }
        ],
        overAllplacementPercentage: "84%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "IBM",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Intel",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Qualcomm",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "83%"
            },
            {
                branchName: "ECE",
                placementPercentage: "79%"
            },
            {
                branchName: "ME",
                placementPercentage: "74%"
            }
        ],
        overAllplacementPercentage: "79%",
        highestPackage: "1.1 Cr"
    }
]

export const IITGuwahatiPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Flipkart",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Walmart",
                ctc: "1.1 Cr"
            },
            {
                companyName: "PayPal",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "91%"
            },
            {
                branchName: "ECE",
                placementPercentage: "87%"
            },
            {
                branchName: "ME",
                placementPercentage: "82%"
            }
        ],
        overAllplacementPercentage: "87%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Flipkart",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Walmart",
                ctc: "1.0 Cr"
            },
            {
                companyName: "PayPal",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "86%"
            },
            {
                branchName: "ECE",
                placementPercentage: "82%"
            },
            {
                branchName: "ME",
                placementPercentage: "77%"
            }
        ],
        overAllplacementPercentage: "82%",
        highestPackage: "1.1 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Flipkart",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Walmart",
                ctc: "0.9 Cr"
            },
            {
                companyName: "PayPal",
                ctc: "0.8 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "81%"
            },
            {
                branchName: "ECE",
                placementPercentage: "77%"
            },
            {
                branchName: "ME",
                placementPercentage: "72%"
            }
        ],
        overAllplacementPercentage: "77%",
        highestPackage: "1.0 Cr"
    }
]


export const IITIndorePlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Uber",
                ctc: "1.1 Cr"
            },
            {
                companyName: "LinkedIn",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Twitter",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "89%"
            },
            {
                branchName: "ECE",
                placementPercentage: "85%"
            },
            {
                branchName: "ME",
                placementPercentage: "80%"
            }
        ],
        overAllplacementPercentage: "85%",
        highestPackage: "1.1 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Uber",
                ctc: "1.0 Cr"
            },
            {
                companyName: "LinkedIn",
                ctc: "0.9 Cr"
            },
            {
                companyName: "Twitter",
                ctc: "0.8 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "84%"
            },
            {
                branchName: "ECE",
                placementPercentage: "80%"
            },
            {
                branchName: "ME",
                placementPercentage: "75%"
            }
        ],
        overAllplacementPercentage: "80%",
        highestPackage: "1.0 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Uber",
                ctc: "0.9 Cr"
            },
            {
                companyName: "LinkedIn",
                ctc: "0.8 Cr"
            },
            {
                companyName: "Twitter",
                ctc: "0.7 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "79%"
            },
            {
                branchName: "ECE",
                placementPercentage: "75%"
            },
            {
                branchName: "ME",
                placementPercentage: "70%"
            }
        ],
        overAllplacementPercentage: "75%",
        highestPackage: "0.9 Cr"
    }
]

export const IITKanpurPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Tesla",
                ctc: "1.4 Cr"
            },
            {
                companyName: "SpaceX",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Nvidia",
                ctc: "1.2 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "94%"
            },
            {
                branchName: "ECE",
                placementPercentage: "90%"
            },
            {
                branchName: "ME",
                placementPercentage: "85%"
            }
        ],
        overAllplacementPercentage: "90%",
        highestPackage: "1.4 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Tesla",
                ctc: "1.3 Cr"
            },
            {
                companyName: "SpaceX",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Nvidia",
                ctc: "1.1 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "89%"
            },
            {
                branchName: "ECE",
                placementPercentage: "85%"
            },
            {
                branchName: "ME",
                placementPercentage: "80%"
            }
        ],
        overAllplacementPercentage: "85%",
        highestPackage: "1.3 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Tesla",
                ctc: "1.2 Cr"
            },
            {
                companyName: "SpaceX",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Nvidia",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "84%"
            },
            {
                branchName: "ECE",
                placementPercentage: "80%"
            },
            {
                branchName: "ME",
                placementPercentage: "75%"
            }
        ],
        overAllplacementPercentage: "80%",
        highestPackage: "1.2 Cr"
    }
]

export const IITJodhpurPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Snapchat",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Pinterest",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Dropbox",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "88%"
            },
            {
                branchName: "ECE",
                placementPercentage: "84%"
            },
            {
                branchName: "ME",
                placementPercentage: "79%"
            }
        ],
        overAllplacementPercentage: "84%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Snapchat",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Pinterest",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Dropbox",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "83%"
            },
            {
                branchName: "ECE",
                placementPercentage: "79%"
            },
            {
                branchName: "ME",
                placementPercentage: "74%"
            }
        ],
        overAllplacementPercentage: "79%",
        highestPackage: "1.1 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Snapchat",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Pinterest",
                ctc: "0.9 Cr"
            },
            {
                companyName: "Dropbox",
                ctc: "0.8 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "78%"
            },
            {
                branchName: "ECE",
                placementPercentage: "74%"
            },
            {
                branchName: "ME",
                placementPercentage: "69%"
            }
        ],
        overAllplacementPercentage: "74%",
        highestPackage: "1.0 Cr"
    }
]

export const IITKharagpurPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Netflix",
                ctc: "1.5 Cr"
            },
            {
                companyName: "Airbnb",
                ctc: "1.4 Cr"
            },
            {
                companyName: "Spotify",
                ctc: "1.3 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "96%"
            },
            {
                branchName: "ECE",
                placementPercentage: "92%"
            },
            {
                branchName: "ME",
                placementPercentage: "87%"
            }
        ],
        overAllplacementPercentage: "92%",
        highestPackage: "1.5 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Netflix",
                ctc: "1.4 Cr"
            },
            {
                companyName: "Airbnb",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Spotify",
                ctc: "1.2 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "91%"
            },
            {
                branchName: "ECE",
                placementPercentage: "87%"
            },
            {
                branchName: "ME",
                placementPercentage: "82%"
            }
        ],
        overAllplacementPercentage: "87%",
        highestPackage: "1.4 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Netflix",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Airbnb",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Spotify",
                ctc: "1.1 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "86%"
            },
            {
                branchName: "ECE",
                placementPercentage: "82%"
            },
            {
                branchName: "ME",
                placementPercentage: "77%"
            }
        ],
        overAllplacementPercentage: "82%",
        highestPackage: "1.3 Cr"
    }
]


export const IITHyderabadPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Microsoft",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "1.1 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "90%"
            },
            {
                branchName: "ECE",
                placementPercentage: "85%"
            },
            {
                branchName: "ME",
                placementPercentage: "80%"
            }
        ],
        overAllplacementPercentage: "85%",
        highestPackage: "1.3 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Microsoft",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "85%"
            },
            {
                branchName: "ECE",
                placementPercentage: "80%"
            },
            {
                branchName: "ME",
                placementPercentage: "75%"
            }
        ],
        overAllplacementPercentage: "80%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Microsoft",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "80%"
            },
            {
                branchName: "ECE",
                placementPercentage: "75%"
            },
            {
                branchName: "ME",
                placementPercentage: "70%"
            }
        ],
        overAllplacementPercentage: "75%",
        highestPackage: "1.1 Cr"
    }
]

export const IITPatnaPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Google",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "88%"
            },
            {
                branchName: "ECE",
                placementPercentage: "84%"
            },
            {
                branchName: "ME",
                placementPercentage: "79%"
            }
        ],
        overAllplacementPercentage: "84%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Google",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "83%"
            },
            {
                branchName: "ECE",
                placementPercentage: "79%"
            },
            {
                branchName: "ME",
                placementPercentage: "74%"
            }
        ],
        overAllplacementPercentage: "79%",
        highestPackage: "1.1 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Google",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "0.9 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "0.8 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "78%"
            },
            {
                branchName: "ECE",
                placementPercentage: "74%"
            },
            {
                branchName: "ME",
                placementPercentage: "69%"
            }
        ],
        overAllplacementPercentage: "74%",
        highestPackage: "1.0 Cr"
    }
]

export const IITDelhiPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Facebook",
                ctc: "1.4 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.2 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "95%"
            },
            {
                branchName: "ECE",
                placementPercentage: "90%"
            },
            {
                branchName: "ME",
                placementPercentage: "85%"
            }
        ],
        overAllplacementPercentage: "90%",
        highestPackage: "1.4 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Facebook",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.1 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "90%"
            },
            {
                branchName: "ECE",
                placementPercentage: "85%"
            },
            {
                branchName: "ME",
                placementPercentage: "80%"
            }
        ],
        overAllplacementPercentage: "85%",
        highestPackage: "1.3 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Facebook",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "85%"
            },
            {
                branchName: "ECE",
                placementPercentage: "80%"
            },
            {
                branchName: "ME",
                placementPercentage: "75%"
            }
        ],
        overAllplacementPercentage: "80%",
        highestPackage: "1.2 Cr"
    }
]

export const IITRoparPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Apple",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.1 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "92%"
            },
            {
                branchName: "ECE",
                placementPercentage: "88%"
            },
            {
                branchName: "ME",
                placementPercentage: "83%"
            }
        ],
        overAllplacementPercentage: "88%",
        highestPackage: "1.3 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Apple",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "87%"
            },
            {
                branchName: "ECE",
                placementPercentage: "83%"
            },
            {
                branchName: "ME",
                placementPercentage: "78%"
            }
        ],
        overAllplacementPercentage: "83%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Apple",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "82%"
            },
            {
                branchName: "ECE",
                placementPercentage: "78%"
            },
            {
                branchName: "ME",
                placementPercentage: "73%"
            }
        ],
        overAllplacementPercentage: "78%",
        highestPackage: "1.1 Cr"
    }
]

export const IITMandiPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Adobe",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Oracle",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Cisco",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "90%"
            },
            {
                branchName: "ECE",
                placementPercentage: "85%"
            },
            {
                branchName: "ME",
                placementPercentage: "80%"
            }
        ],
        overAllplacementPercentage: "85%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Adobe",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Oracle",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Cisco",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "85%"
            },
            {
                branchName: "ECE",
                placementPercentage: "80%"
            },
            {
                branchName: "ME",
                placementPercentage: "75%"
            }
        ],
        overAllplacementPercentage: "80%",
        highestPackage: "1.1 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Adobe",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Oracle",
                ctc: "0.9 Cr"
            },
            {
                companyName: "Cisco",
                ctc: "0.8 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "80%"
            },
            {
                branchName: "ECE",
                placementPercentage: "75%"
            },
            {
                branchName: "ME",
                placementPercentage: "70%"
            }
        ],
        overAllplacementPercentage: "75%",
        highestPackage: "1.0 Cr"
    }
]

export const IITRoorkeePlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Google",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "1.1 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "92%"
            },
            {
                branchName: "ECE",
                placementPercentage: "88%"
            },
            {
                branchName: "ME",
                placementPercentage: "83%"
            }
        ],
        overAllplacementPercentage: "88%",
        highestPackage: "1.3 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Google",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "87%"
            },
            {
                branchName: "ECE",
                placementPercentage: "83%"
            },
            {
                branchName: "ME",
                placementPercentage: "78%"
            }
        ],
        overAllplacementPercentage: "83%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Google",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "82%"
            },
            {
                branchName: "ECE",
                placementPercentage: "78%"
            },
            {
                branchName: "ME",
                placementPercentage: "73%"
            }
        ],
        overAllplacementPercentage: "78%",
        highestPackage: "1.1 Cr"
    }
]

export const IITBHUPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Facebook",
                ctc: "1.4 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.2 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "95%"
            },
            {
                branchName: "ECE",
                placementPercentage: "90%"
            },
            {
                branchName: "ME",
                placementPercentage: "85%"
            }
        ],
        overAllplacementPercentage: "90%",
        highestPackage: "1.4 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Facebook",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.1 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "90%"
            },
            {
                branchName: "ECE",
                placementPercentage: "85%"
            },
            {
                branchName: "ME",
                placementPercentage: "80%"
            }
        ],
        overAllplacementPercentage: "85%",
        highestPackage: "1.3 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Facebook",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "85%"
            },
            {
                branchName: "ECE",
                placementPercentage: "80%"
            },
            {
                branchName: "ME",
                placementPercentage: "75%"
            }
        ],
        overAllplacementPercentage: "80%",
        highestPackage: "1.2 Cr"
    }
]

export const IITJammuPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Adobe",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Oracle",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Cisco",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "90%"
            },
            {
                branchName: "ECE",
                placementPercentage: "85%"
            },
            {
                branchName: "ME",
                placementPercentage: "80%"
            }
        ],
        overAllplacementPercentage: "85%",
        highestPackage: "1.1 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Adobe",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Oracle",
                ctc: "0.9 Cr"
            },
            {
                companyName: "Cisco",
                ctc: "0.8 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "85%"
            },
            {
                branchName: "ECE",
                placementPercentage: "80%"
            },
            {
                branchName: "ME",
                placementPercentage: "75%"
            }
        ],
        overAllplacementPercentage: "80%",
        highestPackage: "1.0 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Adobe",
                ctc: "0.9 Cr"
            },
            {
                companyName: "Oracle",
                ctc: "0.8 Cr"
            },
            {
                companyName: "Cisco",
                ctc: "0.7 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "80%"
            },
            {
                branchName: "ECE",
                placementPercentage: "75%"
            },
            {
                branchName: "ME",
                placementPercentage: "70%"
            }
        ],
        overAllplacementPercentage: "75%",
        highestPackage: "0.9 Cr"
    }
]

export const IITPalakkadPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Uber",
                ctc: "1.1 Cr"
            },
            {
                companyName: "LinkedIn",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Twitter",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "89%"
            },
            {
                branchName: "ECE",
                placementPercentage: "85%"
            },
            {
                branchName: "ME",
                placementPercentage: "80%"
            }
        ],
        overAllplacementPercentage: "85%",
        highestPackage: "1.1 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Uber",
                ctc: "1.0 Cr"
            },
            {
                companyName: "LinkedIn",
                ctc: "0.9 Cr"
            },
            {
                companyName: "Twitter",
                ctc: "0.8 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "84%"
            },
            {
                branchName: "ECE",
                placementPercentage: "80%"
            },
            {
                branchName: "ME",
                placementPercentage: "75%"
            }
        ],
        overAllplacementPercentage: "80%",
        highestPackage: "1.0 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Uber",
                ctc: "0.9 Cr"
            },
            {
                companyName: "LinkedIn",
                ctc: "0.8 Cr"
            },
            {
                companyName: "Twitter",
                ctc: "0.7 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "79%"
            },
            {
                branchName: "ECE",
                placementPercentage: "75%"
            },
            {
                branchName: "ME",
                placementPercentage: "70%"
            }
        ],
        overAllplacementPercentage: "75%",
        highestPackage: "0.9 Cr"
    }
]

export const IITTirupatiPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Tesla",
                ctc: "1.4 Cr"
            },
            {
                companyName: "SpaceX",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Nvidia",
                ctc: "1.2 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "94%"
            },
            {
                branchName: "ECE",
                placementPercentage: "90%"
            },
            {
                branchName: "ME",
                placementPercentage: "85%"
            }
        ],
        overAllplacementPercentage: "90%",
        highestPackage: "1.4 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Tesla",
                ctc: "1.3 Cr"
            },
            {
                companyName: "SpaceX",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Nvidia",
                ctc: "1.1 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "89%"
            },
            {
                branchName: "ECE",
                placementPercentage: "85%"
            },
            {
                branchName: "ME",
                placementPercentage: "80%"
            }
        ],
        overAllplacementPercentage: "85%",
        highestPackage: "1.3 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Tesla",
                ctc: "1.2 Cr"
            },
            {
                companyName: "SpaceX",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Nvidia",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "84%"
            },
            {
                branchName: "ECE",
                placementPercentage: "80%"
            },
            {
                branchName: "ME",
                placementPercentage: "75%"
            }
        ],
        overAllplacementPercentage: "80%",
        highestPackage: "1.2 Cr"
    }
]


export const IITGoaPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Google",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "90%"
            },
            {
                branchName: "ECE",
                placementPercentage: "85%"
            },
            {
                branchName: "ME",
                placementPercentage: "80%"
            }
        ],
        overAllplacementPercentage: "85%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Google",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "85%"
            },
            {
                branchName: "ECE",
                placementPercentage: "80%"
            },
            {
                branchName: "ME",
                placementPercentage: "75%"
            }
        ],
        overAllplacementPercentage: "80%",
        highestPackage: "1.1 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Google",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "0.9 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "0.8 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "80%"
            },
            {
                branchName: "ECE",
                placementPercentage: "75%"
            },
            {
                branchName: "ME",
                placementPercentage: "70%"
            }
        ],
        overAllplacementPercentage: "75%",
        highestPackage: "1.0 Cr"
    }
]

export const IITBhilaiPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Facebook",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.1 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "92%"
            },
            {
                branchName: "ECE",
                placementPercentage: "88%"
            },
            {
                branchName: "ME",
                placementPercentage: "83%"
            }
        ],
        overAllplacementPercentage: "88%",
        highestPackage: "1.3 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Facebook",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "87%"
            },
            {
                branchName: "ECE",
                placementPercentage: "83%"
            },
            {
                branchName: "ME",
                placementPercentage: "78%"
            }
        ],
        overAllplacementPercentage: "83%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Facebook",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Google",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "82%"
            },
            {
                branchName: "ECE",
                placementPercentage: "78%"
            },
            {
                branchName: "ME",
                placementPercentage: "73%"
            }
        ],
        overAllplacementPercentage: "78%",
        highestPackage: "1.1 Cr"
    }
]

export const IITDharwadPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Amazon",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Facebook",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Apple",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "92%"
            },
            {
                branchName: "ECE",
                placementPercentage: "88%"
            },
            {
                branchName: "ME",
                placementPercentage: "83%"
            }
        ],
        overAllplacementPercentage: "88%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Amazon",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Facebook",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Apple",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "87%"
            },
            {
                branchName: "ECE",
                placementPercentage: "83%"
            },
            {
                branchName: "ME",
                placementPercentage: "78%"
            }
        ],
        overAllplacementPercentage: "83%",
        highestPackage: "1.1 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Amazon",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Facebook",
                ctc: "0.9 Cr"
            },
            {
                companyName: "Apple",
                ctc: "0.8 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "82%"
            },
            {
                branchName: "ECE",
                placementPercentage: "78%"
            },
            {
                branchName: "ME",
                placementPercentage: "73%"
            }
        ],
        overAllplacementPercentage: "78%",
        highestPackage: "1.0 Cr"
    }
]

export const IITDhanbadPlacementDataConstant: Array<IPlacementData> = [
    {
        placementYear: "2024",
        placementPackageData: [
            {
                companyName: "Google",
                ctc: "1.3 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "1.1 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "92%"
            },
            {
                branchName: "ECE",
                placementPercentage: "88%"
            },
            {
                branchName: "ME",
                placementPercentage: "83%"
            }
        ],
        overAllplacementPercentage: "88%",
        highestPackage: "1.3 Cr"
    },
    {
        placementYear: "2023",
        placementPackageData: [
            {
                companyName: "Google",
                ctc: "1.2 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "1.0 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "87%"
            },
            {
                branchName: "ECE",
                placementPercentage: "83%"
            },
            {
                branchName: "ME",
                placementPercentage: "78%"
            }
        ],
        overAllplacementPercentage: "83%",
        highestPackage: "1.2 Cr"
    },
    {
        placementYear: "2022",
        placementPackageData: [
            {
                companyName: "Google",
                ctc: "1.1 Cr"
            },
            {
                companyName: "Microsoft",
                ctc: "1.0 Cr"
            },
            {
                companyName: "Amazon",
                ctc: "0.9 Cr"
            }
        ],
        placementStatsImageData: {
            barGraphDataImage: "https://www.example.com",
            pieGraphDataImage: "https://www.example.com",
            lineGraphDataImage: "https://www.example.com"
        },
        placementBranchVsPlacementPercentage: [
            {
                branchName: "CSE",
                placementPercentage: "82%"
            },
            {
                branchName: "ECE",
                placementPercentage: "78%"
            },
            {
                branchName: "ME",
                placementPercentage: "73%"
            }
        ],
        overAllplacementPercentage: "78%",
        highestPackage: "1.1 Cr"
    }
]

