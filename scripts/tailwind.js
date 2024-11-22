tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'spoqa': ['Spoqa Han Sans', 'sans-serif']
            },
            backgroundImage: {
                'hero': "url('/images/bg/hero-bg.webp')",
                'event': "url('/images/bg/event.webp')",
                'christmas': "url('/images/bg/christmas.webp')",
            }
        },
        colors: {
            transparent: 'transparent',
            'white': {
                default: '#FFFFFF',
                100: '#ECEFF1'
            },
            'dark': {
                default: '#242424',
                100: '#2C2C2C'
            },
            'orange': {
                default: '#F58220'
            },
            'gray': {
                default: '#7D7D7D',
                100: '#575757',
                200: '#BBBBBB'
            },
            'blue': {
                default: '#00427A'
            }
        }
    }
}