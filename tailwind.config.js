export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: '#0D1117', panel: '#161B22', line: '#30363D', mute: '#8B949E', bosch: '#E21A22', ok: '#00FF66', threat: '#FF3344' },
    fontFamily: { mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'], sans: ['Inter', 'system-ui', 'sans-serif'] }
  } }
}
