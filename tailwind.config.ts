import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				orange: {
					50: '#fff8ed',
					100: '#ffefd4',
					200: '#ffdca8',
					300: '#ffc570',
					400: '#fea73b',
					500: '#fe8c14',
					600: '#fe7d04', /* Primary brand color */
					700: '#cc5a02',
					800: '#a14608',
					900: '#82390c',
					950: '#461c04',
				},
				dharmic: {
					50: '#fff8ed',
					100: '#ffefd4',
					200: '#ffdca8',
					300: '#ffc570',
					400: '#fea73b',
					500: '#fe8c14',
					600: '#fe7d04',
					700: '#cc5a02',
					800: '#a14608',
					900: '#82390c',
					950: '#461c04',
				},
				sandstone: {
					50: '#faf6f2',
					100: '#f2ebe1',
					200: '#e4d4c3',
					300: '#d4b99f',
					400: '#c39c7a',
					500: '#b78762',
					600: '#a87256',
					700: '#8c5c47',
					800: '#734c3d',
					900: '#604036',
					950: '#331f1b',
				},
				sage: {
					50: '#f4f7f4',
					100: '#e5ece5',
					200: '#cddacd',
					300: '#abc0ad',
					400: '#84a187',
					500: '#668569',
					600: '#4f6b52',
					700: '#405643',
					800: '#374639',
					900: '#2f3a32',
					950: '#171e19',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				serif: ['Playfair Display', 'Georgia', 'serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'dharmic-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJoNnptLTYgNnY2YzAgOS45NCA4LjA2IDE4IDE4IDE4di02Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEyaC02em0tNi0xOGMtOS45NCAwLTE4IDguMDYtMTggMThoNmMwLTYuNjI3IDUuMzczLTEyIDEyLTEydi02em0wIDQydi02Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEyaC02YzAgOS45NCA4LjA2IDE4IDE4IDE4eiIgZmlsbD0icmdiYSgxMzEsIDEzNSwgMTUwLCAwLjA1KSIvPjwvZz48L3N2Zz4=')",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
