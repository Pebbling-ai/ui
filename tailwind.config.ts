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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				brand: {
					"blue": "#333333", // Changed to dark gray from blue
					"gray": {
						"50": "#F9FAFB",
						"100": "#F3F4F6",
						"200": "#E5E7EB",
						"300": "#D1D5DB", 
						"400": "#9CA3AF",
						"500": "#6B7280",
						"600": "#4B5563",
						"700": "#374151",
						"800": "#1F2937",
						"900": "#111827",
					}
				},
				// Adding a monochromatic palette
				mono: {
					"50": "#FAFAFA",
					"100": "#F5F5F5",
					"200": "#E5E5E5",
					"300": "#D4D4D4",
					"400": "#A3A3A3",
					"500": "#737373",
					"600": "#525252",
					"700": "#404040",
					"800": "#262626",
					"900": "#171717",
				},
				// Changing pulse to black tones
				pulse: {
					"50": "#FAFAFA",
					"100": "#F5F5F5",
					"200": "#E5E5E5",
					"300": "#D4D4D4",
					"400": "#A3A3A3",
					"500": "#737373",
					"600": "#525252",
					"700": "#404040",
					"800": "#262626",
					"900": "#171717",
				}
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'grotesk': ['"Space Grotesk"', 'sans-serif'],
				'brockmann': ['Brockmann', 'sans-serif'],
				'baskerville': ['"Baskerville Classico Std Roman"', 'serif', 'system-ui'],
				'alma-serif': ['"Alma Serif Regular"', 'serif', 'system-ui'],
				'thin-serif': ['"Baskerville"', '"Libre Baskerville"', '"Playfair Display"', 'serif'],
				'satoshi': ['"Satoshi"', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
				'card': '0 2px 10px rgba(0, 0, 0, 0.08)',
				'hover': '0 10px 25px rgba(0, 0, 0, 0.15)',
				'pulse': '0 10px 25px rgba(0, 0, 0, 0.25)', // Updated from purple shadow to black shadow
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'micro-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-2px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.8 }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'micro-bounce': 'micro-bounce 1s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
