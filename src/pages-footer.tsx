import * as React from 'react'
import { createRoot } from 'react-dom/client'
import MurmurationWordmark from '../components/ui/murmuration-wordmark'
const mount = document.getElementById('pages-flock-footer')
if (mount) createRoot(mount).render(<MurmurationWordmark word="Pagès" height="clamp(300px, 40vw, 480px)" birds={4200} flyFor={5} holdFor={4} preset="dusk" />)
