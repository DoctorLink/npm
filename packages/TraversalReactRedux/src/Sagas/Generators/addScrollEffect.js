import { eventChannel, END } from 'redux-saga'
import { call, take } from 'redux-saga/effects';

const scrollIntoView = (offset) => {
    return eventChannel(emitter => {
        const checkScroll = () => {
            if (window.pageYOffset === offset) {
                // setTimeout(() => emitter(END), 1000);
                emitter(END);
            }

            emitter(window.pageYOffset);
        }

        window.addEventListener('scroll', checkScroll);
        window.scrollTo({ top: offset, behavior: 'smooth' });

        // The subscriber must return an unsubscribe function
        return () => {
            window.removeEventListener('scroll', checkScroll);
        }
    })
}

export default function* addScrollEffect (effects, action) {
    if (action.containerRef && action.containerRef.current && 
        (window.pageYOffset || document.documentElement.scrollTop) > action.containerRef.current.offsetTop)
    {
        const scroll = yield call(scrollIntoView, action.containerRef.current.offsetTop)
        effects.push(take(scroll))
    }
    
    return effects;
}