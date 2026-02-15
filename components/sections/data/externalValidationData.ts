export interface ValidationItem {
    id: string
    quote: string
    author: {
        name: string
        title: string
        organization: string
        avatar: string
    }
}

export const validationData: ValidationItem[] = [
    // {
    //     id: '1',
    //     quote: 'A rare example of academic theory successfully transitioned into a hardened operational environment.',
    //     author: {
    //         name: 'Dr. Amara Mensah',
    //         title: 'Cryptography Researcher',
    //         organization: 'University Research Group',
    //         avatar: '/images/avatars/amara-mensah.svg'
    //     }
    // },
]
