// this is constants related page for the IIT college page

import { IIITCollegeCard } from "../../../interfaces/interfaces";
import IITGandhinagarLogoImage from "../../../assets/images/IIT/logos/iit-gandhinagar.webp"
import IITBombayLogoImage from "../../../assets/images/IIT/logos/iit-bombay.webp"
import IITDelhiLogoImage from "../../../assets/images/IIT/logos/iit-delhi.webp"
import IITKanpurLogoImage from "../../../assets/images/IIT/logos/iit-kanpur.webp"
import IITKharagpurLogoImage from "../../../assets/images/IIT/logos/iit-kharagpur.webp"
import IITMadrasLogoImage from "../../../assets/images/IIT/logos/iit-madras.webp"
import IITRoorkeeLogoImage from "../../../assets/images/IIT/logos/iit-roorkee.webp"
import IITGuwahatiLogoImage from "../../../assets/images/IIT/logos/iit-guwahati.webp"
import IITHyderabadLogoImage from "../../../assets/images/IIT/logos/iit-hyderabad.webp"
import IITIndoreLogoImage from "../../../assets/images/IIT/logos/iit-indore.webp"
import IITBHULogoImage from "../../../assets/images/IIT/logos/iit-bhu.webp"
import IITRoparLogoImage from "../../../assets/images/IIT/logos/iit-ropar.webp"
import IITMandiLogoImage from "../../../assets/images/IIT/logos/iit-mandi.webp"
import IITPatnaLogoImage from "../../../assets/images/IIT/logos/iit-patna.webp"
import IITBhubaneswarLogoImage from "../../../assets/images/IIT/logos/iit-bhubhneshwar.webp"
import IITJodhpurLogoImage from "../../../assets/images/IIT/logos/iit-jodhpur.webp"
import IITDhanbadLogoImage from "../../../assets/images/IIT/logos/IIT-ISM-Dhanbad.webp"
import IITBhilaiLogoImage from "../../../assets/images/IIT/logos/iit-bhilai.webp"
import IITGoaLogoImage from "../../../assets/images/IIT/logos/IITGoa-p-500.webp"
import IITPalakkadLogoImage from "../../../assets/images/IIT/logos/iit-palakkad.webp"
import IITTirupatiLogoImage from "../../../assets/images/IIT/logos/iit-tirupati.webp"

// this is the list of IIT colleges
export const IITCollegeCardConstants : Array<IIITCollegeCard> = [
    {
        collegeName : "IIT BOMBAY", 
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-bombay", 
        imageLink : IITBombayLogoImage
    },
    {
        collegeName : "IIT DELHI", 
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-delhi", 
        imageLink : IITDelhiLogoImage
    },
    {
        collegeName : "IIT KANPUR", 
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-kanpur", 
        imageLink : IITKanpurLogoImage
    },
    {
        collegeName : "IIT KHARAGPUR", 
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-kharagpur", 
        imageLink : IITKharagpurLogoImage
    },
    {
        collegeName : "IIT MADRAS",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-madras", 
        imageLink : IITMadrasLogoImage
    },
    {
        collegeName : "IIT ROORKEE",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-roorkee", 
        imageLink : IITRoorkeeLogoImage
    },
    {
        collegeName : "IIT GUWAHATI",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-guwahati", 
        imageLink : IITGuwahatiLogoImage
    },
    {
        collegeName : "IIT HYDERABAD",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-hyderabad", 
        imageLink : IITHyderabadLogoImage
    },
    {
        collegeName : "IIT INDORE",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-indore", 
        imageLink : IITIndoreLogoImage
    },
    {
        collegeName : "IIT BHU",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-bhu", 
        imageLink : IITBHULogoImage
    },
    {
        collegeName : "IIT ROPAR",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-ropar", 
        imageLink : IITRoparLogoImage
    },
    {
        collegeName : "IIT GANDHINAGAR",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-gandhinagar", 
        imageLink : IITGandhinagarLogoImage
    },  
    {
        collegeName : "IIT MANDI",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-mandi", 
        imageLink : IITMandiLogoImage
    },
    {
        collegeName : "IIT PATNA",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-patna", 
        imageLink : IITPatnaLogoImage
    },
    {
        collegeName : "IIT BHUBANESWAR",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-bhubaneswar", 
        imageLink : IITBhubaneswarLogoImage
    },
    {
        collegeName : "IIT ROPAR",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-ropar", 
        imageLink : IITRoparLogoImage
    },
    {
        collegeName : "IIT GANDHINAGAR",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-gandhinagar", 
        imageLink : IITGandhinagarLogoImage
    },
    {
        collegeName : "IIT JODHPUR",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-jodhpur", 
        imageLink : IITJodhpurLogoImage
    }, 
    {
        collegeName : "IIT DHANBAD",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-dhanbad", 
        imageLink : IITDhanbadLogoImage
    },
    {
        collegeName : "IIT BHILAI",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-bhilai", 
        imageLink : IITBhilaiLogoImage
    }, 
    {
        collegeName : "IIT GOA",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-goa", 
        imageLink : IITGoaLogoImage
    }, 
    {
        collegeName : "IIT PALAKKAD",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-palakkad", 
        imageLink : IITPalakkadLogoImage
    },
    {
        collegeName : "IIT TIRUPATI",
        collegeDescription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus maxime hic nihil tenetur nesciunt officiis magnam ut unde qui a quis iure, soluta adipisci praesentium veritatis voluptas neque corruptiHarum dolore nesciunt rerum dolorum fuga repellendus, dicta, eum necessitatibus, velit quibusdam quos ad voluptatem ratione repudiandae. Reprehenderit saepe architecto doloremque, adipisci delectus fugiat distinctio qui ipsum eaque? Aperiam, pariatur.",
        buttonRoute : "/college/iit/iit-tirupati", 
        imageLink : IITTirupatiLogoImage
    }
    

]