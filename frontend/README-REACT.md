# Mentara React Frontend

## Architecture
- `src/components` reusable UI
- `src/pages` route-level screens
- `src/data` static feature configuration
- `src/hooks` reusable browser-state hooks
- `src/styles` global responsive design

## Routes
Home, Features, Contact, Affirmations, Poetry, Games, Journal, Scribble, Music, Breathing, Tracker, Focus, Booking, Resources, Support Circle, Profile, Settings, Login and Register.

## Slider fix
The wellness carousel uses one previous clone and one next clone. The next/previous controls are locked during the 620ms transition. When a clone is reached, React disables the transition for a single frame and jumps to the matching real slide. This means `3 -> 1` appears as one normal slide movement instead of travelling across every slide. Autoplay uses a timeout and cannot compete with a button transition.

## Run
```bash
npm install
npm run dev
```
