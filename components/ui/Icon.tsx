import { SVGProps } from 'react'

export type IconName =
    | 'chip'
    | 'code'
    | 'github'
    | 'github-circle'
    | 'linkedin'
    | 'mail'
    | 'shield'
    | 'strategy'
    | 'twitter'
    | 'instagram'
    | 'pdf'
    | 'demo'
    | 'arrow-down'
    | 'arrow-up'
    | 'arrow-right'
    | 'arrow-up-right'
    | 'search'
    | 'calendar'
    | 'clock'

interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName
    size?: number
    className?: string
}

// SVG icon components defined inline
const iconComponents = {
    chip: () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <path
                d="M5.33301 16C5.33301 10.9717 5.33301 8.45757 6.8951 6.89547C8.45721 5.33337 10.9714 5.33337 15.9997 5.33337C21.0279 5.33337 23.5422 5.33337 25.1042 6.89547C26.6663 8.45757 26.6663 10.9717 26.6663 16C26.6663 21.0283 26.6663 23.5426 25.1042 25.1046C23.5422 26.6667 21.0279 26.6667 15.9997 26.6667C10.9714 26.6667 8.45721 26.6667 6.8951 25.1046C5.33301 23.5426 5.33301 21.0283 5.33301 16Z"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="M10.3093 21.6904C11.2856 22.6667 12.857 22.6667 15.9997 22.6667C17.0527 22.6667 17.9294 22.6667 18.6663 22.6299L22.6295 18.6667C22.6663 17.9298 22.6663 17.0531 22.6663 16C22.6663 12.8573 22.6663 11.286 21.6901 10.3097C20.7137 9.33337 19.1423 9.33337 15.9997 9.33337C12.857 9.33337 11.2856 9.33337 10.3093 10.3097C9.33301 11.286 9.33301 12.8573 9.33301 16C9.33301 19.1427 9.33301 20.714 10.3093 21.6904Z"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path
                d="M10.667 2.66663V5.33329M21.3337 2.66663V5.33329M16.0003 2.66663V5.33329M10.667 26.6666V29.3333M16.0003 26.6666V29.3333M21.3337 26.6666V29.3333M29.3337 21.3333H26.667M5.33366 10.6666H2.66699M5.33366 21.3333H2.66699M5.33366 16H2.66699M29.3337 10.6666H26.667M29.3337 16H26.667"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    code: (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="22"
            viewBox="0 0 19 22"
            fill="none"
        >
            <path
                d="M5.75 20.75V17.5079C5.75 16.9096 5.9339 16.3896 6.2304 15.9199C6.4338 15.5976 6.2945 15.1404 5.9271 15.0394C2.88394 14.2028 0.75 12.8577 0.75 8.39606C0.75 7.23611 1.13005 6.14556 1.79811 5.1964C1.96437 4.96018 2.04749 4.84208 2.06748 4.7351C2.08746 4.62813 2.05272 4.48852 1.98322 4.20932C1.70038 3.07292 1.71871 1.86619 2.14322 0.778228C2.14322 0.778228 3.02042 0.492418 5.01698 1.73969C5.47282 2.02447 5.70075 2.16686 5.9015 2.19871C6.1022 2.23056 6.3706 2.16384 6.9073 2.03041C7.6413 1.84795 8.3976 1.75 9.25 1.75C10.1024 1.75 10.8587 1.84795 11.5927 2.03041C12.1294 2.16384 12.3978 2.23056 12.5985 2.19871C12.7993 2.16686 13.0272 2.02447 13.483 1.73969C15.4796 0.492418 16.3568 0.778228 16.3568 0.778228C16.7813 1.86619 16.7996 3.07292 16.5168 4.20932C16.4473 4.48852 16.4125 4.62813 16.4325 4.7351C16.4525 4.84207 16.5356 4.96019 16.7019 5.1964C17.3699 6.14556 17.75 7.23611 17.75 8.39606C17.75 12.8577 15.6161 14.2028 12.5729 15.0394C12.2055 15.1404 12.0662 15.5976 12.2696 15.9199C12.5661 16.3896 12.75 16.9096 12.75 17.5079V20.75"
                stroke="#9E9E9E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    github: (props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            {...props}
        >
            <path
                d="M7.5 15.4256C4.92857 16.2936 2.78572 15.4256 1.5 12.75"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.5 16.5V14.0684C7.5 13.6197 7.63793 13.2297 7.8603 12.8774C8.01285 12.6357 7.90838 12.2928 7.63283 12.217C5.35046 11.5896 3.75 10.5808 3.75 7.23454C3.75 6.36458 4.03504 5.54667 4.53608 4.8348C4.66078 4.65763 4.72312 4.56906 4.73811 4.48882C4.7531 4.4086 4.72704 4.30389 4.67492 4.09449C4.46279 3.24219 4.47653 2.33714 4.79491 1.52117C4.79491 1.52117 5.45282 1.30681 6.95024 2.24227C7.29212 2.45585 7.46306 2.56264 7.61362 2.58653C7.76415 2.61042 7.96545 2.56038 8.36797 2.46031C8.91848 2.32346 9.4857 2.25 10.125 2.25C10.7643 2.25 11.3315 2.32346 11.882 2.46031C12.2846 2.56038 12.4858 2.61042 12.6364 2.58653C12.787 2.56264 12.9579 2.45585 13.2997 2.24227C14.7972 1.30681 15.4551 1.52117 15.4551 1.52117C15.7735 2.33714 15.7872 3.24219 15.5751 4.09449C15.523 4.30389 15.4969 4.4086 15.5119 4.48882C15.5269 4.56905 15.5892 4.65764 15.7139 4.8348C16.2149 5.54667 16.5 6.36458 16.5 7.23454C16.5 10.5808 14.8996 11.5896 12.6172 12.217C12.3416 12.2928 12.2371 12.6357 12.3897 12.8774C12.6121 13.2297 12.75 13.6197 12.75 14.0684V16.5"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    'github-circle': (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <path
                d="M8.68987 22.8174C9.21577 23.5872 10.8119 25.2302 12.989 25.6442M13.1525 29.3332C11.7812 29.1073 2.66675 26.1408 2.66675 16.1233C2.66675 6.75089 10.6693 2.6665 16.0011 2.6665C21.3329 2.6665 29.3334 6.75089 29.3334 16.1233C29.3334 26.1408 20.219 29.1073 18.8477 29.3332C18.8477 29.3332 18.569 24.7766 18.7317 23.9957C18.8942 23.2149 18.3403 21.9582 18.3403 21.9582C19.635 21.4738 21.6058 20.7794 22.2669 18.9164C22.7798 17.4708 23.1025 15.3716 21.6678 13.3984C21.6678 13.3984 22.0425 10.2106 21.3329 10.0871C20.6234 9.96366 18.5331 11.3491 18.5331 11.3491C17.9243 11.1765 16.5658 10.8462 16.0025 10.9057C15.439 10.8462 14.0758 11.1765 13.467 11.3491C13.467 11.3491 11.3767 9.96366 10.6672 10.0871C9.95772 10.2106 10.3323 13.3984 10.3323 13.3984C8.89763 15.3716 9.22029 17.4708 9.73328 18.9164C10.3944 20.7794 12.3652 21.4738 13.6598 21.9582C13.6598 21.9582 13.106 23.2149 13.2685 23.9957C13.4311 24.7766 13.1525 29.3332 13.1525 29.3332Z"
                stroke="#E5E5E5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    linkedin: (props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <path
                d="M5.99984 12.6665H5.33317C4.07609 12.6665 3.44756 12.6665 3.05702 13.057C2.6665 13.4476 2.6665 14.0761 2.6665 15.3332V26.6665C2.6665 27.9236 2.6665 28.5521 3.05702 28.9426C3.44756 29.3332 4.07609 29.3332 5.33317 29.3332H5.99984C7.25692 29.3332 7.88545 29.3332 8.27598 28.9426C8.6665 28.5521 8.6665 27.9236 8.6665 26.6665V15.3332C8.6665 14.0761 8.6665 13.4476 8.27598 13.057C7.88545 12.6665 7.25692 12.6665 5.99984 12.6665Z"
                stroke="#E5E5E5"
                strokeWidth="1.5"
            />
            <path
                d="M8.6665 5.6665C8.6665 7.32336 7.32336 8.6665 5.6665 8.6665C4.00965 8.6665 2.6665 7.32336 2.6665 5.6665C2.6665 4.00965 4.00965 2.6665 5.6665 2.6665C7.32336 2.6665 8.6665 4.00965 8.6665 5.6665Z"
                stroke="#E5E5E5"
                strokeWidth="1.5"
            />
            <path
                d="M16.4345 12.6665H15.3332C14.0761 12.6665 13.4476 12.6665 13.057 13.057C12.6665 13.4476 12.6665 14.0761 12.6665 15.3332V26.6665C12.6665 27.9236 12.6665 28.5521 13.057 28.9426C13.4476 29.3332 14.0761 29.3332 15.3332 29.3332H15.9998C17.2569 29.3332 17.8854 29.3332 18.276 28.9426C18.6665 28.5521 18.6665 27.9236 18.6665 26.6665L18.6666 22C18.6666 19.7909 19.3706 18 21.4504 18C22.4901 18 23.3332 18.8954 23.3332 20V26C23.3332 27.257 23.3332 27.8856 23.7237 28.2761C24.1141 28.6666 24.7428 28.6666 25.9998 28.6666H26.6648C27.9216 28.6666 28.55 28.6666 28.9405 28.2762C29.331 27.8858 29.3312 27.2574 29.3314 26.0006L29.3333 18.6668C29.3333 15.3532 26.1817 12.6668 23.0622 12.6668C21.2864 12.6668 19.7021 13.5373 18.6666 14.8985C18.6665 14.0584 18.6665 13.6384 18.4841 13.3265C18.3685 13.129 18.204 12.9645 18.0065 12.849C17.6946 12.6665 17.2746 12.6665 16.4345 12.6665Z"
                stroke="#E5E5E5"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    ),
    mail: (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <path
                d="M2.6665 8L11.8839 13.2226C15.282 15.148 16.7177 15.148 20.1158 13.2226L29.3332 8"
                stroke="#E5E5E5"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M2.68753 17.9673C2.77469 22.0548 2.81828 24.0984 4.32645 25.6124C5.83461 27.1262 7.93361 27.1789 12.1316 27.2844C14.7189 27.3494 17.2808 27.3494 19.8681 27.2844C24.0661 27.1789 26.165 27.1262 27.6733 25.6124C29.1814 24.0984 29.225 22.0548 29.3121 17.9673C29.3402 16.653 29.3402 15.3466 29.3121 14.0324C29.225 9.94498 29.1814 7.90129 27.6733 6.38739C26.165 4.87348 24.0661 4.82075 19.8681 4.71527C17.2808 4.65025 14.7189 4.65025 12.1316 4.71525C7.93361 4.82072 5.83461 4.87345 4.32644 6.38737C2.81826 7.90128 2.77469 9.94497 2.68752 14.0324C2.65949 15.3466 2.6595 16.653 2.68753 17.9673Z"
                stroke="#E5E5E5"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    ),
    shield: (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <path
                d="M24.9451 4.66041C22.422 3.40505 19.3345 2.66663 16 2.66663C12.6655 2.66663 9.578 3.40505 7.05488 4.66041C5.81757 5.27604 5.19892 5.58385 4.59947 6.55167C4 7.51949 4 8.4566 4 10.3308V14.9828C4 22.5606 10.0565 26.7738 13.564 28.5784C14.5423 29.0817 15.0313 29.3333 16 29.3333C16.9687 29.3333 17.4577 29.0817 18.4359 28.5784C21.9435 26.7738 28 22.5606 28 14.9828V10.3308C28 8.45661 28 7.51951 27.4005 6.55167C26.8011 5.58384 26.1824 5.27604 24.9451 4.66041Z"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    strategy: (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <path
                d="M11.524 4.19408L9.25088 5.24479C5.75029 6.86288 4 7.67192 4 8.99996C4 10.328 5.75029 11.137 9.25089 12.7551L11.524 13.8058C13.7269 14.8241 14.8285 15.3333 16 15.3333C17.1715 15.3333 18.2731 14.8241 20.476 13.8058L22.7491 12.7551C26.2497 11.137 28 10.328 28 8.99996C28 7.67192 26.2497 6.86288 22.7491 5.24479L20.476 4.19408C18.2731 3.17577 17.1715 2.66663 16 2.66663C14.8285 2.66663 13.7269 3.17577 11.524 4.19408Z"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M27.7173 14.7963C27.9057 15.0612 28 15.3375 28 15.6412C28 16.9503 26.2497 17.7479 22.7491 19.3429L20.476 20.3787C18.2731 21.3824 17.1715 21.8844 16 21.8844C14.8285 21.8844 13.7269 21.3824 11.524 20.3787L9.25089 19.3429C5.75029 17.7479 4 16.9503 4 15.6412C4 15.3375 4.09423 15.0612 4.28267 14.7963"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M27.1689 21.6881C27.7229 22.1294 28 22.5693 28 23.0901C28 24.3993 26.2497 25.1968 22.7491 26.7918L20.476 27.8276C18.2731 28.8314 17.1715 29.3333 16 29.3333C14.8285 29.3333 13.7269 28.8314 11.524 27.8276L9.25089 26.7918C5.75029 25.1968 4 24.3993 4 23.0901C4 22.5693 4.27704 22.1294 4.83112 21.6881"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    twitter: (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <path
                d="M4 28L14.0645 17.9355M14.0645 17.9355L4 4H10.6667L17.9355 14.0645M14.0645 17.9355L21.3333 28H28L17.9355 14.0645M28 4L17.9355 14.0645"
                stroke="#E5E5E5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    pdf: (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M19 11C19 10.1825 19 9.4306 18.8478 9.06306C18.6955 8.69552 18.4065 8.40649 17.8284 7.82843L13.0919 3.09188C12.593 2.593 12.3436 2.34355 12.0345 2.19575C11.9702 2.165 11.9044 2.13772 11.8372 2.11401C11.5141 2 11.1614 2 10.4558 2C7.21082 2 5.58831 2 4.48933 2.88607C4.26731 3.06508 4.06508 3.26731 3.88607 3.48933C3 4.58831 3 6.21082 3 9.45584V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H19M12 2.5V3C12 5.82843 12 7.24264 12.8787 8.12132C13.7574 9 15.1716 9 18 9H18.5"
                stroke="#9E9E9E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21 14H19C18.4477 14 18 14.4477 18 15V16.5M18 16.5V19M18 16.5H20.5M7 19V17M7 17V14H8.5C9.32843 14 10 14.6716 10 15.5C10 16.3284 9.32843 17 8.5 17H7ZM12.5 14H13.7857C14.7325 14 15.5 14.7462 15.5 15.6667V17.3333C15.5 18.2538 14.7325 19 13.7857 19H12.5V14Z"
                stroke="#9E9E9E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    demo: (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M4 17L10 11L4 5"
                stroke="#9E9E9E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 19H20"
                stroke="#9E9E9E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    'arrow-down': (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    'arrow-up': (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M18 15C18 15 13.5811 9 12 9C10.4188 9 6 15 6 15"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),

    'arrow-right': (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    'arrow-up-right': (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
        >
            <path
                d="M22 10L8 24"
                stroke="#9E9E9E"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M10.6666 8.25054C10.6666 8.25054 21.3972 7.34598 23.0256 8.97438C24.6541 10.6028 23.7493 21.3333 23.7493 21.3333"
                stroke="#9E9E9E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    search: (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
        >
            <path
                d="M12.75 12.75L15.75 15.75"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25Z"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    instagram: (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M1.5 12C1.5 6.77208 1.5 4.15812 3.07906 2.57906C4.65812 1 7.27208 1 12.5 1C17.7279 1 20.3419 1 21.9209 2.57906C23.5 4.15812 23.5 6.77208 23.5 12C23.5 17.2279 23.5 19.8419 21.9209 21.4209C20.3419 23 17.7279 23 12.5 23C7.27208 23 4.65812 23 3.07906 21.4209C1.5 19.8419 1.5 17.2279 1.5 12Z"
                stroke="#FAFAFA"
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <path
                d="M17.5 12C17.5 15.0376 15.0376 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12C6.5 8.96243 8.96243 6.5 12 6.5C15.0376 6.5 17.5 8.96243 17.5 12Z"
                stroke="#FAFAFA"
                strokeWidth="1.8"
            />
            <path
                d="M18.5 5.5H18.49"
                stroke="#FAFAFA"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    clock: (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M16 2V6M8 2V6"
                stroke="#DADADA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
                stroke="#DADADA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 10H21"
                stroke="#DADADA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    calendar: (_props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#DADADA"
                strokeWidth="1.5"
            />
            <path
                d="M12 8V12L14 14"
                stroke="#DADADA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
}

export function Icon({ name, size = 24, className = '', ...props }: IconProps) {
    const IconComponent = iconComponents[name]

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`)
        return null
    }

    return (
        <IconComponent
            width={size}
            height={size}
            className={className}
            {...props}
        />
    )
}
