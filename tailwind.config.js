module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
      screens: {
        sm: '640px',   
        md: '768px',    
        lg: '1024px',   
        xl: '1280px',
        '2xl': '1536px'
      },
      extend: {
        colors: {
          primary: {
            background: "var(--primary-background)",
            foreground: "var(--primary-foreground)",
            light: "var(--primary-light)",
            dark: "var(--primary-dark)"
          },
          secondary: {
            background: "var(--secondary-background)",
            foreground: "var(--secondary-foreground)",
            light: "var(--secondary-light)",
            dark: "var(--secondary-dark)"
          },
          accent: {
            color: "var(--accent-color)",
            foreground: "var(--accent-foreground)",
            light: "var(--accent-light)",
            dark: "var(--accent-dark)"
          },
          text: {
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
            muted: "var(--text-muted)",
            accent: "var(--text-accent)",
            light: "var(--text-light)"
          },
          background: {
            main: "var(--bg-main)",
            card: "var(--bg-card)",
            overlay: "var(--bg-overlay)",
            accent: "var(--bg-accent)",
            dark: "var(--bg-dark)"
          },
          border: {
            primary: "var(--border-primary)",
            secondary: "var(--border-secondary)",
            light: "var(--border-light)",
            dark: "var(--border-dark)"
          },
          // Component-specific colors
          header: {
            background: "var(--header-bg)",
            text: "var(--header-text)"
          },
          button: {
            background: "var(--button-bg)",
            text: "var(--button-text)",
            border: "var(--button-border)"
          },
          footer: {
            background: "var(--footer-bg)",
            text: "var(--footer-text)"
          },
          line: {
            background: "var(--line-bg)"
          }
        },
        fontSize: {
          'xs': 'var(--font-size-xs)',
          'sm': 'var(--font-size-sm)',
          'base': 'var(--font-size-base)',
          'lg': 'var(--font-size-lg)',
          'xl': 'var(--font-size-xl)',
          '2xl': 'var(--font-size-2xl)',
          '3xl': 'var(--font-size-3xl)',
          '4xl': 'var(--font-size-4xl)',
          '5xl': 'var(--font-size-5xl)',
          '6xl': 'var(--font-size-6xl)',
          '7xl': 'var(--font-size-7xl)'
        },
        fontWeight: {
          'normal': 'var(--font-weight-normal)',
          'medium': 'var(--font-weight-medium)',
          'semibold': 'var(--font-weight-semibold)',
          'bold': 'var(--font-weight-bold)'
        },
        lineHeight: {
          'xs': 'var(--line-height-xs)',
          'sm': 'var(--line-height-sm)',
          'base': 'var(--line-height-base)',
          'lg': 'var(--line-height-lg)',
          'xl': 'var(--line-height-xl)',
          '2xl': 'var(--line-height-2xl)',
          '3xl': 'var(--line-height-3xl)',
          '4xl': 'var(--line-height-4xl)',
          '5xl': 'var(--line-height-5xl)',
          '6xl': 'var(--line-height-6xl)',
          '7xl': 'var(--line-height-7xl)',
          '8xl': 'var(--line-height-8xl)',
          '9xl': 'var(--line-height-9xl)',
          '10xl': 'var(--line-height-10xl)',
          '11xl': 'var(--line-height-11xl)',
          '12xl': 'var(--line-height-12xl)'
        },
        spacing: {
          'xs': 'var(--spacing-xs)',
          'sm': 'var(--spacing-sm)',
          'base': 'var(--spacing-base)',
          'lg': 'var(--spacing-lg)',
          'xl': 'var(--spacing-xl)',
          '2xl': 'var(--spacing-2xl)',
          '3xl': 'var(--spacing-3xl)',
          '4xl': 'var(--spacing-4xl)',
          '5xl': 'var(--spacing-5xl)',
          '6xl': 'var(--spacing-6xl)',
          '7xl': 'var(--spacing-7xl)',
          '8xl': 'var(--spacing-8xl)',
          '9xl': 'var(--spacing-9xl)',
          '10xl': 'var(--spacing-10xl)',
          '11xl': 'var(--spacing-11xl)',
          '12xl': 'var(--spacing-12xl)',
          '13xl': 'var(--spacing-13xl)',
          '14xl': 'var(--spacing-14xl)',
          '15xl': 'var(--spacing-15xl)',
          '16xl': 'var(--spacing-16xl)',
          '17xl': 'var(--spacing-17xl)',
          '18xl': 'var(--spacing-18xl)',
          '19xl': 'var(--spacing-19xl)',
          '20xl': 'var(--spacing-20xl)',
          '21xl': 'var(--spacing-21xl)',
          '22xl': 'var(--spacing-22xl)',
          '23xl': 'var(--spacing-23xl)',
          '24xl': 'var(--spacing-24xl)',
          '25xl': 'var(--spacing-25xl)',
          '26xl': 'var(--spacing-26xl)',
          '27xl': 'var(--spacing-27xl)',
          '28xl': 'var(--spacing-28xl)',
          '29xl': 'var(--spacing-29xl)',
          '30xl': 'var(--spacing-30xl)',
          '31xl': 'var(--spacing-31xl)',
          '32xl': 'var(--spacing-32xl)',
          '33xl': 'var(--spacing-33xl)',
          '34xl': 'var(--spacing-34xl)',
          '35xl': 'var(--spacing-35xl)',
          '36xl': 'var(--spacing-36xl)',
          '37xl': 'var(--spacing-37xl)'
        },
        borderRadius: {
          'sm': 'var(--radius-sm)',
          'base': 'var(--radius-base)',
          'lg': 'var(--radius-lg)',
          'xl': 'var(--radius-xl)',
          '2xl': 'var(--radius-2xl)'
        }
      }
    },
    plugins: []
  };