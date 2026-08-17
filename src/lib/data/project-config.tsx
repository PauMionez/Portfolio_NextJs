export type ProjectConfig = {
    Title: string;
    Description: string;
    Link_name: string;
    Link: string;
}

export const projectConfig: ProjectConfig[] = [
    {
        Title: "Snake Games",
        Description: "Snake games using Next JS",
        Link_name: "snakegamepau.vercel.app",
        Link: "https://snakegamepau.vercel.app/"
    },
    {
        Title: "Hand Written ICR",
        Description: "Text recognition using TrOcr using ONNX runtime",
        Link_name: "PauMionez/HandWritten-OCR-II/releases/tag/v2",
        Link: "https://github.com/PauMionez/HandWritten-OCR-II.git"
    },
    {
        Title: "Alto Viewer",
        Description: "XML ALTO files with highlighted text regions",
        Link_name: "PauMionez/Alto-Viewer",
        Link: "https://github.com/PauMionez/Alto-Viewer.git"
    },
    {
        Title: "Note Taker",
        Description: "Meeting note taker",
        Link_name: "PauMionez/Meeting-Note-Taker",
        Link: "https://github.com/PauMionez/Meeting-Note-Taker"
    },
    {
        Title: "Brisbane Fireplace Service",
        Description: "Static Website for Brisbane Fireplace Service",
        Link_name: "Brisbane Fireplace Services",
        Link: "https://www.brisbanefireplaceservices.com.au"
    },
    {
        Title: "Gold Coast Fireplace Service",
        Description: "Static Website for Gold Coast Fireplace Service",
        Link_name: "Gold Coast Fireplace Services",
        Link: "https://www.goldcoastfireplaceservices.com.au"
    }
]