
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
				// Refined Cyberpunk color palette
				cyber: {
					// Base/Background colors
					'jet-black': '#0A0A0A',
					'charcoal': '#1E1E1E',
					// Primary neon accents
					'neon-magenta': '#FF2DA5',
					'electric-cyan': '#00FFFF',
					'lime-green': '#39FF14',
					'hot-violet': '#9D00FF',
					// Text colors
					'white': '#FFFFFF',
					'soft-gray': '#B0B0B0'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'neon-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor'
					},
					'50%': {
						boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor'
					}
				},
				'cyber-flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
					'25%': { opacity: '0.9' },
					'75%': { opacity: '0.95' }
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(100px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'light-trail': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(100%)',
						opacity: '0'
					}
				},
				'glow-rotate': {
					'0%': {
						filter: 'hue-rotate(0deg)'
					},
					'100%': {
						filter: 'hue-rotate(360deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'cyber-flicker': 'cyber-flicker 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'light-trail': 'light-trail 2s ease-in-out infinite',
				'glow-rotate': 'glow-rotate 4s linear infinite'
			},
			backgroundImage: {
				'cyber-grid': "linear-gradient(rgba(255, 45, 165, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
				'neon-gradient': 'linear-gradient(135deg, #FF2DA5, #00FFFF, #39FF14, #9D00FF)',
				'cyber-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #1E1E1E 100%)'
			},
			backgroundSize: {
				'cyber-grid': '50px 50px'
			},
			boxShadow: {
				'neon-magenta': '0 0 20px rgba(255, 45, 165, 0.5), 0 0 40px rgba(255, 45, 165, 0.3)',
				'neon-cyan': '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)',
				'neon-green': '0 0 20px rgba(57, 255, 20, 0.5), 0 0 40px rgba(57, 255, 20, 0.3)',
				'neon-violet': '0 0 20px rgba(157, 0, 255, 0.5), 0 0 40px rgba(157, 0, 255, 0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
