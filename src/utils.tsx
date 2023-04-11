export const fetchAPI = async (data: string) => {
    async function request<TResponse>(url: string): Promise<TResponse> {
        const response = await fetch(url)
        const data = await response.json()
        return (data as TResponse)
    }
    try{
        const output = await request(`https://web-dev.dev.kimo.ai/v1/${data}`);
        return output
    }catch (error) {
        return {
          notFound: true,
          message:error
        };
      }
    
    
}


export type HighlightType = {
    title: string,
    description: string,
    image: string
}

export type CategoryType = {
    name: string,
    activities: [
        {
            title: string
        }
    ]

}

export type MobileNavbarProps = {
    setMenuState: React.Dispatch<React.SetStateAction<boolean>>,
    highlights: {
        title: string,
        description: string,
        image: string
    }[]
};

export type SlugProps = {
    details: {
        name: string,
        description: string,
        image: string,
        activities: [
            {
                name: string
            }
        ]
    }

    highlights: {
        title: string,
        description: string,
        image: string
    }[]
};


export const guideDetails = [{
    name: 'Hadwin Malone',
    guideSince: '2012',
    profilePic: '../assets/guide-img.png'
}]

export const HighlightNames = [
    'Surfing',
    'Traditional Festivals',
    'Volcanoes'
]

