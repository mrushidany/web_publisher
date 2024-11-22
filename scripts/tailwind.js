tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'spoqa': ['Spoqa Han Sans', 'sans-serif']
            },
            backgroundImage: {
                'hero': "url('/images/bg/hero-bg.webp')",
            }
        },
        colors: {
            transparent: 'transparent',
            'white': {
                default: '#FFFFFF'
            },
            'dark': {
                default: '#242424'
            },
            'orange': {
                default: '#F58220'
            },
            'gray': {
                default: '#7D7D7D',
                100: '#575757',
                200: '#BBBBBB'
            }
        }
    }
}